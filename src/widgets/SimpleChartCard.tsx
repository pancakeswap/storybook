import React, { useId, useMemo } from 'react'
import styled, { useTheme } from 'styled-components'
import { PerpsPanel } from './primitives'

/**
 * Stateless Simple-mode chart card. Pure presentation — consumer owns
 * timeframe state, the price-series array, and pre-formatted axis labels.
 * The widget renders a smooth gradient line + dashed current-price marker
 * and the timeframe pill row above the canvas.
 *
 * When `points` is empty, the widget falls back to a hand-tuned cubic
 * path so the showcase / pancake-frontend Simple page look identical
 * out of the box. When `points.length >= 2`, the widget projects the
 * series onto the 1000×360 viewbox and draws a Catmull-Rom spline
 * (converted to cubic Beziers) — visual smoothness wins over precision.
 */
export interface SimpleChartCardProps {
  /** Active timeframe pill label, e.g. '1d' | '1h' | '30m' | '15m' | '5m'. */
  timeframe: string
  /** All timeframe options to render as pills, in render order. */
  timeframes: readonly string[]
  onTimeframeChange: (tf: string) => void

  /** Smoothed series ordered oldest → newest. SVG path is built from these
   *  via a Catmull-Rom-to-Bezier or simple quadratic-curve smoothing — match
   *  the look of the original page's hand-tuned cubic path. */
  points: ReadonlyArray<{ time: number; price: number }>
  /** Pre-formatted current-price label for the trailing pill (e.g. "640"). */
  currentPriceLabel: string

  /** Pre-formatted Y axis ticks, top→bottom (e.g. ['670','660','650','640','630','620','610','USD']). */
  yTicks: readonly string[]
  /** Pre-formatted X axis labels, left→right (e.g. ['5:00 AM', …]). */
  xTicks: readonly string[]
}

// ── Styled bits (ported verbatim from SimplePerpsPage) ─────────

const Card = styled(PerpsPanel)`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 24px;
  padding: 16px 24px 24px;
  height: 480px;
  align-self: stretch;
  position: relative;
  overflow: hidden;

  /* PerpsPanel injects an inner <div>; flatten its background + padding so
     the chart fills edge-to-edge while keeping our outer card framing. */
  & > div {
    background: transparent;
    padding: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`

const TfRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 24px;
`

const TfBtn = styled.button<{ $active: boolean }>`
  border: 0;
  background: transparent;
  font-family: inherit;
  padding: 0;
  font-size: ${({ $active }) => ($active ? '13px' : '14px')};
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  color: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.textSubtle)};
  cursor: pointer;
`

const Canvas = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Grid = styled.div`
  flex: 1;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 8px;
`

const SvgWrap = styled.div`
  position: relative;
  overflow: visible;
`

const YAxis = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSubtle};
  text-align: left;
  padding-top: 6px;
  padding-bottom: 24px;
`

const XAxis = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSubtle};
  padding-top: 8px;
`

const CurrentPill = styled.span`
  position: absolute;
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.invertedContrast};
  font-size: 16px;
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  pointer-events: none;
`

// ── Path geometry helpers ───────────────────────────────────────

const VBW = 1000
const VBH = 360
const PADDING_TOP = 20
const PADDING_BOTTOM = 70

/**
 * Project series → SVG coords. Returns line+area path strings AND the y of
 * the last point (used to position the current-price pill + dashed marker).
 */
function buildPaths(points: ReadonlyArray<{ time: number; price: number }>): {
  line: string
  area: string
  endY: number
} | null {
  if (points.length < 2) return null

  const minP = Math.min(...points.map((p) => p.price))
  const maxP = Math.max(...points.map((p) => p.price))
  const range = maxP - minP || 1

  const xs = points.map((_, i) => (i / (points.length - 1)) * VBW)
  const ys = points.map((p) => {
    const norm = (p.price - minP) / range // 0 = lowest, 1 = highest
    return PADDING_TOP + (1 - norm) * (VBH - PADDING_TOP - PADDING_BOTTOM)
  })

  // Catmull-Rom → cubic Bezier for visual smoothness without a library.
  let line = `M ${xs[0].toFixed(2)} ${ys[0].toFixed(2)}`
  for (let i = 0; i < xs.length - 1; i++) {
    const p0x = xs[i - 1] ?? xs[i]
    const p0y = ys[i - 1] ?? ys[i]
    const p1x = xs[i]
    const p1y = ys[i]
    const p2x = xs[i + 1]
    const p2y = ys[i + 1]
    const p3x = xs[i + 2] ?? xs[i + 1]
    const p3y = ys[i + 2] ?? ys[i + 1]

    const c1x = p1x + (p2x - p0x) / 6
    const c1y = p1y + (p2y - p0y) / 6
    const c2x = p2x - (p3x - p1x) / 6
    const c2y = p2y - (p3y - p1y) / 6

    line += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${p2x.toFixed(2)} ${p2y.toFixed(2)}`
  }

  const area = `${line} L ${VBW} ${VBH} L 0 ${VBH} Z`
  const endY = ys[ys.length - 1]
  return { line, area, endY }
}

