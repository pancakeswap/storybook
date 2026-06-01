import { useState, useCallback, type ReactNode } from 'react'
import { useWindowWidth, BP_LG, BP_SM } from './wallet-shared'
import { Card, CardBody } from '../components/Card'
import { Text } from '../components/Text'
import { TableView } from '../components/TableView'
import type { IColumnsType, ISortOrder } from '../components/TableView/Table'
import { TokenDisplay } from '../widgets/TokenDisplay'
import type { TokenInfo } from '../widgets/TokenDisplay'
import { PortfolioBreakdown as PortfolioBreakdownCard } from '../widgets/PortfolioBreakdown'
import type { BreakdownItem } from '../widgets/PortfolioBreakdown'
import { Checkbox } from '../components/Checkbox'
import {
  LogoWithTextIcon,
  LogoIcon,
  SearchIcon,
  ChevronDownIcon,
  NotificationBellIcon,
  SettingsIcon,
  MoreHorizontalIcon,
  InfoIcon,
} from '../Icons'

/* ── Types ─────────────────────────────────────────────────── */

interface Token {
  id: string
  symbol: string
  chain: string
  tokenInfo: TokenInfo
  price: number
  change1d: number
  balanceAmount: number
  balanceSymbol: string
  value: number
  allocation: number
}

type WalletScope = 'evm' | 'solana'
type WalletTab12 = 0 | 1 | 2 | 3

/* ── Data ──────────────────────────────────────────────────── */

