import { ReactNode, useMemo, useState } from 'react'
import { css, keyframes, styled } from 'styled-components'
import { Flex } from '../primitives/Box'
import { Checkbox } from '../primitives/Checkbox'
import {
  ArrowBackIcon,
  ArrowDropDownIcon,
  ArrowForwardIcon,
  ChevronDownIcon,
} from '../primitives/Icons'
import { useTooltip } from '../hooks/useTooltip'

/* ── Types ─────────────────────────────────────────────────── */

type Timeframe = '24h' | '7d' | 'all'
type TabKey = 'assets' | 'tx' | 'gift'
type BucketKey = 'spot' | 'perp'
type LoadState = 'loading' | 'empty' | 'data'
type TopVariant = 'loading' | 'empty' | 'data'

interface SpotToken {
  symbol: string
  name: string
  amount: string
  value: number
  pnl: number
  network: 'BNB'
  color: string
}

interface PerpPosition {
  symbol: string
  side: 'Long' | 'Short'
  leverage: string
  pnlUsd: number
  pnlPct: number
  color: string
}

export interface ActionItem {
  key: string
  label: string
  primary?: boolean
  onClick: () => void
  disabled?: boolean
}

export interface PerpStatsData {
  balance: number
  balancePnlPct: number
  unrealizedPnl: number
  unrealizedPnlPct: number
}

export interface Bucket {
  key: BucketKey
  label: string
  sublabel: string
  state?: LoadState
  amount?: number
  pnl?: Record<Timeframe, number>
  description?: string
  tokens?: SpotToken[]
  positions?: PerpPosition[]
  balanceTokens?: SpotToken[]
  perpStats?: PerpStatsData
  actions?: ActionItem[]
  emptyContent?: ReactNode
}

export interface WalletData {
  buckets: {
    spot: Bucket
    perp: Bucket
  }
}

export interface WalletPanelLabels {
  heroTitle?: string
  overview?: string
  spotLabel?: string
  perpLabel?: string
  hideSmallBalances?: string
  bridgeCrypto?: string
  emptyMessage?: string
  loadingMessage?: string
  tabs?: { assets?: string; transactions?: string; gift?: string }
  pnlSuffix?: { '24h'?: string; '7d'?: string; all?: string }
  bucketEmptyMessage?: (bucket: { label: string }) => string
}

export interface WalletPanelProps {
  data?: WalletData

  variant?: TopVariant
  emptyContent?: ReactNode

  initialTab?: TabKey
  initialTimeframe?: Timeframe
  initialExpanded?: 'spot' | 'perp' | null

  tab?: TabKey
  onTabChange?: (tab: TabKey) => void
  timeframe?: Timeframe
  onTimeframeChange?: (tf: Timeframe) => void
  expanded?: 'spot' | 'perp' | null
  onExpandedChange?: (e: 'spot' | 'perp' | null) => void
  hideSmall?: boolean
  onHideSmallChange?: (v: boolean) => void
  /**
   * USD value below which a token / position is hidden when the
   * "Hide small balances" toggle is active. Default `1`.
   */
  hideSmallThreshold?: number

  walletChip?: ReactNode
  chainChip?: ReactNode
  hideHeader?: boolean

  /**
   * When `true`, the outer chrome (border, border-radius, background, padding)
   * is dropped. Use this when the panel is rendered inside another card/modal
   * that already provides its own chrome, to avoid visually doubled-up cards.
   * @default false
   */
  embedded?: boolean

  visibleTabs?: TabKey[]
  tabContent?: {
    assets?: ReactNode
    transactions?: ReactNode
    gift?: ReactNode
  }

  heroTitle?: string
  showTimeframe?: boolean
  showPnl?: boolean
  showBridge?: boolean

  renderTokenIcon?: (token: { symbol: string; color?: string; network?: string }) => ReactNode

  labels?: WalletPanelLabels

  onBridge?: () => void
  /** @deprecated Pass actions via `bucket.actions` instead. */
  onSpotAction?: (action: 'send' | 'receive' | 'swap') => void
  /** @deprecated Pass actions via `bucket.actions` instead. */
  onPerpAction?: (action: 'deposit' | 'withdraw' | 'manage' | 'transfer') => void
}

/* ── Mock data ─────────────────────────────────────────────── */

/* eslint-disable no-restricted-syntax -- brand SVG illustration */
const DEFAULT_DATA: WalletData = {
  buckets: {
    spot: {
      key: 'spot',
      label: 'Spot Balance',
      sublabel: 'In your wallet',
      amount: 5515.63,
      pnl: { '24h': 1.72, '7d': 4.31, 'all': 12.84 },
      description: 'Tokens held in your connected wallet (e.g. MetaMask). Available to swap, send, or deposit.',
      tokens: [
        { symbol: 'ETH', name: 'Ethereum', amount: '1.09 ETH', value: 1716.02, pnl: 0.5, network: 'BNB', color: '#627EEA' },
        { symbol: 'BNB', name: 'Binance', amount: '1 BNB', value: 651.13, pnl: 0.5, network: 'BNB', color: '#F0B90B' },
        { symbol: 'CAKE', name: 'PancakeSwap', amount: '358.214 CAKE', value: 500, pnl: 0.5, network: 'BNB', color: '#23CAD5' },
        { symbol: 'USDC', name: 'Circle USD', amount: '2,000.13 USDC', value: 2000, pnl: 0.5, network: 'BNB', color: '#2775CA' },
        { symbol: 'USDT', name: 'Tether', amount: '1,717 USDT', value: 1716.02, pnl: 0.5, network: 'BNB', color: '#26A17B' },
      ],
    },
    perp: {
      key: 'perp',
      label: 'Perps Balance',
      sublabel: 'Aster contract',
      amount: 973.35,
      pnl: { '24h': -0.22, '7d': 8.12, 'all': 23.18 },
      description: 'Total value of your assets and active positions, including unrealized PnL. Updates in real time.',
      perpStats: {
        balance: 567.79,
        balancePnlPct: 1.72,
        unrealizedPnl: 405.56,
        unrealizedPnlPct: -0.22,
      },
      positions: [
        { symbol: 'ETH', side: 'Long',  leverage: '500X', pnlUsd: 209.87, pnlPct: 0.5, color: '#627EEA' },
        { symbol: 'BTC', side: 'Short', leverage: '250X', pnlUsd: 425.26, pnlPct: 0.5, color: '#F7931A' },
        { symbol: 'BNB', side: 'Long',  leverage: '500X', pnlUsd: 338.11, pnlPct: 0.5, color: '#F0B90B' },
      ],
      balanceTokens: [
        { symbol: 'USDC', name: 'Circle USD', amount: '256.29 USDC', value: 257.35, pnl: 0.01, network: 'BNB', color: '#2775CA' },
        { symbol: 'ETH',  name: 'Ethereum',   amount: '0.11 ETH',   value: 254.09, pnl: 0.5,  network: 'BNB', color: '#627EEA' },
        { symbol: 'BNB',  name: 'Binance',    amount: '0.09 BNB',   value: 56.44,  pnl: 0.5,  network: 'BNB', color: '#F0B90B' },
      ],
    },
  },
}
/* eslint-enable no-restricted-syntax */

