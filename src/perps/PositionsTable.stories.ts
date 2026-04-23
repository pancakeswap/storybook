import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { PositionsTable } from './PositionsTable'

const meta = {
  title: 'Widgets/Positions',
  component: PositionsTable,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    onCloseAll: fn(),
    onRowAction: fn(),
    onCancelOrder: fn(),
    onSharePnl: fn(),
    onDateFilter: fn(),
  },
} satisfies Meta<typeof PositionsTable>

export default meta
type Story = StoryObj<typeof meta>

/** Default — Positions tab selected. */
export const Default: Story = {}

/** Open Orders tab — Figma 80:1705. */
export const OpenOrders: Story = {
  args: { initialTab: 'open' },
}

/** Order History tab — Figma 80:1870. */
export const OrderHistory: Story = {
  args: { initialTab: 'history' },
}

/** Trade History tab — Figma 80:2080. */
export const TradeHistory: Story = {
  args: { initialTab: 'trades' },
}

/** Transaction History tab — Figma 80:2211. */
export const TransactionHistory: Story = {
  args: { initialTab: 'transactions' },
}

/** Empty state — no rows in any tab. */
export const Empty: Story = {
  name: 'Empty State',
  args: {
    positions: [],
    openOrders: [],
    orderHistory: [],
    tradeHistory: [],
    transactionHistory: [],
    counts: { positions: 0, openOrders: 0, orderHistory: 0, tradeHistory: 0, transactionHistory: 0 },
  },
}
