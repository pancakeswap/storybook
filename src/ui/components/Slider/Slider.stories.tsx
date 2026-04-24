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

/** Basic 0–100 slider with the bunny thumb. */
export const Default: Story = {
  args: { min: 0, max: 100, value: 25, width: '100%' },
  render: (args) => {
    const [value, setValue] = useState(args.value)
    return <Slider {...args} value={value} onValueChanged={setValue} />
  },
}

/** Discrete leverage selector with marks (1× / 25× / 50× / 75× / 100×). */
export const WithMarks: Story = {
  args: {
    min: 1,
    max: 100,
    value: 10,
    step: 1,
    width: '100%',
    marks: [
      { value: 1, label: '1×' },
      { value: 25, label: '25×' },
      { value: 50, label: '50×' },
      { value: 75, label: '75×' },
      { value: 100, label: '100×' },
    ],
  },
  render: (args) => {
    const [value, setValue] = useState(args.value)
    return <Slider {...args} value={value} onValueChanged={setValue} />
  },
}

/** Percentage selector that surfaces the live value above the thumb (renders "MAX" at 100). */
export const WithValueLabel: Story = {
  args: {
    min: 0,
    max: 100,
    value: 40,
    step: 1,
    width: '100%',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value)
    return <Slider {...args} value={value} onValueChanged={setValue} valueLabel={`${value}%`} />
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
