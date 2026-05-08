/**
 * Dashboard for users with BOTH an EVM wallet and a Solana wallet connected.
 *
 * Layout: a scoped header at the top (with an All / EVM / Solana filter pill) and
 * stacked per-chain sections below. Each section uses the full single-wallet
 * dashboard widget set: portfolio chart, breakdown card, and tokens table.
 *
 * Reuses PortfolioChart / TokenTable / PortfolioBreakdown from Dashboard.tsx.
 */
import { useState } from 'react'
import type { CSSProperties } from 'react'
import { Card, CardBody } from '../components/Card'
import { Text } from '../components/Text'
import { Button } from '../components/Button'
import { Toggle } from '../components/Toggle'
import { TableView } from '../components/TableView'
import type { IColumnsType } from '../components/TableView/Table'
import { TokenDisplay } from '../widgets/TokenDisplay'
import { InfoIcon, HistoryIcon, CogIcon, SearchIcon, ChevronDownIcon, ArrowForwardIcon, AddIcon, OpenNewIcon } from '../Icons'
import { AppNav } from './wallet-shared'
import {
  PortfolioChart,
  TokenTable,
  PortfolioBreakdown,
  type Token,
  type BreakdownItem,
} from './Dashboard'

/* ── Constants ───────────────────────────────────────────────── */

const EVM_ADDRESS = '0x40Cf...5461'
const SOL_ADDRESS = '7xKXt...QnYs'
const EVM_BALANCE = 4892.01
const SOL_BALANCE = 2464.80
const PERPS_POSITIONS = 1492.25
const COMBINED_BALANCE = EVM_BALANCE + SOL_BALANCE
const COMBINED_CHANGE = 1.72

/** Solana brand gradient used for wallet badges, chain icons, and accent fills. */
const SOL_GRADIENT = 'linear-gradient(135deg, #9945FF 0%, #14F195 100%)'

/** EVM-only solid teal gradient mirrors the existing PortfolioChart line. */
const EVM_GRADIENT = 'linear-gradient(135deg, #1FC7D4 0%, #0098A1 100%)'

/** Inline-SVG data URL for the Solana chain badge (used inside TokenDisplay). */
const SOL_CHAIN_LOGO_URL =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><defs><linearGradient id='g' x1='0' y1='0' x2='32' y2='32' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='%239945FF'/><stop offset='1' stop-color='%2314F195'/></linearGradient></defs><rect width='32' height='32' rx='8' fill='url(%23g)'/></svg>"

const PCS_TOKEN_BASE = 'https://tokens.pancakeswap.finance/images/symbol'

/* ── Mock data ───────────────────────────────────────────────── */

const TOKENS_EVM: Token[] = [
  {
    id: 'evm-bnb',
    symbol: 'BNB',
    chain: 'BNB Chain',
    tokenInfo: {
      symbol: 'BNB',
      chainName: 'BNB chain',
      logoUrls: [`${PCS_TOKEN_BASE}/bnb.png`],
      chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/56.svg',
    },
    price: 590.75,
    change1d: -1.2,
    balanceAmount: 0.542,
    balanceSymbol: 'BNB',
    value: 320.15,
    allocation: 16.93,
  },
  {
    id: 'evm-cake',
    symbol: 'CAKE',
    chain: 'BNB Chain',
    tokenInfo: {
      symbol: 'CAKE',
      chainName: 'BNB chain',
      logoUrls: [`${PCS_TOKEN_BASE}/cake.png`],
      chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/56.svg',
    },
    price: 1.46,
    change1d: 0.83,
    balanceAmount: 144.11,
    balanceSymbol: 'CAKE',
    value: 210.40,
    allocation: 11.12,
  },
  {
    id: 'evm-eth',
    symbol: 'ETH',
    chain: 'Ethereum',
    tokenInfo: {
      symbol: 'ETH',
      chainName: 'ETHEREUM',
      logoUrls: [`${PCS_TOKEN_BASE}/eth.png`],
      chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/1.svg',
    },
    price: 2181.25,
    change1d: -0.6,
    balanceAmount: 0.206,
    balanceSymbol: 'ETH',
    value: 450.30,
    allocation: 23.79,
  },
  {
    id: 'evm-usdc-eth',
    symbol: 'USDC',
    chain: 'Ethereum',
    tokenInfo: {
      symbol: 'USDC',
      chainName: 'ETHEREUM',
      logoUrls: [`${PCS_TOKEN_BASE}/usdc.png`],
      chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/1.svg',
    },
    price: 1.00,
    change1d: 0.01,
    balanceAmount: 275.50,
    balanceSymbol: 'USDC',
    value: 275.50,
    allocation: 14.56,
  },
  {
    id: 'evm-usdc-base',
    symbol: 'USDC',
    chain: 'Base',
    tokenInfo: {
      symbol: 'USDC',
      chainName: 'BASE',
      logoUrls: [`${PCS_TOKEN_BASE}/usdc.png`],
      chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/8453.svg',
    },
    price: 1.00,
    change1d: 0.01,
    balanceAmount: 210.66,
    balanceSymbol: 'USDC',
    value: 210.66,
    allocation: 11.13,
  },
  {
    id: 'evm-usdt-arb',
    symbol: 'USDT',
    chain: 'Arbitrum',
    tokenInfo: {
      symbol: 'USDT',
      chainName: 'ARBITRUM',
      logoUrls: [`${PCS_TOKEN_BASE}/usdt.png`],
      chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/42161.svg',
    },
    price: 1.00,
    change1d: -0.9,
    balanceAmount: 245.00,
    balanceSymbol: 'USDT',
    value: 245.00,
    allocation: 12.95,
  },
]

const TOKENS_SOL: Token[] = [
  {
    id: 'sol-sol',
    symbol: 'SOL',
    chain: 'Solana',
    tokenInfo: {
      symbol: 'SOL',
      chainName: 'SOLANA',
      logoUrls: [`${PCS_TOKEN_BASE}/sol.png`],
      chainLogoUrl: SOL_CHAIN_LOGO_URL,
    },
    price: 142.30,
    change1d: 2.4,
    balanceAmount: 8.42,
    balanceSymbol: 'SOL',
    value: 1198.16,
    allocation: 48.6,
  },
  {
    id: 'sol-usdc',
    symbol: 'USDC',
    chain: 'Solana',
    tokenInfo: {
      symbol: 'USDC',
      chainName: 'SOLANA',
      logoUrls: [`${PCS_TOKEN_BASE}/usdc.png`],
      chainLogoUrl: SOL_CHAIN_LOGO_URL,
    },
    price: 1.00,
    change1d: 0.01,
    balanceAmount: 742.10,
    balanceSymbol: 'USDC',
    value: 742.10,
    allocation: 30.1,
  },
  {
    id: 'sol-jup',
    symbol: 'JUP',
    chain: 'Solana',
    tokenInfo: {
      symbol: 'JUP',
      chainName: 'SOLANA',
      logoUrls: [`${PCS_TOKEN_BASE}/jup.png`],
      chainLogoUrl: SOL_CHAIN_LOGO_URL,
    },
    price: 0.84,
    change1d: -3.1,
    balanceAmount: 412.00,
    balanceSymbol: 'JUP',
    value: 346.08,
    allocation: 14.0,
  },
  {
    id: 'sol-bonk',
    symbol: 'BONK',
    chain: 'Solana',
    tokenInfo: {
      symbol: 'BONK',
      chainName: 'SOLANA',
      logoUrls: [`${PCS_TOKEN_BASE}/bonk.png`],
      chainLogoUrl: SOL_CHAIN_LOGO_URL,
    },
    price: 0.00002,
    change1d: 5.8,
    balanceAmount: 8950000,
    balanceSymbol: 'BONK',
    value: 178.46,
    allocation: 7.3,
  },
]

/* ── Helpers ─────────────────────────────────────────────────── */

/** Inline-SVG Solana logomark (4-bar SOL mark on gradient background). */
function SolanaChainBadge({ size = 24, style }: { size?: number; style?: CSSProperties }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 8,
        background: SOL_GRADIENT,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        ...style,
      }}
    >
      <svg width={size * 0.7} height={size * 0.7} viewBox="0 0 24 24" aria-hidden>
        <path
          d="M5 7.5l3-3h11l-3 3H5zm0 9l3-3h11l-3 3H5zm14-4.5l-3-3H5l3 3h11z"
          fill="white"
        />
      </svg>
    </div>
  )
}

type WalletScope = 'all' | 'evm' | 'sol'

