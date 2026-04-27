import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import { Button } from '../primitives/Button'
import { Message, MessageText } from '../primitives/Message'
import { WithdrawModal, type WithdrawStep, type WithdrawTokenRow } from './WithdrawModal'

const meta = {
  title: 'Widgets/Withdraw Modal 🆕',
  component: WithdrawModal,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof WithdrawModal>

export default meta
type Story = StoryObj<typeof meta>

const ASSETS: WithdrawTokenRow[] = [
  { id: 'USDT', symbol: 'USDT', displayName: 'Tether USD', withdrawableText: '1,234.5678', hasBalance: true },
  { id: 'USDC', symbol: 'USDC', displayName: 'USD Coin', withdrawableText: '500.00', hasBalance: true },
  { id: 'BNB', symbol: 'BNB', displayName: 'BNB', withdrawableText: '0.0000', hasBalance: false },
]

export const Select: Story = {
  args: {
    isOpen: true,
    step: 'select',
    assets: ASSETS,
    selectedAssetId: undefined,
    onSelectAsset: fn(),
    destinationAddress: '0x1234…abcd',
    destinationChainName: 'BSC',
    feeText: '0.1234',
    amount: '',
    onAmountChange: fn(),
    onPercentClick: fn(),
    onBack: fn(),
    onWithdraw: fn(),
    onClose: fn(),
  },
}

export const Loading: Story = {
  args: {
    ...Select.args!,
    assets: [],
    isLoadingAssets: true,
  },
}

export const Empty: Story = {
  args: {
    ...Select.args!,
    assets: [],
    isLoadingAssets: false,
  },
}

export const AmountStep: Story = {
  args: {
    ...Select.args!,
    step: 'amount',
    selectedAssetId: 'USDT',
    selectedAsset: ASSETS[0],
    amount: '',
  },
}

export const Filled: Story = {
  args: {
    ...AmountStep.args!,
    amount: '125.50',
  },
}

export const Submitting: Story = {
  args: {
    ...AmountStep.args!,
    amount: '125.50',
    isSubmitting: true,
  },
}

export const WithError: Story = {
  args: {
    ...AmountStep.args!,
    amount: '5000',
    errorSlot: (
      <Message variant="danger">
        <MessageText>Withdrawal would exceed your available balance.</MessageText>
      </Message>
    ),
  },
}

/** Interactive — drives controlled step + amount + open state from a parent button. */
export const Interactive: Story = {
  args: {
    isOpen: false,
    step: 'select',
    assets: ASSETS,
    selectedAssetId: undefined,
    onSelectAsset: fn(),
    destinationAddress: '0x9876…1234',
    destinationChainName: 'BSC',
    feeText: '0.10',
    amount: '',
    onAmountChange: fn(),
    onPercentClick: fn(),
    onBack: fn(),
    onWithdraw: fn(),
    onClose: fn(),
  },
  render: (args) => {
    const [open, setOpen] = useState(false)
    const [step, setStep] = useState<WithdrawStep>('select')
    const [selected, setSelected] = useState<WithdrawTokenRow | undefined>()
    const [amount, setAmount] = useState('')
    return (
      <div>
        <Button
          onClick={() => {
            setStep('select')
            setSelected(undefined)
            setAmount('')
            setOpen(true)
          }}
        >
          Withdraw
        </Button>
        <WithdrawModal
          {...args}
          isOpen={open}
          step={step}
          selectedAssetId={selected?.id}
          selectedAsset={selected}
          amount={amount}
          onSelectAsset={(id) => {
            const a = args.assets.find((x) => x.id === id)
            if (!a) return
            setSelected(a)
            setStep('amount')
          }}
          onAmountChange={setAmount}
          onPercentClick={(pct) => {
            if (!selected) return
            const max = parseFloat(selected.withdrawableText.replace(/,/g, ''))
            setAmount(((max * pct) / 100).toFixed(4))
          }}
          onBack={() => setStep('select')}
          onWithdraw={() => {
            args.onWithdraw()
            setOpen(false)
          }}
          onClose={() => setOpen(false)}
        />
      </div>
    )
  },
}
