import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { Card } from '../primitives/Card'
import { Text } from '../primitives/Text'
import { Heading } from '../primitives/Heading'
import { CandleGraphIcon, LineGraphIcon } from '../primitives/Icons'

/**
 * Stateless chart card used on the Stock page (Figma 7-11516). Header shows
 * the active stock name + ticker + market-cap chip + price + 24h change. The
 * SVG candlestick chart is mock-data only — consumers replace the `candles`
 * prop with real OHLC samples.
 */
export interface StockCandle {
  /** y open value (0–100 scale relative to candleMax) */
  open: number
  /** y close value (0–100 scale relative to candleMax) */
  close: number
  /** wick high */
  high: number
  /** wick low */
  low: number
}

export type StockTimeRange = '1d' | '1w' | '1m' | '3m' | '1y' | 'All'
export type StockChartType = 'candle' | 'line'

export interface StockChartCardProps {
  name: string
  symbol: string
  /** Source-list tag rendered next to the name ("xStocks" / "Ondo"). */
  source?: string
  /** Token logo URLs — first successful one is used. */
  logoUrls?: string[]
  /** Default meta value (TVL). */
  tvlLabel?: string
  tvlValue?: string
  /** Hover meta value (real-world market cap). */
  marketCapLabel?: string
  marketCapValue?: string

  /** Pre-formatted USD price, e.g. "$235.31" */
  price: string
  /** Pre-formatted absolute change, e.g. "$8.82" */
  changeAbs: string
  /** 24h change percent — sign chooses color. */
  changePct: number

  candles: readonly StockCandle[]

  timeRange: StockTimeRange
  onTimeRangeChange?: (next: StockTimeRange) => void
  chartType?: StockChartType
  onChartTypeChange?: (next: StockChartType) => void
}

const TIME_RANGES: readonly StockTimeRange[] = ['1d', '1w', '1m', '3m', '1y', 'All']

const Root = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
`

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px 16px;

  /* Below 1100px the page renders a standalone top-strip carrying the same
     asset info, so the chart card hides its in-card header to avoid
     duplication. */
  @media (max-width: 1099px) {
    display: none;
  }
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`

const Logo = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.disabled};
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const LogoFallback = styled.div`
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const HeaderTitleCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  font-variant-numeric: tabular-nums;
`

// Cross-fades the meta line between "TVL $X" (default) and "Market Cap $Y"
// (hover). Same grid trick as StockInfoCard's TvlRow.
const MetaSwap = styled.div`
  display: inline-grid;
  cursor: default;
  & > * { grid-area: 1 / 1; }
`

const MetaPair = styled.div<{ $hover?: boolean }>`
  display: flex;
  align-items: baseline;
  gap: 8px;
  white-space: nowrap;
  transition: opacity 0.18s ease;
  opacity: ${({ $hover }) => ($hover ? 0 : 1)};

  ${MetaSwap}:hover & {
    opacity: ${({ $hover }) => ($hover ? 1 : 0)};
  }
`

const SourcePill = styled.span<{ $tone: 'ondo' | 'xstocks' | 'default' }>`
  display: inline-flex;
  align-items: center;
  padding: 1.5px 6px;
  border-radius: 999px;
  font-family: 'Kanit', sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12px;
  background: ${({ $tone, theme }) =>
    $tone === 'ondo'
      ? 'rgba(118, 69, 217, 0.10)'
      : $tone === 'xstocks'
        ? 'rgba(2, 145, 157, 0.10)'
        : theme.colors.tertiary};
  color: ${({ $tone, theme }) =>
    $tone === 'ondo'
      ? theme.colors.secondary
      : $tone === 'xstocks'
        ? theme.colors.primary60 ?? theme.colors.primary
        : theme.colors.textSubtle};
  border: 2px solid
    ${({ $tone, theme }) =>
      $tone === 'ondo'
        ? 'rgba(118, 69, 217, 0.20)'
        : $tone === 'xstocks'
          ? 'rgba(2, 145, 157, 0.20)'
          : theme.colors.tertiary};
`

function chartSourceTone(s?: string): 'ondo' | 'xstocks' | 'default' {
  const v = (s ?? '').toLowerCase()
  if (v.includes('ondo')) return 'ondo'
  if (v.includes('xstock')) return 'xstocks'
  return 'default'
}

const PriceCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`

const ChartFrame = styled.div<{ $dragging: boolean }>`
  position: relative;
  flex: 1;
  min-height: 0;
  margin: 0 16px;
  cursor: ${({ $dragging }) => ($dragging ? 'grabbing' : 'grab')};
  user-select: none;
  touch-action: none;
`

const ChartSvg = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 8px 24px 16px;
`

const RangeGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

const RangePill = styled.button<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary60 ?? theme.colors.primary : theme.colors.textSubtle};
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  cursor: pointer;
  transition: color 0.12s;
  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.text};
  }
`

const ChartToggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 2px;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.textSubtle};
  cursor: pointer;
  &:hover { color: ${({ theme }) => theme.colors.text}; }
`

const HoverCrosshairV = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 0;
  border-left: 1px dashed ${({ theme }) => theme.colors.textSubtle};
  opacity: 0.6;
  pointer-events: none;
`

const HoverCrosshairH = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 0;
  border-top: 1px dashed ${({ theme }) => theme.colors.textSubtle};
  opacity: 0.6;
  pointer-events: none;
`

const HoverTooltip = styled.div`
  position: absolute;
  pointer-events: none;
  background: ${({ theme }) => theme.colors.backgroundAlt ?? theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 12px;
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 132px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  font-family: 'Kanit', sans-serif;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  transform: translate(calc(-100% - 16px), -50%);
`

const TooltipPrice = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 700;
`

const TooltipMeta = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 13px;
  font-weight: 400;
`

function changeColor(pct: number) {
  if (pct > 0) return 'success' as const
  if (pct < 0) return 'failure' as const
  return 'textSubtle' as const
}

function formatPct(pct: number) {
  const sign = pct > 0 ? '+' : ''
  return `${sign}${pct.toFixed(2)}%`
}

const pad = (n: number) => String(n).padStart(2, '0')

// Mock timestamps for the hover tooltip — real callers will eventually pass
// timestamps per candle. Index 0 = oldest, last = "now".
function mockHoverDate(range: StockTimeRange, index: number, total: number): string {
  const stepMs =
    range === '1d' ? 5 * 60_000 :
    range === '1w' ? 60 * 60_000 :
    range === '1m' ? 24 * 60 * 60_000 :
    range === '3m' ? 3 * 24 * 60 * 60_000 :
    range === '1y' ? 30 * 24 * 60 * 60_000 :
    90 * 24 * 60 * 60_000
  const t = new Date(Date.now() - (total - 1 - index) * stepMs)
  return `${pad(t.getMonth() + 1)}-${pad(t.getDate())}-${t.getFullYear()}`
}

function mockHoverTime(range: StockTimeRange, index: number): string {
  if (range === '1d') {
    const base = 9 * 60 + 30 + index * 5
    return `${pad(Math.floor(base / 60) % 24)}:${pad(base % 60)}`
  }
  if (range === '1w') {
    return `${pad((9 + index) % 24)}:00`
  }
  return '16:00'
}

/* Render the candlestick SVG. The candles array is rescaled to fit the
 * 1000×400 viewBox; consumers don't have to think about pixel units.
 * `panX` / `panY` (in viewBox units) shift the rendered candles for the
 * drag-to-pan behavior on the parent. */
function CandleChart({
  candles,
  color,
  panX = 0,
  panY = 0,
  zoom = 1,
}: {
  candles: readonly StockCandle[]
  color: string
  panX?: number
  panY?: number
  zoom?: number
}) {
  const paths = useMemo<React.ReactNode[]>(() => {
    if (candles.length === 0) return []
    const W = 1000
    const H = 400
    const padX = 8
    const padY = 16
    const usableW = W - padX * 2
    const usableH = H - padY * 2
    const slot = usableW / candles.length
    const candleW = Math.max(2, slot * 0.55)

    let min = Infinity
    let max = -Infinity
    for (const c of candles) {
      if (c.low < min) min = c.low
      if (c.high > max) max = c.high
    }
    if (!isFinite(min) || !isFinite(max) || max === min) {
      min = 0
      max = 1
    }
    const yScale = (v: number) => padY + ((max - v) / (max - min)) * usableH

    return candles.map((c, i) => {
      const cx = padX + slot * i + slot / 2
      const isUp = c.close >= c.open
      const yOpen = yScale(c.open)
      const yClose = yScale(c.close)
      const yHigh = yScale(c.high)
      const yLow = yScale(c.low)
      const bodyTop = Math.min(yOpen, yClose)
      const bodyH = Math.max(2, Math.abs(yOpen - yClose))
      const stroke = isUp ? color : 'var(--pcs-colors-failure, #ED4B9E)'
      return (
        <g key={i}>
          <line x1={cx} x2={cx} y1={yHigh} y2={yLow} stroke={stroke} strokeWidth={1} />
          <rect
            x={cx - candleW / 2}
            y={bodyTop}
            width={candleW}
            height={bodyH}
            fill={stroke}
            rx={1}
          />
        </g>
      )
    })
  }, [candles, color])

  return (
    <ChartSvg viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden>
      <g transform={`translate(${panX} ${panY}) scale(${zoom})`}>{paths}</g>
    </ChartSvg>
  )
}

