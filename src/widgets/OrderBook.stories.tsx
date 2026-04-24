import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import {
  OrderBook,
  type DepthLevel,
  type OrderBookSizeUnit,
  type OrderBookView,
} from './OrderBook'

const BASE = 78500
const TICK = 0.1
const asks: DepthLevel[] = Array.from({ length: 20 }, (_, i) => {
  const price = BASE + (i + 1) * TICK * 5
  const qty = 0.05 + ((i * 31) % 120) / 1000
  return [price.toFixed(1), qty.toFixed(3)]
})
const bids: DepthLevel[] = Array.from({ length: 20 }, (_, i) => {
  const price = BASE - (i + 1) * TICK * 5
  const qty = 0.05 + ((i * 47) % 150) / 1000
  return [price.toFixed(1), qty.toFixed(3)]
})

const meta = {
  title: 'Widgets/Order Book 🆕',
  component: OrderBook,
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div style={{ width: 340, height: 620, display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    asks,
    bids,
    baseAsset: 'BTC',
    quoteAsset: 'USDT',
    tickSize: 0.1,
    pricePrecision: 1,
    lastPrice: 78500,
    view: 'both',
    priceStep: '0.1',
    sizeUnit: 'BASE',
    onViewChange: fn(),
    onPriceStepChange: fn(),
    onSizeUnitChange: fn(),
  },
} satisfies Meta<typeof OrderBook>

export default meta
type Story = StoryObj<typeof meta>

export const Both: Story = {}

export const BidsOnly: Story = { args: { view: 'bids' } }

export const AsksOnly: Story = { args: { view: 'asks' } }

export const QuoteSize: Story = { args: { sizeUnit: 'QUOTE' } }

/** Interactive — view / step / size-unit persisted locally. */
export const Interactive: Story = {
  render: (args) => {
    const [view, setView] = useState<OrderBookView>('both')
    const [priceStep, setPriceStep] = useState('0.1')
    const [sizeUnit, setSizeUnit] = useState<OrderBookSizeUnit>('BASE')
    return (
      <OrderBook
        {...args}
        view={view}
        onViewChange={setView}
        priceStep={priceStep}
        onPriceStepChange={setPriceStep}
        sizeUnit={sizeUnit}
        onSizeUnitChange={setSizeUnit}
      />
    )
  },
}
