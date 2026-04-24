import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { OrderConfirmModal, type OrderConfirmDetails } from './OrderConfirmModal'

const baseDetails: OrderConfirmDetails = {
  symbol: 'BTCUSDT',
  side: 'BUY',
  type: 'LIMIT',
  quantity: '0.005',
  baseAsset: 'BTC',
  quoteAsset: 'USDT',
  price: '78250.5',
  leverage: 25,
  costUsdt: 15.65,
  liqPrice: 75100.0,
}

const meta = {
  title: 'Widgets/Order Confirm Modal 🆕',
  component: OrderConfirmModal,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    isOpen: true,
    onConfirm: fn(),
    onClose: fn(),
    onSkipFutureChange: fn(),
  },
} satisfies Meta<typeof OrderConfirmModal>

export default meta
type Story = StoryObj<typeof meta>

export const BuyLimit: Story = {
  args: { details: baseDetails },
}

export const SellMarket: Story = {
  args: {
    details: { ...baseDetails, side: 'SELL', type: 'MARKET', price: undefined, leverage: 10, liqPrice: 81200 },
  },
}

export const StopMarket: Story = {
  args: {
    details: {
      ...baseDetails,
      type: 'STOP_MARKET',
      side: 'SELL',
      price: undefined,
      stopPrice: '76000',
      reduceOnly: true,
    },
  },
}
