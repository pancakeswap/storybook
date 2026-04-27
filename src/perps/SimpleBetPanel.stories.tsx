import type { Meta, StoryObj } from '@storybook/react'
import { SimpleBetPanel } from './SimpleBetPanel'

const meta: Meta<typeof SimpleBetPanel> = {
  title: 'Widgets/Simple Bet Panel',
  component: SimpleBetPanel,
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof SimpleBetPanel>

export const Default: Story = {}

export const HighLeverage: Story = {
  args: { initialLeverage: 500 },
}

export const MaxLeverage: Story = {
  args: { initialLeverage: 1001 },
}
