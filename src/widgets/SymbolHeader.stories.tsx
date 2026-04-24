import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import { MarketsDropdown, type MarketRow } from './MarketsDropdown'
import { SymbolHeader } from './SymbolHeader'

const MOCK_MARKETS: MarketRow[] = [
  { symbol: 'BTCUSDT', lastPrice: '84185.5', priceChangePercent: '-0.52', quoteVolume: '19401160' },
  { symbol: 'ETHUSDT', lastPrice: '3245.8', priceChangePercent: '1.04', quoteVolume: '9831422' },
  { symbol: 'SOLUSDT', lastPrice: '182.35', priceChangePercent: '3.14', quoteVolume: '4120999' },
  { symbol: 'BNBUSDT', lastPrice: '608.1', priceChangePercent: '-0.18', quoteVolume: '2810500' },
]

const meta = {
  title: 'Widgets/Symbol Header 🆕',
  component: SymbolHeader,
  parameters: { layout: 'fullscreen' },
  args: {
    symbol: 'BTCUSDT',
    pairLabel: 'BTC - USDT',
    leverage: 25,
    lastPrice: '84185.5',
    markPrice: '84190.1',
    indexPrice: '84188.4',
    fundingRate: '0.00009',
    nextFundingTime: Date.now() + 3_420_000,
    change24h: '-0.52',
    volume24h: '1940116000',
    onToggleFavorite: fn(),
  },
} satisfies Meta<typeof SymbolHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Favorited: Story = {
  args: { favorited: true },
}

export const PositiveChange: Story = {
  args: { change24h: '3.17', fundingRate: '0.0001' },
}

/** Interactive — pair pill opens the markets dropdown (click the pill). */
export const WithDropdown: Story = {
  render: (args) => {
    const [favorites, setFavorites] = useState<string[]>(['BTCUSDT'])
    return (
      <SymbolHeader
        {...args}
        renderMarketsDropdown={(close) => (
          <MarketsDropdown
            markets={MOCK_MARKETS}
            favorites={favorites}
            onToggleFavorite={(sym) =>
              setFavorites((prev) => (prev.includes(sym) ? prev.filter((s) => s !== sym) : [...prev, sym]))
            }
            onSelect={(sym) => {
              // eslint-disable-next-line no-console
              console.log('selected', sym)
              close()
            }}
          />
        )}
      />
    )
  },
}
