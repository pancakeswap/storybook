/**
 * Shared layout components for the Wallet section of PancakeSwap.
 * Used by Dashboard, Positions, and History pages.
 */
import type { ReactNode } from 'react'
import { Button } from '../components/Button'
import { WalletAvatar } from '../widgets/WalletAvatar'
import { DropdownMenu } from '../widgets/DropdownMenu'
import {
  LogoWithTextIcon,
  SearchIcon,
  ChevronDownIcon,
  ShareIcon,
  NotificationBellIcon,
  SettingsIcon,
  LinkIcon,
  TwitterIcon,
} from '../Icons'

/* ── Types ─────────────────────────────────────────────────── */

export type WalletTab = 0 | 1 | 2

/* ── App Nav ─────────────────────────────────────────────────── */

const NAV_ITEMS = ['Trade', 'Perps', 'Earn', 'Play', 'AI', 'Dashboard']

const iconBtnStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: 'var(--pcs-colors-text-subtle)',
  padding: 8,
  borderRadius: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export function AppNav() {
  return (
    <header
      style={{
        height: 64,
        background: 'var(--pcs-colors-card)',
        borderBottom: '1px solid var(--pcs-colors-card-border)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 40px',
        gap: 24,
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        <LogoWithTextIcon size={120} style={{ color: 'var(--pcs-colors-text)' }} />
      </div>

      {/* Nav items */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: 4, flex: 1 }}>
        {NAV_ITEMS.map((item) => {
          const isActive = item === 'Dashboard'
          return (
            <button
              key={item}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px 12px',
                borderRadius: 12,
                color: isActive ? 'var(--pcs-colors-text)' : 'var(--pcs-colors-text-subtle)',
                fontSize: 16,
                fontWeight: isActive ? 600 : 400,
                fontFamily: 'Kanit, sans-serif',
                borderBottom: isActive ? '2px solid var(--pcs-colors-primary)' : '2px solid transparent',
              }}
            >
              {item}
            </button>
          )
        })}
      </nav>

      {/* Right actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            background: 'var(--pcs-colors-input)',
            border: '1px solid var(--pcs-colors-input-secondary)',
            borderRadius: 12,
            padding: '6px 12px',
            cursor: 'pointer',
            color: 'var(--pcs-colors-text-subtle)',
            fontSize: 14,
            fontFamily: 'Kanit, sans-serif',
            minWidth: 120,
          }}
        >
          <SearchIcon size={16} />
          <span>Search</span>
          <span style={{ marginLeft: 'auto', opacity: 0.5, fontSize: 12 }}>/</span>
        </button>

        <button style={iconBtnStyle} aria-label="Notifications">
          <NotificationBellIcon size={20} />
        </button>
        <button style={iconBtnStyle} aria-label="Settings">
          <SettingsIcon size={20} />
        </button>

        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            background: 'var(--pcs-colors-tertiary)',
            border: 'none',
            borderRadius: 12,
            padding: '8px 12px',
            cursor: 'pointer',
            color: 'var(--pcs-colors-primary)',
            fontSize: 14,
            fontWeight: 600,
            fontFamily: 'Kanit, sans-serif',
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #F0B90B, #E8831A)',
            }}
          />
          <span>$0.00</span>
          <ChevronDownIcon size={16} />
        </button>
      </div>
    </header>
  )
}

/* ── Page Header sub-components ──────────────────────────────── */

const SHARE_ITEMS = [
  { label: 'Copy link', icon: <LinkIcon size={16} /> },
  { label: 'Share on X', icon: <TwitterIcon size={16} /> },
]

function ChainIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: 24, height: 24, borderRadius: 6, display: 'block', flexShrink: 0 }}
    />
  )
}

const NETWORK_ITEMS = [
  { label: 'All networks' },
  {
    label: 'BNB Chain',
    icon: <ChainIcon src="https://assets.pancakeswap.finance/web/chains/square/56.svg" alt="BNB Chain" />,
  },
  {
    label: 'Ethereum',
    icon: <ChainIcon src="https://assets.pancakeswap.finance/web/chains/square/1.svg" alt="Ethereum" />,
  },
  {
    label: 'Base',
    icon: <ChainIcon src="https://assets.pancakeswap.finance/web/chains/square/8453.svg" alt="Base" />,
  },
  {
    label: 'Arbitrum',
    icon: <ChainIcon src="https://assets.pancakeswap.finance/web/chains/square/42161.svg" alt="Arbitrum" />,
  },
]

