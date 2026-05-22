import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import {
  TokenizedAssetsList,
  type TokenizedAsset,
} from '../widgets/TokenizedAssetsList'
import {
  TokenizedSwapForm,
  type SwapTokenSide,
} from '../widgets/TokenizedSwapForm'
import {
  StockChartCard,
  type StockCandle,
  type StockTimeRange,
  type StockChartType,
} from '../widgets/StockChartCard'
import {
  StockPositionsCard,
  type StockPositionRow,
  type StockPositionsTab,
} from '../widgets/StockPositionsCard'
import { StockInfoCard } from '../widgets/StockInfoCard'
import {
  SearchIcon,
  BellIcon,
  CogIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '../primitives/Icons'
import { Heading } from '../primitives/Heading'
import { Text } from '../primitives/Text'

/**
 * Page-level layout for the Stock terminal (Figma 7-11516). Three-column
 * desktop grid: tokenized-asset list (left), chart + positions/transactions
 * (center), swap form + asset info card (right). Mirrors the live
 * pancake-frontend nav at the top.
 *
 * State is demo-only — the consumer wires real data + a router.
 */

const FILTERS = ['Stocks', 'Gainers', 'Losers'] as const
type Filter = (typeof FILTERS)[number]

interface StockAsset extends TokenizedAsset {
  marketCap: string
  tvl: string
  floorPrice: string
  holders: string
}

// Market caps are public end-of-day snapshots (late 2025 / early 2026) so
// the demo feels real. For production this whole table is replaced by a
// quote-API feed (Polygon, Finnhub, etc.).
const STOCKS: readonly StockAsset[] = [
  { id: 'nvda', name: 'Nvidia corp', symbol: 'NVDAx', price: '$235.31', changePct: 3.89, source: 'xStocks', marketCap: '$3.51T', tvl: '$377,760', floorPrice: '$236.04', holders: '2,593' },
  { id: 'googl', name: 'Alphabet Inc', symbol: 'GOOGLx', price: '$399.88', changePct: -0.46, source: 'xStocks', marketCap: '$2.11T', tvl: '$284,210', floorPrice: '$398.50', holders: '1,847' },
  { id: 'aapl', name: 'Apple Inc', symbol: 'AAPLx', price: '$298.39', changePct: -0.37, source: 'xStocks', marketCap: '$3.52T', tvl: '$612,400', floorPrice: '$295.00', holders: '3,401' },
  { id: 'msft', name: 'Microsoft Corp', symbol: 'MSFTx', price: '$408.89', changePct: 0.92, source: 'xStocks', marketCap: '$3.21T', tvl: '$418,100', floorPrice: '$405.00', holders: '2,910' },
  { id: 'amzn', name: 'Amazon.com Inc', symbol: 'AMZNx', price: '$408.89', changePct: 0.92, source: 'xStocks', marketCap: '$2.32T', tvl: '$298,540', floorPrice: '$402.30', holders: '2,118' },
  { id: 'tsla', name: 'Tesla Inc', symbol: 'TSLx', price: '$408.89', changePct: 0.92, source: 'xStocks', marketCap: '$1.19T', tvl: '$211,500', floorPrice: '$398.10', holders: '1,604' },
  { id: 'meta', name: 'META', symbol: 'Metax', price: '$408.89', changePct: 0.92, source: 'xStocks', marketCap: '$1.54T', tvl: '$233,800', floorPrice: '$401.80', holders: '1,901' },
  { id: 'intc', name: 'INTEL', symbol: 'INTCOL', price: '$408.89', changePct: 0.92, source: 'Ondo', marketCap: '$96.4B', tvl: '$54,210', floorPrice: '$402.00', holders: '648' },
  { id: 'orcl', name: 'ORACLE', symbol: 'ORLAx', price: '$408.89', changePct: -1.22, source: 'xStocks', marketCap: '$482B', tvl: '$98,100', floorPrice: '$405.10', holders: '722' },
  { id: 'sand', name: 'SANDISK', symbol: 'SNDKx', price: '$408.89', changePct: 2.04, source: 'Ondo', marketCap: '$25.8B', tvl: '$22,400', floorPrice: '$406.00', holders: '301' },
  { id: 'amd', name: 'AMD', symbol: 'AMDx', price: '$408.89', changePct: 0.92, source: 'xStocks', marketCap: '$258B', tvl: '$72,400', floorPrice: '$405.20', holders: '910' },
]

const FILTER_COUNTS: Readonly<Record<string, number>> = {
  Stocks: STOCKS.length,
  Gainers: STOCKS.filter((s) => s.changePct > 0).length,
  Losers: STOCKS.filter((s) => s.changePct < 0).length,
}

/* Deterministic candle data — enough variety to look like a real chart, but
 * stable across reloads so screenshots don't drift. */
function genCandles(seed: number, n = 60): StockCandle[] {
  let s = seed
  const rand = () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
  const out: StockCandle[] = []
  let price = 220
  for (let i = 0; i < n; i++) {
    const open = price
    const drift = (rand() - 0.45) * 6
    const close = Math.max(180, Math.min(260, open + drift))
    const high = Math.max(open, close) + rand() * 3
    const low = Math.min(open, close) - rand() * 3
    out.push({ open, close, high, low })
    price = close
  }
  return out
}

const CANDLE_DATA_BY_ID: Record<string, StockCandle[]> = Object.fromEntries(
  STOCKS.map((s, i) => [s.id, genCandles(i * 137 + 7)]),
)

const SAMPLE_POSITIONS: readonly StockPositionRow[] = [
  {
    id: 'p1',
    date: '2025-04-17\n01:37:26',
    asset: 'NVIDIA',
    assetId: 'nvda',
    source: 'xStocks',
    qty: '12',
    indexPrice: '$235.31',
    entryPrice: '$210.00',
    amount: '$2,823.72',
    pnlLabel: '$303.72 (12.05%)',
    pnlSign: 1,
  },
  {
    id: 'p2',
    date: '2025-04-15\n14:22:08',
    asset: 'AAPL',
    assetId: 'aapl',
    source: 'xStocks',
    qty: '40',
    indexPrice: '$184.92',
    entryPrice: '$192.50',
    amount: '$7,396.80',
    pnlLabel: '-$303.20 (-3.94%)',
    pnlSign: -1,
  },
  {
    id: 'p3',
    date: '2025-04-12\n09:15:43',
    asset: 'TSLA',
    assetId: 'tsla',
    source: 'xStocks',
    qty: '8',
    indexPrice: '$251.47',
    entryPrice: '$219.30',
    amount: '$2,011.76',
    pnlLabel: '$257.36 (14.67%)',
    pnlSign: 1,
  },
  {
    id: 'p4',
    date: '2025-04-10\n18:48:51',
    asset: 'MSFT',
    assetId: 'msft',
    source: 'xStocks',
    qty: '15',
    indexPrice: '$412.05',
    entryPrice: '$405.00',
    amount: '$6,180.75',
    pnlLabel: '$105.75 (1.74%)',
    pnlSign: 1,
  },
  {
    id: 'p5',
    date: '2025-04-08\n11:03:17',
    asset: 'GOOGL',
    assetId: 'googl',
    source: 'xStocks',
    qty: '25',
    indexPrice: '$168.30',
    entryPrice: '$172.10',
    amount: '$4,207.50',
    pnlLabel: '-$95.00 (-2.21%)',
    pnlSign: -1,
  },
  {
    id: 'p6',
    date: '2025-04-05\n20:36:09',
    asset: 'AMD',
    assetId: 'amd',
    source: 'xStocks',
    qty: '50',
    indexPrice: '$162.04',
    entryPrice: '$148.20',
    amount: '$8,102.00',
    pnlLabel: '$692.00 (9.34%)',
    pnlSign: 1,
  },
  {
    id: 'p7',
    date: '2025-04-02\n07:54:02',
    asset: 'AMZN',
    assetId: 'amzn',
    source: 'xStocks',
    qty: '18',
    indexPrice: '$179.62',
    entryPrice: '$181.40',
    amount: '$3,233.16',
    pnlLabel: '-$32.04 (-0.98%)',
    pnlSign: -1,
  },
  {
    id: 'p8',
    date: '2025-03-30\n13:11:38',
    asset: 'META',
    assetId: 'meta',
    source: 'xStocks',
    qty: '10',
    indexPrice: '$508.91',
    entryPrice: '$475.00',
    amount: '$5,089.10',
    pnlLabel: '$339.10 (7.14%)',
    pnlSign: 1,
  },
  {
    id: 'p9',
    date: '2025-03-28\n16:25:54',
    asset: 'COIN',
    source: 'Ondo',
    qty: '22',
    indexPrice: '$214.78',
    entryPrice: '$245.60',
    amount: '$4,725.16',
    pnlLabel: '-$678.04 (-12.55%)',
    pnlSign: -1,
  },
  {
    id: 'p10',
    date: '2025-03-25\n22:07:11',
    asset: 'NFLX',
    source: 'xStocks',
    qty: '6',
    indexPrice: '$642.13',
    entryPrice: '$612.00',
    amount: '$3,852.78',
    pnlLabel: '$180.78 (4.92%)',
    pnlSign: 1,
  },
  {
    id: 'p11',
    date: '2025-03-22\n08:49:30',
    asset: 'ORCL',
    assetId: 'orcl',
    source: 'xStocks',
    qty: '35',
    indexPrice: '$148.27',
    entryPrice: '$140.10',
    amount: '$5,189.45',
    pnlLabel: '$285.95 (5.83%)',
    pnlSign: 1,
  },
  {
    id: 'p12',
    date: '2025-03-19\n10:32:47',
    asset: 'INTC',
    assetId: 'intc',
    source: 'Ondo',
    qty: '120',
    indexPrice: '$22.18',
    entryPrice: '$28.50',
    amount: '$2,661.60',
    pnlLabel: '-$758.40 (-22.18%)',
    pnlSign: -1,
  },
  {
    id: 'p13',
    date: '2025-03-15\n12:48:25',
    asset: 'ADBE',
    source: 'xStocks',
    qty: '7',
    indexPrice: '$498.20',
    entryPrice: '$510.00',
    amount: '$3,487.40',
    pnlLabel: '-$82.60 (-2.31%)',
    pnlSign: -1,
  },
  {
    id: 'p14',
    date: '2025-03-12\n15:19:02',
    asset: 'IBM',
    source: 'Ondo',
    qty: '28',
    indexPrice: '$246.91',
    entryPrice: '$221.40',
    amount: '$6,913.48',
    pnlLabel: '$714.28 (11.52%)',
    pnlSign: 1,
  },
  {
    id: 'p15',
    date: '2025-03-08\n19:42:56',
    asset: 'CSCO',
    source: 'xStocks',
    qty: '85',
    indexPrice: '$57.34',
    entryPrice: '$56.10',
    amount: '$4,873.90',
    pnlLabel: '$105.40 (2.21%)',
    pnlSign: 1,
  },
  {
    id: 'p16',
    date: '2025-03-04\n02:55:13',
    asset: 'TSLA',
    assetId: 'tsla',
    source: 'xStocks',
    qty: '4',
    indexPrice: '$251.47',
    entryPrice: '$278.50',
    amount: '$1,005.88',
    pnlLabel: '-$108.12 (-9.71%)',
    pnlSign: -1,
  },
  {
    id: 'p17',
    date: '2025-02-28\n11:28:40',
    asset: 'NVIDIA',
    assetId: 'nvda',
    source: 'xStocks',
    qty: '3',
    indexPrice: '$235.31',
    entryPrice: '$118.90',
    amount: '$705.93',
    pnlLabel: '$349.23 (97.91%)',
    pnlSign: 1,
  },
]

const SAMPLE_TRANSACTIONS: readonly StockTransactionRow[] = [
  { id: 't1',  date: '2025-04-17\n01:37:26', type: 'Buy',  asset: 'NVIDIA', assetId: 'nvda',  source: 'xStocks', qty: '5',  price: '$235.31', entryPrice: '$210.00', amount: '$1,176.55', trader: '0x09...872b2' },
  { id: 't2',  date: '2025-04-16\n22:14:51', type: 'Sell', asset: 'AAPL',   assetId: 'aapl',  source: 'xStocks', qty: '12', price: '$184.92', entryPrice: '$192.50', amount: '$2,219.04', trader: '0x09...872b2' },
  { id: 't3',  date: '2025-04-16\n09:48:30', type: 'Buy',  asset: 'TSLA',   assetId: 'tsla',  source: 'xStocks', qty: '3',  price: '$251.47', entryPrice: '$219.30', amount: '$754.41',   trader: '0xa4...12c8d' },
  { id: 't4',  date: '2025-04-15\n17:02:09', type: 'Buy',  asset: 'AAPL',   assetId: 'aapl',  source: 'xStocks', qty: '28', price: '$184.92', entryPrice: '$192.50', amount: '$5,177.76', trader: '0x09...872b2' },
  { id: 't5',  date: '2025-04-14\n13:55:44', type: 'Sell', asset: 'AMD',    assetId: 'amd',   source: 'xStocks', qty: '20', price: '$162.04', entryPrice: '$155.00', amount: '$3,240.80', trader: '0x11...44f01' },
  { id: 't6',  date: '2025-04-12\n08:31:17', type: 'Buy',  asset: 'MSFT',   assetId: 'msft',  source: 'xStocks', qty: '15', price: '$412.05', entryPrice: '$405.00', amount: '$6,180.75', trader: '0x09...872b2' },
  { id: 't7',  date: '2025-04-09\n20:09:55', type: 'Sell', asset: 'INTC',   assetId: 'intc',  source: 'Ondo',    qty: '60', price: '$22.18',  entryPrice: '$28.50',  amount: '$1,330.80', trader: '0x66...3ae0a' },
  { id: 't8',  date: '2025-04-08\n07:42:12', type: 'Buy',  asset: 'GOOGL',  assetId: 'googl', source: 'xStocks', qty: '25', price: '$168.30', entryPrice: '$172.10', amount: '$4,207.50', trader: '0x09...872b2' },
  { id: 't9',  date: '2025-04-05\n12:25:38', type: 'Buy',  asset: 'AMD',    assetId: 'amd',   source: 'xStocks', qty: '30', price: '$162.04', entryPrice: '$148.20', amount: '$4,861.20', trader: '0x09...872b2' },
  { id: 't10', date: '2025-04-03\n15:14:01', type: 'Sell', asset: 'META',   assetId: 'meta',  source: 'xStocks', qty: '4',  price: '$508.91', entryPrice: '$522.00', amount: '$2,035.64', trader: '0xab...91d5e' },
  { id: 't11', date: '2025-04-02\n10:08:29', type: 'Buy',  asset: 'AMZN',   assetId: 'amzn',  source: 'xStocks', qty: '18', price: '$179.62', entryPrice: '$181.40', amount: '$3,233.16', trader: '0x09...872b2' },
  { id: 't12', date: '2025-03-30\n19:46:53', type: 'Buy',  asset: 'META',   assetId: 'meta',  source: 'xStocks', qty: '6',  price: '$508.91', entryPrice: '$475.00', amount: '$3,053.46', trader: '0x09...872b2' },
  { id: 't13', date: '2025-03-28\n14:01:19', type: 'Sell', asset: 'COIN',                     source: 'Ondo',    qty: '10', price: '$214.78', entryPrice: '$245.60', amount: '$2,147.80', trader: '0x77...6e221' },
  { id: 't14', date: '2025-03-26\n11:38:42', type: 'Buy',  asset: 'NFLX',                     source: 'xStocks', qty: '6',  price: '$642.13', entryPrice: '$612.00', amount: '$3,852.78', trader: '0x09...872b2' },
  { id: 't15', date: '2025-03-22\n21:50:07', type: 'Sell', asset: 'ORCL',   assetId: 'orcl',  source: 'xStocks', qty: '10', price: '$148.27', entryPrice: '$140.10', amount: '$1,482.70', trader: '0x09...872b2' },
  { id: 't16', date: '2025-03-19\n09:17:21', type: 'Sell', asset: 'INTC',   assetId: 'intc',  source: 'Ondo',    qty: '60', price: '$22.18',  entryPrice: '$28.50',  amount: '$1,330.80', trader: '0x09...872b2' },
  { id: 't17', date: '2025-03-15\n18:23:48', type: 'Buy',  asset: 'IBM',                      source: 'Ondo',    qty: '20', price: '$246.91', entryPrice: '$221.40', amount: '$4,938.20', trader: '0x09...872b2' },
  { id: 't18', date: '2025-03-10\n13:42:00', type: 'Buy',  asset: 'CSCO',                     source: 'xStocks', qty: '85', price: '$57.34',  entryPrice: '$56.10',  amount: '$4,873.90', trader: '0x09...872b2' },
  { id: 't19', date: '2025-03-04\n07:08:14', type: 'Sell', asset: 'TSLA',   assetId: 'tsla',  source: 'xStocks', qty: '4',  price: '$251.47', entryPrice: '$278.50', amount: '$1,005.88', trader: '0x09...872b2' },
  { id: 't20', date: '2025-02-28\n11:28:40', type: 'Buy',  asset: 'NVIDIA', assetId: 'nvda',  source: 'xStocks', qty: '3',  price: '$235.31', entryPrice: '$118.90', amount: '$705.93',   trader: '0x09...872b2' },
]

// ── styled shells (page-only layout) ────────────────────────────

const Root = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Kanit', sans-serif;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`

const Nav = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 8px 40px;
  background: ${({ theme }) => theme.colors.card};
  flex-shrink: 0;
`

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

const Logo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};

  &::before {
    content: '🐰';
    width: 24px;
    height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #d1884f 0%, #f8c5a3 100%);
    border-radius: 50%;
    font-size: 14px;
  }
`

const Tabs = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;
`

const TabLink = styled.button<{ $active?: boolean }>`
  border: 0;
  background: transparent;
  padding: 12px;
  font-family: inherit;
  font-size: 16px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  color: ${({ $active, theme }) => ($active ? theme.colors.text : theme.colors.textSubtle)};
  cursor: pointer;
  border-radius: 16px;
  &:hover { color: ${({ theme }) => theme.colors.text}; }
`

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const SearchPill = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.textSubtle};
  font-family: inherit;
  font-size: 16px;
  cursor: pointer;
  &:hover { color: ${({ theme }) => theme.colors.text}; }
`

const Kbd = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.input};
  font-size: 14px;
