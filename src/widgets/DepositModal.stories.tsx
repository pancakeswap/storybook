import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import { Button } from '../primitives/Button'
import { Message, MessageText } from '../primitives/Message'
import {
  DepositModal,
  type DepositReceipt,
  type DepositStep,
  type DepositSubmitState,
  type DepositTokenRow,
} from './DepositModal'

const meta = {
  title: 'Widgets/Deposit Modal 🆕',
  component: DepositModal,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof DepositModal>

export default meta
type Story = StoryObj<typeof meta>

const ASSETS: DepositTokenRow[] = [
  { id: 'USDT', symbol: 'USDT', displayName: 'Tether USD', balanceText: '1,234.5678', hasBalance: true },
  { id: 'USDC', symbol: 'USDC', displayName: 'USD Coin', balanceText: '500.00', hasBalance: true },
  { id: 'BNB', symbol: 'BNB', displayName: 'BNB', balanceText: '0.0000', hasBalance: false },
]

const RECEIPT: DepositReceipt = {
  hash: '0xabcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789',
  amount: '125.50',
  assetSymbol: 'USDT',
  sourceAddress: '0x1234…abcd',
}

const baseArgs = {
  isOpen: true,
  step: 'select' as DepositStep,
  assets: ASSETS,
  selectedAssetId: undefined,
  onSelectAsset: fn(),
  evmAddress: '0x1234…abcd',
  solanaAddress: undefined,
  amount: '',
  onAmountChange: fn(),
  onPercentClick: fn(),
  submitState: 'idle' as DepositSubmitState,
  canContinue: false,
  onContinue: fn(),
  onBack: fn(),
  onClose: fn(),
}

export const Select: Story = { args: baseArgs }

export const Loading: Story = {
  args: { ...baseArgs, assets: [], isLoadingAssets: true },
}

export const Empty: Story = {
  args: { ...baseArgs, assets: [], isLoadingAssets: false, otherSupportedSymbols: ['SOL', 'ETH', 'ARB'] },
}

export const AmountStep: Story = {
  args: {
    ...baseArgs,
    step: 'amount',
    selectedAssetId: 'USDT',
    selectedAsset: ASSETS[0],
    sourceAddress: '0x1234…abcd',
  },
}

export const Filled: Story = {
  args: { ...AmountStep.args!, amount: '125.50', canContinue: true },
}

export const ExceedsBalance: Story = {
  args: {
    ...AmountStep.args!,
    amount: '5000',
    exceedsBalance: true,
    canContinue: false,
    errorSlot: (
      <Message variant="danger">
        <MessageText>Amount exceeds your wallet balance.</MessageText>
      </Message>
    ),
  },
}

export const SwitchingChain: Story = {
  args: { ...Filled.args!, submitState: 'switching-chain' },
}

export const Approving: Story = {
  args: { ...Filled.args!, submitState: 'approving' },
}

export const Depositing: Story = {
  args: { ...Filled.args!, submitState: 'depositing' },
}

export const Checking: Story = {
  args: {
    ...baseArgs,
    step: 'checking',
    selectedAsset: ASSETS[0],
    amount: '125.50',
    receipt: RECEIPT,
    checkingElapsedMs: 14_000,
  },
}

export const Success: Story = {
  args: {
    ...baseArgs,
    step: 'success',
    selectedAsset: ASSETS[0],
    amount: '125.50',
    receipt: RECEIPT,
    onDepositAgain: fn(),
  },
}

export const Failed: Story = {
  args: {
    ...baseArgs,
    step: 'failed',
    selectedAsset: ASSETS[0],
    amount: '125.50',
    onRetry: fn(),
  },
}

/** Interactive — drives controlled step + amount + open state from a parent button. */
export const Interactive: Story = {
  args: { ...baseArgs, isOpen: false },
  render: (args) => {
    const [open, setOpen] = useState(false)
    const [step, setStep] = useState<DepositStep>('select')
    const [selected, setSelected] = useState<DepositTokenRow | undefined>()
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
          Deposit
        </Button>
        <DepositModal
          {...args}
          isOpen={open}
          step={step}
          selectedAssetId={selected?.id}
          selectedAsset={selected}
          amount={amount}
          canContinue={!!amount && Number(amount) > 0}
          onSelectAsset={(id) => {
            const a = args.assets.find((x) => x.id === id)
            if (!a) return
            setSelected(a)
            setStep('amount')
          }}
          onAmountChange={setAmount}
          onPercentClick={(pct) => {
            if (!selected) return
            const max = parseFloat(selected.balanceText.replace(/,/g, ''))
            setAmount(((max * pct) / 100).toFixed(4))
          }}
          onBack={() => setStep('select')}
          onContinue={() => {
            args.onContinue()
            setStep('checking')
            setTimeout(() => setStep('success'), 1200)
          }}
          onClose={() => setOpen(false)}
        />
      </div>
    )
  },
}
