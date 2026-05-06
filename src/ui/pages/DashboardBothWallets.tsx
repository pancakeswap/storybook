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

/** Segmented filter pill: All wallets · EVM · Solana */
function WalletScopePill({
  value,
  onChange,
}: {
  value: WalletScope
  onChange: (v: WalletScope) => void
}) {
  const items: { k: WalletScope; label: string; icon: React.ReactNode; count?: number }[] = [
    {
      k: 'all',
      label: 'All wallets',
      icon: (
        <div style={{ display: 'flex', marginRight: 4 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 6,
              background: 'linear-gradient(135deg, #F0B90B 0%, #E8831A 100%)',
              border: '1.5px solid var(--pcs-colors-card)',
            }}
          />
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 6,
              background: SOL_GRADIENT,
              border: '1.5px solid var(--pcs-colors-card)',
              marginLeft: -6,
            }}
          />
        </div>
      ),
      count: 2,
    },
    {
      k: 'evm',
      label: 'EVM',
      icon: (
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: 6,
            background: 'linear-gradient(135deg, #F0B90B 0%, #E8831A 100%)',
          }}
        />
      ),
    },
    {
      k: 'sol',
      label: 'Solana',
      icon: <SolanaChainBadge size={18} />,
    },
  ]

  return (
    <div
      style={{
        display: 'flex',
        gap: 4,
        padding: 4,
        background: 'var(--pcs-colors-input)',
        border: '1px solid var(--pcs-colors-input-secondary)',
        borderRadius: 16,
      }}
    >
      {items.map((f) => {
        const active = value === f.k
        return (
          <button
            key={f.k}
            onClick={() => onChange(f.k)}
            style={{
              padding: '6px 14px',
              borderRadius: 12,
              border: 'none',
              background: active ? 'var(--pcs-colors-card)' : 'transparent',
              color: active ? 'var(--pcs-colors-secondary)' : 'var(--pcs-colors-text-subtle)',
              fontFamily: 'Kanit, sans-serif',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              boxShadow: active ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
              whiteSpace: 'nowrap',
            }}
          >
            {f.icon}
            {f.label}
            {f.count !== undefined && (
              <span
                style={{
                  fontSize: 11,
                  color: 'var(--pcs-colors-text-subtle)',
                  fontWeight: 500,
                }}
              >
                {f.count}
              </span>
            )}
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
}: {
  title: string
  tabs: { label: string; supported: boolean }[]
  activeIndex?: number
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
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        {tabs.map((tab, i) => {
          const active = i === activeIndex
          const disabled = !tab.supported
          return (
            <span
              key={tab.label}
              role="tab"
              aria-selected={active}
              aria-disabled={disabled}
              style={{
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
            </span>
          )
        })}
      </div>
    </div>
  )
}

/**
 * Solana chart placeholder card — gradient icon + heading + subtitle + a faint
 * area-chart strip, all centered vertically as one group within the card.
 *
 * Note: PCS Card is a two-layer styled component. To make CardBody fill the card
 * height (so the centered group has whitespace above and below it when the sibling
 * breakdown card is taller), styles must be passed to BOTH the outer (`style`) and
 * the inner (`innerCardProps.style`).
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
          padding: 32,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
          textAlign: 'center',
        }}
      >
        {/* Centered copy stack — icon + heading + subtitle */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 20,
              background: SOL_GRADIENT,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SolanaChainBadge size={44} style={{ borderRadius: 14 }} />
          </div>
          <Text
            bold
            fontSize="20px"
            style={{
              fontFamily: 'Kanit, sans-serif',
              color: 'var(--pcs-colors-text)',
              marginTop: 4,
            }}
          >
            Solana chart history is on the way
          </Text>
          <Text
            fontSize="14px"
            color="textSubtle"
            style={{
              maxWidth: 420,
              lineHeight: 1.5,
            }}
          >
            We're working on Solana chart history. Coming Soon.
          </Text>
        </div>

        {/* Faint area-chart strip — sits in normal flow under the copy stack */}
        <svg
          viewBox="0 0 800 80"
          preserveAspectRatio="none"
          aria-hidden
          style={{
            display: 'block',
            width: '100%',
            height: 56,
            opacity: 0.35,
            flexShrink: 0,
          }}
        >
          <defs>
            <linearGradient id="sol-faint-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7645D9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#7645D9" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 0 60 L 50 50 L 100 55 L 150 45 L 200 38 L 250 42 L 300 32 L 350 28 L 400 30 L 450 22 L 500 18 L 550 22 L 600 16 L 650 12 L 700 14 L 750 10 L 800 8 L 800 80 L 0 80 Z"
            fill="url(#sol-faint-gradient)"
          />
          <path
            d="M 0 60 L 50 50 L 100 55 L 150 45 L 200 38 L 250 42 L 300 32 L 350 28 L 400 30 L 450 22 L 500 18 L 550 22 L 600 16 L 650 12 L 700 14 L 750 10 L 800 8"
            fill="none"
            stroke="#7645D9"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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

/* ── Page ────────────────────────────────────────────────────── */

/**
 * Dashboard for both wallets — scoped header at top, then per-chain stacked sections
 * (each with the full chart + breakdown + tokens widget set). The All / EVM / Solana
 * pill in the header filters which sections are visible.
 */
export function DashboardBothWallets() {
  const [scope, setScope] = useState<WalletScope>('all')
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
              <SectionHeaderRow
                title="EVM portfolio"
                tabs={[
                  { label: 'Overview', supported: true },
                  { label: 'Perps positions', supported: true },
                  { label: 'Liquidity positions', supported: true },
                  { label: 'History', supported: true },
                ]}
              />
              <ConnectedWalletBanner
                kind="evm"
                provider="Metamask"
                address={EVM_ADDRESS}
              />
              <div
                style={{
                  display: 'flex',
                  gap: 16,
                  alignItems: 'stretch',
                  marginBottom: 16,
                }}
              >
                <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
                  <PortfolioChart
                    value={`$${EVM_BALANCE.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}`}
                    change={COMBINED_CHANGE}
                    subtitle="Mar 25, 2024 UTC · EVM only"
                  />
                </div>
                <div style={{ width: 323, flexShrink: 0 }}>
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
            </div>
          )}

          {/* ── Solana section ────────────────────────────────── */}
          {showSol && (
            <div>
              <SectionHeaderRow
                title="Solana portfolio"
                tabs={[
                  { label: 'Overview', supported: true },
                  { label: 'Liquidity positions', supported: true },
                  { label: 'History', supported: true },
                ]}
              />
              <ConnectedWalletBanner
                kind="sol"
                provider="Phantom"
                address={SOL_ADDRESS}
              />
              <div
                style={{
                  display: 'flex',
                  gap: 16,
                  alignItems: 'stretch',
                  marginBottom: 16,
                }}
              >
                <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
                  <SolanaChartPlaceholderCard />
                </div>
                <div style={{ width: 323, flexShrink: 0 }}>
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
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
