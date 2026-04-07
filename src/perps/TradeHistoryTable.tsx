import '../ui/perps.css'
import { Badge } from '../ui'

export interface TradeRecord {
  id: string
  pair: string
  direction: 'long' | 'short'
  side: 'open' | 'close'
  size: string
  price: string
  fee: string
  pnl?: string
  time: string
}

export interface TradeHistoryTableProps {
  trades?: TradeRecord[]
}

const MOCK: TradeRecord[] = [
  {
    id: 't1', pair: 'BTC/USDT', direction: 'long', side: 'open',
    size: '$13,084.00', price: '$65,420.00', fee: '-$13.08', time: '2026-03-31 22:10',
  },
  {
    id: 't2', pair: 'CAKE/USDT', direction: 'long', side: 'close',
    size: '$3,480.00', price: '$3.62', fee: '-$3.48', pnl: '+$348.00', time: '2026-03-31 16:05',
  },
]

export function TradeHistoryTable({ trades = MOCK }: TradeHistoryTableProps) {
  if (trades.length === 0) {
    return <div className="p-empty">No trade history</div>
  }

  return (
    <table className="p-table">
      <thead>
        <tr>
          <th>Pair</th>
          <th>Side</th>
          <th>Size</th>
          <th>Price</th>
          <th>Fee</th>
          <th>Realized PnL</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {trades.map((t) => (
          <tr key={t.id}>
            <td>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span className="p-value-sm">{t.pair}</span>
                <Badge variant={t.direction}>{t.direction.toUpperCase()}</Badge>
              </div>
            </td>
            <td><span className="p-label" style={{ textTransform: 'capitalize' }}>{t.side}</span></td>
            <td><p className="p-value-sm">{t.size}</p></td>
            <td><p className="p-value-sm">{t.price}</p></td>
            <td><p className="p-value-sm p-muted">{t.fee}</p></td>
            <td>
              {t.pnl
                ? <p className={`p-value-sm ${t.pnl.startsWith('+') ? 'p-pnl-pos' : 'p-pnl-neg'}`}>{t.pnl}</p>
                : <p className="p-label">—</p>
              }
            </td>
            <td><p className="p-label">{t.time}</p></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
