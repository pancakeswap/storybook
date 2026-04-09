import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { AddLiquidity } from './AddLiquidity'

const meta = {
  title: 'Widgets/Add Liquidity',
  component: AddLiquidity,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    onMint: fn(),
    onChainChange: fn(),
  },
} satisfies Meta<typeof AddLiquidity>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tokenBalances: { USDC: '5,000.00', USDT: '2,500.00' },
    alpPerToken: { USDC: '0.9812', USDT: '0.9808' },
  },
}

export const LowBalance: Story = {
  name: 'Low USDC Balance',
  args: {
    tokenBalances: { USDC: '12.50', USDT: '0.00' },
    alpPerToken: { USDC: '0.9812', USDT: '0.9808' },
  },
}

export const ZeroBalance: Story = {
  name: 'Zero Balance (wallet empty)',
  args: {
    tokenBalances: { USDC: '0.00', USDT: '0.00' },
    alpPerToken: { USDC: '0.9812', USDT: '0.9808' },
  },
}

export const CustomChains: Story = {
  name: 'Custom Chains',
  args: {
    tokenBalances: { USDC: '5,000.00', USDT: '2,500.00' },
    alpPerToken: { USDC: '0.9812', USDT: '0.9808' },
    chains: ['Ethereum', 'Arbitrum'],
    selectedChain: 'Arbitrum',
  },
}
