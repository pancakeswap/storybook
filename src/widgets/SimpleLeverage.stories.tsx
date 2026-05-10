import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { SimpleLeverage, type SimpleLeverageProps } from './SimpleLeverage'

const meta = {
  title: 'Widgets/Simple Leverage',
  component: SimpleLeverage,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof SimpleLeverage>

export default meta
type Story = StoryObj<typeof meta>

const Live: React.FC<Partial<SimpleLeverageProps>> = ({ leverage: initial = 10, ...rest }) => {
  const [lev, setLev] = useState<number>(initial)
  return (
    <div style={{ width: 472 }}>
      <SimpleLeverage leverage={lev} onLeverageChange={setLev} {...rest} />
    </div>
  )
}

export const Default: Story = {
  render: () => <Live leverage={10} />,
}

/** 25-99x — caution zone (primary teal). */
export const Caution: Story = {
  render: () => <Live leverage={50} />,
}

/** 100-499x — warn zone (warning amber); thumb switches to the
 *  double-coin variant. */
export const HighLeverage: Story = {
  render: () => <Live leverage={250} />,
}

/** 500x+ — danger zone (destructive pink); thumb switches to the
 *  triple-coin "degen" variant. */
export const Degen: Story = {
  render: () => <Live leverage={500} />,
}

/** Top of the 1001x cap. */
export const Maxed: Story = {
  render: () => <Live leverage={1001} />,
}

/** While `isApplyingLeverage` is true the track, presets, and custom
 *  input are all gated so a previous `/fapi/v3/leverage` commit can
 *  resolve without overlapping calls. */
export const Submitting: Story = {
  render: () => <Live leverage={50} isApplyingLeverage />,
}

/** Lower cap — `maxLeverage={100}` clamps the slider, presets, and
 *  custom input. The zone tiers are absolute, so this 100x-cap symbol
 *  reaches "warn" at the top. */
export const LowMaxLeverage: Story = {
  render: () => <Live leverage={50} maxLeverage={100} presets={[10, 25, 50, 100]} />,
}
