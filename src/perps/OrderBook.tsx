import { useMemo, useState } from 'react'
import '../ui/perps.css'
import './OrderBook.css'

export type OrderBookRow = {
  /** Price */
  p: number
  /** Size */
  s: number
  /** Cumulative total */
  t: number
}

export interface OrderBookProps {
  /** Asks sorted from highest ask (index 0) to lowest ask (closest to spread). */
  asks?: OrderBookRow[]
  /** Bids sorted from highest bid (index 0, closest to spread) to lowest. */
  bids?: OrderBookRow[]
  /** Tick-size grouping label (e.g. "0.1"). */
  grouping?: string
  /** Base currency label shown in column headers. */
  base?: string
  /** Quote currency (kept for future use). */
  quote?: string
}

/* ── Mock data ────────────────────────────────────────────── */
const BASE_PRICE = 75500.8

function genAsks(): OrderBookRow[] {
  let total = 0
  return Array.from({ length: 10 }, (_, i) => {
    const p = BASE_PRICE + (i + 1) * 2.5
    const s = 50 + ((i * 97) % 650)
    total += s
    return { p, s, t: total }
  }).reverse() // index 0 = highest ask (largest cumulative)
}

function genBids(): OrderBookRow[] {
  let total = 0
  return Array.from({ length: 10 }, (_, i) => {
    const p = BASE_PRICE - (i + 1) * 2.5
    const s = 50 + ((i * 113) % 720)
    total += s
    return { p, s, t: total }
  }) // index 0 = highest bid (smallest cumulative)
}

const DEFAULT_ASKS = genAsks()
const DEFAULT_BIDS = genBids()

