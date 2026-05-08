import type { Meta, StoryObj } from '@storybook/react-vite'
import { DashboardPage12 } from './Dashboard12'

const meta = {
  title: 'Pages/Dashboard 1.2',
  component: DashboardPage12,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof DashboardPage12>

export default meta
type Story = StoryObj<typeof meta>

export const BothWallets: Story = { name: 'Both Wallets' }