`

const IconBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSubtle};
  cursor: pointer;
  border-radius: 999px;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.input};
  }
`

const WalletChip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 4px 8px 4px 4px;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  &:hover { filter: brightness(1.02); }
`

const WalletAvatar = styled.span`
  display: inline-flex;
  width: 26px;
  height: 26px;
  align-items: center;
  justify-content: center;
  border-radius: 6.5px;
  background: linear-gradient(135deg, #ff8866 0%, #ffd166 100%);
  font-size: 14px;
`

const Body = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

// Full-width asset summary card shown above the grid at 968–1099px (when
// the side asset list collapses out of view). Carries the same identity +
// price info the chart card normally shows in its in-card header.
const TopBar = styled.div`
  display: none;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: ${({ theme }) => theme.card.background};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 24px;

  @media (max-width: 1099px) {
    display: flex;
  }
`

const TopBarLogo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.disabled};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
`

const TopBarLogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const TopBarLogoFallback = styled.div`
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const TopBarTitleCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`

const TopBarTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const TopBarMetaRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-variant-numeric: tabular-nums;
`

const TopBarPriceCol = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`

const TopBarSourcePill = styled.span<{ $tone: 'ondo' | 'xstocks' | 'default' }>`
  display: inline-flex;
  align-items: center;
  padding: 1.5px 6px;
  border-radius: 999px;
  font-family: 'Kanit', sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12px;
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
  border: 2px solid
    ${({ $tone, theme }) =>
      $tone === 'ondo'
        ? 'rgba(118, 69, 217, 0.20)'
        : $tone === 'xstocks'
          ? 'rgba(2, 145, 157, 0.20)'
          : theme.colors.tertiary};
`

const TopBarPickerBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 2px;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.textSubtle};
  cursor: pointer;
  flex-shrink: 0;
  &:hover { color: ${({ theme }) => theme.colors.text}; }
