import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import './design-system.css'
import { Input } from './Input'
import { forceTheme } from '../stories-utils'

const meta = {
  title: 'Components/Input',
  component: Input,
  layout: 'centered',
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: { ...forceTheme('light') },
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div className="perps-root" style={{ padding: 24, width: 320 }}>
        <Input
          label="Amount"
          prefix="USDC"
          inputProps={{
            type: 'number',
            placeholder: '0.00',
            value,
            onChange: (e) => setValue(e.target.value),
          }}
        />
      </div>
    )
  },
}

export const DefaultDark: Story = {
  ...Default,
  name: 'Default (Dark)',
  parameters: { ...Default.parameters, ...forceTheme('dark') },
}

export const WithLabelAndActions: Story = {
  parameters: { ...forceTheme('light') },
  render: () => {
    const [value, setValue] = useState('')
    const rawVal = parseFloat(value) || 0
    return (
      <div className="perps-root" style={{ padding: 24, width: 320 }}>
        <Input
          label="Collateral"
          labelRight={
            <>
              Available: <strong style={{ color: 'var(--pcs-colors-text)' }}>$1,000.00</strong>
            </>
          }
          prefix="USDC"
          actions={[
            { label: '½', onClick: () => setValue((500).toFixed(2)) },
            { label: 'MAX', onClick: () => setValue((1000).toFixed(2)) },
          ]}
          inputProps={{
            type: 'number',
            placeholder: '0.00',
            value,
            onChange: (e) => setValue(e.target.value),
          }}
        />
      </div>
    )
  },
}

export const WithLabelAndActionsDark: Story = {
  ...WithLabelAndActions,
  name: 'With Label And Actions (Dark)',
  parameters: { ...WithLabelAndActions.parameters, ...forceTheme('dark') },
}

export const WithPrefix: Story = {
  parameters: { ...forceTheme('light') },
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div className="perps-root" style={{ padding: 24, width: 320 }}>
        <Input
          label="Limit Price"
          prefix="$"
          height={44}
          inputProps={{
            type: 'number',
            placeholder: '3.4800',
            value,
            onChange: (e) => setValue(e.target.value),
          }}
        />
      </div>
    )
  },
}

export const WithPrefixDark: Story = {
  ...WithPrefix,
  name: 'With Prefix (Dark)',
  parameters: { ...WithPrefix.parameters, ...forceTheme('dark') },
}

export const AllVariants: Story = {
  parameters: { ...forceTheme('light') },
  render: () => {
    const [v1, setV1] = useState('')
    const [v2, setV2] = useState('')
    const [v3, setV3] = useState('')
    return (
      <div className="perps-root" style={{ padding: 24, width: 340, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Input
          label="Basic Input"
          inputProps={{ type: 'text', placeholder: 'Enter value...', value: v1, onChange: (e) => setV1(e.target.value) }}
        />
        <Input
          label="With Prefix"
          prefix="$"
          inputProps={{ type: 'number', placeholder: '0.00', value: v2, onChange: (e) => setV2(e.target.value) }}
        />
        <Input
          label="Collateral"
          labelRight={<>Available: <strong style={{ color: 'var(--pcs-colors-text)' }}>$500.00</strong></>}
          prefix="USDC"
          actions={[
            { label: '½', onClick: () => setV3('250.00') },
            { label: 'MAX', onClick: () => setV3('500.00') },
          ]}
          inputProps={{ type: 'number', placeholder: '0.00', value: v3, onChange: (e) => setV3(e.target.value) }}
        />
      </div>
    )
  },
}

export const AllVariantsDark: Story = {
  ...AllVariants,
  name: 'All Variants (Dark)',
  parameters: { ...AllVariants.parameters, ...forceTheme('dark') },
}
