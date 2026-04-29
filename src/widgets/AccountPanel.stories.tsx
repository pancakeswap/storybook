import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { AccountPanel } from './AccountPanel'

const meta = {
  title: 'Widgets/Account Panel 🆕',
  component: AccountPanel,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div style={{ width: 320, height: 420, border: '1px solid var(--pcs-colors-card-border)', display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    onDeposit: fn(),
    onWithdraw: fn(),
    onEnableTrading: fn(),
  },
} satisfies Meta<typeof AccountPanel>

export default meta
type Story = StoryObj<typeof meta>

export const NoWallet: Story = {
  args: {
    state: { kind: 'no-wallet' },
    canDeposit: false,
    canWithdraw: false,
  },
}

export const NeedsDeposit: Story = {
  args: {
    walletDisplay: '0x1234…abcd',
    canDeposit: true,
    canWithdraw: false,
    state: { kind: 'needs-deposit' },
  },
}

export const NeedsTrading: Story = {
  args: {
    walletDisplay: '0x1234…abcd',
    canDeposit: true,
    canWithdraw: false,
    state: { kind: 'needs-trading' },
  },
}

export const ReadyPositive: Story = {
  args: {
    walletDisplay: '0x1234…abcd',
    canDeposit: true,
    canWithdraw: true,
    state: {
      kind: 'ready',
      equity: '1234.56',
      available: '987.21',
      unrealizedPnl: '+12.34',
      pnlSign: 'positive',
      marginMode: 'Cross',
    },
  },
}

export const ReadyNegative: Story = {
  args: {
    walletDisplay: '0x1234…abcd',
    canDeposit: true,
    canWithdraw: true,
    state: {
      kind: 'ready',
      equity: '1234.56',
      available: '987.21',
      unrealizedPnl: '-45.67',
      pnlSign: 'negative',
      marginMode: 'Cross',
    },
  },
}

/**
 * Slim mobile-row variant. Triggered automatically by the mobile
 * breakpoint via `useMatchBreakpoints` — to preview here we override
 * the Storybook viewport. Renders just a label + bold equity figure
 * on the left and a primary "Deposit" button on the right.
 */
export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 360, display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    walletDisplay: '0x1234…abcd',
    canDeposit: true,
    canWithdraw: true,
    state: {
      kind: 'ready',
      equity: '$13.55',
      available: '987.21',
      unrealizedPnl: '+0.00',
      pnlSign: 'zero',
      marginMode: 'Cross',
    },
  },
}
