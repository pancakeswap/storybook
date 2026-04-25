import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Button } from '../ui/components/Button'
import { DateRangePicker } from './DateRangePicker'
import type { DateRange } from './DateRangePicker'

const meta = {
  title: 'Widgets/Date Range Picker ⚠️ deprecated',
  component: DateRangePicker,
  parameters: { layout: 'centered' },
  args: {
    onConfirm: fn(),
    onCancel: fn(),
  },
} satisfies Meta<typeof DateRangePicker>

export default meta

type Story = StoryObj<typeof meta>

/** Default — opens on the 1-Week preset. */
export const Default: Story = {}

/** Pre-selected custom range (Apr 6 – Apr 12, 2025). */
export const CustomRange: Story = {
  args: {
    initialRange: {
      from: new Date(2025, 3, 6),
      to:   new Date(2025, 3, 12),
    },
  },
}

/** Launch-from-button — see how it looks in a popover / trigger flow. */
export const Interactive: Story = {
  render: (args) => {
    const [open, setOpen]   = useState(false)
    const [range, setRange] = useState<DateRange | null>(null)
    return (
      <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 16, minWidth: 700 }}>
        <Button variant="secondary" onClick={() => setOpen((v) => !v)}>
          {range ? `${range.from.toDateString()} – ${range.to.toDateString()}` : 'Pick date range'}
        </Button>
        {open && (
          <DateRangePicker
            {...args}
            initialRange={range ?? undefined}
            onCancel={() => setOpen(false)}
            onConfirm={(r) => { setRange(r); setOpen(false) }}
          />
        )}
      </div>
    )
  },
}
