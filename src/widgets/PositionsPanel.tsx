import React from 'react'
import styled, { useTheme } from 'styled-components'
import { Flex } from '../primitives/Box'
import { Button } from '../primitives/Button'
import { Text } from '../primitives/Text'
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

export type PositionsPanelTab =
  | 'positions'
  | 'orders'
  | 'history'
  | 'trades'
  | 'transactions'

export interface PositionsPanelProps {
  /** Controlled active tab. */
  tab: PositionsPanelTab
  onTabChange: (tab: PositionsPanelTab) => void
  positions: PositionRow[]
  openOrders: OpenOrderRow[]
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
  /** Translator. */
  t?: (key: string) => string
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

const TradesTable = styled.div`
  display: grid;
  grid-template-columns: 148px 156px 1fr 1fr 1fr 1fr;
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
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
      <Td bold>{p.symbol}</Td>
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
 */
export const PositionsPanel: React.FC<PositionsPanelProps> = ({
  tab,
  onTabChange,
  positions,
  openOrders,
  tradeHistory = [],
  transactionHistory = [],
  onShareTrade,
  useMarkPriceForSymbol,
  computeLiqPrice,
  onClosePosition,
  onEditTpSl,
  onCancelOrder,
  closingSymbol = null,
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
        <UnderlineTab>{t('Order History')}</UnderlineTab>
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
              {openOrders.map((o) => (
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
                    <Button scale="xs" variant="secondary" onClick={() => onCancelOrder(o)}>
                      {t('Cancel')}
                    </Button>
                  </ActionCell>
                </RowGroup>
              ))}
            </OrdersTable>
          ))}

        {tab === 'history' && (
          <Empty>
            <Text fontSize="12px" color="textSubtle">
              {t('Order history coming soon')}
            </Text>
          </Empty>
        )}

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
