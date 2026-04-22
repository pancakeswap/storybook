import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { PositionsTable } from './PositionsTable'

const meta = {
  title: 'Widgets/Positions',
  component: PositionsTable,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  args: {
    onEditCollateral: fn(),
    onEditTpSl: fn(),
    onClose: fn(),
    onCloseAll: fn(),
  },
} satisfies Meta<typeof PositionsTable>

export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {
  name: 'Empty State',
  args: { positions: [] },
}
