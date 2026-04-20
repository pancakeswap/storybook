import type { Meta, StoryObj } from '@storybook/react-vite'
import { PerpsPage } from './PerpsPage'
import { forceTheme } from '../stories-utils'

const meta = {
  title: 'Apps/Perps',
  component: PerpsPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof PerpsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: { initialPair: 'BTCUSDT' },
  parameters: { ...forceTheme('dark') },
}

export const Light: Story = {
  args: { initialPair: 'BTCUSDT' },
  parameters: { ...forceTheme('light') },
}

export const BTC: Story = {
  name: 'BTC/USDT (Dark)',
  args: { initialPair: 'BTC/USDT' },
  parameters: { ...forceTheme('dark') },
}
