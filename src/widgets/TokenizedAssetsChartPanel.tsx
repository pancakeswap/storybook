import React from 'react'
import styled from 'styled-components'
import { CandleGraphIcon, ChartIcon, ChevronDownIcon, SearchIcon } from '../primitives/Icons'

export interface TokenizedAssetsChartPanelProps {
  /** e.g. "NVIDIA CORP" */
  name: string
  /** e.g. "NVDAx" */
  ticker: string
  /** e.g. "$5.7T MC" */
  metaLabel: string
  /** Background color of the asset's logo circle. */
  iconColor: string
  /** Initials inside the logo circle — defaults to first letter of ticker. */
  iconInitials?: string

  price: string
  /** Absolute price delta string (with sign), e.g. "+$8.82". */
  priceDelta: string
  /** Percentage delta string (with sign + parens), e.g. "(+3.89%)". */
  priceDeltaPct: string
  isPositive: boolean

  /** Currently selected timeframe key. */
  timeframe?: string
  /** Available timeframes. */
  timeframes?: readonly string[]
  onTimeframeChange?: (next: string) => void
}

const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 468px;
  height: 472px;
  max-width: 1024px;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.card};
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 24px;
  overflow: hidden;
`

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  align-self: stretch;
  gap: 16px;
  padding: 12px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`

const TokenCircle = styled.span<{ $color: string }>`
  display: inline-flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: ${({ $color }) => $color};
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
`

const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`

const Name = styled.span`
  font-family: 'Kanit', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;
  font-feature-settings: 'liga' off;
`

const SubLabel = styled.span`
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-feature-settings: 'liga' off;
`

const HeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`

const Price = styled.span`
  font-family: 'Kanit', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
  text-align: right;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
  font-feature-settings: 'liga' off;
`

const DeltaRow = styled.span<{ $positive: boolean }>`
  font-size: 12px;
  font-weight: 600;
  color: ${({ $positive, theme }) =>
    $positive ? theme.colors.success : theme.colors.failure};
  font-variant-numeric: tabular-nums;
`

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 4px;
  padding: 6px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

const Tf = styled.button<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  padding: 0 10px;
  border: 0;
  border-radius: 8px;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.input : 'transparent'};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.text : theme.colors.textSubtle};
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

const ToolbarDivider = styled.span`
  display: inline-block;
  width: 1px;
  height: 18px;
  background: ${({ theme }) => theme.colors.cardBorder};
  margin: 0 4px;
`

const ToolbarBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 26px;
  padding: 0 8px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.input};
  }
`

const ToolbarSpacer = styled.span`
  flex: 1;
`

const ChartArea = styled.div`
  position: relative;
  flex: 1;
  align-self: stretch;
  min-height: 0;
  background: ${({ theme }) => theme.colors.background};
  overflow: hidden;
`

const YAxis = styled.div`
  position: absolute;
  inset: 0 0 24px auto;
  width: 56px;
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 0 8px 8px;
`

const YTick = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-variant-numeric: tabular-nums;
`

const XAxis = styled.div`
  position: absolute;
  inset: auto 56px 0 0;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

const XTick = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const CandleArea = styled.div`
  position: absolute;
  inset: 0 56px 24px 0;
  display: flex;
  align-items: stretch;
  gap: 2px;
  padding: 16px 12px;
`

type Candle = {
  open: number
  close: number
  high: number
  low: number
}

const CandleColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
`

const Wick = styled.span<{ $top: number; $height: number; $positive: boolean }>`
  position: absolute;
  top: ${({ $top }) => $top}%;
  height: ${({ $height }) => $height}%;
  width: 1px;
  background: ${({ $positive, theme }) =>
    $positive ? theme.colors.success : theme.colors.failure};
`

const Body = styled.span<{ $top: number; $height: number; $positive: boolean }>`
  position: absolute;
  top: ${({ $top }) => $top}%;
  height: ${({ $height }) => Math.max(0.6, $height)}%;
  width: 6px;
  background: ${({ $positive, theme }) =>
    $positive ? theme.colors.success : theme.colors.failure};
  border-radius: 1px;
`

const CurrentPriceLine = styled.div<{ $top: number }>`
  position: absolute;
  left: 0;
  right: 0;
  top: ${({ $top }) => $top}%;
  border-top: 1px dashed ${({ theme }) => theme.colors.secondary};
  pointer-events: none;
`

const PricePill = styled.span`
  position: absolute;
  right: -56px;
  top: -10px;
  display: inline-flex;
  align-items: center;
  padding: 2px 6px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.invertedContrast};
  min-width: 48px;
  justify-content: center;
`

