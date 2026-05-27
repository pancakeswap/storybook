import type { Meta, StoryObj } from '@storybook/react-vite'
import { AiCopilotPage } from './AiCopilotPage'

const meta = {
  title: 'Apps/AI Copilot',
  component: AiCopilotPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof AiCopilotPage>

export default meta
type Story = StoryObj<typeof meta>

export const BTC: Story = {
  name: 'BTC/USDT',
  args: { initialPair: 'BTC/USDT' },
}
