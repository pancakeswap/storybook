import { useState } from 'react'
import '../ui/perps.css'
import './PositionsTable.css'
import { Checkbox } from '../ui/components/Checkbox'
import { Text } from '../ui/components/Text'
import { DateRangePicker } from './DateRangePicker'
import type { DateRange } from './DateRangePicker'

/* ── Data types ───────────────────────────────────────────── */

export type Side = 'Buy' | 'Sell'

export interface Position {
  id: string
  pair: string
  direction: 'long' | 'short'
  size: string
  sizeUnit?: string
  entryPrice: string
  markPrice: string
  liquidationPrice: string
  margin: string
  leverage: number
  unrealizedPnl: string
  unrealizedPnlPct: string
  borrowFee?: string
  fundingFee?: string
  tp?: string
  sl?: string
}

export interface OpenOrder {
  id: string
  date: string          // '2025-04-17'
  time: string          // '01:37:26'
  symbol: string        // 'BTCUSDT'
  side: Side
  type: string          // 'Take Profit' / 'Limit' / 'Stop Market' / ...
  price: string         // '86,982.8'
  filled: string        // '0.0 USDT'
  amount: string        // '83.0 USDT'
  triggerType?: string  // 'Last Price'
  triggerCondition?: string // '<= 85,982.8'
  reduceOnly?: string   // 'Yes' / 'No'
  postOnly?: string
  tpSl?: string
}

export interface OrderHistoryEntry {
  id: string
  date: string
  time: string
  symbol: string
  side: Side
  type: string            // 'Limit' / 'Market'
  average?: string        // '86,000'
  price?: string          // '0.00'
  executed?: string       // '30 USDT'
  amount?: string         // '30 USDT'
  triggerType?: string
  triggerCondition?: string
  reduceOnly?: string
  status: string          // 'Filled' / 'Expired' / 'Cancelled'
}

export interface TradeHistoryEntry {
  id: string
  date: string
  time: string
  symbol: string
  side: Side
  price: string           // '86,000'
  quantity: string        // '30 USDT'
  fee: string             // '0.0002 USDT'
  realizedProfit: string  // '+0.01 USDT'
}

export interface TransactionHistoryEntry {
  id: string
  date: string
  time: string
  type: string            // 'Realized PNL' / 'Fee' / 'Funding' / 'Transfer'
  amount: string          // '30 USDT'
  symbol: string
}

export type TabKey =
  | 'positions'
  | 'open'
  | 'history'
  | 'trades'
  | 'transactions'

export interface PositionsTableProps {
  positions?: Position[]
  openOrders?: OpenOrder[]
  orderHistory?: OrderHistoryEntry[]
  tradeHistory?: TradeHistoryEntry[]
  transactionHistory?: TransactionHistoryEntry[]
  counts?: {
    positions?: number
    openOrders?: number
    orderHistory?: number
    tradeHistory?: number
    transactionHistory?: number
  }
  initialTab?: TabKey
  /** Close-All / Cancel-All action in the top-right of the tab bar. */
  onCloseAll?: () => void
  /** Per-row inline actions on the Positions tab. */
  onRowAction?: (positionId: string, action: 'limit' | 'market' | 'tpsl') => void
  /** Per-row Cancel action on the Open Orders tab. */
  onCancelOrder?: (orderId: string) => void
  /** Share icon next to the PNL value. */
  onSharePnl?: (id: string) => void
  /** Date-filter button on history tabs. */
  onDateFilter?: () => void
  /** Retained for back-compat — wires to the TP/SL row action. */
  onEditTpSl?: (id: string) => void
  /** Retained for back-compat. */
  onEditCollateral?: (id: string) => void
  /** Retained for back-compat. */
  onClose?: (id: string) => void
  /** Retained for back-compat. */
  compact?: boolean
}

/* ── Tab config ───────────────────────────────────────────── */

const TABS: { key: TabKey; label: string; countKey: keyof NonNullable<PositionsTableProps['counts']> }[] = [
  { key: 'positions',    label: 'Positions',           countKey: 'positions' },
  { key: 'open',         label: 'Open Orders',         countKey: 'openOrders' },
  { key: 'history',      label: 'Order History',       countKey: 'orderHistory' },
  { key: 'trades',       label: 'Trade History',       countKey: 'tradeHistory' },
  { key: 'transactions', label: 'Transaction History', countKey: 'transactionHistory' },
]

