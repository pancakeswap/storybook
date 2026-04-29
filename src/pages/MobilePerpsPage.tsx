import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import './MobilePerpsPage.css'
import { DepositModal } from '../widgets/DepositModal'
import { LeverageModal } from '../widgets/LeverageModal'
import { MarketsDropdown, type MarketRow } from '../widgets/MarketsDropdown'
import { OrderForm, type OrderFormDraft, type OrderTypeKey } from '../widgets/OrderForm'
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
/** Favourite star — mirrors MarketsDropdown's StarSvg.
 *  Filled (gold) when active, stroked outline otherwise. */
const Star = ({ filled = false }: { filled?: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinejoin="round"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
  </svg>
)
const Info = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
  </svg>
)
/** Order-book view icons — mirror the desktop OrderBook widget so the
 * mobile column footer reads identically. The currently-active view's
 * icon is shown in the order-book footer button; tap to swap. */
const ObBothIcon = ({ ask, bid, list }: { ask: string; bid: string; list: string }) => (
  <svg width="18" height="17" viewBox="0 0 16 15" fill="none" aria-hidden="true">
    <rect x="0.5" y="0.5" width="6" height="6" stroke={ask} />
    <rect x="0.5" y="8.5" width="6" height="6" stroke={bid} />
    <rect x="8" y="0" width="8" height="3" fill={list} />
    <rect x="8" y="4" width="8" height="3" fill={list} />
    <rect x="8" y="8" width="8" height="3" fill={list} />
    <rect x="8" y="12" width="8" height="3" fill={list} />
  </svg>
)
const ObBidsIcon = ({ bid, list }: { bid: string; list: string }) => (
  <svg width="18" height="17" viewBox="0 0 16 15" fill="none" aria-hidden="true">
    <rect x="0.5" y="0.5" width="6" height="14" stroke={bid} />
    <rect x="8" y="0" width="8" height="3" fill={list} />
    <rect x="8" y="4" width="8" height="3" fill={list} />
    <rect x="8" y="8" width="8" height="3" fill={list} />
    <rect x="8" y="12" width="8" height="3" fill={list} />
  </svg>
)
const ObAsksIcon = ({ ask, list }: { ask: string; list: string }) => (
  <svg width="18" height="17" viewBox="0 0 16 15" fill="none" aria-hidden="true">
    <rect x="0.5" y="0.5" width="6" height="14" stroke={ask} />
    <rect x="8" y="0" width="8" height="3" fill={list} />
    <rect x="8" y="4" width="8" height="3" fill={list} />
    <rect x="8" y="8" width="8" height="3" fill={list} />
    <rect x="8" y="12" width="8" height="3" fill={list} />
  </svg>
)
/**
 * Material Symbols "history" icon — the standard MD3 glyph used across
 * Aster's perp UI. Source: https://fonts.google.com/icons?icon.query=history
 */
/** Material Design `history` icon (24×24 viewBox, filled). */
const HistoryIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6a7 7 0 1 1 7 7 6.96 6.96 0 0 1-4.95-2.05l-1.42 1.41A8.97 8.97 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
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

type ObView = 'both' | 'asks' | 'bids'

const TICK_SIZES = ['0.1', '0.5', '1', '5', '10', '50', '100'] as const
type TickSize = typeof TICK_SIZES[number]

