import type { Meta, StoryObj } from '@storybook/react-vite'
import { RecentTrades, type RecentTradeRow } from './RecentTrades'

const BASE_PRICE = 75_500
const now = Date.now()

const MOCK_TRADES: RecentTradeRow[] = Array.from({ length: 40 }, (_, i) => {
  const sideRand = (Math.sin(i * 1.31) + Math.cos(i * 0.47)) * 0.5
  const isBuyerMaker = sideRand <= 0
  const priceDrift = ((i * 37) % 90) / 10 - 4.5
  const price = BASE_PRICE + priceDrift + (isBuyerMaker ? -0.1 : 0.1)
  const size = 0.002 + ((i * 29) % 790) / 10_000
  return {
    id: `t${i}`,
    price: (Math.round(price * 10) / 10).toFixed(1),
    size: size.toFixed(3),
    time: now - i * 2_300,
    isBuyerMaker,
  }
})

const meta = {
  title: 'Widgets/Recent Trades',
  component: RecentTrades,
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div
        style={{
          width: 280,
          height: 520,
          border: '1px solid var(--pcs-colors-card-border)',
          borderRadius: 12,
          overflow: 'hidden',
          display: 'flex',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RecentTrades>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { trades: MOCK_TRADES, title: 'Recent Trades' },
}

export const Embedded: Story = {
  args: { trades: MOCK_TRADES, embedded: true },
}

export const Empty: Story = {
  args: { trades: [], title: 'Recent Trades' },
}
