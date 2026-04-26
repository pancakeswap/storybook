import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styled, { useTheme } from 'styled-components'
import { Flex } from '../primitives/Box'
import { Text } from '../primitives/Text'
import { ChevronDownIcon } from '../primitives/Icons'

export interface SymbolHeaderProps {
  /** Full venue symbol — used as React key + aria labels. */
  symbol: string
  /**
   * Pre-formatted pair label for the pill, e.g. "BTC - USDT". Consumer
   * chooses the base/quote split (frontend preserves USDT / USDC / USD1
   * distinction rather than collapsing to "USD").
   */
  pairLabel: string
  /**
   * Optional logo image URL. Widget falls back to a single-letter glyph
   * on missing / broken image.
   */
  logoUrl?: string
  /** Current leverage — rendered as the small pill next to the price. */
  leverage: number

  // ── Live stats (raw strings; widget formats) ──────────────────
  /** Last traded price (unformatted). */
  lastPrice?: string
  markPrice?: string
  indexPrice?: string
  /** Signed fraction funding rate (e.g. "0.0001" = 0.01%). */
  fundingRate?: string
  /** Epoch ms of the next funding payment. Widget renders HH:MM:SS to it. */
  nextFundingTime?: number
  /** Signed 24h change percent (e.g. "1.04" or "-0.52"). */
  change24h?: string
  /** Raw 24h quote volume. */
  volume24h?: string

  // ── Favorite ──────────────────────────────────────────────────
  favorited?: boolean
  onToggleFavorite?: () => void

  // ── Markets dropdown ──────────────────────────────────────────
  /**
   * Render-prop for the markets picker that pops below the pair pill.
   * Called with a `close` callback the consumer's onSelect handler
   * can fire to dismiss the dropdown after the user picks a new symbol.
   * Omit to make the pair pill non-interactive (no dropdown).
   */
  renderMarketsDropdown?: (close: () => void) => React.ReactNode

  /** Translator. */
  t?: (key: string) => string
}

const Root = styled(Flex)`
  align-items: center;
  gap: 24px;
  padding: 12px;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  font-variant-numeric: tabular-nums;
  overflow-x: auto;
  scrollbar-width: none;
  flex-shrink: 0;
  &::-webkit-scrollbar {
    display: none;
  }
`

const PairPill = styled(Flex)`
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 16px;
  padding: 7px 8px 9px;
  flex-shrink: 0;
`

const PairTrigger = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  color: inherit;
  font: inherit;
  transition: filter 0.12s;
  &:hover {
    filter: brightness(1.08);
  }
`

const DropdownPortal = styled.div`
  position: fixed;
  z-index: 1000;
  width: min(720px, calc(100vw - 32px));
`

const StarBtn = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.warning};
  cursor: pointer;
  flex-shrink: 0;
`

