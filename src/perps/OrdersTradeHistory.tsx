import { useState } from 'react'
import '../ui/perps.css'
import { Tabs, Badge } from '../ui'

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

export interface FundingRecord {
  id: string
  pair: string
  direction: 'long' | 'short'
  fundingFee: string
  fundingRate: string
  time: string
}

type TabKey = 'open' | 'orders' | 'trades' | 'funding'

export interface OrdersTradeHistoryProps {
  openOrders?: OpenOrder[]
  orderHistory?: HistoricalOrder[]
  tradeHistory?: TradeRecord[]
  fundingHistory?: FundingRecord[]
  onCancelOrder?: (id: string) => void
  onCancelAll?: () => void
  /** When provided, hides the internal tab bar and shows this tab's content directly */
  controlledTab?: TabKey
}

const MOCK_OPEN_ORDERS: OpenOrder[] = [
  {
    id: '1',
    pair: 'CAKE/USDT',
    direction: 'long',
    type: 'limit',
    size: '$1,740.00',
    triggerPrice: '$3.30',
    collateral: '$174.00',
    createdAt: '2026-04-01 09:12',
  },
  {
    id: '2',
    pair: 'ETH/USDT',
    direction: 'short',
    type: 'tp',
    size: '$6,360.00',
    triggerPrice: '$3,400.00',
    collateral: '$636.00',
    createdAt: '2026-04-01 08:45',
  },
]

const MOCK_ORDER_HISTORY: HistoricalOrder[] = [
  {
    id: 'h1',
    pair: 'BTC/USDT',
    direction: 'long',
    type: 'Limit',
    size: '$13,084.00',
    price: '$65,420.00',
    status: 'filled',
    createdAt: '2026-03-31 22:10',
  },
  {
    id: 'h2',
    pair: 'CAKE/USDT',
    direction: 'short',
    type: 'Market',
    size: '$870.00',
    price: '$3.52',
    status: 'cancelled',
    createdAt: '2026-03-31 18:30',
  },
]

const MOCK_TRADE_HISTORY: TradeRecord[] = [
  {
    id: 't1',
    pair: 'BTC/USDT',
    direction: 'long',
    side: 'open',
    size: '$13,084.00',
    price: '$65,420.00',
    fee: '-$13.08',
    time: '2026-03-31 22:10',
  },
  {
    id: 't2',
    pair: 'CAKE/USDT',
    direction: 'long',
    side: 'close',
    size: '$3,480.00',
    price: '$3.62',
    fee: '-$3.48',
    pnl: '+$348.00',
    time: '2026-03-31 16:05',
  },
]

const MOCK_FUNDING_HISTORY: FundingRecord[] = [
  {
    id: 'f1',
    pair: 'CAKE/USDT',
    direction: 'long',
    fundingFee: '-$0.18',
    fundingRate: '0.0052%',
    time: '2026-04-01 08:00',
  },
  {
    id: 'f2',
    pair: 'BTC/USDT',
    direction: 'short',
    fundingFee: '+$1.02',
    fundingRate: '-0.0031%',
    time: '2026-04-01 08:00',
  },
]

const TABS: { key: TabKey; label: string }[] = [
  { key: 'open', label: 'Open Orders' },
  { key: 'orders', label: 'Order History' },
  { key: 'trades', label: 'Trade History' },
  { key: 'funding', label: 'Funding' },
]