`

function topBarSourceTone(s?: string): 'ondo' | 'xstocks' | 'default' {
  const v = (s ?? '').toLowerCase()
  if (v.includes('ondo')) return 'ondo'
  if (v.includes('xstock')) return 'xstocks'
  return 'default'
}

// Asset picker modal (Figma 83:50720) — opens when the user clicks the
// chevron on the 968-1099 top strip. Reuses TokenizedAssetsList for the
// search/filter/rows so the visual matches the side-panel exactly.
const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;

  /* Action-sheet on narrow viewports: dock to the bottom edge. */
  @media (max-width: 799px) {
    align-items: flex-end;
    padding: 0;
  }
`

const ModalShell = styled.div`
  position: relative;
  width: 100%;
  max-width: 560px;
  height: 80vh;
  max-height: 720px;
  display: flex;
  flex-direction: column;

  @media (max-width: 799px) {
    max-width: none;
    height: auto;
    max-height: 85vh;
    border-radius: 32px 32px 0 0;
    overflow: hidden;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 380px minmax(0, 1fr) 436px;
  gap: 16px;
  align-items: stretch;
  width: 100%;

  @media (max-width: 1279px) {
    grid-template-columns: 320px minmax(0, 1fr) 396px;
  }

  /* Cramped 3-column band — shrink both side rails so the chart still fits. */
  @media (min-width: 1100px) and (max-width: 1199px) {
    grid-template-columns: 315px minmax(0, 1fr) 315px;
  }

  /* 968–1099: 2 columns (asset list collapses into the top strip). */
  @media (min-width: 800px) and (max-width: 1099px) {
    grid-template-columns: minmax(0, 1fr) 359px;
  }

  /* 800–967: same 2-col layout but the swap rail tightens to 300px. */
  @media (min-width: 800px) and (max-width: 967px) {
    grid-template-columns: minmax(0, 1fr) 300px;
  }

  @media (max-width: 799px) {
    grid-template-columns: 1fr;
  }

  /* Ultra-wide: side panel + swap module each grow +24px per 500px viewport
     step above 2500px. Middle column absorbs the rest. */
  @media (min-width: 2500px) {
    grid-template-columns: 404px minmax(0, 1fr) 460px;
  }
  @media (min-width: 3000px) {
    grid-template-columns: 428px minmax(0, 1fr) 484px;
  }
  @media (min-width: 3500px) {
    grid-template-columns: 452px minmax(0, 1fr) 508px;
  }
  @media (min-width: 4000px) {
    grid-template-columns: 476px minmax(0, 1fr) 532px;
  }
  @media (min-width: 4500px) {
    grid-template-columns: 500px minmax(0, 1fr) 556px;
  }
  @media (min-width: 5000px) {
    grid-template-columns: 524px minmax(0, 1fr) 580px;
  }
`