// Overlapping chain icon cluster — matches Figma "Network multiselect button"
const CHAIN_ICON_URLS = [
  'https://assets.pancakeswap.finance/web/chains/square/56.svg',    // BNB
  'https://assets.pancakeswap.finance/web/chains/square/1.svg',     // ETH
  'https://assets.pancakeswap.finance/web/chains/square/8453.svg',  // Base
]

function NetworkIconsCluster() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', flexShrink: 0 }}>
      {CHAIN_ICON_URLS.map((url, i) => (
        <div
          key={url}
          style={{
            display: 'flex',
            width: 24,
            height: 24,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            border: '2px solid var(--V1-Main-Input-primary, #EEEAF4)',
            background: '#1E1E1E',
            marginLeft: i > 0 ? -8 : 0,
            position: 'relative',
            zIndex: CHAIN_ICON_URLS.length - i,
            flexShrink: 0,
            boxSizing: 'border-box',
            overflow: 'hidden',
          }}
        >
          <img
            src={url}
            alt=""
            style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
          />
        </div>
      ))}
      <span
        style={{
          marginLeft: 4,
          fontSize: 12,
          fontWeight: 600,
          fontFamily: 'Kanit, sans-serif',
          color: 'var(--pcs-colors-text-subtle)',
          alignSelf: 'center',
        }}
      >
        +6
      </span>
    </div>
  )
}

/* ── Page Header ─────────────────────────────────────────────── */

export function PageHeader() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', paddingLeft: 16, gap: 2, alignSelf: 'stretch', paddingTop: 40 }}>
      {/* Left: wallet avatar — H2 Mobile: 16px / 600 / lineHeight 1.5 / tracking 0 */}
      <WalletAvatar
        address="0x40Cf56E5bB1C8F11bC1b1cd6a5c7bAdE2E2a5461"
        fontSize={32}
      />

      {/* Right: share + network */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>

        {/* Share — text left, icon right, 12px h-padding, 9px v-padding, 8px gap */}
        <DropdownMenu
          trigger={
            <Button
              variant="light"
              scale="sm"
              style={{ padding: '9px 12px', display: 'flex', alignItems: 'center', gap: 8, height: 'auto' }}
            >
              Share
              <ShareIcon size={16} />
            </Button>
          }
          items={SHARE_ITEMS}
        />

        {/* Networks — 16px left, icons+6, 8px gap, label, 8px gap, chevron, 8px right, 9px v */}
        <DropdownMenu
          trigger={
            <Button
              variant="light"
              scale="sm"
              style={{ padding: '9px 8px 9px 16px', display: 'flex', alignItems: 'center', gap: 8, height: 'auto' }}
            >
              <NetworkIconsCluster />
              All networks
              <ChevronDownIcon size={14} />
            </Button>
          }
          items={NETWORK_ITEMS}
          placement="bottom-end"
        />
      </div>
    </div>
  )
}

/* ── Wallet Tabs ─────────────────────────────────────────────── */

const WALLET_TAB_LABELS = ['Overview', 'Positions', 'History'] as const

function WalletTabs({ activeTab, onTabChange }: { activeTab: WalletTab; onTabChange: (tab: WalletTab) => void }) {
  return (
    <div
      role="tablist"
      style={{
        display: 'flex',
      }}
    >
      {WALLET_TAB_LABELS.map((label, i) => {
        const isActive = activeTab === i
        return (
          <button
            key={label}
            role="tab"
            aria-selected={isActive}
            onClick={() => onTabChange(i as WalletTab)}
            style={{
              background: 'none',
              border: 'none',
              padding: i === 0 ? '12px 12px 12px 16px' : '12px',
              cursor: 'pointer',
              fontFamily: 'Kanit, sans-serif',
              fontSize: 16,
              fontWeight: isActive ? 600 : 400,
              lineHeight: 1.5,
              color: isActive ? 'var(--pcs-colors-secondary)' : 'var(--pcs-colors-text-subtle)',
              transition: 'color 0.2s',
            }}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

/* ── Wallet Page Shell ───────────────────────────────────────── */

interface WalletPageShellProps {
  activeTab: WalletTab
  onTabChange: (tab: WalletTab) => void
  children: ReactNode
}

export function WalletPageShell({ activeTab, onTabChange, children }: WalletPageShellProps) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--pcs-colors-background)', fontFamily: 'Kanit, sans-serif' }}>
      <AppNav />
      <div style={{ padding: '0 40px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <PageHeader />

          {/* Page tabs */}
          <div style={{ marginTop: 0, marginBottom: 12 }}>
            <WalletTabs activeTab={activeTab} onTabChange={onTabChange} />
          </div>

          {children}
        </div>
      </div>
    </div>
  )
}