const CoinBadge = styled.span<{ $bg?: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: 800;
  font-size: 12px;
  flex-shrink: 0;
  background: ${({ $bg, theme }) => $bg ?? theme.colors.primary};
  overflow: hidden;
`

const CoinImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const PairName = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;
  padding: 0 8px;
  line-height: 1.5;
`

const LevPill = styled.span`
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.secondary};
  flex-shrink: 0;
`

const Price = styled.div`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`

const Stats = styled(Flex)`
  gap: 24px;
  align-items: flex-start;
  flex-wrap: nowrap;
`

const Stat = styled(Flex)`
  flex-direction: column;
  flex-shrink: 0;
`

const StatLabel = styled(Text)<{ $dashed?: boolean }>`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSubtle};
  white-space: nowrap;
  line-height: 1.5;
  ${({ $dashed, theme }) =>
    $dashed ? `border-bottom: 1px dashed ${theme.colors.cardBorder}; align-self: flex-start; cursor: help;` : ''}
`

const StatValue = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`

const FundingValue = styled(Flex)`
  align-items: baseline;
  white-space: nowrap;
`

const FundingRate = styled.span<{ $negative?: boolean }>`
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  min-width: 70px;
  color: ${({ $negative, theme }) => ($negative ? theme.colors.failure : theme.colors.success)};
`

const FundingSep = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSubtle};
  padding: 0 2px;
`

const formatPct = (v?: string, digits = 4) => {
  if (!v) return '—'
  const n = Number(v) * 100
  if (!Number.isFinite(n)) return '—'
  return `${n >= 0 ? '+' : ''}${n.toFixed(digits)}%`
}

const formatPctRaw = (v?: string, digits = 2) => {
  if (!v) return '—'
  const n = Number(v)
  if (!Number.isFinite(n)) return '—'
  return `${n >= 0 ? '+' : ''}${n.toFixed(digits)}%`
}

const formatCountdown = (nextTimeMs?: number) => {
  if (!nextTimeMs) return '—'
  const diff = Math.max(0, nextTimeMs - Date.now())
  const h = Math.floor(diff / 3_600_000)
  const m = Math.floor((diff % 3_600_000) / 60_000)
  const s = Math.floor((diff % 60_000) / 1000)
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

const formatVolume = (v?: string) => {
  if (!v) return '—'
  const n = Number(v)
  if (!Number.isFinite(n)) return '—'
  return `$${n.toLocaleString('en-US', { maximumFractionDigits: 2 })}`
}

const glyph = (pairLabel: string) => {
  const cleaned = pairLabel.split(/[- ]/)[0] ?? pairLabel
  return cleaned.slice(0, 1) || '?'
}

const StarIcon: React.FC = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
  </svg>
)

const identity = (s: string) => s

/**
 * Top-of-terminal row — pair-pill selector, last price, and live stats
 * strip (Mark / Index / Funding / 24h Change / 24h Volume). Stateless
 * apart from the markets-dropdown open state (pure view-state).
 *
 * The dropdown content is injected via `renderMarketsDropdown` so the
 * consumer's picker (hooked up to its own ticker query + navigation)
 * can drop in without the widget knowing about data sources. Portal
 * anchoring + outside-click / Escape dismissal stay here.
 */
export const SymbolHeader: React.FC<SymbolHeaderProps> = ({
  symbol,
  pairLabel,
  logoUrl,
  leverage,
  lastPrice,
  markPrice,
  indexPrice,
  fundingRate,
  nextFundingTime,
  change24h,
  volume24h,
  favorited = false,
  onToggleFavorite,
  renderMarketsDropdown,
  t = identity,
}) => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  // Anchor the portal to the trigger's bounding rect. Recompute on
  // scroll / resize so the panel tracks the pill if the page scrolls
  // behind it.
  useLayoutEffect(() => {
    if (!open || !triggerRef.current) return undefined
    const place = () => {
      const rect = triggerRef.current!.getBoundingClientRect()
      setPos({ top: rect.bottom + 8, left: rect.left })
    }
    place()
    window.addEventListener('resize', place)
    window.addEventListener('scroll', place, true)
    return () => {
      window.removeEventListener('resize', place)
      window.removeEventListener('scroll', place, true)
    }
  }, [open])

  // Outside-click and Escape close handlers.
  useEffect(() => {
    if (!open) return undefined
    const onDown = (e: MouseEvent) => {
      const target = e.target as Node
      if (triggerRef.current?.contains(target)) return
      if (panelRef.current?.contains(target)) return
      setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('mousedown', onDown)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const close = useCallback(() => setOpen(false), [])

  const fundingNegative = Number(fundingRate) < 0
  const change24hNegative = Number(change24h) < 0

  return (
    <Root aria-label={`${symbol} ticker`}>
      <PairPill>
        {onToggleFavorite && (
          <StarBtn
            onClick={(e) => {
              e.stopPropagation()
              onToggleFavorite()
            }}
            aria-label={favorited ? t('Unfavorite') : t('Favorite')}
            aria-pressed={favorited}
          >
            <StarIcon />
          </StarBtn>
        )}
        <PairTrigger
          ref={triggerRef}
          aria-haspopup="listbox"
          aria-expanded={open}
          disabled={!renderMarketsDropdown}
          onClick={() => renderMarketsDropdown && setOpen((o) => !o)}
        >
          <CoinBadge $bg={logoUrl ? 'transparent' : 'linear-gradient(180deg, #F7931A, #E8850C)'}>
            {logoUrl ? <CoinImg src={logoUrl} alt={pairLabel} /> : glyph(pairLabel)}
          </CoinBadge>
          <PairName>{pairLabel}</PairName>
          <ChevronDownIcon width="16px" color="textSubtle" />
        </PairTrigger>
      </PairPill>

      {open && pos && typeof document !== 'undefined' && renderMarketsDropdown
        ? createPortal(
            <DropdownPortal ref={panelRef} style={{ top: pos.top, left: pos.left }}>
              {renderMarketsDropdown(close)}
            </DropdownPortal>,
            document.body,
          )
        : null}

      <LevPill>{leverage}x</LevPill>

      <Price aria-label={`Last price: ${lastPrice ?? ''}`}>{lastPrice ?? '—'}</Price>

      <Stats role="list">
        <Stat role="listitem">
          <StatLabel $dashed>{t('Mark')}</StatLabel>
          <StatValue>{markPrice ?? '—'}</StatValue>
        </Stat>

        <Stat role="listitem">
          <StatLabel $dashed>{t('Index')}</StatLabel>
          <StatValue>{indexPrice ?? '—'}</StatValue>
        </Stat>

        <Stat role="listitem">
          <StatLabel $dashed>{t('Funding / Countdown')}</StatLabel>
          <FundingValue>
            <FundingRate $negative={fundingNegative}>{formatPct(fundingRate)}</FundingRate>
            <FundingSep>/</FundingSep>
            <StatValue as="span">{formatCountdown(nextFundingTime)}</StatValue>
          </FundingValue>
        </Stat>

        <Stat role="listitem">
          <StatLabel>{t('24h Change')}</StatLabel>
          <StatValue
            style={{ color: change24h ? (change24hNegative ? theme.colors.failure : theme.colors.success) : undefined }}
          >
            {formatPctRaw(change24h)}
          </StatValue>
        </Stat>

        <Stat role="listitem">
          <StatLabel>{t('24h Volume (USDT)')}</StatLabel>
          <StatValue>{formatVolume(volume24h)}</StatValue>
        </Stat>
      </Stats>
    </Root>
  )
}
