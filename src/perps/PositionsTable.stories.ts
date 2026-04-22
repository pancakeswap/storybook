import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { PositionsTable } from './PositionsTable'
import { forceTheme } from '../stories-utils'

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

export const Dark: Story = {
  parameters: { ...forceTheme('dark') },
}

export const Light: Story = {
  parameters: { ...forceTheme('light') },
}

export const Empty: Story = {
  name: 'Empty State',
  args: { positions: [] },
  parameters: { ...forceTheme('dark') },
}
