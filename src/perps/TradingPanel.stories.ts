import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { TradingPanel } from './TradingPanel'

const meta = {
  title: 'Widgets/Portfolio',
  component: TradingPanel,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  args: {
    onEditCollateral: fn(),
    onEditTpSl: fn(),
    onClose: fn(),
    onCloseAll: fn(),
  },
} satisfies Meta<typeof TradingPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {
  name: 'Empty State',
  args: { positions: [] },
}
