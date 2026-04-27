import type { Meta, StoryObj } from '@storybook/react'
import { SimplePerpsPage } from './SimplePerpsPage'

const meta: Meta<typeof SimplePerpsPage> = {
  title: 'Apps/Perps · Simple',
  component: SimplePerpsPage,
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj<typeof SimplePerpsPage>

export const BTC: Story = { args: { initialPair: 'BTC/USD' } }
