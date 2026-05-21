import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Card } from '../primitives/Card'
import { Text } from '../primitives/Text'
import { Heading } from '../primitives/Heading'
import { Tag } from '../primitives/Tag'
import { CandleGraphIcon, LineGraphIcon } from '../primitives/Icons'

/**
 * Stateless chart card used on the Stock page (Figma 7-11516). Header shows
 * the active stock name + ticker + market-cap chip + price + 24h change. The
 * SVG candlestick chart is mock-data only — consumers replace the `candles`
 * prop with real OHLC samples.
 */
export interface StockCandle {
  /** y open value (0–100 scale relative to candleMax) */
  open: number
  /** y close value (0–100 scale relative to candleMax) */
  close: number
  /** wick high */
  high: number
  /** wick low */
  low: number
}

export type StockTimeRange = '1d' | '1w' | '1m' | '3m' | '6m' | '1y'
export type StockChartType = 'candle' | 'line'

export interface StockChartCardProps {
  name: string
  symbol: string
  /** Small tag in the header (e.g. "ELECTRONIC"). */
  categoryTag?: string
  /** Token logo URLs — first successful one is used. */
  logoUrls?: string[]
  marketCapLabel?: string
  marketCapValue: string

  /** Pre-formatted USD price, e.g. "$235.31" */
  price: string
  /** Pre-formatted absolute change, e.g. "$8.82" */
  changeAbs: string
  /** 24h change percent — sign chooses color. */
  changePct: number

  candles: readonly StockCandle[]
  /** Optional badge label rendered top-right inside the chart (e.g. "Trades: 71"). */
  tradesLabel?: string

  timeRange: StockTimeRange
  onTimeRangeChange?: (next: StockTimeRange) => void
  chartType?: StockChartType
  onChartTypeChange?: (next: StockChartType) => void
}

const TIME_RANGES: readonly StockTimeRange[] = ['1d', '1w', '1m', '3m', '6m', '1y']

const Root = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
`

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px 16px;
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`

const Logo = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.disabled};
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const LogoFallback = styled.div`
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const HeaderTitleCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  font-variant-numeric: tabular-nums;
`

const PriceCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`

const ChartFrame = styled.div`
  position: relative;
  flex: 1;
  min-height: 0;
  margin: 0 16px;
  padding: 8px 0;
`

const ChartSvg = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
`

const TradesBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.textSubtle};
  font-family: 'Kanit', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12px;
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 24px 16px;
  position: relative;
`

const RangePill = styled.button<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  min-width: 36px;
  padding: 0 12px;
  border: 0;
  border-radius: 999px;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.tertiary : 'transparent'};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary60 ?? theme.colors.primary : theme.colors.textSubtle};
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.12s, color 0.12s;
  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.text};
  }
`

const ChartToggle = styled.button`
  position: absolute;
  right: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSubtle};
  cursor: pointer;
  &:hover { color: ${({ theme }) => theme.colors.text}; }
`

function changeColor(pct: number) {
  if (pct > 0) return 'success' as const
  if (pct < 0) return 'failure' as const
  return 'textSubtle' as const
}

function formatPct(pct: number) {
  const sign = pct > 0 ? '+' : ''
  return `${sign}${pct.toFixed(2)}%`
}

/* Render the candlestick SVG. The candles array is rescaled to fit the
 * 1000×400 viewBox; consumers don't have to think about pixel units. */
