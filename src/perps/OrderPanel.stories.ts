import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { OrderPanel } from './OrderPanel'

const meta = {
  title: 'Widgets/Order Panel',
  component: OrderPanel,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    onPlaceOrder: fn(),
  },
} satisfies Meta<typeof OrderPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    availableMargin: '2,500.00',
  },
}

export const NoMargin: Story = {
  name: 'No Available Margin',
  args: {
    availableMargin: '0.00',
  },
}

export const HighMargin: Story = {
  name: 'Large Account',
  args: {
    availableMargin: '100,000.00',
  },
}
