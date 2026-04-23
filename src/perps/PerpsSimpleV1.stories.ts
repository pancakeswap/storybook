import type { Meta, StoryObj } from '@storybook/react-vite'
import { PerpsSimpleV1 } from './PerpsSimpleV1'

const meta = {
  title: 'Apps/Perps V1',
  component: PerpsSimpleV1,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof PerpsSimpleV1>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
