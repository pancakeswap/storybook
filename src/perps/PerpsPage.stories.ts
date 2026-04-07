import type { Meta, StoryObj } from '@storybook/react-vite'
import { PerpsPage } from './PerpsPage'

const meta = {
  title: 'Apps/Perps',
  component: PerpsPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PerpsPage>

export default meta
type Story = StoryObj<typeof meta>

export const CAKE: Story = {
  name: 'CAKE/USDT',
  args: { initialPair: 'CAKE/USDT' },
}

export const BTC: Story = {
  name: 'BTC/USDT',
  args: { initialPair: 'BTC/USDT' },
}

export const ETH: Story = {
  name: 'ETH/USDT',
  args: { initialPair: 'ETH/USDT' },
}
