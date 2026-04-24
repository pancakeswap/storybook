import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { PoolDashboard } from './PoolDashboard'

const meta = {
  title: 'Widgets/Pool Dashboard',
  component: PoolDashboard,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    onAddLiquidity: fn(),
    onRemoveLiquidity: fn(),
  },
} satisfies Meta<typeof PoolDashboard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tvl: '$12,345,678.00',
    apr: '24.5%',
    apy: '27.3%',
    utilizationPct: 62,
    borrowed: '$7,654,320.00',
    totalSupply: '$12,345,678.00',
    alpPrice: '$1.0192',
    alpBalance: '1,234.5678',
  },
}

export const HighUtilization: Story = {
  name: 'High Utilization (>80%)',
  args: {
    tvl: '$18,000,000.00',
    apr: '48.2%',
    apy: '59.1%',
    utilizationPct: 88,
    borrowed: '$15,840,000.00',
    totalSupply: '$18,000,000.00',
    alpPrice: '$1.0510',
  },
}

export const LowUtilization: Story = {
  name: 'Low Utilization (<20%)',
  args: {
    tvl: '$5,000,000.00',
    apr: '6.1%',
    apy: '6.3%',
    utilizationPct: 18,
    borrowed: '$900,000.00',
    totalSupply: '$5,000,000.00',
    alpPrice: '$1.0031',
  },
}

export const WithoutBalance: Story = {
  name: 'No ALP Balance (not connected)',
  args: {
    tvl: '$12,345,678.00',
    apr: '24.5%',
    apy: '27.3%',
    utilizationPct: 62,
    borrowed: '$7,654,320.00',
    totalSupply: '$12,345,678.00',
    alpPrice: '$1.0192',
    alpBalance: undefined,
  },
}
