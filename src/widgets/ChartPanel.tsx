import React from 'react'
import { css, styled } from 'styled-components'
import { useMatchBreakpoints } from '../contexts'
import { PerpsPanel } from './primitives'

export const DEFAULT_TIMEFRAMES = ['1m', '5m', '15m', '1h', '4h', '1d'] as const

export interface ChartPanelProps {
  /**
   * The actual chart widget. The consumer plugs in its
   * TradingView / lightweight-charts / etc. implementation here so
   * this widget stays free of any chart-library dependency. On mobile,
   * if `children` is empty the widget renders the storybook fixture
   * gradient/line so the panel still has something to show.
   */
  children?: React.ReactNode
  /**
   * Minimum height for the chart area (desktop). Defaults to 420px
   * (matches the pancake-frontend perps page). Pass a string ("60vh")
   * or number (pixels). The panel grows to fill remaining space if the
   * parent uses flex.
   */
  minHeight?: string | number
  /**
   * Timeframes shown in the mobile tab row. Defaults to
   * `['1m','5m','15m','1h','4h','1d']`. Desktop ignores this — the
   * desktop chart-library typically owns its own timeframe UI.
   */
  timeframes?: readonly string[]
  /** Currently active timeframe (mobile). */
  activeTimeframe?: string
  /** Fired when the user taps a timeframe tab (mobile). */
  onTimeframeChange?: (tf: string) => void
  /**
   * Optional small floating price pill rendered on the right edge of
   * the mobile canvas. When undefined, no pill is rendered.
   */
  priceLabel?: string
  /**
   * Minimum height of the mobile chart canvas in pixels. Defaults to
   * 220 to match the original mobile-perps mockup.
   */
  mobileMinHeight?: number
}

const Panel = styled(PerpsPanel)<{ $minHeight: string }>`
  flex: 1;
  min-height: ${({ $minHeight }) => $minHeight};
`

const toCss = (v: string | number) => (typeof v === 'number' ? `${v}px` : v)

/* ── Mobile styled-components ──────────────────────────────────── */

const MobileWrapper = styled.div`
  border-bottom: 1px solid var(--pcs-colors-card-border);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
`

const TfRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
`

const TfButton = styled.button<{ $active: boolean }>`
  border: 0;
  background: transparent;
  font-family: inherit;
  padding: 0;
  font-size: 13px;
  cursor: pointer;
  color: var(--pcs-colors-text-subtle);
  ${({ $active }) =>
    $active &&
    css`
      color: var(--pcs-colors-primary);
      font-weight: 700;
    `}
`

const Canvas = styled.div<{ $minHeight: number }>`
  position: relative;
  height: ${({ $minHeight }) => $minHeight}px;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--pcs-colors-primary) 12%, transparent) 0%,
    transparent 100%
  );
`

const PlaceholderLine = styled.span`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(140px 60px at 18% 70%, color-mix(in srgb, var(--pcs-colors-primary) 18%, transparent), transparent 70%),
    radial-gradient(120px 50px at 42% 38%, color-mix(in srgb, var(--pcs-colors-success) 14%, transparent), transparent 70%),
    radial-gradient(160px 70px at 72% 55%, color-mix(in srgb, var(--pcs-colors-primary) 12%, transparent), transparent 70%);
  border-bottom: 2px solid color-mix(in srgb, var(--pcs-colors-primary) 50%, transparent);
`

// eslint-disable-next-line no-restricted-syntax -- on colored bg, contrast guarantee
const PricePill = styled.span`
  position: absolute;
  right: 8px;
  top: 32%;
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 6px;
  background: var(--pcs-colors-primary);
  color: var(--pcs-colors-inverted-contrast, #fff);
  font-size: 12px;
`

/**
 * Mobile-only render path. Mounted from `ChartPanel` when
 * `useMatchBreakpoints().isMobile` is true. Owns the timeframe tab
 * row + the canvas slot; consumer fills `children` with the real chart
 * (TradingView iframe etc.). When `children` is empty, the storybook
 * gradient/line fixture is shown.
 */
const MobileChartPanel: React.FC<ChartPanelProps> = ({
  children,
  timeframes = DEFAULT_TIMEFRAMES,
  activeTimeframe,
  onTimeframeChange,
  priceLabel,
  mobileMinHeight = 220,
}) => {
  const hasChildren = React.Children.count(children) > 0
  return (
    <MobileWrapper aria-label="Price chart">
      <TfRow role="tablist">
        {timeframes.map((tf) => {
          const active = tf === activeTimeframe
          return (
            <TfButton
              key={tf}
              type="button"
              role="tab"
              aria-selected={active}
              $active={active}
              onClick={() => onTimeframeChange?.(tf)}
            >
              {tf}
            </TfButton>
          )
        })}
      </TfRow>
      <Canvas $minHeight={mobileMinHeight}>
        {hasChildren ? children : <PlaceholderLine />}
        {priceLabel !== undefined && <PricePill>{priceLabel}</PricePill>}
      </Canvas>
    </MobileWrapper>
  )
}

/**
 * Stylesheet shell for the perps chart. Owns the panel framing
 * (border, background, min-height) so visual updates flow through this
 * file; the actual chart implementation is provided by the consumer
 * via `children` (TradingView paid library in pancake-frontend, or
 * whatever else upstream wants).
 *
 * Auto-responsive: drops to `MobileChartPanel` when
 * `useMatchBreakpoints().isMobile` is true. Mobile adds an inline
 * timeframe tab row + an optional floating price pill — desktop keeps
 * the original `children` + `minHeight` API untouched.
 */
export const ChartPanel: React.FC<ChartPanelProps> = (props) => {
  const { isMobile } = useMatchBreakpoints()
  if (isMobile) return <MobileChartPanel {...props} />
  const { children, minHeight = '420px' } = props
  return <Panel $minHeight={toCss(minHeight)}>{children}</Panel>
}
