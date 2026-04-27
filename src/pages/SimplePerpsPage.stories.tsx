import type { Meta, StoryObj } from '@storybook/react-vite'
import { SimplePerpsPage } from './SimplePerpsPage'

const meta = {
  title: 'Apps/Perps · Simple',
  component: SimplePerpsPage,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof SimplePerpsPage>

export default meta
type Story = StoryObj<typeof meta>

export const BTC: Story = { args: { initialPair: 'BTC/USD' } }
