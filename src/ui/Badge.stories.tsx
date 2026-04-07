import type { Meta, StoryObj } from '@storybook/react'
import './design-system.css'
import { Badge } from './Badge'
import type { BadgeVariant } from './Badge'

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
  render: (args) => (
    <div className="perps-root" style={{ padding: 24 }}>
      <Badge {...args} />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="perps-root" style={{ padding: 24, display: 'flex', gap: 8, alignItems: 'center' }}>
      <Badge variant="long">LONG</Badge>
      <Badge variant="short">SHORT</Badge>
      <Badge variant="warning">WARNING</Badge>
      <Badge variant="neutral">NEUTRAL</Badge>
    </div>
  ),
}
