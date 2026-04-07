import { useState } from 'react'
import { CandlestickChart } from './CandlestickChart'
import { OrderPanel } from './OrderPanel'
import type { OrderParams } from './OrderPanel'
import { DepositModal } from './DepositModal'
import { Navbar } from './Navbar'
import { TradingPanel } from './TradingPanel'
import type { Position } from './PositionsTable'
import '../ui/perps.css'
import './PerpsPage.css'

const ORACLE_PRICES: Record<string, number> = {
  'CAKE/USDT': 3.48,
  'BTC/USDT':  65420.0,
  'ETH/USDT':  3180.0,
}

export interface PerpsPageProps {
  initialPair?: string
}

export function PerpsPage({ initialPair = 'CAKE/USDT' }: PerpsPageProps) {
  const [balance, setBalance]     = useState(0)
  const [used, setUsed]           = useState(0)
  const [modal, setModal]         = useState<null | 'deposit' | 'withdraw'>(null)
  const [positions, setPositions] = useState<Position[]>([])

  const available = balance - used
  const fmt = (n: number) => n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  const fmtPrice = (n: number) => n >= 100
    ? '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : '$' + n.toFixed(4)

  const handleDeposit = (amount: string) => {
    setBalance((b) => b + (parseFloat(amount) || 0))
  }
  const handleWithdraw = (amount: string) => {
    const n = parseFloat(amount) || 0
    setBalance((b) => Math.max(b - n, used))
  }

  const handlePlaceOrder = (order: OrderParams) => {
    const oracle = ORACLE_PRICES[order.pair] ?? 1
    const entryPrice = order.orderType === 'limit' && order.limitPrice ? parseFloat(order.limitPrice) : oracle
    const margin = parseFloat(order.margin) || 0
    const posSize = margin * order.leverage
    const liqMult = order.direction === 'long' ? 1 - 1 / order.leverage * 0.9 : 1 + 1 / order.leverage * 0.9
    const liqPrice = entryPrice * liqMult

    const newPos: Position = {
      id: String(Date.now()),
      pair: order.pair,
      direction: order.direction,
      size: '$' + fmt(posSize),
      entryPrice: fmtPrice(entryPrice),
      markPrice: fmtPrice(oracle),
      liquidationPrice: fmtPrice(liqPrice),
      margin: '$' + fmt(margin),
      leverage: order.leverage,
      unrealizedPnl: '+$0.00',
      unrealizedPnlPct: '+0.00%',
      borrowFee: '-$0.00',
      fundingFee: '-$0.00',
      tp: order.tpPrice ? fmtPrice(parseFloat(order.tpPrice)) : '',
      sl: order.slPrice ? fmtPrice(parseFloat(order.slPrice)) : '',
    }

    setPositions((prev) => [...prev, newPos])
    setUsed((u) => u + margin)
  }

  return (
    <>
    <div className="perps-root pp-root">
        <Navbar
          onDeposit={() => setModal('deposit')}
          onWithdraw={() => setModal('withdraw')}
        />

        {/* ── Main column ─────────────────────────────────── */}
        <main className="pp-main">
          <div className="pp-chart-wrap">
            <CandlestickChart initialPair={initialPair} initialTimeframe="1h" height={420} />
          </div>

          <div className="pp-bottom">
            <TradingPanel
              positions={positions}
              onCloseAll={() => { setUsed(0); setPositions([]) }}
            />
          </div>
        </main>

        {/* ── Right panel ───────────────────────────────── */}
        <aside className="pp-right" aria-label="Trading panel">
          <OrderPanel
            availableMargin={fmt(available)}
            hasBalance={balance > 0}
            onDepositRequest={() => setModal('deposit')}
            onPlaceOrder={handlePlaceOrder}
          />
        </aside>
      </div>

      {/* ── Deposit / Withdraw modal ─────────────────────── */}
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
