import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { RemoveLiquidity } from './RemoveLiquidity'

const meta = {
  title: 'Widgets/Remove Liquidity',
  component: RemoveLiquidity,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    onRedeem: fn(),
  },
} satisfies Meta<typeof RemoveLiquidity>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    alpBalance: '1,234.5678',
    alpPrice: '1.0192',
  },
}

export const SmallBalance: Story = {
  name: 'Small ALP Balance',
  args: {
    alpBalance: '42.0000',
    alpPrice: '1.0192',
  },
}

export const ZeroBalance: Story = {
  name: 'Zero ALP Balance',
  args: {
    alpBalance: '0.0000',
    alpPrice: '1.0192',
  },
}
