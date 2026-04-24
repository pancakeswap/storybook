import { useMemo, useState } from 'react'
import '../ui/perps.css'
import './TokenSelectDropdown.css'
import { Input, InputGroup } from '../ui/components/Input'
import { Text } from '../ui/components/Text'

export interface TokenOption {
  /** Unique id (e.g. 'usdc'). */
  id: string
  /** Ticker, e.g. 'USDC'. */
  symbol: string
  /** Full name, e.g. 'USD Coin'. */
  name: string
  /** Balance as a formatted string, e.g. '1,053.62'. Shows '0' if zero. */
  balance?: string
  /** USD value of the balance, e.g. '$1,053.62'. Omit to hide. */
  usdValue?: string
  /** Token logo — a React node (usually an SVG / img). Optional — defaults to a colored circle with initial. */
  icon?: React.ReactNode
}

export interface TokenSelectDropdownProps {
  /** The currently selected token; shown in the header. */
  selectedId?: string
  /** Token list to render. */
  tokens?: TokenOption[]
  /** Fired when a token is picked. */
  onSelect?: (token: TokenOption) => void
  /** Fired when the close X is clicked. */
  onClose?: () => void
  /** Whether to render the loading spinner at the bottom of the list. */
  loading?: boolean
}

/* ── Icons ────────────────────────────────────────────────── */
function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function Spinner() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="tsd-spinner" aria-label="Loading">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2.5" />
      <path d="M21 12a9 9 0 00-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

/* ── Default token icons ──────────────────────────────────── */
function BnbLogo() {
  return (
    <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="#F0B90B"/>
      <path d="M11.1 14.9L16 10l4.9 4.9 2.85-2.85L16 4.3 8.25 12.05zm-6.8 1.1L7.15 13.15 10 16l-2.85 2.85zM11.1 17.1L16 22l4.9-4.9 2.85 2.85L16 27.7l-7.75-7.75 2.85-2.85zm10.75-1.1L24.7 13.15 27.55 16 24.7 18.85z" fill="#fff"/>
      <path d="M18.9 16L16 13.1 13.85 15.25 13.6 15.5l-.35.35L13.1 16l2.9 2.9 2.9-2.9z" fill="#fff"/>
    </svg>
  )
}

function UsdcLogo() {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="#2775CA"/>
      <path d="M20 6C12.3 6 6 12.3 6 20s6.3 14 14 14 14-6.3 14-14S27.7 6 20 6z" fill="#2775CA"/>
      <path d="M22 17.5c0-1.4-.8-1.9-2.5-2.1-1.2-.2-1.4-.5-1.4-1s.4-.8 1.1-.8c.6 0 1 .2 1.2.7.1.2.2.3.4.3h.5c.2 0 .4-.2.4-.4v0a1.9 1.9 0 00-1.7-1.5v-.7c0-.2-.2-.4-.4-.4h-.6c-.2 0-.4.2-.4.4v.6c-1.2.2-2 .9-2 1.9 0 1.4.8 1.9 2.5 2.1 1.1.2 1.4.5 1.4 1s-.5.9-1.2.9c-.9 0-1.3-.3-1.4-.8-.1-.2-.2-.3-.4-.3h-.5c-.2 0-.4.2-.4.4v0c.2.9.8 1.5 1.9 1.7v.7c0 .2.2.4.4.4h.6c.2 0 .4-.2.4-.4v-.7c1.2-.2 2.1-.8 2.1-1.9z" fill="#fff"/>
      <path d="M17.5 27.5c-4-1.4-6-5.7-4.6-9.6.7-2.1 2.4-3.7 4.6-4.5.2-.1.3-.3.3-.5v-.5c0-.2-.1-.3-.3-.3-.1 0-.1 0-.2.1-4.8 1.5-7.4 6.5-5.9 11.3.9 2.8 3.1 5 5.9 5.9.2.1.4 0 .4-.2v-.5c0-.2-.1-.3-.3-.4zm4.9-15.4c-.2-.1-.4 0-.4.2v.5c0 .2.1.3.3.4 4 1.4 6 5.7 4.6 9.6-.7 2.1-2.4 3.7-4.6 4.5-.2.1-.3.3-.3.5v.5c0 .2.1.3.3.3.1 0 .1 0 .2-.1 4.8-1.5 7.4-6.5 5.9-11.3-.9-2.8-3.1-5-5.9-5.9z" fill="#fff"/>
    </svg>
  )
}

function UsdtLogo() {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="#26A17B"/>
      <path d="M22.2 17.6v-2.2h5v-3.3H12.8v3.3h5v2.2c-4.1.2-7.2 1-7.2 2s3.1 1.8 7.2 2v7H22v-7c4.1-.2 7.2-1 7.2-2s-3.1-1.8-7.2-2zm0 3.4v0c-.1 0-.6 0-1.7 0-.9 0-1.5 0-1.7 0v0c-3.7-.2-6.4-.8-6.4-1.6s2.7-1.4 6.4-1.6v2.7c.2 0 .9 0 1.7 0 1.1 0 1.6 0 1.7 0V18c3.7.2 6.4.8 6.4 1.6s-2.7 1.4-6.4 1.6z" fill="#fff"/>
    </svg>
  )
}

