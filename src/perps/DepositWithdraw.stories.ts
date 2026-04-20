import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { DepositWithdraw } from './DepositWithdraw'
import { forceTheme } from '../stories-utils'

const meta = {
  title: 'Widgets/Deposit & Withdraw',
  component: DepositWithdraw,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    onDeposit: fn(),
    onWithdraw: fn(),
  },
} satisfies Meta<typeof DepositWithdraw>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: { ...forceTheme('light') },
  args: {
    availableBalance: '2,500.00',
    usedBalance: '1,200.00',
    totalBalance: '3,700.00',
    maxWithdrawable: '2,500.00',
  },
}

export const DefaultDark: Story = {
  ...Default,
  name: 'Default (Dark)',
  parameters: { ...Default.parameters, ...forceTheme('dark') },
}

export const FullyUsed: Story = {
  name: 'Fully Used — No Available Margin',
  parameters: { ...forceTheme('light') },
  args: {
    availableBalance: '0.00',
    usedBalance: '5,000.00',
    totalBalance: '5,000.00',
    maxWithdrawable: '0.00',
  },
}

export const FullyUsedDark: Story = {
  ...FullyUsed,
  name: 'Fully Used (Dark)',
  parameters: { ...FullyUsed.parameters, ...forceTheme('dark') },
}

export const FreshAccount: Story = {
  name: 'Fresh Account (no deposit yet)',
  parameters: { ...forceTheme('light') },
  args: {
    availableBalance: '10,000.00',
    usedBalance: '0.00',
    totalBalance: '10,000.00',
    maxWithdrawable: '10,000.00',
  },
}

export const FreshAccountDark: Story = {
  ...FreshAccount,
  name: 'Fresh Account (Dark)',
  parameters: { ...FreshAccount.parameters, ...forceTheme('dark') },
}
