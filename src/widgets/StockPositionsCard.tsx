import React, { useMemo, useState } from 'react'
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
  /** Resolves the asset cell into a clickable button that picks this asset
   *  in the page (chart, side panel, swap form all switch to it). */
  assetId?: string
  /** Source-list tag rendered under the asset name (e.g. "Ondo", "xStocks"). */
  source?: string
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
  /** Pre-formatted timestamp, e.g. "2025-04-17 01:37:26". */
  date: string
  /** Drives the Buy/Sell pill color. */
  type: 'Buy' | 'Sell'
  /** Asset display name, e.g. "NVIDIA". */
  asset: string
  /** Resolves the asset cell into a clickable button (same UX as positions). */
  assetId?: string
  /** Source-list tag rendered under the asset name. */
  source?: string
  qty: string
  /** Current market price (today's reference). */
  price: string
  /** Execution price for this transaction. */
  entryPrice: string
  amount: string
  /** Optional wallet address, e.g. "0x09...872b2". */
  trader?: string
}

export interface StockPositionsCardProps {
  activeTab: StockPositionsTab
  onTabChange?: (next: StockPositionsTab) => void
  positions: readonly StockPositionRow[]
  transactions?: readonly StockTransactionRow[]
  /** Clicking an Asset cell in a position row routes to this — the page
   *  uses it to flip the selected asset across the chart/list/swap form. */
  onAssetClick?: (assetId: string) => void
}

const Root = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  /* Hug content at narrow widths — page scrolls instead of the table. */
  @media (max-width: 799px) {
    height: auto;
    overflow: visible;
    & > div { height: auto; }
  }

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
  width: 150px;
  height: 45px;
  padding: 12px 10px;
  border: 0;
  background: transparent;
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.secondary ?? theme.colors.text : theme.colors.textSubtle};
  cursor: pointer;
  &:hover:not(:disabled) { color: ${({ theme }) => theme.colors.text}; }

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({ $active, theme }) => ($active ? theme.colors.primary : 'transparent')};
  }
`

const Scroll = styled.div`
  flex: 1;
  min-height: 0;
  overflow: auto;

  @media (max-width: 799px) {
    overflow: visible;
    flex: 0 0 auto;
  }
`

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: auto;
  font-family: 'Kanit', sans-serif;

  /* Below 800px the table is replaced by stacked card-rows. */
  @media (max-width: 799px) {
    display: none;
  }
`

// Card-row layout for narrow viewports (Figma 87:54338). Each row becomes
// a vertical card with a header (logo + asset name + PnL on the right) and
// a label/value list underneath.
const CardList = styled.div`
  display: none;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  font-family: 'Kanit', sans-serif;

  @media (max-width: 799px) {
    display: flex;
  }
`

const RowCard = styled.div`
  background: ${({ theme }) => theme.colors.cardSecondary ?? theme.colors.backgroundAlt};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 24px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const RowCardDivider = styled.div`
  height: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

const RowCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const RowCardAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.disabled};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSubtle};
  flex-shrink: 0;
`

const RowCardAssetCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  min-width: 0;
  flex: 1;
`

const RowCardAssetName = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
`

const RowCardRight = styled.div<{ $sign: 1 | -1 | 0 }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  font-variant-numeric: tabular-nums;
  color: ${({ $sign, theme }) =>
    $sign > 0
      ? theme.colors.success ?? '#31D0AA'
      : $sign < 0
        ? theme.colors.failure ?? '#ED4B9E'
        : theme.colors.textSubtle};
`

const RowCardRightValue = styled.div`
  font-weight: 600;
  font-size: 16px;
`

const RowCardRightPct = styled.div`
  font-weight: 400;
  font-size: 14px;
`

const RowCardDetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 14px;
  font-variant-numeric: tabular-nums;
`

const RowCardDetailLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
`

const RowCardDetailValue = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

const Th = styled.th<{ $align?: 'left' | 'right' | 'center' }>`
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.24px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSubtle};
  text-align: ${({ $align }) => $align ?? 'left'};
  padding: 8px 16px;
  /* Pin the header row inside the Scroll container so it stays visible
     while rows scroll. Needs an opaque background so rows don't bleed
     through. */
  position: sticky;
  top: 0;
  z-index: 2;
  background: ${({ theme }) => theme.card.background ?? theme.colors.card ?? '#fff'};
  white-space: nowrap;
  vertical-align: middle;
`

