import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Button } from '../ui/components/Button'
import { TpSlOtocoModal } from './TpSlOtocoModal'

const meta = {
  title: 'Widgets/TP · SL OTOCO Modal ⚠️ deprecated',
  component: TpSlOtocoModal,
  parameters: { layout: 'centered' },
  args: {
    open: true,
    onClose: fn(),
    onConfirm: fn(),
    onEditOrderB: fn(),
    onEditOrderC: fn(),
  },
} satisfies Meta<typeof TpSlOtocoModal>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

/** Interactive — open/close via a trigger button so reviewers can exercise the modal. */
export const Interactive: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <div style={{ padding: 40, minHeight: 200 }}>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Set TP / SL
        </Button>
        <TpSlOtocoModal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
        />
      </div>
    )
  },
}

/** Shows how a Sell (short) entry flips Order A's side color to pink. */
export const ShortEntry: Story = {
  args: {
    orderA: {
      limit: 'New',
      side: 'Sell',
      amount: '510.0 USDT',
      price: '85000',
      reduceOnly: 'No',
    },
    orderB: {
      type: 'Take Profit Market',
      status: 'Pending',
      side: 'Buy',
      amount: '510.0 USDT',
      stop: '83000.5',
    },
    orderC: {
      type: 'Stop Loss Market',
      status: 'Pending',
      side: 'Buy',
      amount: '510.0 USDT',
      stop: '87000.0',
    },
  },
}
