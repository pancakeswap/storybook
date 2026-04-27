import { useMemo, useState } from 'react'
import './WalletPanel.css'
import { Button } from '../ui/components/Button'
import { Checkbox } from '../ui/components/Checkbox'

/* ── Types ─────────────────────────────────────────────────── */

type Timeframe = '24h' | '7d' | 'all'
type TabKey = 'assets' | 'tx' | 'gift'

interface SpotToken {
  symbol: string
  name: string
  amount: string
  value: number
  pnl: number
  chain?: 'ETH' | 'BNB'
}

interface PerpPosition {
  pair: string
  side: 'Long' | 'Short'
  size: string
  leverage: string
  entry: number
  mark: number
  unrealized: number
  pnl: number
}

interface LpPosition {
  a: string
  b: string
  value: number
  apr: number
  fees24h: number
  range: 'In range' | 'Out of range'
}

interface SpotBucket {
  key: 'spot'
  label: string
  sublabel: string
  description: string
  pnl: Record<Timeframe, number>
  tokens: SpotToken[]
}

interface PerpBucket {
  key: 'perp'
  label: string
  sublabel: string
  description: string
  pnl: Record<Timeframe, number>
  margin: { available: number; used: number; total: number }
  positions: PerpPosition[]
}

interface FarmingBucket {
  key: 'farming'
  label: string
  sublabel: string
  description: string
  pnl: Record<Timeframe, number>
  pendingCake: number
  pendingCakeUsd: number
  positions: LpPosition[]
}

export type Bucket = SpotBucket | PerpBucket | FarmingBucket

export interface WalletData {
  address: string
  buckets: {
    spot: SpotBucket
    perp: PerpBucket
    farming: FarmingBucket
  }
}

export interface WalletPanelProps {
  data?: WalletData
  initialTab?: TabKey
  initialTimeframe?: Timeframe
  initialExpanded?: 'spot' | 'perp' | 'farming' | null
  onBridge?: () => void
  onSpotAction?: (action: 'send' | 'receive' | 'swap') => void
  onPerpAction?: (action: 'withdraw' | 'trade') => void
  onFarmAction?: (action: 'manage' | 'add' | 'claim') => void
}

/* ── Mock data ─────────────────────────────────────────────── */

