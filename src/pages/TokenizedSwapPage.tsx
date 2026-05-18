import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import {
  TokenizedAssetsList,
  type TokenizedAsset,
} from '../widgets/TokenizedAssetsList'
import {
  TokenizedSwapForm,
  type SwapTokenSide,
} from '../widgets/TokenizedSwapForm'
import { Heading } from '../primitives/Heading'
import { PreTitle } from '../primitives/Text'
import {
  SearchIcon,
  BellIcon,
  CogIcon,
  ChevronDownIcon,
} from '../primitives/Icons'

/**
 * Page-level layout for the Tokenized Swap experience (Figma 22416-2164).
 * Composes the `TokenizedAssetsList` (left card) with `TokenizedSwapForm`
 * (right stacked cards) under a top page header that mirrors the live
 * pancake-frontend nav.
 *
 * State here is demo-only — the consumer in pancake-frontend will provide
 * a real router, wallet, and asset feed. We just need controlled values
 * so the page renders and feels interactive in Storybook.
 */
const FILTERS = ['All', 'Ondo', 'XStocks'] as const
type Filter = (typeof FILTERS)[number]

type AssetCategory = 'Ondo' | 'XStocks'
type AssetWithCategory = TokenizedAsset & { category: AssetCategory; address: string }

const XSTOCKS_URL = 'https://tokens.pancakeswap.finance/xstocks/xstocks-pancake.tokenlist.json'
const ONDO_URL = 'https://tokens.pancakeswap.finance/ondo-rwa-tokens.json'

interface RemoteToken {
  chainId: number
  symbol: string
  name: string
  logoURI?: string
  address: string
}

const BSC_CHAIN_ID = 56

/** Tiny deterministic hash so mock price/change stays stable across reloads. */
function hash(s: string) {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) h = ((h ^ s.charCodeAt(i)) * 16777619) >>> 0
  return h
}

function mockPrice(symbol: string): { price: string; changePct: number } {
  const h = hash(symbol)
  const dollars = 10 + (h % 990) // $10–$999
  const cents = (h >>> 8) % 100
  const sign = (h & 1) === 0 ? 1 : -1
  const changePct = sign * (((h >>> 4) % 800) / 100) // -8.00% – +8.00%
  return {
    price: `$${dollars.toLocaleString()}.${cents.toString().padStart(2, '0')}`,
    changePct: Math.round(changePct * 100) / 100,
  }
}

/** Strip the source label out of the upstream token name. */
function cleanName(raw: string): string {
  return raw
    .replace(/\s*x[Ss]tock\b\.?/g, '')
    .replace(/\s*\(Ondo\s+Tokenized\)/gi, '')
    .replace(/^Ondo\s+/i, '')
    .trim()
}

function toAsset(t: RemoteToken, category: AssetCategory): AssetWithCategory {
  const { price, changePct } = mockPrice(t.symbol)
  return {
    id: `${category.toLowerCase()}-${t.chainId}-${t.address.toLowerCase()}`,
    name: cleanName(t.name),
    symbol: t.symbol,
    logoUrls: t.logoURI ? [t.logoURI] : undefined,
    price,
    changePct,
    source: category === 'XStocks' ? 'xStocks' : 'Ondo',
    category,
    address: t.address.toLowerCase(),
  }
}

/**
 * Fetch 24h trading volume per token from DexScreener (BSC pairs only) and
 * return a {address → totalVolumeUSD} map. DexScreener accepts up to 30
 * addresses per call; rate limit is 300 req/min — well under what we need.
 * Failures fall back to 0 so those tokens sort to the bottom.
 */
async function fetchBscVolumeByAddress(
  addresses: string[],
  signal?: AbortSignal,
): Promise<Record<string, number>> {
  const out: Record<string, number> = {}
  const BATCH = 30
  for (let i = 0; i < addresses.length; i += BATCH) {
    const batch = addresses.slice(i, i + BATCH)
    try {
      const res = await fetch(
        `https://api.dexscreener.com/latest/dex/tokens/${batch.join(',')}`,
        { signal },
      )
      if (!res.ok) continue
      const data = (await res.json()) as {
        pairs?: Array<{
          chainId?: string
          baseToken?: { address?: string }
          volume?: { h24?: number }
        }> | null
      }
      for (const p of data.pairs ?? []) {
        if (p.chainId !== 'bsc') continue
        const base = p.baseToken?.address?.toLowerCase()
        if (!base) continue
        const v = Number(p.volume?.h24 ?? 0) || 0
        out[base] = (out[base] ?? 0) + v
      }
    } catch (err) {
      if ((err as { name?: string } | null)?.name === 'AbortError') throw err
      // ignore network errors — those tokens just stay at 0 volume.
    }
  }
  return out
}

const Root = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Kanit', sans-serif;
  color: ${({ theme }) => theme.colors.text};
`

// ── Top nav ──────────────────────────────────────────────────

const Nav = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
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

// ── Body ─────────────────────────────────────────────────────

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-image: linear-gradient(
    153.75deg,
    #e5fdff 0%,
    #f3efff 100%
  );
`

const Container = styled.div`
  width: 70vw;
  max-width: 70vw;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const TwoCol = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`

const LeftCol = styled.div`
  flex: 1 0 0%;
  min-width: 0;
  height: 70vh;
`

const RightCol = styled.div`
  flex: 1 0 0%;
  min-width: 0;
`

// ── Page ─────────────────────────────────────────────────────

