import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import {
  SimplePositionsCard,
  type SimplePositionsCardProps,
  type SimplePositionRow,
  type SimpleOpenOrderRow,
  type SimplePositionsTab,
} from './SimplePositionsCard'

const SAMPLE_POSITION: SimplePositionRow = {
  id: 'bnb-long',
  symbol: 'BNB',
  chainLabel: 'BNB CHAIN',
  iconColor: '#F0B90B',
  direction: 'up',
  unrealizedPnl: '+$10.09',
  pnlSign: 'positive',
  entryPrice: '$649.98',
  liqPrice: '$637.00',
  liqDistancePct: 90,
  liqStatus: 'safe',
  liqStatusLabel: 'Safe',
}

const SAMPLE_ORDER: SimpleOpenOrderRow = {
  id: '1',
  symbol: 'BTCUSDT',
  side: 'BUY',
  type: 'LIMIT',
  price: '67,000',
  origQty: '0.1',
  executedQty: '0',
  status: 'NEW',
}

const baseArgs: SimplePositionsCardProps = {
  tab: 'positions',
  onTabChange: fn(),
  positions: [SAMPLE_POSITION],
  openOrders: [],
  historyEmpty: true,
  onClosePosition: fn(),
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

export const Empty: Story = {
  render: () => <Live tab="positions" positions={[]} />,
}

export const OrdersTab: Story = {
  render: () => <Live tab="orders" positions={[]} openOrders={[SAMPLE_ORDER]} />,
}

export const History: Story = {
  render: () => <Live tab="history" historyEmpty />,
}
