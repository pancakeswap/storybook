import type { Meta, StoryObj } from '@storybook/react-vite'
import { DashboardPage } from './Dashboard'

const meta = {
  title: 'Pages/Dashboard',
  component: DashboardPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof DashboardPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Dashboard' }