/* Per-tab column configurations */
const POSITIONS_COLS = [
  { key: 'symbol', label: 'Symbol',      width: 92  },
  { key: 'size',   label: 'Size',        width: 80  },
  { key: 'entry',  label: 'Entry Price', width: 80  },
  { key: 'mark',   label: 'mark Price',  width: 80  },
  { key: 'margin', label: 'Margin',      width: 80  },
  { key: 'liq',    label: 'Liq Price',   width: 80  },
  { key: 'pnl',    label: 'PNL (ROE%)',  width: 136, hasHelp: true },
  { key: 'tpsl',   label: 'TP/SL',       width: 136 },
]

const OPEN_ORDERS_COLS = [
  { key: 'time',    label: 'Time',              width: 76  },
  { key: 'symbol',  label: 'Symbol',            width: 76  },
  { key: 'type',    label: 'Type',              width: 72  },
  { key: 'price',   label: 'Price',             width: 72  },
  { key: 'filled',  label: 'Filled / Amount',   width: 172 },
  { key: 'trigger', label: 'Trigger Conditions' },
  { key: 'reduce',  label: 'Reduce Only',       width: 84  },
  { key: 'post',    label: 'Post Only',         width: 84  },
  { key: 'tpsl',    label: 'TP/SL',             width: 80  },
]

const ORDER_HISTORY_COLS = [
  { key: 'time',      label: 'Time',              width: 108 },
  { key: 'symbol',    label: 'Symbol',            width: 92  },
  { key: 'type',      label: 'Type',              width: 88  },
  { key: 'avgPrice',  label: 'AVERAGE/PRICE',     width: 140 },
  { key: 'executed',  label: 'EXECUTED/AMOUNT' },
  { key: 'trigger',   label: 'Trigger Conditions' },
  { key: 'reduce',    label: 'Reduce Only',       width: 109 },
  { key: 'status',    label: 'Status' },
]

const TRADE_HISTORY_COLS = [
  { key: 'time',     label: 'Time',            width: 148 },
  { key: 'symbol',   label: 'Symbol',          width: 156 },
  { key: 'price',    label: 'Price',           width: 168 },
  { key: 'quantity', label: 'Quantity',        width: 186 },
  { key: 'fee',      label: 'Fee',             width: 178 },
  { key: 'realized', label: 'Realized profit' },
]

const TRANSACTION_HISTORY_COLS = [
  { key: 'time',   label: 'Time',   flex: true },
  { key: 'type',   label: 'Type',   flex: true },
  { key: 'amount', label: 'amount', flex: true },
  { key: 'symbol', label: 'Sylbol', flex: true },
]

/* ── Mock data ────────────────────────────────────────────── */

const MOCK_POSITIONS: Position[] = [
  {
    id: '1', pair: 'BTCUSDT', direction: 'short', leverage: 20,
    size: '83.9', sizeUnit: 'USDT',
    entryPrice: '83,846.7', markPrice: '83,854.9',
    margin: '4.19 USDT', liquidationPrice: '78,548.9',
    unrealizedPnl: '-0.01 USDT', unrealizedPnlPct: '-0.20%',
    tp: '--', sl: '--',
  },
  {
    id: '2', pair: 'BTCUSDT', direction: 'long', leverage: 20,
    size: '83.9', sizeUnit: 'USDT',
    entryPrice: '83,846.7', markPrice: '83,854.9',
    margin: '4.19 USDT', liquidationPrice: '78,548.9',
    unrealizedPnl: '+0.01 USDT', unrealizedPnlPct: '+0.20%',
    tp: '--', sl: '--',
  },
]

const MOCK_OPEN_ORDERS: OpenOrder[] = [
  {
    id: 'o1', date: '2025-04-17', time: '01:37:26',
    symbol: 'BTCUSDT', side: 'Buy',
    type: 'Take Profit', price: '86,982.8',
    filled: '0.0 USDT', amount: '83.0 USDT',
    triggerType: 'Last Price', triggerCondition: '<= 85,982.8',
    reduceOnly: 'No', postOnly: 'No', tpSl: '--',
  },
]

