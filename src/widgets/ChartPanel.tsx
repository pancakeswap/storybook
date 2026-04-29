import React from 'react'
import styled from 'styled-components'
import { PerpsPanel } from './primitives'

export interface ChartPanelProps {
  /**
   * The actual chart widget. The consumer plugs in its
   * TradingView / lightweight-charts / etc. implementation here so
   * this widget stays free of any chart-library dependency.
   */
  children: React.ReactNode
  /**
   * Minimum height for the chart area. Defaults to 420px (matches the
   * pancake-frontend perps page). Pass a string ("60vh") or number
   * (pixels). The panel grows to fill remaining space if the parent
   * uses flex.
   */
  minHeight?: string | number
}

const Panel = styled(PerpsPanel)<{ $minHeight: string }>`
  flex: 1;
  min-height: ${({ $minHeight }) => $minHeight};
`

const toCss = (v: string | number) => (typeof v === 'number' ? `${v}px` : v)

/**
 * Stylesheet shell for the perps chart. Owns the panel framing
 * (border, background, min-height) so visual updates flow through this
 * file; the actual chart implementation is provided by the consumer
 * via `children` (TradingView paid library in pancake-frontend, or
 * whatever else upstream wants).
 */
export const ChartPanel: React.FC<ChartPanelProps> = ({ children, minHeight = '420px' }) => {
  return <Panel $minHeight={toCss(minHeight)}>{children}</Panel>
}