const DEFAULT_LABELS: Required<Omit<WalletPanelLabels, 'heroTitle' | 'tabs' | 'pnlSuffix' | 'bucketEmptyMessage'>> & {
  tabs: Required<NonNullable<WalletPanelLabels['tabs']>>
  pnlSuffix: Required<NonNullable<WalletPanelLabels['pnlSuffix']>>
  bucketEmptyMessage: NonNullable<WalletPanelLabels['bucketEmptyMessage']>
} = {
  overview: 'Overview',
  spotLabel: 'Spot',
  perpLabel: 'Perp',
  hideSmallBalances: 'Hide small balances',
  bridgeCrypto: 'Bridge Crypto',
  emptyMessage: 'No assets yet',
  loadingMessage: 'Loading...',
  tabs: { assets: 'Assets', transactions: 'Transactions', gift: 'Gift' },
  pnlSuffix: {
    '24h': 'over the past 24 hours',
    '7d': 'over the past 7 days',
    all: 'over your lifetime',
  },
  bucketEmptyMessage: (b) => `No assets in ${b.label}`,
}

/* ── Helpers ───────────────────────────────────────────────── */

const fmtUsd = (n: number) => {
  const sign = n < 0 ? '-' : ''
  const v = Math.abs(n)
  return `${sign}$${v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

const fmtUsdRound = (n: number) => {
  const sign = n < 0 ? '-' : ''
  const v = Math.abs(n)
  const hasFraction = v % 1 !== 0
  return `${sign}$${v.toLocaleString('en-US', {
    minimumFractionDigits: hasFraction ? 2 : 0,
    maximumFractionDigits: 2,
  })}`
}

const splitDecimals = (n: number) => {
  const [whole, dec = '00'] = Math.abs(n).toFixed(2).split('.')
  const sign = n < 0 ? '-' : ''
  return {
    whole: `${sign}$${Number(whole).toLocaleString('en-US')}`,
    dec: `.${dec}`,
  }
}

function useControlled<T>(
  controlled: T | undefined,
  setController: ((v: T) => void) | undefined,
  initial: T,
): [T, (v: T) => void] {
  const [internal, setInternal] = useState<T>(initial)
  const value = controlled !== undefined ? controlled : internal
  const setValue = (next: T) => {
    if (controlled === undefined) setInternal(next)
    setController?.(next)
  }
  return [value, setValue]
}

/* ── Inline glyphs (no 1:1 in primitives/Icons.tsx) ─────────── */

const TriangleUp = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
    <path d="M6 3l4.5 6h-9z" />
  </svg>
)

const TriangleDown = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
    <path d="M6 9L1.5 3h9z" />
  </svg>
)

const ChevronRight = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M9.75832 12.7417L11.9167 10.5833C12.2417 10.2583 12.2417 9.73332 11.9167 9.40832L9.75832 7.24999C9.23332 6.72499 8.33332 7.09999 8.33332 7.84165V12.1583C8.33332 12.9 9.23332 13.2667 9.75832 12.7417Z"
      fill="currentColor"
    />
  </svg>
)

const InfoCircle = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
  </svg>
)

const BnbDiamond = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path
      // eslint-disable-next-line no-restricted-syntax -- brand SVG illustration
      fill="#F0B90B"
      d="M12 2 7.4 6.6 9 8.2 12 5.2 15 8.2l1.6-1.6L12 2zm-7 7L3.4 10.6 5 12.2 6.6 10.6 5 9zm14 0-1.6 1.6L19 12.2l1.6-1.6L19 9zM7.4 13.4 5.8 15 12 21.2 18.2 15l-1.6-1.6L12 18l-4.6-4.6zm4.6-2L10.4 13 12 14.6 13.6 13 12 11.4z"
    />
  </svg>
)

/* Bucket icon chips — 36×36 rounded squares with a single emoji glyph
   inside. Replaces the previous raster wallet.png / perps-chart.png. */
/* eslint-disable no-restricted-syntax -- TODO(design): perps-variant tokens */
const BucketIconChip = styled.span<{ $variant: 'spot' | 'perp' }>`
  display: flex;
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid
    ${({ $variant }) => ($variant === 'spot' ? '#D7CAEC' : '#C2D8DB')};
  background: ${({ $variant }) => ($variant === 'spot' ? '#EEEAF4' : '#F4FAFB')};
  color: #000;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;

  html.dark & {
    border-color: ${({ $variant }) => ($variant === 'spot' ? '#55496E' : '#575775')};
    background: ${({ $variant }) => ($variant === 'spot' ? '#27252B' : '#223537')};
  }
`
/* eslint-enable no-restricted-syntax */

const SpotWalletGlyph = () => (
  <BucketIconChip $variant="spot" aria-hidden>
    💸
  </BucketIconChip>
)

const PerpsChartGlyph = () => (
  <BucketIconChip $variant="perp" aria-hidden>
    🔮
  </BucketIconChip>
)

/* ── Styled atoms ──────────────────────────────────────────── */

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`

const Skeleton = styled.span<{ $w?: string; $h?: string; $br?: string }>`
  display: inline-block;
  width: ${({ $w }) => $w ?? '64px'};
  height: ${({ $h }) => $h ?? '14px'};
  border-radius: ${({ $br }) => $br ?? '6px'};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.input} 0%,
    ${({ theme }) => theme.colors.inputSecondary} 50%,
    ${({ theme }) => theme.colors.input} 100%
  );
  background-size: 400px 100%;
  animation: ${shimmer} 1.4s ease-in-out infinite;
  vertical-align: middle;
`

const SkeletonBlock = styled.div<{ $w?: string; $h?: string; $br?: string }>`
  width: ${({ $w }) => $w ?? '100%'};
  height: ${({ $h }) => $h ?? '14px'};
  border-radius: ${({ $br }) => $br ?? '6px'};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.input} 0%,
    ${({ theme }) => theme.colors.inputSecondary} 50%,
    ${({ theme }) => theme.colors.input} 100%
  );
  background-size: 400px 100%;
  animation: ${shimmer} 1.4s ease-in-out infinite;
`

const EmptyState = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  padding: 32px 16px;
  gap: 8px;
  color: ${({ theme }) => theme.colors.textSubtle};
  text-align: center;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`

const Root = styled.section<{ $embedded?: boolean }>`
  display: flex;
  width: 400px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  font-family: 'Kanit', sans-serif;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
  ${({ $embedded, theme }) =>
    $embedded
      ? css`
          border: 0;
          border-radius: 0;
          background: transparent;
          padding: 0;
        `
      : css`
          padding: 16px 16px 24px 16px;
          border-radius: 24px;
          border-top: 1px solid ${theme.colors.cardBorder};
          border-right: 1px solid ${theme.colors.cardBorder};
          border-bottom: 2px solid ${theme.colors.cardBorder};
          border-left: 1px solid ${theme.colors.cardBorder};
          background: ${theme.colors.card};
        `}
`

const Header = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const Chip = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 8px;
  background: ${({ theme }) => theme.colors.cardSecondary};
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  cursor: pointer;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.textSubtle};
  transition: filter 0.12s;
  &:hover {
    filter: brightness(0.98);
  }
`

const ChipStack = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: -13px;
  padding-right: 13px;
`

const ChipBadge = styled.span<{ $variant: 'light' | 'dark' }>`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  ${({ $variant, theme }) =>
    $variant === 'light'
      ? `
    background: ${theme.colors.cardSecondary};
    border: 1px solid ${theme.colors.cardBorder};
    z-index: 2;
    margin-right: -13px;
  `
      : // eslint-disable-next-line no-restricted-syntax -- TODO(design): missing dark/light counterpart
        `
    background: #121212;
    z-index: 1;
    color: #F0B90B;
  `}
`

const ChipGrid = styled.span`
  display: grid;
  grid-template-columns: 9px 9px;
  grid-template-rows: 9px 9px;
  gap: 1px;
`

const ChainDot = styled.span<{ $color: string }>`
  width: 9px;
  height: 9px;
  border-radius: 3px;
  display: block;
  background: ${({ $color }) => $color};
`

const Tabs = styled(Flex)`
  align-items: center;
  gap: 16px;
  width: 100%;
`

const TabButton = styled.button<{ $active: boolean; $muted?: boolean }>`
  border: 0;
  background: transparent;
  padding: 4px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  color: ${({ $active, $muted, theme }) => {
    if ($muted) return theme.colors.textDisabled
    return $active ? theme.colors.secondary : theme.colors.textSubtle
  }};
  cursor: ${({ $muted }) => ($muted ? 'default' : 'pointer')};
  line-height: 1.5;
  transition: color 0.15s;
  &:hover {
    color: ${({ $active, $muted, theme }) => {
      if ($muted) return theme.colors.textDisabled
      return $active ? theme.colors.secondary : theme.colors.text
    }};
  }
`

const Hero = styled(Flex)`
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

const HeroTop = styled(Flex)`
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`

const HeroTitle = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
`

/* eslint-disable no-restricted-syntax -- TODO(design): missing dark/light counterpart */
const TfRoot = styled.div<{ $muted?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 2px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  background: ${({ theme }) => theme.colors.input};
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.06) inset;
  opacity: ${({ $muted }) => ($muted ? 0.6 : 1)};

  html.dark & {
    border-color: #55496E;
    background: #372F47;
    box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.16) inset;
  }
`

const TfButton = styled.button<{ $active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background: ${({ $active, theme }) => ($active ? theme.colors.textSubtle : 'transparent')};
  color: ${({ $active, theme }) => ($active ? '#fff' : theme.colors.textSubtle)};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  line-height: 150%;
  padding: 4px 8px;
  border-radius: 16px;
  cursor: pointer;
  min-width: 40px;
  transition: background 0.16s, color 0.16s;

  html.dark & {
    ${({ $active }) =>
      $active
        ? css`
            width: 47px;
            padding: 4px;
            background: #B8ADD2;
            color: #000;
            min-width: 0;
          `
        : ''}
  }
`
/* eslint-enable no-restricted-syntax */

const HeroAmountRow = styled(Flex)`
  align-items: center;
  gap: 4px;
  width: 100%;
`

const HeroAmount = styled.span`
  font-family: 'Kanit', sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.32px;
  display: inline-flex;
  align-items: baseline;
`

const HeroAmountInt = styled.span`
  color: ${({ theme }) => theme.colors.text};
`

const HeroAmountDec = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
`

const HeroSub = styled(Flex)`
  align-items: center;
  gap: 4px;
  font-size: 12px;
  line-height: 1.4;
`

const HeroSubDelta = styled.span<{ $up: boolean }>`
  color: ${({ $up }) => ($up ? 'var(--pcs-colors-positive60)' : 'var(--pcs-colors-failure)')};
  font-weight: 600;
`

const HeroSubRest = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
`

const Pnl = styled.span<{ $up: boolean; $size?: 'sm' | 'md' | 'lg' }>`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 0 6px;
  border-radius: 999px;
  font-size: ${({ $size }) => ($size === 'lg' ? '16px' : $size === 'md' ? '14px' : '12px')};
  font-weight: 400;
  line-height: 1.5;
  white-space: nowrap;
  background: ${({ $up }) =>
    $up ? 'var(--pcs-colors-positive10)' : 'color-mix(in srgb, var(--pcs-colors-failure) 14%, transparent)'};
  color: ${({ theme }) => theme.colors.text};
  & svg {
    color: ${({ $up }) => ($up ? 'var(--pcs-colors-positive60)' : 'var(--pcs-colors-failure)')};
  }
`

const PnlFlat = styled.span<{ $up: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textSubtle};
  letter-spacing: 0.12px;
  & svg {
    color: ${({ $up }) => ($up ? 'var(--pcs-colors-positive60)' : 'var(--pcs-colors-failure)')};
  }
`

const Overview = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  overflow: hidden;
  border-radius: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.cardSecondary};
  & > *:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  }
