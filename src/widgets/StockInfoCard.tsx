import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { Card } from '../primitives/Card'
import { Text } from '../primitives/Text'
import { Heading } from '../primitives/Heading'

/**
 * Right-rail stock info card shown below the swap form on the Stock page
 * (Figma 114-9608). Shows the active stock's identity, TVL, on-chain vs
 * real-world price comparison, and holder count.
 */
export interface StockInfoCardProps {
  /** Asset ticker, e.g. "NVDAX". */
  symbol: string
  /** Source-list tag rendered next to the symbol ("xStocks", "Ondo"). */
  source?: string
  logoUrls?: string[]

  tvlLabel?: string
  tvlValue: string
  /** Real-world market cap shown when the user hovers the TVL row. */
  marketCapLabel?: string
  marketCapValue?: string

  /** On-chain price (the value plotted on the chart / shown in the header). */
  chainPrice: string
  /** Real-world stock price (= the positions table's Index Price). */
  markPrice: string

  holdersLabel?: string
  holdersCount: string
  /** Optional secondary label rendered after the holder count (e.g. "Address"). */
  holdersTagLabel?: string
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

// Cross-fades between "TVL $X" (default) and "Real asset marketcap $Y".
// Driven by JS state so the swap works on both mouse hover and touch tap.
// Both children sit in the same grid cell so the container's height is
// driven by the wider of the two — prevents layout shift mid-swap.
const TvlRow = styled.div`
  display: inline-grid;
  cursor: default;
  & > * { grid-area: 1 / 1; }
`

const TvlPair = styled.div<{ $hover?: boolean; $shown?: boolean }>`
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  transition: opacity 0.18s ease;
  /* $hover labels the "swapped" pair; visible when $shown matches. */
  opacity: ${({ $hover, $shown }) => ((!!$hover) === (!!$shown) ? 1 : 0)};
`

const SourcePill = styled.span<{ $tone: 'ondo' | 'xstocks' | 'default' }>`
  display: inline-flex;
  align-items: center;
  padding: 1.5px 6px;
  border-radius: 999px;
  font-family: 'Kanit', sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12px;
  background: ${({ $tone, theme }) =>
    $tone === 'ondo'
      ? 'rgba(118, 69, 217, 0.10)'
      : $tone === 'xstocks'
        ? 'rgba(2, 145, 157, 0.10)'
        : theme.colors.tertiary};
  color: ${({ $tone, theme }) =>
    $tone === 'ondo'
      ? theme.colors.secondary
      : $tone === 'xstocks'
        ? theme.colors.primary60 ?? theme.colors.primary
        : theme.colors.textSubtle};
  border: 2px solid
    ${({ $tone, theme }) =>
      $tone === 'ondo'
        ? 'rgba(118, 69, 217, 0.20)'
        : $tone === 'xstocks'
          ? 'rgba(2, 145, 157, 0.20)'
          : theme.colors.tertiary};
`

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  height: 24px;
  font-variant-numeric: tabular-nums;
`

const DetailLabelText = styled.span`
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSubtle};
  border-bottom: 1px dashed ${({ theme }) => theme.colors.textSubtle};
  cursor: help;
`

// Tooltip is portaled to document.body so the Card's `overflow: hidden`
// (and any other ancestor clipping) doesn't truncate it. Positioned with
// the trigger's getBoundingClientRect, which is viewport-relative, so
// `position: fixed` + inline left/top puts the bubble exactly under the
// label even when the page is scrolled.
const Tooltip = styled.span`
  position: fixed;
  background: #ffffff;
  color: #08060b;
  font-family: 'Kanit', sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  padding: 10px 14px;
  border-radius: 14px;
  width: max-content;
  max-width: 240px;
  text-align: center;
  pointer-events: none;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  z-index: 9999;
  transform: translateX(-50%);

  /* Pointer at the top center, pointing up to the trigger label. */
  &::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-style: solid;
    border-width: 0 7px 8px;
    border-color: transparent transparent #ffffff;
  }
`

const DetailLabel: React.FC<{ children: React.ReactNode; hint?: string }> = ({
  children,
  hint,
}) => {
  const triggerRef = useRef<HTMLSpanElement>(null)
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)

  const show = () => {
    const el = triggerRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    setPos({ x: r.left + r.width / 2, y: r.bottom + 10 })
  }
  const hide = () => setPos(null)
  const toggle = () => (pos ? hide() : show())

  // Touch: tap anywhere outside the trigger to dismiss the tooltip.
  useEffect(() => {
    if (!pos) return
    const onDocDown = (e: PointerEvent) => {
      if (!triggerRef.current?.contains(e.target as Node)) hide()
    }
    document.addEventListener('pointerdown', onDocDown)
    return () => document.removeEventListener('pointerdown', onDocDown)
  }, [pos])

  return (
    <>
      <DetailLabelText
        ref={triggerRef}
        onPointerEnter={(e) => e.pointerType === 'mouse' && show()}
        onPointerLeave={(e) => e.pointerType === 'mouse' && hide()}
        onClick={toggle}
      >
        {children}
      </DetailLabelText>
      {hint && pos && typeof document !== 'undefined'
        ? createPortal(
            <Tooltip role="tooltip" style={{ left: pos.x, top: pos.y }}>
              {hint}
            </Tooltip>,
            document.body,
          )
        : null}
    </>
  )
}

const DetailValue = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

// "Discount " label inside the pill — hidden at narrow viewports so the
// pill collapses to just the percentage (e.g. "-0.31%") and fits the
// tighter 800–967 swap rail.
const DiscountLabel = styled.span`
  @media (min-width: 800px) and (max-width: 967px) {
    display: none;
  }
