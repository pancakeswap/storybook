import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { Flex } from '../ui/components/Box'
import { PerpsPanel } from './primitives'

export type OrderBookView = 'both' | 'bids' | 'asks'
export type OrderBookSizeUnit = 'BASE' | 'QUOTE'

/** [price, qty] as raw strings from the exchange. */
export type DepthLevel = [string, string]

export interface OrderBookProps {
  /** Asks sorted ascending (best ask first). Raw `[price, qty]` tuples. */
  asks: DepthLevel[]
  /** Bids sorted descending (best bid first). */
  bids: DepthLevel[]
  /** Base asset symbol, e.g. "BTC". */
  baseAsset: string
  /** Quote asset symbol, e.g. "USDT". */
  quoteAsset: string
  /** Native tick size from the exchange's PRICE_FILTER. Drives aggregation. */
  tickSize: number
  /** Decimal places for the price column. */
  pricePrecision?: number
  /** Last traded price — drives which aggregation step options are offered. */
  lastPrice?: number

  // ── Controlled view-state (consumer persists in its store) ────
  view: OrderBookView
  onViewChange: (v: OrderBookView) => void
  priceStep: string
  onPriceStepChange: (v: string) => void
  sizeUnit: OrderBookSizeUnit
  onSizeUnitChange: (v: OrderBookSizeUnit) => void

  /**
   * Hide the panel without unmounting — preserves the caller's depth
   * subscription when toggled inside a tabbed panel.
   */
  hidden?: boolean
  /** Skip the PerpsPanel shell — caller already wraps us. */
  embedded?: boolean
  /** Translator. */
  t?: (key: string) => string
}

const MAX_VISIBLE_ROWS = 10
const ROW_HEIGHT_PX = 27

const ControlBar = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  gap: 8px;
  flex-shrink: 0;
`

const ViewIcons = styled(Flex)`
  gap: 5px;
`

const ViewIconButton = styled.button<{ $active: boolean }>`
  width: 26px;
  height: 24px;
  background: ${({ $active, theme }) => ($active ? theme.colors.input : 'transparent')};
  border: 0;
  padding: 0;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ $active }) => ($active ? 1 : 0.45)};
  transition: opacity 0.12s, background 0.12s;
  &:hover {
    opacity: ${({ $active }) => ($active ? 1 : 0.8)};
  }
`

const DropdownWrapper = styled.div`
  position: relative;
`

const DropdownButton = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 0;
  font-variant-numeric: tabular-nums;
  &:hover {
    opacity: 0.75;
  }
`

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 8px;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  min-width: 60px;
  overflow: hidden;
  z-index: 200;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
`

const DropdownItem = styled.button<{ $active?: boolean }>`
  background: transparent;
  border: 0;
  color: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.text)};
  font-size: 14px;
  font-weight: 400;
  padding: 8px 16px;
  text-align: center;
  cursor: pointer;
  font-variant-numeric: tabular-nums;
  transition: background 0.1s;
  &:hover {
    background: ${({ theme }) => theme.colors.input};
  }
`

const Controls = styled(Flex)`
  align-items: center;
  gap: 2px;
`

const ColHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 8px 16px;
  gap: 4px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12px;
  color: ${({ theme }) => theme.colors.textSubtle};
  flex-shrink: 0;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`

const Half = styled.div<{ $size: 'full' | 'half' }>`
  height: ${({ $size }) =>
    $size === 'full' ? MAX_VISIBLE_ROWS * 2 * ROW_HEIGHT_PX : MAX_VISIBLE_ROWS * ROW_HEIGHT_PX}px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

/*
 * Depth heat-bar is applied as the Row's own background via an inline
 * `style` prop built by `depthBarStyle` below — NOT via a pseudo-element.
 * Earlier attempts with ::before rendered inconsistently (HMR +
 * styled-components prop diffing stopped emitting per-row width rules),
 * leaving bars invisible in production. Inline `background` sidesteps
 * that entire class of issue.
 */
const Row = styled.div<{ $side: 'bid' | 'ask' }>`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 3px 16px;
  gap: 4px;
  height: ${ROW_HEIGHT_PX}px;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
  line-height: 1.5;
  overflow: hidden;
  &:hover {
    filter: brightness(1.06);
  }
