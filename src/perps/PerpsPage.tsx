import { useState } from 'react'
import { CandlestickChart } from './CandlestickChart'
import { OrderBook } from './OrderBook'
import { OrderPanel } from './OrderPanel'
import type { OrderParams } from './OrderPanel'
import { DepositModal } from './DepositModal'
import { EditCollateralModal } from './EditCollateralModal'
import { TakeProfitStopLoss } from './TakeProfitStopLoss'
import { Modal, ModalV2 } from '../ui/widgets/Modal'
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
  const [editCollateralId, setEditCollateralId] = useState<string | null>(null)
  const [editTpSlId, setEditTpSlId] = useState<string | null>(null)

  const editCollateralPos = positions.find((p) => p.id === editCollateralId) ?? null
  const editTpSlPos = positions.find((p) => p.id === editTpSlId) ?? null

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

  const handleClosePosition = (id: string) => {
    setPositions((prev) => prev.filter((p) => p.id !== id))
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
                  <TickerBar />
                  <div className="pp-chart">
                    <CandlestickChart initialPair={initialPair} initialTimeframe="1D" />
                  </div>
                </div>
              </div>

              {/* Order book — aligns with chart height */}
              <OrderBook />
            </div>

            {/* Positions table — spans chart + OB width only */}
            <div className="pp-trading-wrap">
              <TradingPanel
                positions={positions}
                onEditCollateral={(id) => setEditCollateralId(id)}
                onEditTpSl={(id) => setEditTpSlId(id)}
                onClose={handleClosePosition}
                onCloseAll={() => { setUsed(0); setPositions([]) }}
              />
            </div>

          </div> {/* end pp-main */}

          {/* Right panel — full height: OrderPanel on top, AccountPanel below */}
          <aside className="pp-right" aria-label="Order panel and account">
            <OrderPanel onPlaceOrder={handlePlaceOrder} />
            <div className="pp-account-wrap">
              <AccountPanel
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
        availableBalance={fmt(available)}
        usedBalance={fmt(used)}
        totalBalance={fmt(balance)}
        maxWithdrawable={fmt(available)}
        onDeposit={handleDeposit}
        onWithdraw={handleWithdraw}
        onClose={() => setModal(null)}
      />

      {editCollateralPos && (
        <EditCollateralModal
          open={true}
          positionId={editCollateralPos.id}
          pair={editCollateralPos.pair}
          direction={editCollateralPos.direction}
          margin={editCollateralPos.margin}
          leverage={editCollateralPos.leverage}
          liquidationPrice={editCollateralPos.liquidationPrice}
          size={editCollateralPos.size}
          availableBalance={fmt(available)}
          onDeposit={(id, amount) => {
            setBalance((b) => b + (parseFloat(amount) || 0))
            setEditCollateralId(null)
          }}
          onWithdraw={(id, amount) => {
            setBalance((b) => Math.max(b - (parseFloat(amount) || 0), used))
            setEditCollateralId(null)
          }}
          onClose={() => setEditCollateralId(null)}
        />
      )}

      <ModalV2 isOpen={editTpSlPos !== null} onDismiss={() => setEditTpSlId(null)} closeOnOverlayClick>
        <Modal
          title={editTpSlPos ? `TP / SL — ${editTpSlPos.pair}` : 'TP / SL'}
          onDismiss={() => setEditTpSlId(null)}
          minWidth="420px"
        >
          {editTpSlPos && (
            <TakeProfitStopLoss
              direction={editTpSlPos.direction}
              entryPrice={parseFloat(editTpSlPos.entryPrice.replace(/,/g, '')) || 65000}
              positionSize={parseFloat(editTpSlPos.size) || 1000}
              onConfirm={(tp, sl) => {
                setPositions((prev) =>
                  prev.map((p) => p.id === editTpSlPos.id ? { ...p, tp, sl } : p)
                )
                setEditTpSlId(null)
              }}
            />
          )}
        </Modal>
      </ModalV2>
    </>
  )
}
