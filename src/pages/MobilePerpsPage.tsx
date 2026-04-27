import { useState } from 'react'
import './MobilePerpsPage.css'
import { BunnySlider } from '../widgets/BunnySlider'
import { DepositModal } from '../widgets/DepositModal'
import { ChartIcon, ChartDisableIcon } from '../primitives/Icons'

export interface MobilePerpsPageProps {
  initialPair?: string
}

/* ── Tiny inline icons ─────────────────────────────────────── */
const Menu = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
  </svg>
)
const ChevDown = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7 10l5 5 5-5z" />
  </svg>
)
const Star = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M12 2l2.6 6.5 6.9.6-5.2 4.6 1.6 6.7L12 17l-5.9 3.4 1.6-6.7L2.5 9.1l6.9-.6z" />
  </svg>
)
const Info = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
  </svg>
)
const Filter = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3 6h18M6 12h12M10 18h4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
)
const ListIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm5-10h11v2H9zm0 5h11v2H9zm0 5h11v2H9z" />
  </svg>
)
const HistoryIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13 3a9 9 0 109 9h-2a7 7 0 11-7-7v3l4-4-4-4v3zm-1 5h-1.5v5l4.3 2.6.7-1.2-3.5-2.1V8z" />
  </svg>
)
const Plus = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

/* ── Mock data ─────────────────────────────────────────────── */
type Level = { price: string; size: string; depth: number }
const ASKS: Level[] = [
  { price: '77,831.1', size: '0.001', depth: 18 },
  { price: '77,830.0', size: '0.012', depth: 28 },
  { price: '77,827.6', size: '0.001', depth: 14 },
  { price: '77,827.1', size: '5.777', depth: 86 },
  { price: '77,823.9', size: '5.777', depth: 88 },
  { price: '77,823.6', size: '1.352', depth: 38 },
]
const BIDS: Level[] = [
  { price: '77,823.5', size: '0.001', depth: 18 },
  { price: '77,823.4', size: '0.051', depth: 38 },
  { price: '77,821.5', size: '0.009', depth: 22 },
  { price: '77,821.1', size: '0.396', depth: 60 },
  { price: '77,820.1', size: '0.009', depth: 24 },
  { price: '77,819.1', size: '0.007', depth: 22 },
]

/* ── Sub-components ────────────────────────────────────────── */

function OrderBookCol() {
  return (
    <div className="mp-ob">
      <div className="mp-ob-funding">
        Funding (8h) / Countdown
        <strong>0.0006% / 05:06:37</strong>
      </div>
      <div className="mp-ob-head">
        <span>Price<br />(USDT)</span>
        <span className="mp-ob-size">Size<br />(BTC) <ChevDown /></span>
      </div>
      {ASKS.map((l) => (
        <div key={'a' + l.price} className="mp-ob-row mp-ob-row--ask">
          <span
            className="mp-ob-bar"
            style={{
              width: `${l.depth}%`,
              background: 'color-mix(in srgb, var(--pcs-colors-failure) 18%, transparent)',
            }}
          />
          <span>{l.price}</span>
          <span>{l.size}</span>
        </div>
      ))}
      <div className="mp-ob-mid">
        <div className="mp-ob-mid-price">77,823.5</div>
        <div className="mp-ob-mid-sub">$77,824.4</div>
      </div>
      {BIDS.map((l) => (
        <div key={'b' + l.price} className="mp-ob-row mp-ob-row--bid">
          <span
            className="mp-ob-bar"
            style={{
              width: `${l.depth}%`,
              background: 'color-mix(in srgb, #129E7D 18%, transparent)',
            }}
          />
          <span>{l.price}</span>
          <span>{l.size}</span>
        </div>
      ))}
      <div className="mp-ob-foot">
        <button type="button" className="mp-ob-icon-btn" aria-label="View options"><ListIcon /></button>
        <button type="button" className="mp-ob-foot-step">0.1 <ChevDown /></button>
      </div>
    </div>
  )
}

