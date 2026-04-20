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
  /** Asks sorted from lowest ask (closest to spread) to highest. */
  asks?: OrderBookRow[]
  /** Bids sorted from highest bid (closest to spread) to lowest. */
  bids?: OrderBookRow[]
  /** Last traded price shown in the mid band (green/red). */
  midPrice?: number
  /** Direction marker shown next to the mid price. */
  midDirection?: 'up' | 'down'
  /** Secondary reference (mark) price shown under the mid. */
  markPrice?: number
  /** Tick-size grouping label (e.g. "0.1"). */
  grouping?: string
  /** Quote currency. */
  quote?: string
}

const DEFAULT_BASE = 75500.8
function genAsks(): OrderBookRow[] {
  let total = 0
  return Array.from({ length: 12 }, (_, i) => {
    const p = DEFAULT_BASE + (i + 1) * 2.5
    const s = 50 + ((i * 97) % 650)
    total += s
    return { p, s, t: total }
  }).reverse()
}
function genBids(): OrderBookRow[] {
  let total = 0
  return Array.from({ length: 12 }, (_, i) => {
    const p = DEFAULT_BASE - (i + 1) * 2.5
    const s = 50 + ((i * 113) % 720)
    total += s
    return { p, s, t: total }
  })
}

const DEFAULT_ASKS: OrderBookRow[] = genAsks()
const DEFAULT_BIDS: OrderBookRow[] = genBids()

const nfSize = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
const nfPrice = new Intl.NumberFormat('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })

function fmtTotal(v: number): string {
  if (v >= 1_000_000) return (v / 1_000_000).toFixed(2) + 'M'
  if (v >= 1_000) return (v / 1_000).toFixed(2) + 'K'
  return v.toFixed(2)
}

function UpTri() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 14l5-5 5 5z"/>
    </svg>
  )
}
function DownTri() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 10l5 5 5-5z"/>
    </svg>
  )
}

type ViewMode = 'both' | 'bids' | 'asks'

export function OrderBook({
  asks = DEFAULT_ASKS,
  bids = DEFAULT_BIDS,
  midPrice = 75500.8,
  midDirection = 'up',
  markPrice = 75497.0,
  grouping = '0.1',
  quote = 'USDT',
}: OrderBookProps) {
  const [tab, setTab] = useState<'book' | 'trades'>('book')
  const [view, setView] = useState<ViewMode>('both')

  const askMax = useMemo(() => Math.max(...asks.map((r) => r.t), 1), [asks])
  const bidMax = useMemo(() => Math.max(...bids.map((r) => r.t), 1), [bids])

  return (
    <section className="perps-root ob-root" aria-label="Order book">
      {/* Tabs */}
      <div className="ob-tabs" role="tablist">
        <button
          role="tab"
          aria-selected={tab === 'book'}
          className={`ob-tab${tab === 'book' ? ' active' : ''}`}
          onClick={() => setTab('book')}
          type="button"
        >
          Order book
        </button>
        <button
          role="tab"
          aria-selected={tab === 'trades'}
          className={`ob-tab${tab === 'trades' ? ' active' : ''}`}
          onClick={() => setTab('trades')}
          type="button"
        >
          Trades
        </button>
      </div>

      {tab === 'book' ? (
        <>
          {/* View toggles + tick-size/quote chips */}
          <div className="ob-toolbar">
            <div className="ob-view-toggle" role="group" aria-label="Order book view">
              <button
                type="button"
                className={`ob-view-btn${view === 'both' ? ' active' : ''}`}
                onClick={() => setView('both')}
                aria-label="Show bids and asks"
              >
                ≡
              </button>
              <button
                type="button"
                className={`ob-view-btn${view === 'bids' ? ' active' : ''}`}
                onClick={() => setView('bids')}
                aria-label="Show bids only"
              >
                ⋮
              </button>
              <button
                type="button"
                className={`ob-view-btn${view === 'asks' ? ' active' : ''}`}
                onClick={() => setView('asks')}
                aria-label="Show asks only"
              >
                ⋯
              </button>
            </div>
            <div className="ob-toolbar-spacer" />
            <button type="button" className="ob-chip">{grouping} ▾</button>
            <button type="button" className="ob-chip">{quote} ▾</button>
          </div>

          {/* Column headers */}
          <div className="ob-headers">
            <span>Price ({quote})</span>
            <span>Size ({quote})</span>
            <span>Total ({quote})</span>
          </div>

          {/* Asks (stacked upward toward the mid band) */}
          {view !== 'bids' && (
            <div className="ob-asks">
              {asks.map((r) => (
                <Row key={`a-${r.p}`} row={r} side="ask" widthPct={(r.t / askMax) * 100} />
              ))}
            </div>
          )}

          {/* Mid-price band */}
          <div className="ob-mid" role="row" aria-label="Mid price">
            <span className={`ob-mid-price ${midDirection === 'up' ? 'p-long' : 'p-short'}`}>
              {nfPrice.format(midPrice)}
              <span className="ob-mid-dir" aria-hidden="true">{midDirection === 'up' ? <UpTri /> : <DownTri />}</span>
            </span>
            <span className="ob-mid-mark">/ {nfPrice.format(markPrice)}</span>
          </div>

          {/* Bids (stacked downward from the mid band) */}
          {view !== 'asks' && (
            <div className="ob-bids">
              {bids.map((r) => (
                <Row key={`b-${r.p}`} row={r} side="bid" widthPct={(r.t / bidMax) * 100} />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="ob-empty">No Trades yet</div>
      )}
    </section>
  )
}

function Row({ row, side, widthPct }: { row: OrderBookRow; side: 'ask' | 'bid'; widthPct: number }) {
  return (
    <div
      className={`ob-row ob-row-${side}`}
      role="row"
      style={{ ['--ob-w' as string]: `${Math.min(100, Math.max(0, widthPct))}%` }}
    >
      <span className={`ob-price ob-${side}`}>{nfPrice.format(row.p)}</span>
      <span className="ob-num">{nfSize.format(row.s)}</span>
      <span className="ob-num ob-muted">{fmtTotal(row.t)}</span>
    </div>
  )
}
