import { useEffect, useState } from 'react'
import { styled, keyframes } from 'styled-components'
import { OrderBook } from '../widgets/OrderBook'
import { OrderForm, type OrderFormDraft } from '../widgets/OrderForm'
import { DepositModal } from '../widgets/DepositModal'
import { SymbolHeader } from '../widgets/SymbolHeader'
import { AccountPanel } from '../widgets/AccountPanel'
import { PositionsPanel } from '../widgets/PositionsPanel'
import { MarketsDropdown, type MarketRow } from '../widgets/MarketsDropdown'
import { RecentTrades, type RecentTradeRow } from '../widgets/RecentTrades'
import { AiCopilotPanel, type TradeIdea } from '../widgets/AiCopilotPanel'
import { QuickOrderPanel } from '../widgets/QuickOrderPanel'
import { MobilePerpsPage } from './MobilePerpsPage'
import '../widgets/perps.css'
import './PerpsPage.css'

// Quick Order overlay — slides in from the left and fully covers the
// trading card (pp-right) when a trade idea's CTA is tapped.
const slideIn = keyframes`
  from { transform: translateX(-100%); }
  to   { transform: translateX(0); }
`

const slideOut = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-100%); }
`

const QuickOrderOverlay = styled.div<{ $closing: boolean }>`
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  animation: ${({ $closing }) => ($closing ? slideOut : slideIn)} 0.24s ease-out;
  animation-fill-mode: forwards;
`

/**
 * AI Copilot app — duplicated from PerpsPage as the starting point for the
 * copilot trading surface. It currently mirrors the Perps BTC/USDT layout
 * (chart + order book + order form + positions); copilot-specific UI gets
 * layered on from here. Shares PerpsPage.css for the base layout until the
 * copilot layout diverges enough to warrant its own stylesheet.
 */
const MOBILE_MAX_WIDTH = 767

function useIsMobile() {
  const get = () =>
    typeof window !== 'undefined' &&
    window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`).matches
  const [isMobile, setIsMobile] = useState<boolean>(get)
  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    const mq = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener?.('change', handler)
    return () => mq.removeEventListener?.('change', handler)
  }, [])
  return isMobile
}

// Demo funding countdown — computed once at module load (not per render).
const DEMO_NEXT_FUNDING = Date.now() + 3_420_000

export interface AiCopilotPageProps {
  initialPair?: string
}

const DEMO_TRADES: RecentTradeRow[] = [
  { id: 'r1', price: '78500.0', size: '0.012', time: Date.now() - 1_000, isBuyerMaker: false },
  { id: 'r2', price: '78498.5', size: '0.040', time: Date.now() - 4_000, isBuyerMaker: true },
  { id: 'r3', price: '78501.0', size: '0.008', time: Date.now() - 9_000, isBuyerMaker: false },
  { id: 'r4', price: '78495.0', size: '0.120', time: Date.now() - 15_000, isBuyerMaker: true },
  { id: 'r5', price: '78502.5', size: '0.030', time: Date.now() - 22_000, isBuyerMaker: false },
]

const DEMO_MARKETS: MarketRow[] = [
  { symbol: 'BTCUSDT', lastPrice: '84185.5', priceChangePercent: '-0.52', quoteVolume: '19401160', maxLeverage: 125 },
  { symbol: 'ETHUSDT', lastPrice: '3245.8',  priceChangePercent: '1.04',  quoteVolume: '9831422',  maxLeverage: 100 },
  { symbol: 'SOLUSDT', lastPrice: '182.35',  priceChangePercent: '3.14',  quoteVolume: '4120999',  maxLeverage: 75 },
  { symbol: 'BNBUSDT', lastPrice: '608.1',   priceChangePercent: '-0.18', quoteVolume: '2810500',  maxLeverage: 75 },
  { symbol: 'XRPUSDT', lastPrice: '2.412',   priceChangePercent: '5.67',  quoteVolume: '1920345',  maxLeverage: 50 },
  { symbol: 'DOGEUSDT',lastPrice: '0.1821',  priceChangePercent: '-2.33', quoteVolume: '1128870',  maxLeverage: 50 },
  { symbol: 'AVAXUSDT',lastPrice: '41.27',   priceChangePercent: '0.44',  quoteVolume: '740120',   maxLeverage: 25 },
]

