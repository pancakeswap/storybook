import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import {
  PositionsPanel,
  type OpenOrderRow,
  type PositionRow,
  type PositionsPanelTab,
} from './PositionsPanel'

const MOCK_POSITIONS: PositionRow[] = [
  {
    id: 'BTCUSDT-LONG',
    symbol: 'BTCUSDT',
    positionAmt: 0.05,
    entryPrice: 78250,
    leverage: 25,
    unrealizedProfit: '42.15',
    tpStopPrice: '80000',
    slStopPrice: '77000',
  },
  {
    id: 'ETHUSDT-SHORT',
    symbol: 'ETHUSDT',
    positionAmt: -0.8,
    entryPrice: 3212,
    leverage: 10,
    unrealizedProfit: '-18.40',
  },
]

const MOCK_ORDERS: OpenOrderRow[] = [
  {
    id: 101,
    orderId: 101,
    symbol: 'BTCUSDT',
    side: 'BUY',
    type: 'LIMIT',
    price: '77800',
    origQty: '0.01',
    executedQty: '0',
    status: 'NEW',
  },
  {
    id: 102,
    orderId: 102,
    symbol: 'ETHUSDT',
    side: 'SELL',
    type: 'STOP_MARKET',
    price: '3250',
    origQty: '0.5',
    executedQty: '0',
    status: 'NEW',
  },
]

const mockMarkPrice = (s: string) => (s === 'BTCUSDT' ? 78900 : 3180)

const meta = {
  title: 'Widgets/Positions Panel 🆕',
  component: PositionsPanel,
  parameters: { layout: 'fullscreen' },
  args: {
    tab: 'positions',
    positions: MOCK_POSITIONS,
    openOrders: MOCK_ORDERS,
    onTabChange: fn(),
    onClosePosition: fn(),
    onEditTpSl: fn(),
    onCancelOrder: fn(),
    useMarkPriceForSymbol: mockMarkPrice,
    computeLiqPrice: ({ side, entryPrice, leverage }) => {
      const maintMargin = 1 / leverage - 0.005
      return side === 'BUY' ? entryPrice * (1 - maintMargin) : entryPrice * (1 + maintMargin)
    },
  },
} satisfies Meta<typeof PositionsPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Positions: Story = {}

export const OpenOrders: Story = { args: { tab: 'orders' } }

export const History: Story = { args: { tab: 'history' } }

export const EmptyPositions: Story = { args: { positions: [] } }

/** Interactive — tab state managed locally. */
export const Interactive: Story = {
  render: (args) => {
    const [tab, setTab] = useState<PositionsPanelTab>('positions')
    return <PositionsPanel {...args} tab={tab} onTabChange={setTab} />
  },
}
