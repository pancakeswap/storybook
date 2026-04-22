import type { Meta, StoryObj } from '@storybook/react-vite'
import { OrderHistoryTable } from './OrderHistoryTable'

const meta = {
  title: 'Widgets/Order History',
  component: OrderHistoryTable,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof OrderHistoryTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'With History',
  args: {},
}

export const Empty: Story = {
  name: 'Empty State',
  args: { orders: [] },
}
