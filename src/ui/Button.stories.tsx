import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import './design-system.css'
import { Button } from './Button'
import type { ButtonVariant, ButtonSize } from './Button'
import { forceTheme } from '../stories-utils'

const meta = {
  title: 'Components/Button',
  component: Button,
  layout: 'centered',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'outline', 'long', 'short'] satisfies ButtonVariant[],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'] satisfies ButtonSize[],
    },
    fullWidth: { control: 'boolean' },
    active: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    fullWidth: false,
    active: false,
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: { ...forceTheme('light') },
  render: (args) => (
    <div className="perps-root" style={{ padding: 24 }}>
      <Button {...args} />
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
    <div className="perps-root" style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Variants */}
      <div>
        <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--pcs-colors-text-muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Variants</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="long">Long</Button>
          <Button variant="short">Short</Button>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--pcs-colors-text-muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Sizes</p>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
      </div>

      {/* Ghost states */}
      <div>
        <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--pcs-colors-text-muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Ghost States</p>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button variant="ghost">Ghost</Button>
          <Button variant="ghost" active>Ghost Active</Button>
        </div>
      </div>

      {/* Disabled */}
      <div>
        <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--pcs-colors-text-muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Disabled</p>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button variant="primary" disabled>Primary</Button>
          <Button variant="long" disabled>Long</Button>
          <Button variant="short" disabled>Short</Button>
        </div>
      </div>

      {/* Full width */}
      <div>
        <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--pcs-colors-text-muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Full Width</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 300 }}>
          <Button variant="long" fullWidth size="lg">▲ Place Long Order</Button>
          <Button variant="short" fullWidth size="lg">▼ Place Short Order</Button>
        </div>
      </div>
    </div>
  ),
}

export const AllVariantsDark: Story = {
  ...AllVariants,
  name: 'All Variants (Dark)',
  parameters: { ...AllVariants.parameters, ...forceTheme('dark') },
}
