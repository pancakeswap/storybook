/**
 * Shared layout components for the Wallet section of PancakeSwap.
 * Used by Dashboard, Positions, and History pages.
 */
import { type ReactNode, useState, useEffect } from 'react'
import { Button } from '../components/Button'
import { WalletAvatar } from '../widgets/WalletAvatar'
import { DropdownMenu } from '../widgets/DropdownMenu'
import {
  LogoWithTextIcon,
  LogoIcon,
  SearchIcon,
  ChevronDownIcon,
  ShareIcon,
  NotificationBellIcon,
  SettingsIcon,
  LinkIcon,
  TwitterIcon,
} from '../Icons'

/* ── Breakpoint hook ─────────────────────────────────────────── */

function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280)
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return width
}

// PCS breakpoints: sm=576, lg=968, xxl=1200
export const BP_SM  = 576
export const BP_LG  = 968
const BP_XXL = 1200

export { useWindowWidth }

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
  const w = useWindowWidth()
  const mobile  = w < BP_LG   // < 968px: full compact
  const compact = w < BP_XXL  // < 1200px: icon logo + chevron

  return (
    <header
      style={{
        height: mobile ? 48 : 64,
        background: 'var(--pcs-colors-card)',
        borderBottom: '1px solid var(--pcs-colors-card-border)',
        display: 'flex',
        alignItems: 'center',
        padding: mobile ? '0 16px' : '0 40px',
        gap: mobile ? 8 : 24,
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
        {mobile ? (
          <LogoIcon size={24} />
        ) : compact ? (
          <>
            <LogoIcon size={24} />
            <ChevronDownIcon size={16} style={{ color: 'var(--pcs-colors-text-subtle)' }} />
          </>
        ) : (
          <LogoWithTextIcon size={120} style={{ color: 'var(--pcs-colors-text)' }} />
        )}
      </div>

      {/* Nav items — hidden on mobile */}
      {!mobile && (
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
      )}

      {/* Right actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: mobile ? 8 : 8, flexShrink: 0, marginLeft: mobile ? 'auto' : undefined }}>
        {mobile ? (
          /* Mobile: icon-only search */
          <button style={{ ...iconBtnStyle, width: 32, height: 32, padding: 4 }} aria-label="Search">
            <SearchIcon size={20} />
          </button>
        ) : (
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
        )}

        <button style={{ ...iconBtnStyle, ...(mobile ? { width: 32, height: 32, padding: 4 } : {}) }} aria-label="Notifications">
          <NotificationBellIcon size={20} />
        </button>
        <button style={{ ...iconBtnStyle, ...(mobile ? { width: 32, height: 32, padding: 4 } : {}) }} aria-label="Settings">
          <SettingsIcon size={20} />
        </button>

        {/* Wallet button — icon-only on mobile */}
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            background: 'var(--pcs-colors-tertiary)',
            border: 'none',
            borderRadius: 12,
            padding: mobile ? '4px 8px' : '8px 12px',
            cursor: 'pointer',
            color: 'var(--pcs-colors-primary)',
            fontSize: 14,
            fontWeight: 600,
            fontFamily: 'Kanit, sans-serif',
            height: mobile ? 32 : undefined,
          }}
        >
          <div
            style={{
              width: mobile ? 24 : 20,
              height: mobile ? 24 : 20,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #F0B90B, #E8831A)',
              flexShrink: 0,
            }}
          />
          {!mobile && <span>$0.00</span>}
          <ChevronDownIcon size={mobile ? 12 : 16} />
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
      <div
        style={{
          display: 'flex',
          width: 24,
          height: 24,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          border: '2px solid var(--V1-Main-Input-primary, #EEEAF4)',
          background: 'var(--V1-Main-Input-secondary, #D7CAEC)',
          marginLeft: -8,
          position: 'relative',
          zIndex: 0,
          fontSize: 12,
          fontWeight: 600,
          fontFamily: 'Kanit, sans-serif',
          color: 'var(--pcs-colors-text)',
          flexShrink: 0,
          boxSizing: 'border-box',
        }}
      >
        +6
      </div>
    </div>
  )
}

/* ── Page Header ─────────────────────────────────────────────── */

export function PageHeader() {
  const w = useWindowWidth()
  const mobile      = w < BP_LG   // < 968px
  const smallMobile = w < BP_SM   // < 576px

  /* ── Small-mobile: avatar on row 1, share+network on row 2 ── */
  if (smallMobile) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignSelf: 'stretch', paddingTop: 16 }}>
        {/* Row 1: wallet avatar */}
        <WalletAvatar
          address="0x40Cf56E5bB1C8F11bC1b1cd6a5c7bAdE2E2a5461"
          fontSize={20}
        />

        {/* Row 2: share (fixed) + network (flex-1) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <DropdownMenu
            trigger={
              <Button
                variant="light"
                scale="sm"
                style={{
                  padding: '7px 12px 9px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  height: 'auto',
                  lineHeight: '24px',
                  flexShrink: 0,
                }}
              >
                <ShareIcon size={16} />
              </Button>
            }
            items={SHARE_ITEMS}
          />

          <DropdownMenu
            trigger={
              <Button
                variant="light"
                scale="sm"
                style={{
                  padding: '7px 8px 9px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  height: 'auto',
                  lineHeight: '24px',
                  flex: 1,
                  justifyContent: 'flex-start',
                  width: '100%',
                }}
              >
                <NetworkIconsCluster />
                All networks
                <ChevronDownIcon size={14} style={{ marginLeft: 'auto' }} />
              </Button>
            }
            items={NETWORK_ITEMS}
            placement="bottom-end"
          />
        </div>
      </div>
    )
  }

  /* ── Tablet / desktop ─────────────────────────────────────── */
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', paddingLeft: mobile ? 0 : 16, gap: 2, alignSelf: 'stretch', paddingTop: mobile ? 16 : 40 }}>
      {/* Left: wallet avatar */}
      <WalletAvatar
        address="0x40Cf56E5bB1C8F11bC1b1cd6a5c7bAdE2E2a5461"
        fontSize={mobile ? 20 : 32}
      />

      {/* Right: share + network */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>

        {/* Share — icon-only on tablet */}
        <DropdownMenu
          trigger={
            <Button
              variant="light"
              scale="sm"
              style={{
                padding: '7px 12px 9px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                height: 'auto',
                lineHeight: '24px',
                minWidth: mobile ? 'unset' : undefined,
              }}
            >
              {!mobile && 'Share'}
              <ShareIcon size={16} />
            </Button>
          }
          items={SHARE_ITEMS}
        />

        {/* Networks — hide label text on tablet */}
        <DropdownMenu
          trigger={
            <Button
              variant="light"
              scale="sm"
              style={{
                padding: mobile ? '7px 8px 9px 8px' : '7px 8px 9px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                height: 'auto',
                lineHeight: '24px',
              }}
            >
              <NetworkIconsCluster />
              {!mobile && 'All networks'}
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
  const w = useWindowWidth()
  const mobile      = w < BP_LG
  const smallMobile = w < BP_SM

  return (
    <div style={{ minHeight: '100vh', background: 'var(--pcs-colors-background)', fontFamily: 'Kanit, sans-serif' }}>
      <AppNav />
      <div style={{ padding: smallMobile ? '0 16px 48px' : mobile ? '0 24px 48px' : '0 40px 48px' }}>
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