`

const OverviewTitle = styled.div`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`

const Comp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  gap: 8px;
  padding: 16px;
  overflow: hidden;
  background: transparent;
`

const Row = styled.div`
  position: relative;
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  background: transparent;
`

const RowInner = styled(Flex)`
  align-items: center;
  gap: 8px;
  align-self: stretch;
`

const RowIcon = styled.div`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const RowMeta = styled(Flex)`
  flex: 1 0 0;
  min-width: 0;
  flex-direction: column;
  line-height: 1.5;
`

const RowRight = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`

const RowAmountRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 7px;
`

const RowChev = styled.button`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 2px;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  border-top: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-right: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.inputSecondary};
  border-left: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  background: ${({ theme }) => theme.colors.input};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSubtle};
  flex-shrink: 0;
  &:hover {
    filter: brightness(0.98);
  }
  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`

const DetailHeader = styled(Flex)`
  align-items: center;
  gap: 8px;
  align-self: stretch;
`

const BackBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

const DetailTitle = styled.span`
  flex: 1 0 0;
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
`

const CompBar = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  height: 12px;
  overflow: hidden;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  background: ${({ theme }) => theme.colors.input};
`

// eslint-disable-next-line no-restricted-syntax -- brand SVG illustration
const CompSegSpot = styled.span`
  display: block;
  height: 12px;
  flex: 1 0 0;
  min-width: 1px;
  border-radius: 99px 0 0 99px;
  background: linear-gradient(180deg, #53DEE9 0%, #1FC7D4 100%);
`

// eslint-disable-next-line no-restricted-syntax -- brand SVG illustration
const CompSegPerp = styled.span`
  display: block;
  height: 12px;
  width: 83px;
  background: linear-gradient(180deg, #8051D6 0%, #492286 100%);
`

const CompLegend = styled(Flex)`
  align-items: center;
  gap: 16px;
`

const CompLegItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  line-height: 1.5;
`

const CompLegDot = styled.span<{ $kind: BucketKey }>`
  width: 12px;
  height: 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ $kind, theme }) => ($kind === 'spot' ? theme.colors.primary : theme.colors.secondary)};
`

const CompLegLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-weight: 600;
  letter-spacing: 0.12px;
  margin-right: -4px;
`

const CompLegPct = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  letter-spacing: 0.12px;
`

const BucketWrap = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.cardSecondary};
`

const BucketTopRow = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`

const BucketLeft = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`

// eslint-disable-next-line no-restricted-syntax -- TODO(design): missing dark/light counterpart
const BucketIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: #F3EEFF;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  flex-shrink: 0;
`

const BucketMeta = styled(Flex)`
  flex-direction: column;
  line-height: 1.5;
  min-width: 0;
`

const BucketLabel = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`

const BucketSub = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSubtle};
  letter-spacing: 0.12px;
`

const BucketRight = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`

const BucketAmountRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 7px;
`

const BucketAmount = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;
  white-space: nowrap;
`

const BucketCaret = styled.button<{ $expanded?: boolean }>`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 2px;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  border-top: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-right: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.inputSecondary};
  border-left: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  background: ${({ theme }) => theme.colors.input};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSubtle};
  flex-shrink: 0;
  &:hover {
    filter: brightness(0.98);
  }
  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`

const BucketCaretIcon = styled.span<{ $expanded?: boolean }>`
  display: flex;
  flex: 1 0 0;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease;
  transform: ${({ $expanded }) => ($expanded ? 'rotate(180deg)' : 'none')};
`

const TrackRow = styled(Flex)`
  align-items: center;
  gap: 8px;
  width: 100%;
`

const Track = styled.div`
  flex: 1;
  height: 12px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  overflow: hidden;
`

/* eslint-disable no-restricted-syntax -- brand SVG illustration */
const TrackFill = styled.div<{ $pct: number; $kind: BucketKey }>`
  height: 100%;
  border-radius: 99px;
  width: ${({ $pct }) => $pct}%;
  background: ${({ $kind, theme }) =>
    $kind === 'spot' ? 'linear-gradient(180deg, #53DEE9 0%, #1FC7D4 100%)' : theme.colors.secondary};
`
/* eslint-enable no-restricted-syntax */

const TrackPct = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSubtle};
  letter-spacing: 0.12px;
  line-height: 1.5;
  min-width: 30px;
  text-align: right;
`

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.colors.cardBorder};
`

const BucketDesc = styled.p`
  margin: 0;
  align-self: stretch;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.12px;
`

const HideSmall = styled.label`
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  align-self: flex-start;
  gap: 10px;
  width: fit-content;
  border-radius: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.cardSecondary};
  cursor: pointer;
`

const HideSmallInner = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const HideSmallLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`

const HideSmallInfo = styled.span`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSubtle};
  cursor: help;
`

const TkList = styled(Flex)`
  flex-direction: column;
  align-self: stretch;
`

const TkRow = styled(Flex)`
  gap: 8px;
  align-items: center;
  padding: 10px 8px;
  border-radius: 16px;
`

const TkIcon = styled.span`
  position: relative;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
`

/* eslint-disable no-restricted-syntax -- on colored bg, contrast guarantee */
const TokenCircleEl = styled.span<{ $color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid rgba(8, 6, 11, 0.1);
  box-sizing: border-box;
  background: ${({ $color }) => $color};
`
/* eslint-enable no-restricted-syntax */

// eslint-disable-next-line no-restricted-syntax -- TODO(design): missing dark/light counterpart
const TkNetwork = styled.span`
  position: absolute;
  right: -4px;
  bottom: -4px;
  width: 16px;
  height: 16px;
  border-radius: 5.333px;
  background: #1E1E1E;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

const TkMeta = styled(Flex)`
  flex: 1 0 0;
  min-width: 0;
  flex-direction: column;
`

const TkLine = styled(Flex)`
  gap: 4px;
  align-items: baseline;
`

const TkSymbol = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`

const TkName = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`

const TkAmount = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
`

const TkRight = styled(Flex)`
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`

const TkValue = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`

const PosDetail = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
`

const PosSide = styled.span<{ $side: 'long' | 'short' }>`
  color: ${({ $side }) =>
    $side === 'long' ? 'var(--pcs-colors-positive60)' : 'var(--pcs-colors-failure)'};
`

const PosSep = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
`

const PosLev = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
`

const PosPnl = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`

const DetailTop = styled(Flex)`
  flex-direction: column;
  align-self: stretch;
  gap: 8px;
`

const PerpStatsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  border-radius: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.cardSecondary};
  overflow: hidden;
`

const PerpStatsRow = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  align-self: stretch;
`

const PerpStatsDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.cardBorder};
  align-self: stretch;
`

const PerpStatsLabel = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
`

const PerpStatsRight = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

const PerpStatsValue = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  font-variant-numeric: tabular-nums;
`

const PerpStatsExpand = styled(Flex)`
  flex-direction: column;
  align-self: stretch;
  gap: 12px;
  padding: 0 16px 16px;
  ${HideSmall} {
    margin-top: 4px;
  }
`

const Actions = styled(Flex)`
  align-self: stretch;
  align-items: center;
  gap: 8px;
`

const ActionBtn = styled.button<{ $primary?: boolean }>`
  display: flex;
  padding: 11px 12px 13px 12px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  border: 0;
  border-bottom: 2px solid ${({ $primary }) => ($primary ? 'rgba(0, 0, 0, 0.20)' : 'rgba(0, 0, 0, 0.10)')};
  border-radius: 16px;
  background: ${({ $primary, theme }) => ($primary ? theme.colors.primary : theme.colors.input)};
  color: ${({ $primary, theme }) => ($primary ? theme.colors.invertedContrast : theme.colors.textSubtle)};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  cursor: pointer;
  &:hover {
    filter: brightness(0.98);
  }
  &:active {
    transform: translateY(1px);
    border-bottom-width: 0;
    padding-bottom: 15px;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

const Bridge = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary60};
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  align-self: center;
  &:hover {
    filter: brightness(1.15);
  }
`

/* ── Atoms ─────────────────────────────────────────────────── */

function PnLPill({ value, lg }: { value: number; lg?: boolean }) {
  const up = value >= 0
  return (
    <Pnl $up={up} $size={lg ? 'lg' : 'sm'}>
      {up ? <TriangleUp size={12} /> : <TriangleDown size={12} />}
      <span>{Math.abs(value).toFixed(2)}%</span>
    </Pnl>
  )
}

function TfToggle({
  value,
  onChange,
  options,
  muted,
}: {
  value: Timeframe
  onChange: (v: Timeframe) => void
  options: { value: Timeframe; label: string }[]
  muted?: boolean
}) {
  return (
    <TfRoot role="tablist" $muted={muted}>
      {options.map((o) => (
        <TfButton
          key={o.value}
          type="button"
          role="tab"
          aria-selected={value === o.value}
          $active={value === o.value}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </TfButton>
      ))}
    </TfRoot>
  )
}

