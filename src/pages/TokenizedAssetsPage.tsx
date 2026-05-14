import { useMemo, useState } from 'react'
import styled from 'styled-components'
import {
  TokenizedAssetsList,
  type TokenizedAsset,
} from '../widgets/TokenizedAssetsList'
import { TokenizedAssetsChartPanel } from '../widgets/TokenizedAssetsChartPanel'
import {
  TokenizedAssetsTradePanel,
  type TradeMode,
} from '../widgets/TokenizedAssetsTradePanel'

export interface TokenizedAssetsPageProps {
  /** Hide the middle chart column. Default false. */
  chartOff?: boolean
}

// ── Page-level layout shells. No widget surface styling here. ─────────────

const Root = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  font-family: 'Kanit', sans-serif;
  color: ${({ theme }) => theme.colors.text};
`

const TopBar = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 56px;
  padding: 0 24px;
  background: ${({ theme }) => theme.colors.card};
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  flex-shrink: 0;
`

const Logo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`

const LogoMark = styled.span`
  display: inline-flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: linear-gradient(135deg, #d1884f 0%, #f8c5a3 100%);
  font-size: 14px;
`

const TopBarSpacer = styled.div`
  flex: 1;
`

const WalletChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 4px 12px 4px 4px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

const Avatar = styled.span`
  display: inline-flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: linear-gradient(135deg, #ff8866 0%, #ffd166 100%);
  font-size: 12px;
`

const Content = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  width: 100%;
  padding: 32px 24px 48px;
`

const PageHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`

const PageHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Eyebrow = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
`

const Heading = styled.h1`
  margin: 0;
  font-family: 'Kanit', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

const PageHeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 4px;
`

const AssetCountText = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const Dot = styled.span`
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.textSubtle};
`

const StatusPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 14px;
  border-radius: 999px;
  background: rgba(49, 208, 170, 0.10);
  border: 1px solid rgba(49, 208, 170, 0.40);
  color: ${({ theme }) => theme.colors.success};
  font-size: 14px;
  font-weight: 600;
`

const StatusDot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.success};
  box-shadow: 0 0 0 3px rgba(49, 208, 170, 0.25);
`

const Grid = styled.div<{ $chartOff: boolean }>`
  display: grid;
  grid-template-columns: ${({ $chartOff }) =>
    $chartOff ? '338px 480px' : '338px 468px 480px'};
  gap: 16px;
  justify-content: ${({ $chartOff }) => ($chartOff ? 'center' : 'start')};
  align-items: start;
`

// ── Sample data ────────────────────────────────────────────────────────────

const ASSETS: readonly TokenizedAsset[] = [
  {
    id: 'nvda',
    name: 'Nvidia corp',
    ticker: 'NVDAx',
    price: '$235.31',
    changePct: 3.89,
    iconColor: '#76B900',
    iconInitials: 'N',
  },
  {
    id: 'googl',
    name: 'Alphabet Inc',
    ticker: 'GOOGLx',
    price: '$399.88',
    changePct: -0.46,
    iconColor: '#4285F4',
    iconInitials: 'G',
  },
  {
    id: 'aapl',
    name: 'Apple Inc',
    ticker: 'AAPLx',
    price: '$298.39',
    changePct: -0.37,
    iconColor: '#1D1D1F',
    iconInitials: '',
  },
  {
    id: 'msft',
    name: 'Microsoft Corp',
    ticker: 'MSFTx',
    price: '$408.89',
    changePct: 0.92,
    iconColor: '#00A4EF',
    iconInitials: 'M',
  },
  {
    id: 'amzn',
    name: 'Amazon.com Inc',
    ticker: 'AMZNx',
    price: '$408.89',
    changePct: 0.92,
    iconColor: '#FF9900',
    iconInitials: 'a',
  },
  {
    id: 'tsl',
    name: 'Tesla Inc',
    ticker: 'TSLx',
    price: '$408.89',
    changePct: 0.92,
    iconColor: '#E31937',
    iconInitials: 'T',
  },
  {
    id: 'wbtc',
    name: 'WBTC',
    ticker: 'WBTC',
    price: '$108,408',
    changePct: 0.92,
    iconColor: '#F7931A',
    iconInitials: '₿',
  },
]

const FILTERS = ['Stocks', 'Crypto', 'ETFs'] as const

export function TokenizedAssetsPage({ chartOff = false }: TokenizedAssetsPageProps = {}) {
  const [selectedId, setSelectedId] = useState<string>('nvda')
  const [favorites, setFavorites] = useState<string[]>([])
  const [search, setSearch] = useState('')
  const [activeFilters, setActiveFilters] = useState<string[]>(['Stocks'])
  const [mode, setMode] = useState<TradeMode>('swap')
  const [payAmount, setPayAmount] = useState('')
  const [receiveAmount, setReceiveAmount] = useState('')
  const [timeframe, setTimeframe] = useState('5m')

  const selected = useMemo(
    () => ASSETS.find((a) => a.id === selectedId) ?? ASSETS[0],
    [selectedId],
  )

  const visibleAssets = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return ASSETS
    return ASSETS.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.ticker.toLowerCase().includes(q),
    )
  }, [search])

  const toggleFavorite = (id: string) =>
    setFavorites((curr) =>
      curr.includes(id) ? curr.filter((x) => x !== id) : [...curr, id],
    )

  const toggleFilter = (f: string) =>
    setActiveFilters((curr) =>
      curr.includes(f) ? curr.filter((x) => x !== f) : [...curr, f],
    )

  return (
    <Root aria-label="Tokenized assets">
      <TopBar>
        <Logo>
          <LogoMark aria-hidden>🐰</LogoMark>
          PancakeSwap
        </Logo>
        <TopBarSpacer />
        <WalletChip>
          <Avatar aria-hidden>🦊</Avatar>
          $1,098.99
        </WalletChip>
        <WalletChip>
          <Avatar aria-hidden>🦊</Avatar>
          0x40cf…5461
        </WalletChip>
      </TopBar>

      <Content>
        <PageHeader>
          <PageHeaderLeft>
            <Eyebrow>Tokenized assets</Eyebrow>
            <Heading>Trade real-world assets on-chain</Heading>
          </PageHeaderLeft>
          <PageHeaderRight>
            <AssetCountText>
              {ASSETS.length} assets
              <Dot aria-hidden />
              BNB Chain
            </AssetCountText>
            <StatusPill role="status">
              <StatusDot aria-hidden />
              Markets open
            </StatusPill>
          </PageHeaderRight>
        </PageHeader>

        <Grid $chartOff={chartOff}>
          <TokenizedAssetsList
            assets={visibleAssets}
            selectedAssetId={selected.id}
            onAssetSelect={setSelectedId}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            searchQuery={search}
            onSearchChange={setSearch}
            filters={FILTERS as unknown as string[]}
            activeFilters={activeFilters}
            onFilterToggle={toggleFilter}
          />

          {!chartOff && (
            <TokenizedAssetsChartPanel
              name={selected.name.toUpperCase()}
              ticker={selected.ticker}
              metaLabel="$5.7T MC"
              iconColor={selected.iconColor}
              iconInitials={selected.iconInitials}
              price={selected.price}
              priceDelta={selected.changePct >= 0 ? '+$8.82' : '-$3.21'}
              priceDeltaPct={`(${selected.changePct >= 0 ? '+' : ''}${selected.changePct.toFixed(2)}%)`}
              isPositive={selected.changePct >= 0}
              timeframe={timeframe}
              onTimeframeChange={setTimeframe}
            />
          )}

          <TokenizedAssetsTradePanel
            mode={mode}
            onModeChange={setMode}
            pay={{
              symbol: 'BNB',
              iconColor: '#F0B90B',
              balance: '0.00',
              usdValue: '$0.00',
            }}
            payAmount={payAmount}
            onPayAmountChange={setPayAmount}
            receive={{
              symbol: selected.ticker,
              iconColor: selected.iconColor,
              iconInitials: selected.iconInitials,
              balance: '0.00',
              usdValue: '$0.00',
            }}
            receiveAmount={receiveAmount}
            onReceiveAmountChange={setReceiveAmount}
            slippage="0.5"
            rateLabel={`1 BNB = 326.01 ${selected.ticker}`}
            offHoursWarning
            ctaLabel="Connect Wallet"
            ctaDisabled={false}
          />
        </Grid>
      </Content>
    </Root>
  )
}
