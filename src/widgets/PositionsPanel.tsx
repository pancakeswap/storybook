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

export type PositionsPanelTab = 'positions' | 'orders' | 'history'

export interface PositionsPanelProps {
  /** Controlled active tab. */
  tab: PositionsPanelTab
  onTabChange: (tab: PositionsPanelTab) => void
  positions: PositionRow[]
  openOrders: OpenOrderRow[]
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
  gap: 6px 16px;
  font-variant-numeric: tabular-nums;
`

const ActionCell = styled(Flex)`
  gap: 6px;
  align-items: center;
`

const TpSlCell = styled.div`
  font-size: 11px;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const TpSlValue = styled.span<{ $kind: 'tp' | 'sl' }>`
  color: ${({ $kind, theme }) => ($kind === 'tp' ? theme.colors.success : theme.colors.failure)};
`

const OrdersTable = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(min-content, 1fr)) auto;
  gap: 6px 16px;
  font-variant-numeric: tabular-nums;
`

const Th = styled(Text).attrs({ fontSize: '10px', color: 'textSubtle' })`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`

const Td = styled(Text).attrs({ fontSize: '12px' })`
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
  useMarkPriceForSymbol,
  computeLiqPrice,
  onClosePosition,
  onEditTpSl,
  onCancelOrder,
  closingSymbol = null,
  t = identity,
}) => {
  const theme = useTheme()
  const tabOrder: PositionsPanelTab[] = ['positions', 'orders', 'history']
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
        <UnderlineTab>{t('History')}</UnderlineTab>
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
                <React.Fragment key={p.id}>
                  <PositionTableRow
                    p={p}
                    useMarkPriceForSymbol={useMarkPriceForSymbol}
                    computeLiqPrice={computeLiqPrice}
                    onClose={onClosePosition}
                    onEditTpSl={onEditTpSl}
                    closingSymbol={closingSymbol}
                    t={t}
                  />
                </React.Fragment>
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
                <React.Fragment key={o.id}>
                  <Td bold>{o.symbol}</Td>
                  <Td style={{ color: o.side === 'BUY' ? theme.colors.success : theme.colors.failure }}>
                    {o.side}
                  </Td>
                  <Td>{o.type}</Td>
                  <Td>{o.price}</Td>
                  <Td>{o.origQty}</Td>
                  <Td>{o.executedQty}</Td>
                  <Td>{o.status}</Td>
                  <Button scale="xs" variant="secondary" onClick={() => onCancelOrder(o)}>
                    {t('Cancel')}
                  </Button>
                </React.Fragment>
              ))}
            </OrdersTable>
          ))}

        {tab === 'history' && (
          <Empty>
            <Text fontSize="12px" color="textSubtle">
              {t('History coming soon')}
            </Text>
          </Empty>
        )}
      </Body>
    </Card>
  )
}
