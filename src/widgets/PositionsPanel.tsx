import React from 'react'
import { createPortal } from 'react-dom'
import { css, styled, useTheme } from 'styled-components'
import { Flex } from '../primitives/Box'
import { Button } from '../primitives/Button'
import { Checkbox } from '../primitives/Checkbox'
import { Text } from '../primitives/Text'
import { ChevronDownIcon, CloseIcon, HistoryIcon } from '../primitives/Icons'
import { useMatchBreakpoints } from '../contexts'
import { useTooltip } from '../hooks/useTooltip'
import { PerpsPanel, UnderlineTab, UnderlineTabs } from './primitives'

export interface PositionRow {
  /** Stable React key — consumer typically uses `${symbol}-${positionSide}`. */
  id: string
  symbol: string
  /** Signed base-asset position amount — positive = long, negative = short. */
  positionAmt: number
  entryPrice: number
  leverage: number
  /**
   * Server-reported uPnL. The widget prefers a live computation from
   * (markPrice - entryPrice) × positionAmt when markPrice is available,
   * and falls back to this string.
   */
  unrealizedProfit: string
  /** Existing TP / SL trigger-order prices for this symbol, if any. */
  tpStopPrice?: string
  slStopPrice?: string
}

export interface OpenOrderRow {
  /** Stable React key — typically the orderId. */
  id: string | number
  orderId: number
  symbol: string
  side: 'BUY' | 'SELL'
  /** Order type — displayed verbatim (e.g. "LIMIT", "STOP_MARKET"). */
  type: string
  price: string
  origQty: string
  executedQty: string
  status: string
}

export interface TradeHistoryRow {
  /** Stable React key — typically the tradeId. */
  id: string | number
  /** Local date string, e.g. '2025-04-17'. */
  date: string
  /** Local time string, e.g. '01:37:26'. */
  time: string
  symbol: string
  side: 'BUY' | 'SELL'
  /** Pre-formatted execution price. */
  price: string
  /** Pre-formatted quantity, e.g. '30 USDT' or '0.012 BTC'. */
  quantity: string
  /** Pre-formatted fee with unit. */
  fee: string
  /** Pre-formatted realized P&L (signed), e.g. '+0.01 USDT'. */
  realizedProfit: string
}

export interface TransactionHistoryRow {
  /** Stable React key — typically the txId. */
  id: string | number
  date: string
  time: string
  /** Transaction type, e.g. 'Realized PNL', 'Funding', 'Deposit'. */
  type: string
  /** Pre-formatted amount with unit, e.g. '30 USDT'. */
  amount: string
  symbol: string
}

export interface OrderHistoryRow {
  /** Stable React key — typically the orderId. */
  id: string | number
  /** Local date string, e.g. '2025-04-17'. */
  date: string
  /** Local time string, e.g. '01:37:26'. */
  time: string
  symbol: string
  side: 'BUY' | 'SELL'
  /** Humanized order type, e.g. 'Limit', 'Stop Market (Reduce)'. */
  type: string
  /** Pre-formatted price (or 'Market' / 'Market / Trig <price>'). */
  price: string
  /** Pre-formatted original quantity. */
  origQty: string
  /** Pre-formatted executed quantity. */
  executedQty: string
  /** Wire status — 'FILLED' / 'CANCELED' / 'EXPIRED' / 'REJECTED' etc. */
  status: string
}

export type PositionsPanelTab =
  | 'positions'
  | 'orders'
  | 'history'
  | 'trades'
  | 'transactions'
  /** Mobile-only — list of holdings, no desktop equivalent yet. */
  | 'assets'
  /** Mobile-only — TWAP orders, no desktop equivalent yet. */
  | 'twap'

/** History sheet inner-tab (mobile only). */
export type PositionsHistoryTab = 'orders' | 'trades' | 'tx'

export interface PositionsPanelProps {
  /** Controlled active tab. */
  tab: PositionsPanelTab
  onTabChange: (tab: PositionsPanelTab) => void
  positions: PositionRow[]
  openOrders: OpenOrderRow[]
  /** Past orders (filled / canceled / expired). */
  orderHistory?: OrderHistoryRow[]
  /** Fills the user has executed (settled trades). */
  tradeHistory?: TradeHistoryRow[]
  /** Account ledger entries — funding, realized PnL, deposits, etc. */
  transactionHistory?: TransactionHistoryRow[]
  /** Share-to-social callback for a trade row (optional). */
  onShareTrade?: (trade: TradeHistoryRow) => void
  /**
   * Fires when the user clicks the share-arrow icon in a position row's
   * PNL cell. Consumer typically opens {@link SharePnlModal} with the
   * position snapshot. Hidden when undefined.
   */
  onSharePnl?: (position: PositionRow) => void
  /**
   * Hook-like function called inside each position row to get the live
   * mark price for that symbol. MUST obey the rules of hooks (always
   * called at the top of the row component). Consumer typically passes
   * their `useMarkPrice` hook from the market-data layer. Return
   * `undefined` if the mark isn't available yet.
   */
  useMarkPriceForSymbol?: (symbol: string) => number | undefined
  /**
   * Pure function (not a hook) that estimates the liquidation price
   * for a position. Consumer provides its math implementation —
   * frontend uses `estimateLiquidationPrice({ side, entryPrice,
   * leverage })` from its lib.
   */
  computeLiqPrice?: (args: {
    side: 'BUY' | 'SELL'
    entryPrice: number
    leverage: number
  }) => number | undefined
  /** Close the full position. */
  onClosePosition: (position: PositionRow) => void
  /** Open the TP/SL editor for this position (consumer manages the modal). */
  onEditTpSl: (position: PositionRow, markPrice: number) => void
  /** Cancel an individual resting order. */
  onCancelOrder: (order: OpenOrderRow) => void
  /**
   * Symbol whose Close button is currently in-flight — disables the
   * row's close button + shows a spinner. Passed separately from the
   * rows so the consumer can track it without remapping positions.
   */
  closingSymbol?: string | null
  /**
   * `id` of the open order whose Cancel button is in-flight. The matching
   * row's button shows a spinner and is disabled until the consumer
   * clears this back to `null`. Same pattern as {@link closingSymbol}
   * but scoped per-row (not per-symbol), so cancels for two orders on
   * the same symbol stay independent.
   */
  cancellingOrderId?: OpenOrderRow['id'] | null
  /** Translator. */
  t?: (key: string) => string

  // ── Mobile-only props ────────────────────────────────────────
  /**
   * Force the mobile layout. Defaults to `useMatchBreakpoints().isMobile`
   * — same auto-detection pattern as `OrderForm`.
   */
  isMobile?: boolean
  /**
   * Optional positions count override. The mobile tab strip renders
   * `Positions (N)` and consumers may want to pass a server-derived
   * count rather than `positions.length`.
   */
  positionsCount?: number
  /**
   * "Hide other symbols" filter — wired on both desktop (right side of
   * the tabs row) and mobile (filter strip below the tabs).
   */
  hideOtherSymbols?: boolean
  onHideOtherSymbolsChange?: (next: boolean) => void
  /**
   * Desktop-only: invoked when the user clicks "Close All" in the top
   * tabs row. Consumer is responsible for confirmation + the bulk close.
   * Hidden when the callback isn't provided.
   */
  onCloseAll?: () => void
  /** Mobile filter row — instrument filter button label (default `All instruments`). */
  instrumentFilterLabel?: string
  /** Mobile filter row — invoked when the instrument-filter button is clicked. */
  onInstrumentFilterClick?: () => void
  /**
   * Mobile-only: open state of the full-page History sheet portal. The
   * sheet covers the viewport and renders the orderHistory / tradeHistory
   * / transactionHistory tabs.
   */
  historyOpen?: boolean
  onHistoryToggle?: (open: boolean) => void
  /** Mobile-only: active sub-tab inside the History sheet. */
  historyTab?: PositionsHistoryTab
  onHistoryTabChange?: (tab: PositionsHistoryTab) => void
}