const ThInner = styled.div<{ $align: 'left' | 'right' }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  justify-content: ${({ $align }) => ($align === 'right' ? 'flex-end' : 'flex-start')};
  width: 100%;
`

const SortToggle = styled.button`
  display: inline-flex;
  align-items: flex-start;
  padding: 1px 2px 3px 2px;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.tertiary};
  cursor: pointer;
  flex-shrink: 0;
`

const SortIcon = ({ dir }: { dir?: 'asc' | 'desc' | null }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    {/* Down arrow (lower-right) — emphasized when sort is descending. */}
    <path
      d="M8.76661 12.7917C8.66686 12.7917 8.5692 12.7727 8.47363 12.7347C8.37816 12.6965 8.29299 12.6401 8.21813 12.5653L6.12645 10.4653C5.97682 10.3102 5.90303 10.1287 5.90507 9.92095C5.90721 9.71319 5.98586 9.53449 6.14103 9.38487C6.29065 9.23943 6.47071 9.16568 6.6812 9.16364C6.89168 9.1615 7.07174 9.23524 7.22136 9.38487L7.9937 10.1572V7.17331C7.9937 6.95854 8.06885 6.77606 8.21915 6.62585C8.36936 6.47554 8.55185 6.40039 8.76661 6.40039C8.98138 6.40039 9.16386 6.47554 9.31407 6.62585C9.46438 6.77606 9.53953 6.95854 9.53953 7.17331V10.1572L10.3119 9.38487C10.4572 9.23943 10.6348 9.1667 10.8447 9.1667C11.0546 9.1667 11.2371 9.23943 11.3922 9.38487C11.5474 9.53449 11.6249 9.71562 11.6249 9.92824C11.6249 10.1409 11.5501 10.3248 11.4005 10.4799L9.31509 12.5653C9.24023 12.6401 9.15506 12.6965 9.05959 12.7347C8.96402 12.7727 8.86636 12.7917 8.76661 12.7917Z"
      fill="#BDC2C4"
      opacity={dir === 'asc' ? 0.35 : 1}
    />
    {/* Up arrow (upper-left) — emphasized when sort is ascending. */}
    <path
      d="M5.23333 7.60028C5.01857 7.60028 4.83608 7.52512 4.68588 7.37482C4.53557 7.22461 4.46042 7.04212 4.46042 6.82736V3.84346L3.68808 4.6158C3.54274 4.76124 3.36511 4.83396 3.15521 4.83396C2.94531 4.83396 2.76282 4.76124 2.60775 4.6158C2.45258 4.46617 2.375 4.28505 2.375 4.07242C2.375 3.8598 2.44981 3.6759 2.59944 3.52073L4.68485 1.43532C4.75972 1.36055 4.84488 1.30412 4.94035 1.26601C5.03592 1.22799 5.13358 1.20898 5.23333 1.20898C5.33308 1.20898 5.43074 1.22799 5.52631 1.26601C5.62178 1.30412 5.70695 1.36055 5.78181 1.43532L7.8735 3.53532C8.02312 3.69048 8.09692 3.87195 8.09488 4.07971C8.09274 4.28748 8.01408 4.46617 7.85892 4.6158C7.70929 4.76124 7.52924 4.83498 7.31875 4.83703C7.10826 4.83917 6.92821 4.76542 6.77858 4.6158L6.00625 3.84346V6.82736C6.00625 7.04212 5.9311 7.22461 5.78079 7.37482C5.63058 7.52512 5.4481 7.60028 5.23333 7.60028Z"
      fill="#BDC2C4"
      opacity={dir === 'desc' ? 0.35 : 1}
    />
  </svg>
)

const Td = styled.td<{ $align?: 'left' | 'right' | 'center' }>`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  text-align: ${({ $align }) => $align ?? 'left'};
  padding: 8px 16px;
  font-variant-numeric: tabular-nums;
  vertical-align: middle;
  transition: background 0.12s;
