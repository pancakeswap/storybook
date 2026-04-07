import type { Meta, StoryObj } from '@storybook/react-vite'
import { CandlestickChart } from './CandlestickChart'

const meta = {
  title: 'Widgets/Candlestick Chart',
  component: CandlestickChart,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof CandlestickChart>

export default meta
type Story = StoryObj<typeof meta>

export const CAKE: Story = {
  name: 'CAKE/USDT — 1h',
  args: {
    initialPair: 'CAKE/USDT',
    initialTimeframe: '1h',
    height: 400,
  },
}

export const BTC: Story = {
  name: 'BTC/USDT — 4h',
  args: {
    initialPair: 'BTC/USDT',
    initialTimeframe: '4h',
    height: 400,
  },
}

export const ETH: Story = {
  name: 'ETH/USDT — 1d',
  args: {
    initialPair: 'ETH/USDT',
    initialTimeframe: '1d',
    height: 400,
  },
}

export const Compact: Story = {
  name: 'Compact Height',
  args: {
    initialPair: 'CAKE/USDT',
    initialTimeframe: '15m',
    height: 260,
  },
}
