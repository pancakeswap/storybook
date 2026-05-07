import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
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
  /**
   * Mobile + tablet callback. When provided, the ticker renders a small
   * graph-icon button next to the price on screens ≤967.98px. Tapping
   * it fires this callback — typically wiring a chart bottom-sheet,
   * since the inline chart is hidden at this breakpoint to save space.
   */
  onChartOpen?: () => void
  /**
   * Optional token-icon renderer. When provided, replaces the default
   * letter chip with the consumer's element (typically the venue's CDN
   * logo). Returning null/undefined defers to the default chip so an
   * unlisted symbol still has a visual.
   */
  renderTokenIcon?: () => React.ReactNode
}

// ── Styled ────────────────────────────────────────────────

const Card = styled.div`
  display: flex;
  /* Fluid — the consumer's column owns the width. Original 1058px was
     hardcoded for the storybook canvas and made the card overflow / look
     stranded inside narrower production layouts. */
  width: 100%;
  box-sizing: border-box;
  padding: 24px;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  border-radius: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.card};
  font-variant-numeric: tabular-nums;

  @media (max-width: 967.98px) {
    padding: 16px;
    /* 12px between the price/graph cluster and the markets-dropdown
       button, per Figma 621-29050 spec. */
    gap: 12px;
  }
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
  flex-shrink: 0;

  @media (max-width: 967.98px) {
    flex: 1;
  }
`

// eslint-disable-next-line no-restricted-syntax -- brand SVG illustration + on colored bg, contrast guarantee
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

  @media (max-width: 967.98px) {
    width: 40px;
    height: 40px;
    font-size: 14px;
  }
`

/* Fixed-size slot for a consumer-supplied icon (e.g. an img from
   renderTokenIcon). Keeps the artwork from stretching when the card
   gets narrow and forces aspect-ratio preservation regardless of the
   source image dimensions. */
const TokenIconSlot = styled.span`
  display: inline-flex;
  width: 64px;
  height: 64px;
  flex: 0 0 64px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  overflow: hidden;
  & > img,
  & > svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  @media (max-width: 967.98px) {
    width: 40px;
    height: 40px;
    flex: 0 0 40px;
  }
`

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 967.98px) {
    flex: 1;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    & > :first-child {
      flex: 1;
    }
  }
`

const NameRow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

const PairDropdown = styled.span`
  display: flex;
  height: 24px;
  padding: 2px 2px 2px 8px;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  border-top: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-right: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.inputSecondary};
  border-left: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  background: ${({ theme }) => theme.colors.input};

  @media (max-width: 967.98px) {
    height: auto;
    padding: 0;
    border: 0;
    background: transparent;
  }
`

const Name = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  text-overflow: ellipsis;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;

  @media (max-width: 967.98px) {
    font-size: 20px;
    letter-spacing: -0.2px;
  }
`

const PairArrowBox = styled.span`
  display: flex;
  width: 20px;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSubtle};

  @media (max-width: 967.98px) {
    display: none;
  }
`

/* Standalone chevron button rendered to the right of the price at mobile.
   Replaces the inline chevron inside PairDropdown — see Figma 378:8075. */
const MobilePairChevron = styled.button`
  display: none;

  @media (max-width: 967.98px) {
    display: inline-flex;
    padding: 2px;
    align-items: center;
    gap: 4px;
    border-radius: 8px;
    border-top: 1px solid ${({ theme }) => theme.colors.inputSecondary};
    border-right: 1px solid ${({ theme }) => theme.colors.inputSecondary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.inputSecondary};
    border-left: 1px solid ${({ theme }) => theme.colors.inputSecondary};
    background: ${({ theme }) => theme.colors.input};
    color: ${({ theme }) => theme.colors.textSubtle};
    flex-shrink: 0;
    cursor: pointer;
  }
