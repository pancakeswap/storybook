import type { Meta, StoryObj } from '@storybook/react-vite'
import { MobilePerpsPage } from './MobilePerpsPage'

const meta = {
  title: 'Apps/Perps · Mobile',
  component: MobilePerpsPage,
  parameters: {
    layout: 'centered',
    viewport: { defaultViewport: 'mobile1' },
  },
} satisfies Meta<typeof MobilePerpsPage>

export default meta
type Story = StoryObj<typeof meta>

export const BTC: Story = {
  name: 'BTCUSDT',
  args: { initialPair: 'BTCUSDT' },
}
