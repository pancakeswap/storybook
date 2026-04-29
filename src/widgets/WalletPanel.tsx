import { useMemo, useState } from 'react'
import './WalletPanel.css'
import { Checkbox } from '../primitives/Checkbox'

/* ── Types ─────────────────────────────────────────────────── */

type Timeframe = '24h' | '7d' | 'all'
type TabKey = 'assets' | 'tx' | 'gift'
type BucketKey = 'spot' | 'perp'

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

interface Bucket {
  key: BucketKey
  label: string
  sublabel: string
  amount: number
  pnl: Record<Timeframe, number>
  description?: string
  tokens?: SpotToken[]
  positions?: PerpPosition[]
}

export interface WalletData {
  buckets: {
    spot: Bucket
    perp: Bucket
  }
}

export interface WalletPanelProps {
  data?: WalletData
  initialTab?: TabKey
  initialTimeframe?: Timeframe
  initialExpanded?: 'spot' | 'perp' | null
  onBridge?: () => void
  onSpotAction?: (action: 'send' | 'receive' | 'swap') => void
  onPerpAction?: (action: 'deposit' | 'withdraw' | 'manage') => void
}

/* ── Mock data ─────────────────────────────────────────────── */

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
      description: 'Total value of your active positions, including unrealized PnL. Updates in real time.',
      positions: [
        { symbol: 'ETH', side: 'Long',  leverage: '500X', pnlUsd: 209.87, pnlPct: 0.5, color: '#627EEA' },
        { symbol: 'BTC', side: 'Short', leverage: '250X', pnlUsd: 425.26, pnlPct: 0.5, color: '#F7931A' },
        { symbol: 'BNB', side: 'Long',  leverage: '500X', pnlUsd: 338.11, pnlPct: 0.5, color: '#F0B90B' },
      ],
    },
  },
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

/* ── Inline icons ──────────────────────────────────────────── */

const ChevronDown = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
  </svg>
)

const ArrowDropDown = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M7.25833 9.75832L9.41666 11.9167C9.74166 12.2417 10.2667 12.2417 10.5917 11.9167L12.75 9.75832C13.275 9.23332 12.9 8.33332 12.1583 8.33332H7.84166C7.09999 8.33332 6.73333 9.23332 7.25833 9.75832Z"
      fill="currentColor"
    />
  </svg>
)

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

const ArrowRight = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4 11h12.17l-5.59-5.59L12 4l8 8-8 8-1.42-1.41L16.17 13H4v-2z" />
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
      fill="#F0B90B"
      d="M12 2 7.4 6.6 9 8.2 12 5.2 15 8.2l1.6-1.6L12 2zm-7 7L3.4 10.6 5 12.2 6.6 10.6 5 9zm14 0-1.6 1.6L19 12.2l1.6-1.6L19 9zM7.4 13.4 5.8 15 12 21.2 18.2 15l-1.6-1.6L12 18l-4.6-4.6zm4.6-2L10.4 13 12 14.6 13.6 13 12 11.4z"
    />
  </svg>
)

/* ── Atoms ─────────────────────────────────────────────────── */

function PnLPill({ value, lg }: { value: number; lg?: boolean }) {
  const up = value >= 0
  return (
    <span className={`wp-pnl ${up ? 'wp-pnl--up' : 'wp-pnl--down'}${lg ? ' wp-pnl--lg' : ''}`}>
      {up ? <TriangleUp size={12} /> : <TriangleDown size={12} />}
      <span>{Math.abs(value).toFixed(2)}%</span>
    </span>
  )
}

