import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import {
  WithdrawModal12,
  type WithdrawModal12Props,
  type WithdrawAssetRow,
} from './WithdrawModal12'

const SAMPLE_ASSETS: readonly WithdrawAssetRow[] = [
  {
    id: 'BNB',
    symbol: 'BNB',
    chainLabel: 'BNB Chain',
    chainBadgeColor: '#1E1E1E',
    chainBadgeGlyph: 'B',
    balanceText: '999,999.99',
    usdText: '$999,999.99',
    iconColor: '#F0B90B',
  },
  {
    id: 'ETH-ETH',
    symbol: 'ETH',
    chainLabel: 'Ethereum',
    chainBadgeColor: '#627EEA',
    chainBadgeGlyph: 'E',
    balanceText: '999,999.99',
    usdText: '$999,999.99',
    iconColor: '#627EEA',
  },
  {
    id: 'ETH-LINEA',
    symbol: 'ETH',
    chainLabel: 'Linea',
    chainBadgeColor: '#2D364D',
    chainBadgeGlyph: 'L',
    balanceText: '999,999.99',
    usdText: '$999,999.99',
    iconColor: '#627EEA',
  },
  {
    id: 'USDC',
    symbol: 'USDC',
    chainLabel: 'Polygon',
    chainBadgeColor: '#2D364D',
    chainBadgeGlyph: 'P',
    balanceText: '999,999.99',
    usdText: '$999,999.99',
    iconColor: '#2775CA',
  },
]

const baseArgs: WithdrawModal12Props = {
  isOpen: true,
  onClose: fn(),
  perpsBalanceText: '$1,000.98',
  destinationAddress: '0x...1234',
  assets: SAMPLE_ASSETS,
  selectedAssetId: undefined,
  onSelectAsset: fn(),
  amount: '',
  onAmountChange: fn(),
  amountUsdText: '0.0',
  onWithdraw: fn(),
}

const meta = {
  title: 'Widgets/Withdraw Modal 1.2',
  component: WithdrawModal12,
  parameters: { layout: 'fullscreen' },
  args: baseArgs,
} satisfies Meta<typeof WithdrawModal12>

export default meta
type Story = StoryObj<typeof meta>

const Live: React.FC<Partial<WithdrawModal12Props>> = (overrides) => {
  const [selectedId, setSelectedId] = useState<string | undefined>(overrides.selectedAssetId)
  const [amount, setAmount] = useState<string>(overrides.amount ?? '')
  return (
    <WithdrawModal12
      {...baseArgs}
      {...overrides}
      selectedAssetId={selectedId}
      onSelectAsset={setSelectedId}
      amount={amount}
      onAmountChange={setAmount}
    />
  )
}

export const SelectAsset: Story = {
  render: () => <Live />,
}

export const AmountEmpty: Story = {
  render: () => <Live selectedAssetId="BNB" amount="" />,
}

export const AmountFilled: Story = {
  render: () => <Live selectedAssetId="BNB" amount="999,999" />,
}
