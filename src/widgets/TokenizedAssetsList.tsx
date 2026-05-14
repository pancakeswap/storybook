import React from 'react'
import styled, { css } from 'styled-components'
import { SearchIcon, StarFillIcon, StarLineIcon } from '../primitives/Icons'

export interface TokenizedAsset {
  id: string
  name: string
  ticker: string
  price: string
  changePct: number
  /** Token logo background color (used for the circular fallback). */
  iconColor: string
  /** Optional initial(s) drawn inside the circle. Defaults to first letter. */
  iconInitials?: string
}

export interface TokenizedAssetsListProps {
  assets: readonly TokenizedAsset[]
  selectedAssetId?: string | null
  onAssetSelect?: (id: string) => void

  favorites?: readonly string[]
  onToggleFavorite?: (id: string) => void

  searchQuery?: string
  onSearchChange?: (next: string) => void

  filters?: readonly string[]
  activeFilters?: readonly string[]
  onFilterToggle?: (filter: string) => void
}

const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 338px;
  height: 470px;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.card};
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 24px;
  overflow: hidden;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 16px;
  padding: 24px 24px 16px;
`

const SearchRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const SearchField = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  padding: 10px 12px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.textSubtle};
`

const SearchInput = styled.input`
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;
  outline: none;
  font-family: inherit;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`

const FilterButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.textSubtle};
  cursor: pointer;
  flex-shrink: 0;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

const TagRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`

const Chip = styled.button<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  height: 25px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid
    ${({ $active, theme }) => ($active ? theme.colors.secondary : theme.colors.cardBorder)};
  background: ${({ $active, theme }) =>
    $active ? 'rgba(118, 69, 217, 0.10)' : 'transparent'};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.secondary : theme.colors.textSubtle};
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`

const RowsScroll = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  padding: 4px 12px 16px;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`

const Row = styled.button<{ $selected?: boolean }>`
  display: grid;
  grid-template-columns: 16px 32px 1fr auto;
  align-items: center;
  gap: 8px;
  padding: 14px 12px;
  border: 0;
  border-radius: 16px;
  background: ${({ $selected, theme }) =>
    $selected ? theme.colors.background : 'transparent'};
  cursor: pointer;
  text-align: left;
  font-family: inherit;

  &:hover {
    border-radius: 16px;
    background: ${({ theme }) => theme.colors.background};
  }

  ${({ $selected }) =>
    $selected &&
    css`
      box-shadow: inset 0 0 0 1px var(--pcs-colors-card-border, currentColor);
    `}
`

const FavBtn = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.textSubtle};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.warning};
  }
`

const TokenCircle = styled.span<{ $color: string }>`
  display: inline-flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: ${({ $color }) => $color};
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.02em;
`

const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`

const Name = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Ticker = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
  letter-spacing: 0.02em;
`

const PriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`

const Price = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
`

const Change = styled.span<{ $positive: boolean }>`
  font-size: 12px;
  font-weight: 600;
  color: ${({ $positive, theme }) =>
    $positive ? theme.colors.success : theme.colors.failure};
  font-variant-numeric: tabular-nums;
`

function formatChange(pct: number): string {
  const sign = pct >= 0 ? '+' : ''
  return `${sign}${pct.toFixed(2)}%`
}

export const TokenizedAssetsList: React.FC<TokenizedAssetsListProps> = ({
  assets,
  selectedAssetId,
  onAssetSelect,
  favorites = [],
  onToggleFavorite,
  searchQuery = '',
  onSearchChange,
  filters = [],
  activeFilters = [],
  onFilterToggle,
}) => {
  const favSet = new Set(favorites)

  return (
    <Root aria-label="Tokenized assets">
      <Header>
        <SearchRow>
          <SearchField>
            <SearchIcon width={20} color="currentColor" />
            <SearchInput
              type="search"
              placeholder="Search Tokens / Stocks"
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              aria-label="Search tokens or stocks"
            />
          </SearchField>
          <FilterButton type="button" aria-label="Filters">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M3 6h18v2H3V6zm3 5h12v2H6v-2zm4 5h4v2h-4v-2z" />
            </svg>
          </FilterButton>
        </SearchRow>

        {filters.length > 0 && (
          <TagRow role="tablist" aria-label="Asset categories">
            {filters.map((f) => {
              const active = activeFilters.includes(f)
              return (
                <Chip
                  key={f}
                  type="button"
                  $active={active}
                  role="tab"
                  aria-selected={active}
                  onClick={() => onFilterToggle?.(f)}
                >
                  {f}
                </Chip>
              )
            })}
          </TagRow>
        )}
      </Header>

      <RowsScroll>
        {assets.map((a) => {
          const isFav = favSet.has(a.id)
          const isSelected = selectedAssetId === a.id
          const positive = a.changePct >= 0
          return (
            <Row
              key={a.id}
              type="button"
              $selected={isSelected}
              onClick={() => onAssetSelect?.(a.id)}
              aria-current={isSelected ? 'true' : undefined}
            >
              <FavBtn
                role="button"
                tabIndex={0}
                aria-label={isFav ? `Unfavorite ${a.ticker}` : `Favorite ${a.ticker}`}
                onClick={(e) => {
                  e.stopPropagation()
                  onToggleFavorite?.(a.id)
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    e.stopPropagation()
                    onToggleFavorite?.(a.id)
                  }
                }}
              >
                {isFav ? (
                  <StarFillIcon width={16} color="warning" />
                ) : (
                  <StarLineIcon width={16} color="currentColor" />
                )}
              </FavBtn>
              <TokenCircle $color={a.iconColor}>
                {a.iconInitials ?? a.ticker.replace(/x$/i, '').slice(0, 1)}
              </TokenCircle>
              <NameBlock>
                <Name>{a.name}</Name>
                <Ticker>{a.ticker}</Ticker>
              </NameBlock>
              <PriceBlock>
                <Price>{a.price}</Price>
                <Change $positive={positive}>{formatChange(a.changePct)}</Change>
              </PriceBlock>
            </Row>
          )
        })}
      </RowsScroll>
    </Root>
  )
}
