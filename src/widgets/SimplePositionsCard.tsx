import React from 'react'
import styled from 'styled-components'
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
  unrealizedPnl: string
  pnlSign: 'positive' | 'negative' | 'zero'
  entryPrice: string
  liqPrice: string
  liqDistancePct: number
  liqStatus: SimplePositionLiqStatus
  liqStatusLabel: string
}

export interface SimpleOpenOrderRow {
  id: string
  symbol: string
  side: 'BUY' | 'SELL'
  type: string
  price: string
  origQty: string
  executedQty: string
  status: string
}

export interface SimplePositionsCardProps {
  tab: SimplePositionsTab
  onTabChange: (tab: SimplePositionsTab) => void
  positions: readonly SimplePositionRow[]
  openOrders: readonly SimpleOpenOrderRow[]
  /**
   * Whether the History tab content is empty (placeholder until the Aster
   * history shape is finalised). When true, render a "no history yet"
   * message; when false, render the same message until consumers wire
   * history data.
   */
  historyEmpty?: boolean
  onClosePosition: (id: string) => void
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
  gap: 24px;
  padding: 0 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

const Tab = styled.button<{ $active?: boolean }>`
  border: 0;
  background: transparent;
  font-family: inherit;
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  color: ${({ $active, theme }) => ($active ? theme.colors.text : theme.colors.textSubtle)};
  cursor: pointer;
  padding: 16px 0;
  border-bottom: 2px solid ${({ $active, theme }) => ($active ? theme.colors.text : 'transparent')};
  &:hover { color: ${({ theme }) => theme.colors.text}; }
`

const PositionsTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 56px;
  align-items: center;
`

const OrdersTable = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
`

const Th = styled.div`
  padding: 16px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`

const Td = styled.div`
  padding: 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
`

const TokenCell = styled(Td)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
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
  line-height: 1.3;
`

const TokenSymbol = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

const TokenSub = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const DirectionPill = styled(Td)<{ $direction: SimplePositionDirection }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid
    ${({ $direction, theme }) => ($direction === 'up' ? theme.colors.success : theme.colors.failure)};
  color: ${({ $direction, theme }) => ($direction === 'up' ? theme.colors.success : theme.colors.failure)};
  font-size: 14px;
  font-weight: 600;
  width: fit-content;
  margin: 16px;
`

const Pnl = styled(Td)<{ $sign: 'positive' | 'negative' | 'zero' }>`
  color: ${({ $sign, theme }) =>
    $sign === 'positive'
      ? theme.colors.success
      : $sign === 'negative'
        ? theme.colors.failure
        : theme.colors.text};
  font-weight: 600;
  font-size: 16px;
`

const LiqDistance = styled(Td)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

const LiqTrack = styled.div`
  flex: 1;
  height: 6px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.input};
  overflow: hidden;
  max-width: 94px;
`

const LiqFill = styled.div<{ $pct: number; $status: SimplePositionLiqStatus }>`
  height: 100%;
  width: ${({ $pct }) => `${Math.max(0, Math.min(100, $pct))}%`};
  background: ${({ $status, theme }) =>
    $status === 'safe'
      ? theme.colors.success
      : $status === 'warn'
        ? theme.colors.warning
        : theme.colors.failure};
  border-radius: 999px;
`

const CloseBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin: 16px 12px;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.failure};
  cursor: pointer;
  &:hover { filter: brightness(0.95); }
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

const directionGlyph = (d: SimplePositionDirection) => (d === 'up' ? '↑' : '↓')
const directionLabel = (d: SimplePositionDirection) => (d === 'up' ? 'Up/Long' : 'Down/Short')

const CloseIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
)

// ── Component ───────────────────────────────────────────────────

export const SimplePositionsCard: React.FC<SimplePositionsCardProps> = ({
  tab,
  onTabChange,
  positions,
  openOrders,
  historyEmpty = true,
  onClosePosition,
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

      {tab === 'positions' &&
        (positions.length === 0 ? (
          <Empty>No open positions</Empty>
        ) : (
          <PositionsTable role="table">
            <Th>Token</Th>
            <Th>Direction</Th>
            <Th>Unrealized PnL</Th>
            <Th>Entry Price</Th>
            <Th>Liq. Price</Th>
            <Th>Distance to Liq</Th>
            <Th />
            {positions.map((row) => (
              <React.Fragment key={row.id}>
                <TokenCell>
                  {renderTokenIcon ? (
                    renderTokenIcon(row)
                  ) : (
                    <TokenIcon $color={row.iconColor ?? defaultIconColor(row.symbol)}>
                      {row.symbol.slice(0, 1)}
                    </TokenIcon>
                  )}
                  <TokenMeta>
                    <TokenSymbol>{row.symbol}</TokenSymbol>
                    <TokenSub>{row.chainLabel}</TokenSub>
                  </TokenMeta>
                </TokenCell>
                <DirectionPill $direction={row.direction}>
                  {directionGlyph(row.direction)} {directionLabel(row.direction)}
                </DirectionPill>
                <Pnl $sign={row.pnlSign}>{row.unrealizedPnl}</Pnl>
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
              </React.Fragment>
            ))}
          </PositionsTable>
        ))}

      {tab === 'orders' &&
        (openOrders.length === 0 ? (
          <Empty>No open orders</Empty>
        ) : (
          <OrdersTable role="table">
            <Th>Symbol</Th>
            <Th>Side</Th>
            <Th>Type</Th>
            <Th>Price</Th>
            <Th>Size</Th>
            <Th>Filled</Th>
            <Th>Status</Th>
            {openOrders.map((o) => (
              <React.Fragment key={o.id}>
                <Td>{o.symbol}</Td>
                <Td>
                  <SideText $side={o.side}>{o.side}</SideText>
                </Td>
                <Td>{o.type}</Td>
                <Td>{o.price}</Td>
                <Td>{o.origQty}</Td>
                <Td>{o.executedQty}</Td>
                <Td>{o.status}</Td>
              </React.Fragment>
            ))}
          </OrdersTable>
        ))}

      {tab === 'history' && (
        <Empty>{historyEmpty ? 'No transaction history' : 'No transaction history'}</Empty>
      )}
    </Card>
  )
}