const MOCK_ORDER_HISTORY: OrderHistoryEntry[] = [
  {
    id: 'h1', date: '2025-04-17', time: '01:37:26', symbol: 'BTCUSDT', side: 'Buy',
    type: 'Limit', average: '86,000', price: '0.00',
    executed: '30 USDT', amount: '30 USDT',
    reduceOnly: 'Yes', status: 'Filled',
  },
  {
    id: 'h2', date: '2025-04-17', time: '01:37:26', symbol: 'BTCUSDT', side: 'Buy',
    type: 'Market', average: '86,000', price: '0.00',
    executed: '30 USDT', amount: '30 USDT',
    reduceOnly: 'Yes', status: 'Filled',
  },
  {
    id: 'h3', date: '2025-04-17', time: '01:37:26', symbol: 'BTCUSDT', side: 'Sell',
    type: 'Market', average: '-', price: '0.00',
    executed: '0 USDT', amount: '0 USDT',
    triggerType: 'Last Price', triggerCondition: '<= 85,982.8',
    reduceOnly: 'Yes', status: 'Expired',
  },
]

const MOCK_TRADE_HISTORY: TradeHistoryEntry[] = [
  {
    id: 't1', date: '2025-04-17', time: '01:37:26', symbol: 'BTCUSDT', side: 'Buy',
    price: '86,000', quantity: '30 USDT', fee: '0.0002 USDT',
    realizedProfit: '+0.01 USDT',
  },
  {
    id: 't2', date: '2025-04-17', time: '01:37:26', symbol: 'BTCUSDT', side: 'Buy',
    price: '86,000', quantity: '30 USDT', fee: '0.0002 USDT',
    realizedProfit: '+0.01 USDT',
  },
]

const MOCK_TRANSACTION_HISTORY: TransactionHistoryEntry[] = [
  { id: 'x1', date: '2025-04-17', time: '01:37:26', type: 'Realized PNL', amount: '30 USDT', symbol: 'BTCUSDT' },
  { id: 'x2', date: '2025-04-17', time: '01:37:26', type: 'Realized PNL', amount: '30 USDT', symbol: 'BTCUSDT' },
]

/* ── Icons ────────────────────────────────────────────────── */

function HelpIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm.75 16h-1.5v-1.5h1.5V18zm1.76-6.25l-.67.69c-.54.55-.84 1-.84 2.06h-1.5v-.5c0-.74.3-1.41.84-1.95l.93-.95c.27-.26.42-.63.42-1.05 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5H9a3 3 0 116 0c0 .66-.27 1.26-.7 1.7z"/>
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Teal open-box graphic used for empty states. */
function EmptyBoxGraphic() {
  return (
    <svg width="112" height="56" viewBox="0 0 112 56" fill="none" aria-hidden="true">
      {/* Back (darker teal) */}
      <path d="M56 10 L98 20 L98 40 L56 50 L14 40 L14 20 Z"
            fill="var(--pcs-colors-primary-dark, #0098A1)" opacity="0.85" />
      {/* Left flap */}
      <path d="M14 20 L34 13 L34 5 L14 11 Z"
            fill="var(--pcs-colors-primary)" opacity="0.9" />
      {/* Right flap */}
      <path d="M98 20 L78 13 L78 5 L98 11 Z"
            fill="var(--pcs-colors-primary)" opacity="0.9" />
      {/* Top front face */}
      <path d="M14 20 L56 10 L98 20 L56 30 Z"
            fill="var(--pcs-colors-primary)" />
      {/* Inner shadow (open-box depth) */}
      <path d="M56 30 L56 50 L14 40 L14 20 Z"
            fill="var(--pcs-colors-contrast, #08060B)" opacity="0.25" />
      {/* Highlight on front-top edge */}
      <path d="M56 10 L98 20 L56 30 Z"
            fill="var(--pcs-colors-primary-bright, #53DEE9)" opacity="0.5" />
    </svg>
  )
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="pt-empty">
      <EmptyBoxGraphic />
      <Text color="textSubtle" fontSize="14px" className="pt-empty-label">{label}</Text>
    </div>
  )
}

function FilterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 6h18M6 12h12M10 18h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function LeverageBars({ direction: _direction }: { direction: 'long' | 'short' }) {
  // Single accent bar in pink + three muted bars (matches both rows in the Figma).
  return (
    <span className="pt-lev-bars" aria-hidden="true">
      <span className="pt-lev-bar pt-lev-bar--accent" />
      <span className="pt-lev-bar" />
      <span className="pt-lev-bar" />
      <span className="pt-lev-bar" />
    </span>
  )
}

/* ── Sub-renderers ────────────────────────────────────────── */

function TimeCell({ date, time, width }: { date: string; time: string; width: number }) {
  return (
    <div className="pt-cell" style={{ width }}>
      <Text color="text" fontSize="14px">{date}</Text>
      <Text color="text" fontSize="14px">{time}</Text>
    </div>
  )
}

function SymbolSideCell({ symbol, side, width }: { symbol: string; side: Side; width: number }) {
  const sideClass = side === 'Buy' ? 'pt-text-success' : 'pt-text-failure'
  return (
    <div className="pt-cell" style={{ width }}>
      <Text color="text" fontSize="14px">{symbol}</Text>
      <span className={`pt-sym-sub ${sideClass}`}>{side}</span>
    </div>
  )
}

function StackCell({ a, b, width }: { a: React.ReactNode; b?: React.ReactNode; width: number | string }) {
  return (
    <div className="pt-cell" style={{ width }}>
      <Text color="text" fontSize="14px">{a}</Text>
      {b != null && <Text color="text" fontSize="14px">{b}</Text>}
    </div>
  )
}

/* ── Component ────────────────────────────────────────────── */

