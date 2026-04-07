import { useState } from 'react'
import '../ui/perps.css'
import { Tabs } from '../ui'
import { PositionsTable } from './PositionsTable'
import type { Position } from './PositionsTable'
import { OpenOrdersTable } from './OpenOrdersTable'
import type { OpenOrder } from './OpenOrdersTable'
import { OrderHistoryTable } from './OrderHistoryTable'
import type { HistoricalOrder } from './OrderHistoryTable'
import { TradeHistoryTable } from './TradeHistoryTable'
import type { TradeRecord } from './TradeHistoryTable'
import { FundingHistoryTable } from './FundingHistoryTable'
import type { FundingRecord } from './FundingHistoryTable'

type TabKey = 'positions' | 'open-orders' | 'order-history' | 'trade-history' | 'funding'

export interface TradingPanelProps {
  positions?: Position[]
  openOrders?: OpenOrder[]
  orderHistory?: HistoricalOrder[]
  tradeHistory?: TradeRecord[]
  fundingHistory?: FundingRecord[]
  onEditCollateral?: (id: string) => void
  onEditTpSl?: (id: string) => void
  onClose?: (id: string) => void
  onCloseAll?: () => void
  onCancelOrder?: (id: string) => void
  onCancelAll?: () => void
}

const TABS: { key: TabKey; label: string }[] = [
  { key: 'positions',     label: 'Positions' },
  { key: 'open-orders',   label: 'Open Orders' },
  { key: 'order-history', label: 'Order History' },
  { key: 'trade-history', label: 'Trade History' },
  { key: 'funding',       label: 'Funding' },
]

export function TradingPanel({
  positions,
  openOrders,
  orderHistory,
  tradeHistory,
  fundingHistory,
  onEditCollateral,
  onEditTpSl,
  onClose,
  onCloseAll,
  onCancelOrder,
  onCancelAll,
}: TradingPanelProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('positions')

  const posCount = positions?.length ?? undefined
  const openCount = openOrders?.length ?? undefined

  return (
    <div style={{ padding: 20 }}>
      <div className="p-card" style={{ overflowX: 'auto' }}>
        <div style={{ marginBottom: 16 }}>
          <Tabs
            variant="underline"
            value={activeTab}
            onChange={(v) => setActiveTab(v as TabKey)}
            items={TABS.map(t => ({
              value: t.key,
              label: t.label,
              count: t.key === 'positions' ? posCount : t.key === 'open-orders' ? openCount : undefined,
            }))}
          />
        </div>

        {activeTab === 'positions' && (
          <PositionsTable
            positions={positions}
            onEditCollateral={onEditCollateral}
            onEditTpSl={onEditTpSl}
            onClose={onClose}
            onCloseAll={onCloseAll}
          />
        )}
        {activeTab === 'open-orders' && (
          <OpenOrdersTable
            orders={openOrders}
            onCancel={onCancelOrder}
            onCancelAll={onCancelAll}
          />
        )}
        {activeTab === 'order-history' && (
          <OrderHistoryTable orders={orderHistory} />
        )}
        {activeTab === 'trade-history' && (
          <TradeHistoryTable trades={tradeHistory} />
        )}
        {activeTab === 'funding' && (
          <FundingHistoryTable records={fundingHistory} />
        )}
      </div>
    </div>
  )
}
