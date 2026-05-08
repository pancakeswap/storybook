import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { styled } from 'styled-components'
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

/* ── Mobile / Tablet bottom-sheet wrapper ─────────────────────────
   Mirrors the chart bottom-sheet UI used in SimplePerpsPage when the
   ticker's chart-icon button opens the BottomDrawer. The widget itself
   is unchanged — these wrappers just frame it the way it appears
   inside the drawer. */

const SheetSurface = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.card};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  overflow: hidden;
  position: relative;
`

const SheetGrabber = styled.span`
  position: absolute;
  left: 50%;
  top: 16px;
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.cardBorder};
  transform: translateX(-50%);
`

const SheetGrabberSpacer = styled.div`
  height: 24px;
  flex-shrink: 0;
`

const SheetHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

const SymbolRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

 
const TokenIcon = styled.span`
  display: inline-flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f3ba2f;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-family: Kanit;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
`

const Symbol = styled.span`
  font-family: Kanit;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.colors.text};
`

const Price = styled.div`
  font-family: Kanit;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.32px;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
`

const StatsRow = styled.div`
  display: flex;
  gap: 16px;
  font-family: Kanit;
  font-size: 14px;
`

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
`

const StatLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-weight: 400;
  line-height: 150%;
`

const StatValue = styled.span<{ $sign?: 'positive' | 'negative' }>`
  color: ${({ $sign, theme }) =>
    $sign === 'negative'
      ? theme.colors.failure
      : $sign === 'positive'
        ? theme.colors.positive60
        : theme.colors.text};
  font-weight: 600;
  line-height: 150%;
  font-variant-numeric: tabular-nums;
`

/* Strips SimpleChartCard's outer card chrome so it lays out flush on
   the drawer surface — matches Figma 623-30687. The chart flex-fills
   the remaining vertical space below the header instead of using a
   fixed 480px card. */
const ChartFrame = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  min-height: 0;
  & > div {
    flex: 1 !important;
    height: auto !important;
    border: 0 !important;
    background: transparent !important;
    border-radius: 0 !important;
    padding: 10px 16px 16px !important;
  }
`

/* Single-line labels at mobile/tablet width — "5:00 AM" wraps or clips
   inside the ~421px content area, so the mobile state uses the short
   "5AM" form to keep each tick on one line. */
const X_TICKS_MOBILE = [
  '5AM',
  '9AM',
  '1PM',
  '5PM',
  '9PM',
  '1AM',
  '5AM',
  '9AM',
  '1PM',
] as const

const ChartSheetMockup: React.FC = () => {
  const [tf, setTf] = useState<string>(baseArgs.timeframe)
  return (
    <SheetSurface>
      <SheetGrabber aria-hidden />
      <SheetGrabberSpacer />
      <SheetHeader>
        <SymbolRow>
          <TokenIcon>B</TokenIcon>
          <Symbol>BTC</Symbol>
        </SymbolRow>
        <Price>78,053.6</Price>
        <StatsRow>
          <Stat>
            <StatLabel>24h Change</StatLabel>
            <StatValue $sign="negative">-0.01%</StatValue>
          </Stat>
          <Stat>
            <StatLabel>24h High</StatLabel>
            <StatValue>0.0053863</StatValue>
          </Stat>
          <Stat>
            <StatLabel>24h Low</StatLabel>
            <StatValue>0.0051863</StatValue>
          </Stat>
        </StatsRow>
      </SheetHeader>
      <ChartFrame>
        <SimpleChartCard
          {...baseArgs}
          xTicks={X_TICKS_MOBILE}
          timeframe={tf}
          onTimeframeChange={setTf}
        />
      </ChartFrame>
    </SheetSurface>
  )
}

export const MobileTabletChart: Story = {
  name: 'Mobile / Tablet Chart',
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'iphone17Pro' },
    globals: { viewport: { value: 'iphone17Pro' } },
  },
  render: () => <ChartSheetMockup />,
}