export function PositionsTable({
  positions            = MOCK_POSITIONS,
  openOrders           = MOCK_OPEN_ORDERS,
  orderHistory         = MOCK_ORDER_HISTORY,
  tradeHistory         = MOCK_TRADE_HISTORY,
  transactionHistory   = MOCK_TRANSACTION_HISTORY,
  counts               = { positions: 999, openOrders: 999, orderHistory: 999, tradeHistory: 999, transactionHistory: 999 },
  initialTab           = 'positions',
  onCloseAll,
  onRowAction,
  onCancelOrder,
  onSharePnl,
  onDateFilter,
  onEditTpSl,
}: PositionsTableProps) {
  const [tab, setTab]             = useState<TabKey>(initialTab)
  const [hideOther, setHideOther] = useState(false)
  const [dateOpen, setDateOpen]   = useState(false)
  const [dateRange, setDateRange] = useState<DateRange | null>(null)

  const handleRowAction = (positionId: string, action: 'limit' | 'market' | 'tpsl') => {
    onRowAction?.(positionId, action)
    if (action === 'tpsl') onEditTpSl?.(positionId)
  }

  const isPositions = tab === 'positions'
  const isOpen      = tab === 'open'
  const isHistory   = tab === 'history' || tab === 'trades' || tab === 'transactions'

  const cols =
    tab === 'positions'    ? POSITIONS_COLS
    : tab === 'open'       ? OPEN_ORDERS_COLS
    : tab === 'history'    ? ORDER_HISTORY_COLS
    : tab === 'trades'     ? TRADE_HISTORY_COLS
    :                        TRANSACTION_HISTORY_COLS

  return (
    <section className="perps-root pt-root" aria-label="Positions">

      {/* ── Tab bar ─────────────────────────────────────────── */}
      <div className="pt-tabs-row">
        <div className="pt-tabs" role="tablist">
          {TABS.map((t) => {
            const active = tab === t.key
            const count  = counts[t.countKey]
            return (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={active}
                className={`pt-tab${active ? ' pt-tab--active' : ''}`}
                onClick={() => setTab(t.key)}
              >
                <span>{t.label}</span>
                {count != null && <span className="pt-tab-count">({count})</span>}
              </button>
            )
          })}
        </div>

        <div className="pt-actions">
          <label className="pt-hide-row">
            <Checkbox
              scale="sm"
              checked={hideOther}
              onChange={(e) => setHideOther(e.target.checked)}
            />
            <Text color="primary60" fontSize="14px">Hide Other Symbols</Text>
          </label>

          {isPositions && (
            <button type="button" className="pt-close-all" onClick={onCloseAll}>Close All</button>
          )}
          {isOpen && (
            <button type="button" className="pt-close-all" onClick={onCloseAll}>Cancel All</button>
          )}
          {isHistory && (
            <div className="pt-date-wrap">
              <button
                type="button"
                className="pt-date-btn"
                onClick={() => { setDateOpen((v) => !v); onDateFilter?.() }}
                aria-haspopup="dialog"
                aria-expanded={dateOpen}
                aria-label="Filter by date"
              >
                <FilterIcon />
                <Text color="textSubtle" fontSize="14px">Date</Text>
              </button>

              {dateOpen && (
                <div className="pt-date-popover">
                  <DateRangePicker
                    initialRange={dateRange ?? undefined}
                    onCancel={() => setDateOpen(false)}
                    onConfirm={(r) => { setDateRange(r); setDateOpen(false) }}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Column headers ───────────────────────────────────── */}
      <div className="pt-headers">
        {cols.map((c) => (
          <div
            key={c.key}
            className={`pt-header${'flex' in c && c.flex ? ' pt-header--flex' : ''}`}
            style={'width' in c ? { width: c.width } : undefined}
          >
            <span>{c.label}</span>
            {'hasHelp' in c && c.hasHelp && <HelpIcon />}
          </div>
        ))}
        {isOpen && (
          <button type="button" className="pt-close-all pt-cancel-all-right" onClick={onCloseAll}>
            Cancel All
          </button>
        )}
      </div>

      {/* ── Body ─────────────────────────────────────────────── */}
      <div className="pt-body">
        {tab === 'positions' && positions.map((p) => {
          const isGain = p.unrealizedPnl.startsWith('+')
          const pnlClass = isGain ? 'pt-text-success' : 'pt-text-failure'
          const sideClass = p.direction === 'long' ? 'pt-text-success' : 'pt-text-failure'
          const sideLabel = p.direction === 'long' ? 'Buy' : 'Sell'

          return (
            <div key={p.id} className="pt-row">
              <div className="pt-row-inner">
                <div className="pt-cell" style={{ width: 92 }}>
                  <Text color="text" fontSize="14px">{p.pair}</Text>
                  <span className="pt-sym-sub">
                    <span className={sideClass}>{sideLabel} {p.leverage}x</span>
                    <LeverageBars direction={p.direction} />
                  </span>
                </div>
                <div className="pt-cell" style={{ width: 80 }}>
                  <Text color="text" fontSize="14px">{p.size}</Text>
                  {p.sizeUnit && <Text color="text" fontSize="14px">{p.sizeUnit}</Text>}
                </div>
                <div className="pt-cell" style={{ width: 80 }}><Text color="text" fontSize="14px">{p.entryPrice}</Text></div>
                <div className="pt-cell" style={{ width: 80 }}><Text color="text" fontSize="14px">{p.markPrice}</Text></div>
                <div className="pt-cell" style={{ width: 80 }}><Text color="text" fontSize="14px">{p.margin}</Text></div>
                <div className="pt-cell" style={{ width: 80 }}><Text color="text" fontSize="14px">{p.liquidationPrice}</Text></div>
                <div className="pt-cell" style={{ width: 136 }}>
                  <div className="pt-pnl-row">
                    <span className={pnlClass}>{p.unrealizedPnl}</span>
                    <button type="button" className="pt-share-btn" aria-label="Share PnL" onClick={() => onSharePnl?.(p.id)}>
                      <ShareIcon />
                    </button>
                  </div>
                  <span className={pnlClass}>{p.unrealizedPnlPct}</span>
                </div>
                <div className="pt-cell" style={{ width: 136 }}>
                  <Text color="text" fontSize="14px">{p.tp ?? '--'}</Text>
                  <Text color="text" fontSize="14px">{p.sl ?? '--'}</Text>
                </div>
              </div>

              <div className="pt-row-actions">
                <button type="button" className="pt-action-link" onClick={() => handleRowAction(p.id, 'limit')}>Limit</button>
                <button type="button" className="pt-action-link" onClick={() => handleRowAction(p.id, 'market')}>Market</button>
                <button type="button" className="pt-action-link" onClick={() => handleRowAction(p.id, 'tpsl')}>TP/SL</button>
              </div>
            </div>
          )
        })}

        {tab === 'open' && openOrders.map((o) => (
          <div key={o.id} className="pt-row">
            <div className="pt-row-inner">
              <TimeCell date={o.date} time={o.time} width={76} />
              <SymbolSideCell symbol={o.symbol} side={o.side} width={76} />
              <StackCell a={o.type} width={72} />
              <StackCell a={o.price} width={72} />
              <StackCell a={o.filled} b={o.amount} width={178} />
              <StackCell a={o.triggerType ?? ''} b={o.triggerCondition ?? ''} width={120} />
              <StackCell a={o.reduceOnly ?? '--'} width={84} />
              <StackCell a={o.postOnly ?? '--'} width={84} />
              <StackCell a={o.tpSl ?? '--'} width={80} />
            </div>
            <div className="pt-row-actions">
              <button type="button" className="pt-action-link" onClick={() => onCancelOrder?.(o.id)}>Cancel</button>
            </div>
          </div>
        ))}

        {tab === 'history' && orderHistory.map((h) => (
          <div key={h.id} className="pt-row pt-row--no-actions">
            <div className="pt-row-inner">
              <TimeCell date={h.date} time={h.time} width={108} />
              <SymbolSideCell symbol={h.symbol} side={h.side} width={92} />
              <StackCell a={h.type} width={88} />
              <StackCell a={h.average ?? '-'} b={h.price ?? ''} width={140} />
              <StackCell a={h.executed ?? ''} b={h.amount ?? ''} width={116} />
              <StackCell a={h.triggerType ?? '--'} b={h.triggerCondition} width={120} />
              <StackCell a={h.reduceOnly ?? '--'} width={109} />
              <StackCell a={h.status} width={77} />
            </div>
          </div>
        ))}

        {tab === 'trades' && tradeHistory.map((tr) => {
          const isGain = tr.realizedProfit.startsWith('+')
          const pnlClass = isGain ? 'pt-text-success' : 'pt-text-failure'
          return (
            <div key={tr.id} className="pt-row pt-row--no-actions">
              <div className="pt-row-inner">
                <TimeCell date={tr.date} time={tr.time} width={148} />
                <SymbolSideCell symbol={tr.symbol} side={tr.side} width={156} />
                <StackCell a={tr.price} width={168} />
                <StackCell a={tr.quantity} width={186} />
                <StackCell a={tr.fee} width={178} />
                <div className="pt-cell" style={{ width: 136 }}>
                  <div className="pt-pnl-row">
                    <span className={pnlClass}>{tr.realizedProfit}</span>
                    <button type="button" className="pt-share-btn" aria-label="Share profit" onClick={() => onSharePnl?.(tr.id)}>
                      <ShareIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {tab === 'positions'    && positions.length          === 0 && <EmptyState label="No Positions found" />}
        {tab === 'open'         && openOrders.length         === 0 && <EmptyState label="No Open Orders found" />}
        {tab === 'history'      && orderHistory.length       === 0 && <EmptyState label="No Order History found" />}
        {tab === 'trades'       && tradeHistory.length       === 0 && <EmptyState label="No Trade History found" />}
        {tab === 'transactions' && transactionHistory.length === 0 && <EmptyState label="No Transactions found" />}

        {tab === 'transactions' && transactionHistory.map((x) => (
          <div key={x.id} className="pt-row pt-row--no-actions">
            <div className="pt-row-inner pt-row-inner--stretch">
              <div className="pt-cell pt-cell--flex">
                <Text color="text" fontSize="14px">{x.date}</Text>
                <Text color="text" fontSize="14px">{x.time}</Text>
              </div>
              <div className="pt-cell pt-cell--flex"><Text color="text" fontSize="14px">{x.type}</Text></div>
              <div className="pt-cell pt-cell--flex"><Text color="text" fontSize="14px">{x.amount}</Text></div>
              <div className="pt-cell pt-cell--flex"><Text color="text" fontSize="14px">{x.symbol}</Text></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
