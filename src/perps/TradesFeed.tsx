import { useMemo } from 'react'
import '../ui/perps.css'
import './TradesFeed.css'

/* ── Types ────────────────────────────────────────────────── */

export interface Trade {
  id: string
  /** Trade price. */
  price: number
  /** Size in the base asset (e.g. BTC). */
  amount: number
  /** Trade timestamp (epoch ms). */
  time: number
  /** Which side initiated the trade (buy lifts asks → green; sell hits bids → pink). */
  side: 'buy' | 'sell'
}

export interface TradesFeedProps {
  /** Trades to render, newest first. Falls back to a built-in mock feed. */
  trades?: Trade[]
  /** Quote currency label shown in the header, e.g. 'USDT'. */
  quote?: string
  /** Base asset label shown in the header, e.g. 'BTC'. */
  base?: string
}

/* ── Formatters ───────────────────────────────────────────── */
const nfPrice  = new Intl.NumberFormat('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
const nfAmount = new Intl.NumberFormat('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })

function formatTime(ms: number): string {
  const d = new Date(ms)
  const h = String(d.getHours()).padStart(2, '0')
  const m = String(d.getMinutes()).padStart(2, '0')
  const s = String(d.getSeconds()).padStart(2, '0')
  return `${h}:${m}:${s}`
}

/* ── Mock trades (modelled after the Aster Pro feed) ─────── */
const BASE_PRICE = 75_500
const now = Date.now()

const MOCK_TRADES: Trade[] = Array.from({ length: 40 }, (_, i) => {
  // Alternating-but-noisy buy/sell pattern, prices drifting within ±5 of base
  const sideRand = (Math.sin(i * 1.31) + Math.cos(i * 0.47)) * 0.5
  const side: 'buy' | 'sell' = sideRand > 0 ? 'buy' : 'sell'
  const priceDrift = ((i * 37) % 90) / 10 - 4.5 // ~−4.5 … +4.5
  const price = BASE_PRICE + priceDrift + (side === 'buy' ? 0.1 : -0.1)
  const amount = 0.002 + ((i * 29) % 790) / 10_000 // 0.002–0.081
  const time = now - i * 2_300 // one trade every ~2.3s, newest first
  return {
    id: `t${i}`,
    price: Math.round(price * 10) / 10,
    amount: Math.round(amount * 1000) / 1000,
    time,
    side,
  }
})

/* ── Component ────────────────────────────────────────────── */

export function TradesFeed({
  trades = MOCK_TRADES,
  quote = 'USDT',
  base  = 'BTC',
}: TradesFeedProps) {
  // Sort newest first (defensive — trades prop might not be sorted)
  const ordered = useMemo(
    () => [...trades].sort((a, b) => b.time - a.time),
    [trades],
  )

  return (
    <section className="perps-root tf-root" aria-label="Recent trades">
      <div className="tf-headers">
        <span>Price ({quote})</span>
        <span>Amount ({base})</span>
        <span>Time</span>
      </div>

      <div className="tf-list" role="list">
        {ordered.map((t) => {
          const priceClass = t.side === 'buy' ? 'tf-price-buy' : 'tf-price-sell'
          return (
            <div key={t.id} className="tf-row" role="listitem">
              <span className={`tf-price ${priceClass}`}>{nfPrice.format(t.price)}</span>
              <span className="tf-amount">{nfAmount.format(t.amount)}</span>
              <span className="tf-time">{formatTime(t.time)}</span>
            </div>
          )
        })}

        {ordered.length === 0 && (
          <div className="tf-empty">No trades yet</div>
        )}
      </div>
    </section>
  )
}
