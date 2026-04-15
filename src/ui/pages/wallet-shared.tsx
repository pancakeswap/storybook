/**
 * Shared layout components for the Wallet section of PancakeSwap.
 * Used by Dashboard, Positions, and History pages.
 */
import type { ReactNode } from 'react'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import { TabMenu, Tab } from '../components/TabMenu'
import {
  LogoWithTextIcon,
  SearchIcon,
  CopyIcon,
  ChevronDownIcon,
  ShareIcon,
  NotificationBellIcon,
  SettingsIcon,
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

/* ── Page Header ─────────────────────────────────────────────── */

export function PageHeader() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0 0' }}>
      {/* Left: wallet avatar + address */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1FC7D4, #7645D9)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -2,
              right: -2,
              width: 16,
              height: 16,
              borderRadius: '50%',
              background: '#F0B90B',
              border: '2px solid var(--pcs-colors-background)',
            }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Text bold fontSize="16px">0x40Cf...5461</Text>
          <button
            aria-label="Copy address"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--pcs-colors-text-subtle)',
              padding: 2,
              display: 'flex',
            }}
          >
            <CopyIcon size={16} />
          </button>
        </div>
      </div>

      {/* Center: stats */}
      <div style={{ display: 'flex', gap: 32 }}>
        {[
          { label: 'Positions', value: '0' },
          { label: '7D Swaps', value: '3' },
          { label: '7d Volume', value: '$100.98' },
        ].map(({ label, value }) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <Text fontSize="12px" color="textSubtle" style={{ marginBottom: 2 }}>
              {label}
            </Text>
            <Text bold fontSize="20px" style={{ fontVariantNumeric: 'tabular-nums' }}>
              {value}
            </Text>
          </div>
        ))}
      </div>

      {/* Right: share + network */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Button variant="light" scale="sm" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <ShareIcon size={16} />
          Share
        </Button>
        <Button variant="light" scale="sm" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1FC7D4 0%, #9A6AFF 50%, #F0B90B 100%)',
            }}
          />
          All networks
          <ChevronDownIcon size={14} />
        </Button>
      </div>
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
          <div style={{ marginTop: 12, marginBottom: 24 }}>
            <TabMenu
              activeIndex={activeTab}
              onItemClick={(i) => onTabChange(i as WalletTab)}
              isShowBorderBottom
            >
              <Tab>Overview</Tab>
              <Tab>Position</Tab>
              <Tab>History</Tab>
            </TabMenu>
          </div>

          {children}
        </div>
      </div>
    </div>
  )
}
