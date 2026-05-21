import React from 'react'
import styled from 'styled-components'
import { Card } from '../primitives/Card'
import { Text } from '../primitives/Text'
import { Heading } from '../primitives/Heading'
import { Tag } from '../primitives/Tag'
import { ChevronRightIcon } from '../primitives/Icons'

/**
 * Right-rail stock info card used on the Stock page (Figma 7-11516). Shows
 * the active stock's identity, TVL, and a small details list (market price,
 * floor price, holders). Renders below the swap form.
 */
export interface StockInfoCardProps {
  symbol: string
  /** Optional tag rendered next to the symbol (e.g. "ELECTRONIC"). */
  categoryTag?: string
  logoUrls?: string[]
  tvlLabel?: string
  tvlValue: string

  marketPrice: string
  /** Pre-formatted change tag for market price (e.g. "+3.69% (+$8.82)"). */
  marketPriceChangeLabel?: string
  marketPriceChangePct?: number

  floorPriceLabel?: string
  floorPrice: string

  holdersLabel?: string
  holdersCount: string
  /** Optional secondary label (e.g. "Address"). */
  holdersTagLabel?: string

  onDetails?: () => void
}

const Root = styled(Card)`
  & > div {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`

const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const Logo = styled.div`
  position: relative;
  width: 42px;
  height: 42px;
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

const TitleCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`

const SymbolRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`

const TvlRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-variant-numeric: tabular-nums;
`

const DetailsBtn = styled.button`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 32px;
  padding: 0 8px 0 12px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary60 ?? theme.colors.primary};
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  &:hover { opacity: 0.65; }
`

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  height: 24px;
  font-variant-numeric: tabular-nums;
`

const DetailLabel = styled.span`
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSubtle};
  border-bottom: 1px dashed ${({ theme }) => theme.colors.textSubtle};
  cursor: help;
`

const DetailValue = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

function changeVariant(pct?: number) {
  if (pct === undefined) return 'textSubtle' as const
  if (pct > 0) return 'successLowContrast' as const
  if (pct < 0) return 'failureLowContrast' as const
  return 'textSubtle' as const
}

export const StockInfoCard: React.FC<StockInfoCardProps> = ({
  symbol,
  categoryTag,
  logoUrls,
  tvlLabel = 'TVL',
  tvlValue,
  marketPrice,
  marketPriceChangeLabel,
  marketPriceChangePct,
  floorPriceLabel = 'Floor Price',
  floorPrice,
  holdersLabel = 'Holders',
  holdersCount,
  holdersTagLabel = 'Address',
  onDetails,
}) => {
  const logoSrc = logoUrls?.find(Boolean)
  const fallback = symbol.slice(0, 2).toUpperCase()

  return (
    <Root>
      <TopRow>
        <Logo>
          {logoSrc ? <LogoImg src={logoSrc} alt="" /> : <LogoFallback>{fallback}</LogoFallback>}
        </Logo>
        <TitleCol>
          <SymbolRow>
            <Heading scale="lg">{symbol}</Heading>
            {categoryTag && (
              <Tag variant="textSubtle" scale="sm" outline>
                {categoryTag}
              </Tag>
            )}
          </SymbolRow>
          <TvlRow>
            <Text fontSize="14px" color="textSubtle">
              {tvlLabel}
            </Text>
            <Text bold fontSize="14px">
              {tvlValue}
            </Text>
          </TvlRow>
        </TitleCol>
        <DetailsBtn type="button" onClick={onDetails}>
          Details
          <ChevronRightIcon width="20px" height="20px" />
        </DetailsBtn>
      </TopRow>

      <DetailRow>
        <DetailLabel>Market Price</DetailLabel>
        <DetailValue>
          <Text bold fontSize="14px">
            {marketPrice}
          </Text>
          {marketPriceChangeLabel && (
            <Tag variant={changeVariant(marketPriceChangePct)} scale="sm">
              {marketPriceChangeLabel}
            </Tag>
          )}
        </DetailValue>
      </DetailRow>

      <DetailRow>
        <DetailLabel>{floorPriceLabel}</DetailLabel>
        <Text bold fontSize="14px">
          {floorPrice}
        </Text>
      </DetailRow>

      <DetailRow>
        <DetailLabel>{holdersLabel}</DetailLabel>
        <DetailValue>
          <Text bold fontSize="14px">
            {holdersCount}
          </Text>
          <Text fontSize="14px" color="textSubtle">
            {holdersTagLabel}
          </Text>
        </DetailValue>
      </DetailRow>
    </Root>
  )
}

export default StockInfoCard
