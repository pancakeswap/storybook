import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { TickerBar } from './TickerBar'
import { forceTheme } from '../stories-utils'

const meta = {
  title: 'Widgets/Ticker Bar',
  component: TickerBar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  args: {
    onToggleFavorite: fn(),
    onShield: fn(),
  },
} satisfies Meta<typeof TickerBar>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  parameters: { ...forceTheme('dark') },
}

export const Light: Story = {
  parameters: { ...forceTheme('light') },
}

export const PriceDown: Story = {
  name: 'Price Down',
  parameters: { ...forceTheme('dark') },
  args: {
    price: '64,112.3',
    changePct: '-1.42%',
    priceDirection: 'down',
  },
}