interface OrderPanelColProps {
  size: number
  onSizeChange: (n: number) => void
  marginMode: 'cross' | 'isolated'
  onMarginModeToggle: () => void
  leverage: number
  onLeveragePrompt: () => void
  orderType: 'Market' | 'Limit' | 'Stop Limit' | 'Stop Market'
  onOrderTypeCycle: () => void
  tpsl: boolean
  onTpslChange: (v: boolean) => void
  reduceOnly: boolean
  onReduceOnlyChange: (v: boolean) => void
  onTopUp: () => void
  onBuy: () => void
  onSell: () => void
  available?: number     // available USDT
}

function OrderPanelCol({
  size,
  onSizeChange,
  marginMode,
  onMarginModeToggle,
  leverage,
  onLeveragePrompt,
  orderType,
  onOrderTypeCycle,
  tpsl,
  onTpslChange,
  reduceOnly,
  onReduceOnlyChange,
  onTopUp,
  onBuy,
  onSell,
  available = 11.24,
}: OrderPanelColProps) {
  return (
    <div className="mp-op">
      <div className="mp-op-row">
        <button type="button" className="mp-op-pill" onClick={onMarginModeToggle}>
          {marginMode === 'cross' ? 'Cross' : 'Isolated'}
        </button>
        <button type="button" className="mp-op-pill" onClick={onLeveragePrompt}>
          {leverage}x
        </button>
      </div>

      <div className="mp-op-select" role="button" tabIndex={0} onClick={onOrderTypeCycle}>
        <span className="mp-op-select-info"><Info /></span>
        <span className="mp-op-select-label">{orderType}</span>
        <span className="mp-op-select-chev"><ChevDown /></span>
      </div>

      <div className="mp-op-input">
        <input
          placeholder="Size"
          inputMode="decimal"
          value={Number.isFinite(size) ? size : ''}
          onChange={(e) => {
            const v = parseFloat(e.target.value)
            onSizeChange(Number.isFinite(v) ? v : 0)
          }}
        />
        <span className="mp-op-input-suffix">BTC <ChevDown /></span>
      </div>

      {/* Use the real BunnySlider so the mobile slider matches the
       * web view (track + bunny butt + bunny head thumb). */}
      <BunnySlider
        min={0}
        max={1}
        step={0.001}
        value={Math.max(0, Math.min(1, size))}
        onValueChanged={onSizeChange}
      />

      <div className="mp-op-line">
        <span>Avbl</span>
        <strong>{available.toFixed(2)} USDT</strong>
        <button type="button" aria-label="Top up" onClick={onTopUp}><Plus /></button>
      </div>

      <label className="mp-op-check">
        <input type="checkbox" checked={tpsl} onChange={(e) => onTpslChange(e.target.checked)} />
        <span>TP/SL</span>
      </label>
      <label className="mp-op-check">
        <input type="checkbox" checked={reduceOnly} onChange={(e) => onReduceOnlyChange(e.target.checked)} />
        <span>Reduce-Only</span>
      </label>

      <div className="mp-op-stats up">
        <div className="mp-op-stats-row"><span>Est. liq. price</span><span className="v">-- USDT</span></div>
        <div className="mp-op-stats-row"><span>Margin</span><span className="v">{(size * 100).toFixed(2)} USDT</span></div>
        <div className="mp-op-stats-row"><span>Max</span><span className="v">0.013 BTC</span></div>
      </div>

      <button type="button" className="mp-op-cta mp-op-cta--buy" onClick={onBuy}>Buy/Long</button>

      <div className="mp-op-stats down">
        <div className="mp-op-stats-row"><span>Est. liq. price</span><span className="v">-- USDT</span></div>
        <div className="mp-op-stats-row"><span>Margin</span><span className="v">{(size * 100).toFixed(2)} USDT</span></div>
        <div className="mp-op-stats-row"><span>Max</span><span className="v">0.016 BTC</span></div>
      </div>

      <button type="button" className="mp-op-cta mp-op-cta--sell" onClick={onSell}>Sell/Short</button>
    </div>
  )
}

