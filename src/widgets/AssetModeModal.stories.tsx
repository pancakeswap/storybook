import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Message, MessageText } from '../primitives/Message'
import { AssetModeModal } from './AssetModeModal'

const meta = {
  title: 'Widgets/Asset Mode Modal 🆕',
  component: AssetModeModal,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof AssetModeModal>

export default meta
type Story = StoryObj<typeof meta>

export const SingleSelected: Story = {
  args: {
    isOpen: true,
    currentMode: 'SINGLE',
    onConfirm: fn(),
    onClose: fn(),
  },
}

export const MultiSelected: Story = {
  args: {
    ...SingleSelected.args!,
    currentMode: 'MULTI',
  },
}

export const Submitting: Story = {
  args: {
    ...SingleSelected.args!,
    isSubmitting: true,
  },
}

export const Disabled: Story = {
  args: {
    ...SingleSelected.args!,
    disabled: true,
  },
}

export const WithError: Story = {
  args: {
    ...SingleSelected.args!,
    errorSlot: (
      <Message variant="danger">
        <MessageText>
          Cannot switch to Multi-Asset Mode while you have open positions or orders.
        </MessageText>
      </Message>
    ),
  },
}
