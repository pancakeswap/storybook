import { useMemo, useState } from 'react'
import '../ui/perps.css'
import './MarketsDropdown.css'
import { Text } from '../ui/components/Text'

/* ── Types ────────────────────────────────────────────────── */

export interface MarketRow {
  id: string
  /** Display symbol, e.g. 'BTC'. */
  symbol: string
  /** Last traded price (formatted). */
  lastPrice: string
  /** Signed 24h change percent, e.g. '-0.52%' / '+1.04%'. */
  change24h: string
  /** 24h volume in quote currency, already formatted. */
  volume24h: string
  /** Token icon (React node). Optional — defaults to coloured circle + letter. */
  icon?: React.ReactNode
  /** Whether this market is currently starred (favourite). */
  favorite?: boolean
}

export type MarketTab = 'favorites' | 'all'

export interface MarketsDropdownProps {
  /** Visible tab. Controlled or uncontrolled. */
  initialTab?: MarketTab
  /** Market rows to render. */
  markets?: MarketRow[]
  /** Callback when a row is clicked. */
  onSelect?: (market: MarketRow) => void
  /** Callback when the star icon is toggled. */
  onToggleFavorite?: (market: MarketRow) => void
}

/* ── Default market icon (BTC) ────────────────────────────── */
function BtcIcon() {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="#F7931A" />
      <path
        d="M27.3 17.6c.4-2.6-1.6-4-4.4-4.9l.9-3.6-2.2-.6-.9 3.5c-.6-.1-1.2-.3-1.7-.4l.9-3.5-2.2-.5-.9 3.6c-.5-.1-.9-.2-1.4-.3l-3-.7-.6 2.4s1.6.4 1.6.4c.9.2 1 .8.9 1.2l-1 4.1c0 0 .1 0 .2.1-.1 0-.2-.1-.2-.1l-1.4 5.8c-.1.3-.4.7-1 .5 0 0-1.6-.4-1.6-.4l-1.1 2.5 2.8.7c.5.1 1 .3 1.5.4l-.9 3.6 2.2.5.9-3.6c.6.2 1.2.3 1.7.5l-.9 3.5 2.2.5.9-3.6c3.7.7 6.5.4 7.7-3 1-2.7-.1-4.3-2.1-5.3 1.4-.4 2.5-1.3 2.8-3.3zm-5 7c-.7 2.7-5.3 1.3-6.8.9l1.2-4.8c1.5.4 6.2 1.1 5.5 3.9zm.7-7.1c-.6 2.5-4.5 1.2-5.8.9l1.1-4.4c1.3.3 5.3.9 4.7 3.5z"
        fill="#fff"
      />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function SortIcon() {
  return (
    <svg width="12" height="18" viewBox="0 0 12 18" fill="none" aria-hidden="true">
      <path d="M3.5 7L6 4.5 8.5 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 11L6 13.5 8.5 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function StarIcon({ filled }: { filled?: boolean }) {
  return filled ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
    </svg>
  )
}

/* ── Default markets list ─────────────────────────────────── */
const DEFAULT_MARKETS: MarketRow[] = [
  { id: 'btcusdt',  symbol: 'BTCUSDT',  lastPrice: '84,185.5', change24h: '-0.52%', volume24h: '19,401,160', icon: <BtcIcon />, favorite: true  },
  { id: 'ethusdt',  symbol: 'ETHUSDT',  lastPrice: '3,245.9',  change24h: '+1.04%', volume24h: '12,380,942', icon: <BtcIcon />, favorite: true  },
  { id: 'solusdt',  symbol: 'SOLUSDT',  lastPrice: '152.2',    change24h: '-2.17%', volume24h: '4,521,304',  icon: <BtcIcon />, favorite: false },
  { id: 'bnbusdt',  symbol: 'BNBUSDT',  lastPrice: '612.4',    change24h: '+0.21%', volume24h: '2,140,000',  icon: <BtcIcon />, favorite: false },
  { id: 'cakeusdt', symbol: 'CAKEUSDT', lastPrice: '3.48',     change24h: '-0.52%', volume24h: '190,401',    icon: <BtcIcon />, favorite: false },
]

/* ── Component ────────────────────────────────────────────── */

export function MarketsDropdown({
  initialTab,
  markets = DEFAULT_MARKETS,
  onSelect,
  onToggleFavorite,
}: MarketsDropdownProps) {
  const [favs, setFavs]     = useState(
    () => new Set(markets.filter((m) => m.favorite).map((m) => m.id)),
  )
  // Default to "All Markets" when there are no favourites.
  const [tab, setTab]       = useState<MarketTab>(
    initialTab ?? (favs.size === 0 ? 'all' : 'favorites'),
  )
  const [query, setQuery]   = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const scoped = tab === 'favorites'
      ? markets.filter((m) => favs.has(m.id))
      : markets
    if (!q) return scoped
    return scoped.filter((m) => m.symbol.toLowerCase().includes(q))
  }, [markets, favs, tab, query])

  const toggleFav = (m: MarketRow, e: React.MouseEvent) => {
    e.stopPropagation()
    setFavs((prev) => {
      const next = new Set(prev)
      if (next.has(m.id)) next.delete(m.id)
      else next.add(m.id)
      return next
    })
    onToggleFavorite?.(m)
  }

  return (
    <section className="perps-root mkt-root" aria-label="Markets">
      {/* All Markets / Favorites tabs — left-aligned */}
      <div className="mkt-tabs">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'all'}
          className={`mkt-tab${tab === 'all' ? ' mkt-tab--active' : ''}`}
          onClick={() => setTab('all')}
        >
          All Markets
        </button>
        <span className="mkt-divider" aria-hidden="true" />
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'favorites'}
          className={`mkt-tab${tab === 'favorites' ? ' mkt-tab--active' : ''}`}
          onClick={() => setTab('favorites')}
        >
          Favorites
        </button>
      </div>

      {/* Search field — bespoke layout matching Figma 86:2590 */}
      <label className="mkt-search">
        <span className="mkt-search-icon" aria-hidden="true">
          <SearchIcon />
        </span>
        <input
          type="text"
          className="mkt-search-input"
          placeholder="All tokens"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search markets"
        />
      </label>

      {/* Column headers */}
      <div className="mkt-headers">
        <span className="mkt-header mkt-header--symbol">Symbols <SortIcon /></span>
        <span className="mkt-header">Last Price <SortIcon /></span>
        <span className="mkt-header">24h Change <SortIcon /></span>
        <span className="mkt-header mkt-header--vol">24h Vol (USDT) <SortIcon /></span>
      </div>

      {/* Market rows */}
      <ul className="mkt-list" role="listbox">
        {filtered.map((m) => {
          const isFav  = favs.has(m.id)
          const isDown = m.change24h.startsWith('-')
          return (
            <li key={m.id}>
              <button
                type="button"
                role="option"
                aria-selected={false}
                className="mkt-item"
                onClick={() => onSelect?.(m)}
              >
                <button
                  type="button"
                  className={`mkt-fav${isFav ? ' mkt-fav--on' : ''}`}
                  aria-label={isFav ? `Unstar ${m.symbol}` : `Star ${m.symbol}`}
                  onClick={(e) => toggleFav(m, e)}
                >
                  <StarIcon filled={isFav} />
                </button>

                <span className="mkt-token">
                  <span className="mkt-icon">
                    {m.icon ?? (
                      <span className="mkt-fallback-icon">{m.symbol[0]}</span>
                    )}
                  </span>
                  <Text fontSize="16px" bold className="mkt-symbol">{m.symbol}</Text>
                </span>

                <Text color="textSubtle" fontSize="12px" bold className="mkt-col mkt-col--price">
                  {m.lastPrice}
                </Text>
                <Text
                  fontSize="12px"
                  bold
                  className={`mkt-col mkt-col--change ${isDown ? 'mkt-text-failure' : 'mkt-text-success'}`}
                >
                  {m.change24h}
                </Text>
                <Text color="textSubtle" fontSize="12px" bold className="mkt-col mkt-col--vol">
                  {m.volume24h}
                </Text>
              </button>
            </li>
          )
        })}
        {filtered.length === 0 && (
          <li className="mkt-empty">
            <Text color="textSubtle" fontSize="14px">No markets match “{query}”.</Text>
          </li>
        )}
      </ul>
    </section>
  )
}