/* ── Formatters ───────────────────────────────────────────── */
const nfPrice  = new Intl.NumberFormat('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
const nfAmount = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

function fmtTotal(v: number): string {
  if (v >= 1_000_000) return (v / 1_000_000).toFixed(2) + 'M'
  if (v >= 1_000)     return (v / 1_000).toFixed(2) + 'K'
  return v.toFixed(2)
}

/* ── Icons ────────────────────────────────────────────────── */
function IconBoth() {
  return (
    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="6" height="6" stroke="#31D0AA" />
      <rect x="0.5" y="8.5" width="6" height="6" stroke="#ED4B9E" />
      <rect x="8"   y="0"   width="8" height="3" fill="#65616E" />
      <rect x="8"   y="4"   width="8" height="3" fill="#65616E" />
      <rect x="8"   y="8"   width="8" height="3" fill="#65616E" />
      <rect x="8"   y="12"  width="8" height="3" fill="#65616E" />
    </svg>
  )
}

function IconBids() {
  return (
    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="6" height="14" stroke="#31D0AA" />
      <rect x="8"   y="0"   width="8" height="3"  fill="#65616E" />
      <rect x="8"   y="4"   width="8" height="3"  fill="#65616E" />
      <rect x="8"   y="8"   width="8" height="3"  fill="#65616E" />
      <rect x="8"   y="12"  width="8" height="3"  fill="#65616E" />
    </svg>
  )
}

function IconAsks() {
  return (
    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="6" height="14" stroke="#ED4B9E" />
      <rect x="8"   y="0"   width="8" height="3"  fill="#65616E" />
      <rect x="8"   y="4"   width="8" height="3"  fill="#65616E" />
      <rect x="8"   y="8"   width="8" height="3"  fill="#65616E" />
      <rect x="8"   y="12"  width="8" height="3"  fill="#65616E" />
    </svg>
  )
}

function ChevronIcon({ up }: { up: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={up ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ── Component ────────────────────────────────────────────── */
type ViewMode = 'both' | 'bids' | 'asks'
const GROUPINGS = ['0.1', '1', '10', '50', '100']

export function OrderBook({
  asks = DEFAULT_ASKS,
  bids = DEFAULT_BIDS,
  grouping: groupingProp = '0.1',
  base = 'BTC',
}: OrderBookProps) {
  const [tab, setTab]               = useState<'book' | 'trades'>('book')
  const [view, setView]             = useState<ViewMode>('both')
  const [grouping, setGrouping]     = useState(groupingProp)
  const [groupingOpen, setGroupingOpen] = useState(false)

  const askMax     = useMemo(() => Math.max(...asks.map(r => r.t), 1), [asks])
  const bidMax     = useMemo(() => Math.max(...bids.map(r => r.t), 1), [bids])
  const askSizeMax = useMemo(() => Math.max(...asks.map(r => r.s), 1), [asks])
  const bidSizeMax = useMemo(() => Math.max(...bids.map(r => r.s), 1), [bids])

  // Lowest ask = asks[last], highest bid = bids[0]
  const lowestAsk  = asks[asks.length - 1]
  const highestBid = bids[0]
  const spread     = lowestAsk && highestBid ? lowestAsk.p - highestBid.p : 0
  const spreadPct  = lowestAsk ? (spread / lowestAsk.p) * 100 : 0

  return (
    <section className="perps-root ob-root" aria-label="Order book">

      {/* ── Tabs ── */}
      <div className="ob-tabs" role="tablist">
        <button
          role="tab" type="button"
          aria-selected={tab === 'book'}
          className={`ob-tab${tab === 'book' ? ' ob-tab--active' : ''}`}
          onClick={() => setTab('book')}
        >
          Order Book
        </button>
        <button
          role="tab" type="button"
          aria-selected={tab === 'trades'}
          className={`ob-tab${tab === 'trades' ? ' ob-tab--active' : ''}`}
          onClick={() => setTab('trades')}
        >
          Trades
        </button>
      </div>

      {tab === 'book' ? (
        <>
          {/* ── Toolbar ── */}
          <div className="ob-toolbar">
            <div className="ob-views" role="group" aria-label="View mode">
              <button type="button" aria-label="Show bids and asks" aria-pressed={view === 'both'}
                className={`ob-view-btn${view === 'both' ? ' ob-view-btn--active' : ''}`}
                onClick={() => setView('both')}>
                <IconBoth />
              </button>
              <button type="button" aria-label="Show bids only" aria-pressed={view === 'bids'}
                className={`ob-view-btn${view === 'bids' ? ' ob-view-btn--active' : ''}`}
                onClick={() => setView('bids')}>
                <IconBids />
              </button>
              <button type="button" aria-label="Show asks only" aria-pressed={view === 'asks'}
                className={`ob-view-btn${view === 'asks' ? ' ob-view-btn--active' : ''}`}
                onClick={() => setView('asks')}>
                <IconAsks />
              </button>
            </div>

            <div className="ob-grouping-wrap">
              <button
                type="button"
                className="ob-grouping-btn"
                onClick={() => setGroupingOpen(v => !v)}
                aria-haspopup="listbox"
                aria-expanded={groupingOpen}
              >
                <span>{grouping}</span>
                <ChevronIcon up={groupingOpen} />
              </button>
              {groupingOpen && (
                <div className="ob-grouping-menu" role="listbox">
                  {GROUPINGS.map(g => (
                    <button
                      key={g}
                      role="option"
                      type="button"
                      aria-selected={g === grouping}
                      className={`ob-grouping-item${g === grouping ? ' ob-grouping-item--active' : ''}`}
                      onClick={() => { setGrouping(g); setGroupingOpen(false) }}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ── Column headers ── */}
          <div className="ob-headers">
            <span>Price</span>
            <span>Amount ({base})</span>
            <span>SUM ({base})</span>
          </div>

          {/* ── Asks ── */}
          {view !== 'bids' && (
            <div className="ob-asks">
              {asks.map(r => (
                <OrderRow
                  key={`a-${r.p}`}
                  row={r}
                  side="ask"
                  depthPct={(r.t / askMax) * 100}
                  sizePct={(r.s / askSizeMax) * 100}
                />
              ))}
            </div>
          )}

          {/* ── Spread ── */}
          <div className="ob-spread" role="row" aria-label="Spread">
            <span className="ob-spread-label">Spread</span>
            <span className="ob-spread-val">{nfPrice.format(spread)}</span>
            <span className="ob-spread-pct">{spreadPct.toFixed(3)}%</span>
          </div>

          {/* ── Bids ── */}
          {view !== 'asks' && (
            <div className="ob-bids">
              {bids.map(r => (
                <OrderRow
                  key={`b-${r.p}`}
                  row={r}
                  side="bid"
                  depthPct={(r.t / bidMax) * 100}
                  sizePct={(r.s / bidSizeMax) * 100}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="ob-empty">No trades yet</div>
      )}
    </section>
  )
}

/* ── Row ──────────────────────────────────────────────────── */
function OrderRow({
  row,
  side,
  depthPct,
  sizePct,
}: {
  row: OrderBookRow
  side: 'ask' | 'bid'
  depthPct: number
  sizePct: number
}) {
  const depth = Math.min(100, Math.max(0, depthPct))
  const size  = Math.min(100, Math.max(0, sizePct))

  return (
    <div className={`ob-row ob-row-${side}`}>
      {/* Depth fill — outer, darker */}
      <div className="ob-fill ob-fill-depth" style={{ width: `${depth}%` }} />
      {/* Size fill — inner, brighter (only when meaningfully large) */}
      {size > 8 && <div className="ob-fill ob-fill-size" style={{ width: `${size}%` }} />}

      <span className={`ob-price ob-price-${side}`}>{nfPrice.format(row.p)}</span>
      <span className="ob-cell ob-cell-center">{nfAmount.format(row.s)}</span>
      <span className="ob-cell ob-cell-right">{fmtTotal(row.t)}</span>
    </div>
  )
}
