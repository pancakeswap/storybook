import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { EditCollateralModal } from './EditCollateralModal'

const meta = {
  title: 'Widgets/Edit Collateral ⚠️ deprecated',
  component: EditCollateralModal,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    open: true,
    positionId: '1',
    pair: 'BTC/USDT',
    direction: 'long',
    margin: '$2,240.00',
    leverage: 9.5,
    liquidationPrice: '$64,810.03',
    size: '$21,280.00',
    availableBalance: '4.61',
    onDeposit: fn(),
    onWithdraw: fn(),
    onClose: fn(),
  },
} satisfies Meta<typeof EditCollateralModal>

export default meta
type Story = StoryObj<typeof meta>

export const DepositTab: Story = {
  name: 'Deposit',
}

export const WithdrawTab: Story = {
  name: 'Withdraw (Short)',
  args: {
    direction: 'short',
    pair: 'ETH/USDT',
    margin: '$636.00',
    leverage: 10,
    liquidationPrice: '$3,820.00',
    size: '$6,360.00',
  },
}

export const NoBalance: Story = {
  name: 'No Balance',
  args: {
    availableBalance: '0.00',
  },
}
