import React from 'react'
import { css, styled } from 'styled-components'
import { PerpsPanel } from './primitives'

/**
 * Stateless Simple-mode positions / open-orders / history card. Visual is
 * a 1:1 port of the Figma table block from the original `SimplePerpsPage`.
 *
 * The widget is fully prop-driven — consumer formats every display
 * string, owns the active tab, and supplies row data + the close handler.
 * No data fetching, no theme overrides, no business logic.
 */

export type SimplePositionsTab = 'positions' | 'orders' | 'history'
export type SimplePositionDirection = 'up' | 'down' // up = long, down = short
export type SimplePositionLiqStatus = 'safe' | 'warn' | 'danger'

export interface SimplePositionRow {
  id: string
  symbol: string
  chainLabel: string
  iconColor?: string
  direction: SimplePositionDirection
  /** Pre-formatted leverage label shown next to direction (e.g. "100X"). */
  leverageText?: string
  unrealizedPnl: string
  pnlSign: 'positive' | 'negative' | 'zero'
  entryPrice: string
  liqPrice: string
  liqDistancePct: number
  liqStatus: SimplePositionLiqStatus
  liqStatusLabel: string
}

export interface SimpleHistoryRow {
  id: string
  symbol: string
  iconColor?: string
  direction: SimplePositionDirection
  /** Pre-formatted leverage label, e.g. "100X". */
  leverageText?: string
  /** Pre-formatted execution price, e.g. "$649.98". */
  price: string
  /** Pre-formatted base-asset quantity, e.g. "1.982". */
  quantity: string
  /** Fee amount (pre-formatted with sign), e.g. "-0.11412". */
  fee: string
  /** Currency the fee is denominated in (rendered semibold). */
  feeCurrency?: string
  /** Realized profit amount (pre-formatted with sign), e.g. "+200.091". */
  realizedProfit: string
  /** Drives the realized-profit color (green / pink / neutral). */
  realizedProfitSign: 'positive' | 'negative' | 'zero'
  /** Currency the profit is denominated in (rendered semibold). */
  realizedProfitCurrency?: string
  /** Pre-formatted timestamp, e.g. "2026-05-05". */
  time: string
}

export interface SimpleOpenOrderRow {
  id: string
  symbol: string
  iconColor?: string
  side: 'BUY' | 'SELL'
  type: string
  price: string
  origQty: string
  executedQty: string
}

export interface SimplePositionsCardProps {
  tab: SimplePositionsTab
  onTabChange: (tab: SimplePositionsTab) => void
  positions: readonly SimplePositionRow[]
  openOrders: readonly SimpleOpenOrderRow[]
  history: readonly SimpleHistoryRow[]
  /**
   * When set, replaces every tab's body with a centered "connect wallet"
   * message. Tabs remain interactive but all three render the same
   * placeholder. Pass an i18n-translated string from the consumer.
   */
  disconnectedMessage?: string
  onClosePosition: (id: string) => void
  onCancelOrder: (id: string) => void
  /**
   * When provided, renders a small share-PnL affordance next to the
   * unrealized PnL value. Omit to hide the icon entirely.
   */
  onSharePnl?: (id: string) => void
  /**
   * Optional row icon renderer; defaults to a colored letter chip from the
   * row's `iconColor` or a sensible per-symbol fallback.
   */
  renderTokenIcon?: (row: SimplePositionRow) => React.ReactNode
}

// ── Styled ────────────────────────────────────────────────────

const Card = styled(PerpsPanel)`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 24px;
  align-self: stretch;
  overflow: hidden;

  /* PerpsPanel injects an inner <div> — flatten so the table sits flush. */
  & > div {
    background: transparent;
    padding: 0;
  }
`

const TabsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 48px;
  padding: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  align-self: stretch;
`

const Tab = styled.button<{ $active?: boolean }>`
  display: flex;
  padding: ${({ $active }) => ($active ? '12px 12px 12px 16px' : '12px 12px')};
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 16px;
  background: transparent;
  cursor: pointer;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  line-height: 150%;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  color: ${({ $active, theme }) => ($active ? theme.colors.secondary : theme.colors.textSubtle)};
  &:hover { color: ${({ theme }) => theme.colors.text}; }