const LeftCol = styled.div`
  height: 832px;
  min-width: 0;

  /* Below 1100px the asset list is replaced by the TopBar strip + modal picker. */
  @media (max-width: 1099px) {
    display: none;
  }
`

const MidCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;

  /* Below 800px the grid is a single column and we want the positions card
     pushed to the very bottom (after swap + info). display: contents
     flattens MidCol/RightCol so all four shells become direct children of
     the page grid, and order:99 on PositionsShell shifts it to the end. */
  @media (max-width: 799px) {
    display: contents;
  }
`

const ChartShell = styled.div`
  height: 513px;
`

// Wrappers around the right-rail swap form and info card so we can reorder
// them at narrow viewports (info card moves above the swap form).
const InfoShell = styled.div`
  @media (max-width: 799px) {
    order: 2;
  }
`

const SwapShell = styled.div`
  @media (max-width: 799px) {
    order: 3;
  }
`

const PositionsShell = styled.div`
  height: 302px;

  /* At narrow widths the card hugs its content and the page scrolls. */
  @media (max-width: 799px) {
    height: auto;
    order: 99;
  }
`

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;

  @media (max-width: 799px) {
    display: contents;
  }
`

// ── Page ────────────────────────────────────────────────────────

export interface StockPageProps {
  initialAssetId?: string
}

