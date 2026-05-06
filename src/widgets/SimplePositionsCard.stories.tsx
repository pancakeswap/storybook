import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import {
  SimplePositionsCard,
  type SimplePositionsCardProps,
  type SimplePositionRow,
  type SimpleOpenOrderRow,
  type SimpleHistoryRow,
  type SimplePositionsTab,
} from './SimplePositionsCard'

const SAMPLE_POSITION: SimplePositionRow = {
  id: 'bnb-long',
  symbol: 'BNB',
  chainLabel: 'BNB CHAIN',
  iconColor: '#F0B90B',
  direction: 'up',
  leverageText: '100X',
  unrealizedPnl: '+$10.09',
  pnlSign: 'positive',
  entryPrice: '$649.98',
  liqPrice: '$637.00',
  liqDistancePct: 90,
  liqStatus: 'safe',
  liqStatusLabel: 'Safe',
}

const MANY_POSITIONS: readonly SimplePositionRow[] = [
  { ...SAMPLE_POSITION, id: 'bnb-long-1' },
  { ...SAMPLE_POSITION, id: 'bnb-long-2' },
  { ...SAMPLE_POSITION, id: 'bnb-long-3' },
]

const SAMPLE_ORDER: SimpleOpenOrderRow = {
  id: '1',
  symbol: 'BNB',
  iconColor: '#F0B90B',
  side: 'BUY',
  type: 'Limit',
  price: '$649.98',
  origQty: '0.1',
  executedQty: '0',
}

const SAMPLE_HISTORY_ROW: SimpleHistoryRow = {
  id: 'h1',
  symbol: 'BNB',
  iconColor: '#F0B90B',
  direction: 'up',
  leverageText: '100X',
  price: '$649.98',
  quantity: '1.982',
  fee: '-0.11412',
  feeCurrency: 'USDT',
  realizedProfit: '+200.091',
  realizedProfitSign: 'positive',
  realizedProfitCurrency: 'USDT',
  time: '2026-05-05',
}

const SAMPLE_HISTORY: readonly SimpleHistoryRow[] = [
  { ...SAMPLE_HISTORY_ROW, id: 'h1' },
  {
    ...SAMPLE_HISTORY_ROW,
    id: 'h2',
    direction: 'down',
    realizedProfit: '-42.187',
    realizedProfitSign: 'negative',
  },
  { ...SAMPLE_HISTORY_ROW, id: 'h3' },
]

const baseArgs: SimplePositionsCardProps = {
  tab: 'positions',
  onTabChange: fn(),
  positions: [SAMPLE_POSITION],
  openOrders: [],
  history: [],
  onClosePosition: fn(),
  onCancelOrder: fn(),
}

const meta = {
  title: 'Widgets/Simple Positions Card',
  component: SimplePositionsCard,
  parameters: { layout: 'centered' },
  args: baseArgs,
} satisfies Meta<typeof SimplePositionsCard>

export default meta
type Story = StoryObj<typeof meta>

const Live: React.FC<Partial<SimplePositionsCardProps>> = (overrides) => {
  const [tab, setTab] = useState<SimplePositionsTab>(overrides.tab ?? baseArgs.tab)
  return (
    <div style={{ width: 1058 }}>
      <SimplePositionsCard
        {...baseArgs}
        {...overrides}
        tab={tab}
        onTabChange={setTab}
      />
    </div>
  )
}

export const Default: Story = {
  render: () => <Live />,
}

export const MultiplePositions: Story = {
  render: () => <Live positions={MANY_POSITIONS} />,
}

export const Empty: Story = {
  render: () => <Live tab="positions" positions={[]} />,
}

export const OrdersTab: Story = {
  render: () => <Live tab="orders" positions={[]} openOrders={[SAMPLE_ORDER]} />,
}

export const History: Story = {
  render: () => <Live tab="history" positions={[]} history={SAMPLE_HISTORY} />,
}

export const HistoryEmpty: Story = {
  render: () => <Live tab="history" positions={[]} history={[]} />,
}

export const Disconnected: Story = {
  render: () => (
    <Live
      positions={[]}
      disconnectedMessage={{
        positions: 'Connect your wallet to see your active positions',
        orders: 'Connect your wallet to see your open orders',
        history: 'Connect your wallet to see your transaction history',
      }}
    />
  ),
}
