import '../ui/perps.css'
import { Tag } from '../ui/components/Tag'

export interface OpenOrder {
  id: string
  pair: string
  direction: 'long' | 'short'
  type: 'limit' | 'market' | 'tp' | 'sl'
  size: string
  triggerPrice: string
  collateral: string
  createdAt: string
}

export interface OpenOrdersTableProps {
  orders?: OpenOrder[]
  onCancel?: (id: string) => void
  onCancelAll?: () => void
}

const MOCK_OPEN_ORDERS: OpenOrder[] = [
  {
    id: '1', pair: 'CAKE/USDT', direction: 'long', type: 'limit',
    size: '$1,740.00', triggerPrice: '$3.30', collateral: '$174.00', createdAt: '2026-04-01 09:12',
  },
  {
    id: '2', pair: 'ETH/USDT', direction: 'short', type: 'tp',
    size: '$6,360.00', triggerPrice: '$3,400.00', collateral: '$636.00', createdAt: '2026-04-01 08:45',
  },
]

export function OpenOrdersTable({ orders = MOCK_OPEN_ORDERS, onCancel, onCancelAll }: OpenOrdersTableProps) {
  if (orders.length === 0) {
    return <div className="p-empty">No open orders</div>
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12 }}>
        <button className="p-action-btn danger" onClick={onCancelAll}>Cancel All</button>
      </div>
      <table className="p-table">
        <thead>
          <tr>
            <th>Pair</th>
            <th>Type</th>
            <th>Size</th>
            <th>Trigger Price</th>
            <th>Collateral</th>
            <th>Created</th>
            <th><span className="sr-only">Actions</span></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span className="p-value-sm">{o.pair}</span>
                  <Tag variant={o.direction === "long" ? "successLowContrast" : "failureLowContrast"} scale="sm">{o.direction.toUpperCase()}</Tag>
                </div>
              </td>
              <td><span className="p-value-sm" style={{ textTransform: 'uppercase', fontSize: 12 }}>{o.type}</span></td>
              <td><p className="p-value-sm">{o.size}</p></td>
              <td><p className="p-value-sm" style={{ color: 'var(--pcs-colors-primary)' }}>{o.triggerPrice}</p></td>
              <td><p className="p-value-sm">{o.collateral}</p></td>
              <td><p className="p-label">{o.createdAt}</p></td>
              <td><button className="p-action-btn danger" onClick={() => onCancel?.(o.id)}>Cancel</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