export function StockPage({ initialAssetId = 'nvda' }: StockPageProps = {}) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<Filter>(FILTERS[0])
  const [selectedId, setSelectedId] = useState<string>(initialAssetId)
  const [favorites, setFavorites] = useState<Set<string>>(() => new Set([initialAssetId]))
  const [timeRange, setTimeRange] = useState<StockTimeRange>('1m')
  const [chartType, setChartType] = useState<StockChartType>('candle')
  const [positionsTab, setPositionsTab] = useState<StockPositionsTab>('positions')
  const [fromAmount, setFromAmount] = useState('1')
  const [pickerOpen, setPickerOpen] = useState(false)

  // Action-sheet drag-to-dismiss: tracks how far the user has pulled the
  // grabber down. We snap back at < 30% of sheet height, dismiss past it.
  const sheetRef = useRef<HTMLDivElement | null>(null)
  const [sheetDrag, setSheetDrag] = useState<{ startY: number; dy: number } | null>(null)
  const sheetDragY = sheetDrag?.dy ?? 0

  // Reset drag state whenever the sheet closes.
  useEffect(() => {
    if (!pickerOpen) setSheetDrag(null)
  }, [pickerOpen])

  // Document-level pointermove/up so the drag survives if the finger leaves
  // the grabber while moving.
  useEffect(() => {
    if (!sheetDrag) return
    const onMove = (e: PointerEvent) => {
      const dy = Math.max(0, e.clientY - sheetDrag.startY)
      setSheetDrag((s) => (s ? { ...s, dy } : s))
    }
    const onUp = () => {
      const height = sheetRef.current?.offsetHeight ?? 600
      const shouldClose = sheetDragY > Math.max(120, height * 0.3)
      setSheetDrag(null)
      if (shouldClose) setPickerOpen(false)
    }
    document.addEventListener('pointermove', onMove)
    document.addEventListener('pointerup', onUp)
    document.addEventListener('pointercancel', onUp)
    return () => {
      document.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerup', onUp)
      document.removeEventListener('pointercancel', onUp)
    }
  }, [sheetDrag, sheetDragY])

  const onGrabberDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    setSheetDrag({ startY: e.clientY, dy: 0 })
  }
  const [toAmount, setToAmount] = useState('0.0')

  const visibleAssets = useMemo(() => {
    const q = query.trim().toLowerCase()
    const filtered = STOCKS.filter((a) => {
      if (filter === 'Gainers') return a.changePct > 0
      if (filter === 'Losers') return a.changePct < 0
      return true
    }).filter((a) => {
      if (!q) return true
      return a.name.toLowerCase().includes(q) || a.symbol.toLowerCase().includes(q)
    }).map((a) => ({ ...a, favorite: favorites.has(a.id) }))
    const favs = filtered.filter((a) => a.favorite)
    const rest = filtered.filter((a) => !a.favorite)
    return [...favs, ...rest]
  }, [filter, query, favorites])

  const selectedAsset = STOCKS.find((a) => a.id === selectedId) ?? STOCKS[0]
  const candles = CANDLE_DATA_BY_ID[selectedAsset.id] ?? []
  const positiveChange = selectedAsset.changePct >= 0
  const changeAbs = `$${Math.abs(selectedAsset.changePct * (Number(selectedAsset.price.replace(/[^0-9.]/g, '')) / 100)).toFixed(2)}`

  // Layout per Figma 81:48758: BNB (the wallet's base asset) goes on the top
  // ("To:" slot in the form), the selected stock goes on the bottom ("From:").
  const toSide: SwapTokenSide = {
    symbol: 'BNB',
    chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/56.svg',
    address: '0x40cf...5461',
    balance: '1,098.99',
    amount: toAmount,
    amountUsd: '~0.0 USD',
  }
  const fromSide: SwapTokenSide = {
    symbol: selectedAsset.symbol,
    logoUrls: selectedAsset.logoUrls,
    chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/56.svg',
    address: '0x40cf...5461',
    balance: '19.097',
    amount: fromAmount,
    amountUsd: '~0.0 USD',
  }

  return (
    <Root aria-label="Stock — trade tokenized stocks on-chain">
      <Nav>
        <NavLeft>
          <Logo aria-label="PancakeSwap">PancakeSwap</Logo>
          <Tabs aria-label="Primary">
            <TabLink type="button" $active>
              Stocks
            </TabLink>
            <TabLink type="button">Trade</TabLink>
            <TabLink type="button">Earn</TabLink>
            <TabLink type="button">Play</TabLink>
            <TabLink type="button">AI</TabLink>
          </Tabs>
        </NavLeft>
        <NavRight>
          <SearchPill type="button" aria-label="Search markets">
            <SearchIcon width="20px" height="20px" />
            <span>Search</span>
            <Kbd aria-hidden>/</Kbd>
          </SearchPill>
          <IconBtn type="button" aria-label="Notifications">
            <BellIcon width="24px" height="24px" />
          </IconBtn>
          <IconBtn type="button" aria-label="Settings">
            <CogIcon width="24px" height="24px" />
          </IconBtn>
          <WalletChip type="button" aria-label="Open wallet">
            <WalletAvatar aria-hidden>🦊</WalletAvatar>
            $6,488
            <span style={{ color: 'var(--pcs-colors-text-subtle)' }}>.98</span>
            <ChevronDownIcon width="20px" height="20px" />
          </WalletChip>
        </NavRight>
      </Nav>

      <Body>
        <TopBar>
          <TopBarLogo>
            {selectedAsset.logoUrls?.find(Boolean) ? (
              <TopBarLogoImg src={selectedAsset.logoUrls.find(Boolean)} alt="" />
            ) : (
              <TopBarLogoFallback>
                {selectedAsset.symbol.slice(0, 2).toUpperCase()}
              </TopBarLogoFallback>
            )}
          </TopBarLogo>
          <TopBarTitleCol>
            <TopBarTitleRow>
              <Heading as="h2" scale="md">
                {selectedAsset.name.toUpperCase()}
              </Heading>
              {selectedAsset.source && (
                <TopBarSourcePill $tone={topBarSourceTone(selectedAsset.source)}>
                  {selectedAsset.source}
                </TopBarSourcePill>
              )}
            </TopBarTitleRow>
            <TopBarMetaRow>
              <Text bold fontSize="14px" color="textSubtle" textTransform="uppercase">
                {selectedAsset.symbol}
              </Text>
              <Text fontSize="14px" color="textSubtle">
                Market Cap
              </Text>
              <Text bold fontSize="14px">
                {selectedAsset.marketCap}
              </Text>
            </TopBarMetaRow>
          </TopBarTitleCol>
          <TopBarPriceCol>
            <Heading scale="lg">{selectedAsset.price}</Heading>
            <Text bold fontSize="14px" color={positiveChange ? 'success' : 'failure'}>
              {positiveChange ? '+' : '-'}
              {changeAbs.replace('-', '')} ({positiveChange ? '+' : ''}
              {selectedAsset.changePct.toFixed(2)}%)
            </Text>
          </TopBarPriceCol>
          <TopBarPickerBtn
            type="button"
            aria-label="Select an asset"
            onClick={() => setPickerOpen(true)}
          >
            <ChevronUpIcon width="20px" height="20px" />
          </TopBarPickerBtn>
        </TopBar>
        <Grid>
          <LeftCol>
            <TokenizedAssetsList
              searchQuery={query}
              onSearchChange={setQuery}
              searchPlaceholder="Search name or address"
              filters={FILTERS}
              filterCounts={FILTER_COUNTS}
              activeFilter={filter}
              onFilterChange={(next) => setFilter(next as Filter)}
              assets={visibleAssets}
              selectedAssetId={selectedId}
              onAssetClick={setSelectedId}
              onFavoriteToggle={(id) =>
                setFavorites((prev) => {
                  const next = new Set(prev)
                  if (next.has(id)) next.delete(id)
                  else next.add(id)
                  return next
                })
              }
            />
          </LeftCol>

          <MidCol>
            <ChartShell>
              <StockChartCard
                name={selectedAsset.name.toUpperCase()}
                symbol={selectedAsset.symbol}
                source={selectedAsset.source}
                logoUrls={selectedAsset.logoUrls}
                tvlValue={selectedAsset.tvl}
                marketCapValue={selectedAsset.marketCap}
                price={selectedAsset.price}
                changeAbs={changeAbs}
                changePct={selectedAsset.changePct}
                candles={candles}
                timeRange={timeRange}
                onTimeRangeChange={setTimeRange}
                chartType={chartType}
                onChartTypeChange={setChartType}
              />
            </ChartShell>
            <PositionsShell>
              <StockPositionsCard
                activeTab={positionsTab}
                onTabChange={setPositionsTab}
                positions={SAMPLE_POSITIONS}
                transactions={SAMPLE_TRANSACTIONS}
                onAssetClick={setSelectedId}
              />
            </PositionsShell>
          </MidCol>

          <RightCol>
            <SwapShell>
              <TokenizedSwapForm
                toSide={toSide}
                fromSide={fromSide}
                onToAmountChange={setToAmount}
                onFromAmountChange={setFromAmount}
                slippage="0.5%"
                rateFromLabel="1 BNB"
                rateToLabel={`${(640.85 / Number(selectedAsset.price.replace(/[^0-9.]/g, '') || '1')).toFixed(4)} ${selectedAsset.symbol}`}
                canSubmit
                submitLabel="Swap"
              />
            </SwapShell>
            <InfoShell>
              <StockInfoCard
              symbol={selectedAsset.symbol}
              source={selectedAsset.source}
              logoUrls={selectedAsset.logoUrls}
              tvlValue={selectedAsset.tvl}
              marketCapValue={selectedAsset.marketCap}
              chainPrice={selectedAsset.price}
              markPrice={selectedAsset.floorPrice}
              holdersCount={selectedAsset.holders}
              holdersTagLabel="Address"
            />
            </InfoShell>
          </RightCol>
        </Grid>
      </Body>
      {pickerOpen && typeof document !== 'undefined'
        ? createPortal(
            <ModalBackdrop onClick={() => setPickerOpen(false)}>
              <ModalShell
                ref={sheetRef}
                onClick={(e) => e.stopPropagation()}
                style={{
                  transform: sheetDragY > 0 ? `translateY(${sheetDragY}px)` : undefined,
                  transition: sheetDrag === null ? 'transform 0.2s ease' : 'none',
                }}
              >
                <TokenizedAssetsList
                  title="Select an asset"
                  onClose={() => setPickerOpen(false)}
                  onGrabberPointerDown={onGrabberDown}
                  searchQuery={query}
                  onSearchChange={setQuery}
                  searchPlaceholder="Search Tokens / Pools"
                  filters={FILTERS}
                  filterCounts={FILTER_COUNTS}
                  activeFilter={filter}
                  onFilterChange={(next) => setFilter(next as Filter)}
                  assets={visibleAssets}
                  selectedAssetId={selectedId}
                  onAssetClick={(id) => {
                    setSelectedId(id)
                    setPickerOpen(false)
                  }}
                  onFavoriteToggle={(id) =>
                    setFavorites((prev) => {
                      const next = new Set(prev)
                      if (next.has(id)) next.delete(id)
                      else next.add(id)
                      return next
                    })
                  }
                />
              </ModalShell>
            </ModalBackdrop>,
            document.body,
          )
        : null}
    </Root>
  )
}

export default StockPage