const DEFAULT_TIMEFRAMES = ['5m', '1h', 'D'] as const

const Y_TICKS = ['240', '238', '236', '234', '232', '230', '228', 'USD']
const X_TICKS = ['09:30', '11:00', '12:30', '14:00', '15:30']

/** Synthetic candle series — visual only, no live data. */
const SAMPLE: Candle[] = (() => {
  const seed = [232, 234, 233, 236, 234, 235, 237, 235, 233, 234, 235]
  let last = 232
  const out: Candle[] = []
  for (let i = 0; i < 40; i += 1) {
    const base = seed[i % seed.length] + Math.sin(i * 0.6) * 1.2
    const open = last
    const close = base + (i % 5 === 0 ? -1 : 0.3)
    const high = Math.max(open, close) + 0.6
    const low = Math.min(open, close) - 0.6
    out.push({ open, close, high, low })
    last = close
  }
  return out
})()

export const TokenizedAssetsChartPanel: React.FC<TokenizedAssetsChartPanelProps> = ({
  name,
  ticker,
  metaLabel,
  iconColor,
  iconInitials,
  price,
  priceDelta,
  priceDeltaPct,
  isPositive,
  timeframe = '5m',
  timeframes = DEFAULT_TIMEFRAMES,
  onTimeframeChange,
}) => {
  // Map candle prices into the chart area's 0–100% coordinate space.
  const max = Math.max(...SAMPLE.map((c) => c.high))
  const min = Math.min(...SAMPLE.map((c) => c.low))
  const range = max - min || 1
  const toPct = (v: number) => 100 - ((v - min) / range) * 100

  const lastClose = SAMPLE[SAMPLE.length - 1].close
  const lastPricePct = toPct(lastClose)

  return (
    <Root aria-label={`${name} chart`}>
      <Header>
        <HeaderLeft>
          <TokenCircle $color={iconColor}>
            {iconInitials ?? ticker.replace(/x$/i, '').slice(0, 1)}
          </TokenCircle>
          <NameBlock>
            <Name>{name}</Name>
            <SubLabel>
              {ticker} | {metaLabel}
            </SubLabel>
          </NameBlock>
        </HeaderLeft>
        <HeaderRight>
          <Price>{price}</Price>
          <DeltaRow $positive={isPositive}>
            {priceDelta} {priceDeltaPct}
          </DeltaRow>
        </HeaderRight>
      </Header>

      <Toolbar role="toolbar" aria-label="Chart toolbar">
        {timeframes.map((tf) => (
          <Tf
            key={tf}
            type="button"
            $active={tf === timeframe}
            aria-pressed={tf === timeframe}
            onClick={() => onTimeframeChange?.(tf)}
          >
            {tf}
          </Tf>
        ))}
        <ToolbarDivider aria-hidden />
        <ToolbarBtn type="button" aria-label="Candle style">
          <CandleGraphIcon width={18} color="currentColor" />
        </ToolbarBtn>
        <ToolbarDivider aria-hidden />
        <ToolbarBtn type="button">
          <ChartIcon width={18} color="currentColor" />
          Indicators
          <ChevronDownIcon width={14} color="currentColor" />
        </ToolbarBtn>
        <ToolbarSpacer />
        <ToolbarBtn type="button" aria-label="Quick search">
          <SearchIcon width={18} color="currentColor" />
        </ToolbarBtn>
        <ToolbarBtn type="button" aria-label="Fullscreen">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
          </svg>
        </ToolbarBtn>
      </Toolbar>

      <ChartArea aria-hidden>
        <CandleArea>
          {SAMPLE.map((c, i) => {
            const positive = c.close >= c.open
            const wickTop = toPct(c.high)
            const wickBottom = toPct(c.low)
            const bodyTop = toPct(Math.max(c.open, c.close))
            const bodyBottom = toPct(Math.min(c.open, c.close))
            return (
              <CandleColumn key={i}>
                <Wick
                  $top={wickTop}
                  $height={wickBottom - wickTop}
                  $positive={positive}
                />
                <Body
                  $top={bodyTop}
                  $height={bodyBottom - bodyTop}
                  $positive={positive}
                />
              </CandleColumn>
            )
          })}
          <CurrentPriceLine $top={lastPricePct}>
            <PricePill>{lastClose.toFixed(2)}</PricePill>
          </CurrentPriceLine>
        </CandleArea>
        <YAxis>
          {Y_TICKS.map((t) => (
            <YTick key={t}>{t}</YTick>
          ))}
        </YAxis>
        <XAxis>
          {X_TICKS.map((t) => (
            <XTick key={t}>{t}</XTick>
          ))}
        </XAxis>
      </ChartArea>
    </Root>
  )
}