const Card = styled(PerpsPanel)`
  flex: 1;
  min-height: 200px;
`

const Body = styled.div`
  padding: 8px 12px 12px;
  /* Horizontal scroll appears once the table body is wider than the
   * panel — at that point the trailing TP/SL + Close action group is
   * pushed off-screen and the user can scroll right to reach it. The
   * scrollbar styling matches Figma 76:12504: a 4px thin pill, sized
   * down from the browser default (12–17px) so it sits unobtrusively
   * at the bottom of the panel. */
  overflow-x: auto;
  flex: 1;
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: ${({ theme }) => theme.colors.textSubtle} transparent;

  &::-webkit-scrollbar {
    height: 4px;
    /* appearance:none opts out of macOS overlay scrollbars (which
     * auto-hide unless the cursor is moving over them). With our
     * styled track and thumb the scrollbar paints inset, so users
     * always see a clear "more content to the right" affordance when
     * the table overflows. */
    -webkit-appearance: none;
    appearance: none;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.textSubtle};
    border-radius: 999px;
  }
`

const Empty = styled(Flex)`
  align-items: center;
  justify-content: center;
  min-height: 120px;
`

/*
 * Positions table — desktop layout.
 *
 * Columns are fixed-width (per Figma 72:12961): Symbol(92) · Size(80) ·
 * Entry(80) · Mark(80) · Margin(80) · Liq(80) · PNL(136) · TP/SL(136) ·
 * Actions(auto). The 16px content gap between columns lives on the
 * cells (8px each side) instead of `column-gap`, so the hover-active
 * strip can paint every cell with no transparent slits in between.
 */
const PositionsTable = styled.div`
  display: grid;
  grid-template-columns: 108px 96px 96px 96px 96px 96px 152px 152px auto;
  column-gap: 0;
  /* Row gap is 0 so the active/hover bg of one row sits flush against
   * the next row — matches the responsive Figma 75:12034 where the
   * card-secondary bg of the active row directly touches the next
   * row, with no visible breathing strip between them. */
  row-gap: 0;
  font-variant-numeric: tabular-nums;
`

/* Wraps a row's cells with display:contents so the cells stay direct
 * children of the parent grid, while letting `:hover > *` paint every
 * cell in the row with one continuous card-secondary background. */
const RowGroup = styled.div`
  display: contents;
  /* Padding lives on the cells (RowGroup is display:contents so any
   * padding set here would be dropped). 8px each side combines with the
   * neighbour's 8px to produce the 16px content gap from Figma, while
   * keeping the cells flush so the hover strip is unbroken. */
  & > * {
    padding: 8px;
    transition: background 0.12s;
  }
  &:hover > * {
    background: ${({ theme }) => theme.colors.cardSecondary};
  }
  /* Round the outer ends of the strip so it reads as a pill. */
  &:hover > *:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  &:hover > *:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`

/* Header strip above the table body — same fixed-width column grid as
 * PositionsTable. No outer horizontal padding so its columns line up
 * exactly with the row cells (which get 8px each-side padding via
 * RowGroup). The 8px each-side padding here lives on the children so
 * we don't pollute the shared `Th` primitive used by other tables. */
const PositionsHeaderRow = styled.div`
  display: grid;
  grid-template-columns: 108px 96px 96px 96px 96px 96px 152px 152px auto;
  column-gap: 0;
  align-items: center;
  padding: 8px 0;

  & > * {
    padding-left: 8px;
    padding-right: 8px;
  }
`

/* Wraps the tabs row + the right-side controls (Hide Other Symbols,
 * Close All). Owns the bottom border so it spans the whole panel
 * width even though the tabs primitive sits on the left. The
 * `container-type: inline-size` declaration enables container queries
 * inside — that's how TabsChevronOverlay decides to fade in when the
 * panel is too narrow to fit all five tabs alongside the right
 * controls (see comment on TabsChevronOverlay). */
const TabsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding-right: 12px;
  gap: 12px;
  container-type: inline-size;
  container-name: positions-tabs-header;
`

/* Flex parent for the tabs primitive — clips overflow so the
 * chevron-fade overlay can sit on top of the trailing tabs. `flex: 1`
 * lets it shrink under HeaderRightControls; `min-width: 0` is the
 * canonical "let me shrink even with non-shrinking children" trick.
 *
 * The inner UnderlineTabsWrapper is forced to keep its natural width
 * (`flex-shrink: 0`) so it overflows TabsLeft cleanly — otherwise the
 * wrapper would compress, hiding the overflow we want to detect via
 * `scrollWidth > clientWidth`. */
const TabsLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 0;
  min-width: 0;
  overflow: hidden;
  position: relative;

  & > *:not([data-overlay]) {
    flex-shrink: 0;
  }
`

/* 48px overlay anchored to TabsLeft's right edge. Becomes visible when
 * the parent header container is narrower than 1024px — at that
 * point the five tabs (~615px natural width) collide with the
 * Hide-Other / Close-All controls (~290px) plus padding/gaps, leaving
 * <2px of breathing room. The fade gradient masks the clipped tab so
 * the cut doesn't read as a truncation glitch, and the chevron hints
 * "more tabs to the right". Pointer-events disabled so clicks pass
 * through to the underlying tab area.
 *
 * Container query (instead of JS measurement) because Storybook's
 * iframe + Chromium occasionally throttle setInterval / batch
 * ResizeObserver fires across iframe boundaries — leaving the JS
 * state stuck. CSS responds to layout deterministically. */
const TabsChevronOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    ${({ theme }) => theme.colors.backgroundAlt} 60%,
    ${({ theme }) => theme.colors.backgroundAlt} 100%
  );
  color: ${({ theme }) => theme.colors.textSubtle};
  opacity: 0;
  transition: opacity 0.12s;

  @container positions-tabs-header (max-width: 1024px) {
    opacity: 1;
  }
`

const HeaderRightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`

/* "Hide Other Symbols" — Figma renders the label inline next to a 20px
 * checkbox. Both elements sit on the same row, gap 8px. The label uses
 * the primary60 (teal) color so it pulls slightly toward the action
 * tone of the Close All affordance to its right. */
// eslint-disable-next-line no-restricted-syntax -- TODO(design): need info-teal token in uikit
const HideOtherChip = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  cursor: pointer;
  user-select: none;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #02919D;
  font-feature-settings: 'liga' off;

  html.dark & {
    color: #48D0DB;
  }
`

// eslint-disable-next-line no-restricted-syntax -- TODO(design): need info-teal token in uikit
const CloseAllBtn = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #02919D;
  font-feature-settings: 'liga' off;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  html.dark & {
    color: #48D0DB;
  }
`

const ActionCell = styled(Flex)`
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`

/* Two-line stacked cell — used for symbol/side, size/unit, pnl/percent,
 * tp/sl. The outer cell already gets row padding from RowGroup, so this
 * is just a vertical flex with no padding of its own. */
const StackCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  white-space: nowrap;
`

const StackSub = styled.span<{ $color?: string; $size?: string }>`
  font-size: ${({ $size }) => $size ?? '12px'};
  letter-spacing: 0.12px;
  color: ${({ $color, theme }) => $color ?? theme.colors.textSubtle};
  display: inline-flex;
  align-items: center;
  gap: 4px;
