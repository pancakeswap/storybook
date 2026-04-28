import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import { SimpleBetPanel, type SimpleBetPanelProps } from './SimpleBetPanel'

const baseArgs: SimpleBetPanelProps = {
  symbol: 'BTCUSDT',
  baseAsset: 'BTC',
  pair: 'BTC/USDT',
  price: '78,053.6',
  pricePnlPct: 0.93,
  onSymbolClick: fn(),
  bet: '10',
  onBetChange: fn(),
  leverage: 10,
  onLeverageChange: fn(),
  quoteAsset: 'USDT',
  onQuoteAssetClick: fn(),
  fundBalanceText: '20.00 USDT',
  onTopUpFund: fn(),
  onPercentClick: fn(),
  estimatedEntry: '$78,053.60',
  liqIfLong: '$66,092.23 (-2.0%)',
  marginRequired: '$400 USDT',
  openingFee: '$10.00 (0.05%)',
  canSubmit: true,
  isSubmittingUp: false,
  isSubmittingDown: false,
  onUp: fn(),
  onDown: fn(),
  onDeposit: fn(),
  onWithdraw: fn(),
  unrealizedPnl: '$0',
}

const meta = {
  title: 'Widgets/Simple Bet Panel',
  component: SimpleBetPanel,
  parameters: { layout: 'centered' },
  args: baseArgs,
} satisfies Meta<typeof SimpleBetPanel>

export default meta
type Story = StoryObj<typeof meta>

/** Wrapper that turns the otherwise-controlled widget into a live demo. */
const Live: React.FC<Partial<SimpleBetPanelProps> & { initialBet?: string; initialLeverage?: number }> = ({
  initialBet = '10',
  initialLeverage = 10,
  ...overrides
}) => {
  const [bet, setBet] = useState(initialBet)
  const [leverage, setLeverage] = useState(initialLeverage)
  return (
    <SimpleBetPanel
      {...baseArgs}
      {...overrides}
      bet={bet}
      onBetChange={setBet}
      leverage={leverage}
      onLeverageChange={setLeverage}
    />
  )
}

export const Default: Story = {
  render: () => <Live />,
}

export const HighLeverage: Story = {
  render: () => <Live initialLeverage={500} />,
}

export const MaxLeverage: Story = {
  render: () => <Live initialLeverage={1001} />,
}

export const SubmittingUp: Story = {
  render: () => <Live initialLeverage={50} isSubmittingUp canSubmit={false} />,
}
