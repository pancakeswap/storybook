import { useState } from 'react'
import './MobilePerpsPage.css'
import { AccountPanel } from '../widgets/AccountPanel'
import { ChartPanel } from '../widgets/ChartPanel'
import { DepositModal } from '../widgets/DepositModal'
import { LeverageModal } from '../widgets/LeverageModal'
import { MarketsDropdown, type MarketRow } from '../widgets/MarketsDropdown'
import { OrderBook, type DepthLevel, type OrderBookView } from '../widgets/OrderBook'
import { OrderForm, type OrderFormDraft, type OrderTypeKey } from '../widgets/OrderForm'
import {
  PositionsPanel,
  type PositionsHistoryTab,
  type PositionsPanelTab,
  type TradeHistoryRow,
  type TransactionHistoryRow,
} from '../widgets/PositionsPanel'
import { SymbolHeader } from '../widgets/SymbolHeader'

export interface MobilePerpsPageProps {
  initialPair?: string
}

/* ── Tiny inline icons (still used in the topbar) ──────────── */
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

/* ── Mock order-book data — passed to <OrderBook> as fixture ─ */
const ASKS: DepthLevel[] = [
  ['77831.1', '0.001'],
  ['77830.0', '0.012'],
  ['77827.6', '0.001'],
  ['77827.1', '5.777'],
  ['77823.9', '5.777'],
  ['77823.6', '1.352'],
]
const BIDS: DepthLevel[] = [
  ['77823.5', '0.001'],
  ['77823.4', '0.051'],
  ['77821.5', '0.009'],
  ['77821.1', '0.396'],
  ['77820.1', '0.009'],
  ['77819.1', '0.007'],
]

/* ── Demo markets list — used by the SymbolHeader render-prop ─ */
const DEMO_MARKETS: MarketRow[] = [
  { symbol: 'BTCUSDT', lastPrice: '84185.5', priceChangePercent: '-0.52', quoteVolume: '19401160', maxLeverage: 125 },
  { symbol: 'ETHUSDT', lastPrice: '3245.8',  priceChangePercent: '1.04',  quoteVolume: '9831422',  maxLeverage: 100 },
  { symbol: 'SOLUSDT', lastPrice: '182.35',  priceChangePercent: '3.14',  quoteVolume: '4120999',  maxLeverage: 75 },
  { symbol: 'BNBUSDT', lastPrice: '608.1',   priceChangePercent: '-0.18', quoteVolume: '2810500',  maxLeverage: 75 },
  { symbol: 'XRPUSDT', lastPrice: '2.412',   priceChangePercent: '5.67',  quoteVolume: '1920345',  maxLeverage: 50 },
  { symbol: 'DOGEUSDT',lastPrice: '0.1821',  priceChangePercent: '-2.33', quoteVolume: '1128870',  maxLeverage: 50 },
  { symbol: 'AVAXUSDT',lastPrice: '41.27',   priceChangePercent: '0.44',  quoteVolume: '740120',   maxLeverage: 25 },
]

/* ── Demo history rows — surfaced inside <PositionsPanel>'s
 *  history sheet so the storybook page shows the full layout. */
const DEMO_TRADE_HISTORY: TradeHistoryRow[] = [
  { id: 1, date: '2025-04-17', time: '01:37:26', symbol: 'BTCUSDT', side: 'BUY',  price: '86,000', quantity: '30 USDT',  fee: '0.0002 USDT', realizedProfit: '+0.01 USDT' },
  { id: 2, date: '2025-04-16', time: '22:14:08', symbol: 'BTCUSDT', side: 'BUY',  price: '85,820', quantity: '40 USDT',  fee: '0.0003 USDT', realizedProfit: '+0.04 USDT' },
  { id: 3, date: '2025-04-16', time: '19:02:51', symbol: 'ETHUSDT', side: 'SELL', price: '3,210',  quantity: '120 USDT', fee: '0.0008 USDT', realizedProfit: '-0.42 USDT' },
]

const DEMO_TX_HISTORY: TransactionHistoryRow[] = [
  { id: 1, date: '2025-04-17', time: '01:37:26', type: 'Realized PNL', amount: '+30.00 USDT',  symbol: 'BTCUSDT' },
  { id: 2, date: '2025-04-17', time: '01:35:14', type: 'Funding',      amount: '-0.12 USDT',   symbol: 'ETHUSDT' },
  { id: 3, date: '2025-04-16', time: '22:14:08', type: 'Deposit',      amount: '+200.00 USDT', symbol: '—' },
]

