import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import '../ui/perps.css'
import './TickerBar.css'
import { MarketsDropdown } from './MarketsDropdown'
import type { MarketRow } from './MarketsDropdown'

/* ── Icon helpers ──────────────────────────────────────────── */
function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
    </svg>
  )
}

function CaretDownIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 10l5 5 5-5z" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M10 6l6 6-6 6V6z" />
    </svg>
  )
}

/* ── Types ─────────────────────────────────────────────────── */
export interface TickerBarProps {
  /** Display label for the trading pair, e.g. "BNB - USD" */
  symbol?: string
  /** Short glyph shown inside the coin badge, e.g. "B" */
  coinGlyph?: string
  /** CSS background for the coin badge gradient */
  coinColor?: string
  /** Last trade price */
  price?: string
  /** Mark price */
  mark?: string
  /** Index price */
  index?: string
  /** Funding rate, e.g. "0.0032%" */
  fundingRate?: string
  /** Funding countdown, e.g. "00:35:31" */
  fundingCountdown?: string
  /** 24 h change string, e.g. "+0.73%" or "-1.20%" */
  change24h?: string
  /** Determines value colour: 'up' → green, 'down' → red */
  change24hDirection?: 'up' | 'down'
  /** 24 h volume with currency prefix, e.g. "$868,624,210.84" */
  volume24h?: string
  /** Fired when the star is clicked */
  onToggleFavorite?: () => void
  /** Fired when a market is selected from the dropdown. */
  onSelectPair?: (market: MarketRow) => void
}

/* ── Component ─────────────────────────────────────────────── */
export function TickerBar({
  symbol = 'BTC - USD',
  coinGlyph = '\u20BF',
  coinColor = 'linear-gradient(180deg, #F7931A, #E8850C)',
  price = '75,500.8',
  mark = '75,497.0',
  index = '75,497.5',
  fundingRate = '0.0032%',
  fundingCountdown = '00:35:31',
  change24h = '+0.73%',
  change24hDirection = 'up',
  volume24h = '$868,624,210.84',
  onToggleFavorite,
  onSelectPair,
}: TickerBarProps) {
  const [marketsOpen, setMarketsOpen] = useState(false)
  const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number } | null>(null)
  const pairWrapRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Position the dropdown below the pair pill whenever it opens / window
  // resizes / the page scrolls. The dropdown is rendered via a portal to
  // document.body to avoid being clipped by .tb-root's overflow.
  useLayoutEffect(() => {
    if (!marketsOpen || !pairWrapRef.current) return
    const place = () => {
      const r = pairWrapRef.current!.getBoundingClientRect()
      setDropdownPos({ top: r.bottom + 8, left: r.left })
    }
    place()
    window.addEventListener('resize', place)
    window.addEventListener('scroll', place, true)
    return () => {
      window.removeEventListener('resize', place)
      window.removeEventListener('scroll', place, true)
    }
  }, [marketsOpen])

  // Close the dropdown when clicking outside the pair pill / dropdown
  useEffect(() => {
    if (!marketsOpen) return
    const handler = (e: MouseEvent) => {
      const target = e.target as Node
      const inTrigger = pairWrapRef.current?.contains(target)
      const inPanel   = dropdownRef.current?.contains(target)
      if (!inTrigger && !inPanel) setMarketsOpen(false)
    }
    window.addEventListener('mousedown', handler)
    return () => window.removeEventListener('mousedown', handler)
  }, [marketsOpen])

  // Close on Escape
  useEffect(() => {
    if (!marketsOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setMarketsOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [marketsOpen])

  const handleSelectMarket = (market: MarketRow) => {
    setMarketsOpen(false)
    onSelectPair?.(market)
  }

  return (
    <div className="perps-root tb-root" role="region" aria-label="Market ticker">

      {/* ── Pair selector pill ─────────────────────────────── */}
      <div className="tb-pair-pill" ref={pairWrapRef}>
        <button
          type="button"
          className="tb-star"
          aria-label="Toggle favorite"
          onClick={onToggleFavorite}
        >
          <StarIcon />
        </button>

        <button
          type="button"
          className="tb-pair-select"
          aria-haspopup="listbox"
          aria-expanded={marketsOpen}
          aria-label={`Select pair, current: ${symbol}`}
          onClick={() => setMarketsOpen((o) => !o)}
        >
          <span className="tb-coin" aria-hidden="true" style={{ background: coinColor }}>
            {coinGlyph}
          </span>
          <span className="tb-pair-name">{symbol}</span>
          <span className="tb-caret"><CaretDownIcon /></span>
        </button>

        {marketsOpen && dropdownPos && typeof document !== 'undefined' &&
          createPortal(
            <div
              ref={dropdownRef}
              className="tb-markets-dropdown"
              style={{ top: dropdownPos.top, left: dropdownPos.left }}
            >
              <MarketsDropdown onSelect={handleSelectMarket} />
            </div>,
            document.body,
          )
        }
      </div>

      {/* ── Last price ─────────────────────────────────────── */}
      <div className="tb-price" aria-label={`Last price: ${price}`}>{price}</div>

      {/* ── Stats ──────────────────────────────────────────── */}
      <div className="tb-stats" role="list" aria-label="Market statistics">

        {/* Mark */}
        <div className="tb-stat" role="listitem">
          <span className="tb-stat-label tb-stat-label-dashed">Mark</span>
          <span className="tb-stat-value">{mark}</span>
        </div>

        {/* Index */}
        <div className="tb-stat" role="listitem">
          <span className="tb-stat-label tb-stat-label-dashed">Index</span>
          <span className="tb-stat-value">{index}</span>
        </div>

        {/* Funding / Countdown */}
        <div className="tb-stat" role="listitem">
          <span className="tb-stat-label tb-stat-label-dashed">Funding / Countdown</span>
          <span className="tb-funding-value">
            <span className="tb-funding-rate">{fundingRate}</span>
            <span className="tb-funding-sep"> / </span>
            <span className="tb-stat-value">{fundingCountdown}</span>
          </span>
        </div>

        {/* 24h Change */}
        <div className="tb-stat" role="listitem">
          <span className="tb-stat-label">24h Change</span>
          <span className={`tb-stat-value ${change24hDirection === 'down' ? 'p-short' : 'p-long'}`}>
            {change24h}
          </span>
        </div>

        {/* 24h Volume */}
        <div className="tb-stat" role="listitem">
          <span className="tb-stat-label">24h Volume (USDT)</span>
          <span className="tb-stat-value">{volume24h}</span>
        </div>
      </div>

      <div className="tb-spacer" aria-hidden="true" />

      {/* ── Chevron scroll indicator ────────────────────────── */}
      <div className="tb-chevron-wrap" aria-hidden="true">
        <button type="button" className="tb-chevron" tabIndex={-1}>
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  )
}
