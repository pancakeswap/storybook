import type { Meta, StoryObj } from '@storybook/react-vite'
import { PositionsPage } from './Positions'

const meta = {
  title: 'Pages/Positions',
  component: PositionsPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof PositionsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Positions' }
