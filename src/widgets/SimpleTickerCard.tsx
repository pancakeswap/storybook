import React from 'react'
import styled from 'styled-components'
import { Flex } from '../primitives/Box'

/**
 * Simple-mode top-of-page ticker. Pure presentation — consumer passes
 * pre-formatted strings. Visual ports the `.sp-ticker-card` /
 * `.sp-ticker-stats` rules from the original `SimplePerpsPage.css`.
 */
export interface SimpleTickerCardProps {
  baseAsset: string
  pair: string
  price: string
  pricePnlPct: number
  volume24h: string
  openInterest: string
  fundingRate: string
  nextFunding: string
  onSymbolClick?: () => void
}

// ── Styled ────────────────────────────────────────────────

const Card = styled.div`
  display: flex;
  width: 1058px;
  padding: 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.card};
  font-variant-numeric: tabular-nums;
`

const Left = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
`

const TokenChip = styled.span`
  width: 64px;
  height: 64px;
  border-radius: 999px;
  background: #f7931a;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  flex-shrink: 0;
`

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const NameRow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

const Name = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

const Tag = styled.span`
  display: inline-flex;
  padding: 2px 8px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.textSubtle};
  color: ${({ theme }) => theme.colors.invertedContrast};
  font-size: 12px;
  letter-spacing: 0.12px;
`

const PriceRow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

const Price = styled.span`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.32px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.text};
`

const Pnl = styled.span<{ $positive: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 0 6px;
  border-radius: 999px;
  background: ${({ theme, $positive }) =>
    $positive
      ? `color-mix(in srgb, ${theme.colors.success} 18%, transparent)`
      : `color-mix(in srgb, ${theme.colors.failure} 18%, transparent)`};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`

const Stats = styled(Flex)`
  align-items: center;
  gap: 24px;
  height: 56px;
`

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StatLabel = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const StatValue = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

const TriangleUp: React.FC = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
    <path d="M6 2l5 8H1z" />
  </svg>
)
const TriangleDown: React.FC = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
    <path d="M6 10L1 2h10z" />
  </svg>
)

export const SimpleTickerCard: React.FC<SimpleTickerCardProps> = ({
  baseAsset,
  pair,
  price,
  pricePnlPct,
  volume24h,
  openInterest,
  fundingRate,
  nextFunding,
  onSymbolClick,
}) => {
  const positive = pricePnlPct >= 0
  return (
    <Card>
      <Left
        type="button"
        onClick={onSymbolClick}
        disabled={!onSymbolClick}
        aria-label={`Change market · ${pair}`}
      >
        <TokenChip>{baseAsset}</TokenChip>
        <Meta>
          <NameRow>
            <Name>{pair}</Name>
            <Tag>Perp</Tag>
          </NameRow>
          <PriceRow>
            <Price>{price}</Price>
            <Pnl $positive={positive}>
              {positive ? <TriangleUp /> : <TriangleDown />}
              {pricePnlPct.toFixed(2)}%
            </Pnl>
          </PriceRow>
        </Meta>
      </Left>

      <Stats>
        <Stat>
          <StatLabel>24h Volume</StatLabel>
          <StatValue>{volume24h}</StatValue>
        </Stat>
        <Stat>
          <StatLabel>Open Interest</StatLabel>
          <StatValue>{openInterest}</StatValue>
        </Stat>
        <Stat>
          <StatLabel>Funding Rate</StatLabel>
          <StatValue>{fundingRate}</StatValue>
        </Stat>
        <Stat>
          <StatLabel>Next Funding</StatLabel>
          <StatValue>{nextFunding}</StatValue>
        </Stat>
      </Stats>
    </Card>
  )
}
