import { useState } from 'react'
import { OrderBook } from './OrderBook'
import { OrderForm, type OrderFormDraft } from './OrderForm'
import { DepositModal } from './DepositModal'
import { SymbolHeader } from './SymbolHeader'
import { AccountPanel } from './AccountPanel'
import { PositionsPanel } from './PositionsPanel'
import '../ui/perps.css'
import './PerpsPage.css'

export interface PerpsPageProps {
  initialPair?: string
}

export function PerpsPage({ initialPair: _initialPair = 'BTCUSDT' }: PerpsPageProps) {
  const [modal, setModal] = useState<null | 'deposit' | 'withdraw'>(null)
  const [, setEditTpSlId] = useState<string | null>(null)

  const handleClosePosition = (_id: string) => {
    // demo stub — real positions would come from consumer state
  }

  return (
    <>
      <div className="perps-root pp-root">
        {/*
         * pp-body — CSS Grid 3 cols × 3 rows (Figma 2043-20619)
         *
         *  col:   1fr          280px       288px
         *         ─────────────────────────────────────
         *  row 1: TickerBar  │            │
         *         ───────────┤  ob-root   │  pp-right
         *  row 2: pp-chart   │ (rows 1+2) │  (rows 1+2)
         *         ───────────┴────────────┤
         *  row 3: pp-trading-wrap         │pp-account-wrap
         *
         *  OB and right panel span rows 1+2 → go all the way up to Navbar.
         *  TickerBar stays col 1 only → chart column width.
         *  TradingPanel has no inner scroll → whole page scrolls.
         */}
        {/*
         * pp-body — flex row
         *
         *   pp-left (flex col, flex: 1)          ob-root   pp-right
         *   ┌───────────────────────────────┐   ┌───────┐ ┌─────────┐
         *   │ TickerBar (chart width only)  │   │       │ │ pp-ord  │
         *   ├───────────────────────────────┤   │  OB   │ │  (flex1)│
         *   │ pp-chart                      │   │       │ ├─────────┤
         *   ├───────────────────────────────┤   │       │ │pp-acct  │
         *   │ pp-trading-wrap               │   │       │ │         │
         *   └───────────────────────────────┘   └───────┘ └─────────┘
         *   OB + right stretch to pp-left height → go all the way up.
         *   TickerBar is naturally 66px (no grid row distortion).
         *   Page scrolls to reveal TradingPanel — no inner scroll.
         */}
        <div className="pp-body">

          {/*
           * pp-main: flex col — occupies flex:1 of pp-body
           *   pp-top  (flex row): TickerBar+Chart | OrderBook
           *   pp-trading-wrap: positions table, same width as pp-top
           */}
          <div className="pp-main">

            <div className="pp-top">
              {/* TickerBar + chart */}
              <div className="pp-left">
                <div className="pp-left-top">
                  <SymbolHeader
                    symbol="BTCUSDT"
                    pairLabel="BTC - USDT"
                    leverage={25}
                    lastPrice="84185.5"
                    markPrice="84190.1"
                    indexPrice="84188.4"
                    fundingRate="0.00009"
                    nextFundingTime={Date.now() + 3_420_000}
                    change24h="-0.52"
                    volume24h="1940116000"
                  />
                  <div className="pp-chart" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7a6eaa' }}>
                    Chart goes here
                  </div>
                </div>
              </div>

              {/* Order book — aligns with chart height */}
              <OrderBook
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
            </div>

            {/* Positions table — spans chart + OB width only */}
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

          {/* Right panel — full height: OrderPanel on top, AccountPanel below */}
          <aside className="pp-right" aria-label="Order panel and account">
            <OrderForm
              symbol="BTCUSDT"
              baseAsset="BTC"
              quoteAsset="USDT"
              draft={{
                side: 'BUY',
                leverage: 25,
                marginMode: 'CROSS',
                sizeUnit: 'BASE',
                quantity: '',
                price: '',
                reduceOnly: false,
                tpSlEnabled: false,
                takeProfitPrice: '',
                stopLossPrice: '',
                timeInForce: 'GTC',
              } satisfies OrderFormDraft}
              onDraftChange={() => {}}
              typeKey="market"
              onTypeKeyChange={() => {}}
              availableBalanceText="0.00"
              preview={{ cost: '—', liq: '—' }}
              feeText="0.02% / 0.05%"
              sizePercent={0}
              onSizePercentChange={() => {}}
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

      {/* EditCollateralModal / TpSl modal demo wiring removed — PerpsPage
          is a layout showcase and those modals depend on removed Position
          state. The synced PositionsPanel widget has its own story with
          proper TP/SL / close callbacks. */}
    </>
  )
}