`

// Row hover state — gives the row a card-secondary background with rounded
// corners (the highlight seen on the Figma's first row). Implemented via
// :first-child / :last-child since border-radius doesn't apply to <tr>.
const Tr = styled.tr`
  &:hover > ${Td} {
    background: ${({ theme }) => theme.colors.cardSecondary ?? theme.colors.backgroundAlt};
  }
  &:hover > ${Td}:first-child {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  &:hover > ${Td}:last-child {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`

const DateCell = styled(Td)`
  white-space: pre-line;
  line-height: 1.5;
`

// Asset name reads as "small" (400) at rest and "small bold" (600) on hover.
// Clicking it asks the parent page to switch the active asset.
const AssetButton = styled.button`
  display: inline-block;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-weight: 400;
  cursor: pointer;
  transition: font-weight 0.12s;
  &:hover {
    font-weight: 600;
  }
`

// Asset cell wraps the name + source tag on two lines.
const AssetStack = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  line-height: 1.4;
`

const SourcePill = styled.span<{ $tone: 'ondo' | 'xstocks' | 'default' }>`
  display: inline-flex;
  align-items: center;
  padding: 0 6px;
  height: 16px;
  border-radius: 999px;
  font-family: 'Kanit', sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1px;
  background: ${({ $tone, theme }) =>
    $tone === 'ondo'
      ? 'rgba(118, 69, 217, 0.10)'
      : $tone === 'xstocks'
        ? 'rgba(2, 145, 157, 0.10)'
        : theme.colors.tertiary};
  color: ${({ $tone, theme }) =>
    $tone === 'ondo'
      ? theme.colors.secondary
      : $tone === 'xstocks'
        ? theme.colors.primary60 ?? theme.colors.primary
        : theme.colors.textSubtle};
`

function sourceTone(s?: string): 'ondo' | 'xstocks' | 'default' {
  const v = (s ?? '').toLowerCase()
  if (v.includes('ondo')) return 'ondo'
  if (v.includes('xstock')) return 'xstocks'
  return 'default'
}

// Buy / Sell pill — green outline for Buy, pink outline for Sell.
const TypePill = styled.span<{ $kind: 'Buy' | 'Sell' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 56px;
  height: 24px;
  padding: 0 12px;
  border-radius: 999px;
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 13px;
  background: ${({ $kind }) =>
    $kind === 'Buy' ? 'rgba(49, 208, 170, 0.10)' : 'rgba(237, 75, 158, 0.10)'};
  color: ${({ $kind, theme }) =>
    $kind === 'Buy'
      ? theme.colors.success ?? '#31D0AA'
      : theme.colors.failure ?? '#ED4B9E'};
  border: 1px solid
    ${({ $kind, theme }) =>
      $kind === 'Buy'
        ? theme.colors.success ?? '#31D0AA'
        : theme.colors.failure ?? '#ED4B9E'};
`

// PnL cell stacks the USD value over the percent so big numbers don't crowd.
const PnlStack = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  line-height: 1.4;
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 14px;
`

const pnlTokenColor = (sign: 1 | -1 | 0) => ({
  color:
    sign > 0
      ? 'var(--pcs-colors-success)'
      : sign < 0
        ? 'var(--pcs-colors-failure)'
        : 'var(--pcs-colors-text-subtle)',
})

// "$303.72 (12.05%)" / "-$303.20 (-3.94%)" → ["$303.72", "12.05%"] etc.
function splitPnl(label: string): { dollar: string; pct: string } {
  const m = label.match(/^([^()]+?)\s*\(([^)]+)\)\s*$/)
  if (!m) return { dollar: label, pct: '' }
  return { dollar: m[1].trim(), pct: m[2].trim() }
}

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

// Parses "$235.31", "$2,823.72", "-$303.20", "$303.72 (12.05%)" into a signed
// number. Used to make the pre-formatted string columns sortable.
function parseAmount(s: string): number {
  const m = s.match(/(-?)\$?([\d,]+\.?\d*)/)
  if (!m) return 0
  const sign = m[1] === '-' ? -1 : 1
  return sign * parseFloat(m[2].replace(/,/g, ''))
}

type SortDir = 'asc' | 'desc'
type PositionSortKey = 'qty' | 'indexPrice' | 'entryPrice' | 'amount' | 'pnl'
type TxSortKey = 'qty' | 'price' | 'entryPrice' | 'amount'

const positionGetters: Record<PositionSortKey, (r: StockPositionRow) => number> = {
  qty: (r) => parseAmount(r.qty),
  indexPrice: (r) => parseAmount(r.indexPrice),
  entryPrice: (r) => parseAmount(r.entryPrice),
  amount: (r) => parseAmount(r.amount),
  pnl: (r) => parseAmount(r.pnlLabel),
}

const txGetters: Record<TxSortKey, (r: StockTransactionRow) => number> = {
  qty: (r) => parseAmount(r.qty),
  price: (r) => parseAmount(r.price),
  entryPrice: (r) => parseAmount(r.entryPrice),
  amount: (r) => parseAmount(r.amount),
}

// Three-state toggle: nothing → desc → asc → nothing.
function cycleSort<K>(cur: { key: K; dir: SortDir } | null, key: K) {
  if (!cur || cur.key !== key) return { key, dir: 'desc' as SortDir }
  if (cur.dir === 'desc') return { key, dir: 'asc' as SortDir }
  return null
}

export const StockPositionsCard: React.FC<StockPositionsCardProps> = ({
  activeTab,
  onTabChange,
  positions,
  transactions,
  onAssetClick,
}) => {
  const isPositions = activeTab === 'positions'
  const [positionSort, setPositionSort] = useState<{ key: PositionSortKey; dir: SortDir } | null>(null)
  const [txSort, setTxSort] = useState<{ key: TxSortKey; dir: SortDir } | null>(null)

  const sortedPositions = useMemo(() => {
    if (!positionSort) return positions
    const get = positionGetters[positionSort.key]
    return [...positions].sort((a, b) =>
      positionSort.dir === 'asc' ? get(a) - get(b) : get(b) - get(a),
    )
  }, [positions, positionSort])

  const sortedTransactions = useMemo(() => {
    const list = transactions ?? []
    if (!txSort) return list
    const get = txGetters[txSort.key]
    return [...list].sort((a, b) => (txSort.dir === 'asc' ? get(a) - get(b) : get(b) - get(a)))
  }, [transactions, txSort])

  const rows = isPositions ? sortedPositions : sortedTransactions

  const togglePositionSort = (key: PositionSortKey) => setPositionSort((cur) => cycleSort(cur, key))
  const toggleTxSort = (key: TxSortKey) => setTxSort((cur) => cycleSort(cur, key))
  const posDir = (k: PositionSortKey) => (positionSort?.key === k ? positionSort.dir : null)
  const txDir = (k: TxSortKey) => (txSort?.key === k ? txSort.dir : null)

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
                    <Th $align="right">
                      <ThInner $align="right">
                        Qty
                        <SortToggle
                          type="button"
                          aria-label="Sort by quantity"
                          onClick={() => togglePositionSort('qty')}
                        >
                          <SortIcon dir={posDir('qty')} />
                        </SortToggle>
                      </ThInner>
                    </Th>
                    <Th $align="right">
                      <ThInner $align="right">
                        Index Price
                        <SortToggle
                          type="button"
                          aria-label="Sort by index price"
                          onClick={() => togglePositionSort('indexPrice')}
                        >
                          <SortIcon dir={posDir('indexPrice')} />
                        </SortToggle>
                      </ThInner>
                    </Th>
                    <Th $align="right">
                      <ThInner $align="right">
                        Entry Price
                        <SortToggle
                          type="button"
                          aria-label="Sort by entry price"
                          onClick={() => togglePositionSort('entryPrice')}
                        >
                          <SortIcon dir={posDir('entryPrice')} />
                        </SortToggle>
                      </ThInner>
                    </Th>
                    <Th $align="right">
                      <ThInner $align="right">
                        Amount
                        <SortToggle
                          type="button"
                          aria-label="Sort by amount"
                          onClick={() => togglePositionSort('amount')}
                        >
                          <SortIcon dir={posDir('amount')} />
                        </SortToggle>
                      </ThInner>
                    </Th>
                    <Th $align="right">
                      <ThInner $align="right">
                        Pnl (ROI%)
                        <SortToggle
                          type="button"
                          aria-label="Sort by PnL"
                          onClick={() => togglePositionSort('pnl')}
                        >
                          <SortIcon dir={posDir('pnl')} />
                        </SortToggle>
                      </ThInner>
                    </Th>
                  </>
                ) : (
                  <>
                    <Th>Date</Th>
                    <Th>Type</Th>
                    <Th>Assets</Th>
                    <Th $align="right">
                      <ThInner $align="right">
                        Qty
                        <SortToggle
                          type="button"
                          aria-label="Sort by quantity"
                          onClick={() => toggleTxSort('qty')}
                        >
                          <SortIcon dir={txDir('qty')} />
                        </SortToggle>
                      </ThInner>
                    </Th>
                    <Th $align="right">
                      <ThInner $align="right">
                        Price
                        <SortToggle
                          type="button"
                          aria-label="Sort by price"
                          onClick={() => toggleTxSort('price')}
                        >
                          <SortIcon dir={txDir('price')} />
                        </SortToggle>
                      </ThInner>
                    </Th>
                    <Th $align="right">
                      <ThInner $align="right">
                        Entry Price
                        <SortToggle
                          type="button"
                          aria-label="Sort by entry price"
                          onClick={() => toggleTxSort('entryPrice')}
                        >
                          <SortIcon dir={txDir('entryPrice')} />
                        </SortToggle>
                      </ThInner>
                    </Th>
                    <Th $align="right">
                      <ThInner $align="right">
                        Amount
                        <SortToggle
                          type="button"
                          aria-label="Sort by amount"
                          onClick={() => toggleTxSort('amount')}
                        >
                          <SortIcon dir={txDir('amount')} />
                        </SortToggle>
                      </ThInner>
                    </Th>
                    <Th $align="right">Trader</Th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {isPositions
                ? (rows as readonly StockPositionRow[]).map((r) => {
                    const pnl = splitPnl(r.pnlLabel)
                    const pnlStyle = pnlTokenColor(r.pnlSign)
                    return (
                      <Tr key={r.id}>
                        <DateCell>{r.date}</DateCell>
                        <Td>
                          <AssetStack>
                            {r.assetId ? (
                              <AssetButton
                                type="button"
                                onClick={() => onAssetClick?.(r.assetId!)}
                              >
                                {r.asset}
                              </AssetButton>
                            ) : (
                              <span>{r.asset}</span>
                            )}
                            {r.source && (
                              <SourcePill $tone={sourceTone(r.source)}>{r.source}</SourcePill>
                            )}
                          </AssetStack>
                        </Td>
                        <Td $align="right">{r.qty}</Td>
                        <Td $align="right">{r.indexPrice}</Td>
                        <Td $align="right">{r.entryPrice}</Td>
                        <Td $align="right">{r.amount}</Td>
                        <Td $align="right">
                          <PnlStack>
                            <span style={pnlStyle}>{pnl.dollar}</span>
                            {pnl.pct && <span style={pnlStyle}>{pnl.pct}</span>}
                          </PnlStack>
                        </Td>
                      </Tr>
                    )
                  })
                : (rows as readonly StockTransactionRow[]).map((r) => (
                    <Tr key={r.id}>
                      <DateCell>{r.date}</DateCell>
                      <Td>
                        <TypePill $kind={r.type}>{r.type}</TypePill>
                      </Td>
                      <Td>
                        <AssetStack>
                          {r.assetId ? (
                            <AssetButton
                              type="button"
                              onClick={() => onAssetClick?.(r.assetId!)}
                            >
                              {r.asset}
                            </AssetButton>
                          ) : (
                            <span>{r.asset}</span>
                          )}
                          {r.source && (
                            <SourcePill $tone={sourceTone(r.source)}>{r.source}</SourcePill>
                          )}
                        </AssetStack>
                      </Td>
                      <Td $align="right">{r.qty}</Td>
                      <Td $align="right">{r.price}</Td>
                      <Td $align="right">{r.entryPrice}</Td>
                      <Td $align="right">{r.amount}</Td>
                      <Td $align="right">{r.trader ?? ''}</Td>
                    </Tr>
                  ))}
            </tbody>
          </Table>
        )}

        {/* Narrow-viewport card-row variant. Renders alongside the table; CSS
            (display: none) toggles which one is visible based on breakpoint. */}
        {rows.length > 0 && (
          <CardList>
            {isPositions
              ? (rows as readonly StockPositionRow[]).map((r) => {
                  const pnl = splitPnl(r.pnlLabel)
                  return (
                    <RowCard key={`card-${r.id}`}>
                      <RowCardHeader>
                        <RowCardAvatar aria-hidden>
                          {r.asset.slice(0, 2).toUpperCase()}
                        </RowCardAvatar>
                        <RowCardAssetCol>
                          <RowCardAssetName>{r.asset}</RowCardAssetName>
                          {r.source && (
                            <SourcePill $tone={sourceTone(r.source)}>{r.source}</SourcePill>
                          )}
                        </RowCardAssetCol>
                        <RowCardRight $sign={r.pnlSign}>
                          <RowCardRightValue>{pnl.dollar}</RowCardRightValue>
                          {pnl.pct && <RowCardRightPct>{pnl.pct}</RowCardRightPct>}
                        </RowCardRight>
                      </RowCardHeader>
                      <RowCardDivider />
                      <RowCardDetailRow>
                        <RowCardDetailLabel>QTY</RowCardDetailLabel>
                        <RowCardDetailValue>{r.qty}</RowCardDetailValue>
                      </RowCardDetailRow>
                      <RowCardDetailRow>
                        <RowCardDetailLabel>Index price</RowCardDetailLabel>
                        <RowCardDetailValue>{r.indexPrice}</RowCardDetailValue>
                      </RowCardDetailRow>
                      <RowCardDetailRow>
                        <RowCardDetailLabel>Entry price</RowCardDetailLabel>
                        <RowCardDetailValue>{r.entryPrice}</RowCardDetailValue>
                      </RowCardDetailRow>
                      <RowCardDetailRow>
                        <RowCardDetailLabel>Amount</RowCardDetailLabel>
                        <RowCardDetailValue>{r.amount}</RowCardDetailValue>
                      </RowCardDetailRow>
                    </RowCard>
                  )
                })
              : (rows as readonly StockTransactionRow[]).map((r) => (
                  <RowCard key={`card-${r.id}`}>
                    <RowCardHeader>
                      <RowCardAvatar aria-hidden>
                        {r.asset.slice(0, 2).toUpperCase()}
                      </RowCardAvatar>
                      <RowCardAssetCol>
                        <RowCardAssetName>{r.asset}</RowCardAssetName>
                        {r.source && <SourcePill $tone={sourceTone(r.source)}>{r.source}</SourcePill>}
                      </RowCardAssetCol>
                      <TypePill $kind={r.type}>{r.type}</TypePill>
                    </RowCardHeader>
                    <RowCardDivider />
                    <RowCardDetailRow>
                      <RowCardDetailLabel>QTY</RowCardDetailLabel>
                      <RowCardDetailValue>{r.qty}</RowCardDetailValue>
                    </RowCardDetailRow>
                    <RowCardDetailRow>
                      <RowCardDetailLabel>Price</RowCardDetailLabel>
                      <RowCardDetailValue>{r.price}</RowCardDetailValue>
                    </RowCardDetailRow>
                    <RowCardDetailRow>
                      <RowCardDetailLabel>Entry price</RowCardDetailLabel>
                      <RowCardDetailValue>{r.entryPrice}</RowCardDetailValue>
                    </RowCardDetailRow>
                    <RowCardDetailRow>
                      <RowCardDetailLabel>Amount</RowCardDetailLabel>
                      <RowCardDetailValue>{r.amount}</RowCardDetailValue>
                    </RowCardDetailRow>
                    {r.trader && (
                      <RowCardDetailRow>
                        <RowCardDetailLabel>Trader</RowCardDetailLabel>
                        <RowCardDetailValue>{r.trader}</RowCardDetailValue>
                      </RowCardDetailRow>
                    )}
                  </RowCard>
                ))}
          </CardList>
        )}
      </Scroll>
    </Root>
  )
}

export default StockPositionsCard
