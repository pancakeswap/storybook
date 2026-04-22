import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { AddLiquidity } from './AddLiquidity'
import { forceTheme } from '../stories-utils'

const meta = {
  title: 'Widgets/Add Liquidity',
  component: AddLiquidity,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    onMint: fn(),
  },
} satisfies Meta<typeof AddLiquidity>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: { ...forceTheme('light') },
  args: {
    tokenBalances: { USDC: '5,000.00', USDT: '2,500.00' },
    alpPerToken: { USDC: '0.9812', USDT: '0.9808' },
  },
}

export const DefaultDark: Story = {
  ...Default,
  name: 'Default (Dark)',
  parameters: { ...Default.parameters, ...forceTheme('dark') },
}

export const LowBalance: Story = {
  name: 'Low USDC Balance',
  parameters: { ...forceTheme('light') },
  args: {
    tokenBalances: { USDC: '12.50', USDT: '0.00' },
    alpPerToken: { USDC: '0.9812', USDT: '0.9808' },
  },
}

export const LowBalanceDark: Story = {
  ...LowBalance,
  name: 'Low USDC Balance (Dark)',
  parameters: { ...LowBalance.parameters, ...forceTheme('dark') },
}

export const ZeroBalance: Story = {
  name: 'Zero Balance (wallet empty)',
  parameters: { ...forceTheme('light') },
  args: {
    tokenBalances: { USDC: '0.00', USDT: '0.00' },
    alpPerToken: { USDC: '0.9812', USDT: '0.9808' },
  },
}

export const ZeroBalanceDark: Story = {
  ...ZeroBalance,
  name: 'Zero Balance (Dark)',
  parameters: { ...ZeroBalance.parameters, ...forceTheme('dark') },
}