function WethLogo() {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="#ED4B9E"/>
      <text x="20" y="24" fontFamily="Kanit,sans-serif" fontSize="10" fontWeight="700" fill="#fff" textAnchor="middle">WETH</text>
    </svg>
  )
}

function DaiLogo() {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="#F5AC37"/>
      <path d="M20 9c-6 0-11 5-11 11s5 11 11 11 11-5 11-11S26 9 20 9zm0 19c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fill="#fff"/>
      <path d="M14 18h12v1.5H14zM14 21h12v1.5H14z" fill="#F5AC37"/>
    </svg>
  )
}

function EthLogo() {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="#627EEA"/>
      <path d="M20.5 7v9.9l8.4 3.7-8.4-13.6zM20.5 7L12 20.6l8.5-3.7V7zM20.5 27.9v6.1l8.4-11.6-8.4 5.5zM20.5 34v-6.1L12 22.4 20.5 34zM20.5 26.5l8.4-5.5-8.4-3.7v9.2zM12 21l8.5 5.5v-9.2L12 21z" fill="#fff"/>
    </svg>
  )
}

/* ── Default token list ────────────────────────────────────── */
const DEFAULT_TOKENS: TokenOption[] = [
  { id: 'usdc', symbol: 'USDC', name: 'USD Coin',         balance: '1,053.62', usdValue: '$1,053.62', icon: <UsdcLogo /> },
  { id: 'usdt', symbol: 'USDT', name: 'Tether USD',       balance: '1,053.62', usdValue: '$1,053.62', icon: <UsdtLogo /> },
  { id: 'weth', symbol: 'WETH', name: 'Wrapped Ethereum', balance: '1,053.62', usdValue: '$1,053.62', icon: <WethLogo /> },
  { id: 'dai',  symbol: 'DAI',  name: 'Dai Coin',         balance: '0',                                 icon: <DaiLogo  /> },
  { id: 'eth',  symbol: 'ETH',  name: 'Ethereum',         balance: '0',                                 icon: <EthLogo  /> },
]

const DEFAULT_SELECTED: TokenOption = {
  id: 'bnb', symbol: 'BNB', name: 'BNB', icon: <BnbLogo />,
}

export function TokenSelectDropdown({
  selectedId = 'bnb',
  tokens = DEFAULT_TOKENS,
  onSelect,
  onClose,
  loading = true,
}: TokenSelectDropdownProps) {
  const [query, setQuery] = useState('')

  // Resolve the header's displayed token. Prefer one from `tokens`, else the default BNB.
  const selected = useMemo<TokenOption>(() => {
    return tokens.find((t) => t.id === selectedId) ?? DEFAULT_SELECTED
  }, [tokens, selectedId])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return tokens
    return tokens.filter(
      (t) => t.symbol.toLowerCase().includes(q) || t.name.toLowerCase().includes(q),
    )
  }, [tokens, query])

  return (
    <section className="perps-root tsd-root" aria-label="Select a token">
      {/* Header with selected token + close + search */}
      <div className="tsd-header">
        <div className="tsd-header-row">
          <div className="tsd-selected">
            <span className="tsd-selected-icon">
              {selected.icon ?? (
                <span className="tsd-fallback-icon">{selected.symbol[0]}</span>
              )}
            </span>
            <Text fontSize="20px" bold className="tsd-selected-symbol">
              {selected.symbol}
            </Text>
          </div>
          <button
            type="button"
            className="tsd-close"
            onClick={onClose}
            aria-label="Close token selector"
          >
            <CloseIcon />
          </button>
        </div>

        <InputGroup
          startIcon={<SearchIcon />}
        >
          <Input
            type="search"
            placeholder="Search a token by name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search tokens"
          />
        </InputGroup>
      </div>

      {/* Token list */}
      <ul className="tsd-list" role="listbox" aria-label="Tokens">
        {filtered.map((t, i) => (
          <li key={t.id}>
            <button
              type="button"
              role="option"
              aria-selected={t.id === selectedId}
              className={`tsd-item${i === 0 ? ' tsd-item--highlight' : ''}`}
              onClick={() => onSelect?.(t)}
            >
              <span className="tsd-item-icon">
                {t.icon ?? (
                  <span className="tsd-fallback-icon">{t.symbol[0]}</span>
                )}
              </span>
              <span className="tsd-item-main">
                <Text fontSize="16px" bold className="tsd-item-symbol">{t.symbol}</Text>
                <Text color="textSubtle" fontSize="14px" className="tsd-item-name">{t.name}</Text>
              </span>
              <span className="tsd-item-right">
                <Text fontSize="16px" bold className="tsd-item-balance">{t.balance ?? '0'}</Text>
                {t.usdValue && (
                  <Text color="textSubtle" fontSize="14px" className="tsd-item-usd">{t.usdValue}</Text>
                )}
              </span>
            </button>
          </li>
        ))}

        {loading && (
          <li className="tsd-loading" aria-hidden="true">
            <Spinner />
          </li>
        )}
      </ul>
    </section>
  )
}
