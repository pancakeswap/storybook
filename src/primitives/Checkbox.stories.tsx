import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Checkbox } from './Checkbox'
import { Text } from './Text'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <Text bold fontSize="14px" style={{ marginBottom: 12 }}>{title}</Text>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>{children}</div>
    </section>
  )
}

function Label({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
      {children}
      <Text fontSize="14px">{label}</Text>
    </label>
  )
}

function CheckboxPage() {
  const [checked, setChecked] = useState(false)

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '32px 24px' }}>
      <Text bold fontSize="20px">Checkbox</Text>
      <Text color="textSubtle" fontSize="14px" style={{ marginTop: 4, marginBottom: 32 }}>
        PancakeSwap Checkbox — copied from UIKit. Styled input with scale, custom colors, and indeterminate state.
      </Text>

      <Section title="Scales">
        <Label label="XS (20px)"><Checkbox scale="xs" defaultChecked /></Label>
        <Label label="SM (24px)"><Checkbox scale="sm" defaultChecked /></Label>
        <Label label="MD (32px)"><Checkbox scale="md" defaultChecked /></Label>
      </Section>

      <Section title="States">
        <Label label="Unchecked"><Checkbox /></Label>
        <Label label="Checked"><Checkbox defaultChecked /></Label>
        <Label label="Indeterminate"><Checkbox indeterminate /></Label>
        <Label label="Disabled"><Checkbox disabled /></Label>
        <Label label="Disabled checked"><Checkbox disabled defaultChecked /></Label>
      </Section>

      <Section title="Custom Colors">
        <Label label="Default">
          <Checkbox defaultChecked />
        </Label>
        <Label label="Custom bg">
          <Checkbox defaultChecked colors={{ background: 'input', checkedBackground: 'primary', border: 'inputSecondary' }} />
        </Label>
      </Section>

      <Section title="Controlled">
        <Label label={checked ? 'Checked' : 'Unchecked'}>
          <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
        </Label>
      </Section>
    </div>
  )
}

const meta = {
  title: 'Components/Checkbox',
  component: CheckboxPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof CheckboxPage>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: 'All Variants' }
