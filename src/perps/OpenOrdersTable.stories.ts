import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { OpenOrdersTable } from './OpenOrdersTable'
import { forceTheme } from '../stories-utils'

const meta = {
  title: 'Widgets/Open Orders',
  component: OpenOrdersTable,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  args: {
    onCancel: fn(),
    onCancelAll: fn(),
  },
} satisfies Meta<typeof OpenOrdersTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'With Orders',
  parameters: { ...forceTheme('light') },
  args: {},
}

export const DefaultDark: Story = {
  ...Default,
  name: 'With Orders (Dark)',
  parameters: { ...Default.parameters, ...forceTheme('dark') },
}

export const Empty: Story = {
  name: 'Empty State',
  parameters: { ...forceTheme('light') },
  args: { orders: [] },
}

export const EmptyDark: Story = {
  ...Empty,
  name: 'Empty State (Dark)',
  parameters: { ...Empty.parameters, ...forceTheme('dark') },
}
