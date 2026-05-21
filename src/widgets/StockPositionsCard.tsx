import React from 'react'
import styled from 'styled-components'
import { Card } from '../primitives/Card'
import { Text } from '../primitives/Text'

/**
 * Stateless positions / transactions card used on the Stock page (Figma
 * 7-11516). Top tabs flip between "My Position" and "Transactions"; the
 * caller owns both lists.
 */
export type StockPositionsTab = 'positions' | 'transactions'

export interface StockPositionRow {
  id: string
  /** Pre-formatted timestamp, e.g. "2025-04-17 01:37:26". */
  date: string
  /** Asset display name, e.g. "NVIDIA". */
  asset: string
  /** Optional secondary symbol. */
  symbol?: string
  qty: string
  indexPrice: string
  entryPrice: string
  amount: string
  /** Pre-formatted PnL, e.g. "$18.82 (5.39%)". */
  pnlLabel: string
  /** Sign of PnL drives color. */
  pnlSign: 1 | -1 | 0
}

export interface StockTransactionRow {
  id: string
  date: string
  type: string
  asset: string
  qty: string
  price: string
  amount: string
  status: string
}

export interface StockPositionsCardProps {
  activeTab: StockPositionsTab
  onTabChange?: (next: StockPositionsTab) => void
  positions: readonly StockPositionRow[]
  transactions?: readonly StockTransactionRow[]
}

const Root = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
    padding: 0;
  }
`

const Tabs = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding: 0 8px;
`

const Tab = styled.button<{ $active: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  padding: 0 16px;
  border: 0;
  background: transparent;
  font-family: 'Kanit', sans-serif;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  font-size: 14px;
  letter-spacing: 0.12px;
  color: ${({ $active, theme }) => ($active ? theme.colors.text : theme.colors.textSubtle)};
  cursor: pointer;
  &:hover:not(:disabled) { color: ${({ theme }) => theme.colors.text}; }

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 16px;
    right: 16px;
    height: 2px;
    background: ${({ $active, theme }) => ($active ? theme.colors.primary60 ?? theme.colors.primary : 'transparent')};
    border-radius: 2px;
  }
`

const Scroll = styled.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-family: 'Kanit', sans-serif;
`

const Th = styled.th<{ $align?: 'left' | 'right' | 'center' }>`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSubtle};
  text-align: ${({ $align }) => $align ?? 'left'};
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  white-space: nowrap;
`

const Td = styled.td<{ $align?: 'left' | 'right' | 'center' }>`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  text-align: ${({ $align }) => $align ?? 'left'};
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  font-variant-numeric: tabular-nums;
  vertical-align: middle;
`

const DateCell = styled(Td)`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 12px;
  line-height: 1.45;
  white-space: pre-line;
`

const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 40px 24px;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-family: 'Kanit', sans-serif;
`

function pnlColor(sign: 1 | -1 | 0) {
  if (sign > 0) return 'success' as const
  if (sign < 0) return 'failure' as const
  return 'textSubtle' as const
}

export const StockPositionsCard: React.FC<StockPositionsCardProps> = ({
  activeTab,
  onTabChange,
  positions,
  transactions,
}) => {
  const rows = activeTab === 'positions' ? positions : transactions ?? []
  const isPositions = activeTab === 'positions'

  return (
    <Root>
      <Tabs role="tablist" aria-label="Account view">
        <Tab
          $active={activeTab === 'positions'}
          role="tab"
          aria-selected={activeTab === 'positions'}
          type="button"
          onClick={() => onTabChange?.('positions')}
        >
          My Position ({positions.length})
        </Tab>
        <Tab
          $active={activeTab === 'transactions'}
          role="tab"
          aria-selected={activeTab === 'transactions'}
          type="button"
          onClick={() => onTabChange?.('transactions')}
        >
          Transactions
        </Tab>
      </Tabs>

      <Scroll>
        {rows.length === 0 ? (
          <Empty>
            {isPositions ? 'No open positions' : 'No transactions yet'}
          </Empty>
        ) : (
          <Table>
            <thead>
              <tr>
                {isPositions ? (
                  <>
                    <Th>Date</Th>
                    <Th>Assets</Th>
                    <Th>Qty</Th>
                    <Th $align="right">Index Price</Th>
                    <Th $align="right">Entry Price</Th>
                    <Th $align="right">Amount</Th>
                    <Th $align="right">Pnl (ROI%)</Th>
                  </>
                ) : (
                  <>
                    <Th>Date</Th>
                    <Th>Type</Th>
                    <Th>Assets</Th>
                    <Th>Qty</Th>
                    <Th $align="right">Price</Th>
                    <Th $align="right">Amount</Th>
                    <Th $align="right">Status</Th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {isPositions
                ? (rows as readonly StockPositionRow[]).map((r) => (
                    <tr key={r.id}>
                      <DateCell>{r.date}</DateCell>
                      <Td>{r.asset}</Td>
                      <Td>{r.qty}</Td>
                      <Td $align="right">{r.indexPrice}</Td>
                      <Td $align="right">{r.entryPrice}</Td>
                      <Td $align="right">{r.amount}</Td>
                      <Td $align="right">
                        <Text bold fontSize="14px" color={pnlColor(r.pnlSign)}>
                          {r.pnlLabel}
                        </Text>
                      </Td>
                    </tr>
                  ))
                : (rows as readonly StockTransactionRow[]).map((r) => (
                    <tr key={r.id}>
                      <DateCell>{r.date}</DateCell>
                      <Td>{r.type}</Td>
                      <Td>{r.asset}</Td>
                      <Td>{r.qty}</Td>
                      <Td $align="right">{r.price}</Td>
                      <Td $align="right">{r.amount}</Td>
                      <Td $align="right">{r.status}</Td>
                    </tr>
                  ))}
            </tbody>
          </Table>
        )}
      </Scroll>
    </Root>
  )
}

export default StockPositionsCard