`

/* "Buy 20x" badge — positive60 / negative60 text per side, 12px Kanit
 * Regular. Sits inline with the leverage-tier indicator bars. */
/* eslint-disable no-restricted-syntax -- TODO(design): need positive60/negative60 tokens in uikit */
const SideLevText = styled.span<{ $up: boolean }>`
  color: ${({ $up }) => ($up ? '#129E7D' : '#D8376C')};
  font-family: Kanit;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.12px;
  font-feature-settings: 'liga' off;
  white-space: nowrap;

  html.dark & {
    color: ${({ $up }) => ($up ? '#3DDBB5' : '#FFA3D0')};
  }
`
/* eslint-enable no-restricted-syntax */

/* Leverage indicator — 4 vertical bars (8×2px each, 2px gap). Per the
 * design (Figma 72:12995 / 72:13051), the leftmost bar is always
 * destructive (pink) and the remaining three are the primary fill
 * color. The pink bar reads as a "this is a leveraged position"
 * marker while the white bars echo the SymbolHeader-style direction
 * indicator. */
const LevBarRow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding-top: 2px;
`

const LevBar = styled.span<{ $variant: 'destructive' | 'fill' }>`
  width: 2px;
  height: 8px;
  background: ${({ $variant, theme }) =>
    $variant === 'destructive' ? theme.colors.failure : theme.colors.text};
`

const TpSlCell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;
`

/** Small leverage chip rendered next to a position's symbol — purple
 *  text on the tertiary surface (mirrors SymbolHeader's old LevPill).
/* Header column-help anchor — picks up the inherited textSubtle color
 * and lets the shared useTooltip hook drive the popover. cursor:help so
 * the affordance reads as informational (no underline / button shape). */
const HeaderHelp = styled.span`
  display: inline-flex;
  align-items: center;
  cursor: help;
  color: inherit;
  margin-left: 4px;
`

const OrdersTable = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(min-content, 1fr)) auto;
  /* Match the Positions table spacing: zero column-gap so row hover
   * reads as one strip, and 16px cell padding for breathing room. */
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
`

/* Shared scroll mixin for the history tabs. Without this each history
 * table grew to fit every row — a 100-entry history pushed the whole
 * page-bottom panel below the fold. The grid stays intact (rather than
 * splitting headers + body into separate scroll containers, which
 * would desync column widths) and `Th` cells use `position: sticky`
 * so the header row anchors to the top while rows scroll under it. */
const historyTableScroll = css`
  max-height: 360px;
  overflow-y: auto;
`

const TradesTable = styled.div`
  display: grid;
  grid-template-columns: 148px 156px 1fr 1fr 1fr 1fr;
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
  ${historyTableScroll}
`

const TxTable = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
  ${historyTableScroll}
`

const OrderHistoryTable = styled.div`
  display: grid;
  grid-template-columns: 148px 156px minmax(min-content, 0.6fr) repeat(5, minmax(min-content, 1fr));
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
  ${historyTableScroll}
`

/** Stacked date / time cell — the figma renders these on two lines. */
const StackedTime = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
  & > span:last-child {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`

/** Stacked symbol / side cell used in Trade History. */
const StackedSymbol = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
`

const ShareBtn = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 21px;
  height: 21px;
  color: ${({ theme }) => theme.colors.text};
  transition: opacity 0.12s;
  &:hover:not(:disabled) {
    opacity: 0.7;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`

/* Column header label — Figma 72:12968 etc. 12px Kanit SemiBold, 60%
 * opacity on textSubtle, uppercase, 0.12px tracking, 14px line-height.
 * Sticky-anchored so when the body of the history tables scrolls the
 * row of labels stays pinned at the top. */
const Th = styled(Text).attrs({ fontSize: '12px', color: 'textSubtle' })`
  font-family: Kanit;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0.12px;
  text-transform: uppercase;
  opacity: 0.6;
  display: inline-flex;
  align-items: center;
  /* Anchor the header row when the history tables overflow + scroll.
     position: sticky is a no-op when the parent doesn't scroll, so
     this is also safe on the Positions / Open Orders tables (which
     don't use the scroll mixin today). */
  position: sticky;
  top: 0;
  z-index: 1;
  background: ${({ theme }) => theme.colors.card};
`

const Td = styled(Text).attrs({ fontSize: '14px' })`
  font-variant-numeric: tabular-nums;
  font-family: Kanit;
  line-height: 1.5;
  white-space: nowrap;
`

const identity = (s: string) => s

/**
 * Single positions-table row. Split out as a component so
 * `useMarkPriceForSymbol` can be called at a stable hook index per
 * render — calling the hook inside a .map() would violate React's
 * rules of hooks.
 */
