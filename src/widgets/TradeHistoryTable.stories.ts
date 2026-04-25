import type { Meta, StoryObj } from '@storybook/react-vite'
import { TradeHistoryTable } from './TradeHistoryTable'

const meta = {
  title: 'Widgets/Trade History ⚠️ deprecated',
  component: TradeHistoryTable,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof TradeHistoryTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'With History',
  args: {},
}

export const Empty: Story = {
  name: 'Empty State',
  args: { trades: [] },
}
