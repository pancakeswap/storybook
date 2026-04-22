import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { TickerBar } from './TickerBar'

const meta = {
  title: 'Widgets/Ticker Bar',
  component: TickerBar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  args: {
    onToggleFavorite: fn(),
    onSelectPair: fn(),
  },
} satisfies Meta<typeof TickerBar>

export default meta
type Story = StoryObj<typeof meta>

export const PriceDown: Story = {
  name: 'Price Down',
  args: {
    price: '64,112.3',
    change24h: '-1.42%',
    change24hDirection: 'down',
  },
}

export const BNB: Story = {
  name: 'BNB Pair',
  args: {
    symbol: 'BNB - USD',
    coinGlyph: 'B',
    coinColor: 'linear-gradient(180deg, #F3BA2F, #D6A318)',
    price: '412.50',
    mark: '412.48',
    index: '412.51',
    fundingRate: '0.0010%',
    fundingCountdown: '01:12:44',
    change24h: '+2.31%',
    change24hDirection: 'up',
    volume24h: '$1,243,891,204.50',
  },
}