export function OrdersTradeHistory({
  openOrders = MOCK_OPEN_ORDERS,
  orderHistory = MOCK_ORDER_HISTORY,
  tradeHistory = MOCK_TRADE_HISTORY,
  fundingHistory = MOCK_FUNDING_HISTORY,
  onCancelOrder,
  onCancelAll,
  controlledTab,
}: OrdersTradeHistoryProps) {
  const [internalTab, setInternalTab] = useState<TabKey>('open')
  const activeTab = controlledTab ?? internalTab

  return (
    <div className="perps-root" style={{ padding: 20 }}>
      <div className="p-card" style={{ overflowX: 'auto' }}>
        {/* Tab bar — hidden when controlled from outside */}
        {!controlledTab && (
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
            <Tabs
              variant="underline"
              value={internalTab}
              onChange={(v) => setInternalTab(v as TabKey)}
              items={TABS.map(t => ({
                value: t.key,
                label: t.label,
                count: t.key === 'open' ? openOrders.length : undefined,
              }))}
            />
            {activeTab === 'open' && openOrders.length > 0 && (
              <button
                className="p-action-btn danger"
                style={{ marginLeft: 'auto', flexShrink: 0 }}
                onClick={onCancelAll}
              >
                Cancel All
              </button>
            )}
          </div>
        )}

        {/* Open Orders tab */}
        {activeTab === 'open' && (
          <>
            {openOrders.length === 0 ? (
              <div className="p-empty">No open orders</div>
            ) : (
              <table className="p-table">
                <thead>
                  <tr>
                    <th>Pair</th>
                    <th>Type</th>
                    <th>Size</th>
                    <th>Trigger Price</th>
                    <th>Collateral</th>
                    <th>Created</th>
                    <th scope="col"><span className="sr-only">Actions</span></th>
                  </tr>
                </thead>
                <tbody>
                  {openOrders.map((o) => (
                    <tr key={o.id}>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span className="p-value-sm">{o.pair}</span>
                          <Badge variant={o.direction}>
                            {o.direction.toUpperCase()}
                          </Badge>
                        </div>
                      </td>
                      <td><span className="p-value-sm" style={{ textTransform: 'uppercase', fontSize: 12 }}>{o.type}</span></td>
                      <td><p className="p-value-sm">{o.size}</p></td>
                      <td><p className="p-value-sm" style={{ color: 'var(--p-primary)' }}>{o.triggerPrice}</p></td>
                      <td><p className="p-value-sm">{o.collateral}</p></td>
                      <td><p className="p-label">{o.createdAt}</p></td>
                      <td>
                        <button className="p-action-btn danger" onClick={() => onCancelOrder?.(o.id)}>
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}

        {/* Order History tab */}
        {activeTab === 'orders' && (
          <>
            {orderHistory.length === 0 ? (
              <div className="p-empty">No order history</div>
            ) : (
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
                  {orderHistory.map((o) => (
                    <tr key={o.id}>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span className="p-value-sm">{o.pair}</span>
                          <Badge variant={o.direction}>
                            {o.direction.toUpperCase()}
                          </Badge>
                        </div>
                      </td>
                      <td><p className="p-value-sm">{o.type}</p></td>
                      <td><p className="p-value-sm">{o.size}</p></td>
                      <td><p className="p-value-sm">{o.price}</p></td>
                      <td>
                        <Badge
                          variant={
                            o.status === 'filled' ? 'long' :
                            o.status === 'cancelled' ? 'short' :
                            'warning'
                          }
                        >
                          {o.status.charAt(0).toUpperCase() + o.status.slice(1)}
                        </Badge>
                      </td>
                      <td><p className="p-label">{o.createdAt}</p></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}

        {/* Trade History tab */}
        {activeTab === 'trades' && (
          <>
            {tradeHistory.length === 0 ? (
              <div className="p-empty">No trade history</div>
            ) : (
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
                  {tradeHistory.map((t) => (
                    <tr key={t.id}>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span className="p-value-sm">{t.pair}</span>
                          <Badge variant={t.direction}>
                            {t.direction.toUpperCase()}
                          </Badge>
                        </div>
                      </td>
                      <td>
                        <span className="p-label" style={{ textTransform: 'capitalize' }}>{t.side}</span>
                      </td>
                      <td><p className="p-value-sm">{t.size}</p></td>
                      <td><p className="p-value-sm">{t.price}</p></td>
                      <td><p className="p-value-sm p-muted">{t.fee}</p></td>
                      <td>
                        {t.pnl ? (
                          <p className={`p-value-sm ${t.pnl.startsWith('+') ? 'p-pnl-pos' : 'p-pnl-neg'}`}>
                            {t.pnl}
                          </p>
                        ) : (
                          <p className="p-label">—</p>
                        )}
                      </td>
                      <td><p className="p-label">{t.time}</p></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}

        {/* Funding History tab */}
        {activeTab === 'funding' && (
          <>
            {fundingHistory.length === 0 ? (
              <div className="p-empty">No funding history</div>
            ) : (
              <table className="p-table">
                <thead>
                  <tr>
                    <th>Pair</th>
                    <th>Funding Fee</th>
                    <th>Funding Rate</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {fundingHistory.map((f) => (
                    <tr key={f.id}>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span className="p-value-sm">{f.pair}</span>
                          <Badge variant={f.direction}>
                            {f.direction.toUpperCase()}
                          </Badge>
                        </div>
                      </td>
                      <td>
                        <p className={`p-value-sm ${f.fundingFee.startsWith('+') ? 'p-pnl-pos' : 'p-pnl-neg'}`}>
                          {f.fundingFee}
                        </p>
                      </td>
                      <td><p className="p-value-sm">{f.fundingRate}</p></td>
                      <td><p className="p-label">{f.time}</p></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}
      </div>
    </div>
  )
}