`

const MobileChartButton = styled.button`
  display: none;

  @media (max-width: 967.98px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.colors.textSubtle};
    cursor: pointer;
    border-radius: 6px;
    flex-shrink: 0;

    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`

const ChartGlyph: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3 21V3h2v16h16v2H3zm4-4V9h3v8H7zm5 0V5h3v12h-3zm5 0v-6h3v6h-3z" />
  </svg>
)

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

  @media (max-width: 967.98px) {
    font-family: Kanit;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    color: ${({ theme }) => theme.colors.text};
  }
`

const Pnl = styled.span<{ $positive: boolean }>`
  display: flex;
  padding: 0 6px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 999px;
  background: ${({ $positive, theme }) => ($positive ? theme.colors.positive10 : theme.colors.negativeSubtle)};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 967.98px) {
    display: none;
  }
`

const PnlTriangle = styled.span<{ $positive: boolean }>`
  display: inline-flex;
  align-items: center;
  color: ${({ $positive, theme }) => ($positive ? theme.colors.positive60 : theme.colors.failure)};
`

const StatsWrap = styled.div`
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  min-width: 0;
  overflow: hidden;
  position: relative;
  justify-content: flex-start;
`

const Stats = styled(Flex)`
  align-items: center;
  gap: 24px;
  height: 56px;
  flex-shrink: 0;
`

const StatsChevron = styled.span<{ $visible: boolean }>`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  width: 36px;
  height: 56px;
  align-items: center;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.textSubtle};
  background: linear-gradient(90deg, transparent 0%, ${({ theme }) => theme.colors.card} 40%);
  padding-right: 4px;
  pointer-events: none;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.15s;
`