export function MobilePerpsPage({ initialPair: _initialPair = 'BTCUSDT' }: MobilePerpsPageProps) {
  // ── PositionsPanel-driven tab state. The widget owns the tabs strip,
  //    the filter row, the empty state, and the full-page History sheet.
  const [tab, setTab] = useState<PositionsPanelTab>('orders')
  const [historyOpen, setHistoryOpen] = useState(false)
  const [historyTab, setHistoryTab] = useState<PositionsHistoryTab>('orders')
  const [hideOtherSymbols, setHideOtherSymbols] = useState(false)

  // Chart-toggle state — folds the price chart away when off.
  const [chartOpen, setChartOpen] = useState(false)
  const [tf, setTf] = useState<string>('15m')

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
  const [activeSymbol, setActiveSymbol] = useState(_initialPair)
  const [favorites, setFavorites] = useState<string[]>([])

  // ── OrderBook view state — the widget owns the bottom-sheet
  //    selector and the tick-size popover; the page just persists
  //    the chosen values. ─────────────────────────────────
  const [obView, setObView] = useState<OrderBookView>('both')
  const [obPriceStep, setObPriceStep] = useState<string>('0.1')

  // ── Modal state ─────────────────────────────────────────
  const [depositOpen,  setDepositOpen]  = useState(false)
  const [leverageOpen, setLeverageOpen] = useState(false)

  // ── Action handlers (stubs the consumer would replace) ─
  const handleSubmit = (opts?: { sideOverride?: 'BUY' | 'SELL' }) => {
    const side = opts?.sideOverride ?? draft.side
    alert(`${side} ${draft.quantity || '0'} BTC · ${draft.marginMode} · ${draft.leverage}x · ${typeKey}`)
  }
  const baseAsset = activeSymbol.replace('USDT', '')

  // Markets render-prop for SymbolHeader's full-page sheet.
  const renderMarkets = (close: () => void) => (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--pcs-colors-card)',
      }}
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
          onClick={close}
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
            close()
          }}
        />
      </div>
    </div>
  )

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

      {/* Account row — slim mobile variant via auto-detected breakpoint. */}
      <AccountPanel
        state={{
          kind: 'ready',
          equity: '$13.55',
          available: '11.24',
          unrealizedPnl: '+0.00',
          pnlSign: 'zero',
          marginMode: 'Cross',
        }}
        onDeposit={() => setDepositOpen(true)}
      />

      {/* Symbol row — owns its own markets full-page sheet via renderMarketsDropdown. */}
      <SymbolHeader
        symbol={activeSymbol}
        pairLabel={`${baseAsset} - USDT`}
        leverage={draft.leverage}
        change24h="-0.15"
        favorited={favorites.includes(activeSymbol)}
        onToggleFavorite={() =>
          setFavorites((prev) =>
            prev.includes(activeSymbol)
              ? prev.filter((s) => s !== activeSymbol)
              : [...prev, activeSymbol],
          )
        }
        chartOpen={chartOpen}
        onChartToggle={() => setChartOpen((v) => !v)}
        renderMarketsDropdown={renderMarkets}
      />

      {/* Chart panel — toggled by the chart icon in the symbol row. */}
      {chartOpen && (
        <ChartPanel
          activeTimeframe={tf}
          onTimeframeChange={setTf}
          priceLabel="77,823.5"
        />
      )}

      {/* Trade body — order book + order form, side-by-side. */}
      <div className="mp-trade">
        <OrderBook
          asks={ASKS}
          bids={BIDS}
          baseAsset="BTC"
          quoteAsset="USDT"
          tickSize={0.1}
          pricePrecision={1}
          view={obView}
          onViewChange={setObView}
          priceStep={obPriceStep}
          onPriceStepChange={setObPriceStep}
          sizeUnit="BASE"
          onSizeUnitChange={() => {}}
          fundingRateText="0.0006%"
          fundingCountdownText="05:06:37"
          midPriceText="77,823.5"
          midSubText="$77,824.4"
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

      {/* Tabs / filters / empty state / history sheet — all owned by PositionsPanel. */}
      <PositionsPanel
        tab={tab}
        onTabChange={setTab}
        positions={[]}
        openOrders={[]}
        orderHistory={[]}
        tradeHistory={DEMO_TRADE_HISTORY}
        transactionHistory={DEMO_TX_HISTORY}
        onClosePosition={() => {}}
        onEditTpSl={() => {}}
        onCancelOrder={() => {}}
        positionsCount={1}
        hideOtherSymbols={hideOtherSymbols}
        onHideOtherSymbolsChange={setHideOtherSymbols}
        historyOpen={historyOpen}
        onHistoryToggle={setHistoryOpen}
        historyTab={historyTab}
        onHistoryTabChange={setHistoryTab}
      />

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
    </section>
  )
}
