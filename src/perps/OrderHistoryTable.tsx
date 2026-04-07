import '../ui/perps.css'
import { Badge } from '../ui'

export interface HistoricalOrder {
  id: string
  pair: string
  direction: 'long' | 'short'
  type: string
  size: string
  price: string
  status: 'filled' | 'cancelled' | 'expired'
  createdAt: string
}

export interface OrderHistoryTableProps {
  orders?: HistoricalOrder[]
}

const MOCK: HistoricalOrder[] = [
  {
    id: 'h1', pair: 'BTC/USDT', direction: 'long', type: 'Limit',
    size: '$13,084.00', price: '$65,420.00', status: 'filled', createdAt: '2026-03-31 22:10',
  },
  {
    id: 'h2', pair: 'CAKE/USDT', direction: 'short', type: 'Market',
    size: '$870.00', price: '$3.52', status: 'cancelled', createdAt: '2026-03-31 18:30',
  },
]

export function OrderHistoryTable({ orders = MOCK }: OrderHistoryTableProps) {
  if (orders.length === 0) {
    return <div className="p-empty">No order history</div>
  }

  return (
    <table className="p-table">
      <thead>
        <tr>
          <th>Pair</th>
          <th>Type</th>
          <th>Size</th>
          <th>Price</th>
          <th>Status</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((o) => (
          <tr key={o.id}>
            <td>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span className="p-value-sm">{o.pair}</span>
                <Badge variant={o.direction}>{o.direction.toUpperCase()}</Badge>
              </div>
            </td>
            <td><p className="p-value-sm">{o.type}</p></td>
            <td><p className="p-value-sm">{o.size}</p></td>
            <td><p className="p-value-sm">{o.price}</p></td>
            <td>
              <Badge variant={o.status === 'filled' ? 'long' : o.status === 'cancelled' ? 'short' : 'warning'}>
                {o.status.charAt(0).toUpperCase() + o.status.slice(1)}
              </Badge>
            </td>
            <td><p className="p-label">{o.createdAt}</p></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