const TOKENS: Token[] = [
  {
    id: '1', symbol: 'BNB', chain: 'BNB Chain',
    tokenInfo: { symbol: 'BNB', chainName: 'BNB chain', logoUrls: ['https://tokens.pancakeswap.finance/images/symbol/bnb.png'], chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/56.svg' },
    price: 590.75, change1d: -1.20, balanceAmount: 0.542, balanceSymbol: 'BNB', value: 320.15, allocation: 16.92,
  },
  {
    id: '2', symbol: 'CAKE', chain: 'BNB Chain',
    tokenInfo: { symbol: 'CAKE', chainName: 'BNB chain', logoUrls: ['https://tokens.pancakeswap.finance/images/symbol/cake.png'], chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/56.svg' },
    price: 1.46, change1d: 0.83, balanceAmount: 144.11, balanceSymbol: 'CAKE', value: 210.40, allocation: 11.12,
  },
  {
    id: '3', symbol: 'ETH', chain: 'Ethereum',
    tokenInfo: { symbol: 'ETH', chainName: 'ETHEREUM', logoUrls: ['https://tokens.pancakeswap.finance/images/symbol/eth.png'], chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/1.svg' },
    price: 2181.25, change1d: -0.46, balanceAmount: 0.206, balanceSymbol: 'ETH', value: 450.30, allocation: 23.79,
  },
  {
    id: '4', symbol: 'WETH', chain: 'Ethereum',
    tokenInfo: { symbol: 'WETH', chainName: 'ETHEREUM', logoUrls: ['https://tokens.pancakeswap.finance/images/symbol/weth.png'], chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/1.svg' },
    price: 2199.85, change1d: -0.51, balanceAmount: 0.082, balanceSymbol: 'WETH', value: 180.25, allocation: 9.52,
  },
  {
    id: '5', symbol: 'USDC', chain: 'Ethereum',
    tokenInfo: { symbol: 'USDC', chainName: 'ETHEREUM', logoUrls: ['https://tokens.pancakeswap.finance/images/symbol/usdc.png'], chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/1.svg' },
    price: 1.00, change1d: 0.01, balanceAmount: 275.50, balanceSymbol: 'USDC', value: 275.50, allocation: 14.56,
  },
  {
    id: '6', symbol: 'USDC', chain: 'Base',
    tokenInfo: { symbol: 'USDC', chainName: 'BASE', logoUrls: ['https://tokens.pancakeswap.finance/images/symbol/usdc.png'], chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/8453.svg' },
    price: 1.00, change1d: 0.01, balanceAmount: 210.66, balanceSymbol: 'USDC', value: 210.66, allocation: 11.13,
  },
  {
    id: '7', symbol: 'USDT', chain: 'Arbitrum',
    tokenInfo: { symbol: 'USDT', chainName: 'ARBITRUM', logoUrls: ['https://tokens.pancakeswap.finance/images/symbol/usdt.png'], chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/42161.svg' },
    price: 1.00, change1d: -0.90, balanceAmount: 245.00, balanceSymbol: 'USDT', value: 245.00, allocation: 12.95,
  },
]

const NAV_TOTAL = '$6,488.98'

/* ── Chart ─────────────────────────────────────────────────── */

const CHART_VALUES = [850, 720, 650, 690, 1100, 1430, 1680, 1730, 1680, 1810, 1892]
const CHART_X_LABELS = ['1:00 AM', '5:00 AM', '9:00 AM', '1:00 PM', '5:00 PM', '9:00 PM']
const CHART_Y_LABELS = ['$3,500', '$3,000', '$2,500', '$2,000', '$1,500', '$1,000']
const TIME_RANGES = ['D', 'W', 'M', 'Y', 'All']

const CHART_W = 860
const CHART_H = 340
const CHART_PAD_TOP = 8
const CHART_PAD_BOTTOM = 32
const CHART_PAD_RIGHT = 52
const CHART_DRAW_H = CHART_H - CHART_PAD_TOP - CHART_PAD_BOTTOM
const CHART_DRAW_W = CHART_W - CHART_PAD_RIGHT
const MIN_V = 800
const MAX_V = 3500

function valueToY(v: number) {
  return CHART_PAD_TOP + (1 - (v - MIN_V) / (MAX_V - MIN_V)) * CHART_DRAW_H
}

function buildChartPath() {
  const pts = CHART_VALUES.map((v, i) => ({
    x: (i / (CHART_VALUES.length - 1)) * CHART_DRAW_W,
    y: valueToY(v),
  }))

  let line = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[i - 1]
    const p1 = pts[i]
    const cpx = (p0.x + p1.x) / 2
    line += ` C ${cpx} ${p0.y} ${cpx} ${p1.y} ${p1.x} ${p1.y}`
  }

  const last = pts[pts.length - 1]
  const first = pts[0]
  const area = `${line} L ${last.x} ${CHART_PAD_TOP + CHART_DRAW_H} L ${first.x} ${CHART_PAD_TOP + CHART_DRAW_H} Z`

  return { line, area }
}

const { line: CHART_LINE, area: CHART_AREA } = buildChartPath()

/* ── Formatters ─────────────────────────────────────────────── */

function fmtPrice(n: number) {
  if (n >= 1000) return `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  if (n >= 1) return `$${n.toFixed(2)}`
  return `$${n.toFixed(4)}`
}

function fmtAmount(n: number, symbol: string) {
  const formatted = n >= 100
    ? n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : n.toFixed(3)
  return `${formatted} ${symbol}`
}

function fmtValue(n: number) {
  return `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

/* ── Sub-components ─────────────────────────────────────────── */

function PnlTag({ value }: { value: number }) {
  const positive = value >= 0
  const color = positive ? 'var(--pcs-colors-success)' : 'var(--pcs-colors-failure)'
  const bg = positive ? 'rgba(49,208,170,0.1)' : 'rgba(237,75,158,0.1)'
  return (
    <span style={{
      display: 'inline-flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 2,
      background: bg,
      color,
      padding: '2px 8px',
      borderRadius: 999,
      fontSize: 14,
      fontWeight: 600,
      fontVariantNumeric: 'tabular-nums',
      fontFamily: 'Kanit, sans-serif',
    }}>
      <span style={{ fontSize: 10, lineHeight: 1 }}>{positive ? '▲' : '▼'}</span>
      <span>{Math.abs(value).toFixed(1)}%</span>
    </span>
  )
}

function AllocationBar({ pct }: { pct: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Text fontSize="14px" style={{ fontVariantNumeric: 'tabular-nums', minWidth: 44, textAlign: 'right' }}>
        {pct.toFixed(2)}%
      </Text>
      <div style={{
        width: 60,
        height: 8,
        borderRadius: 999,
        border: '1px solid var(--pcs-colors-input-secondary)',
        background: 'var(--pcs-colors-input)',
        boxShadow: '0 2px 0 -1px rgba(0, 0, 0, 0.06) inset',
        flexShrink: 0,
        overflow: 'hidden',
        boxSizing: 'border-box',
        position: 'relative',
      }}>
        <div style={{
          width: `${pct}%`,
          height: '100%',
          borderRadius: 999,
          background: 'var(--pcs-colors-secondary)',
        }} />
      </div>
    </div>
  )
}

/* ── App Nav (with aggregated wallet balance) ───────────────── */

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

function AppNav12() {
  const w = useWindowWidth()
  const mobile  = w < BP_LG
  const compact = w < 1200

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

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0, marginLeft: mobile ? 'auto' : undefined }}>
        {mobile ? (
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
          {!mobile && <span>{NAV_TOTAL}</span>}
          <ChevronDownIcon size={mobile ? 12 : 16} />
        </button>
      </div>
    </header>
  )
}

/* ── Wallet PFP cluster (40px avatar + 16px Metamask badge) ─── */

const WALLET_ADDRESS = '0x40Cf56E5bB1C8F11bC1b1cd6a5c7bAdE2E2a5461'

function MetamaskGlyph() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <g clipPath="url(#mm-clip)">
        <path d="M11.0066 11.802L8.46962 10.9891L6.55643 12.2199L5.22152 12.2193L3.30717 10.9891L0.771315 11.802L0 8.99946L0.771398 5.88905L0 3.25933L0.771398 0L4.73382 2.54786H7.04412L11.0066 0L11.778 3.25933L11.0066 5.88905L11.778 8.99946L11.0066 11.802Z" fill="#FF5C16"/>
        <path d="M0.771484 0L4.73399 2.54964L4.57646 4.29943L0.771484 0ZM3.30742 9.00062L5.05088 10.43L3.30742 10.989V9.00062ZM4.91152 6.63748L4.57646 4.30068L2.43158 5.88977L2.43042 5.88914V5.8903L2.43705 7.52599L3.30684 6.63757L4.91152 6.63748ZM11.0062 0L7.04371 2.54964L7.20074 4.29943L11.0062 0ZM8.47037 9.00062L6.72682 10.43L8.47037 10.989V9.00062ZM9.34679 5.89021V5.88905L9.34629 5.88968L7.20132 4.30068L6.86627 6.63748H8.47028L9.34065 7.52581L9.34679 5.89021Z" fill="#FF5C16"/>
        <path d="M3.30725 10.9888L0.771398 11.8018L0 9.00048H3.30725V10.9888ZM4.91135 6.63672L5.39572 10.0151L4.72437 8.13661L2.43639 7.52567L3.30667 6.63681L4.91135 6.63672ZM8.4707 10.9888L11.0066 11.8018L11.778 9.00039H8.4707C8.4707 9.00048 8.4707 10.9888 8.4707 10.9888ZM6.86668 6.63672L6.3823 10.0151L7.05358 8.13661L9.34172 7.52567L8.47086 6.63681L6.86668 6.63672Z" fill="#E34807"/>
        <path d="M0 8.99945L0.771398 5.88905H2.43025L2.4363 7.52527L4.72453 8.13621L5.3958 10.0146L5.05071 10.4282L3.30725 8.99883H0V8.99945ZM11.778 8.99945L11.0066 5.88905H9.3477L9.34164 7.52527L7.05358 8.13621L6.38222 10.0146L6.72723 10.4282L8.47078 8.99883H11.778V8.99945ZM7.04412 2.54785H4.73382L4.57696 4.29764L5.39589 10.0127H6.3823L7.20173 4.29764L7.04412 2.54785Z" fill="#FF8D5D"/>
        <path d="M0.771398 0L0 3.25933L0.771398 5.88905H2.43025L4.57629 4.29952L0.771398 0ZM4.43195 7.31538H3.68046L3.27133 7.74705L4.72503 8.13488L4.43195 7.31476V7.31538ZM11.0066 0L11.778 3.25933L11.0066 5.88905H9.3477L7.20173 4.29952L11.0066 0ZM7.34715 7.31538H8.09972L8.50885 7.74758L7.05349 8.13622L7.34715 7.31476V7.31538ZM6.55585 11.105L6.72731 10.4295L6.38222 10.0158H5.39506L5.05005 10.4295L5.22143 11.105" fill="#661800"/>
        <path d="M6.55471 11.1045V12.22H5.22046V11.1045H6.55471Z" fill="#C0C4CD"/>
        <path d="M3.30762 10.9877L5.22247 12.2197V11.1042L5.051 10.4287L3.30762 10.9877ZM8.47057 10.9877L6.55564 12.2197V11.1042L6.7271 10.4287L8.47057 10.9877Z" fill="#E7EBF6"/>
      </g>
      <defs>
        <clipPath id="mm-clip">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

function WalletPfpCluster() {
  return (
    <div style={{ position: 'relative', width: 40, height: 40, flexShrink: 0 }}>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background:
            'conic-gradient(from 180deg at 50% 50%, #F0B90B 0deg, #ED4B9E 90deg, #7645D9 180deg, #1FC7D4 270deg, #F0B90B 360deg)',
          display: 'block',
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: 'absolute',
          right: -4,
          bottom: -4,
          width: 16,
          height: 16,
          padding: '1.625px 2.438px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8.125,
          borderRadius: 4,
          borderBottom: '1px solid var(--V1-Main-Card-border, #E7E3EB)',
          background: '#FFF',
          boxSizing: 'border-box',
        }}
        role="img"
        aria-label="MetaMask"
      >
        <MetamaskGlyph />
      </div>
    </div>
  )
}

/* ── Copy address icon button (24px, #7A6EAA) ───────────────── */

function CopyAddressButton() {
  return (
    <button
      type="button"
      aria-label="Copy address"
      style={{
        display: 'flex',
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: '1 / 1',
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        flexShrink: 0,
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.8182 2.25098H4.81818C3.81818 2.25098 3 3.06916 3 4.06916V15.8873C3 16.3873 3.40909 16.7964 3.90909 16.7964C4.40909 16.7964 4.81818 16.3873 4.81818 15.8873V4.97825C4.81818 4.47825 5.22727 4.06916 5.72727 4.06916H14.8182C15.3182 4.06916 15.7273 3.66007 15.7273 3.16007C15.7273 2.66007 15.3182 2.25098 14.8182 2.25098ZM18.4545 5.88734H8.45455C7.45455 5.88734 6.63636 6.70552 6.63636 7.70552V20.4328C6.63636 21.4328 7.45455 22.251 8.45455 22.251H18.4545C19.4545 22.251 20.2727 21.4328 20.2727 20.4328V7.70552C20.2727 6.70552 19.4545 5.88734 18.4545 5.88734ZM17.5455 20.4328H9.36364C8.86364 20.4328 8.45455 20.0237 8.45455 19.5237V8.61461C8.45455 8.11461 8.86364 7.70552 9.36364 7.70552H17.5455C18.0455 7.70552 18.4545 8.11461 18.4545 8.61461V19.5237C18.4545 20.0237 18.0455 20.4328 17.5455 20.4328Z" fill="#7A6EAA"/>
      </svg>
    </button>
  )
}

/* ── Chains switch (209x32 pill toggle) ─────────────────────── */

function ChainsSwitch({ scope, onChange }: { scope: WalletScope; onChange: (s: WalletScope) => void }) {
  const items: { key: WalletScope; label: string; width: number }[] = [
    { key: 'evm', label: 'EVM Chains', width: 105 },
    { key: 'solana', label: 'Solana', width: 104 },
  ]
  return (
    <div
      role="tablist"
      aria-label="Wallet network scope"
      style={{
        display: 'flex',
        width: 209,
        height: 32,
        alignItems: 'flex-start',
        borderRadius: 143,
        border: '1px solid var(--V1-Main-Card-border, #E7E3EB)',
        background: 'var(--V1-Main-Input-primary, #EEEAF4)',
        flexShrink: 0,
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {items.map((it) => {
        const active = it.key === scope
        return (
          <button
            key={it.key}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(it.key)}
            style={{
              display: 'flex',
              width: it.width,
              padding: 4,
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
              borderRadius: 163,
              border: 'none',
              background: active ? 'var(--V1-Fill-Secondary, #7A6EAA)' : 'var(--V1-Main-Input-primary, #EEEAF4)',
              color: active ? '#FFFFFF' : 'var(--V1-Fill-Secondary, #7A6EAA)',
              fontFamily: 'Kanit, sans-serif',
              fontSize: 14,
              fontWeight: active ? 600 : 400,
              lineHeight: '150%',
              cursor: 'pointer',
              boxSizing: 'border-box',
              alignSelf: 'stretch',
              transition: 'background 0.15s, color 0.15s',
            }}
          >
            {it.label}
          </button>
        )
      })}
    </div>
  )
}

/* ── Share button (icon + label, asymmetric border) ─────────── */

function ShareButton() {
  return (
    <button
      type="button"
      style={{
        display: 'flex',
        padding: '8px 12px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        alignSelf: 'stretch',
        borderRadius: 16,
        borderTop: '1px solid var(--V1-Main-Input-secondary, #D7CAEC)',
        borderRight: '1px solid var(--V1-Main-Input-secondary, #D7CAEC)',
        borderBottom: '2px solid var(--V1-Main-Input-secondary, #D7CAEC)',
        borderLeft: '1px solid var(--V1-Main-Input-secondary, #D7CAEC)',
        background: 'var(--V1-Main-Input-primary, #EEEAF4)',
        color: 'var(--V1-Fill-Secondary, #7A6EAA)',
        fontFamily: 'Kanit, sans-serif',
        fontSize: 16,
        fontWeight: 400,
        lineHeight: '150%',
        cursor: 'pointer',
        boxSizing: 'border-box',
        flexShrink: 0,
        whiteSpace: 'nowrap',
      }}
    >
      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', fontFeatureSettings: '"liga" off' }}>Share</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M16.6667 15.3063C16.0756 15.3063 15.5467 15.5473 15.1422 15.9248L9.59667 12.5914C9.63556 12.4067 9.66667 12.222 9.66667 12.0292C9.66667 11.8364 9.63556 11.6517 9.59667 11.4669L15.08 8.16574C15.5 8.56735 16.0522 8.81635 16.6667 8.81635C17.9578 8.81635 19 7.74004 19 6.40671C19 5.07338 17.9578 3.99707 16.6667 3.99707C15.3756 3.99707 14.3333 5.07338 14.3333 6.40671C14.3333 6.59948 14.3644 6.78422 14.4033 6.96896L8.92 10.2702C8.5 9.86856 7.94778 9.61956 7.33333 9.61956C6.04222 9.61956 5 10.6959 5 12.0292C5 13.3625 6.04222 14.4388 7.33333 14.4388C7.94778 14.4388 8.5 14.1898 8.92 13.7882L14.4578 17.1296C14.4189 17.2983 14.3956 17.475 14.3956 17.6517C14.3956 18.9449 15.4144 19.9971 16.6667 19.9971C17.9189 19.9971 18.9378 18.9449 18.9378 17.6517C18.9378 16.3585 17.9189 15.3063 16.6667 15.3063Z" fill="#7A6EAA"/>
      </svg>
    </button>
  )
}

/* ── Page Header Card (1.2) ─────────────────────────────────── */

function truncateAddress(addr: string) {
  if (addr.length <= 10) return addr
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`
}

function PageHeader12({ scope, onScopeChange }: { scope: WalletScope; onScopeChange: (s: WalletScope) => void }) {
  const w = useWindowWidth()
  const mobile      = w < BP_LG
  const smallMobile = w < BP_SM

  const addressTextStyle: React.CSSProperties = {
    color: 'var(--V1-Fill-Primary, #280D5F)',
    fontFamily: 'Kanit, sans-serif',
    fontSize: smallMobile ? 22 : 32,
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '120%',
    letterSpacing: '-0.32px',
    fontFeatureSettings: '"liga" off',
    whiteSpace: 'nowrap',
  }

  return (
    <section
      style={{
        display: 'flex',
        width: '100%',
        maxWidth: 1200,
        padding: 16,
        alignItems: smallMobile ? 'flex-start' : 'center',
        gap: smallMobile ? 12 : 16,
        flexDirection: smallMobile ? 'column' : 'row',
        flexWrap: mobile && !smallMobile ? 'wrap' : 'nowrap',
        borderRadius: 24,
        borderTop: '1px solid var(--V1-Main-Card-border, #E7E3EB)',
        borderRight: '1px solid var(--V1-Main-Card-border, #E7E3EB)',
        borderBottom: '2px solid var(--V1-Main-Card-border, #E7E3EB)',
        borderLeft: '1px solid var(--V1-Main-Card-border, #E7E3EB)',
        background: 'var(--V1-Main-Card-primary, #FFF)',
        boxSizing: 'border-box',
        marginTop: smallMobile ? 16 : mobile ? 16 : 24,
        marginBottom: 16,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0, flex: '1 1 auto' }}>
        <WalletPfpCluster />
        <span style={addressTextStyle}>{truncateAddress(WALLET_ADDRESS)}</span>
        <CopyAddressButton />
      </div>

      <ChainsSwitch scope={scope} onChange={onScopeChange} />

      <ShareButton />
    </section>
  )
}

/* ── Wallet Tabs (4 tabs) ───────────────────────────────────── */

const WALLET_TAB_LABELS = ['Overview', 'Perps positions', 'Liquidity positions', 'History'] as const

function WalletTabs12({ activeTab, onTabChange }: { activeTab: WalletTab12; onTabChange: (t: WalletTab12) => void }) {
  return (
    <div role="tablist" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {WALLET_TAB_LABELS.map((label, i) => {
        const isActive = activeTab === i
        return (
          <button
            key={label}
            role="tab"
            aria-selected={isActive}
            onClick={() => onTabChange(i as WalletTab12)}
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

/* ── Wallet Page Shell 1.2 ──────────────────────────────────── */

interface WalletPageShell12Props {
  scope: WalletScope
  onScopeChange: (s: WalletScope) => void
  activeTab: WalletTab12
  onTabChange: (t: WalletTab12) => void
  children: ReactNode
}

function WalletPageShell12({ scope, onScopeChange, activeTab, onTabChange, children }: WalletPageShell12Props) {
  const w = useWindowWidth()
  const mobile      = w < BP_LG
  const smallMobile = w < BP_SM

  return (
    <div style={{ minHeight: '100vh', background: 'var(--pcs-colors-background)', fontFamily: 'Kanit, sans-serif' }}>
      <AppNav12 />
      <div style={{ padding: smallMobile ? '0 16px 48px' : mobile ? '0 24px 48px' : '0 40px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <PageHeader12 scope={scope} onScopeChange={onScopeChange} />
          <div style={{ marginTop: 0, marginBottom: 12 }}>
            <WalletTabs12 activeTab={activeTab} onTabChange={onTabChange} />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

/* ── Portfolio Chart (D / W / M / Y / All) ──────────────────── */

function PortfolioChart12() {
  const [rangeIndex, setRangeIndex] = useState(4)

  return (
    <Card style={{ flex: 1 }}>
      <CardBody style={{ padding: '20px 20px 16px', display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4, flexShrink: 0, gap: 12, flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
              <Text
                style={{
                  fontFamily: 'Kanit, sans-serif',
                  fontSize: '26.343px',
                  fontWeight: 600,
                  lineHeight: '110%',
                  color: 'var(--pcs-colors-text)',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                $1,892.26
              </Text>
              <PnlTag value={1.72} />
            </div>
            <Text color="textSubtle" fontSize="12px">(Mar 25, 2024 UTC)</Text>
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'var(--pcs-colors-input)',
            border: '1px solid var(--pcs-colors-input-secondary)',
            borderRadius: 16,
            padding: 4,
            gap: 2,
          }}>
            {TIME_RANGES.map((r, i) => (
              <button
                key={r}
                onClick={() => setRangeIndex(i)}
                style={{
                  display: 'flex',
                  minWidth: 32,
                  padding: '4px 8px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: rangeIndex === i ? 'var(--V1-Fill-Secondary, #7A6EAA)' : 'transparent',
                  border: 'none',
                  borderRadius: 16,
                  cursor: 'pointer',
                  fontFamily: 'Kanit, sans-serif',
                  fontSize: 14,
                  fontWeight: rangeIndex === i ? 600 : 400,
                  lineHeight: '150%',
                  color: rangeIndex === i ? '#FFFFFF' : 'var(--pcs-colors-text-subtle)',
                  transition: 'background 0.15s, color 0.15s',
                  whiteSpace: 'nowrap',
                  boxSizing: 'border-box',
                }}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div style={{ position: 'relative', marginTop: 8, flex: 1, minHeight: 0 }}>
          <svg
            viewBox={`0 0 ${CHART_W} ${CHART_H}`}
            preserveAspectRatio="none"
            style={{ width: '100%', height: '100%', display: 'block' }}
            aria-label="Portfolio value chart"
            role="img"
          >
            <defs>
              <linearGradient id="chart12Gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1FC7D4" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#1FC7D4" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {[0, 1, 2, 3, 4, 5].map((i) => {
              const yVal = MAX_V - i * ((MAX_V - MIN_V) / 5)
              const y = valueToY(yVal)
              return (
                <line
                  key={i}
                  x1={0}
                  y1={y}
                  x2={CHART_DRAW_W}
                  y2={y}
                  stroke="var(--pcs-colors-card-border)"
                  strokeWidth={0.5}
                  strokeDasharray="4 4"
                />
              )
            })}

            <path d={CHART_AREA} fill="url(#chart12Gradient)" />
            <path d={CHART_LINE} fill="none" stroke="#1FC7D4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

            {CHART_Y_LABELS.map((label, i) => {
              const yVal = MAX_V - i * ((MAX_V - MIN_V) / 5)
              const y = valueToY(yVal)
              return (
                <text
                  key={i}
                  x={CHART_DRAW_W + 6}
                  y={y + 4}
                  fontSize={9}
                  fill="var(--pcs-colors-text-subtle)"
                  fontFamily="Kanit, sans-serif"
                >
                  {label}
                </text>
              )
            })}

            {CHART_X_LABELS.map((label, i) => {
              const x = (i / (CHART_X_LABELS.length - 1)) * CHART_DRAW_W
              return (
                <text
                  key={i}
                  x={x}
                  y={CHART_H - 6}
                  fontSize={9}
                  fill="var(--pcs-colors-text-subtle)"
                  fontFamily="Kanit, sans-serif"
                  textAnchor={i === 0 ? 'start' : i === CHART_X_LABELS.length - 1 ? 'end' : 'middle'}
                >
                  {label}
                </text>
              )
            })}
          </svg>
        </div>
      </CardBody>
    </Card>
  )
}

/* ── Token Table ────────────────────────────────────────────── */

function TokenTable() {
  const [search, setSearch] = useState('')
  const [hideSmall, setHideSmall] = useState(false)
  const [showHidden, setShowHidden] = useState(false)
  const [sortField, setSortField] = useState<keyof Token | null>(null)
  const [sortOrder, setSortOrder] = useState<ISortOrder>(null)
  const w = useWindowWidth()
  const mobile      = w < BP_LG
  const smallMobile = w < BP_SM

  const filtered = TOKENS.filter((t) => {
    if (hideSmall && t.value < 10) return false
    if (!showHidden && t.value === 0) return false
    if (search) {
      const q = search.toLowerCase()
      return t.symbol.toLowerCase().includes(q) || t.chain.toLowerCase().includes(q)
    }
    return true
  })

  const sorted = sortField && sortOrder
    ? [...filtered].sort((a, b) => {
        const av = a[sortField as keyof Token]
        const bv = b[sortField as keyof Token]
        if (typeof av === 'number' && typeof bv === 'number') {
          return sortOrder === 'ASC' ? av - bv : bv - av
        }
        return 0
      })
    : filtered

  const cellTextStyle: React.CSSProperties = {
    fontFamily: 'Kanit, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '150%',
    fontFeatureSettings: '"liga" off',
    color: 'var(--pcs-colors-text)',
    textAlign: 'right',
    fontVariantNumeric: 'tabular-nums',
  }

  const handleSort = useCallback(
    ({ dataIndex, order }: { dataIndex: keyof Token | null; order: ISortOrder }) => {
      setSortField(dataIndex)
      setSortOrder(order)
    },
    [],
  )

  const columns: IColumnsType<Token>[] = [
    {
      key: 'token',
      title: 'TOKEN',
      dataIndex: 'symbol',
      minWidth: '200px',
      render: (_, record) => (
        <TokenDisplay token={record.tokenInfo} size={40} />
      ),
    },
    {
      key: 'price',
      title: 'PRICE',
      dataIndex: 'price',
      sorter: true,
      align: 'right',
      display: !mobile,
      render: (val: number) => (
        <Text style={cellTextStyle}>{fmtPrice(val)}</Text>
      ),
    },
    {
      key: 'change1d',
      title: '1D CHANGE',
      dataIndex: 'change1d',
      sorter: true,
      align: 'center',
      display: !mobile,
      render: (val: number) => <PnlTag value={val} />,
    },
    {
      key: 'balance',
      title: 'BALANCE',
      dataIndex: 'balanceAmount',
      sorter: true,
      align: 'right',
      width: '155px',
      display: !smallMobile,
      render: (_, record) => (
        <Text style={cellTextStyle}>{fmtAmount(record.balanceAmount, record.balanceSymbol)}</Text>
      ),
    },
    {
      key: 'value',
      title: 'VALUE',
      dataIndex: 'value',
      sorter: true,
      align: 'right',
      render: (val: number) => (
        <Text style={cellTextStyle}>{fmtValue(val)}</Text>
      ),
    },
    {
      key: 'allocation',
      title: 'ALLOCATION',
      dataIndex: 'allocation',
      sorter: true,
      align: 'left',
      display: !mobile,
      render: (val: number) => <AllocationBar pct={val} />,
    },
    {
      key: 'action',
      title: () => <span role="presentation" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>Actions</span>,
      dataIndex: null,
      clickable: false,
      render: (_, record) => (
        <button
          aria-label={`More options for ${record.symbol}`}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--pcs-colors-text-subtle)', padding: 4, borderRadius: 8,
            display: 'flex', alignItems: 'center',
          }}
        >
          <MoreHorizontalIcon size={20} />
        </button>
      ),
    },
  ]

  return (
    <Card>
      <div style={{ padding: 16, display: 'flex', flexDirection: mobile ? 'column' : 'row', alignItems: mobile ? 'stretch' : 'center', gap: mobile ? 12 : 16, flexWrap: mobile ? undefined : 'wrap' }}>
        <style>{`.token-search12::placeholder { color: var(--pcs-colors-text); opacity: 1; font-family: Kanit, sans-serif; font-size: 16px; font-weight: 400; }`}</style>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 16, flex: mobile ? undefined : '1 0 0', minWidth: mobile ? undefined : 456 }}>
          <SearchIcon
            size={16}
            style={{
              position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
              color: 'var(--pcs-colors-text-subtle)', pointerEvents: 'none',
            }}
          />
          <input
            className="token-search12"
            placeholder="All tokens"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%', height: 40,
              background: 'var(--pcs-colors-input)',
              borderTop: '1px solid var(--pcs-colors-input-secondary)',
              borderRight: '1px solid var(--pcs-colors-input-secondary)',
              borderBottom: '2px solid var(--pcs-colors-input-secondary)',
              borderLeft: '1px solid var(--pcs-colors-input-secondary)',
              borderRadius: 16,
              paddingLeft: 36, paddingRight: 36,
              color: 'var(--pcs-colors-text)',
              fontFamily: 'Kanit, sans-serif',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: '150%',
              fontFeatureSettings: '"liga" off',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
          <ChevronDownIcon
            size={16}
            style={{
              position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
              color: 'var(--pcs-colors-text-subtle)', pointerEvents: 'none',
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: 8,
            background: 'var(--pcs-colors-background)',
            borderTop: '1px solid var(--pcs-colors-card-border)',
            borderRight: '1px solid var(--pcs-colors-card-border)',
            borderBottom: '2px solid var(--pcs-colors-card-border)',
            borderLeft: '1px solid var(--pcs-colors-card-border)',
            borderRadius: 16,
            flexShrink: 0,
          }}
        >
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
            <Text fontSize="14px" color="textSubtle">Hide small balances</Text>
            <InfoIcon size={16} style={{ color: 'var(--pcs-colors-text-disabled)', flexShrink: 0 }} />
            <Checkbox
              scale="sm"
              checked={hideSmall}
              onChange={(e) => setHideSmall(e.target.checked)}
            />
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
            <Text fontSize="14px" color="textSubtle">Show hidden tokens</Text>
            <Checkbox
              scale="sm"
              checked={showHidden}
              onChange={(e) => setShowHidden(e.target.checked)}
            />
          </label>
        </div>
      </div>

      <TableView<Token>
        columns={columns}
        data={sorted}
        rowKey="id"
        sortField={sortField}
        sortOrder={sortOrder}
        onSort={handleSort}
      />
    </Card>
  )
}

/* ── Portfolio Breakdown (Both wallets totals) ──────────────── */

const BREAKDOWN_TOTAL = 5492.26

const BREAKDOWN_ITEMS: BreakdownItem[] = [
  {
    color: ['#53DEE9', '#1FC7D4'],
    title: 'Wallet balance',
    percentage: 62,
    balance: '$4,000.01',
  },
  {
    color: ['#8051D6', '#492286'],
    title: 'Perps positions',
    percentage: 38,
    balance: '$1,492.25',
  },
  {
    color: '#ED4B9E',
    title: 'Liquidity positions',
    percentage: 0,
    balance: '$0',
  },
  {
    color: ['#CBD7EF', '#9A9FD0'],
    title: 'Unclaimed rewards',
    percentage: 0,
    balance: '$0',
  },
]

function PortfolioBreakdown() {
  return (
    <PortfolioBreakdownCard
      total={fmtValue(BREAKDOWN_TOTAL)}
      changePercent={1.72}
      items={BREAKDOWN_ITEMS}
      onSwap={() => {}}
      onEarn={() => {}}
      onBuyCrypto={() => {}}
    />
  )
}

/* ── Dashboard Page 1.2 ─────────────────────────────────────── */

export function DashboardPage12() {
  const [scope, setScope] = useState<WalletScope>('evm')
  const [tabIndex, setTabIndex] = useState<WalletTab12>(0)
  const w = useWindowWidth()
  const mobile = w < BP_LG

  return (
    <WalletPageShell12 scope={scope} onScopeChange={setScope} activeTab={tabIndex} onTabChange={setTabIndex}>
      <div style={{
        display: 'flex',
        flexDirection: mobile ? 'column' : 'row',
        gap: 16,
        alignItems: 'stretch',
        marginBottom: 16,
      }}>
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
          <PortfolioChart12 />
        </div>
        <div style={{ width: mobile ? '100%' : 323, flexShrink: 0 }}>
          <PortfolioBreakdown />
        </div>
      </div>

      <TokenTable />
    </WalletPageShell12>
  )
}
