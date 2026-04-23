import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Button } from '../ui/components/Button'
import { OrderConfirmationModal } from './OrderConfirmationModal'

const meta = {
  title: 'Widgets/Order Confirmation Modal',
  component: OrderConfirmationModal,
  parameters: { layout: 'centered' },
  args: {
    open: true,
    onClose: fn(),
    onConfirm: fn(),
  },
} satisfies Meta<typeof OrderConfirmationModal>

export default meta

type Story = StoryObj<typeof meta>

/** Buy/Long — green direction. */
export const BuyLong: Story = {
  args: { direction: 'buy' },
}

/** Sell/Short — pink direction. */
export const SellShort: Story = {
  args: { direction: 'sell' },
}

/** Launch-from-button flow so reviewers can exercise the modal. */
export const Interactive: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <div style={{ padding: 40, display: 'flex', gap: 12 }}>
        <Button variant="primary" onClick={() => setOpen(true)}>Open (Buy/Long)</Button>
        <OrderConfirmationModal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
        />
      </div>
    )
  },
  args: { direction: 'buy' },
}
