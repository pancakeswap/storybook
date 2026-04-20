import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import './design-system.css'
import { Slider } from './Slider'
import { forceTheme } from '../stories-utils'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  layout: 'centered',
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const LeverageSlider: Story = {
  parameters: { ...forceTheme('light') },
  render: () => {
    const [leverage, setLeverage] = useState(10)
    return (
      <div className="perps-root" style={{ padding: 24, width: 320 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <p className="p-label" style={{ margin: 0 }}>Leverage</p>
          <div style={{
            background: 'var(--pcs-colors-surface-subtle)',
            border: '1px solid var(--pcs-colors-border)',
            borderRadius: 6,
            padding: '2px 10px',
            fontSize: 12,
            fontWeight: 700,
            color: 'var(--pcs-colors-long)',
          }}>
            {leverage}×
          </div>
        </div>
        <Slider
          min={1}
          max={100}
          value={leverage}
          onChange={setLeverage}
          formatValue={(v) => `${v}×`}
          marks={[
            { value: 1,   label: '1×' },
            { value: 5,   label: '5×' },
            { value: 10,  label: '10×' },
            { value: 25,  label: '25×' },
            { value: 50,  label: '50×' },
            { value: 100, label: '100×' },
          ]}
        />
      </div>
    )
  },
}

export const LeverageSliderDark: Story = {
  ...LeverageSlider,
  name: 'Leverage Slider (Dark)',
  parameters: { ...LeverageSlider.parameters, ...forceTheme('dark') },
}

export const SimpleSlider: Story = {
  parameters: { ...forceTheme('light') },
  render: () => {
    const [value, setValue] = useState(50)
    return (
      <div className="perps-root" style={{ padding: 24, width: 320 }}>
        <p className="p-label" style={{ marginBottom: 8 }}>Value: {value}</p>
        <Slider
          min={0}
          max={100}
          step={1}
          value={value}
          onChange={setValue}
        />
      </div>
    )
  },
}

export const SimpleSliderDark: Story = {
  ...SimpleSlider,
  name: 'Simple Slider (Dark)',
  parameters: { ...SimpleSlider.parameters, ...forceTheme('dark') },
}

export const WithMarks: Story = {
  parameters: { ...forceTheme('light') },
  render: () => {
    const [value, setValue] = useState(25)
    return (
      <div className="perps-root" style={{ padding: 24, width: 320 }}>
        <p className="p-label" style={{ marginBottom: 8 }}>Position Size: {value}%</p>
        <Slider
          min={0}
          max={100}
          step={5}
          value={value}
          onChange={setValue}
          formatValue={(v) => `${v}%`}
          marks={[
            { value: 0,   label: '0%' },
            { value: 25,  label: '25%' },
            { value: 50,  label: '50%' },
            { value: 75,  label: '75%' },
            { value: 100, label: '100%' },
          ]}
        />
      </div>
    )
  },
}

export const WithMarksDark: Story = {
  ...WithMarks,
  name: 'With Marks (Dark)',
  parameters: { ...WithMarks.parameters, ...forceTheme('dark') },
}