const DEFAULT_DATA: WalletData = {
  address: '0x7A23…9F1C',
  buckets: {
    spot: {
      key: 'spot',
      label: 'Spot Balance',
      sublabel: 'In your wallet',
      description: 'Tokens held in your connected wallet (e.g. MetaMask). Available to swap, send, or deposit.',
      pnl: { '24h': 1.72, '7d': 4.31, 'all': 12.84 },
      tokens: [
        { symbol: 'ETH',  name: 'Ethereum',   amount: '1.09',     value: 1716.02, pnl: 0.5, chain: 'ETH' },
        { symbol: 'BNB',  name: 'BNB Chain',  amount: '1.00',     value:  651.13, pnl: 0.8, chain: 'BNB' },
        { symbol: 'USDC', name: 'Circle USD', amount: '2,000.13', value: 2000.13, pnl: 0.0, chain: 'BNB' },
        { symbol: 'USDT', name: 'Tether',     amount: '1,717',    value: 1716.02, pnl: 0.0, chain: 'ETH' },
      ],
    },
    perp: {
      key: 'perp',
      label: 'Perp Balance',
      sublabel: 'Aster contract',
      description: 'Margin deposited into the Aster perpetuals contract. Withdraw to your wallet to transfer.',
      pnl: { '24h': -0.42, '7d': 8.12, 'all': 23.18 },
      margin: { available: 1843.27, used: 906.50, total: 2749.77 },
      positions: [
        { pair: 'BTC-USD', side: 'Long',  size: '0.012', leverage: '5x', entry: 67_840, mark: 68_120, unrealized: 14.62, pnl: 4.21 },
        { pair: 'ETH-USD', side: 'Short', size: '0.45',  leverage: '3x', entry: 3_910,  mark: 3_887,  unrealized: 10.35, pnl: 2.18 },
      ],
    },
    farming: {
      key: 'farming',
      label: 'Farming Balance',
      sublabel: 'PancakeSwap LP',
      description: 'Liquidity deposited into PancakeSwap farms. Earning fees + CAKE rewards.',
      pnl: { '24h': 0.95, '7d': 3.40, 'all': 18.62 },
      pendingCake: 124.583,
      pendingCakeUsd: 248.72,
      positions: [
        { a: 'CAKE', b: 'BNB',  value: 1428.40, apr: 42.3, fees24h: 6.18, range: 'In range' },
        { a: 'USDC', b: 'USDT', value: 1023.81, apr:  8.2, fees24h: 1.42, range: 'In range' },
        { a: 'ETH',  b: 'USDC', value:  712.55, apr: 21.7, fees24h: 3.05, range: 'Out of range' },
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

function computeTotals(d: WalletData) {
  const spotTotal = d.buckets.spot.tokens.reduce((s, t) => s + t.value, 0)
  const perpTotal = d.buckets.perp.margin.total
  const farmTotal = d.buckets.farming.positions.reduce((s, p) => s + p.value, 0)
  return { spotTotal, perpTotal, farmTotal, total: spotTotal + perpTotal + farmTotal }
}

function weightedPnL(d: WalletData, tf: Timeframe) {
  const { spotTotal, perpTotal, farmTotal, total } = computeTotals(d)
  return (
    d.buckets.spot.pnl[tf] * spotTotal +
    d.buckets.perp.pnl[tf] * perpTotal +
    d.buckets.farming.pnl[tf] * farmTotal
  ) / total
}

/* ── Inline icons ──────────────────────────────────────────── */

const Chevron = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7 10l5 5 5-5z" />
  </svg>
)
const TrendUp = ({ size = 11 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
    <path d="M6 2l5 6H1z" />
  </svg>
)
const TrendDown = ({ size = 11 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
    <path d="M6 10L1 4h10z" />
  </svg>
)
const Eye = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 11a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
)
const EyeOff = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M2 4l18 18-1.4 1.4L15 19.8A11 11 0 0112 20c-7 0-10-7-10-7a18 18 0 014.6-5L1 4l1-1zm10 12a4 4 0 003.7-5.7l-5-5A4 4 0 0012 16zm10-9s-3 7-10 7c-.5 0-1 0-1.5-.1l-2-2a4 4 0 005.4-5.4l-2.4-2.4A11 11 0 0112 5c7 0 10 7 10 7z" />
  </svg>
)
const ExternalLink = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z" />
  </svg>
)
const SpotGlyph = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M21 7H5a1 1 0 0 1 0-2h13V3H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-3 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
  </svg>
)
const PerpGlyph = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3 17l6-6 4 4 8-8v4h2V3h-8v2h4l-6 6-4-4-8 8 2 2z" />
  </svg>
)
const FarmGlyph = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2c4 0 7 3 7 7 0 5-7 13-7 13S5 14 5 9c0-4 3-7 7-7zm0 9a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
)
const InfoGlyph = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
  </svg>
)

/* ── Atoms ─────────────────────────────────────────────────── */

function PnLPill({ value, lg }: { value: number; lg?: boolean }) {
  const up = value >= 0
  return (
    <span className={`wp-pnl-pill ${up ? 'wp-pnl-pill--up' : 'wp-pnl-pill--down'}${lg ? ' wp-pnl-pill--lg' : ''}`}>
      {up ? <TrendUp size={lg ? 11 : 9} /> : <TrendDown size={lg ? 11 : 9} />}
      <span>{Math.abs(value).toFixed(2)}%</span>
    </span>
  )
}

