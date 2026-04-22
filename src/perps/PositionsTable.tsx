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
  compact?: boolean
  onEditCollateral?: (id: string) => void
  onEditTpSl?: (id: string) => void
  onClose?: (id: string) => void
  onCloseAll?: () => void
}

type TabKey = 'pos' | 'open' | 'assets' | 'twap' | 'hist' | 'ph' | 'th' | 'tx'

const TABS: { key: TabKey; label: string }[] = [
  { key: 'pos',    label: 'Positions' },
  { key: 'open',   label: 'Open Orders' },
  { key: 'assets', label: 'Assets' },
  { key: 'twap',   label: 'TWAP' },
  { key: 'hist',   label: 'Order History' },
  { key: 'ph',     label: 'Position History' },
  { key: 'th',     label: 'Trade History' },
  { key: 'tx',     label: 'Transaction History' },
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

function EmptyBoxIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      {/* Bottom of box */}
      <path d="M8 28L28 38L48 28V44L28 54L8 44V28Z" fill="#1FC7D4" opacity="0.25"/>
      {/* Front face */}
      <path d="M8 28L28 38L48 28L28 18L8 28Z" fill="#1FC7D4" opacity="0.5"/>
      {/* Left flap open */}
      <path d="M8 28L18 23L18 13L8 18V28Z" fill="#1FC7D4" opacity="0.8"/>
      {/* Right flap open */}
      <path d="M48 28L38 23L38 13L48 18V28Z" fill="#1FC7D4"/>
      {/* Back top */}
      <path d="M18 13L28 8L38 13L28 18L18 13Z" fill="#1FC7D4" opacity="0.65"/>
      {/* Left inner shadow */}
      <path d="M28 38L8 28L8 44L28 54V38Z" fill="#1FC7D4" opacity="0.15"/>
    </svg>
  )
}

export function PositionsTable({
  positions = MOCK_POSITIONS,
  compact = false,
  onEditCollateral,
  onEditTpSl,
  onClose,
  onCloseAll,
}: PositionsTableProps) {
  const [tab, setTab] = useState<TabKey>('pos')
  const [hideOther, setHideOther] = useState(false)

  const posCount = positions.length

  return (
    <div className={`perps-root pt-root${compact ? ' pt-compact' : ''}`}>

      {/* ── Tab bar ──────────────────────────────────────────── */}
      <div className="pt-tabs-row">
        <div className="pt-tabs" role="tablist">
          {TABS.map((t) => {
            const isPos = t.key === 'pos'
            return (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={tab === t.key}
                className={`pt-tab${tab === t.key ? ' active' : ''}`}
                onClick={() => setTab(t.key)}
              >
                {t.label}
                {isPos && (
                  <span className="pt-tab-count">({posCount})</span>
                )}
              </button>
            )
          })}
        </div>

        <div className="pt-tabs-spacer" />

        {/* Hide Other Symbols */}
        <label className="pt-hide-other">
          <span className="pt-checkbox-wrap">
            <input
              type="checkbox"
              checked={hideOther}
              onChange={(e) => setHideOther(e.target.checked)}
            />
            <span className="pt-checkbox-box" aria-hidden="true" />
          </span>
          Hide Other Symbols
        </label>

        {/* Close All */}
        <button type="button" className="pt-close-all" onClick={onCloseAll}>
          Close All
        </button>
      </div>

      {/* ── Column headers (positions only) ─────────────────── */}
      {tab === 'pos' && positions.length > 0 && (
        <div className="pt-headers">
          {COLS.map((c) => (
            <span key={c} className="pt-header">
              {c} <span className="pt-sort" aria-hidden="true">⇅</span>
            </span>
          ))}
        </div>
      )}

      {/* ── Body ─────────────────────────────────────────────── */}
      <div className="pt-body">
        {tab === 'pos' && positions.length > 0 ? (
          positions.map((pos) => {
            const isGain = pos.unrealizedPnl.startsWith('+')
            return (
              <div key={pos.id} className="pt-row">
                <div className="pt-cell pt-cell-symbol">
                  <div className="pt-sym-name">{pos.pair}</div>
                  <div className={`pt-sym-side ${pos.direction === 'long' ? 'p-long' : 'p-short'}`}>
                    {pos.direction === 'long' ? 'Buy' : 'Sell'} {pos.leverage}x Cross
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
                  <button
                    type="button"
                    className="pt-num-sub pt-link"
                    onClick={() => onEditCollateral?.(pos.id)}
                  >
                    (Cross) Edit
                  </button>
                </div>
                <div className="pt-cell pt-num p-warn">{pos.liquidationPrice}</div>
                <div className="pt-cell">
                  <div className={`pt-num ${isGain ? 'p-long' : 'p-short'}`}>{pos.unrealizedPnl} ↗</div>
                  <div className={`pt-num-sub ${isGain ? 'p-long' : 'p-short'}`}>{pos.unrealizedPnlPct}</div>
                </div>
                <button type="button" className="pt-cell pt-link" onClick={() => onEditTpSl?.(pos.id)}>
                  {pos.tp || pos.sl ? `TP: ${pos.tp || '—'} / SL: ${pos.sl || '—'}` : 'Add TP/SL'}
                </button>
                <button type="button" className="pt-cell pt-link" onClick={() => onEditTpSl?.(pos.id)}>
                  Add ⓘ
                </button>
                <button type="button" className="pt-cell pt-link" onClick={() => onClose?.(pos.id)}>
                  Close
                </button>
              </div>
            )
          })
        ) : (
          <div className="pt-empty">
            <EmptyBoxIcon />
            <span className="pt-empty-text">No Positions found</span>
          </div>
        )}
      </div>

    </div>
  )
}
