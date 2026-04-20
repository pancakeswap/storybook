import type { Meta, StoryObj } from '@storybook/react'
import './design-system.css'
import { Badge } from './Badge'
import type { BadgeVariant } from './Badge'
import { forceTheme } from '../stories-utils'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  layout: 'centered',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['long', 'short', 'warning', 'neutral'] satisfies BadgeVariant[],
    },
    children: { control: 'text' },
  },
  args: {
    variant: 'long',
    children: 'LONG',
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: { ...forceTheme('light') },
  render: (args) => (
    <div className="perps-root" style={{ padding: 24 }}>
      <Badge {...args} />
    </div>
  ),
}

export const DefaultDark: Story = {
  ...Default,
  name: 'Default (Dark)',
  parameters: { ...Default.parameters, ...forceTheme('dark') },
}

export const AllVariants: Story = {
  parameters: { ...forceTheme('light') },
  render: () => (
    <div className="perps-root" style={{ padding: 24, display: 'flex', gap: 8, alignItems: 'center' }}>
      <Badge variant="long">LONG</Badge>
      <Badge variant="short">SHORT</Badge>
      <Badge variant="warning">WARNING</Badge>
      <Badge variant="neutral">NEUTRAL</Badge>
    </div>
  ),
}

export const AllVariantsDark: Story = {
  ...AllVariants,
  name: 'All Variants (Dark)',
  parameters: { ...AllVariants.parameters, ...forceTheme('dark') },
}