function TokenCircle({ symbol, color }: { symbol: string; color: string }) {
  return <TokenCircleEl $color={color}>{symbol.slice(0, 1)}</TokenCircleEl>
}

type RenderTokenIcon = NonNullable<WalletPanelProps['renderTokenIcon']>

function PositionRow({ p, renderTokenIcon }: { p: PerpPosition; renderTokenIcon?: RenderTokenIcon }) {
  const up = p.pnlPct >= 0
  return (
    <TkRow>
      <TkIcon>
        {renderTokenIcon ? (
          renderTokenIcon({ symbol: p.symbol, color: p.color })
        ) : (
          <TokenCircle symbol={p.symbol} color={p.color} />
        )}
      </TkIcon>
      <TkMeta>
        <TkSymbol>{p.symbol}</TkSymbol>
        <PosDetail>
          <PosSide $side={p.side.toLowerCase() as 'long' | 'short'}>{p.side}</PosSide>
          <PosSep>•</PosSep>
          <PosLev>{p.leverage}</PosLev>
        </PosDetail>
      </TkMeta>
      <TkRight>
        <PosPnl>
          {p.pnlUsd >= 0 ? '+' : '-'}
          {fmtUsd(Math.abs(p.pnlUsd))}
        </PosPnl>
        <Pnl $up={up} $size="md">
          {up ? <TriangleUp size={12} /> : <TriangleDown size={12} />}
          <span>{Math.abs(p.pnlPct).toFixed(1)}%</span>
        </Pnl>
      </TkRight>
    </TkRow>
  )
}

function TokenRow({
  tk,
  renderTokenIcon,
  showPnl = true,
}: {
  tk: SpotToken
  renderTokenIcon?: RenderTokenIcon
  showPnl?: boolean
}) {
  const up = tk.pnl >= 0
  return (
    <TkRow>
      <TkIcon>
        {renderTokenIcon ? (
          renderTokenIcon({ symbol: tk.symbol, color: tk.color, network: tk.network })
        ) : (
          <>
            <TokenCircle symbol={tk.symbol} color={tk.color} />
            <TkNetwork>
              <BnbDiamond size={11} />
            </TkNetwork>
          </>
        )}
      </TkIcon>
      <TkMeta>
        <TkLine>
          <TkSymbol>{tk.symbol}</TkSymbol>
          <TkName>{tk.name}</TkName>
        </TkLine>
        <TkAmount>{tk.amount}</TkAmount>
      </TkMeta>
      <TkRight>
        <TkValue>{fmtUsdRound(tk.value)}</TkValue>
        {showPnl && (
          <Pnl $up={up} $size="md">
            {up ? <TriangleUp size={12} /> : <TriangleDown size={12} />}
            <span>{Math.abs(tk.pnl).toFixed(1)}%</span>
          </Pnl>
        )}
      </TkRight>
    </TkRow>
  )
}

const SPOT_LEGACY_ACTIONS = (
  fn: WalletPanelProps['onSpotAction'],
): ActionItem[] => [
  { key: 'send', label: 'Send', onClick: () => fn?.('send') },
  { key: 'receive', label: 'Receive', onClick: () => fn?.('receive') },
  { key: 'swap', label: 'Swap', primary: true, onClick: () => fn?.('swap') },
]

const PERP_LEGACY_ACTIONS = (
  fn: WalletPanelProps['onPerpAction'],
): ActionItem[] => [
  { key: 'deposit', label: 'Deposit', primary: true, onClick: () => fn?.('deposit') },
  { key: 'withdraw', label: 'Withdraw', onClick: () => fn?.('withdraw') },
]

function ActionsRow({ actions }: { actions: ActionItem[] }) {
  return (
    <Actions>
      {actions.map((a) => (
        <ActionBtn
          key={a.key}
          type="button"
          $primary={a.primary}
          disabled={a.disabled}
          onClick={a.onClick}
        >
          {a.label}
        </ActionBtn>
      ))}
    </Actions>
  )
}

function BucketSummaryRow({
  bucket,
  timeframe,
  onOpen,
  showPnl,
}: {
  bucket: Bucket
  timeframe: Timeframe
  onOpen?: () => void
  showPnl: boolean
}) {
  const state = bucket.state ?? 'data'
  const pnl = bucket.pnl?.[timeframe] ?? 0

  if (state === 'loading') {
    return (
      <Row>
        <RowInner>
          <RowIcon aria-hidden>
            {bucket.key === 'spot' ? <SpotWalletGlyph /> : <PerpsChartGlyph />}
          </RowIcon>
          <RowMeta>
            <BucketLabel>{bucket.label}</BucketLabel>
            <BucketSub>{bucket.sublabel}</BucketSub>
          </RowMeta>
          <RowRight>
            <RowAmountRow>
              <Skeleton $w="72px" $h="14px" />
            </RowAmountRow>
            <RowChev type="button" disabled aria-label={`Loading ${bucket.label}`}>
              <BucketCaretIcon>
                <ChevronRight />
              </BucketCaretIcon>
            </RowChev>
          </RowRight>
        </RowInner>
      </Row>
    )
  }

  const amount = state === 'data' ? bucket.amount ?? 0 : 0
  return (
    <Row>
      <RowInner>
        <RowIcon aria-hidden>
          {bucket.key === 'spot' ? <SpotWalletGlyph /> : <PerpsChartGlyph />}
        </RowIcon>
        <RowMeta>
          <BucketLabel>{bucket.label}</BucketLabel>
          <BucketSub>{bucket.sublabel}</BucketSub>
        </RowMeta>
        <RowRight>
          <RowAmountRow>
            <BucketAmount>{fmtUsd(amount)}</BucketAmount>
            {state === 'data' && showPnl && bucket.pnl && (
              <PnlFlat $up={pnl >= 0}>
                {pnl >= 0 ? <TriangleUp size={12} /> : <TriangleDown size={12} />}
                <span>{Math.abs(pnl).toFixed(2)}%</span>
              </PnlFlat>
            )}
          </RowAmountRow>
          <RowChev type="button" aria-label={`Open ${bucket.label}`} onClick={onOpen}>
            <BucketCaretIcon>
              <ChevronRight />
            </BucketCaretIcon>
          </RowChev>
        </RowRight>
      </RowInner>
    </Row>
  )
}

