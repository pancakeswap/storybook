import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Radio } from './Radio'
import { Text } from './Text'

function RadioPage() {
  const [value, setValue] = useState('a')
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '32px 24px' }}>
      <Text bold fontSize="20px" style={{ marginBottom: 32 }}>Radio</Text>
      <div style={{ display: 'flex', gap: 24 }}>
        {['a', 'b', 'c'].map((v) => (
          <label key={v} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
            <Radio name="demo" scale="md" checked={value === v} onChange={() => setValue(v)} />
            <Text fontSize="14px">Option {v.toUpperCase()}</Text>
          </label>
        ))}
      </div>
    </div>
  )
}

const meta = { title: 'Components/Radio', component: RadioPage, tags: ['autodocs'], parameters: { layout: 'fullscreen' } } satisfies Meta<typeof RadioPage>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: 'Radio' }
