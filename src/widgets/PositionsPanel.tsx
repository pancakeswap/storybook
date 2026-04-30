import React from 'react'
import { createPortal } from 'react-dom'
import { css, styled, useTheme } from 'styled-components'
import { Flex } from '../primitives/Box'
import { Button } from '../primitives/Button'
import { Text } from '../primitives/Text'
import { ChevronDownIcon, CloseIcon, HistoryIcon } from '../primitives/Icons'
import { useMatchBreakpoints } from '../contexts'
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
  /** Mobile filter row — "Hide other symbols" checkbox state. */
  hideOtherSymbols?: boolean
  onHideOtherSymbolsChange?: (next: boolean) => void
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
  overflow-x: auto;
  flex: 1;
`

const Empty = styled(Flex)`
  align-items: center;
  justify-content: center;
  min-height: 120px;
`

const PositionsTable = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(min-content, 1fr)) auto;
  /* Cells sit flush horizontally so the row-hover background reads as
   * one continuous strip. Per-cell horizontal padding (applied below)
   * keeps content from touching. */
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
`

/* Wraps a row's cells with display:contents so the cells stay direct
 * children of the parent grid, while letting `:hover > *` paint every
 * cell in the row with one continuous card-secondary background. */
const RowGroup = styled.div`
  display: contents;
  /* Padding lives on the cells (RowGroup is display:contents so any
   * padding set here would be dropped) — gives the hover strip visible
   * breathing room around the content, matching the MarketsDropdown row. */
  & > * {
    padding: 16px 12px;
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

const ActionCell = styled(Flex)`
  gap: 6px;
  align-items: center;
`

const TpSlCell = styled.div`
  font-size: 14px;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  gap: 0;
`

/** Small leverage chip rendered next to a position's symbol — purple
 *  text on the tertiary surface (mirrors SymbolHeader's old LevPill). */
const LevBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 1px 6px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 11px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0;
  flex-shrink: 0;
`

const TpSlValue = styled.span<{ $kind: 'tp' | 'sl' }>`
  color: ${({ $kind, theme }) => ($kind === 'tp' ? theme.colors.success : theme.colors.failure)};
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
  color: ${({ theme }) => theme.colors.textSubtle};
  &:hover { color: ${({ theme }) => theme.colors.text}; }
`

const Th = styled(Text).attrs({ fontSize: '10px', color: 'textSubtle' })`
  text-transform: uppercase;
  letter-spacing: 0.04em;
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
  closingSymbol?: string | null
  t: (key: string) => string
}> = ({ p, useMarkPriceForSymbol, computeLiqPrice, onClose, onEditTpSl, closingSymbol, t }) => {
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

  return (
    <>
      <Td as="div" bold>
        <Flex alignItems="center" style={{ gap: 6 }}>
          <span>{p.symbol}</span>
          <LevBadge>{p.leverage}x</LevBadge>
        </Flex>
      </Td>
      <Td style={{ color: side === 'BUY' ? theme.colors.success : theme.colors.failure }}>
        {p.positionAmt}
      </Td>
      <Td>{Number.isFinite(p.entryPrice) ? p.entryPrice.toFixed(2) : '—'}</Td>
      <Td>{markPrice !== undefined && Number.isFinite(markPrice) ? markPrice.toFixed(2) : '—'}</Td>
      <Td>{p.leverage}x</Td>
      <Td>{liq ? liq.toFixed(2) : '—'}</Td>
      <Td style={{ color: livePnl >= 0 ? theme.colors.success : theme.colors.failure }}>
        {Number.isFinite(livePnl) ? livePnl.toFixed(4) : '—'}
      </Td>
      <TpSlCell>
        <TpSlValue $kind="tp">
          {t('TP')}: {p.tpStopPrice ? Number(p.tpStopPrice).toFixed(2) : '—'}
        </TpSlValue>
        <TpSlValue $kind="sl">
          {t('SL')}: {p.slStopPrice ? Number(p.slStopPrice).toFixed(2) : '—'}
        </TpSlValue>
      </TpSlCell>
      <ActionCell>
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
      </ActionCell>
    </>
  )
}

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
  t = identity,
}) => {
  const theme = useTheme()
  const tabOrder: PositionsPanelTab[] = ['positions', 'orders', 'history', 'trades', 'transactions']
  const activeIndex = tabOrder.indexOf(tab)

  return (
    <Card>
      <UnderlineTabs activeIndex={activeIndex} onItemClick={(i) => onTabChange(tabOrder[i])}>
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

      <Body>
        {tab === 'positions' &&
          (positions.length === 0 ? (
            <Empty>
              <Text fontSize="12px" color="textSubtle">
                {t('No open positions')}
              </Text>
            </Empty>
          ) : (
            <PositionsTable>
              <Th>{t('Symbol')}</Th>
              <Th>{t('Size')}</Th>
              <Th>{t('Entry')}</Th>
              <Th>{t('Mark')}</Th>
              <Th>{t('Lev')}</Th>
              <Th>{t('Liq')}</Th>
              <Th>{t('uPnL')}</Th>
              <Th>{t('TP/SL')}</Th>
              <Th />
              {positions.map((p) => (
                <RowGroup key={p.id}>
                  <PositionTableRow
                    p={p}
                    useMarkPriceForSymbol={useMarkPriceForSymbol}
                    computeLiqPrice={computeLiqPrice}
                    onClose={onClosePosition}
                    onEditTpSl={onEditTpSl}
                    closingSymbol={closingSymbol}
                    t={t}
                  />
                </RowGroup>
              ))}
            </PositionsTable>
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

const MobilePositionsPanel: React.FC<PositionsPanelProps> = ({
  tab,
  onTabChange,
  positions,
  openOrders,
  orderHistory = [],
  tradeHistory = [],
  transactionHistory = [],
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

      {/* Empty state — the mobile mocks always render an empty state for
       *  this list area; row rendering for assets / twap is consumer-owned
       *  and not yet defined. Open Orders / Positions still fall through
       *  to the tab's `emptyText`. */}
      <MobileEmpty>{active.emptyText}</MobileEmpty>

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