function CandleChart({ candles, color }: { candles: readonly StockCandle[]; color: string }) {
  const paths = useMemo<React.ReactNode[]>(() => {
    if (candles.length === 0) return []
    const W = 1000
    const H = 400
    const padX = 8
    const padY = 16
    const usableW = W - padX * 2
    const usableH = H - padY * 2
    const slot = usableW / candles.length
    const candleW = Math.max(2, slot * 0.55)

    let min = Infinity
    let max = -Infinity
    for (const c of candles) {
      if (c.low < min) min = c.low
      if (c.high > max) max = c.high
    }
    if (!isFinite(min) || !isFinite(max) || max === min) {
      min = 0
      max = 1
    }
    const yScale = (v: number) => padY + ((max - v) / (max - min)) * usableH

    return candles.map((c, i) => {
      const cx = padX + slot * i + slot / 2
      const isUp = c.close >= c.open
      const yOpen = yScale(c.open)
      const yClose = yScale(c.close)
      const yHigh = yScale(c.high)
      const yLow = yScale(c.low)
      const bodyTop = Math.min(yOpen, yClose)
      const bodyH = Math.max(2, Math.abs(yOpen - yClose))
      const stroke = isUp ? color : 'var(--pcs-colors-failure, #ED4B9E)'
      return (
        <g key={i}>
          <line x1={cx} x2={cx} y1={yHigh} y2={yLow} stroke={stroke} strokeWidth={1} />
          <rect
            x={cx - candleW / 2}
            y={bodyTop}
            width={candleW}
            height={bodyH}
            fill={stroke}
            rx={1}
          />
        </g>
      )
    })
  }, [candles, color])

  return (
    <ChartSvg viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden>
      {[0.25, 0.5, 0.75].map((f) => (
        <line
          key={f}
          x1={0}
          x2={1000}
          y1={f * 400}
          y2={f * 400}
          stroke="currentColor"
          strokeOpacity={0.08}
          strokeWidth={1}
        />
      ))}
      {paths}
    </ChartSvg>
  )
}

export const StockChartCard: React.FC<StockChartCardProps> = ({
  name,
  symbol,
  categoryTag,
  logoUrls,
  marketCapLabel = 'Market Cap',
  marketCapValue,
  price,
  changeAbs,
  changePct,
  candles,
  tradesLabel,
  timeRange,
  onTimeRangeChange,
  chartType = 'candle',
  onChartTypeChange,
}) => {
  const logoSrc = logoUrls?.find(Boolean)
  const fallback = symbol.slice(0, 2).toUpperCase()
  const upColor = 'var(--pcs-colors-success, #31D0AA)'

  return (
    <Root>
      <Header>
        <HeaderLeft>
          <Logo>
            {logoSrc ? <LogoImg src={logoSrc} alt="" /> : <LogoFallback>{fallback}</LogoFallback>}
          </Logo>
          <HeaderTitleCol>
            <TitleRow>
              <Heading as="h2" scale="lg" ellipsis>
                {name}
              </Heading>
              {categoryTag && (
                <Tag variant="textSubtle" scale="sm" outline>
                  {categoryTag}
                </Tag>
              )}
            </TitleRow>
            <MetaRow>
              <Text bold fontSize="14px" color="textSubtle" textTransform="uppercase">
                {symbol}
              </Text>
              <Text fontSize="14px" color="textSubtle">
                {marketCapLabel}
              </Text>
              <Text bold fontSize="14px">
                {marketCapValue}
              </Text>
            </MetaRow>
          </HeaderTitleCol>
        </HeaderLeft>
        <PriceCol>
          <Heading scale="xl">{price}</Heading>
          <Text bold fontSize="16px" color={changeColor(changePct)}>
            {changePct >= 0 ? '+' : '-'}
            {changeAbs.replace('-', '')} ({formatPct(changePct)})
          </Text>
        </PriceCol>
      </Header>

      <ChartFrame>
        {tradesLabel && <TradesBadge>{tradesLabel}</TradesBadge>}
        <CandleChart candles={candles} color={upColor} />
      </ChartFrame>

      <Controls>
        {TIME_RANGES.map((r) => (
          <RangePill
            key={r}
            type="button"
            $active={r === timeRange}
            aria-pressed={r === timeRange}
            onClick={() => onTimeRangeChange?.(r)}
          >
            {r}
          </RangePill>
        ))}
        <ChartToggle
          type="button"
          aria-label={chartType === 'candle' ? 'Switch to line chart' : 'Switch to candle chart'}
          onClick={() =>
            onChartTypeChange?.(chartType === 'candle' ? 'line' : 'candle')
          }
        >
          {chartType === 'candle' ? (
            <LineGraphIcon width="24px" height="24px" />
          ) : (
            <CandleGraphIcon width="24px" height="24px" />
          )}
        </ChartToggle>
      </Controls>
    </Root>
  )
}

export default StockChartCard
