import type { Meta, StoryObj } from '@storybook/react-vite'
import { OrderBook } from './OrderBook'
import { forceTheme } from '../stories-utils'

const meta: Meta<typeof OrderBook> = {
  title: 'Widgets/OrderBook',
  component: OrderBook,
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div style={{ height: 520, border: '1px solid var(--pcs-colors-card-border)', display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof OrderBook>

export const Dark: Story = {
  parameters: { ...forceTheme('dark') },
}

export const Light: Story = {
  parameters: { ...forceTheme('light') },
}

export const CustomGrouping: Story = {
  args: {
    grouping: '0.5',
    quote: 'USDT',
  },
  parameters: { ...forceTheme('dark') },
}
