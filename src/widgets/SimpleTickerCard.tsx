import React, { useEffect, useRef, useState } from 'react'
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
`

/* Chevron paired with the pair name to advertise the symbol-picker
   action. Without this, users don't realise the entire card is the
   click target for "switch market". */
const Chevron = styled.span`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSubtle};
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
`

const PairArrowBox = styled.span`
  display: flex;
  width: 20px;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSubtle};
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
  display: flex;
  padding: 0 6px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 999px;
  background: ${({ $positive }) => ($positive ? '#EAFBF7' : '#FFF0F9')};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`

const PnlTriangle = styled.span<{ $positive: boolean }>`
  display: inline-flex;
  align-items: center;
  color: ${({ $positive }) => ($positive ? '#129E7D' : '#ED4B9E')};
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

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
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
const ChevronDownGlyph: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
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

/* ── Markets dropdown popover ──────────────────────────────────── */

const MarketsOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(40, 13, 95, 0.60);
  z-index: 1000;
`

const MarketsCard = styled.div`
  display: flex;
  width: 697px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.card};
  box-shadow:
    0 1px 2px 0 rgba(0, 0, 0, 0.08),
    0 4px 8px 0 rgba(0, 0, 0, 0.16);
  padding: 16px;
  gap: 16px;
`

const MarketsTabsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`

const MarketsTab = styled.button<{ $active?: boolean }>`
  border: 0;
  background: transparent;
  padding: 4px 0;
  font-family: Kanit;
  font-size: 16px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  color: ${({ $active, theme }) => ($active ? theme.colors.secondary : theme.colors.textSubtle)};
  cursor: pointer;
  &:hover { color: ${({ theme }) => theme.colors.text}; }
`

const MarketsSearchField = styled.label`
  display: flex;
  padding: 7px 8px 9px 16px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-right: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.inputSecondary};
  border-left: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.textSubtle};
`

const MarketsSearchInput = styled.input`
  flex: 1;
  border: 0;
  background: transparent;
  outline: none;
  font-family: Kanit;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  &::placeholder { color: ${({ theme }) => theme.colors.textSubtle}; }
`

const MarketsTable = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr 1fr 1fr 1fr;
  align-items: center;
  align-self: stretch;
  row-gap: 4px;
`

const MarketHeader = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 12px 12px;
  font-family: Kanit;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  &:nth-child(1) { padding-left: 8px; padding-right: 0; }
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) { justify-content: flex-end; }
`

const MarketRow = styled.button`
  display: contents;
  border: 0;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
`

const MarketCell = styled.div`
  padding: 12px 12px;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
  ${MarketRow}:hover & { background: ${({ theme }) => theme.colors.cardSecondary}; }
`

const MarketStarCell = styled(MarketCell)`
  padding-left: 8px;
  padding-right: 0;
  color: #F0B90B;
`

const MarketTokenCell = styled(MarketCell)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
`

const MarketTokenIcon = styled.span<{ $color: string }>`
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: ${({ $color }) => $color};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
`

const MarketRightCell = styled(MarketCell)`
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
`

const MarketChangePill = styled.span<{ $up: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  color: ${({ theme, $up }) => ($up ? theme.colors.success : theme.colors.failure)};
  font-weight: 600;
`

interface MarketAsset {
  symbol: string
  lastPrice: string
  change: number
  volume: string
  color: string
  starred?: boolean
}

const MOCK_MARKETS: MarketAsset[] = [
  { symbol: 'BTC',  lastPrice: '$590.75',   change: -1.2, volume: '0.542 BNB',  color: '#F0B90B', starred: true },
  { symbol: 'CAKE', lastPrice: '$1.46',     change:  0.8, volume: '144.11 CAKE', color: '#23CAD5', starred: true },
  { symbol: 'ETH',  lastPrice: '$2,181.25', change: -0.6, volume: '0.206 ETH',  color: '#627EEA', starred: true },
]

const MarketsDropdown: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null
  return (
    <MarketsOverlay onClick={onClose}>
      <MarketsCard onClick={(e) => e.stopPropagation()}>
        <MarketsTabsRow>
          <MarketsTab type="button" $active>Favorites</MarketsTab>
          <MarketsTab type="button">All markets</MarketsTab>
        </MarketsTabsRow>
        <MarketsSearchField>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          <MarketsSearchInput type="text" placeholder="All tokens" />
        </MarketsSearchField>
        <MarketsTable role="table">
          <MarketHeader>SYMBOLS</MarketHeader>
          <MarketHeader />
          <MarketHeader>LAST PRICE</MarketHeader>
          <MarketHeader>1D CHANGE</MarketHeader>
          <MarketHeader>1D VOLUME (USDT)</MarketHeader>
          {MOCK_MARKETS.map((m) => (
            <MarketRow key={m.symbol} type="button">
              <MarketStarCell>★</MarketStarCell>
              <MarketTokenCell>
                <MarketTokenIcon $color={m.color}>{m.symbol.slice(0, 1)}</MarketTokenIcon>
                <span>{m.symbol}</span>
              </MarketTokenCell>
              <MarketRightCell>{m.lastPrice}</MarketRightCell>
              <MarketRightCell>
                <MarketChangePill $up={m.change >= 0}>
                  {m.change >= 0 ? '▲' : '▼'} {Math.abs(m.change).toFixed(1)}%
                </MarketChangePill>
              </MarketRightCell>
              <MarketRightCell>{m.volume}</MarketRightCell>
            </MarketRow>
          ))}
        </MarketsTable>
      </MarketsCard>
    </MarketsOverlay>
  )
}

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
  renderTokenIcon,
}) => {
  const positive = pricePnlPct >= 0
  const consumerIcon = renderTokenIcon?.()
  const wrapRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [isOverflow, setIsOverflow] = useState(false)
  const [marketsOpen, setMarketsOpen] = useState(false)
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
        onClick={() => {
          onSymbolClick?.()
          setMarketsOpen(true)
        }}
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

      <StatsWrap ref={wrapRef}>
        <Stats ref={statsRef}>
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
        <StatsChevron $visible={isOverflow} aria-hidden>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7.05 14.95 12 10 7.05 5.05 8.46 3.64 14.83 10l-6.37 6.36z" />
          </svg>
        </StatsChevron>
      </StatsWrap>
      <MarketsDropdown isOpen={marketsOpen} onClose={() => setMarketsOpen(false)} />
    </Card>
  )
}
