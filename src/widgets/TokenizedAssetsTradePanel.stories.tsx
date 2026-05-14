import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent } from 'storybook/test'
import {
  TokenizedAssetsTradePanel,
  type TradeMode,
} from './TokenizedAssetsTradePanel'

const meta = {
  title: 'Widgets/Tokenized Assets/Trade Panel',
  component: TokenizedAssetsTradePanel,
  parameters: { layout: 'centered' },
  args: {
    mode: 'swap' as TradeMode,
    pay: {
      symbol: 'BNB',
      iconColor: '#F0B90B',
      balance: '0.00',
      usdValue: '$0.00',
    },
    payAmount: '',
    receive: {
      symbol: 'NVIDIAx',
      iconColor: '#76B900',
      iconInitials: 'N',
      balance: '0.00',
      usdValue: '$0.00',
    },
    receiveAmount: '',
    slippage: '0.5',
    rateLabel: '1 BNB = 326.01 NVIDIAx',
    offHoursWarning: true,
    ctaLabel: 'Connect Wallet',
    onModeChange: fn(),
    onPayAmountChange: fn(),
    onReceiveAmountChange: fn(),
    onSlippageClick: fn(),
    onRefreshRate: fn(),
    onCtaClick: fn(),
    onSwapDirections: fn(),
    onSettingsClick: fn(),
  },
} satisfies Meta<typeof TokenizedAssetsTradePanel>

export default meta
type Story = StoryObj<typeof meta>

export const ConnectWallet: Story = {}

export const NoOffHoursWarning: Story = {
  args: { offHoursWarning: false },
}

export const LimitMode: Story = {
  args: { mode: 'limit' as TradeMode },
}

/** Drives mode and amount state so a play function can assert the callbacks fire. */
export const Interactive: Story = {
  render: (args) => {
    const Wrapped = () => {
      const [mode, setMode] = useState<TradeMode>(args.mode ?? 'swap')
      const [payAmount, setPayAmount] = useState(args.payAmount ?? '')
      return (
        <TokenizedAssetsTradePanel
          {...args}
          mode={mode}
          onModeChange={(next) => {
            args.onModeChange?.(next)
            setMode(next)
          }}
          payAmount={payAmount}
          onPayAmountChange={(next) => {
            args.onPayAmountChange?.(next)
            setPayAmount(next)
          }}
        />
      )
    }
    return <Wrapped />
  },
  play: async ({ canvas, args }) => {
    await userEvent.click(canvas.getByRole('tab', { name: 'Limit' }))
    await expect(args.onModeChange).toHaveBeenCalledWith('limit')

    const input = canvas.getByLabelText('Pay amount in BNB')
    await userEvent.type(input, '1.25')
    await expect(args.onPayAmountChange).toHaveBeenCalled()

    await userEvent.click(canvas.getByRole('button', { name: 'Connect Wallet' }))
    await expect(args.onCtaClick).toHaveBeenCalled()
  },
}