function BucketDetail({
  bucket,
  pct,
  timeframe,
  onTfChange,
  tfOptions,
  onBack,
  hideSmall,
  setHideSmall,
  hideSmallThreshold,
  onSpotAction,
  onPerpAction,
  onBridge,
  showPnl,
  showTimeframe,
  showBridge,
  labels,
  renderTokenIcon,
}: {
  bucket: Bucket
  pct: number
  timeframe: Timeframe
  onTfChange: (v: Timeframe) => void
  tfOptions: { value: Timeframe; label: string }[]
  onBack: () => void
  hideSmall: boolean
  setHideSmall: (v: boolean) => void
  hideSmallThreshold: number
  onSpotAction?: WalletPanelProps['onSpotAction']
  onPerpAction?: WalletPanelProps['onPerpAction']
  onBridge?: () => void
  showPnl: boolean
  showTimeframe: boolean
  showBridge: boolean
  labels: typeof DEFAULT_LABELS
  renderTokenIcon?: RenderTokenIcon
}) {
  const [expandedStat, setExpandedStat] = useState<'balance' | 'pnl' | null>(null)
  const state = bucket.state ?? 'data'
  const pnl = bucket.pnl?.[timeframe] ?? 0
  const amount = state === 'data' ? bucket.amount ?? 0 : 0
  const pnlDelta = amount * (pnl / 100)
  const tfSuffix = labels.pnlSuffix[timeframe]
  const tokens =
    bucket.tokens && hideSmall
      ? bucket.tokens.filter((t) => t.value >= hideSmallThreshold)
      : bucket.tokens
  const balanceTokens =
    bucket.balanceTokens && hideSmall
      ? bucket.balanceTokens.filter((t) => t.value >= hideSmallThreshold)
      : bucket.balanceTokens
  const positions =
    bucket.positions && hideSmall
      ? bucket.positions.filter((p) => Math.abs(p.pnlUsd) >= hideSmallThreshold)
      : bucket.positions
  const isSpot = bucket.key === 'spot'

  const actions: ActionItem[] = useMemo(() => {
    if (bucket.actions) return bucket.actions
    return isSpot ? SPOT_LEGACY_ACTIONS(onSpotAction) : PERP_LEGACY_ACTIONS(onPerpAction)
  }, [bucket.actions, isSpot, onSpotAction, onPerpAction])

  const perpStats = bucket.perpStats ?? {
    balance: 0,
    balancePnlPct: 0,
    unrealizedPnl: 0,
    unrealizedPnlPct: 0,
  }

  const isLoading = state === 'loading'
  const isEmpty = state === 'empty'

  // Hover tooltip on the "hide small balances" info circle. Uses the
  // shared useTooltip hook so it picks up the global StyledTooltipContent
  // styling (matches the leverage zone tags tooltip), with `oneLine` so
  // the bubble hugs the short copy on a single line.
  const { targetRef: hideSmallTipRef, tooltip: hideSmallTipNode } = useTooltip(
    'Hides tokens worth less than $0.01',
    { placement: 'top', oneLine: true },
  )

  return (
    <>
      <DetailHeader>
        <BackBtn type="button" onClick={onBack} aria-label="Back">
          <ArrowBackIcon width={20} height={20} />
        </BackBtn>
        <DetailTitle>{bucket.label}</DetailTitle>
        {showTimeframe && (
          <TfToggle
            value={timeframe}
            onChange={onTfChange}
            options={tfOptions}
            muted={isLoading || isEmpty}
          />
        )}
      </DetailHeader>

      <DetailTop>
        <Hero>
          <HeroAmountRow>
            {isLoading ? (
              <SkeletonBlock $w="160px" $h="32px" $br="8px" />
            ) : (
              <>
                <HeroAmount>
                  <HeroAmountInt>{fmtUsd(amount).split('.')[0]}</HeroAmountInt>
                  <HeroAmountDec>.{fmtUsd(amount).split('.')[1] ?? '00'}</HeroAmountDec>
                </HeroAmount>
                {showPnl && state === 'data' && bucket.pnl && <PnLPill value={pnl} lg />}
              </>
            )}
          </HeroAmountRow>
          {!isLoading && showPnl && state === 'data' && bucket.pnl && (
            <HeroSub>
              {isSpot ? (
                <>
                  <HeroSubDelta $up={pnl >= 0}>
                    {pnl >= 0 ? '+' : '-'}
                    {fmtUsd(Math.abs(pnlDelta)).replace('-', '')}
                  </HeroSubDelta>
                  <HeroSubRest>{` ${tfSuffix}`}</HeroSubRest>
                </>
              ) : (
                <HeroSubRest>{bucket.sublabel}</HeroSubRest>
              )}
            </HeroSub>
          )}
        </Hero>

        <TrackRow>
          <Track>
            <TrackFill $pct={state === 'data' ? pct : 0} $kind={bucket.key} />
          </Track>
          <TrackPct>{(state === 'data' ? pct : 0).toFixed(0)}%</TrackPct>
        </TrackRow>

        {bucket.description && <BucketDesc>{bucket.description}</BucketDesc>}
      </DetailTop>

      {isLoading && (
        <Flex flexDirection="column" alignSelf="stretch" gap="12px">
          <SkeletonBlock $h="48px" $br="16px" />
          <SkeletonBlock $h="48px" $br="16px" />
          <SkeletonBlock $h="48px" $br="12px" />
        </Flex>
      )}

      {isEmpty && (
        <EmptyState>
          {bucket.emptyContent ?? labels.bucketEmptyMessage({ label: bucket.label })}
        </EmptyState>
      )}

      {state === 'data' && isSpot && (
        <>
          <HideSmall>
            <HideSmallInner>
              <HideSmallLabel>{labels.hideSmallBalances}</HideSmallLabel>
              <HideSmallInfo
                ref={hideSmallTipRef}
                role="img"
                aria-label="Hide small balances explanation"
                onClick={(e) => e.preventDefault()}
              >
                <InfoCircle size={16} />
              </HideSmallInfo>
              {hideSmallTipNode}
              <Checkbox
                scale="sm"
                checked={hideSmall}
                onChange={(e) => setHideSmall(e.target.checked)}
              />
            </HideSmallInner>
          </HideSmall>
          <TkList>
            {tokens?.map((tk, i) => (
              <TokenRow key={tk.symbol + i} tk={tk} renderTokenIcon={renderTokenIcon} showPnl={showPnl} />
            ))}
          </TkList>
          <ActionsRow actions={actions} />
        </>
      )}

      {state === 'data' && !isSpot && (
        <>
          <PerpStatsBox>
            <PerpStatsRow>
              <PerpStatsLabel>Balance</PerpStatsLabel>
              <PerpStatsRight>
                <PerpStatsValue>{fmtUsd(perpStats.balance)}</PerpStatsValue>
                {showPnl && (
                  <PnlFlat $up={perpStats.balancePnlPct >= 0}>
                    {perpStats.balancePnlPct >= 0 ? <TriangleUp size={12} /> : <TriangleDown size={12} />}
                    <span>{Math.abs(perpStats.balancePnlPct).toFixed(2)}%</span>
                  </PnlFlat>
                )}
                <BucketCaret
                  type="button"
                  aria-label={expandedStat === 'balance' ? 'Collapse Balance' : 'Expand Balance'}
                  aria-expanded={expandedStat === 'balance'}
                  onClick={() => setExpandedStat((e) => (e === 'balance' ? null : 'balance'))}
                >
                  <BucketCaretIcon $expanded={expandedStat === 'balance'}>
                    <ArrowDropDownIcon width={20} height={20} />
                  </BucketCaretIcon>
                </BucketCaret>
              </PerpStatsRight>
            </PerpStatsRow>
            {expandedStat === 'balance' && (
              <PerpStatsExpand>
                <PerpStatsDivider />
                <TkList>
                  {(balanceTokens || []).map((tk, i) => (
                    <TokenRow key={tk.symbol + i} tk={tk} renderTokenIcon={renderTokenIcon} showPnl={showPnl} />
                  ))}
                </TkList>
              </PerpStatsExpand>
            )}
            <PerpStatsDivider />
            <PerpStatsRow>
              <PerpStatsLabel>Unrealized PnL</PerpStatsLabel>
              <PerpStatsRight>
                <PerpStatsValue>{perpStats.unrealizedPnl.toFixed(2)}</PerpStatsValue>
                {showPnl && (
                  <PnlFlat $up={perpStats.unrealizedPnlPct >= 0}>
                    {perpStats.unrealizedPnlPct >= 0 ? <TriangleUp size={12} /> : <TriangleDown size={12} />}
                    <span>{Math.abs(perpStats.unrealizedPnlPct).toFixed(2)}%</span>
                  </PnlFlat>
                )}
                <BucketCaret
                  type="button"
                  aria-label={expandedStat === 'pnl' ? 'Collapse Unrealized PnL' : 'Expand Unrealized PnL'}
                  aria-expanded={expandedStat === 'pnl'}
                  onClick={() => setExpandedStat((e) => (e === 'pnl' ? null : 'pnl'))}
                >
                  <BucketCaretIcon $expanded={expandedStat === 'pnl'}>
                    <ArrowDropDownIcon width={20} height={20} />
                  </BucketCaretIcon>
                </BucketCaret>
              </PerpStatsRight>
            </PerpStatsRow>
            {expandedStat === 'pnl' && (
              <PerpStatsExpand>
                <PerpStatsDivider />
                <TkList>
                  {(positions || []).map((p, i) => (
                    <PositionRow key={p.symbol + i} p={p} renderTokenIcon={renderTokenIcon} />
                  ))}
                </TkList>
              </PerpStatsExpand>
            )}
          </PerpStatsBox>
          <ActionsRow actions={actions} />
        </>
      )}

      {showBridge && (
        <Bridge type="button" onClick={onBridge}>
          {labels.bridgeCrypto}
          <ArrowForwardIcon width={24} height={24} />
        </Bridge>
      )}
    </>
  )
}

