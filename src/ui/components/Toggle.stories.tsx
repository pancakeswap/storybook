import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Toggle } from './Toggle'
import { Text } from './Text'

function TogglePage() {
  const [on1, setOn1] = useState(false)
  const [on2, setOn2] = useState(true)

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '32px 24px' }}>
      <Text bold fontSize="20px">Toggle</Text>
      <Text color="textSubtle" fontSize="14px" style={{ marginTop: 4, marginBottom: 32 }}>PancakeSwap Toggle switch.</Text>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Toggle checked={on1} onChange={() => setOn1(!on1)} scale="md" />
          <Text fontSize="14px">MD — {on1 ? 'On' : 'Off'}</Text>
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Toggle checked={on2} onChange={() => setOn2(!on2)} scale="sm" />
          <Text fontSize="14px">SM — {on2 ? 'On' : 'Off'}</Text>
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Toggle disabled scale="md" />
          <Text fontSize="14px" color="textDisabled">Disabled</Text>
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Toggle checked disabled scale="md" />
          <Text fontSize="14px" color="textDisabled">Disabled checked</Text>
        </label>
      </div>
    </div>
  )
}

const meta = {
  title: 'Components/Toggle',
  component: TogglePage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof TogglePage>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: 'Toggle' }
