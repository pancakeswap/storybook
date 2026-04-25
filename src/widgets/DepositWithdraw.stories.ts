import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { DepositWithdraw } from './DepositWithdraw'

const meta = {
  title: 'Widgets/Deposit & Withdraw ⚠️ deprecated',
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
  args: {
    availableBalance: '2,500.00',
    usedBalance: '1,200.00',
    totalBalance: '3,700.00',
    maxWithdrawable: '2,500.00',
  },
}

export const FullyUsed: Story = {
  name: 'Fully Used — No Available Margin',
  args: {
    availableBalance: '0.00',
    usedBalance: '5,000.00',
    totalBalance: '5,000.00',
    maxWithdrawable: '0.00',
  },
}

export const FreshAccount: Story = {
  name: 'Fresh Account (no deposit yet)',
  args: {
    availableBalance: '10,000.00',
    usedBalance: '0.00',
    totalBalance: '10,000.00',
    maxWithdrawable: '10,000.00',
  },
}
