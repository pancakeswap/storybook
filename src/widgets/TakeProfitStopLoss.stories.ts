import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { TakeProfitStopLoss } from './TakeProfitStopLoss'

const meta = {
  title: 'Widgets/TP & SL',
  component: TakeProfitStopLoss,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    onConfirm: fn(),
  },
} satisfies Meta<typeof TakeProfitStopLoss>

export default meta
type Story = StoryObj<typeof meta>

export const LongPosition: Story = {
  name: 'Long Position',
  args: {
    entryPrice: 65000,
    direction: 'long',
    positionSize: 1300,
  },
}

export const ShortPosition: Story = {
  name: 'Short Position',
  args: {
    entryPrice: 65000,
    direction: 'short',
    positionSize: 1300,
  },
}

export const LowPriceAsset: Story = {
  name: 'Low-Price Asset (CAKE)',
  args: {
    entryPrice: 3.48,
    direction: 'long',
    positionSize: 500,
  },
}
