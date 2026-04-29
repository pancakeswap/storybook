import type { Meta, StoryObj } from '@storybook/react'
import { WalletPanelCompactV1 } from './WalletPanelCompactV1'

const meta: Meta<typeof WalletPanelCompactV1> = {
  title: 'Widgets/Wallet Panel Compact V1',
  component: WalletPanelCompactV1,
  parameters: { layout: 'centered' },
  argTypes: {
    initialTab:       { control: 'inline-radio', options: ['assets', 'tx', 'gift'] },
    initialTimeframe: { control: 'inline-radio', options: ['24h', '7d', 'all'] },
    initialExpanded:  { control: 'inline-radio', options: ['spot', 'perp', null] },
  },
}
export default meta
type Story = StoryObj<typeof WalletPanelCompactV1>

export const Default: Story = {}

export const SpotExpanded: Story = {
  args: { initialExpanded: 'spot' },
}

export const PerpExpanded: Story = {
  args: { initialExpanded: 'perp' },
}

export const SevenDayPnL: Story = {
  args: { initialTimeframe: '7d' },
}

export const AllTimePnL: Story = {
  args: { initialTimeframe: 'all' },
}
