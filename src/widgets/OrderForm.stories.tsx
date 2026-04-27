import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import { OrderForm, type OrderFormDraft, type OrderTypeKey } from './OrderForm'

const seedDraft: OrderFormDraft = {
  side: 'BUY',
  leverage: 25,
  marginMode: 'CROSS',
  sizeUnit: 'BASE',
  quantity: '',
  price: '',
  reduceOnly: false,
  tpSlEnabled: false,
  takeProfitPrice: '',
  stopLossPrice: '',
  timeInForce: 'GTC',
  stopPrice: '',
  stopPriceSource: 'LAST',
}

const meta = {
  title: 'Widgets/Order Form 🆕',
  component: OrderForm,
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    symbol: 'BTCUSDT',
    baseAsset: 'BTC',
    quoteAsset: 'USDT',
    draft: seedDraft,
    onDraftChange: fn(),
    typeKey: 'market' as OrderTypeKey,
    onTypeKeyChange: fn(),
    availableBalanceText: '1234.56',
    preview: { cost: '15.65 USDT', liq: '75100 USDT' },
    feeText: '0.02% / 0.05%',
    sizePercent: 0,
    onSizePercentChange: fn(),
    cta: 'Buy / Long',
    canSubmit: true,
    onSubmit: fn(),
    onLeverageClick: fn(),
    onMarginModeToggle: fn(),
    onDepositClick: fn(),
    authReady: true,
    hasAddress: true,
  },
} satisfies Meta<typeof OrderForm>

export default meta
type Story = StoryObj<typeof meta>

export const Market: Story = {}

export const Limit: Story = {
  args: { typeKey: 'limit', draft: { ...seedDraft, price: '78250' } },
}

export const StopLimitFilled: Story = {
  args: {
    typeKey: 'stop-limit',
    draft: {
      ...seedDraft,
      stopPrice: '76000',
      price: '75800',
      quantity: '0.05',
      stopPriceSource: 'LAST',
      timeInForce: 'GTC',
    },
    preview: { cost: '15.18 USDT', liq: '—' },
    sizePercent: 12,
  },
}

export const StopMarketFilled: Story = {
  args: {
    typeKey: 'stop-market',
    draft: {
      ...seedDraft,
      side: 'SELL',
      stopPrice: '74500',
      quantity: '0.05',
      stopPriceSource: 'MARK',
    },
    cta: 'Sell / Short',
    preview: { cost: '14.90 USDT', liq: '—' },
    sizePercent: 12,
  },
}

export const Selling: Story = {
  args: {
    draft: { ...seedDraft, side: 'SELL' },
    cta: 'Sell / Short',
  },
}

export const Submitting: Story = {
  args: {
    isSubmitting: true,
    cta: 'Submitting...',
    canSubmit: false,
  },
}

export const ConnectWallet: Story = {
  args: { hasAddress: false, authReady: false, cta: 'Connect Wallet', canSubmit: false },
}

/** Interactive — full draft state managed locally. */
export const Interactive: Story = {
  render: (args) => {
    const [draft, setDraft] = useState<OrderFormDraft>(seedDraft)
    const [typeKey, setTypeKey] = useState<OrderTypeKey>('market')
    const [sizePercent, setSizePercent] = useState(0)
    return (
      <OrderForm
        {...args}
        draft={draft}
        onDraftChange={setDraft}
        typeKey={typeKey}
        onTypeKeyChange={setTypeKey}
        sizePercent={sizePercent}
        onSizePercentChange={setSizePercent}
      />
    )
  },
}
