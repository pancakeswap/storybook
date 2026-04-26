import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '../primitives/Box'
import { Text } from '../primitives/Text'
import { SearchIcon } from '../primitives/Icons'

export interface MarketRow {
  /** Full venue symbol, e.g. 'BTCUSDT'. */
  symbol: string
  /** Raw last-traded price from the ticker (unformatted). */
  lastPrice?: string
  /** Raw signed 24h change percent, e.g. '1.04' or '-0.52'. */
  priceChangePercent?: string
  /** Raw 24h quote volume (USDT). */
  quoteVolume?: string
}

export interface MarketsDropdownProps {
  /** Raw market rows from the consumer's ticker query. */
  markets: MarketRow[]
  /** Symbols the user has starred. Consumer persists across sessions. */
  favorites: string[]
  /** Toggle callback — consumer flips the symbol in/out of its favorites set. */
  onToggleFavorite: (symbol: string) => void
  /** Row click callback — consumer navigates to the selected market. */
  onSelect: (symbol: string) => void
  /**
   * Logo lookup by base asset (e.g. `logoForSymbol('BTC') -> '...png'`).
   * Return undefined when no logo is available; the widget falls back to
   * a single-letter glyph.
   */
  logoForSymbol?: (baseAsset: string) => string | undefined
  /** Show a "Loading markets..." placeholder in the body when true. */
  isLoading?: boolean
  /** Translator. */
  t?: (key: string) => string
}

const Root = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  padding: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  max-height: 420px;
  display: flex;
  flex-direction: column;
`

const Tabs = styled(Flex)`
  gap: 16px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

const Tab = styled.button<{ $active: boolean }>`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${({ $active, theme }) => ($active ? theme.colors.primary : 'transparent')};
  margin-bottom: -1px;
  padding: 6px 0;
  color: ${({ $active, theme }) => ($active ? theme.colors.secondary : theme.colors.textSubtle)};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`

const SearchBox = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 14px;
  padding: 8px 12px;
  margin-bottom: 8px;
`

const SearchInput = styled.input`
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`

const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 32px minmax(120px, 2fr) 1fr 1fr 1fr;
  gap: 8px;
  padding: 6px 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

const Rows = styled.div`
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`

const Row = styled.button`
  display: grid;
  grid-template-columns: 32px minmax(120px, 2fr) 1fr 1fr 1fr;
  gap: 8px;
  align-items: center;
  padding: 10px 8px;
  width: 100%;
  text-align: left;
  background: transparent;
  border: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  &:hover {
    background: ${({ theme }) => theme.colors.input};
  }
`

const StarBtn = styled.button<{ $filled: boolean }>`
  background: transparent;
  border: 0;
  padding: 0;
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ $filled, theme }) => ($filled ? theme.colors.warning : theme.colors.textSubtle)};
  &:hover {
    color: ${({ theme }) => theme.colors.warning};
  }
`

const Symbol = styled(Flex)`
  align-items: center;
  gap: 8px;
  font-weight: 600;
`

const CoinBadge = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.text};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  flex-shrink: 0;
  overflow: hidden;
`

const CoinImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Val = styled(Text)<{ $tone?: 'up' | 'down' | 'default' }>`
  font-variant-numeric: tabular-nums;
  font-size: 14px;
  text-align: right;
  color: ${({ $tone, theme }) =>
    $tone === 'up' ? theme.colors.success : $tone === 'down' ? theme.colors.failure : theme.colors.text};
`

