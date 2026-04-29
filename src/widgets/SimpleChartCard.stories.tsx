import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { SimpleChartCard, type SimpleChartCardProps } from './SimpleChartCard'

const TIMEFRAMES = ['1d', '1h', '30m', '15m', '5m'] as const

const Y_TICKS = ['670', '660', '650', '640', '630', '620', '610', 'USD'] as const
const X_TICKS = [
  '5:00 AM',
  '9:00 AM',
  '1:00 PM',
  '5:00 PM',
  '9:00 PM',
  '1:00 AM',
  '5:00 AM',
  '9:00 AM',
  '1:00 PM',
] as const

const baseArgs: SimpleChartCardProps = {
  timeframe: '1d',
  timeframes: TIMEFRAMES,
  onTimeframeChange: () => undefined,
  points: [],
  currentPriceLabel: '640',
  yTicks: Y_TICKS,
  xTicks: X_TICKS,
}

const meta = {
  title: 'Widgets/Simple Chart Card',
  component: SimpleChartCard,
  parameters: { layout: 'centered' },
  args: baseArgs,
} satisfies Meta<typeof SimpleChartCard>

export default meta
type Story = StoryObj<typeof meta>

const Live: React.FC<Partial<SimpleChartCardProps>> = (overrides) => {
  const [tf, setTf] = useState<string>(baseArgs.timeframe)
  return (
    <div style={{ width: 1058 }}>
      <SimpleChartCard
        {...baseArgs}
        {...overrides}
        timeframe={tf}
        onTimeframeChange={setTf}
      />
    </div>
  )
}

export const Default: Story = {
  render: () => <Live />,
}
