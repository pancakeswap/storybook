import { useState } from 'react'
import '../ui/perps.css'
import './Navbar.css'
import { WalletPanel } from './WalletPanel'

export interface NavbarProps {
  /** Fired when Deposit pill is clicked. */
  onDeposit?: () => void
  /** Fired when user opts to withdraw from the wallet menu. */
  onWithdraw?: () => void
  /** Truncated wallet address to display, e.g. "0x64…a5a0". */
  walletAddress?: string
  /** Current mode of the Simple / Pro toggle. */
  mode?: 'simple' | 'pro'
  /** Fired when the user switches mode. */
  onModeChange?: (mode: 'simple' | 'pro') => void
}

function PancakeSwapLogo() {
  return (
    <svg viewBox="0 0 200 199" width="28" height="28" xmlns="http://www.w3.org/2000/svg" aria-label="PancakeSwap">
      <path fillRule="evenodd" clipRule="evenodd" d="M97.556 198.607c-29.192-.022-52.708-7.027-69.138-19.609-16.627-12.733-25.448-30.803-25.448-51.25 0-19.701 8.801-33.907 18.76-43.51 7.805-7.525 16.417-12.344 22.414-15.117-1.356-4.162-3.048-9.61-4.562-15.238-2.025-7.53-4.012-16.366-4.012-22.84 0-7.663 1.67-15.36 6.175-21.34C46.505 3.385 53.671 0 62.291 0c6.737 0 12.457 2.499 16.934 6.81 4.28 4.12 7.13 9.593 9.097 15.298 3.456 10.024 4.802 22.618 5.179 35.187h8.257c.378-12.569 1.723-25.163 5.18-35.187 1.967-5.705 4.815-11.177 9.096-15.298C120.512 2.5 126.231 0 132.968 0c8.621 0 15.786 3.385 20.546 9.703 4.505 5.98 6.176 13.677 6.176 21.34 0 6.474-1.988 15.31-4.013 22.84-1.514 5.628-3.206 11.076-4.562 15.238 5.997 2.773 14.61 7.592 22.414 15.118 9.959 9.602 18.76 23.808 18.76 43.509 0 20.447-8.82 38.517-25.448 51.25-16.43 12.582-39.946 19.587-69.138 19.609h-.147z" fill="#633001" />
      <path d="M62.29 7.288c-12.625 0-18.437 9.516-18.437 22.675 0 10.46 6.753 31.408 9.523 39.563.624 1.835-.356 3.844-2.142 4.555-10.119 4.031-39.981 18.789-39.981 52.588 0 35.603 30.347 62.448 86.31 62.491l.066-.001.067.001c55.962-.043 86.309-26.888 86.309-62.491 0-33.799-29.862-48.557-39.981-52.588-1.786-.71-2.765-2.72-2.142-4.555 2.771-8.154 9.524-29.103 9.524-39.563 0-13.16-5.812-22.675-18.438-22.675-18.174 0-22.705 26.007-23.028 53.92-.021 1.863-1.513 3.375-3.357 3.375H88.676c-1.845 0-3.336-1.512-3.358-3.375-.323-27.913-4.853-53.92-23.028-53.92z" fill="#D1884F" />
      <path d="M97.696 177.755c-41.118 0-86.372-22.235-86.443-51.018v.134c0 35.632 30.395 62.491 86.443 62.491s86.443-26.859 86.443-62.491v-.134c-.071 28.783-45.325 51.018-86.443 51.018z" fill="#FEDC90" />
      <path d="M74.85 117.896c0 9.718-4.546 14.779-10.154 14.779s-10.154-5.061-10.154-14.779 4.546-14.779 10.154-14.779 10.154 5.061 10.154 14.779zM140.851 117.896c0 9.718-4.546 14.779-10.154 14.779s-10.154-5.061-10.154-14.779 4.546-14.779 10.154-14.779 10.154 5.061 10.154 14.779z" fill="#633001" />
    </svg>
  )
}

