import type { Meta, StoryObj } from '@storybook/react'
import { styled } from 'styled-components'
import { WalletPanel } from './WalletPanel'

const meta: Meta<typeof WalletPanel> = {
  title: 'Widgets/Wallet Panel',
  component: WalletPanel,
  parameters: { layout: 'centered' },
  argTypes: {
    initialTab:       { control: 'inline-radio', options: ['assets', 'tx', 'gift'] },
    initialTimeframe: { control: 'inline-radio', options: ['24h', '7d', 'all'] },
    initialExpanded:  { control: 'inline-radio', options: ['spot', 'perp', null] },
  },
}
export default meta
type Story = StoryObj<typeof WalletPanel>

export const Default: Story = {}

export const SpotExpanded: Story = {
  args: { initialExpanded: 'spot' },
}

export const PerpExpanded: Story = {
  args: { initialExpanded: 'perp' },
}

export const SevenDayPnL: Story = {
  args: { initialTimeframe: '7d' },
}

export const AllTimePnL: Story = {
  args: { initialTimeframe: 'all' },
}

/* ── New stories — extension API ──────────────────────────── */

export const Loading: Story = {
  args: { variant: 'loading' },
}

export const Empty: Story = {
  args: { variant: 'empty' },
}

export const BucketLoading: Story = {
  args: {
    data: {
      buckets: {
        spot: {
          key: 'spot',
          label: 'Spot Balance',
          sublabel: 'In your wallet',
          state: 'data',
          amount: 5515.63,
          pnl: { '24h': 1.72, '7d': 4.31, all: 12.84 },
          tokens: [
            { symbol: 'ETH', name: 'Ethereum', amount: '1.09 ETH', value: 1716.02, pnl: 0.5, network: 'BNB', color: '#627EEA' },
            { symbol: 'BNB', name: 'Binance', amount: '1 BNB', value: 651.13, pnl: 0.5, network: 'BNB', color: '#F0B90B' },
          ],
        },
        perp: {
          key: 'perp',
          label: 'Perps Balance',
          sublabel: 'Aster contract',
          state: 'loading',
        },
      },
    },
  },
}

export const BucketEmpty: Story = {
  args: {
    data: {
      buckets: {
        spot: {
          key: 'spot',
          label: 'Spot Balance',
          sublabel: 'In your wallet',
          state: 'data',
          amount: 5515.63,
          pnl: { '24h': 1.72, '7d': 4.31, all: 12.84 },
          tokens: [
            { symbol: 'ETH', name: 'Ethereum', amount: '1.09 ETH', value: 1716.02, pnl: 0.5, network: 'BNB', color: '#627EEA' },
          ],
        },
        perp: {
          key: 'perp',
          label: 'Perps Balance',
          sublabel: 'Aster contract',
          state: 'empty',
        },
      },
    },
    initialExpanded: 'perp',
  },
}

export const CustomActions: Story = {
  args: {
    data: {
      buckets: {
        spot: {
          key: 'spot',
          label: 'Spot Balance',
          sublabel: 'In your wallet',
          amount: 5515.63,
          pnl: { '24h': 1.72, '7d': 4.31, all: 12.84 },
          tokens: [
            { symbol: 'ETH', name: 'Ethereum', amount: '1.09 ETH', value: 1716.02, pnl: 0.5, network: 'BNB', color: '#627EEA' },
            { symbol: 'BNB', name: 'Binance', amount: '1 BNB', value: 651.13, pnl: 0.5, network: 'BNB', color: '#F0B90B' },
          ],
          actions: [
            { key: 'send', label: 'Send', onClick: () => console.log('send') },
            { key: 'receive', label: 'Receive', onClick: () => console.log('receive') },
            { key: 'buy', label: 'Buy', primary: true, onClick: () => console.log('buy') },
          ],
        },
        perp: {
          key: 'perp',
          label: 'Perps Balance',
          sublabel: 'Aster contract',
          amount: 973.35,
          pnl: { '24h': -0.22, '7d': 8.12, all: 23.18 },
          perpStats: {
            balance: 567.79,
            balancePnlPct: 1.72,
            unrealizedPnl: 405.56,
            unrealizedPnlPct: -0.22,
          },
          actions: [
            { key: 'manage', label: 'Manage', onClick: () => console.log('manage') },
            { key: 'transfer', label: 'Transfer', onClick: () => console.log('transfer') },
            { key: 'deposit', label: 'Deposit', primary: true, onClick: () => console.log('deposit') },
          ],
        },
      },
    },
    initialExpanded: 'spot',
  },
}

const PlaceholderChip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.cardSecondary};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  color: ${({ theme }) => theme.colors.text};
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
`

const PlaceholderPanel = styled.div`
  align-self: stretch;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.cardSecondary};
  color: ${({ theme }) => theme.colors.textSubtle};
  font-family: Kanit;
  font-size: 14px;
  text-align: center;
`

export const Multichain: Story = {
  args: {
    heroTitle: 'Wallet',
    showPnl: false,
    showTimeframe: false,
    walletChip: <PlaceholderChip>0xAbC…1234</PlaceholderChip>,
    chainChip: <PlaceholderChip>BNB Chain</PlaceholderChip>,
    tabContent: {
      transactions: <PlaceholderPanel>Transaction history goes here</PlaceholderPanel>,
      gift: <PlaceholderPanel>Gift center goes here</PlaceholderPanel>,
    },
  },
}

/* ── Embedded — drops outer chrome so a parent card can wrap it ── */

const EmbeddedHostCard = styled.div`
  width: 432px;
  padding: 16px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom-width: 2px;
`

const EmbeddedBackdrop = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px;
  background: #2a1a4a;
  border-radius: 16px;
`

export const Embedded: Story = {
  render: (args) => (
    <EmbeddedBackdrop>
      <EmbeddedHostCard>
        <WalletPanel {...args} />
      </EmbeddedHostCard>
    </EmbeddedBackdrop>
  ),
  args: {
    embedded: true,
  },
}
