import React from 'react'
import styled from 'styled-components'
import { Card } from '../primitives/Card'
import { Text } from '../primitives/Text'
import { Heading } from '../primitives/Heading'
import { Input } from '../primitives/Input'
import { SearchIcon, StarLineIcon, StarFillIcon } from '../primitives/Icons'

/**
 * Stateless tokenized-assets browser used on the Tokenized Swap page (Figma
 * 22416-2164). The consumer owns the search query, active filter, and the
 * (optional) favorited-asset set.
 *
 * The card height is controlled by the caller — pass `height` matching the
 * paired swap-form card so the two columns align.
 */
export interface TokenizedAsset {
  id: string
  /** Full company / asset name, e.g. "Nvidia corp" */
  name: string
  /** Ticker, e.g. "NVDAx" */
  symbol: string
  /** Token logo URLs — first successful one is used. */
  logoUrls?: string[]
  /** Pre-formatted USD price, e.g. "$235.31" */
  price: string
  /** 24h change percent. Sign chooses color. */
  changePct: number
  favorite?: boolean
  /** Optional source-list tag rendered next to the symbol (e.g. "Ondo", "xStocks"). */
  source?: string
}

export interface TokenizedAssetsListProps {
  searchQuery: string
  onSearchChange: (next: string) => void
  searchPlaceholder?: string
  /** Filter chips, in display order. The first is treated as "All". */
  filters: readonly string[]
  /** Optional count per filter, keyed by filter label. The number is only
   * rendered on the currently-active chip, so consumers can keep the inactive
   * chips lean. Missing entries render no count. */
  filterCounts?: Readonly<Record<string, number>>
  activeFilter: string
  onFilterChange: (next: string) => void
  assets: readonly TokenizedAsset[]
  selectedAssetId?: string
  onAssetClick?: (id: string) => void
  onFavoriteToggle?: (id: string) => void
}

const ListRoot = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  & > div {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 0;
  }
`

const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px 24px 8px;
`

const FilterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`

const FilterChip = styled.button<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 9px;
  border-radius: 999px;
  border: 2px solid
    ${({ $active, theme }) => ($active ? theme.colors.secondary : theme.colors.tertiary)};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.tertiary : theme.colors.tertiary};
  color: ${({ $active, theme }) => ($active ? theme.colors.text : theme.colors.textSubtle)};
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  line-height: 1.5;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.text};
  }
`

const Scroll = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 8px 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  scrollbar-width: thin;
`

const FadeOverlay = styled.div`
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 0;
  height: 75px;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    transparent 0%,
    ${({ theme }) => theme.colors.card} 100%
  );
`

const Row = styled.button<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 61px;
  padding: 6px 12px;
  border: 0;
  border-radius: 16px;
  background: ${({ $selected, theme }) =>
    $selected ? theme.colors.input : 'transparent'};
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: background 0.12s;
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.tertiary};
  }
`

const StarButton = styled.button<{ $on: boolean }>`
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;
  color: ${({ $on, theme }) => ($on ? theme.colors.warning : theme.colors.textSubtle)};
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  &:hover {
    color: ${({ theme }) => theme.colors.warning};
  }
`

const Logo = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.disabled};
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const LogoFallback = styled.div`
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const LogoBorder = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 999px;
  border: 0.6px solid ${({ theme }) => theme.colors.contrast};
  opacity: 0.1;
  pointer-events: none;
`

const Info = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  overflow: hidden;
`

const NameLine = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
  min-width: 0;
`

const SymbolLine = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
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
  text-transform: none;
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

const PriceCol = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`

const SearchField = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  & > svg {
    position: absolute;
    left: 12px;
    color: ${({ theme }) => theme.colors.textSubtle};
    pointer-events: none;
  }

  & > input {
    padding-left: 44px;
  }
`

function changeColor(pct: number) {
  if (pct > 0) return 'success' as const
  if (pct < 0) return 'failure' as const
  return 'textSubtle' as const
}

function formatPct(pct: number) {
  const sign = pct > 0 ? '+' : ''
  return `${sign}${pct.toFixed(2)}%`
}

export const TokenizedAssetsList: React.FC<TokenizedAssetsListProps> = ({
  searchQuery,
  onSearchChange,
  searchPlaceholder = 'Search Tokens / Pools',
  filters,
  filterCounts,
  activeFilter,
  onFilterChange,
  assets,
  selectedAssetId,
  onAssetClick,
  onFavoriteToggle,
}) => {
  return (
    <ListRoot>
      <Head>
        <SearchField>
          <SearchIcon width="24px" height="24px" />
          <Input
            value={searchQuery}
            placeholder={searchPlaceholder}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search tokenized assets"
          />
        </SearchField>
        <FilterRow role="tablist" aria-label="Asset categories">
          {filters.map((f) => {
            const active = f === activeFilter
            const count = filterCounts?.[f]
            return (
              <FilterChip
                key={f}
                $active={active}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => onFilterChange(f)}
              >
                {f}
                {active && count !== undefined && (
                  <span style={{ marginLeft: 6, opacity: 0.7 }}>{count}</span>
                )}
              </FilterChip>
            )
          })}
        </FilterRow>
      </Head>

      <Scroll>
        {assets.map((a) => {
          const selected = a.id === selectedAssetId
          const fallback = a.symbol.slice(0, 2).toUpperCase()
          const logoSrc = a.logoUrls?.find(Boolean)
          return (
            <Row
              key={a.id}
              type="button"
              $selected={selected}
              onClick={() => onAssetClick?.(a.id)}
              aria-label={`${a.name} ${a.symbol}, ${a.price}, ${formatPct(a.changePct)}`}
            >
              <StarButton
                $on={!!a.favorite}
                type="button"
                aria-label={a.favorite ? `Unfavorite ${a.symbol}` : `Favorite ${a.symbol}`}
                onClick={(e) => {
                  e.stopPropagation()
                  onFavoriteToggle?.(a.id)
                }}
              >
                {a.favorite ? (
                  <StarFillIcon width="16px" height="16px" />
                ) : (
                  <StarLineIcon width="16px" height="16px" />
                )}
              </StarButton>

              <Logo>
                {logoSrc ? (
                  <LogoImg src={logoSrc} alt="" />
                ) : (
                  <LogoFallback>{fallback}</LogoFallback>
                )}
                <LogoBorder />
              </Logo>

              <Info>
                <NameLine>
                  <Heading as="h4" scale="md" ellipsis>
                    {a.name}
                  </Heading>
                </NameLine>
                <SymbolLine>
                  <Text
                    bold
                    fontSize="12px"
                    color="textSubtle"
                    textTransform="uppercase"
                    style={{ letterSpacing: '0.24px' }}
                    ellipsis
                  >
                    {a.symbol}
                  </Text>
                  {a.source && (
                    <SourcePill $tone={sourceTone(a.source)}>{a.source}</SourcePill>
                  )}
                </SymbolLine>
              </Info>

              <PriceCol>
                <Text bold fontSize="20px">
                  {a.price}
                </Text>
                <Text fontSize="14px" color={changeColor(a.changePct)}>
                  {formatPct(a.changePct)}
                </Text>
              </PriceCol>
            </Row>
          )
        })}
      </Scroll>
      <FadeOverlay aria-hidden />
    </ListRoot>
  )
}

export default TokenizedAssetsList
