import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import { Button } from '../primitives/Button'
import { TpSlModal } from './TpSlModal'

const meta = {
  title: 'Widgets/Tp Sl Modal 🆕',
  component: TpSlModal,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    isOpen: true,
    symbol: 'BTCUSDT',
    positionSide: 'LONG',
    qty: 0.05,
    entryPrice: 78250,
    markPrice: 78900,
    onConfirm: fn(),
    onClose: fn(),
  },
} satisfies Meta<typeof TpSlModal>

export default meta
type Story = StoryObj<typeof meta>

export const Long: Story = {}

export const Short: Story = {
  args: { positionSide: 'SHORT', entryPrice: 3250, markPrice: 3180, qty: 0.8, symbol: 'ETHUSDT' },
}

/** Interactive — open/close from a parent button, confirm logs to console. */
export const Interactive: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Set TP / SL</Button>
        <TpSlModal
          {...args}
          isOpen={open}
          onConfirm={(intent) => {
            // eslint-disable-next-line no-console
            console.log('TpSl intent', intent)
            args.onConfirm(intent)
          }}
          onClose={() => setOpen(false)}
        />
      </div>
    )
  },
}
