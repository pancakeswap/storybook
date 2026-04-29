import type { Meta, StoryObj } from '@storybook/react-vite'
import { PerpsErrorMessage } from './PerpsErrorMessage'

const meta = {
  title: 'Widgets/Perps Error Message 🆕',
  component: PerpsErrorMessage,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div style={{ width: 420 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PerpsErrorMessage>

export default meta
type Story = StoryObj<typeof meta>

/** User cancelled in their wallet — understated, no title. */
export const UserRejected: Story = {
  args: {
    variant: 'primary',
    message: 'You cancelled the transaction in your wallet.',
  },
}

/** Validation / soft warning. */
export const InsufficientFunds: Story = {
  args: {
    variant: 'warning',
    title: 'Margin is insufficient',
    message: 'Your available USDT is below what this order needs at the chosen leverage.',
  },
}

/** Hard error with raw payload behind the disclosure. */
export const NetworkError: Story = {
  args: {
    variant: 'danger',
    title: 'Aster rejected the order',
    message: 'The exchange returned an error. You can try again, or copy the details below for support.',
    details:
      '{ "code": -2010, "msg": "ReduceOnly Order is rejected" }\n  at processCommand (aster.signedRequest:148)\n  at submitOrder (placeOrder.ts:204)',
  },
}

/** Success — used for confirmation states (rare but supported). */
export const Confirmation: Story = {
  args: {
    variant: 'success',
    title: 'Position closed',
    message: 'Your BTCUSDT short was fully closed at the market price.',
  },
}
