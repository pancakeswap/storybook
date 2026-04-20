import type { Meta, StoryObj } from '@storybook/react-vite'
import { CandlestickChart } from './CandlestickChart'
import { forceTheme } from '../stories-utils'

const meta = {
  title: 'Widgets/Candlestick Chart',
  component: CandlestickChart,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof CandlestickChart>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {
    initialPair: 'BTCUSDT',
    initialTimeframe: '1D',
    height: 420,
  },
  parameters: { ...forceTheme('dark') },
}

export const Light: Story = {
  args: {
    initialPair: 'BTCUSDT',
    initialTimeframe: '1D',
    height: 420,
  },
  parameters: { ...forceTheme('light') },
}

export const BTCDark: Story = {
  name: 'BTC/USDT — 4h (Dark)',
  args: {
    initialPair: 'BTC/USDT',
    initialTimeframe: '1H',
    height: 400,
  },
  parameters: { ...forceTheme('dark') },
}

export const BTCLight: Story = {
  name: 'BTC/USDT — 4h (Light)',
  args: {
    initialPair: 'BTC/USDT',
    initialTimeframe: '1H',
    height: 400,
  },
  parameters: { ...forceTheme('light') },
}