export function AiCopilotPage({ initialPair: _initialPair = 'BTCUSDT' }: AiCopilotPageProps) {
  const [modal, setModal] = useState<null | 'deposit' | 'withdraw'>(null)
  const [, setEditTpSlId] = useState<string | null>(null)
  const [favorites, setFavorites] = useState<string[]>([])
  const [quickOrder, setQuickOrder] = useState<TradeIdea | null>(null)
  const [quickOrderClosing, setQuickOrderClosing] = useState(false)
  // Mock available balance — random but stable for the session.
  const [availableBalance] = useState(() =>
    (5000 + Math.random() * 20000).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
  )
  const [activeSymbol, setActiveSymbol] = useState('BTCUSDT')
  const isMobile = useIsMobile()

  // Order-form size ↔ bunny slider, linked through the available balance:
  // typing a size moves the bunny; dragging the bunny fills the size.
  const [orderQuantity, setOrderQuantity] = useState('')
  const [orderSizePercent, setOrderSizePercent] = useState(0)
  const availNum = Number(availableBalance.replace(/[^0-9.]/g, '')) || 0
  const clampPct = (n: number) => Math.max(0, Math.min(100, n))
  const handleQuantityChange = (raw: string) => {
    const clean = raw.replace(/[^0-9.]/g, '')
    setOrderQuantity(clean)
    const n = Number(clean) || 0
    setOrderSizePercent(availNum > 0 ? clampPct((n / availNum) * 100) : 0)
  }
  const handleSizePercentChange = (pct: number) => {
    const p = clampPct(pct)
    setOrderSizePercent(p)
    const amount = (availNum * p) / 100
    setOrderQuantity(p > 0 ? String(Math.round(amount * 100) / 100) : '')
  }

  const handleClosePosition = (_id: string) => {
    // demo stub — real positions would come from consumer state
  }

  if (isMobile) {
    return <MobilePerpsPage initialPair={activeSymbol} />
  }

  return (
    <>
      <div className="perps-root pp-root">
        <div className="pp-body">
          <div className="pp-main">

            <div className="pp-top">
              <div className="pp-left">
                <div className="pp-left-top">
                  <SymbolHeader
                    symbol={activeSymbol}
                    pairLabel={`${activeSymbol.replace('USDT', '')} - USDT`}
                    leverage={25}
                    lastPrice="84185.5"
                    markPrice="84190.1"
                    indexPrice="84188.4"
                    fundingRate="0.00009"
                    nextFundingTime={DEMO_NEXT_FUNDING}
                    change24h="-0.52"
                    volume24h="1940116000"
                    renderMarketsDropdown={(close) => (
                      <MarketsDropdown
                        markets={DEMO_MARKETS}
                        favorites={favorites}
                        onToggleFavorite={(s) =>
                          setFavorites((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]))
                        }
                        onSelect={(s) => {
                          setActiveSymbol(s)
                          close()
                        }}
                      />
                    )}
                  />
                  <div className="pp-chart" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7a6eaa' }}>
                    Chart goes here
                  </div>
                </div>
              </div>

              <AiCopilotPanel
                pairLabel={`${activeSymbol.replace('USDT', '')}-USDT`}
                bookContent={
                  <OrderBook
                    embedded
                    asks={[['78510', '0.12'], ['78515', '0.08']]}
                    bids={[['78495', '0.15'], ['78490', '0.22']]}
                    baseAsset="BTC"
                    quoteAsset="USDT"
                    tickSize={0.1}
                    lastPrice={78500}
                    view="both"
                    priceStep="0.1"
                    sizeUnit="BASE"
                    onViewChange={() => {}}
                    onPriceStepChange={() => {}}
                    onSizeUnitChange={() => {}}
                  />
                }
                tradesContent={<RecentTrades embedded trades={DEMO_TRADES} />}
                onCreatePosition={setQuickOrder}
              />
            </div>

            <div className="pp-trading-wrap">
              <PositionsPanel
                tab="positions"
                onTabChange={() => {}}
                positions={[]}
                openOrders={[]}
                onClosePosition={(p) => handleClosePosition(p.id)}
                onEditTpSl={(p) => setEditTpSlId(p.id)}
                onCancelOrder={() => {}}
              />
            </div>

          </div> {/* end pp-main */}

          <aside className="pp-right" aria-label="Order panel and account" style={{ position: 'relative' }}>
            <OrderForm
              symbol="BTCUSDT"
              baseAsset="BTC"
              quoteAsset="USDT"
              draft={{
                side: 'BUY',
                leverage: 25,
                marginMode: 'CROSS',
                sizeUnit: 'BASE',
                quantity: orderQuantity,
                price: '',
                reduceOnly: false,
                tpSlEnabled: false,
                takeProfitPrice: '',
                stopLossPrice: '',
                timeInForce: 'GTC',
              } satisfies OrderFormDraft}
              onDraftChange={(next) => handleQuantityChange(next.quantity)}
              typeKey="market"
              onTypeKeyChange={() => {}}
              availableBalanceText={availableBalance}
              preview={{ cost: '—', liq: '—' }}
              feeText="0.02% / 0.05%"
              sizePercent={orderSizePercent}
              onSizePercentChange={handleSizePercentChange}
              cta="Buy / Long"
              canSubmit={false}
              onSubmit={() => {}}
              onLeverageClick={() => {}}
              onMarginModeToggle={() => {}}
              onDepositClick={() => {}}
            />
            <div className="pp-account-wrap">
              <AccountPanel
                walletDisplay="0x1234…abcd"
                state={{
                  kind: 'ready',
                  equity: '1234.56',
                  available: '987.21',
                  unrealizedPnl: '+12.34',
                  pnlSign: 'positive',
                  marginMode: 'Cross',
                }}
                onDeposit={() => setModal('deposit')}
                onWithdraw={() => setModal('withdraw')}
              />
            </div>

            {quickOrder && (
              <QuickOrderOverlay
                key={quickOrder.id}
                $closing={quickOrderClosing}
                onAnimationEnd={() => {
                  if (quickOrderClosing) {
                    setQuickOrder(null)
                    setQuickOrderClosing(false)
                  }
                }}
              >
                <QuickOrderPanel
                  direction={quickOrder.direction}
                  markPrice={quickOrder.entry}
                  takeProfit={quickOrder.takeProfit}
                  stopLoss={quickOrder.stopLoss}
                  estLiqPrice="$80,142.00"
                  availableBalance={availableBalance}
                  leverage="50x"
                  marginMode="Cross"
                  quoteAsset="USDT"
                  onBack={() => setQuickOrderClosing(true)}
                  onConfirm={() => setQuickOrderClosing(true)}
                />
              </QuickOrderOverlay>
            )}
          </aside>

        </div>
      </div>

      <DepositModal
        isOpen={modal === 'deposit'}
        onClose={() => setModal(null)}
        step="select"
        evmAddress="0x1234…abcd"
        assets={[]}
        onSelectAsset={() => {}}
        amount=""
        onAmountChange={() => {}}
        onPercentClick={() => {}}
        submitState="idle"
        canContinue={false}
        onContinue={() => {}}
        onBack={() => setModal(null)}
      />
    </>
  )
}