`

/* Wrapper that lets the desktop/laptop grid scroll horizontally when the
   parent container is narrower than the table's natural width. Prevents
   the close button from getting clipped at constrained widths and keeps
   sort headers reachable. Hidden on tablet — that breakpoint switches to
   the stacked-card layout below. */
const TableScroll = styled.div`
  width: 100%;
  overflow-x: auto;

  /* Force a non-overlay, layout-reserved scrollbar so the track is always
     visible at the bottom — matches the Figma design that draws a
     persistent purple scrollbar. The 8px horizontal track margin keeps
     the scrollbar visually inset from the card edges without padding the
     table itself, so row hover backgrounds can extend edge-to-edge. */
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.input};
    border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
    border-radius: 16px;
    margin: 0 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.textSubtle};
    border-radius: 8px;
  }

  @media (max-width: 967.98px) {
    display: none;
  }
`

const PositionsTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 64px;
  min-width: 794px;

  @media (min-width: 968px) and (max-width: 1199.98px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 162px 64px;
  }
`

/* A single logical row that re-uses the parent table's column tracks via
   CSS subgrid. Letting each row be its own grid container is what enables
   the row-level :hover state — direct grid children can't catch hover
   for "the whole row", but a subgrid wrapper can. */
const TableRow = styled.div<{ $isHeader?: boolean }>`
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: subgrid;
  align-items: center;

  ${({ $isHeader, theme }) =>
    !$isHeader &&
    css`
      &:hover {
        background: ${theme.colors.cardSecondary};
      }
    `}
`

/* Tablet-only stacked card per position. Shows the same data as the
   desktop grid but as a vertical card with header (icon + name + PnL),
   divider, stat rows (Entry/Liq/Distance), and a full-width Close button.
   Hidden on desktop and laptop. */
const TabletPositionsList = styled.div`
  display: none;

  @media (max-width: 967.98px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
  }
`

const TabletPositionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  padding: 16px;
  border-radius: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.cardSecondary};
  gap: 16px;
`

const TabletPositionHeader = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
`

const TabletPositionTokenIcon = styled.span<{ $color: string }>`
  display: inline-flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
  margin-right: 12px;
`

const TabletPositionMeta = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const TabletPositionSymbol = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`

const TabletPositionDirection = styled.span<{ $direction: SimplePositionDirection }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({ $direction }) => ($direction === 'up' ? '#129E7D' : '#ED4B9E')};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 12px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.24px;
  text-transform: uppercase;

  html.dark & {
    color: ${({ $direction }) => ($direction === 'up' ? '#3DDBB5' : '#ED4B9E')};
  }
`

const TabletPositionPnl = styled.span<{ $sign: 'positive' | 'negative' | 'zero' }>`
  color: ${({ $sign, theme }) =>
    $sign === 'positive' ? '#129E7D' : $sign === 'negative' ? '#ED4B9E' : theme.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  font-variant-numeric: tabular-nums;

  html.dark & {
    color: ${({ $sign, theme }) =>
      $sign === 'positive' ? '#3DDBB5' : $sign === 'negative' ? '#ED4B9E' : theme.colors.text};
  }
`

const TabletPositionDivider = styled.span`
  display: block;
  height: 1px;
  align-self: stretch;
  background: ${({ theme }) => theme.colors.cardBorder};
`

const TabletPositionStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;
`

const TabletPositionStatRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`

const TabletPositionStatLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`

const TabletPositionStatValue = styled.span<{ $danger?: boolean; $safe?: boolean }>`
  color: ${({ $danger, $safe, theme }) =>
    $safe ? '#129E7D' : $danger ? '#ED4B9E' : theme.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  font-variant-numeric: tabular-nums;
`

const TabletPositionLiqBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;
`

const TabletPositionLiqTrack = styled.div`
  height: 12px;
  align-self: stretch;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.input};
  overflow: hidden;
`

const TabletPositionLiqFill = styled.div<{ $pct: number; $status: SimplePositionLiqStatus }>`
  height: 100%;
  width: ${({ $pct }) => `${Math.max(0, Math.min(100, $pct))}%`};
  background: ${({ $status, theme }) =>
    $status === 'safe'
      ? theme.colors.success
      : $status === 'warn'
        ? theme.colors.warning
        : theme.colors.failure};
`

const TabletPositionCloseBtn = styled.button`
  display: flex;
  height: 48px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border-top: 1px solid #ED4B9E;
  border-right: 1px solid #ED4B9E;
  border-bottom: 2px solid #ED4B9E;
  border-left: 1px solid #ED4B9E;
  background: transparent;
  color: #ED4B9E;
  font-family: Kanit;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &:hover { background: #FFF0F9; }
`

const OrdersTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 64px;
  min-width: 794px;

  @media (max-width: 967.98px) {
    display: none;
  }
`

const TabletOrdersList = styled.div`
  display: none;

  @media (max-width: 967.98px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
  }
`

const TabletOrderHeader = styled(TabletPositionHeader)``

const TabletOrderSideBadge = styled.span<{ $side: 'BUY' | 'SELL' }>`
  display: inline-flex;
  align-items: center;
  margin-left: auto;
  color: ${({ $side, theme }) => ($side === 'BUY' ? theme.colors.success : theme.colors.failure)};
  font-family: Kanit;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  font-variant-numeric: tabular-nums;
`

const TabletOrderCancelBtn = styled(TabletPositionCloseBtn)``

const HistoryTable = styled.div`
  display: grid;
  grid-template-columns: 190px 1fr 1fr 1fr 1fr 1fr;
  min-width: 794px;

  @media (max-width: 967.98px) {
    display: none;
  }
`

const TabletHistoryList = styled(TabletOrdersList)``

/* Currency suffix shown next to fee / realized-profit values in semibold,
   per Figma 86:30657 ("-0.11412 USDT" with "USDT" emphasised). */
const CurrencyUnit = styled.span`
  font-weight: 600;
`

const Th = styled.div<{ $align?: 'left' | 'right' }>`
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.secondary};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.24px;
  text-transform: uppercase;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({ $align }) => ($align === 'right' ? 'flex-end' : 'flex-start')};
`

const SortGlyphWrap = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.colors.textDisabled};
`

const SortGlyph: React.FC = () => (
  <SortGlyphWrap>
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M8.76686 12.7917C8.66711 12.7917 8.56945 12.7727 8.47388 12.7347C8.3784 12.6965 8.29324 12.6401 8.21838 12.5653L6.12669 10.4653C5.97706 10.3102 5.90327 10.1287 5.90531 9.92095C5.90745 9.71319 5.98611 9.53449 6.14127 9.38487C6.2909 9.23943 6.47095 9.16568 6.68144 9.16364C6.89193 9.1615 7.07198 9.23524 7.22161 9.38487L7.99394 10.1572V7.17331C7.99394 6.95854 8.06909 6.77606 8.2194 6.62585C8.36961 6.47554 8.55209 6.40039 8.76686 6.40039C8.98162 6.40039 9.16411 6.47554 9.31431 6.62585C9.46462 6.77606 9.53977 6.95854 9.53977 7.17331V10.1572L10.3121 9.38487C10.4575 9.23943 10.6351 9.1667 10.845 9.1667C11.0549 9.1667 11.2374 9.23943 11.3924 9.38487C11.5476 9.53449 11.6252 9.71562 11.6252 9.92824C11.6252 10.1409 11.5504 10.3248 11.4008 10.4799L9.31534 12.5653C9.24047 12.6401 9.15531 12.6965 9.05984 12.7347C8.96427 12.7727 8.86661 12.7917 8.76686 12.7917Z"
        fill="currentColor"
      />
      <path
        d="M5.23333 7.59979C5.01857 7.59979 4.83608 7.52464 4.68588 7.37433C4.53557 7.22412 4.46042 7.04163 4.46042 6.82687V3.84298L3.68808 4.61531C3.54274 4.76075 3.36511 4.83348 3.15521 4.83348C2.94531 4.83348 2.76282 4.76075 2.60775 4.61531C2.45258 4.46568 2.375 4.28456 2.375 4.07193C2.375 3.85931 2.44981 3.67541 2.59944 3.52025L4.68485 1.43483C4.75972 1.36007 4.84488 1.30363 4.94035 1.26552C5.03592 1.2275 5.13358 1.2085 5.23333 1.2085C5.33308 1.2085 5.43074 1.2275 5.52631 1.26552C5.62178 1.30363 5.70695 1.36007 5.78181 1.43483L7.8735 3.53483C8.02312 3.69 8.09692 3.87146 8.09488 4.07922C8.09274 4.28699 8.01408 4.46568 7.85892 4.61531C7.70929 4.76075 7.52924 4.8345 7.31875 4.83654C7.10826 4.83868 6.92821 4.76493 6.77858 4.61531L6.00625 3.84298V6.82687C6.00625 7.04163 5.9311 7.22412 5.78079 7.37433C5.63058 7.52464 5.4481 7.59979 5.23333 7.59979Z"
        fill="currentColor"
      />
    </svg>
  </SortGlyphWrap>
)

