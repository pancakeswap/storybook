import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { BunnySlider } from './BunnySlider'

const meta: Meta<typeof BunnySlider> = {
  title: 'Widgets/Bunny Slider 🆕',
  component: BunnySlider,
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof BunnySlider>

function Demo({
  initial,
  min = 0,
  max = 100,
  disabled = false,
  showLabel = false,
}: {
  initial: number
  min?: number
  max?: number
  disabled?: boolean
  showLabel?: boolean
}) {
  const [v, setV] = useState(initial)
  return (
    <div style={{ width: 320, padding: '40px 0' }}>
      <BunnySlider
        min={min}
        max={max}
        value={v}
        onValueChanged={setV}
        disabled={disabled}
        valueLabel={showLabel ? `${Math.round(v)}` : undefined}
      />
    </div>
  )
}

export const Zero: Story    = { render: () => <Demo initial={0} /> }
export const Half: Story    = { render: () => <Demo initial={50} /> }
export const Full: Story    = { render: () => <Demo initial={100} /> }
export const Disabled: Story = { render: () => <Demo initial={40} disabled /> }
export const WithLabel: Story = { render: () => <Demo initial={32} showLabel /> }
export const LeverageRange: Story = {
  render: () => <Demo initial={10} min={1} max={1001} showLabel />,
}