/* ── Default chips ─────────────────────────────────────────── */

function DefaultWalletChip() {
  return (
    <Chip type="button" aria-label="Wallet — all chains">
      <ChipStack>
        <ChipBadge $variant="light">
          <ChipGrid>
            <ChainDot $color="#F0B90B" />
            <ChainDot $color="#627EEA" />
            <ChainDot $color="#46557A" />
            <ChainDot $color="#0052FF" />
          </ChipGrid>
        </ChipBadge>
        <ChipBadge $variant="dark">
          <BnbDiamond />
        </ChipBadge>
      </ChipStack>
      <ChevronDownIcon width={20} height={20} />
    </Chip>
  )
}

function DefaultChainChip() {
  return (
    <Chip type="button" aria-label="Select chain">
      <ChipBadge $variant="dark">
        <BnbDiamond />
      </ChipBadge>
      <ChevronDownIcon width={20} height={20} />
    </Chip>
  )
}

/* ── Main component ────────────────────────────────────────── */

export function WalletPanel({
  data = DEFAULT_DATA,
  variant = 'data',
  emptyContent,
  initialTab = 'assets',
  initialTimeframe = '24h',
  initialExpanded = null,
  tab: tabProp,
  onTabChange,
  timeframe: timeframeProp,
  onTimeframeChange,
  expanded: expandedProp,
  onExpandedChange,
  hideSmall: hideSmallProp,
  onHideSmallChange,
  hideSmallThreshold = 1,
  walletChip,
  chainChip,
  hideHeader = false,
  embedded = false,
  visibleTabs = ['assets', 'tx', 'gift'],
  tabContent,
  heroTitle,
  showTimeframe = true,
  showPnl = true,
  showBridge = false,
  renderTokenIcon,
  labels: labelsProp,
  onBridge,
  onSpotAction,
  onPerpAction,
}: WalletPanelProps) {
  const [tab, setTab] = useControlled<TabKey>(tabProp, onTabChange, initialTab)
  const [timeframe, setTimeframe] = useControlled<Timeframe>(timeframeProp, onTimeframeChange, initialTimeframe)
  const [view, setView] = useControlled<'spot' | 'perp' | null>(
    expandedProp,
    onExpandedChange,
    initialExpanded,
  )
  const [hideSmall, setHideSmall] = useControlled<boolean>(hideSmallProp, onHideSmallChange, false)

  const labels = useMemo(
    () => ({
      ...DEFAULT_LABELS,
      ...labelsProp,
      tabs: { ...DEFAULT_LABELS.tabs, ...labelsProp?.tabs },
      pnlSuffix: { ...DEFAULT_LABELS.pnlSuffix, ...labelsProp?.pnlSuffix },
      bucketEmptyMessage: labelsProp?.bucketEmptyMessage ?? DEFAULT_LABELS.bucketEmptyMessage,
    }),
    [labelsProp],
  )
  const resolvedHeroTitle = heroTitle ?? labelsProp?.heroTitle ?? 'My Wallet'

  const totals = useMemo(() => {
    const spotState = data.buckets.spot.state ?? 'data'
    const perpState = data.buckets.perp.state ?? 'data'
    const spot = spotState === 'data' ? data.buckets.spot.amount ?? 0 : 0
    const perp = perpState === 'data' ? data.buckets.perp.amount ?? 0 : 0
    const total = spot + perp
    const safe = total === 0 ? 1 : total
    return {
      spot,
      perp,
      total,
      spotPct: (spot / safe) * 100,
      perpPct: (perp / safe) * 100,
    }
  }, [data])

  const pnl = useMemo(() => {
    if (totals.total === 0) return 0
    const s = data.buckets.spot.pnl?.[timeframe] ?? 0
    const p = data.buckets.perp.pnl?.[timeframe] ?? 0
    return (s * totals.spot + p * totals.perp) / totals.total
  }, [data, timeframe, totals])

  const pnlDelta = totals.total * (pnl / 100)
  const tfSuffix = labels.pnlSuffix[timeframe]
  const total = splitDecimals(totals.total)

  const tfOptions: { value: Timeframe; label: string }[] = [
    { value: '24h', label: '24H' },
    { value: '7d', label: '7D' },
    { value: 'all', label: 'All' },
  ]
  const tabsAll: { value: TabKey; label: string }[] = [
    { value: 'assets', label: labels.tabs.assets },
    { value: 'tx', label: labels.tabs.transactions },
    { value: 'gift', label: labels.tabs.gift },
  ]
  const tabs = tabsAll.filter((t) => visibleTabs.includes(t.value))

  // Detail view for an expanded bucket — only when in 'data' variant + assets tab + view set.
  if (variant === 'data' && view !== null && tab === 'assets' && !tabContent?.assets) {
    const detailBucket = view === 'spot' ? data.buckets.spot : data.buckets.perp
    const detailPct = view === 'spot' ? totals.spotPct : totals.perpPct
    return (
      <Root aria-label="Wallet" $embedded={embedded}>
        <BucketDetail
          bucket={detailBucket}
          pct={detailPct}
          timeframe={timeframe}
          onTfChange={setTimeframe}
          tfOptions={tfOptions}
          onBack={() => setView(null)}
          hideSmall={hideSmall}
          setHideSmall={setHideSmall}
          hideSmallThreshold={hideSmallThreshold}
          onSpotAction={onSpotAction}
          onPerpAction={onPerpAction}
          onBridge={onBridge}
          showPnl={showPnl}
          showTimeframe={showTimeframe}
          showBridge={showBridge}
          labels={labels}
          renderTokenIcon={renderTokenIcon}
        />
      </Root>
    )
  }

  const renderHeader = () => {
    if (hideHeader) return null
    return (
      <Header>
        {walletChip ?? <DefaultWalletChip />}
        {chainChip ?? <DefaultChainChip />}
      </Header>
    )
  }

  const renderTabs = () => {
    if (tabs.length === 0) return null
    return (
      <Tabs role="tablist">
        {tabs.map((tt) => (
          <TabButton
            key={tt.value}
            type="button"
            role="tab"
            aria-selected={tab === tt.value}
            $active={tab === tt.value}
            $muted={variant === 'loading'}
            onClick={() => setTab(tt.value)}
          >
            {tt.label}
          </TabButton>
        ))}
      </Tabs>
    )
  }

  const renderHero = (heroAmountText: { whole: string; dec: string }, isLoading: boolean) => (
    <Hero>
      <HeroTop>
        <HeroTitle>{resolvedHeroTitle}</HeroTitle>
        {showTimeframe && (
          <TfToggle
            value={timeframe}
            onChange={setTimeframe}
            options={tfOptions}
            muted={isLoading}
          />
        )}
      </HeroTop>
      <HeroAmountRow>
        {isLoading ? (
          <SkeletonBlock $w="180px" $h="32px" $br="8px" />
        ) : (
          <>
            <HeroAmount>
              <HeroAmountInt>{heroAmountText.whole}</HeroAmountInt>
              <HeroAmountDec>{heroAmountText.dec}</HeroAmountDec>
            </HeroAmount>
            {showPnl && variant === 'data' && <PnLPill value={pnl} lg />}
          </>
        )}
      </HeroAmountRow>
      {!isLoading && showPnl && variant === 'data' && (
        <HeroSub>
          <HeroSubDelta $up={pnl >= 0}>
            {pnl >= 0 ? '+' : '-'}
            {fmtUsd(Math.abs(pnlDelta)).replace('-', '')}
          </HeroSubDelta>
          <HeroSubRest>{` ${tfSuffix}`}</HeroSubRest>
        </HeroSub>
      )}
    </Hero>
  )

  // Loading variant
  if (variant === 'loading') {
    const placeholder = splitDecimals(0)
    return (
      <Root aria-label="Wallet" aria-busy="true" $embedded={embedded}>
        {renderHeader()}
        {renderTabs()}
        {renderHero(placeholder, true)}
        <Overview>
          <Comp>
            <OverviewTitle>{labels.overview}</OverviewTitle>
            <SkeletonBlock $h="12px" $br="999px" />
            <Flex gap="16px">
              <Skeleton $w="60px" $h="14px" />
              <Skeleton $w="60px" $h="14px" />
            </Flex>
          </Comp>
          <Row>
            <RowInner>
              <RowIcon aria-hidden>
                <SpotWalletGlyph />
              </RowIcon>
              <RowMeta>
                <BucketLabel>{data.buckets.spot.label}</BucketLabel>
                <BucketSub>{data.buckets.spot.sublabel}</BucketSub>
              </RowMeta>
              <RowRight>
                <Skeleton $w="72px" $h="14px" />
              </RowRight>
            </RowInner>
          </Row>
          <Row>
            <RowInner>
              <RowIcon aria-hidden>
                <PerpsChartGlyph />
              </RowIcon>
              <RowMeta>
                <BucketLabel>{data.buckets.perp.label}</BucketLabel>
                <BucketSub>{data.buckets.perp.sublabel}</BucketSub>
              </RowMeta>
              <RowRight>
                <Skeleton $w="72px" $h="14px" />
              </RowRight>
            </RowInner>
          </Row>
        </Overview>
        <Actions>
          <SkeletonBlock $h="44px" $br="12px" />
          <SkeletonBlock $h="44px" $br="12px" />
          <SkeletonBlock $h="44px" $br="12px" />
        </Actions>
        {showBridge && (
          <Bridge type="button" disabled aria-disabled="true">
            {labels.bridgeCrypto}
            <ArrowForwardIcon width={24} height={24} />
          </Bridge>
        )}
      </Root>
    )
  }

  // Empty variant
  if (variant === 'empty') {
    const placeholder = splitDecimals(0)
    return (
      <Root aria-label="Wallet" $embedded={embedded}>
        {renderHeader()}
        {renderTabs()}
        {renderHero(placeholder, false)}
        <EmptyState>
          {emptyContent ?? labels.emptyMessage}
        </EmptyState>
        {showBridge && (
          <Bridge type="button" onClick={onBridge}>
            {labels.bridgeCrypto}
            <ArrowForwardIcon width={24} height={24} />
          </Bridge>
        )}
      </Root>
    )
  }

  // Data variant — non-assets tab with custom content
  const slotted = tab !== 'assets' ? tabContent?.[tab === 'tx' ? 'transactions' : 'gift'] : tabContent?.assets

  return (
    <Root aria-label="Wallet" $embedded={embedded}>
      {renderHeader()}
      {renderTabs()}
      {renderHero(total, false)}

      {slotted ? (
        slotted
      ) : (
        <Overview>
          <Comp>
            <OverviewTitle>{labels.overview}</OverviewTitle>
            <CompBar>
              <CompSegSpot />
              <CompSegPerp />
            </CompBar>
            <CompLegend>
              <CompLegItem>
                <CompLegDot $kind="spot" />
                <CompLegLabel>{labels.spotLabel}</CompLegLabel>
                <CompLegPct>{totals.spotPct.toFixed(0)}%</CompLegPct>
              </CompLegItem>
              <CompLegItem>
                <CompLegDot $kind="perp" />
                <CompLegLabel>{labels.perpLabel}</CompLegLabel>
                <CompLegPct>{totals.perpPct.toFixed(0)}%</CompLegPct>
              </CompLegItem>
            </CompLegend>
          </Comp>
          <BucketSummaryRow
            bucket={data.buckets.spot}
            timeframe={timeframe}
            onOpen={() => setView('spot')}
            showPnl={showPnl}
          />
          <BucketSummaryRow
            bucket={data.buckets.perp}
            timeframe={timeframe}
            onOpen={() => setView('perp')}
            showPnl={showPnl}
          />
        </Overview>
      )}

      {showBridge && (
        <Bridge type="button" onClick={onBridge}>
          {labels.bridgeCrypto}
          <ArrowForwardIcon width={24} height={24} />
        </Bridge>
      )}
    </Root>
  )
}
