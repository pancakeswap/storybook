import type { Meta, StoryObj } from '@storybook/react'
import { WalletPanel } from './WalletPanel'

const meta: Meta<typeof WalletPanel> = {
  title: 'Widgets/Wallet Panel',
  component: WalletPanel,
  parameters: { layout: 'centered' },
  argTypes: {
    initialTab:        { control: 'inline-radio', options: ['assets', 'tx', 'gift'] },
    initialTimeframe:  { control: 'inline-radio', options: ['24h', '7d', 'all'] },
    initialExpanded:   { control: 'inline-radio', options: ['spot', 'perp', 'farming', null] },
  },
}
export default meta
type Story = StoryObj<typeof WalletPanel>

export const Default: Story = {}

export const SpotExpanded: Story = {
  args: { initialExpanded: 'spot' },
}

export const PerpExpanded: Story = {
  args: { initialExpanded: 'perp' },
}

export const FarmingExpanded: Story = {
  args: { initialExpanded: 'farming' },
}

export const Collapsed: Story = {
  args: { initialExpanded: null },
}

export const SevenDayPnL: Story = {
  args: { initialTimeframe: '7d' },
}

export const AllTimePnL: Story = {
  args: { initialTimeframe: 'all' },
}
