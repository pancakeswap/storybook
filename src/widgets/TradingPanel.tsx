import '../ui/perps.css'
import { PositionsTable } from './PositionsTable'
import type { Position } from './PositionsTable'

/**
 * TradingPanel — the bottom tabs strip that sits under the chart + order
 * book in `PerpsPage`.  In the Aster-style layout the tab bar, column
 * headers and data rows all live in `PositionsTable`, so this component
 * is now a thin wrapper kept for layout / backwards-compat.
 */
export interface TradingPanelProps {
  positions?: Position[]
  compact?: boolean
  onEditCollateral?: (id: string) => void
  onEditTpSl?: (id: string) => void
  onClose?: (id: string) => void
  onCloseAll?: () => void
}

export function TradingPanel({
  positions,
  compact,
  onEditCollateral,
  onEditTpSl,
  onClose,
  onCloseAll,
}: TradingPanelProps) {
  return (
    <PositionsTable
      positions={positions}
      compact={compact}
      onEditCollateral={onEditCollateral}
      onEditTpSl={onEditTpSl}
      onClose={onClose}
      onCloseAll={onCloseAll}
    />
  )
}