// Hand-tuned fallback path (same numbers as the original showcase page).
const FALLBACK_LINE = `
  M 0 290
  C 60 290, 110 280, 170 250
  C 230 220, 290 175, 360 145
  C 420 120, 470 110, 510 130
  C 560 150, 590 195, 660 230
  C 720 260, 770 280, 830 250
  C 880 230, 920 195, 960 200
  L 1000 200
`
const FALLBACK_AREA = `
  M 0 290
  C 60 290, 110 280, 170 250
  C 230 220, 290 175, 360 145
  C 420 120, 470 110, 510 130
  C 560 150, 590 195, 660 230
  C 720 260, 770 280, 830 250
  C 880 230, 920 195, 960 200
  L 1000 200
  L 1000 360
  L 0 360
  Z
`
const FALLBACK_END_Y = 200

// ── Component ───────────────────────────────────────────────────

export const SimpleChartCard: React.FC<SimpleChartCardProps> = ({
  timeframe,
  timeframes,
  onTimeframeChange,
  points,
  currentPriceLabel,
  yTicks,
  xTicks,
}) => {
  const theme = useTheme()
  // Stable per-instance gradient id so multiple cards on a page don't fight
  // for the same `<defs>` symbol.
  const reactId = useId().replace(/:/g, '')
  const gradientId = `simple-chart-fill-${reactId}`

  const lineColor = theme?.colors?.primary ?? '#1FC7D4'

  const computed = useMemo(() => buildPaths(points), [points])
  const linePath = computed?.line ?? FALLBACK_LINE
  const areaPath = computed?.area ?? FALLBACK_AREA
  const endY = computed?.endY ?? FALLBACK_END_Y

  return (
    <Card>
      <TfRow role="tablist">
        {timeframes.map((t) => (
          <TfBtn
            key={t}
            type="button"
            role="tab"
            aria-selected={timeframe === t}
            $active={timeframe === t}
            onClick={() => onTimeframeChange(t)}
          >
            {t}
          </TfBtn>
        ))}
      </TfRow>
      <Canvas>
        <Grid>
          <SvgWrap>
            <svg
              viewBox={`0 0 ${VBW} ${VBH}`}
              preserveAspectRatio="none"
              style={{ width: '100%', height: '100%', display: 'block' }}
              aria-hidden
            >
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={lineColor} stopOpacity="0.30" />
                  <stop offset="100%" stopColor={lineColor} stopOpacity="0.02" />
                </linearGradient>
              </defs>
              {/* Filled area below the curve */}
              <path d={areaPath} fill={`url(#${gradientId})`} />
              {/* Line on top */}
              <path d={linePath} fill="none" stroke={lineColor} strokeWidth="2" />
              {/* Dashed current-price horizontal marker */}
              <line
                x1="0"
                y1={endY}
                x2={VBW - 10}
                y2={endY}
                stroke={lineColor}
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.7"
              />
            </svg>
            <CurrentPill style={{ right: -8, top: `calc(${endY}/${VBH} * 100% - 14px)` }}>
              {currentPriceLabel}
            </CurrentPill>
          </SvgWrap>
          <YAxis aria-hidden>
            {yTicks.map((t, i) => (
              <span key={`${t}-${i}`}>{t}</span>
            ))}
          </YAxis>
        </Grid>
        <XAxis aria-hidden>
          {xTicks.map((t, i) => (
            <span key={`${t}-${i}`}>{t}</span>
          ))}
        </XAxis>
      </Canvas>
    </Card>
  )
}