function TfToggle({
  value,
  onChange,
  options,
}: {
  value: Timeframe
  onChange: (v: Timeframe) => void
  options: { value: Timeframe; label: string }[]
}) {
  return (
    <div className="wp-tf" role="tablist">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="tab"
          aria-selected={value === o.value}
          className={`wp-tf-btn${value === o.value ? ' wp-tf-btn--active' : ''}`}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

function TokenCircle({ symbol, color }: { symbol: string; color: string }) {
  return (
    <span className="wp-token-circle" style={{ background: color }}>
      {symbol.slice(0, 1)}
    </span>
  )
}

function PositionRow({ p }: { p: PerpPosition }) {
  const up = p.pnlPct >= 0
  return (
    <div className="wp-tk-row">
      <span className="wp-tk-icon">
        <TokenCircle symbol={p.symbol} color={p.color} />
      </span>
      <div className="wp-tk-meta">
        <div className="wp-tk-symbol">{p.symbol}</div>
        <div className="wp-pos-detail">
          <span className={`wp-pos-side wp-pos-side--${p.side.toLowerCase()}`}>{p.side}</span>
          <span className="wp-pos-sep">•</span>
          <span className="wp-pos-lev">{p.leverage}</span>
        </div>
      </div>
      <div className="wp-tk-right">
        <span className="wp-pos-pnl">
          {p.pnlUsd >= 0 ? '+' : '-'}
          {fmtUsd(Math.abs(p.pnlUsd))}
        </span>
        <span className={`wp-pnl wp-pnl--md ${up ? 'wp-pnl--up' : 'wp-pnl--down'}`}>
          {up ? <TriangleUp size={12} /> : <TriangleDown size={12} />}
          <span>{Math.abs(p.pnlPct).toFixed(1)}%</span>
        </span>
      </div>
    </div>
  )
}

function TokenRow({ tk }: { tk: SpotToken }) {
  const up = tk.pnl >= 0
  return (
    <div className="wp-tk-row">
      <span className="wp-tk-icon">
        <TokenCircle symbol={tk.symbol} color={tk.color} />
        <span className="wp-tk-network">
          <BnbDiamond size={11} />
        </span>
      </span>
      <div className="wp-tk-meta">
        <div className="wp-tk-line">
          <span className="wp-tk-symbol">{tk.symbol}</span>
          <span className="wp-tk-name">{tk.name}</span>
        </div>
        <div className="wp-tk-amount">{tk.amount}</div>
      </div>
      <div className="wp-tk-right">
        <span className="wp-tk-value">{fmtUsdRound(tk.value)}</span>
        <span className={`wp-pnl wp-pnl--md ${up ? 'wp-pnl--up' : 'wp-pnl--down'}`}>
          {up ? <TriangleUp size={12} /> : <TriangleDown size={12} />}
          <span>{Math.abs(tk.pnl).toFixed(1)}%</span>
        </span>
      </div>
    </div>
  )
}

function BucketCard({
  bucket,
  pct,
  timeframe,
  expandable,
  expanded,
  onToggle,
  hideSmall,
  setHideSmall,
  onSpotAction,
  onPerpAction,
}: {
  bucket: Bucket
  pct: number
  timeframe: Timeframe
  expandable?: boolean
  expanded?: boolean
  onToggle?: () => void
  hideSmall?: boolean
  setHideSmall?: (v: boolean) => void
  onSpotAction?: WalletPanelProps['onSpotAction']
  onPerpAction?: WalletPanelProps['onPerpAction']
}) {
  const pnl = bucket.pnl[timeframe]
  const tokens =
    bucket.tokens && hideSmall ? bucket.tokens.filter((t) => t.value >= 100) : bucket.tokens
  const positions =
    bucket.positions && hideSmall
      ? bucket.positions.filter((p) => Math.abs(p.pnlUsd) >= 100)
      : bucket.positions

  return (
    <div className={`wp-bucket${expanded ? ' wp-bucket--expanded' : ''}`}>
      <div className="wp-bucket-row">
        <div className="wp-bucket-left">
          <div className="wp-bucket-icon" aria-hidden />
          <div className="wp-bucket-meta">
            <div className="wp-bucket-label">{bucket.label}</div>
            <div className="wp-bucket-sub">{bucket.sublabel}</div>
          </div>
        </div>
        <div className="wp-bucket-right">
          <div className="wp-bucket-amount-row">
            <span className="wp-bucket-amount">{fmtUsd(bucket.amount)}</span>
            <span className={`wp-pnl-flat ${pnl >= 0 ? 'wp-pnl-flat--up' : 'wp-pnl-flat--down'}`}>
              {pnl >= 0 ? <TriangleUp size={12} /> : <TriangleDown size={12} />}
              <span>{Math.abs(pnl).toFixed(2)}%</span>
            </span>
          </div>
          <button
            type="button"
            className={`wp-bucket-caret${expanded ? ' wp-bucket-caret--up' : ''}`}
            aria-label={expanded ? 'Collapse' : 'Expand'}
            aria-expanded={expanded}
            disabled={!expandable}
            onClick={onToggle}
          >
            <span className="wp-bucket-caret-icon">
              <ArrowDropDown />
            </span>
          </button>
        </div>
      </div>
      <div className="wp-track-row">
        <div className="wp-track">
          <div
            className={`wp-track-fill wp-track-fill--${bucket.key}`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="wp-track-pct">{pct.toFixed(0)}%</span>
      </div>

      {expanded && (bucket.tokens || bucket.positions) && (
        <>
          <div className="wp-divider" />
          {bucket.description && <p className="wp-bucket-desc">{bucket.description}</p>}
          <label className="wp-hide-small">
            <div className="wp-hide-small-inner">
              <span className="wp-hide-small-label">Hide small balances</span>
              <span className="wp-hide-small-info" aria-hidden>
                <InfoCircle size={16} />
              </span>
              <Checkbox
                scale="sm"
                checked={!!hideSmall}
                onChange={(e) => setHideSmall?.(e.target.checked)}
              />
            </div>
          </label>
          <div className="wp-tk-list">
            {bucket.key === 'spot' && tokens?.map((tk, i) => (
              <TokenRow key={tk.symbol + i} tk={tk} />
            ))}
            {bucket.key === 'perp' && positions?.map((p, i) => (
              <PositionRow key={p.symbol + i} p={p} />
            ))}
          </div>
          {bucket.key === 'spot' && (
            <div className="wp-actions">
              <button type="button" className="wp-action-btn" onClick={() => onSpotAction?.('send')}>
                Send
              </button>
              <button type="button" className="wp-action-btn" onClick={() => onSpotAction?.('receive')}>
                Receive
              </button>
              <button
                type="button"
                className="wp-action-btn wp-action-btn--primary"
                onClick={() => onSpotAction?.('swap')}
              >
                Swap
              </button>
            </div>
          )}
          {bucket.key === 'perp' && (
            <div className="wp-actions">
              <button type="button" className="wp-action-btn" onClick={() => onPerpAction?.('deposit')}>
                Deposit
              </button>
              <button type="button" className="wp-action-btn" onClick={() => onPerpAction?.('withdraw')}>
                Withdraw
              </button>
              <button
                type="button"
                className="wp-action-btn wp-action-btn--primary"
                onClick={() => onPerpAction?.('manage')}
              >
                Manage
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

/* ── Main component ────────────────────────────────────────── */

export function WalletPanel({
  data = DEFAULT_DATA,
  initialTab = 'assets',
  initialTimeframe = '24h',
  initialExpanded = null,
  onBridge,
  onSpotAction,
  onPerpAction,
}: WalletPanelProps) {
  const [tab, setTab] = useState<TabKey>(initialTab)
  const [timeframe, setTimeframe] = useState<Timeframe>(initialTimeframe)
  const [expanded, setExpanded] = useState<'spot' | 'perp' | null>(initialExpanded)
  const [hideSmall, setHideSmall] = useState(false)

  const totals = useMemo(() => {
    const spot = data.buckets.spot.amount
    const perp = data.buckets.perp.amount
    const total = spot + perp
    return { spot, perp, total, spotPct: (spot / total) * 100, perpPct: (perp / total) * 100 }
  }, [data])

  const pnl = useMemo(() => {
    const s = data.buckets.spot.pnl[timeframe]
    const p = data.buckets.perp.pnl[timeframe]
    return (s * totals.spot + p * totals.perp) / totals.total
  }, [data, timeframe, totals])

  const pnlDelta = totals.total * (pnl / 100)
  const tfLabel = timeframe === '24h' ? '24 hours' : timeframe === '7d' ? '7 days' : 'lifetime'
  const total = splitDecimals(totals.total)

  const tfOptions: { value: Timeframe; label: string }[] = [
    { value: '24h', label: '24H' },
    { value: '7d', label: '7D' },
    { value: 'all', label: 'All' },
  ]
  const tabs: { value: TabKey; label: string }[] = [
    { value: 'assets', label: 'Assets' },
    { value: 'tx', label: 'Transactions' },
    { value: 'gift', label: 'Gift' },
  ]

  return (
    <section className="wp-root" aria-label="Wallet">
      {/* Header chips */}
      <div className="wp-header">
        <button type="button" className="wp-chip" aria-label="Wallet — all chains">
          <span className="wp-chip-stack">
            <span className="wp-chip-badge wp-chip-badge--light">
              <span className="wp-chip-grid">
                <span style={{ background: '#F0B90B' }} />
                <span style={{ background: '#627EEA' }} />
                <span style={{ background: '#46557A' }} />
                <span style={{ background: '#0052FF' }} />
              </span>
            </span>
            <span className="wp-chip-badge wp-chip-badge--dark">
              <BnbDiamond />
            </span>
          </span>
          <ChevronDown size={20} />
        </button>
        <button type="button" className="wp-chip" aria-label="Select chain">
          <span className="wp-chip-badge wp-chip-badge--dark">
            <BnbDiamond />
          </span>
          <ChevronDown size={20} />
        </button>
      </div>

      {/* Tabs */}
      <div className="wp-tabs" role="tablist">
        {tabs.map((tt) => (
          <button
            key={tt.value}
            type="button"
            role="tab"
            aria-selected={tab === tt.value}
            className={`wp-tab${tab === tt.value ? ' wp-tab--active' : ''}`}
            onClick={() => setTab(tt.value)}
          >
            {tt.label}
          </button>
        ))}
      </div>

      {/* Hero */}
      <div className="wp-hero">
        <div className="wp-hero-top">
          <span className="wp-hero-title">My Wallet</span>
          <TfToggle value={timeframe} onChange={setTimeframe} options={tfOptions} />
        </div>
        <div className="wp-hero-amount-row">
          <span className="wp-hero-amount">
            <span className="wp-hero-amount-int">{total.whole}</span>
            <span className="wp-hero-amount-dec">{total.dec}</span>
          </span>
          <PnLPill value={pnl} lg />
        </div>
        <div className="wp-hero-sub">
          <span className={pnl >= 0 ? 'wp-hero-sub-up' : 'wp-hero-sub-down'}>
            {pnl >= 0 ? '+' : '-'}
            {fmtUsd(Math.abs(pnlDelta)).replace('-', '')}
          </span>
          <span className="wp-hero-sub-rest">{` over the past ${tfLabel}`}</span>
        </div>
      </div>

      {/* Composition */}
      <div className="wp-comp">
        <div className="wp-comp-bar">
          <span className="wp-comp-seg wp-comp-seg--spot" />
          <span className="wp-comp-seg wp-comp-seg--perp" />
        </div>
        <div className="wp-comp-legend">
          <span className="wp-comp-leg-item">
            <span className="wp-comp-leg-dot wp-comp-leg-dot--spot" />
            <span className="wp-comp-leg-label">Spot</span>
            <span className="wp-comp-leg-pct">{totals.spotPct.toFixed(0)}%</span>
          </span>
          <span className="wp-comp-leg-item">
            <span className="wp-comp-leg-dot wp-comp-leg-dot--perp" />
            <span className="wp-comp-leg-label">Perp</span>
            <span className="wp-comp-leg-pct">{totals.perpPct.toFixed(0)}%</span>
          </span>
        </div>
      </div>

      {/* Buckets */}
      <BucketCard
        bucket={data.buckets.spot}
        pct={totals.spotPct}
        timeframe={timeframe}
        expandable
        expanded={expanded === 'spot'}
        onToggle={() => setExpanded((e) => (e === 'spot' ? null : 'spot'))}
        hideSmall={hideSmall}
        setHideSmall={setHideSmall}
        onSpotAction={onSpotAction}
      />
      <BucketCard
        bucket={data.buckets.perp}
        pct={totals.perpPct}
        timeframe={timeframe}
        expandable
        expanded={expanded === 'perp'}
        onToggle={() => setExpanded((e) => (e === 'perp' ? null : 'perp'))}
        hideSmall={hideSmall}
        setHideSmall={setHideSmall}
        onPerpAction={onPerpAction}
      />

      {/* Bridge */}
      <button type="button" className="wp-bridge" onClick={onBridge}>
        Bridge Crypto
        <ArrowRight size={24} />
      </button>
    </section>
  )
}