/* Smooth filled-area line chart (Catmull-Rom → cubic-bezier). Shares the
 * same 1000×400 viewBox + pan/zoom transform contract as CandleChart so the
 * crosshair math in the parent works the same way for both modes. */
function LineChart({
  candles,
  color,
  panX = 0,
  panY = 0,
  zoom = 1,
  gradientId,
}: {
  candles: readonly StockCandle[]
  color: string
  panX?: number
  panY?: number
  zoom?: number
  gradientId: string
}) {
  const { linePath, areaPath } = useMemo(() => {
    if (candles.length === 0) return { linePath: '', areaPath: '' }
    const W = 1000
    const H = 400
    const padX = 8
    const padY = 16
    const usableW = W - padX * 2
    const usableH = H - padY * 2
    const slot = usableW / Math.max(1, candles.length - 1)

    let min = Infinity
    let max = -Infinity
    for (const c of candles) {
      if (c.low < min) min = c.low
      if (c.high > max) max = c.high
    }
    if (!isFinite(min) || !isFinite(max) || max === min) {
      min = 0
      max = 1
    }
    const yScale = (v: number) => padY + ((max - v) / (max - min)) * usableH
    const pts = candles.map((c, i) => ({ x: padX + slot * i, y: yScale(c.close) }))

    // Catmull-Rom → cubic-bezier with tension 0.5 (≈ 1/6 control-point factor).
    const seg = (a: number, b: number, c: number, d: number) => (c - a) / 6
    let line = `M ${pts[0].x} ${pts[0].y}`
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] ?? pts[i]
      const p1 = pts[i]
      const p2 = pts[i + 1]
      const p3 = pts[i + 2] ?? p2
      const c1x = p1.x + seg(p0.x, p1.x, p2.x, p3.x)
      const c1y = p1.y + seg(p0.y, p1.y, p2.y, p3.y)
      const c2x = p2.x - seg(p0.x, p1.x, p2.x, p3.x)
      const c2y = p2.y - seg(p0.y, p1.y, p2.y, p3.y)
      line += ` C ${c1x} ${c1y} ${c2x} ${c2y} ${p2.x} ${p2.y}`
    }
    const baseY = padY + usableH
    const area = `${line} L ${pts[pts.length - 1].x} ${baseY} L ${pts[0].x} ${baseY} Z`
    return { linePath: line, areaPath: area }
  }, [candles])

  return (
    <ChartSvg viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.35} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <g transform={`translate(${panX} ${panY}) scale(${zoom})`}>
        <path d={areaPath} fill={`url(#${gradientId})`} />
        <path d={linePath} stroke={color} strokeWidth={2} fill="none" strokeLinejoin="round" strokeLinecap="round" />
      </g>
    </ChartSvg>
  )
}

