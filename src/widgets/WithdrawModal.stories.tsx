import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import { Button } from '../primitives/Button'
import { Message, MessageText } from '../primitives/Message'
import { WithdrawModal } from './WithdrawModal'

const meta = {
  title: 'Widgets/Withdraw Modal 🆕',
  component: WithdrawModal,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof WithdrawModal>

export default meta
type Story = StoryObj<typeof meta>

export const Open: Story = {
  args: {
    isOpen: true,
    destinationAddress: '0x1234…abcd',
    destinationChainName: 'BSC',
    asset: 'USDT',
    feeText: '0.1234',
    amount: '',
    onAmountChange: fn(),
    onWithdraw: fn(),
    onClose: fn(),
  },
}

export const Filled: Story = {
  args: {
    ...Open.args!,
    amount: '125.50',
  },
}

export const Submitting: Story = {
  args: {
    ...Open.args!,
    amount: '125.50',
    isSubmitting: true,
  },
}

export const WithError: Story = {
  args: {
    ...Open.args!,
    amount: '5000',
    errorSlot: (
      <Message variant="danger">
        <MessageText>Withdrawal would exceed your available balance.</MessageText>
      </Message>
    ),
  },
}

/** Interactive — drives controlled amount + open state from a parent button. */
export const Interactive: Story = {
  args: {
    isOpen: false,
    destinationAddress: '0x9876…1234',
    asset: 'USDT',
    feeText: '0.10',
    amount: '',
    onAmountChange: fn(),
    onWithdraw: fn(),
    onClose: fn(),
  },
  render: (args) => {
    const [open, setOpen] = useState(false)
    const [amount, setAmount] = useState('')
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Withdraw</Button>
        <WithdrawModal
          {...args}
          isOpen={open}
          amount={amount}
          onAmountChange={setAmount}
          onWithdraw={() => {
            args.onWithdraw()
            setOpen(false)
          }}
          onClose={() => setOpen(false)}
        />
      </div>
    )
  },
}
