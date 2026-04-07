import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import './design-system.css'
import { Tabs } from './Tabs'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  layout: 'centered',
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const PillVariant: Story = {
  render: () => {
    const [value, setValue] = useState('market')
    return (
      <div className="perps-root" style={{ padding: 24, width: 300 }}>
        <Tabs
          variant="pill"
          value={value}
          onChange={setValue}
          items={[
            { value: 'market', label: 'Market' },
            { value: 'limit', label: 'Limit' },
          ]}
        />
      </div>
    )
  },
}

export const UnderlineVariant: Story = {
  render: () => {
    const [value, setValue] = useState('open')
    return (
      <div className="perps-root" style={{ padding: 24, width: 500 }}>
        <Tabs
          variant="underline"
          value={value}
          onChange={setValue}
          items={[
            { value: 'open', label: 'Open Orders', count: 2 },
            { value: 'orders', label: 'Order History' },
            { value: 'trades', label: 'Trade History' },
            { value: 'funding', label: 'Funding' },
          ]}
        />
      </div>
    )
  },
}

export const BothVariants: Story = {
  render: () => {
    const [pill, setPill] = useState('market')
    const [underline, setUnderline] = useState('open')
    return (
      <div className="perps-root" style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 32, width: 500 }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--pcs-colors-text-muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Pill</p>
          <Tabs
            variant="pill"
            value={pill}
            onChange={setPill}
            items={[
              { value: 'market', label: 'Market' },
              { value: 'limit', label: 'Limit' },
            ]}
          />
        </div>
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--pcs-colors-text-muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Underline</p>
          <Tabs
            variant="underline"
            value={underline}
            onChange={setUnderline}
            items={[
              { value: 'open', label: 'Open Orders', count: 2 },
              { value: 'orders', label: 'Order History' },
              { value: 'trades', label: 'Trade History' },
              { value: 'funding', label: 'Funding' },
            ]}
          />
        </div>
      </div>
    )
  },
}
