import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import Slider from './Slider'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div style={{ width: 360, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    name: 'demo-slider',
    onValueChanged: fn(),
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

/** Default bunny variant — the classic PCS bunny-thumb slider. */
export const Bunny: Story = {
  args: { min: 0, max: 100, value: 25, width: '100%' },
  render: (args) => {
    const [value, setValue] = useState(args.value)
    return <Slider {...args} value={value} onValueChanged={setValue} />
  },
}

/** Bunny with live `valueLabel` above the thumb (renders "MAX" at 100). */
export const BunnyWithValueLabel: Story = {
  args: { min: 0, max: 100, value: 40, step: 1, width: '100%' },
  render: (args) => {
    const [value, setValue] = useState(args.value)
    return <Slider {...args} value={value} onValueChanged={setValue} valueLabel={`${value}%`} />
  },
}

/**
 * Dotted variant — percentage rail with clickable stops. Used by the
 * perps OrderPanel size-percent slider.
 */
export const Dotted: Story = {
  args: { min: 0, max: 100, value: 25, step: 1, width: '100%', variant: 'dotted', dotStep: 25 },
  render: (args) => {
    const [value, setValue] = useState(args.value)
    return <Slider {...args} value={value} onValueChanged={setValue} />
  },
}

/** Disabled — bunny + bar lose color, input ignores input. */
export const Disabled: Story = {
  args: { min: 0, max: 100, value: 60, disabled: true, width: '100%' },
  render: (args) => {
    const [value, setValue] = useState(args.value)
    return <Slider {...args} value={value} onValueChanged={setValue} />
  },
}