/** Segmented filter pill: All Wallets · EVM Chains · Solana */
function WalletScopePill({
  value,
  onChange,
}: {
  value: WalletScope
  onChange: (v: WalletScope) => void
}) {
  const items: { k: WalletScope; label: string }[] = [
    { k: 'all', label: 'All Wallets' },
    { k: 'evm', label: 'EVM Chains' },
    { k: 'sol', label: 'Solana' },
  ]

  return (
    <div
      role="tablist"
      aria-label="Wallet scope"
      style={{
        display: 'inline-flex',
        height: 32,
        alignItems: 'flex-start',
        borderRadius: 143,
        border: '1px solid var(--pcs-colors-card-border)',
        background: 'var(--pcs-colors-input-primary)',
        boxSizing: 'border-box',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {items.map((f) => {
        const active = value === f.k
        return (
          <button
            key={f.k}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(f.k)}
            style={{
              display: 'flex',
              width: active ? 105 : 104,
              padding: 4,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              borderRadius: 163,
              border: 'none',
              background: active
                ? 'var(--pcs-colors-text-subtle)'
                : 'var(--pcs-colors-input-primary)',
              color: active ? 'var(--pcs-colors-inverted-contrast)' : 'var(--pcs-colors-text-subtle)',
              fontFamily: 'Kanit, sans-serif',
              fontSize: 14,
              fontWeight: active ? 600 : 400,
              lineHeight: '150%',
              cursor: 'pointer',
              boxSizing: 'border-box',
              whiteSpace: 'nowrap',
              transition: 'background 0.15s, color 0.15s',
            }}
          >
            {f.label}
          </button>
        )
      })}
    </div>
  )
}

/** Compact white card showing "CONNECTED VIA <provider>" + address. */
function ConnectedWalletBanner({
  kind,
  provider,
  address,
}: {
  kind: 'evm' | 'sol'
  provider: string
  address: string
}) {
  return (
    <Card style={{ marginBottom: 16 }}>
      <CardBody
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '20px 24px',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 16,
            background: kind === 'sol' ? SOL_GRADIENT : EVM_GRADIENT,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Kanit, sans-serif',
            fontSize: 22,
            fontWeight: 700,
            color: '#FFFFFF',
            flexShrink: 0,
          }}
        >
          {kind === 'sol' ? <SolanaChainBadge size={32} style={{ borderRadius: 10 }} /> : '🦊'}
        </div>
        <div>
          <Text
            fontSize="12px"
            bold
            style={{
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
              color: 'var(--pcs-colors-secondary)',
              lineHeight: 1.5,
            }}
          >
            Connected via {provider}
          </Text>
          <Text
            style={{
              fontFamily: 'Kanit, sans-serif',
              fontSize: 24,
              fontWeight: 600,
              color: 'var(--pcs-colors-text)',
              fontVariantNumeric: 'tabular-nums',
              lineHeight: 1.2,
            }}
          >
            {address}
          </Text>
        </div>
      </CardBody>
    </Card>
  )
}

/** Section heading + inline sub-tabs (no underline; just colored text links). */
function SectionHeaderRow({
  title,
  tabs,
  activeIndex = 0,
  onTabChange,
}: {
  title: string
  tabs: { label: string; supported: boolean }[]
  activeIndex?: number
  onTabChange?: (index: number) => void
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: 24,
        marginBottom: 16,
        flexWrap: 'wrap',
      }}
    >
      <Text
        as="h2"
        style={{
          fontFamily: 'Kanit, sans-serif',
          fontSize: 24,
          fontWeight: 600,
          color: 'var(--pcs-colors-text)',
          margin: 0,
          lineHeight: 1.2,
          letterSpacing: '-0.24px',
        }}
      >
        {title}
      </Text>
      <div role="tablist" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        {tabs.map((tab, i) => {
          const active = i === activeIndex
          const disabled = !tab.supported
          return (
            <button
              key={tab.label}
              type="button"
              role="tab"
              aria-selected={active}
              aria-disabled={disabled}
              disabled={disabled}
              onClick={() => !disabled && onTabChange?.(i)}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                fontFamily: 'Kanit, sans-serif',
                fontSize: 16,
                fontWeight: active ? 600 : 400,
                color: disabled
                  ? 'var(--pcs-colors-text-disabled)'
                  : active
                  ? 'var(--pcs-colors-secondary)'
                  : 'var(--pcs-colors-text-subtle)',
                cursor: disabled ? 'not-allowed' : 'pointer',
              }}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

/** Disabled D/W/M/Y/All range pills — visually present but non-interactive (charts not ready). */
function DisabledRangePills() {
  const items = ['D', 'W', 'M', 'Y', 'All']
  return (
    <div
      role="presentation"
      aria-hidden
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: 'var(--pcs-colors-input-primary)',
        border: '1px solid var(--pcs-colors-input-secondary)',
        borderRadius: 16,
        padding: 4,
        gap: 2,
      }}
    >
      {items.map((r) => (
        <span
          key={r}
          style={{
            display: 'flex',
            minWidth: 32,
            padding: '4px 8px',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
            fontFamily: 'Kanit, sans-serif',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '150%',
            color: 'var(--pcs-colors-text-disabled)',
          }}
        >
          {r}
        </span>
      ))}
    </div>
  )
}

/** Black rounded badge containing the Solana 4-bar logomark (used in the overlay card). */
function SolanaBlackBadge() {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: 12,
        background: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        padding: 6,
        boxSizing: 'border-box',
      }}
      role="img"
      aria-label="Solana"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient id="sol-mark-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#9945FF" />
            <stop offset="1" stopColor="#14F195" />
          </linearGradient>
        </defs>
        <path
          d="M5 7.5l3-3h11l-3 3H5zm0 9l3-3h11l-3 3H5zm14-4.5l-3-3H5l3 3h11z"
          fill="url(#sol-mark-gradient)"
        />
      </svg>
    </div>
  )
}

/** Decorative blurred area chart shown behind the "coming soon" overlay. */
function PlaceholderChartBackdrop() {
  // Same shape as the EVM "All" range chart, just blurred + lower opacity.
  const VALUES = [850, 720, 650, 690, 1100, 1430, 1680, 1730, 1680, 1810, 1892]
  const W = 860
  const H = 340
  const padTop = 8
  const drawH = 320
  const minV = 500
  const maxV = 2500
  const valueToY = (v: number) => padTop + (1 - (v - minV) / (maxV - minV)) * drawH
  const pts = VALUES.map((v, i) => ({ x: (i / (VALUES.length - 1)) * W, y: valueToY(v) }))
  let line = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[i - 1]
    const p1 = pts[i]
    const cpx = (p0.x + p1.x) / 2
    line += ` C ${cpx} ${p0.y} ${cpx} ${p1.y} ${p1.x} ${p1.y}`
  }
  const last = pts[pts.length - 1]
  const first = pts[0]
  const area = `${line} L ${last.x} ${H} L ${first.x} ${H} Z`

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        filter: 'blur(2px)',
        opacity: 0.7,
        pointerEvents: 'none',
      }}
    >
      <defs>
        <linearGradient id="sol-placeholder-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1FC7D4" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1FC7D4" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#sol-placeholder-gradient)" />
      <path
        d={line}
        fill="none"
        stroke="#1FC7D4"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Solana chart placeholder card — disabled range pills + blurred decorative chart
 * with a centered "coming soon" overlay card.
 */
