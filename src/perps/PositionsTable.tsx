import { useState } from 'react'
import '../ui/perps.css'
import './PositionsTable.css'

export interface Position {
  id: string
  pair: string
  direction: 'long' | 'short'
  size: string
  entryPrice: string
  markPrice: string
  liquidationPrice: string
  margin: string
  leverage: number
  unrealizedPnl: string
  unrealizedPnlPct: string
  borrowFee: string
  fundingFee: string
  tp: string
  sl: string
}

export interface PositionsTableProps {
  positions?: Position[]
  /** Whether to render the embedded tab bar / compact layout. */
  compact?: boolean
  onEditCollateral?: (id: string) => void
  onEditTpSl?: (id: string) => void
  onClose?: (id: string) => void
  onCloseAll?: () => void
}

type TabKey = 'open' | 'pos' | 'assets' | 'twap' | 'hist' | 'ph' | 'th' | 'tx'

const TABS: { key: TabKey; label: string; count?: number | null }[] = [
  { key: 'open',   label: 'Open orders',        count: 0 },
  { key: 'pos',    label: 'Positions',          count: 1 },
  { key: 'assets', label: 'Assets',             count: null },
  { key: 'twap',   label: 'TWAP',               count: 0 },
  { key: 'hist',   label: 'Order history',      count: null },
  { key: 'ph',     label: 'Position History',   count: null },
  { key: 'th',     label: 'Trade history',      count: null },
  { key: 'tx',     label: 'Transaction history', count: null },
]

const COLS = [
  'Symbol',
  'Size',
  'Entry price',
  'Mark price',
  'Margin',
  'Liq. price',
  'PNL (ROE%)',
  'TP/SL',
  'TP/SL for position',
  'Reverse',
]

const MOCK_POSITIONS: Position[] = [
  {
    id: '1',
    pair: 'BTCUSDT',
    direction: 'long',
    size: '75.5',
    entryPrice: '75,482.0',
    markPrice: '75,497.0',
    liquidationPrice: '69,162.0',
    margin: '3.77 USDT',
    leverage: 20,
    unrealizedPnl: '+0.01 USDT',
    unrealizedPnlPct: '+0.40%',
    borrowFee: '-$0.00',
    fundingFee: '-$0.00',
    tp: '',
    sl: '',
  },
]

export function PositionsTable({
  positions = MOCK_POSITIONS,
  compact = false,
  onClose,
  onCloseAll,
}: PositionsTableProps) {
  const [tab, setTab] = useState<TabKey>('pos')

  return (
    <div className={`perps-root pt-root${compact ? ' pt-compact' : ''}`}>
      {/* Tabs + utilities */}
      <div className="pt-tabs-row">
        <div className="pt-tabs" role="tablist">
          {TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={tab === t.key}
              className={`pt-tab${tab === t.key ? ' active' : ''}`}
              onClick={() => setTab(t.key)}
            >
              {t.label}
              {t.count != null && <span className="pt-tab-count">({t.count})</span>}
            </button>
          ))}
        </div>
        <div className="pt-tabs-spacer" />
        <label className="pt-hide-other">
          <input type="checkbox" />
          Hide other symbols
        </label>
        <button type="button" className="pt-close-all" onClick={onCloseAll}>
          Close All
        </button>
      </div>

      {/* Column headers */}
      <div className="pt-headers">
        {COLS.map((c) => (
          <span key={c} className="pt-header">
            {c} <span className="pt-sort" aria-hidden="true">⇅</span>
          </span>
        ))}
      </div>

      {/* Rows */}
      <div className="pt-body">
        {tab === 'pos' && positions.length > 0 ? (
          positions.map((pos) => {
            const isPos = pos.unrealizedPnl.startsWith('+')
            return (
              <div key={pos.id} className="pt-row">
                <div className="pt-cell pt-cell-symbol">
                  <div className="pt-sym-name">{pos.pair}</div>
                  <div className={`pt-sym-side ${pos.direction === 'long' ? 'p-long' : 'p-short'}`}>
                    {pos.direction === 'long' ? 'Buy' : 'Sell'} {pos.leverage}x IIII
                  </div>
                </div>
                <div className="pt-cell">
                  <div className="pt-num">{pos.size}</div>
                  <div className="pt-num-sub">USDT</div>
                </div>
                <div className="pt-cell pt-num">{pos.entryPrice}</div>
                <div className="pt-cell pt-num">{pos.markPrice}</div>
                <div className="pt-cell">
                  <div className="pt-num">{pos.margin}</div>
                  <div className="pt-num-sub">(Cross)</div>
                </div>
                <div className="pt-cell pt-num p-warn">{pos.liquidationPrice}</div>
                <div className="pt-cell">
                  <div className={`pt-num ${isPos ? 'p-long' : 'p-short'}`}>{pos.unrealizedPnl} ↗</div>
                  <div className={`pt-num-sub ${isPos ? 'p-long' : 'p-short'}`}>{pos.unrealizedPnlPct}</div>
                </div>
                <button type="button" className="pt-cell pt-link">Add ⓘ</button>
                <button type="button" className="pt-cell pt-link">Add ⓘ</button>
                <button type="button" className="pt-cell pt-link" onClick={() => onClose?.(pos.id)}>Reverse</button>
              </div>
            )
          })
        ) : (
          <div className="pt-empty">No data</div>
        )}
      </div>
    </div>
  )
}
