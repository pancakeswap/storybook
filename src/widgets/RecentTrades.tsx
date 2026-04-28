import React, { useMemo } from 'react'
import styled from 'styled-components'
import { PerpsPanel } from './primitives'

export interface RecentTradeRow {
  /** Stable React key — usually the trade id from the venue. */
  id: string
  /** Pre-formatted price string. The widget renders as-is. */
  price: string
  /** Pre-formatted size string. */
  size: string
  /** Epoch milliseconds. The widget formats as HH:MM:SS. */
  time: number
  /**
   * Direction of the maker side. `true` = maker is the seller, taker
   * lifted the ask → buy print → success/green. `false` (or undefined) =
   * maker is the buyer, taker hit the bid → sell print → failure/pink.
   * Mirrors Aster's stream payload (`m` field) for an easy 1:1 mapping.
   */
  isBuyerMaker?: boolean
}

export interface RecentTradesProps {
  /** Trades to render — already sorted newest-first by the consumer. */
  trades: RecentTradeRow[]
  /** Optional title above the column headers. Omit when embedded inside a tabbed container. */
  title?: string
  /** Translatable column labels. Defaults to English literals. */
  labels?: { price?: string; size?: string; time?: string }
  /**
   * Render with `display: none` instead of unmounting — preserves the
   * caller's WebSocket subscription when toggled inside a tabbed panel.
   */
  hidden?: boolean
  /**
   * Render only the inner content (column header + body), no PerpsPanel
   * shell. Use when the consumer is already wrapping us in a panel /
   * tabbed container.
   */
  embedded?: boolean
}

const Head = styled.div`
  padding: 8px 10px 4px 10px;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`

const ColHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`

const Body = styled.div`
  overflow-y: auto;
  min-height: 0;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
`

const PriceCell = styled.span<{ $maker: boolean }>`
  color: ${({ $maker, theme }) => ($maker ? theme.colors.failure : theme.colors.success)};
`

const Cell = styled.span`
  text-align: right;
`

const TimeCell = styled(Cell)`
  color: ${({ theme }) => theme.colors.textSubtle};
`

const formatTime = (ms: number) => {
  const d = new Date(ms)
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(
    d.getSeconds(),
  ).padStart(2, '0')}`
}

export const RecentTrades: React.FC<RecentTradesProps> = ({
  trades,
  title,
  labels,
  hidden,
  embedded,
}) => {
  const ordered = useMemo(() => [...trades].sort((a, b) => b.time - a.time), [trades])
  const labelPrice = labels?.price ?? 'Price'
  const labelSize = labels?.size ?? 'Size'
  const labelTime = labels?.time ?? 'Time'

  const content = (
    <>
      {title && <Head>{title}</Head>}
      <ColHeader>
        <span>{labelPrice}</span>
        <span style={{ textAlign: 'right' }}>{labelSize}</span>
        <span style={{ textAlign: 'right' }}>{labelTime}</span>
      </ColHeader>
      <Body>
        {ordered.map((tr) => (
          <Row key={tr.id}>
            <PriceCell $maker={!!tr.isBuyerMaker}>{tr.price}</PriceCell>
            <Cell>{tr.size}</Cell>
            <TimeCell>{formatTime(tr.time)}</TimeCell>
          </Row>
        ))}
      </Body>
    </>
  )

  if (embedded) {
    return <div style={hidden ? { display: 'none' } : { display: 'contents' }}>{content}</div>
  }
  return <PerpsPanel style={hidden ? { display: 'none' } : undefined}>{content}</PerpsPanel>
}
