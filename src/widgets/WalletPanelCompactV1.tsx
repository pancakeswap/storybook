import { useMemo, useState } from 'react'
import './WalletPanelCompactV1.css'
import { Checkbox } from '../primitives/Checkbox'
import walletIcon from '../assets/wallet.png'
import perpsChartIcon from '../assets/perps-chart.png'

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
  balanceTokens?: SpotToken[]
}

export interface WalletData {
  buckets: {
    spot: Bucket
    perp: Bucket
  }
}

export interface WalletPanelCompactV1Props {
  data?: WalletData
  initialTab?: TabKey
  initialTimeframe?: Timeframe
  initialExpanded?: 'spot' | 'perp' | null
  onSpotAction?: (action: 'send' | 'receive' | 'swap') => void
  onPerpAction?: (action: 'deposit' | 'withdraw' | 'manage' | 'transfer') => void
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
      pnl: { '24h': 1.72, '7d': 8.12, 'all': 23.18 },
      description: 'Total value of your perps trading balance. Updates in real time.',
      positions: [
        { symbol: 'ETH', side: 'Long',  leverage: '500X', pnlUsd: 209.87, pnlPct: 0.5, color: '#627EEA' },
        { symbol: 'BTC', side: 'Short', leverage: '250X', pnlUsd: 425.26, pnlPct: 0.5, color: '#F7931A' },
        { symbol: 'BNB', side: 'Long',  leverage: '500X', pnlUsd: 338.11, pnlPct: 0.5, color: '#F0B90B' },
      ],
      balanceTokens: [
        { symbol: 'USDC', name: 'Circle USD', amount: '610 USDC',    value: 610.09, pnl: 0.5, network: 'BNB', color: '#2775CA' },
        { symbol: 'USDT', name: 'Tether',     amount: '363.34 USDT', value: 363.12, pnl: 0.5, network: 'BNB', color: '#26A17B' },
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

const SpotWalletGlyph = () => (
  <img src={walletIcon} alt="" width="40" height="40" style={{ display: 'block' }} />
)

const PerpsChartGlyph = () => (
  <img src={perpsChartIcon} alt="" width="40" height="40" style={{ display: 'block' }} />
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

const ArrowLeft = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
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
    <span className={`wpc1-pnl ${up ? 'wpc1-pnl--up' : 'wpc1-pnl--down'}${lg ? ' wpc1-pnl--lg' : ''}`}>
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
    <div className="wpc1-tf" role="tablist">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="tab"
          aria-selected={value === o.value}
          className={`wpc1-tf-btn${value === o.value ? ' wpc1-tf-btn--active' : ''}`}
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
    <span className="wpc1-token-circle" style={{ background: color }}>
      {symbol.slice(0, 1)}
    </span>
  )
}

function PositionRow({ p }: { p: PerpPosition }) {
  const up = p.pnlPct >= 0
  return (
    <div className="wpc1-tk-row">
      <span className="wpc1-tk-icon">
        <TokenCircle symbol={p.symbol} color={p.color} />
      </span>
      <div className="wpc1-tk-meta">
        <div className="wpc1-tk-symbol">{p.symbol}</div>
        <div className="wpc1-pos-detail">
          <span className={`wpc1-pos-side wpc1-pos-side--${p.side.toLowerCase()}`}>{p.side}</span>
          <span className="wpc1-pos-sep">•</span>
          <span className="wpc1-pos-lev">{p.leverage}</span>
        </div>
      </div>
      <div className="wpc1-tk-right">
        <span className="wpc1-pos-pnl">
          {p.pnlUsd >= 0 ? '+' : '-'}
          {fmtUsd(Math.abs(p.pnlUsd))}
        </span>
        <span className={`wpc1-pnl wpc1-pnl--md ${up ? 'wpc1-pnl--up' : 'wpc1-pnl--down'}`}>
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
    <div className="wpc1-tk-row">
      <span className="wpc1-tk-icon">
        <TokenCircle symbol={tk.symbol} color={tk.color} />
        <span className="wpc1-tk-network">
          <BnbDiamond size={11} />
        </span>
      </span>
      <div className="wpc1-tk-meta">
        <div className="wpc1-tk-line">
          <span className="wpc1-tk-symbol">{tk.symbol}</span>
          <span className="wpc1-tk-name">{tk.name}</span>
        </div>
        <div className="wpc1-tk-amount">{tk.amount}</div>
      </div>
      <div className="wpc1-tk-right">
        <span className="wpc1-tk-value">{fmtUsdRound(tk.value)}</span>
        <span className={`wpc1-pnl wpc1-pnl--md ${up ? 'wpc1-pnl--up' : 'wpc1-pnl--down'}`}>
          {up ? <TriangleUp size={12} /> : <TriangleDown size={12} />}
          <span>{Math.abs(tk.pnl).toFixed(1)}%</span>
        </span>
      </div>
    </div>
  )
}

function BucketSummaryRow({
  bucket,
  timeframe,
  onOpen,
}: {
  bucket: Bucket
  timeframe: Timeframe
  onOpen?: () => void
}) {
  const pnl = bucket.pnl[timeframe]
  return (
    <div className={`wpc1-row wpc1-row--${bucket.key}`}>
      <div className="wpc1-row-inner">
        <div className={`wpc1-row-icon wpc1-row-icon--${bucket.key}`} aria-hidden>
          {bucket.key === 'spot' ? <SpotWalletGlyph /> : <PerpsChartGlyph />}
        </div>
        <div className="wpc1-row-meta">
          <div className="wpc1-bucket-label">{bucket.label}</div>
          <div className="wpc1-bucket-sub">{bucket.sublabel}</div>
        </div>
        <div className="wpc1-row-right">
          <div className="wpc1-row-amount-row">
            <span className="wpc1-bucket-amount">{fmtUsd(bucket.amount)}</span>
            <span className={`wpc1-pnl-flat ${pnl >= 0 ? 'wpc1-pnl-flat--up' : 'wpc1-pnl-flat--down'}`}>
              {pnl >= 0 ? <TriangleUp size={12} /> : <TriangleDown size={12} />}
              <span>{Math.abs(pnl).toFixed(2)}%</span>
            </span>
          </div>
          <button type="button" className="wpc1-row-chev" aria-label={`Open ${bucket.label}`} onClick={onOpen}>
            <span className="wpc1-bucket-caret-icon">
              <ChevronRight />
            </span>
          </button>
        </div>
      </div>
    </div>
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
  onSpotAction,
  onPerpAction,
}: {
  bucket: Bucket
  pct: number
  timeframe: Timeframe
  onTfChange: (v: Timeframe) => void
  tfOptions: { value: Timeframe; label: string }[]
  onBack: () => void
  hideSmall: boolean
  setHideSmall: (v: boolean) => void
  onSpotAction?: WalletPanelCompactV1Props['onSpotAction']
  onPerpAction?: WalletPanelCompactV1Props['onPerpAction']
}) {
  const pnl = bucket.pnl[timeframe]
  const pnlDelta = bucket.amount * (pnl / 100)
  const tfLabel = timeframe === '24h' ? '24 hours' : timeframe === '7d' ? '7 days' : 'lifetime'
  const tokens =
    bucket.tokens && hideSmall ? bucket.tokens.filter((t) => t.value >= 100) : bucket.tokens
  const positions =
    bucket.positions && hideSmall
      ? bucket.positions.filter((p) => Math.abs(p.pnlUsd) >= 100)
      : bucket.positions
  const isSpot = bucket.key === 'spot'

  return (
    <>
      {/* Detail header: back + title + tf toggle */}
      <div className="wpc1-detail-header">
        <button type="button" className="wpc1-back-btn" onClick={onBack} aria-label="Back">
          <ArrowLeft size={20} />
        </button>
        <span className="wpc1-detail-title">{bucket.label}</span>
        <TfToggle value={timeframe} onChange={onTfChange} options={tfOptions} />
      </div>

      {/* Top group: hero + track + description (8px gaps internally) */}
      <div className="wpc1-detail-top">
        <div className="wpc1-hero">
          <div className="wpc1-hero-amount-row">
            <span className="wpc1-hero-amount">
              <span className="wpc1-hero-amount-int">{fmtUsd(bucket.amount).split('.')[0]}</span>
              <span className="wpc1-hero-amount-dec">.{fmtUsd(bucket.amount).split('.')[1] ?? '00'}</span>
            </span>
            <PnLPill value={pnl} lg />
          </div>
          <div className="wpc1-hero-sub">
            {isSpot ? (
              <>
                <span className={pnl >= 0 ? 'wpc1-hero-sub-up' : 'wpc1-hero-sub-down'}>
                  {pnl >= 0 ? '+' : '-'}
                  {fmtUsd(Math.abs(pnlDelta)).replace('-', '')}
                </span>
                <span className="wpc1-hero-sub-rest">{` over the past ${tfLabel}`}</span>
              </>
            ) : (
              <span className="wpc1-hero-sub-rest">{bucket.sublabel}</span>
            )}
          </div>
        </div>

        <div className="wpc1-track-row">
          <div className="wpc1-track">
            <div
              className={`wpc1-track-fill wpc1-track-fill--${bucket.key}`}
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="wpc1-track-pct">{pct.toFixed(0)}%</span>
        </div>

        {bucket.description && <p className="wpc1-bucket-desc">{bucket.description}</p>}
      </div>

      {isSpot ? (
        <>
          <label className="wpc1-hide-small">
            <div className="wpc1-hide-small-inner">
              <span className="wpc1-hide-small-label">Hide small balances</span>
              <span className="wpc1-hide-small-info" aria-hidden>
                <InfoCircle size={16} />
              </span>
              <Checkbox
                scale="sm"
                checked={hideSmall}
                onChange={(e) => setHideSmall(e.target.checked)}
              />
            </div>
          </label>
          <div className="wpc1-tk-list">
            {tokens?.map((tk, i) => <TokenRow key={tk.symbol + i} tk={tk} />)}
          </div>
          <div className="wpc1-actions">
            <button type="button" className="wpc1-action-btn" onClick={() => onSpotAction?.('send')}>Send</button>
            <button type="button" className="wpc1-action-btn" onClick={() => onSpotAction?.('receive')}>Receive</button>
            <button type="button" className="wpc1-action-btn wpc1-action-btn--primary" onClick={() => onSpotAction?.('swap')}>Swap</button>
          </div>
        </>
      ) : (
        <>
          <label className="wpc1-hide-small">
            <div className="wpc1-hide-small-inner">
              <span className="wpc1-hide-small-label">Hide small balances</span>
              <span className="wpc1-hide-small-info" aria-hidden>
                <InfoCircle size={16} />
              </span>
              <Checkbox
                scale="sm"
                checked={hideSmall}
                onChange={(e) => setHideSmall(e.target.checked)}
              />
            </div>
          </label>
          <div className="wpc1-tk-list">
            {(bucket.balanceTokens && hideSmall
              ? bucket.balanceTokens.filter((t) => t.value >= 100)
              : bucket.balanceTokens
            )?.map((tk, i) => (
              <TokenRow key={tk.symbol + i} tk={tk} />
            ))}
          </div>
          <div className="wpc1-actions">
            <button
              type="button"
              className="wpc1-action-btn"
              onClick={() => onPerpAction?.('withdraw')}
            >
              Withdraw
            </button>
            <button
              type="button"
              className="wpc1-action-btn wpc1-action-btn--primary"
              onClick={() => onPerpAction?.('deposit')}
            >
              Deposit
            </button>
          </div>
        </>
      )}
    </>
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
  onSpotAction?: WalletPanelCompactV1Props['onSpotAction']
  onPerpAction?: WalletPanelCompactV1Props['onPerpAction']
}) {
  const pnl = bucket.pnl[timeframe]
  const tokens =
    bucket.tokens && hideSmall ? bucket.tokens.filter((t) => t.value >= 100) : bucket.tokens
  const positions =
    bucket.positions && hideSmall
      ? bucket.positions.filter((p) => Math.abs(p.pnlUsd) >= 100)
      : bucket.positions

  return (
    <div className={`wpc1-bucket${expanded ? ' wpc1-bucket--expanded' : ''}`}>
      <div className="wpc1-bucket-row">
        <div className="wpc1-bucket-left">
          <div className="wpc1-bucket-icon" aria-hidden />
          <div className="wpc1-bucket-meta">
            <div className="wpc1-bucket-label">{bucket.label}</div>
            <div className="wpc1-bucket-sub">{bucket.sublabel}</div>
          </div>
        </div>
        <div className="wpc1-bucket-right">
          <div className="wpc1-bucket-amount-row">
            <span className="wpc1-bucket-amount">{fmtUsd(bucket.amount)}</span>
            <span className={`wpc1-pnl-flat ${pnl >= 0 ? 'wpc1-pnl-flat--up' : 'wpc1-pnl-flat--down'}`}>
              {pnl >= 0 ? <TriangleUp size={12} /> : <TriangleDown size={12} />}
              <span>{Math.abs(pnl).toFixed(2)}%</span>
            </span>
          </div>
          <button
            type="button"
            className={`wpc1-bucket-caret${expanded ? ' wpc1-bucket-caret--up' : ''}`}
            aria-label={expanded ? 'Collapse' : 'Expand'}
            aria-expanded={expanded}
            disabled={!expandable}
            onClick={onToggle}
          >
            <span className="wpc1-bucket-caret-icon">
              <ArrowDropDown />
            </span>
          </button>
        </div>
      </div>
      <div className="wpc1-track-row">
        <div className="wpc1-track">
          <div
            className={`wpc1-track-fill wpc1-track-fill--${bucket.key}`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="wpc1-track-pct">{pct.toFixed(0)}%</span>
      </div>

      {expanded && (bucket.tokens || bucket.positions) && (
        <>
          <div className="wpc1-divider" />
          {bucket.description && <p className="wpc1-bucket-desc">{bucket.description}</p>}
          <label className="wpc1-hide-small">
            <span className="wpc1-hide-small-label">Hide small balances</span>
            <span className="wpc1-hide-small-info" aria-hidden>
              <InfoCircle size={16} />
            </span>
            <Checkbox
              scale="sm"
              checked={!!hideSmall}
              onChange={(e) => setHideSmall?.(e.target.checked)}
            />
          </label>
          <div className="wpc1-tk-list">
            {bucket.key === 'spot' && tokens?.map((tk, i) => (
              <TokenRow key={tk.symbol + i} tk={tk} />
            ))}
            {bucket.key === 'perp' && positions?.map((p, i) => (
              <PositionRow key={p.symbol + i} p={p} />
            ))}
          </div>
          {bucket.key === 'spot' && (
            <div className="wpc1-actions">
              <button type="button" className="wpc1-action-btn" onClick={() => onSpotAction?.('send')}>
                Send
              </button>
              <button type="button" className="wpc1-action-btn" onClick={() => onSpotAction?.('receive')}>
                Receive
              </button>
              <button
                type="button"
                className="wpc1-action-btn wpc1-action-btn--primary"
                onClick={() => onSpotAction?.('swap')}
              >
                Swap
              </button>
            </div>
          )}
          {bucket.key === 'perp' && (
            <div className="wpc1-actions">
              <button type="button" className="wpc1-action-btn" onClick={() => onPerpAction?.('deposit')}>
                Deposit
              </button>
              <button type="button" className="wpc1-action-btn" onClick={() => onPerpAction?.('withdraw')}>
                Withdraw
              </button>
              <button
                type="button"
                className="wpc1-action-btn wpc1-action-btn--primary"
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

export function WalletPanelCompactV1({
  data = DEFAULT_DATA,
  initialTab = 'assets',
  initialTimeframe = '24h',
  initialExpanded = null,
  onSpotAction,
  onPerpAction,
}: WalletPanelCompactV1Props) {
  const [tab, setTab] = useState<TabKey>(initialTab)
  const [timeframe, setTimeframe] = useState<Timeframe>(initialTimeframe)
  const [view, setView] = useState<'summary' | 'spot' | 'perp'>(
    initialExpanded === 'spot' ? 'spot' : initialExpanded === 'perp' ? 'perp' : 'summary',
  )
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

  if (view !== 'summary') {
    const detailBucket = view === 'spot' ? data.buckets.spot : data.buckets.perp
    const detailPct = view === 'spot' ? totals.spotPct : totals.perpPct
    return (
      <section className="wpc1-root" aria-label="Wallet">
        <BucketDetail
          bucket={detailBucket}
          pct={detailPct}
          timeframe={timeframe}
          onTfChange={setTimeframe}
          tfOptions={tfOptions}
          onBack={() => setView('summary')}
          hideSmall={hideSmall}
          setHideSmall={setHideSmall}
          onSpotAction={onSpotAction}
          onPerpAction={onPerpAction}
        />
      </section>
    )
  }

  return (
    <section className="wpc1-root" aria-label="Wallet">
      {/* Header chips */}
      <div className="wpc1-header">
        <button type="button" className="wpc1-chip" aria-label="Wallet — all chains">
          <span className="wpc1-chip-stack">
            <span className="wpc1-chip-badge wpc1-chip-badge--light">
              <span className="wpc1-chip-grid">
                <span style={{ background: '#F0B90B' }} />
                <span style={{ background: '#627EEA' }} />
                <span style={{ background: '#46557A' }} />
                <span style={{ background: '#0052FF' }} />
              </span>
            </span>
            <span className="wpc1-chip-badge wpc1-chip-badge--dark">
              <BnbDiamond />
            </span>
          </span>
          <ChevronDown size={20} />
        </button>
        <button type="button" className="wpc1-chip" aria-label="Select chain">
          <span className="wpc1-chip-badge wpc1-chip-badge--dark">
            <BnbDiamond />
          </span>
          <ChevronDown size={20} />
        </button>
      </div>

      {/* Tabs */}
      <div className="wpc1-tabs" role="tablist">
        {tabs.map((tt) => (
          <button
            key={tt.value}
            type="button"
            role="tab"
            aria-selected={tab === tt.value}
            className={`wpc1-tab${tab === tt.value ? ' wpc1-tab--active' : ''}`}
            onClick={() => setTab(tt.value)}
          >
            {tt.label}
          </button>
        ))}
      </div>

      {/* Hero */}
      <div className="wpc1-hero">
        <div className="wpc1-hero-top">
          <span className="wpc1-hero-title">My Wallet</span>
          <TfToggle value={timeframe} onChange={setTimeframe} options={tfOptions} />
        </div>
        <div className="wpc1-hero-amount-row">
          <span className="wpc1-hero-amount">
            <span className="wpc1-hero-amount-int">{total.whole}</span>
            <span className="wpc1-hero-amount-dec">{total.dec}</span>
          </span>
          <PnLPill value={pnl} lg />
        </div>
        <div className="wpc1-hero-sub">
          <span className={pnl >= 0 ? 'wpc1-hero-sub-up' : 'wpc1-hero-sub-down'}>
            {pnl >= 0 ? '+' : '-'}
            {fmtUsd(Math.abs(pnlDelta)).replace('-', '')}
          </span>
          <span className="wpc1-hero-sub-rest">{` over the past ${tfLabel}`}</span>
        </div>
      </div>

      {/* Overview wrapper: composition + bucket summary rows */}
      <div className="wpc1-overview">
        <div className="wpc1-overview-section wpc1-comp">
          <div className="wpc1-overview-title">Overview</div>
          <div className="wpc1-comp-bar">
            <span className="wpc1-comp-seg wpc1-comp-seg--spot" />
            <span className="wpc1-comp-seg wpc1-comp-seg--perp" />
          </div>
          <div className="wpc1-comp-legend">
            <span className="wpc1-comp-leg-item">
              <span className="wpc1-comp-leg-dot wpc1-comp-leg-dot--spot" />
              <span className="wpc1-comp-leg-label">Spot</span>
              <span className="wpc1-comp-leg-pct">{totals.spotPct.toFixed(0)}%</span>
            </span>
            <span className="wpc1-comp-leg-item">
              <span className="wpc1-comp-leg-dot wpc1-comp-leg-dot--perp" />
              <span className="wpc1-comp-leg-label">Perp</span>
              <span className="wpc1-comp-leg-pct">{totals.perpPct.toFixed(0)}%</span>
            </span>
          </div>
        </div>
        <BucketSummaryRow
          bucket={data.buckets.spot}
          timeframe={timeframe}
          onOpen={() => setView('spot')}
        />
        <BucketSummaryRow
          bucket={data.buckets.perp}
          timeframe={timeframe}
          onOpen={() => setView('perp')}
        />
      </div>
    </section>
  )
}