export const StockChartCard: React.FC<StockChartCardProps> = ({
  name,
  symbol,
  source,
  logoUrls,
  tvlLabel = 'TVL',
  tvlValue,
  marketCapLabel = 'Market Cap',
  marketCapValue,
  price,
  changeAbs,
  changePct,
  candles,
  timeRange,
  onTimeRangeChange,
  chartType = 'candle',
  onChartTypeChange,
}) => {
  const logoSrc = logoUrls?.find(Boolean)
  const fallback = symbol.slice(0, 2).toUpperCase()
  const upColor = 'var(--pcs-colors-success, #31D0AA)'
  const lineColor = 'var(--pcs-colors-primary, #1FC7D4)'
  const gradientId = React.useId().replace(/[:]/g, '')
  const [hover, setHover] = useState<{ index: number; xPct: number; yPx: number } | null>(null)

  // Same scale the candle renderer uses (padY=16 of 400 viewBox = 4% top/bottom inset).
  const { min: lowMin, max: highMax } = useMemo(() => {
    let mn = Infinity
    let mx = -Infinity
    for (const c of candles) {
      if (c.low < mn) mn = c.low
      if (c.high > mx) mx = c.high
    }
    return { min: isFinite(mn) ? mn : 0, max: isFinite(mx) ? mx : 1 }
  }, [candles])

  const [panX, setPanX] = useState(0)
  const [panY, setPanY] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [drag, setDrag] = useState<{
    startClientX: number
    startClientY: number
    startPanX: number
    startPanY: number
  } | null>(null)
  const chartRef = useRef<HTMLDivElement | null>(null)

  const hoverCandle = hover && candles[hover.index]
  // Candle mode → line sticks to the wick top (high). Line mode → line
  // sticks to the close (the actual line value).
  const hoverPrice = hoverCandle ? (chartType === 'candle' ? hoverCandle.high : hoverCandle.close) : 0
  // Position the horizontal crosshair in viewBox space (after pan + scale)
  // as a percent of the 400-unit viewBox height.
  const PAD_Y = 16
  const USABLE_H = 400 - 2 * PAD_Y
  const hoverTopPct =
    hoverCandle && highMax !== lowMin
      ? (((PAD_Y + ((highMax - hoverPrice) / (highMax - lowMin)) * USABLE_H) * zoom +
          panY) /
          400) *
        100
      : 50

  const onChartDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (candles.length === 0) return
    setDrag({
      startClientX: e.clientX,
      startClientY: e.clientY,
      startPanX: panX,
      startPanY: panY,
    })
    setHover(null)
    e.preventDefault()
  }

  const onChartMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (candles.length === 0) return
    const rect = e.currentTarget.getBoundingClientRect()
    if (drag) {
      // Convert pixel delta to viewBox units (1000 × 400).
      const dxFrac = (e.clientX - drag.startClientX) / rect.width
      const dyFrac = (e.clientY - drag.startClientY) / rect.height
      setPanX(drag.startPanX + dxFrac * 1000)
      setPanY(drag.startPanY + dyFrac * 400)
      return
    }
    // Hover: cursor X in viewBox space, undo pan+scale, snap to nearest candle.
    const PAD_X = 8
    const cursorVBX = ((e.clientX - rect.left) / rect.width) * 1000
    const slot = (1000 - 2 * PAD_X) / Math.max(1, candles.length)
    const cursorCandleX = (cursorVBX - panX) / zoom
    const idxRaw = (cursorCandleX - PAD_X - slot / 2) / slot
    const index = Math.min(candles.length - 1, Math.max(0, Math.round(idxRaw)))
    // Render the crosshair at the candle's visual position (after pan+scale).
    const candleCx = PAD_X + slot * index + slot / 2
    const xPct = ((candleCx * zoom + panX) / 1000) * 100
    setHover({ index, xPct, yPx: e.clientY - rect.top })
  }

  // Trackpad pinch on Mac fires wheel with ctrlKey=true. React's onWheel is
  // passive, so we attach a non-passive listener to call preventDefault.
  useEffect(() => {
    const el = chartRef.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      if (!e.ctrlKey) return
      e.preventDefault()
      const rect = el.getBoundingClientRect()
      const cursorVBX = ((e.clientX - rect.left) / rect.width) * 1000
      const cursorVBY = ((e.clientY - rect.top) / rect.height) * 400
      const factor = Math.exp(-e.deltaY * 0.01)
      setZoom((oldZoom) => {
        const newZoom = Math.min(10, Math.max(0.2, oldZoom * factor))
        // Anchor the zoom at the cursor: keep cursor's logical point fixed.
        setPanX((px) => cursorVBX - ((cursorVBX - px) / oldZoom) * newZoom)
        setPanY((py) => cursorVBY - ((cursorVBY - py) / oldZoom) * newZoom)
        return newZoom
      })
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  // End drag on pointerup anywhere — works for mouse, pen, and touch.
  useEffect(() => {
    if (!drag) return
    const onUp = () => setDrag(null)
    document.addEventListener('pointerup', onUp)
    document.addEventListener('pointercancel', onUp)
    return () => {
      document.removeEventListener('pointerup', onUp)
      document.removeEventListener('pointercancel', onUp)
    }
  }, [drag])

  return (
    <Root>
      <Header>
        <HeaderLeft>
          <Logo>
            {logoSrc ? <LogoImg src={logoSrc} alt="" /> : <LogoFallback>{fallback}</LogoFallback>}
          </Logo>
          <HeaderTitleCol>
            <TitleRow>
              <Heading as="h2" scale="lg" ellipsis>
                {name}
              </Heading>
              {source && (
                <SourcePill $tone={chartSourceTone(source)}>{source}</SourcePill>
              )}
            </TitleRow>
            <MetaRow>
              <Text bold fontSize="14px" color="textSubtle" textTransform="uppercase">
                {symbol}
              </Text>
              {(tvlValue || marketCapValue) && (
                <MetaSwap>
                  <MetaPair>
                    <Text fontSize="14px" color="textSubtle">
                      {tvlLabel}
                    </Text>
                    <Text bold fontSize="14px">
                      {tvlValue ?? marketCapValue ?? ''}
                    </Text>
                  </MetaPair>
                  {marketCapValue && tvlValue && (
                    <MetaPair $hover>
                      <Text fontSize="14px" color="textSubtle">
                        {marketCapLabel}
                      </Text>
                      <Text bold fontSize="14px">
                        {marketCapValue}
                      </Text>
                    </MetaPair>
                  )}
                </MetaSwap>
              )}
            </MetaRow>
          </HeaderTitleCol>
        </HeaderLeft>
        <PriceCol>
          <Heading scale="xl">{price}</Heading>
          <Text bold fontSize="16px" color={changeColor(changePct)}>
            {changePct >= 0 ? '+' : '-'}
            {changeAbs.replace('-', '')} ({formatPct(changePct)})
          </Text>
        </PriceCol>
      </Header>

      <ChartFrame
        ref={chartRef}
        $dragging={!!drag}
        onPointerDown={onChartDown}
        onPointerMove={onChartMove}
        onPointerLeave={() => setHover(null)}
      >
        {chartType === 'candle' ? (
          <CandleChart candles={candles} color={upColor} panX={panX} panY={panY} zoom={zoom} />
        ) : (
          <LineChart
            candles={candles}
            color={lineColor}
            panX={panX}
            panY={panY}
            zoom={zoom}
            gradientId={gradientId}
          />
        )}
        {hoverCandle && !drag && (
          <>
            <HoverCrosshairV style={{ left: `${hover!.xPct}%` }} aria-hidden />
            <HoverCrosshairH style={{ top: `${hoverTopPct}%` }} aria-hidden />
            <HoverTooltip
              role="tooltip"
              style={{ left: `${hover!.xPct}%`, top: `${hover!.yPx}px` }}
            >
              <TooltipPrice>${hoverPrice.toFixed(2)}</TooltipPrice>
              <TooltipMeta>{mockHoverDate(timeRange, hover!.index, candles.length)}</TooltipMeta>
              <TooltipMeta>{mockHoverTime(timeRange, hover!.index)}</TooltipMeta>
            </HoverTooltip>
          </>
        )}
      </ChartFrame>

      <Controls>
        <RangeGroup>
          {TIME_RANGES.map((r) => (
            <RangePill
              key={r}
              type="button"
              $active={r === timeRange}
              aria-pressed={r === timeRange}
              onClick={() => onTimeRangeChange?.(r)}
            >
              {r}
            </RangePill>
          ))}
        </RangeGroup>
        <ChartToggle
          type="button"
          aria-label={chartType === 'candle' ? 'Switch to line chart' : 'Switch to candle chart'}
          onClick={() =>
            onChartTypeChange?.(chartType === 'candle' ? 'line' : 'candle')
          }
        >
          {chartType === 'candle' ? (
            <LineGraphIcon width="24px" height="24px" />
          ) : (
            <CandleGraphIcon width="24px" height="24px" />
          )}
        </ChartToggle>
      </Controls>
    </Root>
  )
}

export default StockChartCard
