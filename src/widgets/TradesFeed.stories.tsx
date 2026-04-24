import type { Meta, StoryObj } from '@storybook/react-vite'
import { TradesFeed } from './TradesFeed'

const meta = {
  title: 'Widgets/Trades Feed',
  component: TradesFeed,
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div style={{
        width: 280,
        height: 520,
        border: '1px solid var(--pcs-colors-card-border)',
        borderRadius: 12,
        overflow: 'hidden',
        display: 'flex',
      }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TradesFeed>

export default meta
type Story = StoryObj<typeof meta>

/** Default — 40 mock trades, alternating buy / sell. */
export const Default: Story = {}

/** Different pair — header labels update. */
export const EthUsd: Story = {
  args: { base: 'ETH' },
}

/** Empty state. */
export const Empty: Story = {
  args: { trades: [] },
}
