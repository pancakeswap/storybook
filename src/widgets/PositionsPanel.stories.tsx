import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import {
  PositionsPanel,
  type OpenOrderRow,
  type OrderHistoryRow,
  type PositionRow,
  type PositionsHistoryTab,
  type PositionsPanelTab,
  type TradeHistoryRow,
  type TransactionHistoryRow,
} from './PositionsPanel'

const MOCK_POSITIONS: PositionRow[] = [
  {
    id: 'BTCUSDT-LONG',
    symbol: 'BTCUSDT',
    positionAmt: 0.05,
    entryPrice: 78250,
    leverage: 25,
    unrealizedProfit: '42.15',
    tpStopPrice: '80000',
    slStopPrice: '77000',
  },
  {
    id: 'ETHUSDT-SHORT',
    symbol: 'ETHUSDT',
    positionAmt: -0.8,
    entryPrice: 3212,
    leverage: 10,
    unrealizedProfit: '-18.40',
  },
]

const MOCK_ORDERS: OpenOrderRow[] = [
  {
    id: 101,
    orderId: 101,
    symbol: 'BTCUSDT',
    side: 'BUY',
    type: 'LIMIT',
    price: '77800',
    origQty: '0.01',
    executedQty: '0',
    status: 'NEW',
  },
  {
    id: 102,
    orderId: 102,
    symbol: 'ETHUSDT',
    side: 'SELL',
    type: 'STOP_MARKET',
    price: '3250',
    origQty: '0.5',
    executedQty: '0',
    status: 'NEW',
  },
]

const mockMarkPrice = (s: string) => (s === 'BTCUSDT' ? 78900 : 3180)

const MOCK_TRADES: TradeHistoryRow[] = [
  {
    id: 't1', date: '2025-04-17', time: '01:37:26', symbol: 'BTCUSDT', side: 'BUY',
    price: '86,000', quantity: '30 USDT', fee: '0.0002 USDT', realizedProfit: '+0.01 USDT',
  },
  {
    id: 't2', date: '2025-04-17', time: '01:37:26', symbol: 'BTCUSDT', side: 'BUY',
    price: '86,000', quantity: '30 USDT', fee: '0.0002 USDT', realizedProfit: '+0.01 USDT',
  },
  {
    id: 't3', date: '2025-04-17', time: '01:37:26', symbol: 'ETHUSDT', side: 'SELL',
    price: '3,210', quantity: '120 USDT', fee: '0.0008 USDT', realizedProfit: '-0.42 USDT',
  },
]

const MOCK_TXS: TransactionHistoryRow[] = [
  { id: 'x1', date: '2025-04-17', time: '01:37:26', type: 'Realized PNL', amount: '30 USDT', symbol: 'BTCUSDT' },
  { id: 'x2', date: '2025-04-17', time: '01:37:26', type: 'Realized PNL', amount: '30 USDT', symbol: 'BTCUSDT' },
  { id: 'x3', date: '2025-04-17', time: '01:35:14', type: 'Funding',      amount: '-0.12 USDT', symbol: 'ETHUSDT' },
]

const meta = {
  title: 'Widgets/Positions Panel 🆕',
  component: PositionsPanel,
  parameters: { layout: 'fullscreen' },
  args: {
    tab: 'positions',
    positions: MOCK_POSITIONS,
    openOrders: MOCK_ORDERS,
    tradeHistory: MOCK_TRADES,
    transactionHistory: MOCK_TXS,
    onTabChange: fn(),
    onClosePosition: fn(),
    onEditTpSl: fn(),
    onCancelOrder: fn(),
    onShareTrade: fn(),
    useMarkPriceForSymbol: mockMarkPrice,
    computeLiqPrice: ({ side, entryPrice, leverage }) => {
      const maintMargin = 1 / leverage - 0.005
      return side === 'BUY' ? entryPrice * (1 - maintMargin) : entryPrice * (1 + maintMargin)
    },
  },
} satisfies Meta<typeof PositionsPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Positions: Story = {}

export const OpenOrders: Story = { args: { tab: 'orders' } }

export const OrderHistory: Story = { args: { tab: 'history' } }

export const TradeHistory: Story = { args: { tab: 'trades' } }

export const TransactionHistory: Story = { args: { tab: 'transactions' } }

export const EmptyPositions: Story = { args: { positions: [] } }

/** Interactive — tab state managed locally. */
export const Interactive: Story = {
  render: (args) => {
    const [tab, setTab] = useState<PositionsPanelTab>('positions')
    return <PositionsPanel {...args} tab={tab} onTabChange={setTab} />
  },
}

const MOCK_ORDER_HISTORY: OrderHistoryRow[] = [
  {
    id: 'oh1', date: '2025-04-17', time: '01:37:26', symbol: 'BTCUSDT', side: 'BUY',
    type: 'Limit', price: '86,000', origQty: '0.01 BTC', executedQty: '0.01 BTC', status: 'FILLED',
  },
  {
    id: 'oh2', date: '2025-04-16', time: '22:14:08', symbol: 'ETHUSDT', side: 'SELL',
    type: 'Stop Market', price: 'Market / Trig 3,210', origQty: '0.5 ETH', executedQty: '0', status: 'CANCELED',
  },
]

/**
 * Mobile variant — same widget, narrow viewport. Renders the
 * `Open Orders | Positions | Assets | TWAP` tab strip, the filters row,
 * and an empty-state body, plus the History sheet portal opened from
 * the clock icon.
 */
export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    layout: 'fullscreen',
  },
  render: (args) => {
    const [tab, setTab] = useState<PositionsPanelTab>('positions')
    const [hideOther, setHideOther] = useState(false)
    const [historyOpen, setHistoryOpen] = useState(false)
    const [historyTab, setHistoryTab] = useState<PositionsHistoryTab>('orders')
    return (
      <PositionsPanel
        {...args}
        isMobile
        tab={tab}
        onTabChange={setTab}
        positionsCount={1}
        hideOtherSymbols={hideOther}
        onHideOtherSymbolsChange={setHideOther}
        instrumentFilterLabel="All instruments"
        onInstrumentFilterClick={fn()}
        historyOpen={historyOpen}
        onHistoryToggle={setHistoryOpen}
        historyTab={historyTab}
        onHistoryTabChange={setHistoryTab}
        orderHistory={MOCK_ORDER_HISTORY}
        tradeHistory={MOCK_TRADES}
        transactionHistory={MOCK_TXS}
      />
    )
  },
}
