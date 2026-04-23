import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { MarketsDropdown } from './MarketsDropdown'

const meta = {
  title: 'Widgets/Markets Dropdown',
  component: MarketsDropdown,
  parameters: { layout: 'centered' },
  args: {
    onSelect: fn(),
    onToggleFavorite: fn(),
  },
} satisfies Meta<typeof MarketsDropdown>

export default meta

type Story = StoryObj<typeof meta>

/** Default — 5 markets, Favorites tab open. */
export const Default: Story = {}

/** All Markets tab. */
export const AllMarkets: Story = {
  args: { initialTab: 'all' },
}

/** Empty favorites — prompts the user to star some markets. */
export const NoFavorites: Story = {
  args: {
    markets: [
      { id: 'btc', symbol: 'BTC', lastPrice: '84,185.5', change24h: '-0.52%', volume24h: '19,401,160', favorite: false },
    ],
  },
}