const Empty = styled(Flex)`
  padding: 24px;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const StarSvg: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinejoin="round"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
  </svg>
)

const fmtPrice = (v?: string) => {
  if (!v) return '—'
  const n = Number(v)
  if (!Number.isFinite(n)) return '—'
  if (n >= 100) return n.toLocaleString('en-US', { maximumFractionDigits: 2 })
  if (n >= 1) return n.toFixed(3)
  return n.toPrecision(4)
}

const fmtPct = (v?: string) => {
  if (!v) return '—'
  const n = Number(v)
  if (!Number.isFinite(n)) return '—'
  return `${n >= 0 ? '+' : ''}${n.toFixed(2)}%`
}

const fmtVol = (v?: string) => {
  if (!v) return '—'
  const n = Number(v)
  if (!Number.isFinite(n)) return '—'
  return n.toLocaleString('en-US', { maximumFractionDigits: 0 })
}

const baseAsset = (symbol: string) =>
  symbol.toUpperCase().replace(/USDT$/, '').replace(/USDC$/, '').replace(/USD$/, '') || symbol.toUpperCase()

const glyph = (symbol: string) => baseAsset(symbol).slice(0, 1) || symbol.slice(0, 1)

const identity = (s: string) => s

/**
 * Markets picker dropdown - tabs for All / Favorites, text search,
 * sorted table with live 24h stats. Stateless apart from the search
 * query and active tab (pure view-state).
 *
 * Sort order: markets are rendered in the order the consumer provides.
 * Frontend sorts by 24h quote volume desc at the hook level - matches
 * Aster's default ordering. If you need a different order (e.g. stable
 * alpha for storybook stories), sort before passing in.
 */
export const MarketsDropdown: React.FC<MarketsDropdownProps> = ({
  markets,
  favorites,
  onToggleFavorite,
  onSelect,
  logoForSymbol,
  isLoading = false,
  t = identity,
}) => {
  const [tab, setTab] = useState<'all' | 'favorites'>('all')
  const [query, setQuery] = useState('')

  const rows = useMemo(() => {
    const q = query.trim().toUpperCase()
    const searched = q ? markets.filter((d) => d.symbol.toUpperCase().includes(q)) : markets
    return tab === 'favorites' ? searched.filter((d) => favorites.includes(d.symbol)) : searched
  }, [markets, query, tab, favorites])

  return (
    <Root>
      <Tabs>
        <Tab $active={tab === 'all'} onClick={() => setTab('all')}>
          {t('All Markets')}
        </Tab>
        <Tab $active={tab === 'favorites'} onClick={() => setTab('favorites')}>
          {t('Favorites')}
        </Tab>
      </Tabs>

      <SearchBox>
        <SearchIcon width="16px" color="textSubtle" />
        <SearchInput
          placeholder={t('All tokens')}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label={t('Search markets')}
        />
      </SearchBox>

      <HeaderRow>
        <span />
        <span>{t('Symbols')}</span>
        <Val as="span" style={{ color: 'inherit' }}>
          {t('Last Price')}
        </Val>
        <Val as="span" style={{ color: 'inherit' }}>
          {t('24h Change')}
        </Val>
        <Val as="span" style={{ color: 'inherit' }}>
          {t('24h Vol')}
        </Val>
      </HeaderRow>

      <Rows role="listbox">
        {rows.length === 0 ? (
          <Empty>
            <Text fontSize="14px" color="textSubtle">
              {isLoading ? t('Loading markets...') : t('No markets')}
            </Text>
          </Empty>
        ) : (
          rows.map((r) => {
            const favorited = favorites.includes(r.symbol)
            const changeNum = Number(r.priceChangePercent)
            const logoUrl = logoForSymbol?.(baseAsset(r.symbol))
            return (
              <Row key={r.symbol} onClick={() => onSelect(r.symbol)} role="option">
                <StarBtn
                  $filled={favorited}
                  onClick={(e) => {
                    e.stopPropagation()
                    onToggleFavorite(r.symbol)
                  }}
                  aria-label={favorited ? t('Unfavorite') : t('Favorite')}
                  aria-pressed={favorited}
                >
                  <StarSvg filled={favorited} />
                </StarBtn>
                <Symbol>
                  <CoinBadge>
                    {logoUrl ? (
                      <CoinImg
                        src={logoUrl}
                        alt={baseAsset(r.symbol)}
                        loading="lazy"
                        onError={(e) => {
                          // 404/network fallback: replace broken <img>
                          // with a letter glyph so the row stays readable.
                          const img = e.currentTarget
                          img.style.display = 'none'
                          const parent = img.parentElement
                          if (parent && !parent.textContent) parent.textContent = glyph(r.symbol)
                        }}
                      />
                    ) : (
                      glyph(r.symbol)
                    )}
                  </CoinBadge>
                  <span>{r.symbol}</span>
                </Symbol>
                <Val>{fmtPrice(r.lastPrice)}</Val>
                <Val $tone={changeNum >= 0 ? 'up' : 'down'}>{fmtPct(r.priceChangePercent)}</Val>
                <Val>{fmtVol(r.quoteVolume)}</Val>
              </Row>
            )
          })
        )}
      </Rows>
    </Root>
  )
}