const PositionTableRow: React.FC<{
  p: PositionRow
  useMarkPriceForSymbol?: PositionsPanelProps['useMarkPriceForSymbol']
  computeLiqPrice?: PositionsPanelProps['computeLiqPrice']
  onClose: (p: PositionRow) => void
  onEditTpSl: (p: PositionRow, markPrice: number) => void
  onShare?: (p: PositionRow) => void
  closingSymbol?: string | null
  t: (key: string) => string
}> = ({ p, useMarkPriceForSymbol, computeLiqPrice, onClose, onEditTpSl, onShare, closingSymbol, t }) => {
  const theme = useTheme()
  const markPrice = useMarkPriceForSymbol?.(p.symbol)
  const side: 'BUY' | 'SELL' = p.positionAmt >= 0 ? 'BUY' : 'SELL'

  // Live uPnL overrides the server value as the mark moves — matches
  // pancake-frontend's per-tick refresh so users see their PnL move
  // between account polls.
  const livePnl =
    Number.isFinite(markPrice) && Number.isFinite(p.entryPrice)
      ? (markPrice! - p.entryPrice) * p.positionAmt
      : Number(p.unrealizedProfit)

  const liq =
    Number.isFinite(p.entryPrice) && Number.isFinite(p.leverage)
      ? computeLiqPrice?.({ side, entryPrice: p.entryPrice, leverage: p.leverage })
      : undefined

  const isClosing = closingSymbol === p.symbol

  // Notional value (= |size| × entryPrice) used as a stand-in for "Size" /
  // "Margin" while the consumer hasn't wired richer values. Margin is
  // displayed as notional ÷ leverage with a USDT suffix.
  const sizeBase = Math.abs(p.positionAmt)
  const notional = Number.isFinite(p.entryPrice) ? sizeBase * p.entryPrice : NaN
  const margin =
    Number.isFinite(notional) && p.leverage > 0 ? notional / p.leverage : NaN

  // Live uPnL %: gain / margin × 100. Falls back to '—' when we can't
  // compute either side. Matches the ROE% the design hints at next to
  // the absolute PNL value.
  const pnlPct =
    Number.isFinite(livePnl) && Number.isFinite(margin) && margin > 0
      ? (livePnl / margin) * 100
      : NaN

  const pnlUp = Number.isFinite(livePnl) ? livePnl >= 0 : true
  const pnlColor = pnlUp ? theme.colors.success : theme.colors.failure

  const fmtPrice = (v: number) =>
    v.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 1 })

  return (
    <>
      {/* Symbol cell — symbol name on top, side+lev pill + tier bars below */}
      <StackCell>
        <span>{p.symbol}</span>
        <StackSub>
          <SideLevText $up={side === 'BUY'}>
            {side === 'BUY' ? t('Buy') : t('Sell')} {p.leverage}x
          </SideLevText>
          <LevBarRow aria-hidden>
            {[0, 1, 2, 3].map((i) => (
              <LevBar key={i} $variant={i === 0 ? 'destructive' : 'fill'} />
            ))}
          </LevBarRow>
        </StackSub>
      </StackCell>

      {/* Size cell — base amount on top, USDT settle below */}
      <StackCell>
        <span>{Number.isFinite(sizeBase) ? sizeBase : '—'}</span>
        <StackSub>USDT</StackSub>
      </StackCell>

      <Td as="div">
        {Number.isFinite(p.entryPrice) ? fmtPrice(p.entryPrice) : '—'}
      </Td>
      <Td as="div">
        {markPrice !== undefined && Number.isFinite(markPrice) ? fmtPrice(markPrice) : '—'}
      </Td>
      <Td as="div">
        {Number.isFinite(margin) ? `${margin.toFixed(2)} USDT` : '—'}
      </Td>
      <Td as="div">{Number.isFinite(liq) ? fmtPrice(liq as number) : '—'}</Td>

      {/* PNL (ROE%) cell — abs uPnL + share trigger on top, ROE % below */}
      <StackCell>
        <Flex alignItems="center" style={{ gap: 8 }}>
          <span style={{ color: pnlColor }}>
            {Number.isFinite(livePnl)
              ? `${livePnl >= 0 ? '+' : ''}${livePnl.toFixed(2)} USDT`
              : '—'}
          </span>
          <ShareBtn
            type="button"
            aria-label={t('Share position')}
            onClick={() => onShare?.(p)}
            disabled={!onShare}
          >
            <ShareGlyph />
          </ShareBtn>
        </Flex>
        <span style={{ color: pnlColor, fontSize: 14, lineHeight: 1.5 }}>
          {Number.isFinite(pnlPct)
            ? `${pnlPct >= 0 ? '+' : ''}${pnlPct.toFixed(2)}%`
            : '—'}
        </span>
      </StackCell>

      {/* TP/SL cell — two muted lines, dashes when not set */}
      <TpSlCell>
        <span>{p.tpStopPrice ? fmtPrice(Number(p.tpStopPrice)) : '--'}</span>
        <span>{p.slStopPrice ? fmtPrice(Number(p.slStopPrice)) : '--'}</span>
      </TpSlCell>

      <ActionCell>
        <TpSlChip
          type="button"
          onClick={() => onEditTpSl(p, markPrice ?? NaN)}
          disabled={!Number.isFinite(p.positionAmt) || p.positionAmt === 0}
        >
          {t('TP / SL')}
        </TpSlChip>
        <CloseChip
          type="button"
          onClick={() => onClose(p)}
          disabled={isClosing || !Number.isFinite(p.positionAmt) || p.positionAmt === 0}
        >
          {isClosing ? '…' : t('Close')}
        </CloseChip>
      </ActionCell>
    </>
  )
}

/* Three-node "share network" glyph, sized 21×21 to fill its slot in the
 * PNL (ROE%) cell. Single-color so it picks up the surrounding text
 * color via currentColor. */
const ShareGlyph = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M14.5833 13.3927C14.0661 13.3927 13.6033 13.6035 13.2494 13.9338L8.39708 11.0172C8.43111 10.8555 8.45833 10.6939 8.45833 10.5252C8.45833 10.3565 8.43111 10.1949 8.39708 10.0332L13.195 7.14466C13.5625 7.49607 14.0457 7.71394 14.5833 7.71394C15.7131 7.71394 16.625 6.77217 16.625 5.6055C16.625 4.43884 15.7131 3.49707 14.5833 3.49707C13.4536 3.49707 12.5417 4.43884 12.5417 5.6055C12.5417 5.77418 12.5689 5.93583 12.6029 6.09747L7.805 8.98603C7.4375 8.63462 6.95431 8.41675 6.41667 8.41675C5.28694 8.41675 4.375 9.35852 4.375 10.5252C4.375 11.6918 5.28694 12.6336 6.41667 12.6336C6.95431 12.6336 7.4375 12.4157 7.805 12.0643L12.6506 14.988C12.6165 15.1356 12.5961 15.2902 12.5961 15.4449C12.5961 16.5764 13.4876 17.4971 14.5833 17.4971C15.679 17.4971 16.5706 16.5764 16.5706 15.4449C16.5706 14.3133 15.679 13.3927 14.5833 13.3927Z"
      fill="currentColor"
    />
  </svg>
)

/* Chevron-forward glyph for the tabs-overflow indicator. 21×21 to
 * match the Figma 75:12323 slot. */
const ChevronForwardGlyph = () => (
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" aria-hidden="true">
    <path
      d="M7.875 4.375L13.7813 10.5L7.875 16.625"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/* Help / question-mark glyph used in the PNL (ROE%) column header.
 * Stroked outline matches the lightweight 14×14 icon in Figma. */
const HelpGlyph = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M9.5 9.5a2.5 2.5 0 015 0c0 1.4-1 1.9-1.7 2.4-.5.4-.8.7-.8 1.3v.4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="12" cy="17" r="0.9" fill="currentColor" />
  </svg>
)

/* TP/SL action chip — Figma 72:13294. Tertiary surface with a 2px
 * inset bottom edge, primary60 label, 12px Kanit SemiBold. Built local
 * to avoid bending the shared Button primitive — the trading-row chip
 * is dimensionally smaller (h ≈ 24px) than any of Button's scales.
 *
 * Fixed `min-width` so the chip stays the same size across rows even
 * when its label renders through a translator (e.g. localized "TP/SL"
 * variants) — the parent ActionCell otherwise lets each row's chip
 * shrink to its own content. */