`

const DiscountPill = styled.span<{ $sign: 1 | -1 | 0 }>`
  display: inline-flex;
  align-items: center;
  padding: 0 12px;
  height: 26px;
  border-radius: 999px;
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  font-weight: 600;
  background: ${({ $sign }) =>
    $sign < 0
      ? 'rgba(49, 208, 170, 0.10)'
      : $sign > 0
        ? 'rgba(237, 75, 158, 0.10)'
        : 'transparent'};
  color: ${({ $sign, theme }) =>
    $sign < 0
      ? theme.colors.success ?? '#31D0AA'
      : $sign > 0
        ? theme.colors.failure ?? '#ED4B9E'
        : theme.colors.textSubtle};
  border: 1px solid
    ${({ $sign, theme }) =>
      $sign < 0
        ? theme.colors.success ?? '#31D0AA'
        : $sign > 0
          ? theme.colors.failure ?? '#ED4B9E'
          : theme.colors.cardBorder};
  font-variant-numeric: tabular-nums;
`

function sourceTone(s?: string): 'ondo' | 'xstocks' | 'default' {
  const v = (s ?? '').toLowerCase()
  if (v.includes('ondo')) return 'ondo'
  if (v.includes('xstock')) return 'xstocks'
  return 'default'
}

function parseAmount(s: string | undefined): number {
  if (!s) return 0
  const m = s.match(/(-?)\$?([\d,]+\.?\d*)/)
  if (!m) return 0
  const sign = m[1] === '-' ? -1 : 1
  return sign * parseFloat(m[2].replace(/,/g, ''))
}

export const StockInfoCard: React.FC<StockInfoCardProps> = ({
  symbol,
  source,
  logoUrls,
  tvlLabel = 'TVL',
  tvlValue,
  marketCapLabel = 'Real asset marketcap',
  marketCapValue,
  chainPrice,
  markPrice,
  holdersLabel = 'Holders',
  holdersCount,
  holdersTagLabel = 'Address',
}) => {
  const logoSrc = logoUrls?.find(Boolean)
  const [tvlSwapped, setTvlSwapped] = useState(false)
  const fallback = symbol.slice(0, 2).toUpperCase()

  const chainNum = parseAmount(chainPrice)
  const markNum = parseAmount(markPrice)
  // (chain - mark) / mark — negative means buying on-chain is cheaper than the
  // real market (good for the buyer); positive means a premium.
  const discountPct = markNum === 0 ? 0 : ((chainNum - markNum) / markNum) * 100
  const discountSign: 1 | -1 | 0 = discountPct < 0 ? -1 : discountPct > 0 ? 1 : 0

  return (
    <Root>
      <TopRow>
        <Logo>
          {logoSrc ? <LogoImg src={logoSrc} alt="" /> : <LogoFallback>{fallback}</LogoFallback>}
        </Logo>
        <TitleCol>
          <SymbolRow>
            <Heading scale="lg">{symbol}</Heading>
            {source && <SourcePill $tone={sourceTone(source)}>{source}</SourcePill>}
          </SymbolRow>
          <TvlRow
            onPointerEnter={(e) => e.pointerType === 'mouse' && setTvlSwapped(true)}
            onPointerLeave={(e) => e.pointerType === 'mouse' && setTvlSwapped(false)}
            onClick={() => setTvlSwapped((s) => !s)}
          >
            <TvlPair $shown={tvlSwapped}>
              <Text fontSize="14px" color="textSubtle">
                {tvlLabel}
              </Text>
              <Text bold fontSize="14px">
                {tvlValue}
              </Text>
            </TvlPair>
            {marketCapValue && (
              <TvlPair $hover $shown={tvlSwapped}>
                <Text fontSize="14px" color="textSubtle">
                  {marketCapLabel}
                </Text>
                <Text bold fontSize="14px">
                  {marketCapValue}
                </Text>
              </TvlPair>
            )}
          </TvlRow>
        </TitleCol>
      </TopRow>

      <DetailRow>
        <DetailLabel hint="On-chain price plotted on the chart above.">
          Chain Price
        </DetailLabel>
        <DetailValue>
          <Text bold fontSize="14px">
            {chainPrice}
          </Text>
          <DiscountPill $sign={discountSign}>
            <DiscountLabel>Discount </DiscountLabel>
            {discountPct > 0 ? '+' : ''}
            {discountPct.toFixed(2)}%
          </DiscountPill>
        </DetailValue>
      </DetailRow>

      <DetailRow>
        <DetailLabel hint="Real-world stock price from off-chain markets.">
          Mark Price
        </DetailLabel>
        <Text bold fontSize="14px">
          {markPrice}
        </Text>
      </DetailRow>

      <DetailRow>
        <DetailLabel hint="Unique wallet addresses holding this asset on-chain.">
          {holdersLabel}
        </DetailLabel>
        <DetailValue>
          <Text bold fontSize="14px">
            {holdersCount}
          </Text>
          <Text fontSize="14px" color="primary">
            {holdersTagLabel}
          </Text>
        </DetailValue>
      </DetailRow>
    </Root>
  )
}

export default StockInfoCard