/* ── Page ──────────────────────────────────────────────────── */

const TFS = ['1m', '5m', '15m', '1h', '4h', '1d'] as const
type Tf = typeof TFS[number]

const ORDER_TYPES: Array<'Market' | 'Limit' | 'Stop Limit' | 'Stop Market'> = [
  'Market',
  'Limit',
  'Stop Limit',
  'Stop Market',
]

export function MobilePerpsPage({ initialPair: _initialPair = 'BTCUSDT' }: MobilePerpsPageProps) {
  // Bottom panel tab state (Open Orders / Positions / Assets / TWAP)
  const [tab, setTab] = useState<'orders' | 'positions' | 'assets' | 'twap'>('orders')

  // Chart-toggle state — folds the price chart away when off
  const [chartOpen, setChartOpen] = useState(false)
  const [tf, setTf] = useState<Tf>('15m')

  // ── Order panel state ─────────────────────────────────
  const [size, setSize]                 = useState(0)
  const [marginMode, setMarginMode]     = useState<'cross' | 'isolated'>('cross')
  const [leverage, setLeverage]         = useState(100)
  const [orderType, setOrderType]       = useState<typeof ORDER_TYPES[number]>('Market')
  const [tpsl, setTpsl]                 = useState(false)
  const [reduceOnly, setReduceOnly]     = useState(false)
  const [hideOtherSymbols, setHideOtherSymbols] = useState(false)
  const [favorited, setFavorited]       = useState(false)

  // ── Modal state ───────────────────────────────────────
  const [depositOpen, setDepositOpen]   = useState(false)

  // ── Action handlers (stubs the consumer would replace) ─
  const cycleOrderType = () => {
    const i = ORDER_TYPES.indexOf(orderType)
    setOrderType(ORDER_TYPES[(i + 1) % ORDER_TYPES.length])
  }
  const promptLeverage = () => {
    const next = window.prompt('Set leverage (1–125)', String(leverage))
    if (next == null) return
    const n = parseInt(next, 10)
    if (Number.isFinite(n) && n >= 1 && n <= 125) setLeverage(n)
  }
  const handleBuy  = () => alert(`BUY ${size.toFixed(3)} BTC · ${marginMode} · ${leverage}x · ${orderType}`)
  const handleSell = () => alert(`SELL ${size.toFixed(3)} BTC · ${marginMode} · ${leverage}x · ${orderType}`)

  return (
    <section className="mp-root" aria-label="Perpetuals · Mobile">
      {/* Top bar */}
      <header className="mp-topbar">
        <button type="button" className="mp-tb-icon-btn" aria-label="Menu">
          <span style={{ width: 16, height: 16, borderRadius: 999, background: '#1FC7D4' }} />
        </button>
        <div className="mp-tb-spacer" />
        <button type="button" className="mp-tb-pill" aria-label="Network">
          <span className="mp-chain-icon">B</span>
          <ChevDown />
        </button>
        <button type="button" className="mp-tb-pill" aria-label="Wallet">
          0x64…a0 <ChevDown />
        </button>
        <button type="button" className="mp-tb-pill" aria-label="Region">
          Old <ChevDown />
        </button>
        <button type="button" className="mp-tb-icon-btn" aria-label="More">
          <Menu />
        </button>
      </header>

      {/* Account row */}
      <div className="mp-account">
        <span className="mp-account-label">
          Perpetual Account <strong>$13.55</strong>
        </span>
        <button
          type="button"
          className="mp-account-btn mp-account-btn--primary"
          onClick={() => setDepositOpen(true)}
        >
          Deposit
        </button>
      </div>

      {/* Symbol row */}
      <div className="mp-sym">
        <span className="mp-sym-icon">BTC</span>
        <span className="mp-sym-pair">BTCUSDT</span>
        <span className="mp-sym-tag">Perp</span>
        <span className="mp-sym-chev"><ChevDown /></span>
        <span className="mp-sym-pnl mp-sym-pnl--down">-0.15%</span>
        <span className="mp-sym-spacer" />
        <button
          type="button"
          className={`mp-sym-icon-btn${favorited ? ' mp-sym-icon-btn--active' : ''}`}
          aria-label={favorited ? 'Unfavorite' : 'Favorite'}
          aria-pressed={favorited}
          onClick={() => setFavorited((v) => !v)}
        >
          <Star />
        </button>
        <button
          type="button"
          className={`mp-sym-icon-btn${chartOpen ? ' mp-sym-icon-btn--active' : ''}`}
          aria-label={chartOpen ? 'Hide chart' : 'Show chart'}
          aria-pressed={chartOpen}
          onClick={() => setChartOpen((v) => !v)}
        >
          {chartOpen ? <ChartDisableIcon width="20px" /> : <ChartIcon width="20px" />}
        </button>
      </div>

      {/* Chart panel — toggled by the chart icon in the symbol row */}
      {chartOpen && (
        <div className="mp-chart" aria-label="Price chart">
          <div className="mp-chart-tfs" role="tablist">
            {TFS.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tf === t}
                className={`mp-chart-tf${tf === t ? ' mp-chart-tf--active' : ''}`}
                onClick={() => setTf(t)}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="mp-chart-canvas">
            <span className="mp-chart-line" />
            <span className="mp-chart-pricepill">77,823.5</span>
          </div>
        </div>
      )}

      {/* Trade body */}
      <div className="mp-trade">
        <OrderBookCol />
        <OrderPanelCol
          size={size}
          onSizeChange={setSize}
          marginMode={marginMode}
          onMarginModeToggle={() =>
            setMarginMode((m) => (m === 'cross' ? 'isolated' : 'cross'))
          }
          leverage={leverage}
          onLeveragePrompt={promptLeverage}
          orderType={orderType}
          onOrderTypeCycle={cycleOrderType}
          tpsl={tpsl}
          onTpslChange={setTpsl}
          reduceOnly={reduceOnly}
          onReduceOnlyChange={setReduceOnly}
          onTopUp={() => setDepositOpen(true)}
          onBuy={handleBuy}
          onSell={handleSell}
        />
      </div>

      {/* Tabs */}
      <nav className="mp-tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'orders'}
          className={`mp-tab${tab === 'orders' ? ' mp-tab--active' : ''}`}
          onClick={() => setTab('orders')}
        >
          Open Orders
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'positions'}
          className={`mp-tab${tab === 'positions' ? ' mp-tab--active' : ''}`}
          onClick={() => setTab('positions')}
        >
          Positions (1)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'assets'}
          className={`mp-tab${tab === 'assets' ? ' mp-tab--active' : ''}`}
          onClick={() => setTab('assets')}
        >
          Assets
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'twap'}
          className={`mp-tab${tab === 'twap' ? ' mp-tab--active' : ''}`}
          onClick={() => setTab('twap')}
        >
          TWAP
        </button>
        <span className="mp-tabs-spacer" />
        <button type="button" className="mp-tabs-icon" aria-label="History"><HistoryIcon /></button>
      </nav>

      {/* Filters */}
      <div className="mp-filters">
        <button type="button" className="mp-instr">All instruments <ChevDown /></button>
        <span className="sep" />
        <label className="mp-check">
          <input
            type="checkbox"
            checked={hideOtherSymbols}
            onChange={(e) => setHideOtherSymbols(e.target.checked)}
          />
          <span>Hide other symbols</span>
        </label>
        <span style={{ flex: 1 }} />
        <button type="button" className="mp-instr" aria-label="Filter"><Filter /></button>
      </div>

      {/* Empty state — content varies by tab */}
      <div className="mp-empty">
        {tab === 'orders' && 'No open order found'}
        {tab === 'positions' && 'No open positions'}
        {tab === 'assets' && 'No assets to display'}
        {tab === 'twap' && 'No TWAP orders'}
      </div>

      {/* Deposit modal — wired to the Deposit + Top-up + Avbl-plus buttons */}
      <DepositModal isOpen={depositOpen} onClose={() => setDepositOpen(false)} />
    </section>
  )
}
