import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { OpenOrdersTable } from './OpenOrdersTable'

const meta = {
  title: 'Widgets/Open Orders',
  component: OpenOrdersTable,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  args: {
    onCancel: fn(),
    onCancelAll: fn(),
  },
} satisfies Meta<typeof OpenOrdersTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'With Orders',
  args: {},
}

export const Empty: Story = {
  name: 'Empty State',
  args: { orders: [] },
}
