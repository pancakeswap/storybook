import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import { MarketsDropdown, type MarketRow } from './MarketsDropdown'

const MOCK_MARKETS: MarketRow[] = [
  { symbol: 'BTCUSDT', lastPrice: '84185.5', priceChangePercent: '-0.52', quoteVolume: '19401160' },
  { symbol: 'ETHUSDT', lastPrice: '3245.8', priceChangePercent: '1.04', quoteVolume: '9831422' },
  { symbol: 'SOLUSDT', lastPrice: '182.35', priceChangePercent: '3.14', quoteVolume: '4120999' },
  { symbol: 'BNBUSDT', lastPrice: '608.1', priceChangePercent: '-0.18', quoteVolume: '2810500' },
  { symbol: 'XRPUSDT', lastPrice: '2.412', priceChangePercent: '5.67', quoteVolume: '1920345' },
  { symbol: 'DOGEUSDT', lastPrice: '0.1821', priceChangePercent: '-2.33', quoteVolume: '1128870' },
  { symbol: 'AVAXUSDT', lastPrice: '41.27', priceChangePercent: '0.44', quoteVolume: '740120' },
]

const meta = {
  title: 'Widgets/Markets Dropdown 🆕',
  component: MarketsDropdown,
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div style={{ width: 560 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    markets: MOCK_MARKETS,
    favorites: [],
    onSelect: fn(),
    onToggleFavorite: fn(),
  },
} satisfies Meta<typeof MarketsDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithFavorites: Story = {
  args: { favorites: ['BTCUSDT', 'ETHUSDT'] },
}

export const Loading: Story = {
  args: { markets: [], isLoading: true },
}

export const Empty: Story = {
  args: { markets: [] },
}

/** Interactive — favorites + selection maintained locally. */
export const Interactive: Story = {
  render: (args) => {
    const [favorites, setFavorites] = useState<string[]>(['BTCUSDT'])
    const [selected, setSelected] = useState('BTCUSDT')
    return (
      <div>
        <div style={{ marginBottom: 12, fontSize: 14 }}>Selected: {selected}</div>
        <MarketsDropdown
          {...args}
          favorites={favorites}
          onSelect={setSelected}
          onToggleFavorite={(sym) =>
            setFavorites((prev) => (prev.includes(sym) ? prev.filter((s) => s !== sym) : [...prev, sym]))
          }
        />
      </div>
    )
  },
}
