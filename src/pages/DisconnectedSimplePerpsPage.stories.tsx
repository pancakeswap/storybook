import type { Meta, StoryObj } from '@storybook/react-vite'
import { SimplePerpsPage } from './SimplePerpsPage'

const meta = {
  title: 'Apps/Disconnected Perps · Simple',
  component: SimplePerpsPage,
  parameters: { layout: 'fullscreen' },
  args: { disconnected: true },
} satisfies Meta<typeof SimplePerpsPage>

export default meta
type Story = StoryObj<typeof meta>

export const BTC: Story = { args: { initialPair: 'BTC/USD' } }