`

const Price = styled.span<{ $side: 'bid' | 'ask' }>`
  position: relative;
  z-index: 1;
  color: ${({ $side, theme }) => ($side === 'bid' ? theme.colors.success : theme.colors.failure)};
`

const Cell = styled.span<{ $align?: 'center' | 'right' }>`
  position: relative;
  z-index: 1;
  text-align: ${({ $align }) => $align ?? 'right'};
`

const Spread = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 4px 16px;
  gap: 4px;
  background: ${({ theme }) => theme.colors.input};
  font-size: 14px;
  font-weight: 400;
  font-variant-numeric: tabular-nums;
  color: ${({ theme }) => theme.colors.text};
  flex-shrink: 0;
`

const SpreadLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
`

const SpreadValue = styled.span`
  text-align: center;
`

const SpreadPct = styled.span`
  text-align: right;
  color: ${({ theme }) => theme.colors.textSubtle};
`

/**
 * Aggregate raw order-book levels into price buckets of size
 * `tickSize × multiplier`. Bids round DOWN to the bucket floor, asks
 * round UP to the bucket ceiling (conservative rounding — never makes
 * the book look tighter than it is). Same-bucket levels merge by
 * summing qty.
 */
const aggregateLevels = (
  levels: DepthLevel[],
  side: 'bid' | 'ask',
  tickSize: number,
  multiplier: number,
  decimals: number,
): DepthLevel[] => {
  if (multiplier <= 1) return levels
  const step = tickSize * multiplier
  const buckets = new Map<string, number>()
  for (const [p, q] of levels) {
    const price = Number(p)
    const qty = Number(q)
    if (!Number.isFinite(price) || !Number.isFinite(qty)) continue
    const bucket = side === 'bid' ? Math.floor(price / step) * step : Math.ceil(price / step) * step
    const key = bucket.toFixed(decimals)
    buckets.set(key, (buckets.get(key) ?? 0) + qty)
  }
  const sorted = [...buckets.entries()].sort((a, b) =>
    side === 'bid' ? Number(b[0]) - Number(a[0]) : Number(a[0]) - Number(b[0]),
  )
  return sorted.map(([p, q]) => [p, q.toString()])
}

/**
 * Aster's own dropdown-option algorithm: offer integer steps
 * [100, 50, 10, 1] when `price > step × 10`, plus decimal steps down
 * to the native tickSize. Consumers don't need to compute this — we
 * derive it from `tickSize + lastPrice` at render time.
 *
 *   BTCUSDT   tickSize=0.1,    price=78000 → ["100","50","10","1","0.1"]
 *   ASTERUSDT tickSize=0.0001, price=0.67  → ["0.1","0.01","0.001","0.0001"]
 */
const INTEGER_LEVELS = [100, 50, 10, 1] as const

const decimalStep = (n: number): string => (n === 0 ? '1' : `0.${'0'.repeat(n - 1)}1`)

const getDecimals = (tickSize: number): number => {
  if (!tickSize || tickSize <= 0) return 0
  return Math.round(-Math.log10(tickSize))
}

const getStepOptions = (tickSize: number, lastPrice: number): string[] => {
  const opts: string[] = []
  for (const l of INTEGER_LEVELS) if (lastPrice > l * 10) opts.push(String(l))
  const decimals = getDecimals(tickSize)
  for (let i = 1; i <= decimals; i++) opts.push(decimalStep(i))
  return opts
}

const useClickOutside = (ref: React.RefObject<HTMLElement | null>, onClose: () => void) => {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    window.addEventListener('mousedown', handler)
    return () => window.removeEventListener('mousedown', handler)
  }, [ref, onClose])
}

const Dropdown: React.FC<{
  label: React.ReactNode
  items: Array<{ value: string; label: string }>
  activeValue: string
  onSelect: (value: string) => void
}> = ({ label, items, activeValue, onSelect }) => {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  useClickOutside(wrapperRef, () => setOpen(false))
  return (
    <DropdownWrapper ref={wrapperRef}>
      <DropdownButton onClick={() => setOpen((v) => !v)}>
        {label} {open ? '▴' : '▾'}
      </DropdownButton>
      {open && (
        <DropdownMenu>
          {items.map((i) => (
            <DropdownItem
              key={i.value}
              $active={i.value === activeValue}
              onClick={() => {
                onSelect(i.value)
                setOpen(false)
              }}
            >
              {i.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  )
}

const BothIcon: React.FC<{ bidColor: string; askColor: string; listColor: string }> = ({
  bidColor,
  askColor,
  listColor,
}) => (
  <svg width="16" height="15" viewBox="0 0 16 15" fill="none" aria-hidden="true">
    <rect x="0.5" y="0.5" width="6" height="6" stroke={askColor} />
    <rect x="0.5" y="8.5" width="6" height="6" stroke={bidColor} />
    <rect x="8" y="0" width="8" height="3" fill={listColor} />
    <rect x="8" y="4" width="8" height="3" fill={listColor} />
    <rect x="8" y="8" width="8" height="3" fill={listColor} />
    <rect x="8" y="12" width="8" height="3" fill={listColor} />
  </svg>
)

const BidsIcon: React.FC<{ bidColor: string; listColor: string }> = ({ bidColor, listColor }) => (
  <svg width="16" height="15" viewBox="0 0 16 15" fill="none" aria-hidden="true">
    <rect x="0.5" y="0.5" width="6" height="14" stroke={bidColor} />
    <rect x="8" y="0" width="8" height="3" fill={listColor} />
    <rect x="8" y="4" width="8" height="3" fill={listColor} />
    <rect x="8" y="8" width="8" height="3" fill={listColor} />
    <rect x="8" y="12" width="8" height="3" fill={listColor} />
  </svg>
)

const AsksIcon: React.FC<{ askColor: string; listColor: string }> = ({ askColor, listColor }) => (
  <svg width="16" height="15" viewBox="0 0 16 15" fill="none" aria-hidden="true">
    <rect x="0.5" y="0.5" width="6" height="14" stroke={askColor} />
    <rect x="8" y="0" width="8" height="3" fill={listColor} />
    <rect x="8" y="4" width="8" height="3" fill={listColor} />
    <rect x="8" y="8" width="8" height="3" fill={listColor} />
    <rect x="8" y="12" width="8" height="3" fill={listColor} />
  </svg>
)

const identity = (s: string) => s

/**
 * Live depth book — bid/ask ladder with heatbar backgrounds, price-step
 * aggregation dropdown, size-unit toggle, and view-mode toggle
 * (both / bids / asks).
 *
 * All data + selected step / view / sizeUnit come in as props; consumer
 * persists selection across sessions. `onPriceStepChange` may be called
 * when the current `priceStep` isn't valid for the symbol (e.g. user
 * had "100" from BTCUSDT and switched to ASTER) — the widget snaps to
 * the finest available option and emits a change.
 */
export const OrderBook: React.FC<OrderBookProps> = ({
  asks,
  bids,
  baseAsset,
  quoteAsset,
  tickSize,
  pricePrecision = 2,
  lastPrice = 0,
  view,
  onViewChange,
  priceStep,
  onPriceStepChange,
  sizeUnit,
  onSizeUnitChange,
  hidden,
  embedded,
  t = identity,
}) => {
  const theme = useTheme()
  const sizeUnitAsset = sizeUnit === 'QUOTE' ? quoteAsset : baseAsset

  const stepOptions = useMemo(() => getStepOptions(tickSize, lastPrice), [tickSize, lastPrice])

  // Persisted step may not be offered on the current symbol. Snap to the
  // finest decimal option (native tickSize).
  useEffect(() => {
    if (stepOptions.length === 0) return
    if (!stepOptions.includes(priceStep)) {
      onPriceStepChange(stepOptions[stepOptions.length - 1])
    }
  }, [stepOptions, priceStep, onPriceStepChange])

  const rows = useMemo(() => {
    // `priceStep` is an absolute value like "0.01" / "1" / "100". Aggregator
    // takes a tick-count multiplier; clamp to 1 so sub-tick selections fall
    // back to native resolution.
    const stepValue = Math.max(tickSize, Number(priceStep) || tickSize)
    const aggMultiplier = Math.max(1, Math.round(stepValue / tickSize))
    const aggAsks = aggregateLevels(asks, 'ask', tickSize, aggMultiplier, pricePrecision)
    const aggBids = aggregateLevels(bids, 'bid', tickSize, aggMultiplier, pricePrecision)
    const maxRows = MAX_VISIBLE_ROWS * 2
    const slicedAsks = aggAsks.slice(0, maxRows).reverse()
    const slicedBids = aggBids.slice(0, maxRows)
    const bestAsk = asks[0] ? Number(asks[0][0]) : undefined
    const bestBid = bids[0] ? Number(bids[0][0]) : undefined
    const spread = bestAsk && bestBid ? bestAsk - bestBid : undefined
    const spreadPct = bestAsk && bestBid ? ((bestAsk - bestBid) / bestAsk) * 100 : undefined
    return { asks: slicedAsks, bids: slicedBids, spread, spreadPct }
  }, [asks, bids, priceStep, tickSize, pricePrecision])

  // qty is always the base amount. For QUOTE display we convert per-level at
  // the row's own price — matching how Aster shows USDT size (price × qty).
  const cumulate = (levels: DepthLevel[]) => {
    let total = 0
    return levels.map(([p, q]) => {
      const baseQty = Number(q)
      const price = Number(p)
      const displayQty = sizeUnit === 'QUOTE' ? baseQty * price : baseQty
      total += displayQty
      return { price: p, qty: String(displayQty), total }
    })
  }

  // Cumulate each side independently from its best price outward, then
  // normalise by the larger of the two side totals so the dominant side's
  // widest bar reaches the edge.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const asksWithTotal = useMemo(() => cumulate([...rows.asks].reverse()).reverse(), [rows.asks, sizeUnit])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const bidsWithTotal = useMemo(() => cumulate(rows.bids), [rows.bids, sizeUnit])
  const maxTotal = useMemo(() => {
    const a = asksWithTotal[0]?.total ?? 0
    const b = bidsWithTotal[bidsWithTotal.length - 1]?.total ?? 0
    return Math.max(a, b, 1)
  }, [asksWithTotal, bidsWithTotal])

  /**
   * Per-row background gradient anchored to the left edge (bars grow
   * from Price column rightward, fading at SUM). Uses `color-mix()`
   * because `theme.colors.success` may resolve to `var(--colors-success)`
   * at runtime — concatenating `${base}99` produces invalid CSS and the
   * browser silently drops the whole rule. `color-mix` handles hex / rgb
   * / var() references uniformly.
   */
  const depthBarStyle = (side: 'bid' | 'ask', fill: number): React.CSSProperties => {
    const base = side === 'bid' ? theme.colors.success : theme.colors.failure
    const pct = Math.max(0, Math.min(100, fill * 100)).toFixed(2)
    const strong = `color-mix(in srgb, ${base} 60%, transparent)`
    const faint = `color-mix(in srgb, ${base} 20%, transparent)`
    return {
      background: `linear-gradient(to right, ${strong} 0%, ${faint} ${pct}%, transparent ${pct}%, transparent 100%)`,
    }
  }

  const fmt = (n: number) => {
    if (sizeUnit === 'QUOTE') {
      if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`
      if (n >= 1_000) return `${(n / 1_000).toFixed(2)}K`
      return n.toFixed(2)
    }
    return n.toFixed(3)
  }

  const content = (
    <>
      <ControlBar>
        <ViewIcons>
          <ViewIconButton
            title={t('Both')}
            $active={view === 'both'}
            onClick={() => onViewChange('both')}
            aria-label={t('Both')}
          >
            <BothIcon
              bidColor={theme.colors.success}
              askColor={theme.colors.failure}
              listColor={theme.colors.textSubtle}
            />
          </ViewIconButton>
          <ViewIconButton
            title={t('Bids')}
            $active={view === 'bids'}
            onClick={() => onViewChange('bids')}
            aria-label={t('Bids')}
          >
            <BidsIcon bidColor={theme.colors.success} listColor={theme.colors.textSubtle} />
          </ViewIconButton>
          <ViewIconButton
            title={t('Asks')}
            $active={view === 'asks'}
            onClick={() => onViewChange('asks')}
            aria-label={t('Asks')}
          >
            <AsksIcon askColor={theme.colors.failure} listColor={theme.colors.textSubtle} />
          </ViewIconButton>
        </ViewIcons>
        <Controls>
          <Dropdown
            label={priceStep}
            items={stepOptions.map((s) => ({ value: s, label: s }))}
            activeValue={priceStep}
            onSelect={onPriceStepChange}
          />
          <Dropdown
            label={sizeUnitAsset}
            items={[
              { value: 'BASE', label: baseAsset },
              { value: 'QUOTE', label: quoteAsset },
            ]}
            activeValue={sizeUnit}
            onSelect={(v) => onSizeUnitChange(v as OrderBookSizeUnit)}
          />
        </Controls>
      </ControlBar>
      <ColHeader>
        <span>
          {t('Price')} ({quoteAsset})
        </span>
        <span style={{ textAlign: 'center' }}>
          {t('Amount')} ({sizeUnitAsset})
        </span>
        <span style={{ textAlign: 'right' }}>
          {t('SUM')} ({sizeUnitAsset})
        </span>
      </ColHeader>
      <Body>
        {view !== 'bids' && (
          <Half $size={view === 'asks' ? 'full' : 'half'}>
            {asksWithTotal
              .slice(view === 'asks' ? 0 : Math.max(0, asksWithTotal.length - MAX_VISIBLE_ROWS))
              .map((r) => (
                <Row key={`a-${r.price}`} $side="ask" style={depthBarStyle('ask', r.total / maxTotal)}>
                  <Price $side="ask">{r.price}</Price>
                  <Cell $align="center">{fmt(Number(r.qty))}</Cell>
                  <Cell $align="right">{fmt(r.total)}</Cell>
                </Row>
              ))}
          </Half>
        )}
        {view === 'both' && (
          <Spread role="row" aria-label={t('Spread')}>
            <SpreadLabel>{t('Spread')}</SpreadLabel>
            <SpreadValue>{rows.spread !== undefined ? rows.spread.toFixed(2) : '—'}</SpreadValue>
            <SpreadPct>{rows.spreadPct !== undefined ? `${rows.spreadPct.toFixed(3)}%` : ''}</SpreadPct>
          </Spread>
        )}
        {view !== 'asks' && (
          <Half $size={view === 'bids' ? 'full' : 'half'}>
            {bidsWithTotal.slice(0, view === 'bids' ? MAX_VISIBLE_ROWS * 2 : MAX_VISIBLE_ROWS).map((r) => (
              <Row key={`b-${r.price}`} $side="bid" style={depthBarStyle('bid', r.total / maxTotal)}>
                <Price $side="bid">{r.price}</Price>
                <Cell $align="center">{fmt(Number(r.qty))}</Cell>
                <Cell $align="right">{fmt(r.total)}</Cell>
              </Row>
            ))}
          </Half>
        )}
      </Body>
    </>
  )

  if (embedded) {
    return <div style={hidden ? { display: 'none' } : { display: 'contents' }}>{content}</div>
  }
  return <PerpsPanel style={hidden ? { display: 'none' } : undefined}>{content}</PerpsPanel>
}