function Wordmark() {
  // Simple text wordmark with current text color; looks correct in both themes.
  return (
    <span className="nb-wordmark" aria-label="PancakeSwap">
      PancakeSwap
    </span>
  )
}

function Caret() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 10l5 5 5-5z"/>
    </svg>
  )
}

function BnbGlyph() {
  return (
    <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="#F0B90B"/>
      <path d="M11.1 14.9L16 10l4.9 4.9 2.85-2.85L16 4.3 8.25 12.05zm-6.8 1.1L7.15 13.15 10 16l-2.85 2.85zM11.1 17.1L16 22l4.9-4.9 2.85 2.85L16 27.7l-7.75-7.75 2.85-2.85zm10.75-1.1L24.7 13.15 27.55 16 24.7 18.85z" fill="#fff"/>
      <path d="M18.9 16L16 13.1 13.85 15.25 13.6 15.5l-.35.35L13.1 16l2.9 2.9 2.9-2.9z" fill="#fff"/>
    </svg>
  )
}

function EthGlyph() {
  return (
    <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="#627EEA"/>
      <path d="M16.498 4v8.87l7.497 3.35z" fill="#fff" fillOpacity=".602"/>
      <path d="M16.498 4L9 16.22l7.498-3.35z" fill="#fff"/>
      <path d="M16.498 21.968v6.027L24 17.616z" fill="#fff" fillOpacity=".602"/>
      <path d="M16.498 27.995v-6.028L9 17.616z" fill="#fff"/>
      <path d="M16.498 20.573l7.497-4.353-7.497-3.348z" fill="#fff" fillOpacity=".2"/>
      <path d="M9 16.22l7.498 4.353v-7.701z" fill="#fff" fillOpacity=".602"/>
    </svg>
  )
}

function ArbitrumGlyph() {
  return (
    <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="#2D364D"/>
      <path d="M15.4 9.5L8.9 20.7h3.2l3.3-5.7 3.3 5.7h3.2L15.4 9.5z" fill="#28A0F0"/>
      <path d="M20.6 22.8h2.5V13.3l-2.5 4.3v5.2z" fill="#fff"/>
    </svg>
  )
}