/* eslint-disable no-restricted-syntax -- TODO(design): need info-teal token in uikit */
const TpSlChip = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 64px;
  padding: 3px 8px 5px;
  border-radius: 8px;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.tertiary};
  color: #02919D;
  font-family: Kanit;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.12px;
  cursor: pointer;
  transition: opacity 0.12s, transform 0.04s;

  &:hover:not(:disabled) {
    opacity: 0.85;
  }
  &:active:not(:disabled) {
    transform: translateY(1px);
    border-bottom-width: 1px;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  html.dark & {
    color: #48D0DB;
  }
`
/* eslint-enable no-restricted-syntax */

/* Outlined Close button — Figma 72:13213. 2px primary stroke, no fill,
 * primary60 label. Same dimensions as TpSlChip so the pair lines up. */
/* eslint-disable no-restricted-syntax -- TODO(design): need info-teal token in uikit */
const CloseChip = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background: transparent;
  color: #02919D;
  font-family: Kanit;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.12px;
  cursor: pointer;
  transition: opacity 0.12s, background 0.12s;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primary}1A;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  html.dark & {
    color: #48D0DB;
  }
`
/* eslint-enable no-restricted-syntax */

/**
 * Bottom-panel tabs: Positions / Open Orders / History. Stateless apart
 * from tab view-state, which is controlled by the consumer (so it
 * survives remount / route changes if the consumer persists it).
 *
 * Per-row business actions (Close / Cancel / TP+SL editor) fire
 * callbacks — consumer owns the signed API calls + toast + modal. The
 * widget just renders.
 *
 * Auto-responsive: dispatches to {@link MobilePositionsPanel} when the
 * viewport is mobile (or when `isMobile` is forced via prop). The mobile
 * variant exposes a different tab set (`Open Orders | Positions | Assets
 * | TWAP`) and owns a full-page History sheet portal.
 */
export const PositionsPanel: React.FC<PositionsPanelProps> = (props) => {
  const { isMobile: isMobileBp } = useMatchBreakpoints()
  const isMobile = props.isMobile ?? isMobileBp
  if (isMobile) return <MobilePositionsPanel {...props} />
  return <DesktopPositionsPanel {...props} />
}

const DesktopPositionsPanel: React.FC<PositionsPanelProps> = ({
  tab,
  onTabChange,
  positions,
  openOrders,
  orderHistory = [],
  tradeHistory = [],
  transactionHistory = [],
  onShareTrade,
  useMarkPriceForSymbol,
  computeLiqPrice,
  onClosePosition,
  onEditTpSl,
  onCancelOrder,
  closingSymbol = null,
  cancellingOrderId = null,
  hideOtherSymbols = false,
  onHideOtherSymbolsChange,
  onCloseAll,
  onSharePnl,
  t = identity,
}) => {
  const theme = useTheme()
  const tabOrder: PositionsPanelTab[] = ['positions', 'orders', 'history', 'trades', 'transactions']
  const activeIndex = tabOrder.indexOf(tab)

  // Help-icon tooltip on the PNL (ROE%) column header. One-line variant
  // because the copy is short — keeps the bubble tight around the text.
  const { targetRef: pnlHelpRef, tooltip: pnlHelpNode } = useTooltip(
    t('Return on equity — uPnL ÷ initial margin.'),
    { placement: 'top', oneLine: true },
  )

  // Tabs-overflow chevron is driven by a CSS container query on
  // TabsHeader (see TabsChevronOverlay). No JS measurement needed.

  return (
    <Card>
      <TabsHeader>
        <TabsLeft>
          <UnderlineTabs
            activeIndex={activeIndex}
            onItemClick={(i) => onTabChange(tabOrder[i])}
            noBorder
          >
            <UnderlineTab>
              {t('Positions')} ({positions.length})
            </UnderlineTab>
            <UnderlineTab>
              {t('Open Orders')} ({openOrders.length})
            </UnderlineTab>
            <UnderlineTab>
              {t('Order History')} ({orderHistory.length})
            </UnderlineTab>
            <UnderlineTab>
              {t('Trade History')} ({tradeHistory.length})
            </UnderlineTab>
            <UnderlineTab>
              {t('Transaction History')} ({transactionHistory.length})
            </UnderlineTab>
          </UnderlineTabs>
          <TabsChevronOverlay data-overlay aria-hidden>
            <ChevronForwardGlyph />
          </TabsChevronOverlay>
        </TabsLeft>
        {tab === 'positions' && (
          <HeaderRightControls>
            <HideOtherChip
              role="button"
              tabIndex={0}
              onClick={(e) => {
                // Forward to the controlled state directly. Earlier we
                // relied solely on the implicit `<label><input>` click
                // association, but a sibling absolutely-positioned
                // overlay (TabsChevronOverlay) was visually adjacent to
                // the chip and intercepted some pointer events on
                // narrow containers — even though it set
                // `pointer-events: none`. Hooking the toggle here makes
                // the label click work regardless of DOM stacking.
                // PAN-11854.
                if ((e.target as HTMLElement).tagName === 'INPUT') return
                e.preventDefault()
                onHideOtherSymbolsChange?.(!hideOtherSymbols)
              }}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault()
                  onHideOtherSymbolsChange?.(!hideOtherSymbols)
                }
              }}
            >
              <Checkbox
                scale="sm"
                checked={hideOtherSymbols}
                onChange={(e) => onHideOtherSymbolsChange?.(e.target.checked)}
                onClick={(e) => e.stopPropagation()}
              />
              <span>{t('Hide Other Symbols')}</span>
            </HideOtherChip>
            {onCloseAll && (
              <CloseAllBtn
                type="button"
                onClick={onCloseAll}
                disabled={positions.length === 0}
              >
                {t('Close All')}
              </CloseAllBtn>
            )}
          </HeaderRightControls>
        )}
      </TabsHeader>

      <Body>
        {tab === 'positions' &&
          (positions.length === 0 ? (
            <Empty>
              <Text fontSize="12px" color="textSubtle">
                {t('No open positions')}
              </Text>
            </Empty>
          ) : (
            <>
              <PositionsHeaderRow>
                <Th>{t('Symbol')}</Th>
                <Th>{t('Size')}</Th>
                <Th>{t('Entry Price')}</Th>
                <Th>{t('Mark Price')}</Th>
                <Th>{t('Margin')}</Th>
                <Th>{t('Liq Price')}</Th>
                <Th>
                  {t('PNL (ROE%)')}
                  <HeaderHelp ref={pnlHelpRef} aria-label={t('PNL ROE% explanation')}>
                    <HelpGlyph />
                  </HeaderHelp>
                  {pnlHelpNode}
                </Th>
                <Th>{t('TP/SL')}</Th>
                <Th />
              </PositionsHeaderRow>
              <PositionsTable>
                {positions.map((p) => (
                  <RowGroup key={p.id}>
                    <PositionTableRow
                      p={p}
                      useMarkPriceForSymbol={useMarkPriceForSymbol}
                      computeLiqPrice={computeLiqPrice}
                      onClose={onClosePosition}
                      onEditTpSl={onEditTpSl}
                      onShare={onSharePnl}
                      closingSymbol={closingSymbol}
                      t={t}
                    />
                  </RowGroup>
                ))}
              </PositionsTable>
            </>
          ))}

        {tab === 'orders' &&
          (openOrders.length === 0 ? (
            <Empty>
              <Text fontSize="12px" color="textSubtle">
                {t('No open orders')}
              </Text>
            </Empty>
          ) : (
            <OrdersTable>
              <Th>{t('Symbol')}</Th>
              <Th>{t('Side')}</Th>
              <Th>{t('Type')}</Th>
              <Th>{t('Price')}</Th>
              <Th>{t('Size')}</Th>
              <Th>{t('Filled')}</Th>
              <Th>{t('Status')}</Th>
              <Th />
              {openOrders.map((o) => {
                const isCancelling = cancellingOrderId === o.id
                return (
                  <RowGroup key={o.id}>
                    <Td bold>{o.symbol}</Td>
                    <Td style={{ color: o.side === 'BUY' ? theme.colors.success : theme.colors.failure }}>
                      {o.side}
                    </Td>
                    <Td>{o.type}</Td>
                    <Td>{o.price}</Td>
                    <Td>{o.origQty}</Td>
                    <Td>{o.executedQty}</Td>
                    <Td>{o.status}</Td>
                    <ActionCell>
                      <Button
                        scale="xs"
                        variant="secondary"
                        disabled={isCancelling}
                        isLoading={isCancelling}
                        onClick={() => onCancelOrder(o)}
                      >
                        {t('Cancel')}
                      </Button>
                    </ActionCell>
                  </RowGroup>
                )
              })}
            </OrdersTable>
          ))}

        {tab === 'history' &&
          (orderHistory.length === 0 ? (
            <Empty>
              <Text fontSize="12px" color="textSubtle">
                {t('No order history')}
              </Text>
            </Empty>
          ) : (
            <OrderHistoryTable>
              <Th>{t('Time')}</Th>
              <Th>{t('Symbol')}</Th>
              <Th>{t('Side')}</Th>
              <Th>{t('Type')}</Th>
              <Th>{t('Price')}</Th>
              <Th>{t('Size')}</Th>
              <Th>{t('Filled')}</Th>
              <Th>{t('Status')}</Th>
              {orderHistory.map((o) => (
                <RowGroup key={o.id}>
                  <Td as="div">
                    <StackedTime>
                      <span>{o.date}</span>
                      <span>{o.time}</span>
                    </StackedTime>
                  </Td>
                  <Td bold>{o.symbol}</Td>
                  <Td style={{ color: o.side === 'BUY' ? theme.colors.success : theme.colors.failure }}>
                    {o.side}
                  </Td>
                  <Td>{o.type}</Td>
                  <Td>{o.price}</Td>
                  <Td>{o.origQty}</Td>
                  <Td>{o.executedQty}</Td>
                  <Td>{o.status}</Td>
                </RowGroup>
              ))}
            </OrderHistoryTable>
          ))}

        {tab === 'trades' &&
          (tradeHistory.length === 0 ? (
            <Empty>
              <Text fontSize="12px" color="textSubtle">
                {t('No trades yet')}
              </Text>
            </Empty>
          ) : (
            <TradesTable>
              <Th>{t('Time')}</Th>
              <Th>{t('Symbol')}</Th>
              <Th>{t('Price')}</Th>
              <Th>{t('Quantity')}</Th>
              <Th>{t('Fee')}</Th>
              <Th>{t('Realized profit')}</Th>
              {tradeHistory.map((tr) => {
                const sideColor = tr.side === 'BUY' ? theme.colors.success : theme.colors.failure
                const profitUp = tr.realizedProfit.startsWith('+')
                return (
                  <RowGroup key={tr.id}>
                    <Td as="div">
                      <StackedTime>
                        <span>{tr.date}</span>
                        <span>{tr.time}</span>
                      </StackedTime>
                    </Td>
                    <Td as="div">
                      <StackedSymbol>
                        <span>{tr.symbol}</span>
                        <span style={{ color: sideColor, fontSize: 12 }}>
                          {tr.side === 'BUY' ? t('Buy') : t('Sell')}
                        </span>
                      </StackedSymbol>
                    </Td>
                    <Td>{tr.price}</Td>
                    <Td>{tr.quantity}</Td>
                    <Td>{tr.fee}</Td>
                    <Td as="div">
                      <Flex alignItems="center" style={{ gap: 8 }}>
                        <span style={{ color: profitUp ? theme.colors.success : theme.colors.failure }}>
                          {tr.realizedProfit}
                        </span>
                        {onShareTrade && (
                          <ShareBtn
                            type="button"
                            onClick={() => onShareTrade(tr)}
                            aria-label={t('Share trade')}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                              <path
                                d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </ShareBtn>
                        )}
                      </Flex>
                    </Td>
                  </RowGroup>
                )
              })}
            </TradesTable>
          ))}

        {tab === 'transactions' &&
          (transactionHistory.length === 0 ? (
            <Empty>
              <Text fontSize="12px" color="textSubtle">
                {t('No transactions yet')}
              </Text>
            </Empty>
          ) : (
            <TxTable>
              <Th>{t('Time')}</Th>
              <Th>{t('Type')}</Th>
              <Th>{t('Amount')}</Th>
              <Th>{t('Symbol')}</Th>
              {transactionHistory.map((x) => (
                <RowGroup key={x.id}>
                  <Td as="div">
                    <StackedTime>
                      <span>{x.date}</span>
                      <span>{x.time}</span>
                    </StackedTime>
                  </Td>
                  <Td>{x.type}</Td>
                  <Td>{x.amount}</Td>
                  <Td>{x.symbol}</Td>
                </RowGroup>
              ))}
            </TxTable>
          ))}
      </Body>
    </Card>
  )
}