export interface TokenizedSwapPageProps {
  /** Asset id to start selected. If omitted, the first asset loaded wins. */
  initialAssetId?: string
}

export function TokenizedSwapPage({
  initialAssetId,
}: TokenizedSwapPageProps = {}) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<Filter>(FILTERS[0])
  const [allAssets, setAllAssets] = useState<readonly AssetWithCategory[]>([])
  const [selectedId, setSelectedId] = useState<string | undefined>(initialAssetId)
  const [favorites, setFavorites] = useState<Set<string>>(() => new Set())
  const [toAmount, setToAmount] = useState('0.0')
  const [fromAmount, setFromAmount] = useState('0.0')

  useEffect(() => {
    const ctrl = new AbortController()
    Promise.all([
      fetch(ONDO_URL, { signal: ctrl.signal }).then((r) => r.json()),
      fetch(XSTOCKS_URL, { signal: ctrl.signal }).then((r) => r.json()),
    ])
      .then(async ([ondo, xstocks]) => {
        // Both lists include duplicate entries for multiple chains (xStocks
        // ships Ethereum + BNB Chain). The page is a BNB Chain experience, so
        // keep only chainId 56. The filter is a no-op for lists that already
        // single-chain (Ondo currently does).
        const xs = ((xstocks.tokens ?? []) as RemoteToken[]).filter(
          (t) => t.chainId === BSC_CHAIN_ID,
        )
        const od = ((ondo.tokens ?? []) as RemoteToken[]).filter(
          (t) => t.chainId === BSC_CHAIN_ID,
        )
        const combined: AssetWithCategory[] = [
          ...xs.map((t) => toAsset(t, 'XStocks')),
          ...od.map((t) => toAsset(t, 'Ondo')),
        ]
        // Show the page immediately with the upstream order while we fetch
        // volumes in the background. Volume sort lands a second pass.
        setAllAssets(combined)
        setFavorites((prev) => {
          if (prev.size > 0) return prev
          const first = combined.find((a) => a.category === 'XStocks')
          return first ? new Set([first.id]) : prev
        })
        setSelectedId((prev) => prev ?? combined[0]?.id)

        const volumes = await fetchBscVolumeByAddress(
          combined.map((a) => a.address),
          ctrl.signal,
        )
        const sorted = [...combined].sort(
          (a, b) => (volumes[b.address] ?? 0) - (volumes[a.address] ?? 0),
        )
        setAllAssets(sorted)
      })
      .catch((err) => {
        if (err?.name !== 'AbortError') console.error('Failed to load token lists', err)
      })
    return () => ctrl.abort()
  }, [])

  const visibleAssets = useMemo(() => {
    const q = query.trim().toLowerCase()
    return allAssets
      .filter((a) => (filter === 'All' ? true : a.category === filter))
      .filter((a) => {
        if (!q) return true
        return a.name.toLowerCase().includes(q) || a.symbol.toLowerCase().includes(q)
      })
      .map((a) => ({ ...a, favorite: favorites.has(a.id) }))
  }, [allAssets, filter, query, favorites])

  const selectedAsset = allAssets.find((a) => a.id === selectedId) ?? allAssets[0]

  const filterCounts = useMemo<Record<string, number>>(() => {
    let ondo = 0
    let xstocks = 0
    for (const a of allAssets) {
      if (a.category === 'Ondo') ondo++
      else if (a.category === 'XStocks') xstocks++
    }
    return { All: allAssets.length, Ondo: ondo, XStocks: xstocks }
  }, [allAssets])

  // Click on the left list populates the "To" side. "From" stays in the
  // empty "Select token" state until the user opens a wallet picker.
  const toSide: SwapTokenSide = {
    symbol: selectedAsset?.symbol ?? '',
    logoUrls: selectedAsset?.logoUrls,
    chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/56.svg',
    address: '0x40cf...5461',
    balance: '19.097',
    amount: toAmount,
    amountUsd: '~0.0 USD',
  }
  const fromSide: SwapTokenSide = {
    symbol: '',
    address: '',
    balance: '',
    amount: fromAmount,
    amountUsd: '',
  }

  return (
    <Root aria-label="Tokenized Assets — trade real-world assets on-chain">
      <Nav>
        <NavLeft>
          <Logo aria-label="PancakeSwap" />
          <Tabs aria-label="Primary">
            <TabLink type="button" $active>
              Trade
            </TabLink>
            <TabLink type="button">Perps</TabLink>
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
        <Container>
          <HeaderRow>
            <div>
              <PreTitle as="div">Invest in Tokenized Stocks</PreTitle>
              <Heading scale="lg" as="h1">
                Trade Real-world assets on-chain
              </Heading>
            </div>
          </HeaderRow>

          <TwoCol>
            <LeftCol>
              <TokenizedAssetsList
                searchQuery={query}
                onSearchChange={setQuery}
                searchPlaceholder="Search Tokenized assets by name or address"
                filters={FILTERS}
                filterCounts={filterCounts}
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
            <RightCol>
              <TokenizedSwapForm
                toSide={toSide}
                fromSide={fromSide}
                onToAmountChange={setToAmount}
                onFromAmountChange={setFromAmount}
                slippage="0.5%"
                rateFromLabel="1 BNB"
                rateToLabel="326.01 CAKE"
                canSubmit={false}
                submitLabel="Swap"
              />
            </RightCol>
          </TwoCol>
        </Container>
      </Body>
    </Root>
  )
}

export default TokenizedSwapPage
