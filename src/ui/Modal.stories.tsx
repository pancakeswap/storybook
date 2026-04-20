import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import './design-system.css'
import { Modal } from './Modal'
import { Button } from './Button'
import { forceTheme } from '../stories-utils'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  layout: 'fullscreen',
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: { ...forceTheme('light') },
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div className="perps-root" style={{ padding: 40, display: 'flex', justifyContent: 'center' }}>
        <Button variant="primary" onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} title="Example Modal" onClose={() => setOpen(false)}>
          <p style={{ color: 'var(--pcs-colors-text-muted)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>
            This is the modal content area. You can place any content here — forms, confirmation messages, deposit flows, etc.
          </p>
          <div style={{ marginTop: 20, display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setOpen(false)}>Confirm</Button>
          </div>
        </Modal>
      </div>
    )
  },
}

export const DefaultDark: Story = {
  ...Default,
  name: 'Default (Dark)',
  parameters: { ...Default.parameters, ...forceTheme('dark') },
}

export const WithForm: Story = {
  parameters: { ...forceTheme('light') },
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div className="perps-root" style={{ padding: 40, display: 'flex', justifyContent: 'center' }}>
        <Button variant="primary" onClick={() => setOpen(true)}>Open Form Modal</Button>
        <Modal open={open} title="Deposit to Account" onClose={() => setOpen(false)} width={420}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontSize: 12, color: 'var(--pcs-colors-text-muted)', margin: 0 }}>
              Enter the amount you would like to deposit into your trading account.
            </p>
            <div className="p-input-wrap">
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--pcs-colors-text-muted)' }}>USDC</span>
              <input className="p-input-field" type="number" placeholder="0.00" />
            </div>
            <Button variant="primary" fullWidth size="lg" onClick={() => setOpen(false)}>
              Deposit
            </Button>
          </div>
        </Modal>
      </div>
    )
  },
}

export const WithFormDark: Story = {
  ...WithForm,
  name: 'With Form (Dark)',
  parameters: { ...WithForm.parameters, ...forceTheme('dark') },
}