/* ──────────────────────────────────────────────────────────────
 * Mobile variant
 * ──────────────────────────────────────────────────────────────
 *
 * Replaces the four legacy classes from MobilePerpsPage.css:
 *   `mp-tabs`, `mp-tab`, `mp-filters`, `mp-empty` (+ their helpers)
 * plus the inline full-page `History` portal that previously lived in
 * MobilePerpsPage.tsx (~lines 587–792). All visuals are owned by the
 * widget so consumers don't reach into mp-* class names.
 */

/** Mobile tab strip — top of the panel, white-active + 2px primary underline. */
const MobileTabsBar = styled.nav`
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding: 0 12px;
`

const MobileTabBtn = styled.button<{ $active: boolean }>`
  border: 0;
  background: transparent;
  padding: 12px 8px;
  font-family: inherit;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  color: ${({ $active, theme }) => ($active ? theme.colors.text : theme.colors.textSubtle)};
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  &::after {
    content: '';
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: -1px;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    opacity: ${({ $active }) => ($active ? 1 : 0)};
  }
`

const MobileTabsSpacer = styled.span`
  flex: 1;
`

const MobileIconBtn = styled.button`
  border: 0;
  background: transparent;
  padding: 8px;
  color: ${({ theme }) => theme.colors.textSubtle};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

const MobileFiltersRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const MobileFiltersSep = styled.span`
  width: 1px;
  height: 16px;
  background: ${({ theme }) => theme.colors.cardBorder};
`

const MobileInstrumentBtn = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`

const MobileCheckLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
`

const MobileEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

/* ── Mobile position / open-order cards ─────────────────────── */
const MobileList = styled.div`
  display: flex;
  flex-direction: column;
`

const MobileCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  font-variant-numeric: tabular-nums;
`

const MobileCardHead = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const MobileCardSymbol = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

const MobileCardSide = styled.span<{ $side: 'BUY' | 'SELL' }>`
  font-size: 12px;
  font-weight: 500;
  color: ${({ $side, theme }) => ($side === 'BUY' ? theme.colors.success : theme.colors.failure)};
`

const MobileCardSpacer = styled.span`
  flex: 1;
`

const MobileCardPnl = styled.span<{ $up: boolean }>`
  font-size: 13px;
  font-weight: 600;
  color: ${({ $up, theme }) => ($up ? theme.colors.success : theme.colors.failure)};
`

const MobileCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px 12px;
  font-size: 12px;
`

const MobileCardCell = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.textSubtle};
  & > strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
  }
`

const MobileCardActions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
`

/** Wrapper that strips the desktop card chrome — the mobile page already
 *  separates this section visually with the tab strip's borders. */
const MobileRoot = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.card};
`

/* History portal */
const HistorySheet = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  background: ${({ theme }) => theme.colors.card};
  display: flex;
  flex-direction: column;
`

const HistorySheetHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  flex-shrink: 0;
`

const HistorySheetTitle = styled.span`
  flex: 1;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`

const HistorySheetClose = styled.button`
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSubtle};
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

const HistoryTabsBar = styled.nav`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding: 0 12px;
  flex-shrink: 0;
`

const HistoryTabBtn = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 12px 8px;
  border: 0;
  background: transparent;
  color: ${({ $active, theme }) => ($active ? theme.colors.text : theme.colors.textSubtle)};
  font-family: inherit;
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  cursor: pointer;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: -1px;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    opacity: ${({ $active }) => ($active ? 1 : 0)};
  }
`

const HistoryBody = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 0;
`

const HistoryEmpty = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
  padding: 48px 0;
`

const HistoryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 14px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  font-variant-numeric: tabular-nums;
  font-size: 13px;
  gap: 12px;
`

const HistoryRowMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`

const HistoryRowTitle = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
`

const HistoryRowMeta = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 12px;
`

