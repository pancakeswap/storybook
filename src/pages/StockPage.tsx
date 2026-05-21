import { useMemo, useState } from 'react'
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
} from '../primitives/Icons'

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

const STOCKS: readonly StockAsset[] = [
  { id: 'nvda', name: 'Nvidia corp', symbol: 'NVDAx', price: '$235.31', changePct: 3.89, source: 'xStocks', marketCap: '$1,377,760', tvl: '$377,760', floorPrice: '$301.69', holders: '2,593' },
  { id: 'googl', name: 'Alphabet Inc', symbol: 'GOOGLx', price: '$399.88', changePct: -0.46, source: 'xStocks', marketCap: '$2,103,500', tvl: '$284,210', floorPrice: '$398.50', holders: '1,847' },
  { id: 'aapl', name: 'Apple Inc', symbol: 'AAPLx', price: '$298.39', changePct: -0.37, source: 'xStocks', marketCap: '$4,521,100', tvl: '$612,400', floorPrice: '$295.00', holders: '3,401' },
  { id: 'msft', name: 'Microsoft Corp', symbol: 'MSFTx', price: '$408.89', changePct: 0.92, source: 'xStocks', marketCap: '$3,041,200', tvl: '$418,100', floorPrice: '$405.00', holders: '2,910' },
  { id: 'amzn', name: 'Amazon.com Inc', symbol: 'AMZNx', price: '$408.89', changePct: 0.92, source: 'xStocks', marketCap: '$1,851,900', tvl: '$298,540', floorPrice: '$402.30', holders: '2,118' },
  { id: 'tsla', name: 'Tesla Inc', symbol: 'TSLx', price: '$408.89', changePct: 0.92, source: 'xStocks', marketCap: '$801,300', tvl: '$211,500', floorPrice: '$398.10', holders: '1,604' },
  { id: 'meta', name: 'META', symbol: 'Metax', price: '$408.89', changePct: 0.92, source: 'xStocks', marketCap: '$1,287,000', tvl: '$233,800', floorPrice: '$401.80', holders: '1,901' },
  { id: 'intc', name: 'INTEL', symbol: 'INTCOL', price: '$408.89', changePct: 0.92, source: 'Ondo', marketCap: '$110,300', tvl: '$54,210', floorPrice: '$402.00', holders: '648' },
  { id: 'orcl', name: 'ORACLE', symbol: 'ORLAx', price: '$408.89', changePct: -1.22, source: 'xStocks', marketCap: '$402,100', tvl: '$98,100', floorPrice: '$405.10', holders: '722' },
  { id: 'sand', name: 'SANDISK', symbol: 'SNDKx', price: '$408.89', changePct: 2.04, source: 'Ondo', marketCap: '$48,200', tvl: '$22,400', floorPrice: '$406.00', holders: '301' },
  { id: 'amd', name: 'AMD', symbol: 'AMDx', price: '$408.89', changePct: 0.92, source: 'xStocks', marketCap: '$311,200', tvl: '$72,400', floorPrice: '$405.20', holders: '910' },
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
    qty: '1',
    indexPrice: '$235.31',
    entryPrice: '$230',
    amount: '$235.31',
    pnlLabel: '$18.82 (5.39%)',
    pnlSign: 1,
  },
  {
    id: 'p2',
    date: '2025-04-17\n01:37:26',
    asset: 'NVIDIA',
    qty: '1',
    indexPrice: '$235.31',
    entryPrice: '$230',
    amount: '$235.31',
    pnlLabel: '$18.82 (5.39%)',
    pnlSign: 1,
  },
  {
    id: 'p3',
    date: '2025-04-17\n01:37:26',
    asset: 'NVIDIA',
    qty: '1',
    indexPrice: '$235.31',
    entryPrice: '$230',
    amount: '$235.31',
    pnlLabel: '$18.82 (5.39%)',
    pnlSign: 1,
  },
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
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 380px minmax(0, 1fr) 460px;
  gap: 16px;
  align-items: stretch;
  width: 100%;

  @media (max-width: 1279px) {
    grid-template-columns: 320px minmax(0, 1fr) 420px;
  }

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`

const LeftCol = styled.div`
  height: 832px;
  min-width: 0;

  @media (max-width: 1023px) {
    height: auto;
    max-height: 480px;
  }
`

const MidCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
`

const ChartShell = styled.div`
  height: 513px;
`

const PositionsShell = styled.div`
  height: 302px;
`

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
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

  const toSide: SwapTokenSide = {
    symbol: selectedAsset.symbol,
    chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/56.svg',
    address: '0x40cf...5461',
    balance: '19.097',
    amount: toAmount,
    amountUsd: '~0.0 USD',
  }
  const fromSide: SwapTokenSide = {
    symbol: 'BNB',
    chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/56.svg',
    address: '0x40cf...5461',
    balance: '1,098.99',
    amount: fromAmount,
    amountUsd: '~$640.85 USD',
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
                categoryTag="ELECTRONIC"
                marketCapValue={selectedAsset.marketCap}
                price={selectedAsset.price}
                changeAbs={changeAbs}
                changePct={selectedAsset.changePct}
                candles={candles}
                tradesLabel={`Trades: ${71 + (selectedAsset.id.length * 13) % 30}`}
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
                transactions={[]}
              />
            </PositionsShell>
          </MidCol>

          <RightCol>
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
            <StockInfoCard
              symbol={selectedAsset.symbol}
              categoryTag="ELECTRONIC"
              tvlValue={selectedAsset.tvl}
              marketPrice="$298.00"
              marketPriceChangeLabel={`${positiveChange ? '+' : ''}${selectedAsset.changePct.toFixed(2)}% (${positiveChange ? '+' : '-'}${changeAbs.replace('-', '')})`}
              marketPriceChangePct={selectedAsset.changePct}
              floorPrice={selectedAsset.floorPrice}
              holdersCount={selectedAsset.holders}
              holdersTagLabel="Address"
            />
          </RightCol>
        </Grid>
      </Body>
    </Root>
  )
}

export default StockPage
