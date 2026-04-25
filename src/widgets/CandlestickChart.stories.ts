import type { Meta, StoryObj } from '@storybook/react-vite'
import { CandlestickChart } from './CandlestickChart'

const meta = {
  title: 'Widgets/Candlestick Chart ⚠️ deprecated',
  component: CandlestickChart,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof CandlestickChart>

export default meta
type Story = StoryObj<typeof meta>

export const BTC: Story = {
  name: 'BTC/USDT — 4h',
  args: {
    initialPair: 'BTC/USDT',
    initialTimeframe: '1H',
    height: 400,
  },
}