const Stat = styled.div<{ $hideOnLaptop?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  @media (min-width: 968px) and (max-width: 1199.98px) {
    display: ${({ $hideOnLaptop }) => ($hideOnLaptop ? 'none' : 'flex')};
  }

  /* Tablet (576-967.98) now mirrors the mobile compact layout — stats
     are hidden along with the rest of the inline chart, replaced by the
     graph icon + chart bottom-sheet. */
  @media (max-width: 967.98px) {
    display: none;
  }
`

const StatLabel = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSubtle};

  @media (min-width: 968px) and (max-width: 1199.98px) {
    color: ${({ theme }) => theme.colors.textSubtle};
    font-feature-settings: 'liga' off;
    font-family: Kanit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
`

const StatValue = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: 968px) and (max-width: 1199.98px) {
    color: ${({ theme }) => theme.colors.text};
    font-feature-settings: 'liga' off;
    font-family: Kanit;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`

const TriangleUp: React.FC = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d="M1.90301 9.83956C1.65374 9.83956 1.47213 9.73331 1.35818 9.52081C1.24423 9.30831 1.25374 9.0988 1.3867 8.89228L5.49051 2.73574C5.61516 2.5553 5.78491 2.46509 5.99977 2.46509C6.21462 2.46509 6.38437 2.5553 6.50901 2.73574L10.6128 8.89228C10.7458 9.0988 10.7553 9.30831 10.6414 9.52081C10.5274 9.73331 10.3458 9.83956 10.0965 9.83956H1.90301Z"
      fill="currentColor"
    />
  </svg>
)
const TriangleDown: React.FC = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d="M1.90301 2.16044C1.65374 2.16044 1.47213 2.26669 1.35818 2.47919C1.24423 2.69169 1.25374 2.9012 1.3867 3.10772L5.49051 9.26426C5.61516 9.4447 5.78491 9.53491 5.99977 9.53491C6.21462 9.53491 6.38437 9.4447 6.50901 9.26426L10.6128 3.10772C10.7458 2.9012 10.7553 2.69169 10.6414 2.47919C10.5274 2.26669 10.3458 2.16044 10.0965 2.16044H1.90301Z"
      fill="currentColor"
    />
  </svg>
)
const PairArrowGlyph: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M7.25878 9.75835L9.41712 11.9167C9.74212 12.2417 10.2671 12.2417 10.5921 11.9167L12.7504 9.75835C13.2754 9.23335 12.9004 8.33335 12.1588 8.33335H7.84212C7.10045 8.33335 6.73378 9.23335 7.25878 9.75835Z"
      fill="currentColor"
    />
  </svg>
)

/* The widget no longer renders its own markets dropdown — consumers
 * are expected to wire `onSymbolClick` to their real markets picker
 * (in pancake-frontend that's the centered MarketsDropdown portal
 * inside SimpleBetPanel). The earlier built-in dropdown showed
 * hardcoded mock data (BTC $590.75 / CAKE / ETH) and stacked on top
 * of the consumer's real one — PAN-11847. */

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
  onChartOpen,
  renderTokenIcon,
}) => {
  const positive = pricePnlPct >= 0
  const consumerIcon = renderTokenIcon?.()
  const wrapRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [isOverflow, setIsOverflow] = useState(false)
  useEffect(() => {
    const wrap = wrapRef.current
    const stats = statsRef.current
    if (!wrap || !stats) return
    const check = () => setIsOverflow(stats.scrollWidth > wrap.clientWidth + 1)
    check()
    const ro = new ResizeObserver(check)
    ro.observe(wrap)
    ro.observe(stats)
    return () => ro.disconnect()
  }, [])
  return (
    <Card>
      <Left
        type="button"
        onClick={() => onSymbolClick?.()}
        aria-label={`Change market · ${pair}`}
      >
        {consumerIcon != null ? <TokenIconSlot>{consumerIcon}</TokenIconSlot> : <TokenChip>{baseAsset}</TokenChip>}
        <Meta>
          <NameRow>
            <PairDropdown>
              <Name>{pair}</Name>
              <PairArrowBox aria-hidden>
                <PairArrowGlyph />
              </PairArrowBox>
            </PairDropdown>
          </NameRow>
          <PriceRow>
            <Price>{price}</Price>
            <Pnl $positive={positive}>
              <PnlTriangle $positive={positive}>
                {positive ? <TriangleUp /> : <TriangleDown />}
              </PnlTriangle>
              {pricePnlPct.toFixed(2)}%
            </Pnl>
          </PriceRow>
        </Meta>
      </Left>

      {onChartOpen && (
        <MobileChartButton
          type="button"
          aria-label="Open chart"
          onClick={(e) => {
            e.stopPropagation()
            onChartOpen()
          }}
        >
          <ChartGlyph />
        </MobileChartButton>
      )}

      {/* Markets-dropdown trigger pinned to the right of the mobile
          card. The widget no longer has its own picker — consumers wire
          a real markets dropdown via onSymbolClick. */}
      <MobilePairChevron
        type="button"
        aria-label={`Change market · ${pair}`}
        onClick={() => onSymbolClick?.()}
      >
        <PairArrowGlyph />
      </MobilePairChevron>

      <StatsWrap ref={wrapRef}>
        <Stats ref={statsRef}>
          <Stat>
            <StatLabel>24h Volume</StatLabel>
            <StatValue>{volume24h}</StatValue>
          </Stat>
          <Stat $hideOnLaptop>
            <StatLabel>Open Interest</StatLabel>
            <StatValue>{openInterest}</StatValue>
          </Stat>
          <Stat $hideOnLaptop>
            <StatLabel>Funding Rate</StatLabel>
            <StatValue>{fundingRate}</StatValue>
          </Stat>
          <Stat $hideOnLaptop>
            <StatLabel>Next Funding</StatLabel>
            <StatValue>{nextFunding}</StatValue>
          </Stat>
        </Stats>
        <StatsChevron $visible={isOverflow} aria-hidden>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7.05 14.95 12 10 7.05 5.05 8.46 3.64 14.83 10l-6.37 6.36z" />
          </svg>
        </StatsChevron>
      </StatsWrap>
    </Card>
  )
}
