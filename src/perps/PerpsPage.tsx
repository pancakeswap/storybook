import { useState } from 'react'
import { CandlestickChart } from './CandlestickChart'
import { OrderBook } from './OrderBook'
import { OrderPanel } from './OrderPanel'
import type { OrderParams } from './OrderPanel'
import { DepositModal } from './DepositModal'
import { Navbar } from './Navbar'
import { TickerBar } from './TickerBar'
import { AccountPanel } from './AccountPanel'
import { TradingPanel } from './TradingPanel'
import type { Position } from './PositionsTable'
import '../ui/perps.css'
import './PerpsPage.css'

export interface PerpsPageProps {
  initialPair?: string
}

export function PerpsPage({ initialPair = 'BTCUSDT' }: PerpsPageProps) {
  const [balance, setBalance] = useState(0)
  const [used, setUsed] = useState(0)
  const [modal, setModal] = useState<null | 'deposit' | 'withdraw'>(null)
  const [positions, setPositions] = useState<Position[]>([])

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

  return (
    <>
      <div className="perps-root pp-root">
        <Navbar
          onDeposit={() => setModal('deposit')}
          onWithdraw={() => setModal('withdraw')}
        />

        <TickerBar />

        <div className="pp-body">
          {/* Left + center: chart + orderbook on top, positions below */}
          <div className="pp-main">
            <div className="pp-main-top">
              <CandlestickChart initialPair={initialPair} initialTimeframe="1D" height={420} />
              <OrderBook />
            </div>
            <TradingPanel
              positions={positions}
              onCloseAll={() => { setUsed(0); setPositions([]) }}
            />
          </div>

          {/* Right column: trade panel + account */}
          <aside className="pp-right" aria-label="Trading panel">
            <OrderPanel onPlaceOrder={handlePlaceOrder} />
            <AccountPanel
              equity={{
                spot: '0.00 USD',
                perp: `${fmt(balance)} USD`,
                unrealizedPnl: '0.00 USD',
              }}
              onDeposit={() => setModal('deposit')}
              onWithdraw={() => setModal('withdraw')}
            />
          </aside>
        </div>
      </div>

      <DepositModal
        open={modal !== null}
        initialTab={modal ?? 'deposit'}
        availableBalance={fmt(available)}
        usedBalance={fmt(used)}
        totalBalance={fmt(balance)}
        maxWithdrawable={fmt(available)}
        onDeposit={handleDeposit}
        onWithdraw={handleWithdraw}
        onClose={() => setModal(null)}
      />
    </>
  )
}
