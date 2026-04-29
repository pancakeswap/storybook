import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { SimpleTickerCard } from './SimpleTickerCard'

const meta = {
  title: 'Widgets/Simple Ticker Card',
  component: SimpleTickerCard,
  parameters: { layout: 'centered' },
  args: {
    baseAsset: 'BTC',
    pair: 'BTC/USD',
    price: '78,053.6',
    pricePnlPct: 0.93,
    volume24h: '$2.13B',
    openInterest: '$2.13B',
    fundingRate: '+0.010%',
    nextFunding: '4h 12m',
    onSymbolClick: fn(),
  },
} satisfies Meta<typeof SimpleTickerCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
