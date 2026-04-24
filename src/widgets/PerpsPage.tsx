import { useState } from 'react'
import { CandlestickChart } from './CandlestickChart'
import { OrderBook } from './OrderBook'
import { OrderPanel } from './OrderPanel'
import type { OrderParams } from './OrderPanel'
import { DepositModal } from './DepositModal'
import { Navbar } from './Navbar'
import { SymbolHeader } from './SymbolHeader'
import { AccountPanel } from './AccountPanel'
import { PositionsPanel } from './PositionsPanel'
import '../ui/perps.css'
import './PerpsPage.css'

export interface PerpsPageProps {
  initialPair?: string
}

export function PerpsPage({ initialPair = 'BTCUSDT' }: PerpsPageProps) {
  const [balance, setBalance] = useState(0)
  const [used] = useState(0)
  const [modal, setModal] = useState<null | 'deposit' | 'withdraw'>(null)
  const [, setEditTpSlId] = useState<string | null>(null)

  const available = balance - used
  const fmt = (n: number) => n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  const handleDeposit = (amount: string) => {
    setBalance((b) => b + (parseFloat(amount) || 0))
  }
  const handleWithdraw = (amount: string) => {
    const n = parseFloat(amount) || 0
    setBalance((b) => Math.max(b - n, used))
  }

  const handlePlaceOrder = (_order: OrderParams) => {
    // Stub: real wiring is out of scope for this layout pass
  }

  const handleClosePosition = (_id: string) => {
    // demo stub — real positions would come from consumer state
  }

  return (
    <>
      <div className="perps-root pp-root">
        <Navbar
          onDeposit={() => setModal('deposit')}
          onWithdraw={() => setModal('withdraw')}
        />

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
                  <div className="pp-chart">
                    <CandlestickChart initialPair={initialPair} initialTimeframe="1D" />
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
            <OrderPanel onPlaceOrder={handlePlaceOrder} />
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
        open={modal !== null}
        initialTab={modal ?? 'deposit'}
        walletBalance={fmt(balance)}
        maxWithdrawable={fmt(available)}
        onDeposit={handleDeposit}
        onWithdraw={handleWithdraw}
        onClose={() => setModal(null)}
      />

      {/* EditCollateralModal / TpSl modal demo wiring removed — PerpsPage
          is a layout showcase and those modals depend on removed Position
          state. The synced PositionsPanel widget has its own story with
          proper TP/SL / close callbacks. */}
    </>
  )
}
