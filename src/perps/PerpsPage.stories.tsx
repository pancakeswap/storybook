import type { Meta, StoryObj } from '@storybook/react-vite'
import { PerpsPage } from './PerpsPage'
import { forceTheme } from '../stories-utils'

const meta = {
  title: 'Apps/PerpsPage',
  component: PerpsPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  args: {
    initialPair: 'BTCUSDT',
  },
} satisfies Meta<typeof PerpsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  parameters: { ...forceTheme('dark') },
}

export const Light: Story = {
  parameters: { ...forceTheme('light') },
}

export const ETH: Story = {
  args: { initialPair: 'ETHUSDT' },
  parameters: { ...forceTheme('dark') },
}
