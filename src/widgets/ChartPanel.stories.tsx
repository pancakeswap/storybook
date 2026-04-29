import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChartPanel } from './ChartPanel'

const ChartPlaceholder: React.FC<{ label?: string }> = ({ label = 'Chart goes here' }) => (
  <div
    style={{
      flex: 1,
      display: 'grid',
      placeItems: 'center',
      color: 'var(--pcs-colors-text-subtle)',
      fontFamily: 'monospace',
      fontSize: 14,
    }}
  >
    {label}
  </div>
)

const meta = {
  title: 'Widgets/Chart Panel 🆕',
  component: ChartPanel,
  parameters: { layout: 'centered' },
  args: { children: <ChartPlaceholder /> },
  decorators: [
    (Story) => (
      <div style={{ width: 800, height: 480, display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ChartPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const TallerMin: Story = { args: { minHeight: '60vh' } }

/**
 * Mobile variant. Triggered automatically by `useMatchBreakpoints`
 * when the viewport drops to the mobile breakpoint — we override the
 * Storybook viewport here to preview it. Renders the timeframe tab
 * row + a 220px canvas; when no `children` are passed, the storybook
 * gradient/line fixture is shown along with the optional price pill.
 */
export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 360, display: 'flex', flexDirection: 'column' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    const [tf, setTf] = React.useState<string>('15m')
    return (
      <ChartPanel
        {...args}
        activeTimeframe={tf}
        onTimeframeChange={setTf}
        priceLabel="77,823.5"
      >
        {null}
      </ChartPanel>
    )
  },
  args: {
    // children is overridden by render(); keep the meta default happy
    children: null,
  },
}