function SolanaGlyph() {
  return (
    <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="#080808"/>
      <defs>
        <linearGradient id="sol-g" x1="6" y1="22" x2="26" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#9945FF"/>
          <stop offset=".5" stopColor="#19FB9B"/>
          <stop offset="1" stopColor="#00C2FF"/>
        </linearGradient>
      </defs>
      <path d="M9.5 21.3a.6.6 0 0 1 .44-.18h14.3a.3.3 0 0 1 .21.51l-2.95 2.95a.6.6 0 0 1-.43.18H6.75a.3.3 0 0 1-.21-.51l2.96-2.95zM9.5 9.4a.6.6 0 0 1 .44-.18h14.3a.3.3 0 0 1 .21.51l-2.95 2.95a.6.6 0 0 1-.43.18H6.75a.3.3 0 0 1-.21-.51L9.5 9.4zm13.01 5.92a.6.6 0 0 0-.43-.18H7.77a.3.3 0 0 0-.21.51l2.95 2.95a.6.6 0 0 0 .44.18h14.3a.3.3 0 0 0 .21-.51l-2.95-2.95z" fill="url(#sol-g)"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12l5 5L20 7" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

interface ChainOption {
  id: string
  label: string
  icon: JSX.Element
  iconBg: string
}

const CHAINS: ChainOption[] = [
  { id: 'bnb',  label: 'BNB Chain',    icon: <BnbGlyph />,      iconBg: '#1E1E1E' },
  { id: 'eth',  label: 'Ethereum',     icon: <EthGlyph />,      iconBg: '#627EEA' },
  { id: 'arb',  label: 'Arbitrum One', icon: <ArbitrumGlyph />, iconBg: '#2D364D' },
  { id: 'sol',  label: 'Solana',       icon: <SolanaGlyph />,   iconBg: '#080808' },
]

export function Navbar({
  onDeposit,
  onWithdraw,
  walletAddress = '0x64\u2026a5a0',
  mode = 'pro',
  onModeChange,
}: NavbarProps) {
  const [walletOpen, setWalletOpen] = useState(false)
  const [chainOpen, setChainOpen] = useState(false)
  const [chainId, setChainId] = useState('bnb')

  const selectedChain = CHAINS.find((c) => c.id === chainId) ?? CHAINS[0]

  return (
    <nav className="nb-root perps-root" aria-label="Main navigation">
      {/* Left: logo + tabs */}
      <div className="nb-left">
        <a href="#" className="nb-logo" aria-label="PancakeSwap home">
          <PancakeSwapLogo />
          <Wordmark />
        </a>

        {/* Simple / Pro toggle — Figma 147:13109 */}
        <div className="nb-mode-toggle" role="tablist" aria-label="Trading mode">
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'simple'}
            className={`nb-mode-tab${mode === 'simple' ? ' nb-mode-tab--active' : ''}`}
            onClick={() => onModeChange?.('simple')}
          >
            Simple
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'pro'}
            className={`nb-mode-tab${mode === 'pro' ? ' nb-mode-tab--active' : ''}`}
            onClick={() => onModeChange?.('pro')}
          >
            Pro
          </button>
        </div>
      </div>

      <div className="nb-spacer" />

      {/* Right: actions */}
      <div className="nb-right">
        <button type="button" className="nb-deposit-btn" onClick={onDeposit}>
          Deposit
        </button>

        <div className="nb-chain-wrap">
          <button
            type="button"
            className="nb-chain-pill"
            aria-label="Select chain"
            aria-haspopup="listbox"
            aria-expanded={chainOpen}
            onClick={() => setChainOpen((o) => !o)}
          >
            <span
              className="nb-chain-icon"
              style={{ background: selectedChain.iconBg }}
              aria-hidden="true"
            >
              {selectedChain.icon}
            </span>
            <Caret />
          </button>

          {chainOpen && (
            <div className="nb-chain-dropdown" role="listbox" aria-label="Select network">
              {CHAINS.map((c) => {
                const isSelected = c.id === chainId
                return (
                  <button
                    key={c.id}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    className="nb-chain-item"
                    onClick={() => { setChainId(c.id); setChainOpen(false) }}
                  >
                    <span
                      className="nb-chain-icon"
                      style={{ background: c.iconBg }}
                      aria-hidden="true"
                    >
                      {c.icon}
                    </span>
                    <span className="nb-chain-label">{c.label}</span>
                    {isSelected && (
                      <span className="nb-chain-check" aria-hidden="true">
                        <CheckIcon />
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          )}
        </div>

        <div className="nb-wallet-wrap">
          <button
            type="button"
            className="nb-wallet-btn"
            onClick={() => setWalletOpen((v) => !v)}
            aria-haspopup="true"
            aria-expanded={walletOpen}
          >
            <span className="nb-wallet-dot" aria-hidden="true" />
            <span className="nb-wallet-addr">{walletAddress}</span>
            <Caret />
          </button>

          {walletOpen && (
            <div className="nb-wallet-panel">
              <WalletPanel
                address={walletAddress}
                onDeposit={() => { onDeposit?.(); setWalletOpen(false) }}
                onWithdraw={() => { onWithdraw?.(); setWalletOpen(false) }}
                onDisconnect={() => setWalletOpen(false)}
              />
            </div>
          )}
        </div>

        <button type="button" className="nb-kebab" aria-label="More options">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="5" r="2"/>
            <circle cx="12" cy="12" r="2"/>
            <circle cx="12" cy="19" r="2"/>
          </svg>
        </button>
      </div>
    </nav>
  )
}
