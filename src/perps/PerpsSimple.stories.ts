import type { Meta, StoryObj } from '@storybook/react-vite'
import { PerpsSimple } from './PerpsSimple'

const meta = {
  title: 'Apps/Perps',
  component: PerpsSimple,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof PerpsSimple>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
