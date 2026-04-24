import { useState } from 'react'
import '../ui/perps.css'
import { Button } from '../ui/components/Button'
import { Tag } from '../ui/components/Tag'

export interface Position {
  id: string
  pair: string
  direction: 'long' | 'short'
  size: string
  entryPrice: string
  markPrice: string
  liquidationPrice: string
  margin: string
  leverage: number
  unrealizedPnl: string
  unrealizedPnlPct: string
  borrowFee: string
  fundingFee: string
  tp: string
  sl: string
}

export interface PositionManagementProps {
  positions?: Position[]
  onEditCollateral?: (id: string) => void
  onEditTpSl?: (id: string) => void
  onClose?: (id: string) => void
  onCloseAll?: () => void
  onShare?: (id: string) => void
}

const MOCK_POSITIONS: Position[] = [
  {
    id: '1',
    pair: 'CAKE/USDT',
    direction: 'long',
    size: '$3,480.00',
    entryPrice: '$3.42',
    markPrice: '$3.48',
    liquidationPrice: '$2.05',
    margin: '$348.00',
    leverage: 10,
    unrealizedPnl: '+$60.94',
    unrealizedPnlPct: '+1.75%',
    borrowFee: '-$0.42',
    fundingFee: '-$0.18',
    tp: '$4.20',
    sl: '$3.00',
  },
  {
    id: '2',
    pair: 'BTC/USDT',
    direction: 'short',
    size: '$32,600.00',
    entryPrice: '$66,200.00',
    markPrice: '$65,420.00',
    liquidationPrice: '$72,820.00',
    margin: '$1,630.00',
    leverage: 20,
    unrealizedPnl: '+$383.87',
    unrealizedPnlPct: '+1.18%',
    borrowFee: '-$2.14',
    fundingFee: '+$1.02',
    tp: '$60,000.00',
    sl: '$68,000.00',
  },
]

export function PositionManagement({
  positions = MOCK_POSITIONS,
  onEditCollateral,
  onEditTpSl,
  onClose,
  onCloseAll,
  onShare,
}: PositionManagementProps) {
  const [closing, setClosing] = useState<string | null>(null)

  if (positions.length === 0) {
    return (
      <div className="perps-root" style={{ padding: 20 }}>
        <div className="p-card">
          <div className="p-empty">No open positions</div>
        </div>
      </div>
    )
  }

  return (
    <div className="perps-root" style={{ padding: 20 }}>
      <div className="p-card" style={{ overflowX: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
          <Button variant="tertiary" scale="xs" onClick={onCloseAll}>
            Close All
          </Button>
        </div>

        <table className="p-table">
          <thead>
            <tr>
              <th>Pair</th>
              <th>Size</th>
              <th>Entry / Mark</th>
              <th>Liq. Price</th>
              <th>Margin / Lev</th>
              <th>Unrealized PnL</th>
              <th>Fees</th>
              <th>TP / SL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((pos) => {
              const isPos = pos.unrealizedPnl.startsWith('+')
              return (
                <tr key={pos.id}>
                  {/* Pair + direction */}
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span className="p-value-sm" style={{ fontWeight: 600 }}>
                        {pos.pair}
                      </span>
                      <Tag
                        variant={pos.direction === 'long' ? 'successLowContrast' : 'failureLowContrast'}
                        scale="sm"
                      >
                        {pos.direction.toUpperCase()}
                      </Tag>
                    </div>
                  </td>

                  {/* Size */}
                  <td>
                    <p className="p-value-sm">{pos.size}</p>
                  </td>

                  {/* Entry / Mark */}
                  <td>
                    <p className="p-value-sm" style={{ color: 'var(--pcs-colors-text-subtle)', fontSize: 12 }}>
                      {pos.entryPrice}
                    </p>
                    <p className="p-value-sm" style={{ color: 'var(--pcs-colors-primary)' }}>
                      {pos.markPrice}
                    </p>
                  </td>

                  {/* Liquidation */}
                  <td>
                    <p className="p-value-sm" style={{ color: 'var(--pcs-colors-failure)' }}>
                      {pos.liquidationPrice}
                    </p>
                  </td>

                  {/* Margin / Leverage */}
                  <td>
                    <p className="p-value-sm">{pos.margin}</p>
                    <p className="p-label">{pos.leverage}×</p>
                  </td>

                  {/* PnL */}
                  <td>
                    <p className={`p-value-sm ${isPos ? 'p-pnl-pos' : 'p-pnl-neg'}`}>
                      {pos.unrealizedPnl}
                    </p>
                    <p className={`p-label ${isPos ? 'p-pnl-pos' : 'p-pnl-neg'}`}>
                      {pos.unrealizedPnlPct}
                    </p>
                  </td>

                  {/* Fees */}
                  <td>
                    <p className="p-value-sm p-muted" style={{ fontSize: 12 }}>
                      Borrow: {pos.borrowFee}
                    </p>
                    <p className="p-value-sm p-muted" style={{ fontSize: 12 }}>
                      Fund: {pos.fundingFee}
                    </p>
                  </td>

                  {/* TP/SL */}
                  <td>
                    <p className="p-value-sm p-long" style={{ fontSize: 12 }}>
                      TP: {pos.tp || '—'}
                    </p>
                    <p className="p-value-sm p-short" style={{ fontSize: 12 }}>
                      SL: {pos.sl || '—'}
                    </p>
                  </td>

                  {/* Actions */}
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 80 }}>
                      <button className="p-action-btn" onClick={() => onEditCollateral?.(pos.id)}>
                        Edit
                      </button>
                      <button className="p-action-btn" onClick={() => onEditTpSl?.(pos.id)}>
                        TP/SL
                      </button>
                      <button
                        className="p-action-btn danger"
                        onClick={() => {
                          setClosing(pos.id)
                          onClose?.(pos.id)
                        }}
                        style={{ opacity: closing === pos.id ? 0.6 : 1 }}
                      >
                        Close
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