const SortBtn = styled.button`
  display: flex;
  padding: 1px 2px 3px 2px;
  align-items: flex-start;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.20);
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.tertiary};
  cursor: pointer;
  &:hover { filter: brightness(0.97); }
`

const Td = styled.div`
  padding: 16px;
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-align: right;
  font-variant-numeric: tabular-nums;
`

/* Fee values are always rendered in the pink "destructive" color since
   they represent a cost (consistent across positive rebates too — the
   product treats fees as a single visual category). */
const FeeCell = styled(Td)`
  color: #ED4B9E;
`

const RealizedProfitCell = styled(Td)<{ $sign: 'positive' | 'negative' | 'zero' }>`
  color: ${({ $sign, theme }) =>
    $sign === 'positive'
      ? '#129E7D'
      : $sign === 'negative'
        ? '#ED4B9E'
        : theme.colors.text};

  html.dark & {
    color: ${({ $sign, theme }) =>
      $sign === 'positive'
        ? '#3DDBB5'
        : $sign === 'negative'
          ? '#ED4B9E'
          : theme.colors.text};
  }
`

const TokenCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px;
  & > :first-child {
    flex: 0 0 40px;
    width: 40px;
    height: 40px;
  }
  & > :first-child img,
  & > :first-child svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`

const TokenIcon = styled.span<{ $color: string }>`
  display: inline-flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  color: #fff;
  font-weight: 700;
  font-size: 14px;
`

const TokenMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const TokenSymbol = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  text-overflow: ellipsis;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`

const DirectionLabel = styled.span<{ $direction: SimplePositionDirection }>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: ${({ $direction }) => ($direction === 'up' ? '#129E7D' : '#ED4B9E')};
  font-feature-settings: 'liga' off;
  text-overflow: ellipsis;
  font-family: Kanit;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.24px;
  text-transform: uppercase;
  white-space: nowrap;

  html.dark & {
    color: ${({ $direction }) => ($direction === 'up' ? '#3DDBB5' : '#ED4B9E')};
  }
`

const PnlCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  padding: 16px;
`

const PnlValue = styled.span<{ $sign: 'positive' | 'negative' | 'zero' }>`
  color: ${({ $sign, theme }) =>
    $sign === 'positive'
      ? '#129E7D'
      : $sign === 'negative'
        ? '#ED4B9E'
        : theme.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;

  html.dark & {
    color: ${({ $sign, theme }) =>
      $sign === 'positive'
        ? '#3DDBB5'
        : $sign === 'negative'
          ? '#ED4B9E'
          : theme.colors.text};
  }
`

const SharePnlBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 21px;
  height: 21px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSubtle};
  cursor: pointer;
  border-radius: 4px;
  &:hover { color: ${({ theme }) => theme.colors.text}; }
`

const LiqDistance = styled(Td)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`

const LiqTrack = styled.div`
  position: relative;
  width: 100px;
  height: 6px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  background: ${({ theme }) => theme.colors.input};
  overflow: hidden;
  box-shadow: inset 0 2px 0 -1px rgba(0, 0, 0, 0.06);
`

const LiqFill = styled.div<{ $pct: number; $status: SimplePositionLiqStatus }>`
  height: 100%;
  width: ${({ $pct }) => `${Math.max(0, Math.min(100, $pct))}%`};
  background: ${({ $status, theme }) =>
    $status === 'safe'
      ? 'linear-gradient(to right, #34C49E, #6FBF81)'
      : $status === 'warn'
        ? theme.colors.warning
        : theme.colors.failure};
  border-radius: 999px;
`

const CloseBtn = styled.button`
  display: flex;
  width: 32px;
  height: 32px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  aspect-ratio: 1 / 1;
  margin: 16px;
  border-radius: 8px;
  border-top: 1px solid #ED4B9E;
  border-right: 1px solid #ED4B9E;
  border-bottom: 2px solid #ED4B9E;
  border-left: 1px solid #ED4B9E;
  background: #FFF0F9;
  color: #ED4B9E;
  cursor: pointer;
  &:hover { filter: brightness(0.97); }

  html.dark & {
    background: #3E1C39;
  }
`

const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;
  padding: 16px;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

/* Disconnected-wallet placeholder. Sits in place of any tab's body and
   matches Figma 85:30426: 48px vertical padding, centered text in
   theme.colors.textSubtle. */
const DisconnectedBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  padding: 48px 16px;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-family: Kanit;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
`

const SideText = styled.span<{ $side: 'BUY' | 'SELL' }>`
  color: ${({ $side, theme }) => ($side === 'BUY' ? theme.colors.success : theme.colors.failure)};
  font-weight: 600;
`

// Default per-symbol icon palette. These are visual-only fallbacks — the
// consumer can override per-row via `iconColor` or replace with
// `renderTokenIcon` entirely.
const DEFAULT_ICON_COLORS: Record<string, string> = {
  BNB: '#F0B90B',
  BTC: '#F7931A',
  ETH: '#627EEA',
  USDC: '#2775CA',
  USDT: '#26A17B',
  CAKE: '#23CAD5',
}

const defaultIconColor = (symbol: string): string =>
  DEFAULT_ICON_COLORS[symbol.toUpperCase()] ?? '#7A6EAA'

const directionLabel = (d: SimplePositionDirection) => (d === 'up' ? 'Up' : 'Down')

const CloseIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
)

const ShareGlyph: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 16.1162C17.24 16.1162 16.56 16.4162 16.04 16.8862L8.91 12.7362C8.96 12.5062 9 12.2762 9 12.0362C9 11.7962 8.96 11.5662 8.91 11.3362L15.96 7.22619C16.5 7.72619 17.21 8.03619 18 8.03619C19.66 8.03619 21 6.69619 21 5.03619C21 3.37619 19.66 2.03619 18 2.03619C16.34 2.03619 15 3.37619 15 5.03619C15 5.27619 15.04 5.50619 15.09 5.73619L8.04 9.84619C7.5 9.34619 6.79 9.03619 6 9.03619C4.34 9.03619 3 10.3762 3 12.0362C3 13.6962 4.34 15.0362 6 15.0362C6.79 15.0362 7.5 14.7262 8.04 14.2262L15.16 18.3862C15.11 18.5962 15.08 18.8162 15.08 19.0362C15.08 20.6462 16.39 21.9562 18 21.9562C19.61 21.9562 20.92 20.6462 20.92 19.0362C20.92 17.4262 19.61 16.1162 18 16.1162Z" />
  </svg>
)

// ── Component ───────────────────────────────────────────────────

export const SimplePositionsCard: React.FC<SimplePositionsCardProps> = ({
  tab,
  onTabChange,
  positions,
  openOrders,
  history,
  disconnectedMessage,
  onClosePosition,
  onCancelOrder,
  onSharePnl,
  renderTokenIcon,
}) => {
  return (
    <Card>
      <TabsRow role="tablist">
        <Tab
          type="button"
          role="tab"
          aria-selected={tab === 'positions'}
          $active={tab === 'positions'}
          onClick={() => onTabChange('positions')}
        >
          Positions
        </Tab>
        <Tab
          type="button"
          role="tab"
          aria-selected={tab === 'orders'}
          $active={tab === 'orders'}
          onClick={() => onTabChange('orders')}
        >
          Open Orders
        </Tab>
        <Tab
          type="button"
          role="tab"
          aria-selected={tab === 'history'}
          $active={tab === 'history'}
          onClick={() => onTabChange('history')}
        >
          Transaction history
        </Tab>
      </TabsRow>

      {disconnectedMessage ? (
        <DisconnectedBlock>{disconnectedMessage}</DisconnectedBlock>
      ) : (
        <>
      {tab === 'positions' && positions.length > 0 && (
        <TabletPositionsList>
          {positions.map((row) => (
            <TabletPositionCard key={`tablet-${row.id}`}>
              <TabletPositionHeader>
                {renderTokenIcon?.(row) ?? (
                  <TabletPositionTokenIcon $color={row.iconColor ?? defaultIconColor(row.symbol)}>
                    {row.symbol.slice(0, 1)}
                  </TabletPositionTokenIcon>
                )}
                <TabletPositionMeta>
                  <TabletPositionSymbol>{row.symbol}</TabletPositionSymbol>
                  <TabletPositionDirection $direction={row.direction}>
                    {directionLabel(row.direction)}
                    {row.leverageText ? ` · ${row.leverageText}` : ''}
                  </TabletPositionDirection>
                </TabletPositionMeta>
                <TabletPositionPnl $sign={row.pnlSign}>{row.unrealizedPnl}</TabletPositionPnl>
              </TabletPositionHeader>
              <TabletPositionDivider />
              <TabletPositionStats>
                <TabletPositionStatRow>
                  <TabletPositionStatLabel>Entry Price</TabletPositionStatLabel>
                  <TabletPositionStatValue>{row.entryPrice}</TabletPositionStatValue>
                </TabletPositionStatRow>
                <TabletPositionStatRow>
                  <TabletPositionStatLabel>Liq Price</TabletPositionStatLabel>
                  <TabletPositionStatValue>{row.liqPrice}</TabletPositionStatValue>
                </TabletPositionStatRow>
                <TabletPositionLiqBar>
                  <TabletPositionStatRow>
                    <TabletPositionStatLabel>Distance to Liq</TabletPositionStatLabel>
                    <TabletPositionStatValue $safe={row.liqStatus === 'safe'} $danger={row.liqStatus === 'danger'}>
                      {row.liqStatusLabel}
                    </TabletPositionStatValue>
                  </TabletPositionStatRow>
                  <TabletPositionLiqTrack>
                    <TabletPositionLiqFill $pct={row.liqDistancePct} $status={row.liqStatus} />
                  </TabletPositionLiqTrack>
                </TabletPositionLiqBar>
              </TabletPositionStats>
              <TabletPositionCloseBtn type="button" onClick={() => onClosePosition(row.id)}>
                Close
              </TabletPositionCloseBtn>
            </TabletPositionCard>
          ))}
        </TabletPositionsList>
      )}

      {tab === 'positions' &&
        (positions.length === 0 ? (
          <Empty>No open positions</Empty>
        ) : (
          <TableScroll>
          <PositionsTable role="table">
            <TableRow $isHeader role="row">
              <Th>Token</Th>
              <Th $align="right">
                Unrealized PnL
                <SortBtn type="button" aria-label="Sort by unrealized PnL"><SortGlyph /></SortBtn>
              </Th>
              <Th $align="right">
                Entry Price
                <SortBtn type="button" aria-label="Sort by entry price"><SortGlyph /></SortBtn>
              </Th>
              <Th $align="right">
                Liq. Price
                <SortBtn type="button" aria-label="Sort by liq. price"><SortGlyph /></SortBtn>
              </Th>
              <Th $align="right">
                Distance to Liq
                <SortBtn type="button" aria-label="Sort by distance to liq"><SortGlyph /></SortBtn>
              </Th>
              <Th />
            </TableRow>
            {positions.map((row) => (
              <TableRow key={row.id} role="row">
                <TokenCell>
                  {/* Returning null/undefined from `renderTokenIcon` defers
                      to the default colored-letter chip — lets consumers
                      wire in a logo lookup that may not have an entry for
                      every symbol (e.g. brand-new listings before Aster's
                      logo CDN updates). */}
                  {renderTokenIcon?.(row) ?? (
                    <TokenIcon $color={row.iconColor ?? defaultIconColor(row.symbol)}>
                      {row.symbol.slice(0, 1)}
                    </TokenIcon>
                  )}
                  <TokenMeta>
                    <TokenSymbol>{row.symbol}</TokenSymbol>
                    <DirectionLabel $direction={row.direction}>
                      {directionLabel(row.direction)}
                      {row.leverageText ? ` | ${row.leverageText}` : ''}
                    </DirectionLabel>
                  </TokenMeta>
                </TokenCell>
                <PnlCell>
                  <PnlValue $sign={row.pnlSign}>{row.unrealizedPnl}</PnlValue>
                  {onSharePnl && (
                    <SharePnlBtn
                      type="button"
                      aria-label="Share PnL"
                      onClick={() => onSharePnl(row.id)}
                    >
                      <ShareGlyph />
                    </SharePnlBtn>
                  )}
                </PnlCell>
                <Td>{row.entryPrice}</Td>
                <Td>{row.liqPrice}</Td>
                <LiqDistance>
                  <LiqTrack>
                    <LiqFill $pct={row.liqDistancePct} $status={row.liqStatus} />
                  </LiqTrack>
                  <span>{row.liqStatusLabel}</span>
                </LiqDistance>
                <CloseBtn
                  type="button"
                  aria-label="Close position"
                  onClick={() => onClosePosition(row.id)}
                >
                  <CloseIcon />
                </CloseBtn>
              </TableRow>
            ))}
          </PositionsTable>
          </TableScroll>
        ))}

      {tab === 'orders' && openOrders.length > 0 && (
        <TabletOrdersList>
          {openOrders.map((o) => (
            <TabletPositionCard key={`tablet-${o.id}`}>
              <TabletOrderHeader>
                <TabletPositionTokenIcon $color={o.iconColor ?? defaultIconColor(o.symbol)}>
                  {o.symbol.slice(0, 1)}
                </TabletPositionTokenIcon>
                <TabletPositionMeta>
                  <TabletPositionSymbol>{o.symbol}</TabletPositionSymbol>
                </TabletPositionMeta>
                <TabletOrderSideBadge $side={o.side}>
                  {o.side === 'BUY' ? 'Buy' : 'Sell'}
                </TabletOrderSideBadge>
              </TabletOrderHeader>
              <TabletPositionDivider />
              <TabletPositionStats>
                <TabletPositionStatRow>
                  <TabletPositionStatLabel>Type</TabletPositionStatLabel>
                  <TabletPositionStatValue>{o.type}</TabletPositionStatValue>
                </TabletPositionStatRow>
                <TabletPositionStatRow>
                  <TabletPositionStatLabel>Price</TabletPositionStatLabel>
                  <TabletPositionStatValue>{o.price}</TabletPositionStatValue>
                </TabletPositionStatRow>
                <TabletPositionStatRow>
                  <TabletPositionStatLabel>Size</TabletPositionStatLabel>
                  <TabletPositionStatValue>{o.origQty}</TabletPositionStatValue>
                </TabletPositionStatRow>
                <TabletPositionStatRow>
                  <TabletPositionStatLabel>Filled</TabletPositionStatLabel>
                  <TabletPositionStatValue>{`${o.executedQty}/${o.origQty}`}</TabletPositionStatValue>
                </TabletPositionStatRow>
              </TabletPositionStats>
              <TabletOrderCancelBtn type="button" onClick={() => onCancelOrder(o.id)}>
                Cancel
              </TabletOrderCancelBtn>
            </TabletPositionCard>
          ))}
        </TabletOrdersList>
      )}

      {tab === 'orders' &&
        (openOrders.length === 0 ? (
          <Empty>No open orders</Empty>
        ) : (
          <TableScroll>
          <OrdersTable role="table">
            <TableRow $isHeader role="row">
              <Th>Token</Th>
              <Th $align="right">
                Side
                <SortBtn type="button" aria-label="Sort by side"><SortGlyph /></SortBtn>
              </Th>
              <Th $align="right">
                Type
                <SortBtn type="button" aria-label="Sort by type"><SortGlyph /></SortBtn>
              </Th>
              <Th $align="right">
                Price
                <SortBtn type="button" aria-label="Sort by price"><SortGlyph /></SortBtn>
              </Th>
              <Th $align="right">
                Size
                <SortBtn type="button" aria-label="Sort by size"><SortGlyph /></SortBtn>
              </Th>
              <Th $align="right">
                Filled
                <SortBtn type="button" aria-label="Sort by filled"><SortGlyph /></SortBtn>
              </Th>
              <Th />
            </TableRow>
            {openOrders.map((o) => (
              <TableRow key={o.id} role="row">
                <TokenCell>
                  <TokenIcon $color={o.iconColor ?? defaultIconColor(o.symbol)}>
                    {o.symbol.slice(0, 1)}
                  </TokenIcon>
                  <TokenMeta>
                    <TokenSymbol>{o.symbol}</TokenSymbol>
                  </TokenMeta>
                </TokenCell>
                <Td>
                  <SideText $side={o.side}>{o.side === 'BUY' ? 'Buy' : 'Sell'}</SideText>
                </Td>
                <Td>{o.type}</Td>
                <Td>{o.price}</Td>
                <Td>{o.origQty}</Td>
                <Td>{`${o.executedQty}/${o.origQty}`}</Td>
                <CloseBtn
                  type="button"
                  aria-label="Cancel order"
                  onClick={() => onCancelOrder(o.id)}
                >
                  <CloseIcon />
                </CloseBtn>
              </TableRow>
            ))}
          </OrdersTable>
          </TableScroll>
        ))}

      {tab === 'history' && history.length > 0 && (
        <TabletHistoryList>
          {history.map((h) => (
            <TabletPositionCard key={`tablet-${h.id}`}>
              <TabletPositionHeader>
                <TabletPositionTokenIcon $color={h.iconColor ?? defaultIconColor(h.symbol)}>
                  {h.symbol.slice(0, 1)}
                </TabletPositionTokenIcon>
                <TabletPositionMeta>
                  <TabletPositionSymbol>{h.symbol}</TabletPositionSymbol>
                  <TabletPositionDirection $direction={h.direction}>
                    {directionLabel(h.direction)}
                    {h.leverageText ? ` · ${h.leverageText}` : ''}
                  </TabletPositionDirection>
                </TabletPositionMeta>
              </TabletPositionHeader>
              <TabletPositionDivider />
              <TabletPositionStats>
                <TabletPositionStatRow>
                  <TabletPositionStatLabel>Price</TabletPositionStatLabel>
                  <TabletPositionStatValue>{h.price}</TabletPositionStatValue>
                </TabletPositionStatRow>
                <TabletPositionStatRow>
                  <TabletPositionStatLabel>Quantity</TabletPositionStatLabel>
                  <TabletPositionStatValue>{h.quantity}</TabletPositionStatValue>
                </TabletPositionStatRow>
                <TabletPositionStatRow>
                  <TabletPositionStatLabel>Fee</TabletPositionStatLabel>
                  <TabletPositionStatValue $danger>
                    {h.fee}
                    {h.feeCurrency && (
                      <>
                        {' '}
                        <CurrencyUnit>{h.feeCurrency}</CurrencyUnit>
                      </>
                    )}
                  </TabletPositionStatValue>
                </TabletPositionStatRow>
                <TabletPositionStatRow>
                  <TabletPositionStatLabel>Realized Profit</TabletPositionStatLabel>
                  <TabletPositionStatValue
                    $safe={h.realizedProfitSign === 'positive'}
                    $danger={h.realizedProfitSign === 'negative'}
                  >
                    {h.realizedProfit}
                    {h.realizedProfitCurrency && (
                      <>
                        {' '}
                        <CurrencyUnit>{h.realizedProfitCurrency}</CurrencyUnit>
                      </>
                    )}
                  </TabletPositionStatValue>
                </TabletPositionStatRow>
                <TabletPositionStatRow>
                  <TabletPositionStatLabel>Time</TabletPositionStatLabel>
                  <TabletPositionStatValue>{h.time}</TabletPositionStatValue>
                </TabletPositionStatRow>
              </TabletPositionStats>
            </TabletPositionCard>
          ))}
        </TabletHistoryList>
      )}

      {tab === 'history' &&
        (history.length === 0 ? (
          <Empty>No transaction history</Empty>
        ) : (
          <TableScroll>
          <HistoryTable role="table">
            <TableRow $isHeader role="row">
              <Th>Token</Th>
              <Th $align="right">
                Price
                <SortBtn type="button" aria-label="Sort by price"><SortGlyph /></SortBtn>
              </Th>
              <Th $align="right">
                Quantity
                <SortBtn type="button" aria-label="Sort by quantity"><SortGlyph /></SortBtn>
              </Th>
              <Th $align="right">
                Fee
                <SortBtn type="button" aria-label="Sort by fee"><SortGlyph /></SortBtn>
              </Th>
              <Th $align="right">
                Realized Profit
                <SortBtn type="button" aria-label="Sort by realized profit"><SortGlyph /></SortBtn>
              </Th>
              <Th $align="right">
                Time
                <SortBtn type="button" aria-label="Sort by time"><SortGlyph /></SortBtn>
              </Th>
            </TableRow>
            {history.map((h) => (
              <TableRow key={h.id} role="row">
                <TokenCell>
                  <TokenIcon $color={h.iconColor ?? defaultIconColor(h.symbol)}>
                    {h.symbol.slice(0, 1)}
                  </TokenIcon>
                  <TokenMeta>
                    <TokenSymbol>{h.symbol}</TokenSymbol>
                    <DirectionLabel $direction={h.direction}>
                      {directionLabel(h.direction)}
                      {h.leverageText ? ` | ${h.leverageText}` : ''}
                    </DirectionLabel>
                  </TokenMeta>
                </TokenCell>
                <Td>{h.price}</Td>
                <Td>{h.quantity}</Td>
                <FeeCell>
                  {h.fee}
                  {h.feeCurrency && (
                    <>
                      {' '}
                      <CurrencyUnit>{h.feeCurrency}</CurrencyUnit>
                    </>
                  )}
                </FeeCell>
                <RealizedProfitCell $sign={h.realizedProfitSign}>
                  {h.realizedProfit}
                  {h.realizedProfitCurrency && (
                    <>
                      {' '}
                      <CurrencyUnit>{h.realizedProfitCurrency}</CurrencyUnit>
                    </>
                  )}
                </RealizedProfitCell>
                <Td>{h.time}</Td>
              </TableRow>
            ))}
          </HistoryTable>
          </TableScroll>
        ))}
        </>
      )}
    </Card>
  )
}