function SolanaChartPlaceholderCard() {
  return (
    <Card
      style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
      innerCardProps={{
        style: { flex: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <CardBody
        style={{
          flex: 1,
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 16,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Top row: empty left spacer + disabled range pills on the right */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '100%',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <DisabledRangePills />
        </div>

        {/* Chart area: blurred decorative chart + centered overlay */}
        <div
          style={{
            position: 'relative',
            flex: 1,
            width: '100%',
            minHeight: 0,
          }}
        >
          <PlaceholderChartBackdrop />

          {/* Centered "coming soon" overlay card */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'min(492px, calc(100% - 32px))',
              padding: 24,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10,
              borderRadius: 24,
              borderTop: '1px solid var(--pcs-colors-card-border)',
              borderRight: '1px solid var(--pcs-colors-card-border)',
              borderBottom: '2px solid var(--pcs-colors-card-border)',
              borderLeft: '1px solid var(--pcs-colors-card-border)',
              background: 'var(--pcs-colors-card)',
              boxSizing: 'border-box',
              zIndex: 1,
            }}
          >
            <SolanaBlackBadge />
            <Text
              style={{
                fontFamily: 'Kanit, sans-serif',
                fontSize: 24,
                fontWeight: 600,
                lineHeight: '150%',
                letterSpacing: '-0.24px',
                color: 'var(--pcs-colors-text)',
                textAlign: 'center',
                width: '100%',
                fontFeatureSettings: '"liga" off',
              }}
            >
              Solana charts coming soon
            </Text>
            <Text
              color="textSubtle"
              style={{
                fontFamily: 'Kanit, sans-serif',
                fontSize: 16,
                fontWeight: 400,
                lineHeight: '150%',
                textAlign: 'center',
                width: '100%',
                fontFeatureSettings: '"liga" off',
              }}
            >
              Your Solana balances and tokens are live today. Chart history, perps, and liquidity positions are coming next.
            </Text>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

/** Compact PnL pill — used inline in the page header next to the total. */
function PnlTagInline({ value }: { value: number }) {
  const positive = value >= 0
  const color = positive ? 'var(--pcs-colors-success)' : 'var(--pcs-colors-failure)'
  const bg = positive ? 'rgba(49,208,170,0.15)' : 'rgba(237,75,158,0.15)'
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 2,
        background: bg,
        color,
        padding: '2px 8px',
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 600,
        fontFamily: 'Kanit, sans-serif',
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      <span style={{ fontSize: 10, lineHeight: 1 }}>{positive ? '▲' : '▼'}</span>
      <span>{Math.abs(value).toFixed(2)}%</span>
    </span>
  )
}

/* ── Perps tab content ──────────────────────────────────────── */

const PERPS_BALANCE = 126.09
const PERPS_PNL_7D = 20.98
const PERPS_PNL_PCT_7D = 20.12
const PERPS_VOLUME_7D = 969.58
const PERPS_TOTAL_TRADES = 12
const PERPS_FUNDING_FEE = -0.01
const PERPS_COMMISSION = -0.38

interface PerpsAsset {
  id: string
  symbol: string
  tokenInfo: Token['tokenInfo']
  price: number
  walletBalance: { amount: number; usd: number }
  marginBalance: { amount: number; usd: number }
  /** chain logo URLs for the supported networks pile (max ~3 visible). */
  networks: string[]
}

const PERPS_ASSETS: PerpsAsset[] = [
  {
    id: 'bnb', symbol: 'BNB',
    tokenInfo: { symbol: 'BNB', chainName: '', logoUrls: ['https://tokens.pancakeswap.finance/images/symbol/bnb.png'] },
    price: 590.75,
    walletBalance: { amount: 0.18, usd: 106.01 },
    marginBalance: { amount: 0.18, usd: 106.01 },
    networks: ['https://assets.pancakeswap.finance/web/chains/square/56.svg'],
  },
  {
    id: 'cake', symbol: 'CAKE',
    tokenInfo: { symbol: 'CAKE', chainName: '', logoUrls: ['https://tokens.pancakeswap.finance/images/symbol/cake.png'] },
    price: 1.46,
    walletBalance: { amount: 0, usd: 0 },
    marginBalance: { amount: 0, usd: 0 },
    networks: ['https://assets.pancakeswap.finance/web/chains/square/56.svg'],
  },
  {
    id: 'eth', symbol: 'ETH',
    tokenInfo: { symbol: 'ETH', chainName: '', logoUrls: ['https://tokens.pancakeswap.finance/images/symbol/eth.png'] },
    price: 2181.25,
    walletBalance: { amount: 0, usd: 0 },
    marginBalance: { amount: 0, usd: 0 },
    networks: [
      'https://assets.pancakeswap.finance/web/chains/square/1.svg',
      'https://assets.pancakeswap.finance/web/chains/square/42161.svg',
      'https://assets.pancakeswap.finance/web/chains/square/56.svg',
    ],
  },
  {
    id: 'usdc', symbol: 'USDC',
    tokenInfo: { symbol: 'USDC', chainName: '', logoUrls: ['https://tokens.pancakeswap.finance/images/symbol/usdc.png'] },
    price: 1.0,
    walletBalance: { amount: 0, usd: 0 },
    marginBalance: { amount: 0, usd: 0 },
    networks: [
      'https://assets.pancakeswap.finance/web/chains/square/1.svg',
      'https://assets.pancakeswap.finance/web/chains/square/42161.svg',
      'https://assets.pancakeswap.finance/web/chains/square/56.svg',
    ],
  },
  {
    id: 'usdt', symbol: 'USDT',
    tokenInfo: { symbol: 'USDT', chainName: '', logoUrls: ['https://tokens.pancakeswap.finance/images/symbol/usdt.png'] },
    price: 1.0,
    walletBalance: { amount: 20.98, usd: 20.95 },
    marginBalance: { amount: 20.98, usd: 20.95 },
    networks: [
      'https://assets.pancakeswap.finance/web/chains/square/1.svg',
      'https://assets.pancakeswap.finance/web/chains/square/42161.svg',
      'https://assets.pancakeswap.finance/web/chains/square/56.svg',
    ],
  },
]

const PERPS_SUB_TABS = ['Assets', 'Positions', 'Open orders', 'Order history', 'Transaction history'] as const

function fmtUsd(n: number, opts: { plus?: boolean } = {}) {
  const sign = opts.plus && n > 0 ? '+' : n < 0 ? '-' : ''
  const abs = Math.abs(n).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  return `${sign}$${abs}`
}

function PerpsSummaryCard() {
  const stats: { label: string; render: () => React.ReactNode }[] = [
    {
      label: 'PnL (7D)',
      render: () => (
        <span style={{ color: 'var(--pcs-colors-success)', fontFamily: 'Kanit, sans-serif', fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>
          {fmtUsd(PERPS_PNL_7D, { plus: true })} (+{PERPS_PNL_PCT_7D.toFixed(2)}%)
        </span>
      ),
    },
    {
      label: 'Volume (7D)',
      render: () => <span style={{ fontFamily: 'Kanit, sans-serif', fontWeight: 600, fontVariantNumeric: 'tabular-nums', color: 'var(--pcs-colors-text)' }}>{fmtUsd(PERPS_VOLUME_7D)}</span>,
    },
    {
      label: 'Total trades',
      render: () => <span style={{ fontFamily: 'Kanit, sans-serif', fontWeight: 600, fontVariantNumeric: 'tabular-nums', color: 'var(--pcs-colors-text)' }}>{PERPS_TOTAL_TRADES}</span>,
    },
    {
      label: 'Total funding fee',
      render: () => <span style={{ fontFamily: 'Kanit, sans-serif', fontWeight: 600, fontVariantNumeric: 'tabular-nums', color: 'var(--pcs-colors-text)' }}>{fmtUsd(PERPS_FUNDING_FEE)}</span>,
    },
    {
      label: 'Total comission',
      render: () => <span style={{ fontFamily: 'Kanit, sans-serif', fontWeight: 600, fontVariantNumeric: 'tabular-nums', color: 'var(--pcs-colors-text)' }}>{fmtUsd(PERPS_COMMISSION)}</span>,
    },
  ]

  return (
    <Card style={{ flex: 1, display: 'flex', flexDirection: 'column' }} innerCardProps={{ style: { flex: 1, display: 'flex', flexDirection: 'column' } }}>
      <CardBody style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          <Text fontSize="12px" color="textSubtle" bold style={{ letterSpacing: '0.24px', textTransform: 'uppercase', lineHeight: 1.5, marginBottom: 8 }}>
            Total perps balance
          </Text>
          <Text bold fontSize="32px" style={{ fontFamily: 'Kanit, sans-serif', fontWeight: 600, lineHeight: '120%', letterSpacing: '-0.32px', color: 'var(--pcs-colors-text)', fontVariantNumeric: 'tabular-nums' }}>
            ${PERPS_BALANCE.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </Text>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
          {stats.map((s) => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text fontSize="16px" bold color="textSubtle">{s.label}</Text>
              <span style={{ fontSize: 16 }}>{s.render()}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 8, marginTop: 'auto' }}>
          <Button variant="primary" scale="md" style={{ flex: 1 }}>Deposit</Button>
          <Button variant="secondary" scale="md" style={{ flex: 1 }}>Withdraw</Button>
        </div>
      </CardBody>
    </Card>
  )
}

function PerpsSubTabs({ activeIndex, onChange }: { activeIndex: number; onChange: (i: number) => void }) {
  return (
    <div role="tablist" style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap', paddingLeft: 24 }}>
      {PERPS_SUB_TABS.map((label, i) => {
        const active = i === activeIndex
        return (
          <button
            key={label}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(i)}
            style={{
              display: 'flex',
              padding: '8px 16px',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              border: 'none',
              background: active ? 'var(--pcs-colors-card)' : 'transparent',
              color: active ? 'var(--pcs-colors-secondary)' : 'var(--pcs-colors-text-subtle)',
              fontFamily: 'Kanit, sans-serif',
              fontSize: 16,
              fontWeight: active ? 600 : 400,
              cursor: 'pointer',
              boxShadow: active ? '0 -1px 0 0 var(--pcs-colors-card-border) inset, 1px 0 0 0 var(--pcs-colors-card-border) inset, -1px 0 0 0 var(--pcs-colors-card-border) inset, 0 1px 0 0 var(--pcs-colors-card-border)' : 'none',
            }}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

function NetworksCluster({ urls }: { urls: string[] }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'flex-end', flexShrink: 0 }}>
      {urls.map((url, i) => (
        <img
          key={url}
          src={url}
          alt=""
          aria-hidden
          style={{
            width: 24,
            height: 24,
            borderRadius: 8,
            border: '2px solid var(--pcs-colors-card)',
            marginLeft: i > 0 ? -8 : 0,
            position: 'relative',
            zIndex: urls.length - i,
            display: 'block',
            boxSizing: 'border-box',
          }}
        />
      ))}
    </div>
  )
}

function PerpsAssetsTable() {
  const cellTextStyle: CSSProperties = {
    fontFamily: 'Kanit, sans-serif',
    fontSize: 16,
    fontWeight: 400,
    color: 'var(--pcs-colors-text)',
    fontVariantNumeric: 'tabular-nums',
    textAlign: 'right',
  }

  const balanceCell = (b: { amount: number; usd: number }, positive = false) => {
    const isPositive = positive && b.amount > 0
    const sign = isPositive ? '+' : ''
    return (
      <Text style={{ ...cellTextStyle, color: isPositive ? 'var(--pcs-colors-success)' : cellTextStyle.color }}>
        {sign}{b.amount.toFixed(2)} ~${b.usd.toFixed(2)}
      </Text>
    )
  }

  const columns: IColumnsType<PerpsAsset>[] = [
    {
      key: 'token',
      title: 'TOKEN',
      dataIndex: 'symbol',
      minWidth: '180px',
      render: (_, record) => <TokenDisplay token={record.tokenInfo} size={40} />,
    },
    {
      key: 'price',
      title: 'PRICE',
      dataIndex: 'price',
      sorter: true,
      align: 'right',
      render: (val: number) => (
        <Text style={cellTextStyle}>
          {val >= 1000 ? `$${val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : `$${val.toFixed(2)}`}
        </Text>
      ),
    },
    {
      key: 'wallet',
      title: 'WALLET BALANCE',
      dataIndex: 'walletBalance',
      sorter: true,
      align: 'right',
      render: (_, record) => balanceCell(record.walletBalance, record.id === 'usdt'),
    },
    {
      key: 'margin',
      title: 'MARGIN BALANCE',
      dataIndex: 'marginBalance',
      sorter: true,
      align: 'right',
      render: (_, record) => balanceCell(record.marginBalance, record.id === 'usdt'),
    },
    {
      key: 'networks',
      title: 'SUPPORTED NETWORK',
      dataIndex: 'networks',
      align: 'right',
      render: (urls: string[]) => <NetworksCluster urls={urls} />,
    },
    {
      key: 'actions',
      title: () => <span aria-hidden style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>Actions</span>,
      dataIndex: null,
      clickable: false,
      render: (_, record) => (
        <div style={{ display: 'flex', gap: 8, justifyContent: 'stretch', minWidth: 168 }}>
          <button
            type="button"
            aria-label={`Deposit ${record.symbol}`}
            style={{
              display: 'flex',
              padding: '3px 4px 5px',
              justifyContent: 'center',
              alignItems: 'center',
              flex: '1 0 0',
              borderRadius: 8,
              border: 'none',
              borderBottom: '2px solid rgba(0, 0, 0, 0.20)',
              background: 'var(--pcs-colors-primary)',
              color: 'var(--pcs-colors-inverted-contrast)',
              fontFamily: 'Kanit, sans-serif',
              fontSize: 14,
              fontWeight: 600,
              lineHeight: '150%',
              cursor: 'pointer',
              boxSizing: 'border-box',
            }}
          >
            Deposit
          </button>
          <button
            type="button"
            aria-label={`Withdraw ${record.symbol}`}
            style={{
              display: 'flex',
              padding: 4,
              justifyContent: 'center',
              alignItems: 'center',
              flex: '1 0 0',
              borderRadius: 8,
              border: '2px solid var(--pcs-colors-primary)',
              background: 'transparent',
              color: 'var(--pcs-colors-primary)',
              fontFamily: 'Kanit, sans-serif',
              fontSize: 14,
              fontWeight: 600,
              lineHeight: '150%',
              cursor: 'pointer',
              boxSizing: 'border-box',
            }}
          >
            Withdraw
          </button>
        </div>
      ),
    },
  ]

  return (
    <Card>
      <TableView<PerpsAsset> columns={columns} data={PERPS_ASSETS} rowKey="id" />
    </Card>
  )
}

/* ── Liquidity tab content ──────────────────────────────────── */

const LP_TOTAL_LIQUIDITY = 4212.80
const LP_FEES_EARNED_PCT = 0.93
const LP_AVG_APR_PCT = 0.93
const LP_ACTIVE_POSITIONS = 4
const LP_UNCLAIMED = 4212.80

type LpPoolType = 'Infinity' | 'V3' | 'V2' | 'StableSwap'
type LpStatus = 'in-range' | 'out-of-range'

interface LpPosition {
  id: string
  token0: { symbol: string; logo: string }
  token1: { symbol: string; logo: string }
  poolType: LpPoolType
  feeTier: string
  status: LpStatus
  minPrice: string
  minPct: string
  maxPrice: string
  maxPct: string
  /** Position within the min-max range, 0..1 — drives the slider thumb. */
  pricePosition: number
  liquidity: number
  earnings: number
  apr: number
  /** Show the leaf emoji boost on APR. */
  boosted: boolean
}

const LP_POSITIONS: LpPosition[] = [
  {
    id: 'cake-bnb',
    token0: { symbol: 'CAKE', logo: 'https://tokens.pancakeswap.finance/images/symbol/cake.png' },
    token1: { symbol: 'BNB', logo: 'https://tokens.pancakeswap.finance/images/symbol/bnb.png' },
    poolType: 'Infinity', feeTier: '0.09%', status: 'in-range',
    minPrice: '999,999.99', minPct: '-9.99%', maxPrice: '999,999.99', maxPct: '+9.99%',
    pricePosition: 0.5,
    liquidity: 100, earnings: 89.09, apr: 8.09, boosted: true,
  },
  {
    id: 'usdc-usdt',
    token0: { symbol: 'USDC', logo: 'https://tokens.pancakeswap.finance/images/symbol/usdc.png' },
    token1: { symbol: 'USDT', logo: 'https://tokens.pancakeswap.finance/images/symbol/usdt.png' },
    poolType: 'V3', feeTier: '0.99%', status: 'in-range',
    minPrice: '999,999.99', minPct: '-9.99%', maxPrice: '999,999.99', maxPct: '+9.99%',
    pricePosition: 0.5,
    liquidity: 250.89, earnings: 100.76, apr: 4.21, boosted: true,
  },
  {
    id: 'eth-usdc',
    token0: { symbol: 'ETH', logo: 'https://tokens.pancakeswap.finance/images/symbol/eth.png' },
    token1: { symbol: 'USDC', logo: 'https://tokens.pancakeswap.finance/images/symbol/usdc.png' },
    poolType: 'V3', feeTier: '0.99%', status: 'out-of-range',
    minPrice: '999,999.99', minPct: '-9.99%', maxPrice: '999,999.99', maxPct: '+9.99%',
    pricePosition: 0.05,
    liquidity: 600.01, earnings: 400.76, apr: 0, boosted: false,
  },
  {
    id: 'sol-usdc',
    token0: { symbol: 'SOL', logo: 'https://tokens.pancakeswap.finance/images/symbol/sol.png' },
    token1: { symbol: 'USDC', logo: 'https://tokens.pancakeswap.finance/images/symbol/usdc.png' },
    poolType: 'V2', feeTier: '0.99%', status: 'in-range',
    minPrice: '999,999.99', minPct: '-9.99%', maxPrice: '999,999.99', maxPct: '+9.99%',
    pricePosition: 0.5,
    liquidity: 232, earnings: 200.59, apr: 10.33, boosted: false,
  },
  {
    id: 'usdt-btcb',
    token0: { symbol: 'USDT', logo: 'https://tokens.pancakeswap.finance/images/symbol/usdt.png' },
    token1: { symbol: 'BTCB', logo: 'https://tokens.pancakeswap.finance/images/symbol/btcb.png' },
    poolType: 'V2', feeTier: '0.99%', status: 'in-range',
    minPrice: '999,999.99', minPct: '-9.99%', maxPrice: '999,999.99', maxPct: '+9.99%',
    pricePosition: 0.5,
    liquidity: 300, earnings: 182.59, apr: 10.33, boosted: false,
  },
]

const LP_POOL_TABS: ('All' | LpPoolType)[] = ['All', 'Infinity', 'V3', 'V2', 'StableSwap']
const LP_STATUS_TABS = ['All', 'Active', 'Inactive', 'Closed'] as const

function LpStatusBadge({ status }: { status: LpStatus }) {
  const positive = status === 'in-range'
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '2px 8px',
        borderRadius: 999,
        fontFamily: 'Kanit, sans-serif',
        fontSize: 14,
        fontWeight: 600,
        background: positive ? 'rgba(49,208,170,0.12)' : 'rgba(237,75,158,0.12)',
        color: positive ? 'var(--pcs-colors-success)' : 'var(--pcs-colors-failure)',
        whiteSpace: 'nowrap',
      }}
    >
      {positive ? 'In range' : 'Out of range'}
    </span>
  )
}

function LpPriceRangeSlider({ position, status }: { position: number; status: LpStatus }) {
  const thumbColor = status === 'in-range' ? 'var(--pcs-colors-success)' : 'var(--pcs-colors-failure)'
  const trackBg = status === 'in-range'
    ? 'linear-gradient(90deg, var(--pcs-colors-success-20, rgba(49,208,170,0.25)) 0%, var(--pcs-colors-success) 100%)'
    : 'linear-gradient(90deg, var(--pcs-colors-failure) 0%, rgba(237,75,158,0.25) 100%)'
  const clamped = Math.max(0, Math.min(1, position))
  return (
    <div style={{ width: '100%', position: 'relative' }} aria-hidden>
      <div
        style={{
          height: 4,
          width: '100%',
          background: trackBg,
          borderRadius: 999,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: -4,
          left: `calc(${clamped * 100}% - 6px)`,
          width: 12,
          height: 12,
          borderRadius: '50%',
          background: thumbColor,
          border: '2px solid var(--pcs-colors-card)',
          boxSizing: 'border-box',
        }}
      />
    </div>
  )
}

function LpTokenPair({ token0, token1 }: Pick<LpPosition, 'token0' | 'token1'>) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>
        <img src={token0.logo} alt="" aria-hidden style={{ width: 32, height: 32, borderRadius: '50%', display: 'block' }} />
        <img src={token1.logo} alt="" aria-hidden style={{ width: 32, height: 32, borderRadius: '50%', display: 'block', marginLeft: -8 }} />
      </div>
      <Text bold fontSize="16px" style={{ fontFamily: 'Kanit, sans-serif', color: 'var(--pcs-colors-text)', whiteSpace: 'nowrap' }}>
        {token0.symbol} / {token1.symbol}
      </Text>
    </div>
  )
}

function LpPoolFeeTag({ poolType, feeTier }: { poolType: LpPoolType; feeTier: string }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '2px 8px',
        borderRadius: 6,
        fontFamily: 'Kanit, sans-serif',
        fontSize: 12,
        fontWeight: 600,
        background: 'var(--pcs-colors-input-primary)',
        color: 'var(--pcs-colors-text-subtle)',
        whiteSpace: 'nowrap',
      }}
    >
      {poolType} | {feeTier}
    </span>
  )
}

function LpKpiBlock({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Text fontSize="14px" color="textSubtle" style={{ fontFamily: 'Kanit, sans-serif', whiteSpace: 'nowrap' }}>
        {label}
      </Text>
      <Text bold fontSize="24px" style={{ fontFamily: 'Kanit, sans-serif', color: 'var(--pcs-colors-text)', fontVariantNumeric: 'tabular-nums' }}>
        {value}
      </Text>
    </div>
  )
}

function LpOverviewSection() {
  return (
    <div
      style={{
        padding: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        flexWrap: 'wrap',
        borderBottom: '1px solid var(--pcs-colors-card-border)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
        <LpKpiBlock label="Total Liquidity" value={`$${LP_TOTAL_LIQUIDITY.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} />
        <LpKpiBlock label="All time fees earned" value={`${LP_FEES_EARNED_PCT.toFixed(2)}%`} />
        <LpKpiBlock label="Weighted average APR" value={`${LP_AVG_APR_PCT.toFixed(2)}%`} />
        <LpKpiBlock label="Active positions" value={`${LP_ACTIVE_POSITIONS}`} />
      </div>

      {/* Unclaimed rewards nested card */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '8px 16px',
          borderRadius: 16,
          border: '1px solid var(--pcs-colors-card-border)',
          background: 'var(--pcs-colors-background)',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 4 }}>
            <Text fontSize="14px" color="textSubtle" style={{ fontFamily: 'Kanit, sans-serif' }}>
              Unclaimed Rewards
            </Text>
            <InfoIcon size={16} style={{ color: 'var(--pcs-colors-text-disabled)' }} />
          </div>
          <Text bold fontSize="24px" style={{ fontFamily: 'Kanit, sans-serif', color: 'var(--pcs-colors-text)', fontVariantNumeric: 'tabular-nums' }}>
            ${LP_UNCLAIMED.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </Text>
        </div>
        <Button variant="primary" scale="md">Claim</Button>
      </div>
    </div>
  )
}

function LpFilterRow({ poolFilter, onPoolChange }: { poolFilter: string; onPoolChange: (v: string) => void }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 24px', flexWrap: 'wrap' }}>
      {/* Search */}
      <div style={{ position: 'relative', flex: '1 1 280px', minWidth: 240, maxWidth: 466 }}>
        <SearchIcon size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--pcs-colors-text-subtle)', pointerEvents: 'none' }} />
        <input
          placeholder="All tokens"
          style={{
            width: '100%',
            height: 40,
            background: 'var(--pcs-colors-input)',
            border: '1px solid var(--pcs-colors-input-secondary)',
            borderBottomWidth: 2,
            borderRadius: 16,
            padding: '0 36px',
            color: 'var(--pcs-colors-text)',
            fontFamily: 'Kanit, sans-serif',
            fontSize: 16,
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
        <ChevronDownIcon size={16} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--pcs-colors-text-subtle)', pointerEvents: 'none' }} />
      </div>

      {/* Pool tabs */}
      <div role="tablist" style={{ display: 'inline-flex', alignItems: 'flex-start', borderRadius: 143, border: '1px solid var(--pcs-colors-card-border)', background: 'var(--pcs-colors-input-primary)', overflow: 'hidden' }}>
        {LP_POOL_TABS.map((label) => {
          const active = label === poolFilter
          return (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onPoolChange(label)}
              style={{
                display: 'flex',
                padding: '6px 16px',
                justifyContent: 'center',
                alignItems: 'center',
                background: active ? 'var(--pcs-colors-text-subtle)' : 'transparent',
                color: active ? 'var(--pcs-colors-inverted-contrast)' : 'var(--pcs-colors-text-subtle)',
                border: 'none',
                borderRadius: 999,
                fontFamily: 'Kanit, sans-serif',
                fontSize: 14,
                fontWeight: active ? 600 : 400,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {label}
            </button>
          )
        })}
      </div>

      {/* Networks (visual placeholder using overlapping circles) */}
      <button
        type="button"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 12px',
          borderRadius: 16,
          border: '1px solid var(--pcs-colors-input-secondary)',
          background: 'var(--pcs-colors-input)',
          fontFamily: 'Kanit, sans-serif',
          fontSize: 14,
          color: 'var(--pcs-colors-text)',
          cursor: 'pointer',
        }}
      >
        <span style={{ display: 'inline-flex' }}>
          {['56', '1', '8453'].map((id, i) => (
            <img
              key={id}
              src={`https://assets.pancakeswap.finance/web/chains/square/${id}.svg`}
              alt=""
              aria-hidden
              style={{
                width: 20,
                height: 20,
                borderRadius: 6,
                border: '2px solid var(--pcs-colors-card)',
                marginLeft: i > 0 ? -8 : 0,
                position: 'relative',
                zIndex: 3 - i,
                boxSizing: 'border-box',
              }}
            />
          ))}
          <span
            style={{
              width: 20,
              height: 20,
              borderRadius: 6,
              border: '2px solid var(--pcs-colors-card)',
              marginLeft: -8,
              background: 'var(--pcs-colors-input-secondary)',
              fontSize: 10,
              fontWeight: 600,
              color: 'var(--pcs-colors-text)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxSizing: 'border-box',
            }}
          >
            +6
          </span>
        </span>
        All networks
        <ChevronDownIcon size={14} />
      </button>
    </div>
  )
}

function LpStatusFilterRow({
  statusFilter, onStatusChange, farmsOnly, onFarmsOnlyChange,
}: {
  statusFilter: string
  onStatusChange: (v: string) => void
  farmsOnly: boolean
  onFarmsOnlyChange: (v: boolean) => void
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px 16px', gap: 16, flexWrap: 'wrap' }}>
      <div role="tablist" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        {LP_STATUS_TABS.map((label) => {
          const active = label === statusFilter
          return (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onStatusChange(label)}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                fontFamily: 'Kanit, sans-serif',
                fontSize: 16,
                fontWeight: active ? 600 : 400,
                color: active ? 'var(--pcs-colors-secondary)' : 'var(--pcs-colors-text-subtle)',
                cursor: 'pointer',
              }}
            >
              {label}
            </button>
          )
        })}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
          <Text fontSize="14px" color="textSubtle">Farms only</Text>
          <Toggle scale="sm" checked={farmsOnly} onChange={(e) => onFarmsOnlyChange(e.target.checked)} />
        </label>
        <button type="button" aria-label="History" style={{ background: 'var(--pcs-colors-input)', border: '1px solid var(--pcs-colors-input-secondary)', borderRadius: 8, width: 32, height: 32, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pcs-colors-text-subtle)', cursor: 'pointer' }}>
          <HistoryIcon size={16} />
        </button>
        <button type="button" aria-label="Settings" style={{ background: 'var(--pcs-colors-input)', border: '1px solid var(--pcs-colors-input-secondary)', borderRadius: 8, width: 32, height: 32, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pcs-colors-text-subtle)', cursor: 'pointer' }}>
          <CogIcon size={16} />
        </button>
      </div>
    </div>
  )
}

function LpTable() {
  const cellTextStyle: CSSProperties = {
    fontFamily: 'Kanit, sans-serif',
    fontSize: 16,
    fontWeight: 600,
    color: 'var(--pcs-colors-text)',
    fontVariantNumeric: 'tabular-nums',
  }

  const columns: IColumnsType<LpPosition>[] = [
    {
      key: 'token',
      title: 'TOKEN',
      dataIndex: 'token0',
      minWidth: '320px',
      render: (_, record) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <LpTokenPair token0={record.token0} token1={record.token1} />
          <LpPoolFeeTag poolType={record.poolType} feeTier={record.feeTier} />
          <LpStatusBadge status={record.status} />
        </div>
      ),
    },
    {
      key: 'price',
      title: 'MIN - MAX PRICE',
      dataIndex: 'minPrice',
      align: 'center',
      width: '200px',
      render: (_, record) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '0 12px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
            <div style={{ textAlign: 'left' }}>
              <Text fontSize="14px" style={{ ...cellTextStyle, fontWeight: 400 }}>{record.minPrice}</Text>
              <Text fontSize="12px" color="textSubtle" style={{ fontFamily: 'Kanit, sans-serif', fontVariantNumeric: 'tabular-nums' }}>{record.minPct}</Text>
            </div>
            <Text fontSize="14px" color="textSubtle" style={{ fontFamily: 'Kanit, sans-serif' }}>-</Text>
            <div style={{ textAlign: 'right' }}>
              <Text fontSize="14px" style={{ ...cellTextStyle, fontWeight: 400 }}>{record.maxPrice}</Text>
              <Text fontSize="12px" color="textSubtle" style={{ fontFamily: 'Kanit, sans-serif', fontVariantNumeric: 'tabular-nums' }}>{record.maxPct}</Text>
            </div>
          </div>
          <LpPriceRangeSlider position={record.pricePosition} status={record.status} />
        </div>
      ),
    },
    {
      key: 'liquidity',
      title: 'LIQUIDITY',
      dataIndex: 'liquidity',
      sorter: true,
      align: 'right',
      render: (val: number) => <Text style={{ ...cellTextStyle, textAlign: 'right' }}>${val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>,
    },
    {
      key: 'earnings',
      title: 'EARNINGS',
      dataIndex: 'earnings',
      sorter: true,
      align: 'right',
      render: (val: number) => <Text style={{ ...cellTextStyle, textAlign: 'right' }}>${val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>,
    },
    {
      key: 'apr',
      title: 'APR',
      dataIndex: 'apr',
      sorter: true,
      align: 'right',
      render: (val: number, record) => {
        const isZero = val === 0
        return (
          <Text style={{ ...cellTextStyle, textAlign: 'right', color: isZero ? 'var(--pcs-colors-failure)' : cellTextStyle.color }}>
            {record.boosted && !isZero && <span aria-hidden style={{ marginRight: 6 }}>🌿</span>}
            {val.toFixed(2)}%
          </Text>
        )
      },
    },
    {
      key: 'action',
      title: () => <span aria-hidden style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>Action</span>,
      dataIndex: null,
      clickable: false,
      render: (_, record) => (
        <button
          type="button"
          aria-label={`Manage ${record.token0.symbol}/${record.token1.symbol}`}
          style={{
            display: 'flex',
            padding: '4px 16px',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            border: '2px solid var(--pcs-colors-primary)',
            background: 'transparent',
            color: 'var(--pcs-colors-primary)',
            fontFamily: 'Kanit, sans-serif',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          Manage
        </button>
      ),
    },
  ]

  return <TableView<LpPosition> columns={columns} data={LP_POSITIONS} rowKey="id" />
}

function LiquidityTabContent() {
  const [poolFilter, setPoolFilter] = useState<string>('All')
  const [statusFilter, setStatusFilter] = useState<string>('All')
  const [farmsOnly, setFarmsOnly] = useState(false)

  return (
    <Card>
      <LpOverviewSection />
      <LpFilterRow poolFilter={poolFilter} onPoolChange={setPoolFilter} />
      <LpStatusFilterRow
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        farmsOnly={farmsOnly}
        onFarmsOnlyChange={setFarmsOnly}
      />
      <LpTable />
    </Card>
  )
}

/* ── History tab content ────────────────────────────────────── */

type HistoryType = 'Swapped' | 'Add Liq' | 'Sent' | 'Received'

interface HistoryTokenLeg {
  symbol: string
  amount: string
  logo: string
  chain: string
}

interface HistoryRow {
  id: string
  time: string
  type: HistoryType
  from: HistoryTokenLeg
  /** Present for Swapped (with arrow) and Add Liq (with plus). */
  to?: HistoryTokenLeg
  totalValue: number
  tx: string
}

const HISTORY_ROWS: HistoryRow[] = [
  {
    id: '1',
    time: 'April 20, 2026 1:15pm',
    type: 'Swapped',
    from: { symbol: 'BNB', amount: '0.008 BNB', logo: 'https://tokens.pancakeswap.finance/images/symbol/bnb.png', chain: 'BNB chain' },
    to:   { symbol: 'CAKE', amount: '3.16 CAKE', logo: 'https://tokens.pancakeswap.finance/images/symbol/cake.png', chain: 'BNB chain' },
    totalValue: 5.16,
    tx: '0x52b...9787',
  },
  {
    id: '2',
    time: 'April 16, 2026 3:45pm',
    type: 'Add Liq',
    from: { symbol: 'BNB', amount: '1 BNB', logo: 'https://tokens.pancakeswap.finance/images/symbol/bnb.png', chain: 'BNB chain' },
    to:   { symbol: 'CAKE', amount: '417.08 CAKE', logo: 'https://tokens.pancakeswap.finance/images/symbol/cake.png', chain: 'BNB chain' },
    totalValue: 632.90,
    tx: '0x52b...9787',
  },
  {
    id: '3',
    time: 'April 13, 2026 3:45pm',
    type: 'Swapped',
    from: { symbol: 'USDT', amount: '632.92 USDT', logo: 'https://tokens.pancakeswap.finance/images/symbol/usdt.png', chain: 'BNB chain' },
    to:   { symbol: 'BNB', amount: '1 BNB', logo: 'https://tokens.pancakeswap.finance/images/symbol/bnb.png', chain: 'BNB chain' },
    totalValue: 275.50,
    tx: '0x52b...9787',
  },
  {
    id: '4',
    time: 'April 12, 2026 3:45pm',
    type: 'Sent',
    from: { symbol: 'BNB', amount: '0.5 BNB', logo: 'https://tokens.pancakeswap.finance/images/symbol/bnb.png', chain: 'BNB chain' },
    totalValue: 316.98,
    tx: '0x52b...9787',
  },
  {
    id: '5',
    time: 'April 2, 2026 3:45pm',
    type: 'Received',
    from: { symbol: 'BNB', amount: '0.1 BNB', logo: 'https://tokens.pancakeswap.finance/images/symbol/bnb.png', chain: 'BNB chain' },
    totalValue: 63.29,
    tx: '0x52b...9787',
  },
]

function HistoryTokenLegCell({ leg }: { leg: HistoryTokenLeg }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <img
        src={leg.logo}
        alt=""
        aria-hidden
        style={{ width: 40, height: 40, borderRadius: '50%', flexShrink: 0, display: 'block' }}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Text bold fontSize="16px" style={{ fontFamily: 'Kanit, sans-serif', color: 'var(--pcs-colors-text)', whiteSpace: 'nowrap' }}>
          {leg.amount}
        </Text>
        <Text fontSize="12px" color="textSubtle" style={{ fontFamily: 'Kanit, sans-serif', textTransform: 'uppercase', letterSpacing: '0.12px' }}>
          {leg.chain}
        </Text>
      </div>
    </div>
  )
}

function HistoryFilterRow() {
  const sharedButton: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '8px 16px',
    height: 40,
    background: 'var(--pcs-colors-input)',
    border: '1px solid var(--pcs-colors-input-secondary)',
    borderRadius: 16,
    fontFamily: 'Kanit, sans-serif',
    fontSize: 16,
    color: 'var(--pcs-colors-text)',
    cursor: 'pointer',
    boxSizing: 'border-box',
  }

  const NetworksCluster = (
    <span style={{ display: 'inline-flex' }}>
      {['56', '1', '8453'].map((id, i) => (
        <img
          key={id}
          src={`https://assets.pancakeswap.finance/web/chains/square/${id}.svg`}
          alt=""
          aria-hidden
          style={{
            width: 20, height: 20, borderRadius: 6,
            border: '2px solid var(--pcs-colors-card)',
            marginLeft: i > 0 ? -8 : 0,
            position: 'relative',
            zIndex: 3 - i,
            boxSizing: 'border-box',
          }}
        />
      ))}
      <span
        style={{
          width: 20, height: 20, borderRadius: 6,
          border: '2px solid var(--pcs-colors-card)',
          marginLeft: -8,
          background: 'var(--pcs-colors-input-secondary)',
          fontSize: 10, fontWeight: 600, color: 'var(--pcs-colors-text)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          boxSizing: 'border-box',
        }}
      >
        +6
      </span>
    </span>
  )

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '24px', flexWrap: 'wrap' }}>
      {/* Networks */}
      <button type="button" style={{ ...sharedButton, flex: '0 0 auto' }}>
        {NetworksCluster}
        <span>All networks</span>
        <ChevronDownIcon size={14} />
      </button>

      {/* Types search */}
      <div style={{ position: 'relative', flex: '1 1 320px', minWidth: 240 }}>
        <SearchIcon size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--pcs-colors-text-subtle)', pointerEvents: 'none' }} />
        <input
          placeholder="All Types"
          style={{
            width: '100%',
            height: 40,
            background: 'var(--pcs-colors-input)',
            border: '1px solid var(--pcs-colors-input-secondary)',
            borderBottomWidth: 2,
            borderRadius: 16,
            padding: '0 36px',
            color: 'var(--pcs-colors-text)',
            fontFamily: 'Kanit, sans-serif',
            fontSize: 16,
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
        <ChevronDownIcon size={16} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--pcs-colors-text-subtle)', pointerEvents: 'none' }} />
      </div>

      {/* Wallets / networks (right) */}
      <button type="button" style={{ ...sharedButton, flex: '0 0 auto' }}>
        {NetworksCluster}
        <span>All networks</span>
        <ChevronDownIcon size={14} />
      </button>
    </div>
  )
}

function HistoryTable() {
  const cellTextStyle: CSSProperties = {
    fontFamily: 'Kanit, sans-serif',
    fontSize: 16,
    color: 'var(--pcs-colors-text)',
    fontVariantNumeric: 'tabular-nums',
  }

  const columns: IColumnsType<HistoryRow>[] = [
    {
      key: 'time',
      title: 'TIME',
      dataIndex: 'time',
      minWidth: '180px',
      render: (val: string) => <Text style={{ ...cellTextStyle, color: 'var(--pcs-colors-text-subtle)' }}>{val}</Text>,
    },
    {
      key: 'type',
      title: 'TYPE',
      dataIndex: 'type',
      sorter: true,
      align: 'right',
      render: (val: HistoryType) => <Text style={{ ...cellTextStyle, textAlign: 'right', fontWeight: 400 }}>{val}</Text>,
    },
    {
      key: 'amount',
      title: 'AMOUNT',
      dataIndex: 'from',
      sorter: true,
      minWidth: '420px',
      render: (_, record) => {
        const isSwap = record.type === 'Swapped'
        const isAdd = record.type === 'Add Liq'
        return (
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <HistoryTokenLegCell leg={record.from} />
            {record.to && (
              <>
                <span style={{ color: 'var(--pcs-colors-text-subtle)', display: 'inline-flex', alignItems: 'center' }} aria-hidden>
                  {isSwap ? <ArrowForwardIcon size={20} /> : isAdd ? <AddIcon size={20} /> : null}
                </span>
                <HistoryTokenLegCell leg={record.to} />
              </>
            )}
          </div>
        )
      },
    },
    {
      key: 'totalValue',
      title: 'TOTAL VALUE',
      dataIndex: 'totalValue',
      sorter: true,
      align: 'right',
      render: (val: number) => (
        <Text style={{ ...cellTextStyle, textAlign: 'right' }}>
          ${val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </Text>
      ),
    },
    {
      key: 'tx',
      title: 'TX',
      dataIndex: 'tx',
      sorter: true,
      align: 'right',
      render: (val: string) => (
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            color: 'var(--pcs-colors-primary)',
            fontFamily: 'Kanit, sans-serif',
            fontSize: 16,
            fontWeight: 600,
            fontVariantNumeric: 'tabular-nums',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          {val}
          <OpenNewIcon size={16} />
        </a>
      ),
    },
  ]

  return <TableView<HistoryRow> columns={columns} data={HISTORY_ROWS} rowKey="id" />
}

function HistoryTabContent() {
  return (
    <Card>
      <HistoryFilterRow />
      <HistoryTable />
    </Card>
  )
}

function PerpsTabContent() {
  const [subTab, setSubTab] = useState(0)

  return (
    <div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'stretch', marginBottom: 16 }}>
        <div style={{ flex: 2, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
          <PortfolioChart
            value={`PnL ${fmtUsd(PERPS_PNL_7D, { plus: true })}`}
            change={COMBINED_CHANGE}
            subtitle="(Mar 25, 2024 UTC)"
          />
        </div>
        <div style={{ flex: '1 1 0', minWidth: 291, boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
          <PerpsSummaryCard />
        </div>
      </div>

      <div style={{ marginBottom: 0 }}>
        <PerpsSubTabs activeIndex={subTab} onChange={setSubTab} />
      </div>
      {subTab === 0 ? (
        <PerpsAssetsTable />
      ) : (
        <Card>
          <CardBody style={{ padding: 48, textAlign: 'center' }}>
            <Text color="textSubtle">Coming soon — {PERPS_SUB_TABS[subTab]}</Text>
          </CardBody>
        </Card>
      )}
    </div>
  )
}

/* ── Page ────────────────────────────────────────────────────── */

/**
 * Dashboard for both wallets — scoped header at top, then per-chain stacked sections
 * (each with the full chart + breakdown + tokens widget set). The All / EVM / Solana
 * pill in the header filters which sections are visible.
 */
export function DashboardBothWallets() {
  const [scope, setScope] = useState<WalletScope>('all')
  const [evmTabIndex, setEvmTabIndex] = useState(0)
  const [solTabIndex, setSolTabIndex] = useState(0)
  const showEvm = scope === 'all' || scope === 'evm'
  const showSol = scope === 'all' || scope === 'sol'

  const headerTotal =
    scope === 'sol' ? SOL_BALANCE : scope === 'evm' ? EVM_BALANCE : COMBINED_BALANCE
  const headerLabel =
    scope === 'sol'
      ? 'Solana portfolio'
      : scope === 'evm'
      ? 'EVM portfolio'
      : 'Combined portfolio'
  const headerWalletCount = scope === 'all' ? 2 : 1
  const headerTitle =
    scope === 'all'
      ? `My Dashboard (${headerWalletCount} wallets connected)`
      : scope === 'evm'
      ? 'My Dashboard · EVM'
      : 'My Dashboard · Solana'

  // EVM breakdown — wallet + perps + liquidity + unclaimed
  const evmBreakdown: BreakdownItem[] = (() => {
    const sum = EVM_BALANCE + PERPS_POSITIONS
    const pct = (v: number) => (sum > 0 ? Math.round((v / sum) * 100) : 0)
    return [
      {
        label: 'Wallet balance',
        value: EVM_BALANCE,
        pct: pct(EVM_BALANCE),
        color: 'var(--pcs-colors-primary)',
      },
      {
        label: 'Perps positions',
        value: PERPS_POSITIONS,
        pct: pct(PERPS_POSITIONS),
        color: 'var(--pcs-colors-secondary)',
      },
      {
        label: 'Liquidity positions',
        value: 0,
        pct: 0,
        color: 'var(--pcs-colors-warning)',
      },
      {
        label: 'Unclaimed rewards',
        value: 0,
        pct: 0,
        color: 'var(--pcs-colors-failure)',
      },
    ]
  })()

  // Solana breakdown — only wallet balance is non-zero
  const solBreakdown: BreakdownItem[] = [
    {
      label: 'Wallet balance',
      value: SOL_BALANCE,
      pct: 100,
      color: 'var(--pcs-colors-primary)',
    },
    {
      label: 'Liquidity positions',
      value: 0,
      pct: 0,
      color: 'var(--pcs-colors-secondary)',
    },
    {
      label: 'Unclaimed rewards',
      value: 0,
      pct: 0,
      color: 'var(--pcs-colors-failure)',
    },
  ]

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--pcs-colors-background)',
        fontFamily: 'Kanit, sans-serif',
      }}
    >
      <AppNav />
      <div style={{ padding: '0 40px 60px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', paddingTop: 32 }}>
          {/* ── Top header row ─────────────────────────────────── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: 24,
              marginBottom: 32,
              flexWrap: 'wrap',
            }}
          >
            <div>
              <Text
                as="h1"
                style={{
                  fontFamily: 'Kanit, sans-serif',
                  fontSize: 32,
                  fontWeight: 600,
                  color: 'var(--pcs-colors-text)',
                  margin: 0,
                  lineHeight: 1.1,
                  letterSpacing: '-0.32px',
                }}
              >
                {headerTitle}
              </Text>
              <Text
                fontSize="12px"
                bold
                style={{
                  letterSpacing: '0.24px',
                  textTransform: 'uppercase',
                  color: 'var(--pcs-colors-secondary)',
                  marginTop: 12,
                  lineHeight: 1.5,
                }}
              >
                {headerLabel}
              </Text>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                <Text
                  style={{
                    fontFamily: 'Kanit, sans-serif',
                    fontSize: 32,
                    fontWeight: 600,
                    color: 'var(--pcs-colors-text)',
                    fontVariantNumeric: 'tabular-nums',
                    lineHeight: 1.2,
                    letterSpacing: '-0.32px',
                  }}
                >
                  ${headerTotal.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </Text>
                <PnlTagInline value={COMBINED_CHANGE} />
              </div>
              <Text
                fontSize="14px"
                color="textSubtle"
                style={{ marginTop: 4 }}
              >
                {scope === 'all'
                  ? 'Across 2 connected wallets'
                  : scope === 'evm'
                  ? 'EVM wallet balance · live'
                  : 'Solana wallet balance · live'}
              </Text>
            </div>

            <WalletScopePill value={scope} onChange={setScope} />
          </div>

          {/* Divider between header and the per-chain sections */}
          <div
            role="separator"
            aria-orientation="horizontal"
            style={{
              height: 1,
              background: 'var(--pcs-colors-card-border)',
              marginBottom: 32,
            }}
          />

          {/* ── EVM section ───────────────────────────────────── */}
          {showEvm && (
            <div style={{ marginBottom: 48 }}>
              {(() => {
                const evmTabs = [
                  { label: 'Overview', supported: true, key: 'overview' },
                  // Perps only available when scope is "EVM Chains" — hide on "All Wallets"
                  ...(scope === 'evm' ? [{ label: 'Perps positions', supported: true, key: 'perps' }] : []),
                  { label: 'Liquidity positions', supported: true, key: 'liquidity' },
                  { label: 'History', supported: true, key: 'history' },
                ]
                const safeIndex = Math.min(evmTabIndex, evmTabs.length - 1)
                const activeKey = evmTabs[safeIndex].key
                return (
                  <>
                    <SectionHeaderRow
                      title="EVM portfolio"
                      tabs={evmTabs}
                      activeIndex={safeIndex}
                      onTabChange={setEvmTabIndex}
                    />
                    <ConnectedWalletBanner
                      kind="evm"
                      provider="Metamask"
                      address={EVM_ADDRESS}
                    />
                    {activeKey === 'perps' ? (
                      <PerpsTabContent />
                    ) : activeKey === 'liquidity' ? (
                      <LiquidityTabContent />
                    ) : activeKey === 'history' ? (
                      <HistoryTabContent />
                    ) : (
                      <>
                        <div
                          style={{
                            display: 'flex',
                            gap: 16,
                            alignItems: 'stretch',
                            marginBottom: 16,
                          }}
                        >
                          <div style={{ flex: 2, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
                            <PortfolioChart
                              value={`$${EVM_BALANCE.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}`}
                              change={COMBINED_CHANGE}
                              subtitle="Mar 25, 2024 UTC · EVM only"
                            />
                          </div>
                          <div
                            style={{
                              flex: '1 1 0',
                              minWidth: 291,
                              boxSizing: 'border-box',
                            }}
                          >
                            <PortfolioBreakdown
                              title="My Portfolio Breakdown"
                              total={EVM_BALANCE}
                              change={COMBINED_CHANGE}
                              items={evmBreakdown}
                            />
                          </div>
                        </div>
                        <TokenTable
                          tokens={TOKENS_EVM}
                          title={
                            <div
                              style={{
                                padding: '16px 24px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderBottom: '1px solid var(--pcs-colors-card-border)',
                              }}
                            >
                              <Text bold fontSize="20px">
                                Tokens ({TOKENS_EVM.length})
                              </Text>
                            </div>
                          }
                        />
                      </>
                    )}
                  </>
                )
              })()}
            </div>
          )}

          {/* ── Solana section ────────────────────────────────── */}
          {showSol && (
            <div>
              {(() => {
                const solTabs = [
                  { label: 'Overview', supported: true, key: 'overview' },
                  { label: 'Liquidity positions', supported: true, key: 'liquidity' },
                  { label: 'History', supported: true, key: 'history' },
                ]
                const safeIndex = Math.min(solTabIndex, solTabs.length - 1)
                const activeKey = solTabs[safeIndex].key
                return (
                  <>
                    <SectionHeaderRow
                      title="Solana portfolio"
                      tabs={solTabs}
                      activeIndex={safeIndex}
                      onTabChange={setSolTabIndex}
                    />
                    <ConnectedWalletBanner
                      kind="sol"
                      provider="Phantom"
                      address={SOL_ADDRESS}
                    />
                    {activeKey === 'liquidity' ? (
                      <LiquidityTabContent />
                    ) : activeKey === 'history' ? (
                      <HistoryTabContent />
                    ) : (
                      <>
                        <div
                          style={{
                            display: 'flex',
                            gap: 16,
                            alignItems: 'stretch',
                            marginBottom: 16,
                          }}
                        >
                          <div style={{ flex: 2, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
                            <SolanaChartPlaceholderCard />
                          </div>
                          <div
                            style={{
                              flex: '1 1 0',
                              minWidth: 291,
                              boxSizing: 'border-box',
                            }}
                          >
                            <PortfolioBreakdown
                              title="My Portfolio Breakdown"
                              total={SOL_BALANCE}
                              change={COMBINED_CHANGE}
                              items={solBreakdown}
                            />
                          </div>
                        </div>
                        <TokenTable
                          tokens={TOKENS_SOL}
                          title={
                            <div
                              style={{
                                padding: '16px 24px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderBottom: '1px solid var(--pcs-colors-card-border)',
                              }}
                            >
                              <Text bold fontSize="20px">
                                Tokens ({TOKENS_SOL.length})
                              </Text>
                            </div>
                          }
                        />
                      </>
                    )}
                  </>
                )
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
