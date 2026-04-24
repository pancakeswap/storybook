import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import { Button } from '../ui/components/Button'
import { Message, MessageText } from '../ui/components/Message'
import { LeverageModal } from './LeverageModal'

const meta = {
  title: 'Widgets/Leverage Modal 🆕',
  component: LeverageModal,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof LeverageModal>

export default meta
type Story = StoryObj<typeof meta>

export const Open: Story = {
  args: {
    isOpen: true,
    symbol: 'BTCUSDT',
    currentLeverage: 25,
    minLeverage: 1,
    maxLeverage: 100,
    availableBalance: 1000,
    onConfirm: fn(),
    onClose: fn(),
  },
}

export const Submitting: Story = {
  args: {
    ...Open.args!,
    isSubmitting: true,
  },
}

export const WithError: Story = {
  args: {
    ...Open.args!,
    errorSlot: (
      <Message variant="danger">
        <MessageText>Aster rejected the leverage update — try again in a moment.</MessageText>
      </Message>
    ),
  },
}

/** Interactive — drives the modal from a parent button to mirror the consumer's flow. */
export const Interactive: Story = {
  args: {
    isOpen: false,
    symbol: 'ETHUSDT',
    currentLeverage: 10,
    availableBalance: 500,
    onConfirm: fn(),
    onClose: fn(),
  },
  render: (args) => {
    const [open, setOpen] = useState(false)
    const [lev, setLev] = useState(args.currentLeverage)
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Adjust leverage ({lev}x)</Button>
        <LeverageModal
          {...args}
          isOpen={open}
          currentLeverage={lev}
          onConfirm={(value) => {
            setLev(value)
            setOpen(false)
          }}
          onClose={() => setOpen(false)}
        />
      </div>
    )
  },
}