const HistoryRowAside = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-shrink: 0;
`

interface MobileTabConfig {
  key: PositionsPanelTab
  label: string
  count?: number
  emptyText: string
}

const HISTORY_TABS: { key: PositionsHistoryTab; label: string; emptyKey: string }[] = [
  { key: 'orders', label: 'Order History', emptyKey: 'No order history yet' },
  { key: 'trades', label: 'Trade History', emptyKey: 'No trade history yet' },
  { key: 'tx', label: 'Transactions', emptyKey: 'No transactions yet' },
]

/**
 * Renders the History sheet portal — opened from the mobile tab strip's
 * clock button. Shows the same data already passed via
 * `orderHistory[]` / `tradeHistory[]` / `transactionHistory[]`,
 * presented in a narrow stacked layout.
 */
const MobileHistorySheet: React.FC<{
  open: boolean
  onClose: () => void
  tab: PositionsHistoryTab
  onTabChange: (tab: PositionsHistoryTab) => void
  orderHistory: OrderHistoryRow[]
  tradeHistory: TradeHistoryRow[]
  transactionHistory: TransactionHistoryRow[]
  t: (key: string) => string
}> = ({ open, onClose, tab, onTabChange, orderHistory, tradeHistory, transactionHistory, t }) => {
  const theme = useTheme()
  if (!open || typeof document === 'undefined') return null

  return createPortal(
    <HistorySheet role="dialog" aria-modal="true" aria-label={t('History')}>
      <HistorySheetHeader>
        <HistorySheetTitle>{t('History')}</HistorySheetTitle>
        <HistorySheetClose type="button" aria-label={t('Close')} onClick={onClose}>
          <CloseIcon width="20px" aria-hidden="true" />
        </HistorySheetClose>
      </HistorySheetHeader>

      <HistoryTabsBar role="tablist">
        {HISTORY_TABS.map((h) => (
          <HistoryTabBtn
            key={h.key}
            type="button"
            role="tab"
            aria-selected={tab === h.key}
            $active={tab === h.key}
            onClick={() => onTabChange(h.key)}
          >
            {t(h.label)}
          </HistoryTabBtn>
        ))}
      </HistoryTabsBar>

      <HistoryBody>
        {tab === 'orders' &&
          (orderHistory.length === 0 ? (
            <HistoryEmpty>{t('No order history yet')}</HistoryEmpty>
          ) : (
            orderHistory.map((o) => (
              <HistoryRow key={o.id}>
                <HistoryRowMain>
                  <HistoryRowTitle>
                    {o.symbol}{' '}
                    <span
                      style={{
                        color: o.side === 'BUY' ? theme.colors.success : theme.colors.failure,
                        fontWeight: 400,
                      }}
                    >
                      {o.side === 'BUY' ? t('Buy') : t('Sell')}
                    </span>
                  </HistoryRowTitle>
                  <HistoryRowMeta>
                    {o.date} {o.time}
                  </HistoryRowMeta>
                  <HistoryRowMeta>
                    {o.type} · {o.price} · {o.executedQty}/{o.origQty}
                  </HistoryRowMeta>
                </HistoryRowMain>
                <HistoryRowAside>
                  <span style={{ color: theme.colors.textSubtle, fontSize: 12 }}>{o.status}</span>
                </HistoryRowAside>
              </HistoryRow>
            ))
          ))}

        {tab === 'trades' &&
          (tradeHistory.length === 0 ? (
            <HistoryEmpty>{t('No trade history yet')}</HistoryEmpty>
          ) : (
            tradeHistory.map((tr) => {
              const profitUp = tr.realizedProfit.startsWith('+')
              return (
                <HistoryRow key={tr.id}>
                  <HistoryRowMain>
                    <HistoryRowTitle>
                      {tr.symbol}{' '}
                      <span
                        style={{
                          color: tr.side === 'BUY' ? theme.colors.success : theme.colors.failure,
                          fontWeight: 400,
                        }}
                      >
                        {tr.side === 'BUY' ? t('Buy') : t('Sell')}
                      </span>
                    </HistoryRowTitle>
                    <HistoryRowMeta>
                      {tr.date} {tr.time}
                    </HistoryRowMeta>
                    <HistoryRowMeta>
                      {tr.price} · {tr.quantity} · {t('fee')} {tr.fee}
                    </HistoryRowMeta>
                  </HistoryRowMain>
                  <HistoryRowAside>
                    <span
                      style={{
                        color: profitUp ? theme.colors.success : theme.colors.failure,
                        fontWeight: 600,
                      }}
                    >
                      {tr.realizedProfit}
                    </span>
                  </HistoryRowAside>
                </HistoryRow>
              )
            })
          ))}

        {tab === 'tx' &&
          (transactionHistory.length === 0 ? (
            <HistoryEmpty>{t('No transactions yet')}</HistoryEmpty>
          ) : (
            transactionHistory.map((x) => {
              const positive = x.amount.startsWith('+')
              return (
                <HistoryRow key={x.id}>
                  <HistoryRowMain>
                    <HistoryRowTitle>{x.type}</HistoryRowTitle>
                    <HistoryRowMeta>
                      {x.date} {x.time}
                    </HistoryRowMeta>
                  </HistoryRowMain>
                  <HistoryRowAside>
                    <span
                      style={{
                        color: positive ? theme.colors.success : theme.colors.failure,
                        fontWeight: 600,
                      }}
                    >
                      {x.amount}
                    </span>
                    <HistoryRowMeta>{x.symbol}</HistoryRowMeta>
                  </HistoryRowAside>
                </HistoryRow>
              )
            })
          ))}
      </HistoryBody>
    </HistorySheet>,
    document.body,
  )
}

/**
 * Single position card — split out so `useMarkPriceForSymbol` can be
 * called at a stable hook index per render (same reason as
 * `PositionTableRow` for the desktop table).
 */
const MobilePositionCard: React.FC<{
  p: PositionRow
  useMarkPriceForSymbol?: PositionsPanelProps['useMarkPriceForSymbol']
  computeLiqPrice?: PositionsPanelProps['computeLiqPrice']
  onClose: (p: PositionRow) => void
  onEditTpSl: (p: PositionRow, markPrice: number) => void
  closingSymbol?: string | null
  t: (key: string) => string
}> = ({ p, useMarkPriceForSymbol, computeLiqPrice, onClose, onEditTpSl, closingSymbol, t }) => {
  const markPrice = useMarkPriceForSymbol?.(p.symbol)
  const side: 'BUY' | 'SELL' = p.positionAmt >= 0 ? 'BUY' : 'SELL'

  const livePnl =
    Number.isFinite(markPrice) && Number.isFinite(p.entryPrice)
      ? (markPrice! - p.entryPrice) * p.positionAmt
      : Number(p.unrealizedProfit)

  const liq =
    Number.isFinite(p.entryPrice) && Number.isFinite(p.leverage)
      ? computeLiqPrice?.({ side, entryPrice: p.entryPrice, leverage: p.leverage })
      : undefined

  const isClosing = closingSymbol === p.symbol
  const sizeAbs = Math.abs(p.positionAmt)

  return (
    <MobileCard>
      <MobileCardHead>
        <MobileCardSymbol>{p.symbol}</MobileCardSymbol>
        <MobileCardSide $side={side}>
          {side === 'BUY' ? t('Long') : t('Short')} · {p.leverage}x
        </MobileCardSide>
        <MobileCardSpacer />
        <MobileCardPnl $up={livePnl >= 0}>
          {Number.isFinite(livePnl) ? `${livePnl >= 0 ? '+' : ''}${livePnl.toFixed(4)}` : '—'}
        </MobileCardPnl>
      </MobileCardHead>
      <MobileCardGrid>
        <MobileCardCell>
          <span>{t('Size')}</span>
          <strong>{sizeAbs}</strong>
        </MobileCardCell>
        <MobileCardCell>
          <span>{t('Entry')}</span>
          <strong>{Number.isFinite(p.entryPrice) ? p.entryPrice.toFixed(2) : '—'}</strong>
        </MobileCardCell>
        <MobileCardCell>
          <span>{t('Mark')}</span>
          <strong>
            {markPrice !== undefined && Number.isFinite(markPrice) ? markPrice.toFixed(2) : '—'}
          </strong>
        </MobileCardCell>
        <MobileCardCell>
          <span>{t('Liq')}</span>
          <strong>{liq ? liq.toFixed(2) : '—'}</strong>
        </MobileCardCell>
        <MobileCardCell>
          <span>{t('TP')}</span>
          <strong>{p.tpStopPrice ? Number(p.tpStopPrice).toFixed(2) : '—'}</strong>
        </MobileCardCell>
        <MobileCardCell>
          <span>{t('SL')}</span>
          <strong>{p.slStopPrice ? Number(p.slStopPrice).toFixed(2) : '—'}</strong>
        </MobileCardCell>
      </MobileCardGrid>
      <MobileCardActions>
        <Button
          scale="xs"
          variant="tertiary"
          onClick={() => onEditTpSl(p, markPrice ?? NaN)}
          disabled={!Number.isFinite(p.positionAmt) || p.positionAmt === 0}
        >
          {t('TP/SL')}
        </Button>
        <Button
          scale="xs"
          variant="secondary"
          onClick={() => onClose(p)}
          disabled={isClosing || !Number.isFinite(p.positionAmt) || p.positionAmt === 0}
          isLoading={isClosing}
        >
          {t('Close')}
        </Button>
      </MobileCardActions>
    </MobileCard>
  )
}

const MobileOrderCard: React.FC<{
  o: OpenOrderRow
  onCancel: (o: OpenOrderRow) => void
  cancellingOrderId?: OpenOrderRow['id'] | null
  t: (key: string) => string
}> = ({ o, onCancel, cancellingOrderId, t }) => {
  const isCancelling = cancellingOrderId === o.id
  return (
    <MobileCard>
      <MobileCardHead>
        <MobileCardSymbol>{o.symbol}</MobileCardSymbol>
        <MobileCardSide $side={o.side}>
          {o.side === 'BUY' ? t('Buy') : t('Sell')} · {o.type}
        </MobileCardSide>
        <MobileCardSpacer />
        <span style={{ fontSize: 12, color: 'inherit' }}>{o.status}</span>
      </MobileCardHead>
      <MobileCardGrid>
        <MobileCardCell>
          <span>{t('Price')}</span>
          <strong>{o.price}</strong>
        </MobileCardCell>
        <MobileCardCell>
          <span>{t('Filled')}</span>
          <strong>
            {o.executedQty}/{o.origQty}
          </strong>
        </MobileCardCell>
      </MobileCardGrid>
      <MobileCardActions>
        <Button
          scale="xs"
          variant="secondary"
          disabled={isCancelling}
          isLoading={isCancelling}
          onClick={() => onCancel(o)}
        >
          {t('Cancel')}
        </Button>
      </MobileCardActions>
    </MobileCard>
  )
}

const MobilePositionsPanel: React.FC<PositionsPanelProps> = ({
  tab,
  onTabChange,
  positions,
  openOrders,
  orderHistory = [],
  tradeHistory = [],
  transactionHistory = [],
  onClosePosition,
  onEditTpSl,
  onCancelOrder,
  useMarkPriceForSymbol,
  computeLiqPrice,
  closingSymbol,
  cancellingOrderId,
  positionsCount,
  hideOtherSymbols = false,
  onHideOtherSymbolsChange,
  instrumentFilterLabel,
  onInstrumentFilterClick,
  historyOpen = false,
  onHistoryToggle,
  historyTab = 'orders',
  onHistoryTabChange,
  t = identity,
}) => {
  // Mobile tab order — differs from desktop. Open Orders / Positions /
  // Assets / TWAP. Desktop tabs (history/trades/transactions) live in
  // the History sheet on mobile.
  const tabs: MobileTabConfig[] = [
    {
      key: 'orders',
      label: t('Open Orders'),
      count: openOrders.length,
      emptyText: t('No open order found'),
    },
    {
      key: 'positions',
      label: t('Positions'),
      count: positionsCount ?? positions.length,
      emptyText: t('No open positions'),
    },
    { key: 'assets', label: t('Assets'), emptyText: t('No assets to display') },
    { key: 'twap', label: t('TWAP'), emptyText: t('No TWAP orders') },
  ]

  const active = tabs.find((x) => x.key === tab) ?? tabs[0]

  const handleTabClick = (key: PositionsPanelTab) => {
    if (key !== tab) onTabChange(key)
  }

  return (
    <MobileRoot>
      <MobileTabsBar role="tablist">
        {tabs.map((c) => (
          <MobileTabBtn
            key={c.key}
            type="button"
            role="tab"
            aria-selected={c.key === tab}
            $active={c.key === tab}
            onClick={() => handleTabClick(c.key)}
          >
            {c.label}
            {typeof c.count === 'number' && c.count > 0 ? ` (${c.count})` : ''}
          </MobileTabBtn>
        ))}
        <MobileTabsSpacer />
        <MobileIconBtn
          type="button"
          aria-label={t('History')}
          onClick={() => onHistoryToggle?.(true)}
        >
          <HistoryIcon width="20px" aria-hidden="true" />
        </MobileIconBtn>
      </MobileTabsBar>

      <MobileFiltersRow>
        <MobileInstrumentBtn type="button" onClick={onInstrumentFilterClick}>
          {instrumentFilterLabel ?? t('All instruments')} <ChevronDownIcon width="14px" aria-hidden="true" />
        </MobileInstrumentBtn>
        <MobileFiltersSep />
        <MobileCheckLabel>
          <input
            type="checkbox"
            checked={hideOtherSymbols}
            onChange={(e) => onHideOtherSymbolsChange?.(e.target.checked)}
          />
          <span>{t('Hide other symbols')}</span>
        </MobileCheckLabel>
      </MobileFiltersRow>

      {/* Body: render rows when data exists for the active tab; fall
       *  back to the tab's empty-state text otherwise. Assets / TWAP
       *  data isn't surfaced through this widget yet — they always
       *  render the empty state. */}
      {tab === 'positions' && positions.length > 0 ? (
        <MobileList>
          {positions.map((p) => (
            <MobilePositionCard
              key={p.id}
              p={p}
              useMarkPriceForSymbol={useMarkPriceForSymbol}
              computeLiqPrice={computeLiqPrice}
              onClose={onClosePosition}
              onEditTpSl={onEditTpSl}
              closingSymbol={closingSymbol}
              t={t}
            />
          ))}
        </MobileList>
      ) : tab === 'orders' && openOrders.length > 0 ? (
        <MobileList>
          {openOrders.map((o) => (
            <MobileOrderCard
              key={o.id}
              o={o}
              onCancel={onCancelOrder}
              cancellingOrderId={cancellingOrderId}
              t={t}
            />
          ))}
        </MobileList>
      ) : (
        <MobileEmpty>{active.emptyText}</MobileEmpty>
      )}

      <MobileHistorySheet
        open={historyOpen}
        onClose={() => onHistoryToggle?.(false)}
        tab={historyTab}
        onTabChange={(next) => onHistoryTabChange?.(next)}
        orderHistory={orderHistory}
        tradeHistory={tradeHistory}
        transactionHistory={transactionHistory}
        t={t}
      />
    </MobileRoot>
  )
}
