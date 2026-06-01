import type { Meta, StoryObj } from '@storybook/react-vite'
import { DashboardPage } from './Dashboard'
import { DashboardBothWallets } from './DashboardBothWallets'

const meta = {
  title: 'Pages/Dashboard',
  component: DashboardPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof DashboardPage>

export default meta
type Story = StoryObj<typeof meta>

/** Single-wallet (EVM only) dashboard — current production design. */
export const Default: Story = { name: 'Dashboard' }

/**
 * Dashboard for users with both an EVM and a Solana wallet connected.
 * Scoped header at the top + per-chain stacked sections (each with the full
 * chart + breakdown + tokens widget set).
 */
export const BothWallets: Story = {
  name: 'Dashboard both wallets',
  render: () => <DashboardBothWallets />,
}