function Segmented({
  value,
  onChange,
  options,
}: {
  value: Timeframe
  onChange: (v: Timeframe) => void
  options: { value: Timeframe; label: string }[]
}) {
  return (
    <div className="wp-seg" role="tablist">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="tab"
          aria-selected={value === o.value}
          className={`wp-seg-btn${value === o.value ? ' wp-seg-btn--active' : ''}`}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

function TokenCircle({ symbol, size = 36 }: { symbol: string; size?: number }) {
  return (
    <span
      className="wp-token-circle"
      style={{ width: size, height: size, fontSize: size * 0.35 }}
    >
      {symbol.slice(0, 3)}
    </span>
  )
}

/* ── Bucket detail panes ───────────────────────────────────── */

function SpotDetails({
  bucket,
  hideSmall,
  onAction,
}: {
  bucket: SpotBucket
  hideSmall: boolean
  onAction?: (action: 'send' | 'receive' | 'swap') => void
}) {
  const tokens = hideSmall ? bucket.tokens.filter((t) => t.value >= 100) : bucket.tokens
  return (
    <>
      {tokens.map((tk, i) => (
        <div key={tk.symbol + i}>
          {i > 0 && <div className="wp-hairline" />}
          <div className="wp-token-row">
            <span className="wp-token-icon">
              <TokenCircle symbol={tk.symbol} />
              {tk.chain && tk.chain !== tk.symbol && (
                <span className={`wp-chain-badge wp-chain-badge--${tk.chain.toLowerCase()}`}>
                  {tk.chain === 'BNB' ? 'B' : 'E'}
                </span>
              )}
            </span>
            <div className="wp-tk-meta">
              <div className="wp-tk-line">
                <span className="wp-tk-symbol">{tk.symbol}</span>
                <span className="wp-tk-name">{tk.name}</span>
              </div>
              <div className="wp-tk-amount">{tk.amount} {tk.symbol}</div>
            </div>
            <div className="wp-tk-right">
              <div className="wp-tk-value">{fmtUsd(tk.value)}</div>
              <div className="wp-tk-pnl"><PnLPill value={tk.pnl} /></div>
            </div>
          </div>
        </div>
      ))}
      <div className="wp-actions-row">
        <Button variant="tertiary" scale="sm" width="100%" onClick={() => onAction?.('send')}>Send</Button>
        <Button variant="tertiary" scale="sm" width="100%" onClick={() => onAction?.('receive')}>Receive</Button>
        <Button variant="primary" scale="sm" width="100%" onClick={() => onAction?.('swap')}>Swap</Button>
      </div>
    </>
  )
}

function PerpDetails({
  bucket,
  onAction,
}: {
  bucket: PerpBucket
  onAction?: (action: 'withdraw' | 'trade') => void
}) {
  const m = bucket.margin
  const usedPct = (m.used / m.total) * 100
  return (
    <>
      <div className="wp-margin-card">
        <div className="wp-margin-row">
          <span>Margin used</span>
          <strong>{fmtUsd(m.used)} / {fmtUsd(m.total)}</strong>
        </div>
        <div className="wp-margin-track">
          <div className="wp-margin-fill" style={{ width: `${usedPct}%` }} />
        </div>
        <div className="wp-margin-avail">
          <span className="label">Available</span>
          <span className="value">{fmtUsd(m.available)}</span>
        </div>
      </div>

      <div>
        <div className="wp-section-title">Open positions · {bucket.positions.length}</div>
        {bucket.positions.map((p, i) => (
          <div key={p.pair + i}>
            {i > 0 && <div className="wp-hairline" />}
            <div className="wp-pos-row">
              <TokenCircle symbol={p.pair.split('-')[0]} size={32} />
              <div className="wp-pos-meta">
                <div className="wp-pos-head">
                  <span className="wp-pos-pair">{p.pair}</span>
                  <span className={`wp-pos-side ${p.side === 'Long' ? 'wp-pos-side--long' : 'wp-pos-side--short'}`}>
                    {p.side} {p.leverage}
                  </span>
                </div>
                <div className="wp-pos-detail">Size {p.size} · Entry ${p.entry.toLocaleString()}</div>
              </div>
              <div className="wp-pos-right">
                <div className="wp-pos-unreal">+{fmtUsd(p.unrealized)}</div>
                <div className="wp-pos-pnl"><PnLPill value={p.pnl} /></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="wp-actions-row">
        <Button variant="tertiary" scale="sm" width="100%" onClick={() => onAction?.('withdraw')}>Withdraw</Button>
        <Button variant="primary" scale="sm" width="100%" onClick={() => onAction?.('trade')}>Trade Perps</Button>
      </div>
    </>
  )
}

function FarmingDetails({
  bucket,
  onAction,
}: {
  bucket: FarmingBucket
  onAction?: (action: 'manage' | 'add' | 'claim') => void
}) {
  return (
    <>
      <div className="wp-cake-card">
        <TokenCircle symbol="CAKE" />
        <div className="wp-cake-meta">
          <div className="wp-cake-label">Pending rewards</div>
          <div className="wp-cake-amt">{bucket.pendingCake.toFixed(3)} CAKE</div>
          <div className="wp-cake-usd">≈ {fmtUsd(bucket.pendingCakeUsd)}</div>
        </div>
        <Button variant="primary" scale="sm" onClick={() => onAction?.('claim')}>Claim</Button>
      </div>

      <div>
        <div className="wp-section-title">Positions · {bucket.positions.length}</div>
        {bucket.positions.map((p, i) => (
          <div key={p.a + p.b + i}>
            {i > 0 && <div className="wp-hairline" />}
            <div className="wp-lp-row">
              <span className="wp-lp-pair-icon">
                <TokenCircle symbol={p.a} size={24} />
                <TokenCircle symbol={p.b} size={24} />
              </span>
              <div className="wp-lp-meta">
                <div className="wp-lp-head">
                  <span className="wp-lp-pair">{p.a}-{p.b}</span>
                  <span className={`wp-lp-tag ${p.range === 'In range' ? 'wp-lp-tag--in' : 'wp-lp-tag--out'}`}>
                    {p.range}
                  </span>
                </div>
                <div className="wp-lp-detail">
                  APR <span className="apr">{p.apr.toFixed(1)}%</span> · Fees 24h ${p.fees24h.toFixed(2)}
                </div>
              </div>
              <div className="wp-lp-value">{fmtUsd(p.value)}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="wp-actions-row">
        <Button variant="tertiary" scale="sm" width="100%" onClick={() => onAction?.('manage')}>Manage</Button>
        <Button variant="primary" scale="sm" width="100%" onClick={() => onAction?.('add')}>Add Liquidity</Button>
      </div>
    </>
  )
}

/* ── Bucket card ───────────────────────────────────────────── */

function BucketCard({
  bucket,
  total,
  totalAll,
  expanded,
  onToggle,
  timeframe,
  hideSmall,
  onSpotAction,
  onPerpAction,
  onFarmAction,
}: {
  bucket: Bucket
  total: number
  totalAll: number
  expanded: boolean
  onToggle: () => void
  timeframe: Timeframe
  hideSmall: boolean
  onSpotAction?: WalletPanelProps['onSpotAction']
  onPerpAction?: WalletPanelProps['onPerpAction']
  onFarmAction?: WalletPanelProps['onFarmAction']
}) {
  const pct = (total / totalAll) * 100
  const pnl = bucket.pnl[timeframe]
  return (
    <div className={`wp-bucket${expanded ? ' wp-bucket--expanded' : ''}`}>
      <button type="button" className="wp-bucket-head" onClick={onToggle} aria-expanded={expanded}>
        <div className="wp-bucket-row">
          <span className={`wp-bucket-icon wp-bucket-icon--${bucket.key}`}>
            {bucket.key === 'spot' ? <SpotGlyph /> : bucket.key === 'perp' ? <PerpGlyph /> : <FarmGlyph />}
          </span>
          <div className="wp-bucket-meta">
            <div className="wp-bucket-label">{bucket.label}</div>
            <div className="wp-bucket-sublabel">{bucket.sublabel}</div>
          </div>
          <div className="wp-bucket-amount-wrap">
            <div className="wp-bucket-amount">{fmtUsd(total)}</div>
            <div className="wp-bucket-pnl-row"><PnLPill value={pnl} /></div>
          </div>
          <span className={`wp-bucket-chev${expanded ? ' wp-bucket-chev--up' : ''}`} aria-hidden>
            <Chevron size={18} />
          </span>
        </div>

        <div className="wp-bucket-pct-row">
          <div className="wp-pct-track">
            <div
              className={`wp-pct-fill wp-${bucket.key}-bg`}
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="wp-pct-label">{pct.toFixed(1)}%</span>
        </div>
      </button>

      {expanded && (
        <div className="wp-details">
          <div className="wp-hairline" />
          <div className="wp-desc">{bucket.description}</div>
          {bucket.key === 'spot'    && <SpotDetails    bucket={bucket} hideSmall={hideSmall} onAction={onSpotAction} />}
          {bucket.key === 'perp'    && <PerpDetails    bucket={bucket} onAction={onPerpAction} />}
          {bucket.key === 'farming' && <FarmingDetails bucket={bucket} onAction={onFarmAction} />}
        </div>
      )}
    </div>
  )
}

/* ── Top composition strip ─────────────────────────────────── */

function CompositionBar({
  spot,
  perp,
  farm,
  total,
}: {
  spot: number
  perp: number
  farm: number
  total: number
}) {
  const segs = [
    { key: 'spot',    val: spot, cls: 'wp-spot-bg',    label: 'Spot' },
    { key: 'perp',    val: perp, cls: 'wp-perp-bg',    label: 'Perp' },
    { key: 'farming', val: farm, cls: 'wp-farming-bg', label: 'Farming' },
  ]
  return (
    <div className="wp-overview">
      <div className="wp-comp-bar">
        {segs.map((s) => (
          <span
            key={s.key}
            className={`wp-comp-seg ${s.cls}`}
            style={{ width: `calc(${(s.val / total) * 100}% - 1px)` }}
          />
        ))}
      </div>
      <div className="wp-comp-legend">
        {segs.map((s) => (
          <span key={s.key} className="wp-comp-leg-item">
            <span className={`wp-comp-leg-dot ${s.cls}`} />
            <span className="wp-comp-leg-label">{s.label}</span>
            <span className="wp-comp-leg-pct">{((s.val / total) * 100).toFixed(0)}%</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Main component ────────────────────────────────────────── */

export function WalletPanel({
  data = DEFAULT_DATA,
  initialTab = 'assets',
  initialTimeframe = '24h',
  initialExpanded = 'spot',
  onBridge,
  onSpotAction,
  onPerpAction,
  onFarmAction,
}: WalletPanelProps) {
  const [tab, setTab] = useState<TabKey>(initialTab)
  const [timeframe, setTimeframe] = useState<Timeframe>(initialTimeframe)
  const [expanded, setExpanded] = useState<'spot' | 'perp' | 'farming' | null>(initialExpanded)
  const [hideSmall, setHideSmall] = useState(false)
  const [hideBalance, setHideBalance] = useState(false)

  const totals = useMemo(() => computeTotals(data), [data])
  const pnl = useMemo(() => weightedPnL(data, timeframe), [data, timeframe])

  const handleToggle = (key: 'spot' | 'perp' | 'farming') =>
    setExpanded((prev) => (prev === key ? null : key))

  const tfOptions: { value: Timeframe; label: string }[] = [
    { value: '24h', label: '24H' },
    { value: '7d',  label: '7D'  },
    { value: 'all', label: 'All' },
  ]
  const tabs: { value: TabKey; label: string }[] = [
    { value: 'assets', label: 'Assets' },
    { value: 'tx',     label: 'Transactions' },
    { value: 'gift',   label: 'Gift' },
  ]

  const pnlDelta = totals.total * (pnl / 100)
  const tfLabel = timeframe === '24h' ? '24 hours' : timeframe === '7d' ? '7 days' : 'lifetime'

  return (
    <section className="wp-root" aria-label="Wallet">

      {/* Header chips */}
      <div className="wp-header">
        <button type="button" className="wp-chip">
          <span className="wp-chip-icon">
            <SpotGlyph />
          </span>
          <span className="wp-chip-addr">{data.address}</span>
          <Chevron />
        </button>
        <button type="button" className="wp-chip" aria-label="Select chain">
          <span className="wp-chain-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2 9.4 4.6 12 7.2l2.6-2.6L12 2zm-5 5L4.4 9.6 7 12.2l2.6-2.6L7 7zm10 0-2.6 2.6 2.6 2.6 2.6-2.6L17 7zm-5 5-2.6 2.6L12 17.2l2.6-2.6L12 12zm-5 5-2.6 2.6L7 22l2.6-2.4L7 17zm10 0-2.6 2.6L17 22l2.6-2.4L17 17z" />
            </svg>
          </span>
          <Chevron />
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

      {/* Total + PnL hero */}
      <div className="wp-hero">
        <div className="wp-hero-row">
          <span className="wp-hero-label">
            My Wallet
            <button
              type="button"
              className="wp-eye"
              onClick={() => setHideBalance((v) => !v)}
              aria-label={hideBalance ? 'Show balance' : 'Hide balance'}
            >
              {hideBalance ? <EyeOff /> : <Eye />}
            </button>
          </span>
          <Segmented value={timeframe} onChange={setTimeframe} options={tfOptions} />
        </div>
        <div className="wp-total-row">
          <span className="wp-total">{hideBalance ? '••••••' : fmtUsd(totals.total)}</span>
          <PnLPill value={pnl} lg />
        </div>
        <div className="wp-hero-sub">
          {hideBalance ? (
            '••••'
          ) : (
            <>
              <span className={pnl >= 0 ? 'wp-up' : 'wp-down'}>
                {pnl >= 0 ? '+' : '-'}{fmtUsd(Math.abs(pnlDelta)).replace('-', '')}
              </span>{' '}
              over the past {tfLabel}
            </>
          )}
        </div>
      </div>

      {/* Composition strip */}
      <CompositionBar
        spot={totals.spotTotal}
        perp={totals.perpTotal}
        farm={totals.farmTotal}
        total={totals.total}
      />

      {/* Hide small balances */}
      <label className="wp-hide-small">
        <Checkbox
          scale="sm"
          checked={hideSmall}
          onChange={(e) => setHideSmall(e.target.checked)}
        />
        <span className="wp-hide-small-label">Hide small balances</span>
        <InfoGlyph />
      </label>

      {/* Buckets */}
      <div className="wp-buckets">
        <BucketCard
          bucket={data.buckets.spot}
          total={totals.spotTotal}
          totalAll={totals.total}
          expanded={expanded === 'spot'}
          onToggle={() => handleToggle('spot')}
          timeframe={timeframe}
          hideSmall={hideSmall}
          onSpotAction={onSpotAction}
        />
        <BucketCard
          bucket={data.buckets.perp}
          total={totals.perpTotal}
          totalAll={totals.total}
          expanded={expanded === 'perp'}
          onToggle={() => handleToggle('perp')}
          timeframe={timeframe}
          hideSmall={hideSmall}
          onPerpAction={onPerpAction}
        />
        <BucketCard
          bucket={data.buckets.farming}
          total={totals.farmTotal}
          totalAll={totals.total}
          expanded={expanded === 'farming'}
          onToggle={() => handleToggle('farming')}
          timeframe={timeframe}
          hideSmall={hideSmall}
          onFarmAction={onFarmAction}
        />
      </div>

      {/* Bridge link footer */}
      <div className="wp-bridge">
        <button type="button" className="wp-bridge-btn" onClick={onBridge}>
          Bridge Crypto
          <ExternalLink />
        </button>
      </div>
    </section>
  )
}