function OrderBookCol({
  view,
  onViewIconClick,
  tickSize,
  onTickSizeChange,
}: {
  view: ObView
  onViewIconClick: () => void
  tickSize: TickSize
  onTickSizeChange: (t: TickSize) => void
}) {
  const [stepOpen, setStepOpen] = useState(false)
  const stepRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!stepOpen) return
    const onDown = (e: MouseEvent) => {
      if (!stepRef.current?.contains(e.target as Node)) setStepOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [stepOpen])
  const ask  = 'var(--pcs-colors-failure)'
  const bid  = '#129E7D'
  const list = 'var(--pcs-colors-text-subtle)'
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
      {(view === 'both' || view === 'asks') && ASKS.map((l) => (
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
      {view === 'both' && (
        <div className="mp-ob-mid">
          <div className="mp-ob-mid-price">77,823.5</div>
          <div className="mp-ob-mid-sub">$77,824.4</div>
        </div>
      )}
      {(view === 'both' || view === 'bids') && BIDS.map((l) => (
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
        <button
          type="button"
          className="mp-ob-icon-btn"
          aria-label="Choose view"
          aria-haspopup="dialog"
          onClick={onViewIconClick}
        >
          {view === 'both' && <ObBothIcon ask={ask} bid={bid} list={list} />}
          {view === 'asks' && <ObAsksIcon ask={ask} list={list} />}
          {view === 'bids' && <ObBidsIcon bid={bid} list={list} />}
        </button>

        <div ref={stepRef} style={{ position: 'relative' }}>
          <button
            type="button"
            className="mp-ob-foot-step"
            aria-haspopup="listbox"
            aria-expanded={stepOpen}
            onClick={() => setStepOpen((v) => !v)}
          >
            {tickSize} <ChevDown />
          </button>
          {stepOpen && (
            <div
              role="listbox"
              style={{
                position: 'absolute',
                bottom: 'calc(100% + 4px)',
                right: 0,
                minWidth: 80,
                background: 'var(--pcs-colors-card)',
                border: '1px solid var(--pcs-colors-card-border)',
                borderRadius: 8,
                boxShadow: 'var(--pcs-shadows-dropdown, 0 12px 32px -16px rgba(0,0,0,0.6))',
                overflow: 'hidden',
                zIndex: 50,
              }}
            >
              {TICK_SIZES.map((t) => (
                <button
                  key={t}
                  type="button"
                  role="option"
                  aria-selected={t === tickSize}
                  onClick={() => {
                    onTickSizeChange(t)
                    setStepOpen(false)
                  }}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'right',
                    padding: '8px 12px',
                    border: 0,
                    background: t === tickSize ? 'var(--pcs-colors-input)' : 'transparent',
                    color: 'var(--pcs-colors-text)',
                    fontFamily: 'inherit',
                    fontSize: 13,
                    fontVariantNumeric: 'tabular-nums',
                    cursor: 'pointer',
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ── Page ──────────────────────────────────────────────────── */

const TFS = ['1m', '5m', '15m', '1h', '4h', '1d'] as const
type Tf = typeof TFS[number]

const DEMO_MARKETS: MarketRow[] = [
  { symbol: 'BTCUSDT', lastPrice: '84185.5', priceChangePercent: '-0.52', quoteVolume: '19401160', maxLeverage: 125 },
  { symbol: 'ETHUSDT', lastPrice: '3245.8',  priceChangePercent: '1.04',  quoteVolume: '9831422',  maxLeverage: 100 },
  { symbol: 'SOLUSDT', lastPrice: '182.35',  priceChangePercent: '3.14',  quoteVolume: '4120999',  maxLeverage: 75 },
  { symbol: 'BNBUSDT', lastPrice: '608.1',   priceChangePercent: '-0.18', quoteVolume: '2810500',  maxLeverage: 75 },
  { symbol: 'XRPUSDT', lastPrice: '2.412',   priceChangePercent: '5.67',  quoteVolume: '1920345',  maxLeverage: 50 },
  { symbol: 'DOGEUSDT',lastPrice: '0.1821',  priceChangePercent: '-2.33', quoteVolume: '1128870',  maxLeverage: 50 },
  { symbol: 'AVAXUSDT',lastPrice: '41.27',   priceChangePercent: '0.44',  quoteVolume: '740120',   maxLeverage: 25 },
]

export function MobilePerpsPage({ initialPair: _initialPair = 'BTCUSDT' }: MobilePerpsPageProps) {
  // Bottom panel tab state (Open Orders / Positions / Assets / TWAP)
  const [tab, setTab] = useState<'orders' | 'positions' | 'assets' | 'twap'>('orders')

  // Chart-toggle state — folds the price chart away when off
  const [chartOpen, setChartOpen] = useState(false)
  const [tf, setTf] = useState<Tf>('15m')

  // ── Order panel state ─────────────────────────────────
  // OrderForm is stateless and consumes a controlled `OrderFormDraft` —
  // we keep one source-of-truth `draft` here. The order-type popover,
  // BunnySlider, and the Buy/Sell two-CTA layout all live inside the
  // OrderForm widget when isMobile, so the page no longer owns those.
  const [draft, setDraft] = useState<OrderFormDraft>({
    side: 'BUY',
    leverage: 100,
    marginMode: 'CROSS',
    sizeUnit: 'BASE',
    quantity: '',
    price: '',
    reduceOnly: false,
    tpSlEnabled: false,
    takeProfitPrice: '',
    stopLossPrice: '',
    timeInForce: 'GTC',
    stopPrice: '',
    stopPriceSource: 'LAST',
  })
  const [typeKey, setTypeKey] = useState<OrderTypeKey>('market')
  const [sizePercent, setSizePercent] = useState(0)
  const [hideOtherSymbols, setHideOtherSymbols] = useState(false)
  const [activeSymbol, setActiveSymbol] = useState(_initialPair)
  const [favorites, setFavorites]       = useState<string[]>([])

  // ── Modal / popover open state ─────────────────────────
  const [depositOpen,    setDepositOpen]    = useState(false)
  const [leverageOpen,   setLeverageOpen]   = useState(false)
  const [marketsOpen,    setMarketsOpen]    = useState(false)
  const [obViewSheetOpen, setObViewSheetOpen] = useState(false)
  const [obView,         setObView]         = useState<ObView>('both')
  const [obTickSize,     setObTickSize]     = useState<TickSize>('0.1')
  const [historyOpen,    setHistoryOpen]    = useState(false)
  const [historyTab,     setHistoryTab]     = useState<'orders' | 'trades' | 'tx'>('orders')

  // Markets dropdown still anchored from the page (it isn't owned by a
  // widget yet). Order-type popover moved into OrderForm.
  const symbolBtnRef    = useRef<HTMLDivElement>(null)
  const [marketsPos,   setMarketsPos]   = useState<{ top: number; left: number; width: number } | null>(null)

  useLayoutEffect(() => {
    if (!marketsOpen || !symbolBtnRef.current) return
    const r = symbolBtnRef.current.getBoundingClientRect()
    // Anchor the markets dropdown under the symbol pill, full body width.
    const margin = 12
    const left = Math.max(margin, r.left)
    const width = Math.min(window.innerWidth - margin * 2, 480)
    setMarketsPos({ top: r.bottom + 4, left, width })
  }, [marketsOpen])

  // Click-outside close for the markets popover
  useEffect(() => {
    if (!marketsOpen) return
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node
      if (!symbolBtnRef.current?.contains(t) && !document.querySelector('.mp-markets-pop')?.contains(t)) {
        setMarketsOpen(false)
      }
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [marketsOpen])

  // ── Action handlers (stubs the consumer would replace) ─
  const handleSubmit = (opts?: { sideOverride?: 'BUY' | 'SELL' }) => {
    const side = opts?.sideOverride ?? draft.side
    alert(`${side} ${draft.quantity || '0'} BTC · ${draft.marginMode} · ${draft.leverage}x · ${typeKey}`)
  }
  const baseAsset = activeSymbol.replace('USDT', '')

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
        <div
          ref={symbolBtnRef}
          role="button"
          aria-haspopup="listbox"
          aria-expanded={marketsOpen}
          tabIndex={0}
          onClick={() => setMarketsOpen((v) => !v)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            cursor: 'pointer',
          }}
        >
          <span className="mp-sym-icon">{baseAsset}</span>
          <span className="mp-sym-pair">{activeSymbol}</span>
          <span className="mp-sym-tag">Perp</span>
          <span className="mp-sym-chev"><ChevDown /></span>
        </div>
        <span className="mp-sym-pnl mp-sym-pnl--down">-0.15%</span>
        <span className="mp-sym-spacer" />
        <button
          type="button"
          className={`mp-sym-icon-btn${favorites.includes(activeSymbol) ? ' mp-sym-icon-btn--starred' : ''}`}
          aria-label={favorites.includes(activeSymbol) ? 'Unfavorite' : 'Favorite'}
          aria-pressed={favorites.includes(activeSymbol)}
          onClick={() =>
            setFavorites((prev) =>
              prev.includes(activeSymbol)
                ? prev.filter((s) => s !== activeSymbol)
                : [...prev, activeSymbol],
            )
          }
        >
          <Star filled={favorites.includes(activeSymbol)} />
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
        <OrderBookCol
          view={obView}
          onViewIconClick={() => setObViewSheetOpen(true)}
          tickSize={obTickSize}
          onTickSizeChange={setObTickSize}
        />
        {/* OrderForm auto-detects the mobile breakpoint and renders the
            mobile column-style layout (same widget, different viewport). */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <OrderForm
            symbol={activeSymbol}
            baseAsset={baseAsset}
            quoteAsset="USDT"
            draft={draft}
            onDraftChange={setDraft}
            typeKey={typeKey}
            onTypeKeyChange={setTypeKey}
            availableBalanceText="11.24"
            preview={{ cost: '0.00 USDT', liq: '-- USDT' }}
            feeText="0.02% / 0.05%"
            sizePercent={sizePercent}
            onSizePercentChange={setSizePercent}
            cta="Buy/Long"
            canSubmit
            onSubmit={handleSubmit}
            onLeverageClick={() => setLeverageOpen(true)}
            onMarginModeToggle={() =>
              setDraft((d) => ({ ...d, marginMode: d.marginMode === 'CROSS' ? 'ISOLATED' : 'CROSS' }))
            }
            onDepositClick={() => setDepositOpen(true)}
          />
        </div>
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
        <button
          type="button"
          className="mp-tabs-icon"
          aria-label="History"
          onClick={() => setHistoryOpen(true)}
        >
          <HistoryIcon />
        </button>
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

      {/* Leverage modal — uses the BunnySlider, same widget as desktop. */}
      <LeverageModal
        isOpen={leverageOpen}
        symbol={activeSymbol}
        currentLeverage={draft.leverage}
        availableBalance={11.24}
        onConfirm={(v) => {
          setDraft((d) => ({ ...d, leverage: v }))
          setLeverageOpen(false)
        }}
        onClose={() => setLeverageOpen(false)}
      />

      {/* History sheet — full-page with Order / Trade / Transaction tabs.
       *  Mirrors Aster's mobile history view; styling follows PCS tokens. */}
      {historyOpen && typeof document !== 'undefined' &&
        createPortal(
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              background: 'var(--pcs-colors-card)',
              display: 'flex',
              flexDirection: 'column',
            }}
            role="dialog"
            aria-modal="true"
            aria-label="History"
          >
            <header
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 16px',
                borderBottom: '1px solid var(--pcs-colors-card-border)',
                flexShrink: 0,
              }}
            >
              <span style={{ fontWeight: 600, fontSize: 16, color: 'var(--pcs-colors-text)', flex: 1 }}>
                History
              </span>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setHistoryOpen(false)}
                style={{
                  width: 32,
                  height: 32,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 0,
                  background: 'transparent',
                  color: 'var(--pcs-colors-text-subtle)',
                  cursor: 'pointer',
                  borderRadius: 8,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z" />
                </svg>
              </button>
            </header>

            {/* Tabs strip */}
            <nav
              role="tablist"
              style={{
                display: 'flex',
                borderBottom: '1px solid var(--pcs-colors-card-border)',
                padding: '0 12px',
                flexShrink: 0,
              }}
            >
              {(
                [
                  { v: 'orders' as const, label: 'Order History' },
                  { v: 'trades' as const, label: 'Trade History' },
                  { v: 'tx' as const,     label: 'Transactions' },
                ]
              ).map((t) => {
                const active = historyTab === t.v
                return (
                  <button
                    key={t.v}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setHistoryTab(t.v)}
                    style={{
                      flex: 1,
                      padding: '12px 8px',
                      border: 0,
                      background: 'transparent',
                      color: active ? 'var(--pcs-colors-text)' : 'var(--pcs-colors-text-subtle)',
                      fontFamily: 'inherit',
                      fontSize: 14,
                      fontWeight: active ? 600 : 400,
                      cursor: 'pointer',
                      position: 'relative',
                    }}
                  >
                    {t.label}
                    {active && (
                      <span
                        style={{
                          position: 'absolute',
                          left: 8,
                          right: 8,
                          bottom: -1,
                          height: 2,
                          background: 'var(--pcs-colors-primary)',
                        }}
                      />
                    )}
                  </button>
                )
              })}
            </nav>

            {/* Body — empty state per tab; rows would be the consumer's data */}
            <div
              style={{
                flex: 1,
                minHeight: 0,
                overflowY: 'auto',
                padding: '24px 12px',
              }}
            >
              {historyTab === 'orders' && (
                <div
                  style={{
                    textAlign: 'center',
                    color: 'var(--pcs-colors-text-subtle)',
                    fontSize: 14,
                    padding: '48px 0',
                  }}
                >
                  No order history yet
                </div>
              )}
              {historyTab === 'trades' && (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {[
                    { time: '2025-04-17 01:37:26', sym: 'BTCUSDT', side: 'Buy',  price: '86,000', qty: '30 USDT', fee: '0.0002 USDT', pnl: '+0.01 USDT' },
                    { time: '2025-04-16 22:14:08', sym: 'BTCUSDT', side: 'Buy',  price: '85,820', qty: '40 USDT', fee: '0.0003 USDT', pnl: '+0.04 USDT' },
                    { time: '2025-04-16 19:02:51', sym: 'ETHUSDT', side: 'Sell', price: '3,210',  qty: '120 USDT', fee: '0.0008 USDT', pnl: '-0.42 USDT' },
                  ].map((tr, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '14px 12px',
                        borderBottom: '1px solid var(--pcs-colors-card-border)',
                        fontVariantNumeric: 'tabular-nums',
                        fontSize: 13,
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <span style={{ color: 'var(--pcs-colors-text)', fontWeight: 600 }}>
                          {tr.sym}{' '}
                          <span style={{
                            color: tr.side === 'Buy' ? 'var(--pcs-colors-success)' : 'var(--pcs-colors-failure)',
                            fontWeight: 400,
                          }}>{tr.side}</span>
                        </span>
                        <span style={{ color: 'var(--pcs-colors-text-subtle)', fontSize: 12 }}>{tr.time}</span>
                        <span style={{ color: 'var(--pcs-colors-text-subtle)', fontSize: 12 }}>
                          {tr.price} · {tr.qty} · fee {tr.fee}
                        </span>
                      </div>
                      <span style={{ color: tr.pnl.startsWith('+') ? 'var(--pcs-colors-success)' : 'var(--pcs-colors-failure)', fontWeight: 600 }}>
                        {tr.pnl}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              {historyTab === 'tx' && (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {[
                    { time: '2025-04-17 01:37:26', type: 'Realized PNL', amount: '+30.00 USDT', sym: 'BTCUSDT' },
                    { time: '2025-04-17 01:35:14', type: 'Funding',      amount: '-0.12 USDT',  sym: 'ETHUSDT' },
                    { time: '2025-04-16 22:14:08', type: 'Deposit',      amount: '+200.00 USDT', sym: '—' },
                  ].map((x, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '14px 12px',
                        borderBottom: '1px solid var(--pcs-colors-card-border)',
                        fontVariantNumeric: 'tabular-nums',
                        fontSize: 13,
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <span style={{ color: 'var(--pcs-colors-text)', fontWeight: 600 }}>{x.type}</span>
                        <span style={{ color: 'var(--pcs-colors-text-subtle)', fontSize: 12 }}>{x.time}</span>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ color: x.amount.startsWith('+') ? 'var(--pcs-colors-success)' : 'var(--pcs-colors-failure)', fontWeight: 600 }}>
                          {x.amount}
                        </div>
                        <div style={{ color: 'var(--pcs-colors-text-subtle)', fontSize: 12 }}>{x.sym}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>,
          document.body,
        )}

      {/* Order-book view selector — bottom action sheet listing
       *  Both / Asks only / Bids only with the active row marked. */}
      {obViewSheetOpen && typeof document !== 'undefined' &&
        createPortal(
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              background: 'color-mix(in srgb, black 50%, transparent)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
            onClick={() => setObViewSheetOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Order book view"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--pcs-colors-card)',
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                paddingBottom: 8,
              }}
            >
              <div
                style={{
                  height: 4,
                  width: 36,
                  margin: '8px auto',
                  borderRadius: 2,
                  background: 'var(--pcs-colors-card-border)',
                }}
              />
              {(
                [
                  { v: 'both' as ObView, label: 'Both' },
                  { v: 'asks' as ObView, label: 'Asks only' },
                  { v: 'bids' as ObView, label: 'Bids only' },
                ]
              ).map((opt) => {
                const active = obView === opt.v
                return (
                  <button
                    key={opt.v}
                    type="button"
                    onClick={() => {
                      setObView(opt.v)
                      setObViewSheetOpen(false)
                    }}
                    style={{
                      display: 'flex',
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 16px',
                      border: 0,
                      background: active ? 'var(--pcs-colors-input)' : 'transparent',
                      color: 'var(--pcs-colors-text)',
                      fontFamily: 'inherit',
                      fontSize: 15,
                      cursor: 'pointer',
                    }}
                  >
                    <span>{opt.label}</span>
                    {active && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                      </svg>
                    )}
                  </button>
                )
              })}
            </div>
          </div>,
          document.body,
        )}

      {/* Markets selector — full-page action sheet on mobile.
       * The MarketsDropdown widget is rendered edge-to-edge on top of a
       * dimmed backdrop, with a header row + close affordance so the
       * sheet feels native. */}
      {marketsOpen && typeof document !== 'undefined' &&
        createPortal(
          <div
            className="mp-markets-pop"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              display: 'flex',
              flexDirection: 'column',
              background: 'var(--pcs-colors-card)',
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Select market"
          >
            <header
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 16px',
                borderBottom: '1px solid var(--pcs-colors-card-border)',
                flexShrink: 0,
              }}
            >
              <span style={{ fontWeight: 600, fontSize: 16, color: 'var(--pcs-colors-text)', flex: 1 }}>
                Select market
              </span>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setMarketsOpen(false)}
                style={{
                  width: 32,
                  height: 32,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 0,
                  background: 'transparent',
                  color: 'var(--pcs-colors-text-subtle)',
                  cursor: 'pointer',
                  borderRadius: 8,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z" />
                </svg>
              </button>
            </header>
            <div style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>
              <MarketsDropdown
                markets={DEMO_MARKETS}
                favorites={favorites}
                onToggleFavorite={(s) =>
                  setFavorites((prev) =>
                    prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
                  )
                }
                onSelect={(s) => {
                  setActiveSymbol(s)
                  setMarketsOpen(false)
                }}
              />
            </div>
          </div>,
          document.body,
        )}
    </section>
  )
}
