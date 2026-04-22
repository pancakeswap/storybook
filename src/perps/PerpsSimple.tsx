import { useState } from 'react'
import { Navbar } from './Navbar'
import bunnyColor from '../assets/brand/bunny-color.svg'
import '../ui/perps.css'
import './PerpsSimple.css'

/* ─────────────────────────────────────────────────────────────────────────
 * Types & helpers
 * ───────────────────────────────────────────────────────────────────────── */

export type OrderMode = 'market' | 'limit'
export type StakePct = 25 | 50 | 75 | 'MAX'

export interface PerpsSimpleProps {
  /** Pair symbol displayed in the price header. Accepts `BTC/USD`, `BTCUSDT`, etc. */
  initialPair?: string
  /** Called when the user presses the Long CTA. */
  onLong?: (params: OrderSubmitParams) => void
  /** Called when the user presses the Short CTA. */
  onShort?: (params: OrderSubmitParams) => void
}

export interface OrderSubmitParams {
  pair: string
  stake: string
  leverage: number
  mode: OrderMode
  side: 'long' | 'short'
}

interface RiskMeta {
  /** Solid tone used on the leverage number, banner title, and active LevPill. */
  tone: string
  /** Light-theme banner background. Dark-theme derives via color-mix. */
  bg: string
  icon: string
  title: string
  copy: string
}

/**
 * Maps a leverage value to a risk tier. Thresholds mirror the v1-hi-polished
 * prototype. `tone` uses PCS tokens where available, except the 100× "orange"
 * tier which has no direct token — kept as a brand accent.
 */
function riskMeta(lev: number): RiskMeta {
  if (lev >= 500)
    return {
      tone: 'var(--pcs-colors-failure)',
      bg: '#FFF0F9',
      icon: '🔥',
      title: 'High-intensity leverage',
      copy: '1% move against you liquidates. Only risk what you can afford to lose.',
    }
  if (lev >= 100)
    return {
      tone: '#FF6B00',
      bg: '#FFF4E8',
      icon: '⚡',
      title: 'High leverage',
      copy: 'Liquidation triggers around a 1% move. Set a stop loss.',
    }
  if (lev >= 25)
    return {
      tone: 'var(--pcs-colors-warning)',
      bg: '#FFF8E5',
      icon: '⚠️',
      title: 'Amplified risk',
      copy: 'Moves against you are magnified. Keep an eye on liquidation price.',
    }
  return {
    tone: 'var(--pcs-colors-success)',
    bg: '#EAFBF7',
    icon: '🌱',
    title: 'Gentle leverage',
    copy: "A good place to start. You'll feel the market without getting rekt.",
  }
}

const LEVERAGE_STEPS = [5, 10, 25, 50, 100, 250, 500, 1001] as const
const STAKE_PCTS: StakePct[] = [25, 50, 75, 'MAX']
const TIMEFRAMES = ['1m', '5m', '15m', '1h', '4h', '1D'] as const

/* ─────────────────────────────────────────────────────────────────────────
 * Icons
 * ───────────────────────────────────────────────────────────────────────── */

function BtcIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="#F7931A" />
      <path
        d="M22.9 14.3c.3-2-1.2-3-3.3-3.7l.7-2.7-1.7-.4-.7 2.6-1.3-.3.7-2.6-1.7-.4-.7 2.7c-.4 0-.7-.1-1-.2l-2.3-.6-.5 1.8s1.3.3 1.2.3c.7.2.8.6.8 1l-.8 3-1.2 4.6c-.1.2-.3.5-.8.4 0 0-1.2-.3-1.2-.3l-.8 2 2.1.5 1.2.3-.7 2.7 1.7.4.7-2.7 1.3.4-.7 2.7 1.7.4.7-2.7c2.8.5 5 .3 5.9-2.3.7-2.1 0-3.3-1.6-4 1.1-.3 2-1 2.2-2.6zm-3.9 5.3c-.5 2.1-4 1-5.1.7l.9-3.5c1.1.3 4.7.9 4.2 2.8zm.5-5.3c-.5 1.9-3.4 1-4.3.7l.8-3.1c.9.2 4 .6 3.5 2.4z"
        fill="#fff"
      />
    </svg>
  )
}

function Caret({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function TrendUp({ size = 10 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
      <path d="M5 1l4 5H1z" />
    </svg>
  )
}

function LongArrow({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 2l5 6h-3v6H6V8H3z" />
    </svg>
  )
}

function ShortArrow({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 14l-5-6h3V2h4v6h3z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <circle cx="6" cy="6" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 3v3h2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
 * Sub-components
 * ───────────────────────────────────────────────────────────────────────── */

interface PriceHeaderProps {
  pairLabel: string
  priceWhole: string
  priceCents: string
  changePct: string
}

function PriceHeader({ pairLabel, priceWhole, priceCents, changePct }: PriceHeaderProps) {
  return (
    <div className="ps-price-card">
      <div className="ps-price-left">
        <BtcIcon size={48} />
        <div>
          <div className="ps-price-pair-row">
            <span className="ps-price-pair">{pairLabel}</span>
            <span className="ps-tag-perp">Perp</span>
            <span className="ps-caret-muted">
              <Caret />
            </span>
          </div>
          <div className="ps-price-row">
            <div className="ps-price-value">
              ${priceWhole}
              <span className="ps-price-cents">.{priceCents}</span>
            </div>
            <div className="ps-change-pill">
              <TrendUp />
              {changePct}
            </div>
          </div>
        </div>
      </div>
      <div className="ps-price-stats">
        <Stat label="24h Volume" value="$2.14B" />
        <Stat label="Open Interest" value="$840M" />
        <Stat label="Funding rate" value="+0.010%" valueClass="ps-success" />
        <Stat label="Next funding" value="4h 12m" />
      </div>
    </div>
  )
}

function Stat({
  label,
  value,
  valueClass,
}: {
  label: string
  value: string
  valueClass?: string
}) {
  return (
    <div className="ps-stat">
      <div className="ps-stat-label">{label}</div>
      <div className={`ps-stat-value${valueClass ? ` ${valueClass}` : ''}`}>{value}</div>
    </div>
  )
}

function ChartCard({
  timeframe,
  onTimeframeChange,
}: {
  timeframe: string
  onTimeframeChange: (tf: string) => void
}) {
  return (
    <div className="ps-chart-card">
      <div className="ps-chart-header">
        <div className="ps-tf-group" role="tablist" aria-label="Timeframe">
          {TIMEFRAMES.map((tf) => (
            <button
              key={tf}
              type="button"
              role="tab"
              aria-selected={timeframe === tf}
              className={`ps-tf-btn${timeframe === tf ? ' active' : ''}`}
              onClick={() => onTimeframeChange(tf)}
            >
              {tf}
            </button>
          ))}
        </div>
        <div className="ps-pyth-pill" aria-label="Live price feed">
          <span className="ps-pyth-dot" />
          Live · Pyth
        </div>
      </div>
      <div className="ps-chart-body">
        <SimpleChart />
      </div>
    </div>
  )
}

/** Lightweight decorative chart — smooth uptrend area + current-price tag.
 *  Intentionally minimal: no axes, no tools, no OHLC. Pure eye-candy. */
function SimpleChart() {
  // 32 evenly-spaced y-values (0–100 scale) building a gentle uptrend with light noise.
  const points: number[] = [
    72, 70, 74, 71, 76, 78, 74, 80,
    82, 79, 83, 86, 84, 88, 90, 87,
    92, 89, 93, 95, 92, 96, 94, 98,
    96, 99, 97, 100, 98, 102, 100, 104,
  ]
  const W = 1000
  const H = 300
  const pad = 8
  const stepX = (W - pad * 2) / (points.length - 1)
  const maxY = Math.max(...points) + 6
  const minY = Math.min(...points) - 6
  const scaleY = (v: number) => pad + ((maxY - v) / (maxY - minY)) * (H - pad * 2)

  const coords = points.map((v, i) => [pad + i * stepX, scaleY(v)] as const)
  const linePath =
    'M' +
    coords
      .map(([x, y], i) => {
        if (i === 0) return `${x} ${y}`
        const [px, py] = coords[i - 1]
        const cx = (px + x) / 2
        return `Q ${px} ${py} ${cx} ${(py + y) / 2} T ${x} ${y}`
      })
      .join(' ')
  const areaPath = `${linePath} L ${W - pad} ${H} L ${pad} ${H} Z`

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className="ps-simple-chart"
      role="img"
      aria-label="BTC price chart — uptrend"
    >
      <defs>
        <linearGradient id="ps-chart-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.20" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#ps-chart-fill)" />
      <path d={linePath} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      {/* Current-price dot + dashed tag on the right */}
      <line
        x1={0}
        y1={scaleY(points[points.length - 1])}
        x2={W - 60}
        y2={scaleY(points[points.length - 1])}
        stroke="currentColor"
        strokeOpacity={0.2}
        strokeDasharray="4 6"
      />
      <circle
        cx={coords[coords.length - 1][0]}
        cy={coords[coords.length - 1][1]}
        r={4}
        fill="currentColor"
      />
    </svg>
  )
}

function PositionsStrip() {
  return (
    <div className="ps-positions-strip">
      <div className="ps-positions-bunny">
        <img src={bunnyColor} alt="" width={30} height={30} />
      </div>
      <div className="ps-positions-text">
        <div className="ps-positions-label">Your open position</div>
        <div className="ps-positions-body">No active trades — ready when you are.</div>
      </div>
      <div className="ps-spacer" />
      <button type="button" className="ps-history-link">
        Trade history →
      </button>
    </div>
  )
}

interface StakeCardProps {
  value: string
  onValueChange: (v: string) => void
  selectedPct: StakePct
  onPctChange: (p: StakePct) => void
  positionUsd: string
  balance: string
}

function StakeCard({
  value,
  onValueChange,
  selectedPct,
  onPctChange,
  positionUsd,
  balance,
}: StakeCardProps) {
  return (
    <div className="ps-stake-card">
      <div className="ps-stake-header">
        <span className="ps-stake-label">You pay</span>
        <span className="ps-stake-balance">
          Balance <span className="ps-stake-balance-val">{balance}</span> USDT
        </span>
      </div>
      <div className="ps-stake-row">
        <label className="ps-stake-input-wrap">
          <input
            type="text"
            inputMode="decimal"
            className="ps-stake-input"
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
            aria-label="Stake amount"
          />
          <span className="ps-stake-unit">USDT</span>
        </label>
        <div className="ps-stake-position-pill">
          <span className="ps-stake-position-val">{positionUsd}</span>
          <span className="ps-stake-position-label">position</span>
        </div>
      </div>
      <div className="ps-pct-row">
        {STAKE_PCTS.map((pct) => {
          const active = pct === selectedPct
          const label = pct === 'MAX' ? 'MAX' : `${pct}%`
          return (
            <button
              key={String(pct)}
              type="button"
              className={`ps-pct-btn${active ? ' active' : ''}`}
              onClick={() => onPctChange(pct)}
            >
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

interface LeveragePickerProps {
  leverage: number
  onLeverageChange: (v: number) => void
}

function LevPill({
  value,
  active,
  onClick,
}: {
  value: number
  active: boolean
  onClick: () => void
}) {
  const tone =
    value >= 500
      ? 'var(--pcs-colors-failure)'
      : value >= 100
        ? '#FF6B00'
        : value >= 50
          ? 'var(--pcs-colors-warning)'
          : value >= 10
            ? 'var(--pcs-colors-primary)'
            : 'var(--pcs-colors-success)'
  const style = active ? { background: tone } : undefined
  return (
    <button
      type="button"
      className={`ps-lev-pill${active ? ' active' : ''}`}
      onClick={onClick}
      style={style}
      aria-pressed={active}
    >
      {value}×
    </button>
  )
}

function LeveragePicker({ leverage, onLeverageChange }: LeveragePickerProps) {
  const risk = riskMeta(leverage)
  const bannerStyle: React.CSSProperties = {
    // Light-theme bg from riskMeta; dark-theme derives a dark-safe tint from the tone
    ['--ps-risk-bg-light' as string]: risk.bg,
    ['--ps-risk-tone' as string]: risk.tone,
  }
  return (
    <div className="ps-lev-section">
      <div className="ps-lev-header">
        <span className="ps-lev-label">Leverage</span>
        <span className="ps-lev-value-row">
          <span className="ps-lev-value" style={{ color: risk.tone }}>
            {leverage}×
          </span>
          <span className="ps-lev-max">/ 1001× max</span>
        </span>
      </div>
      <div className="ps-lev-pills">
        {LEVERAGE_STEPS.map((l) => (
          <LevPill key={l} value={l} active={l === leverage} onClick={() => onLeverageChange(l)} />
        ))}
      </div>
      <div className="ps-risk-banner" style={bannerStyle} role="status">
        <div className="ps-risk-icon" aria-hidden="true">
          {risk.icon}
        </div>
        <div>
          <div className="ps-risk-title" style={{ color: risk.tone }}>
            {risk.title}
          </div>
          <div className="ps-risk-copy">{risk.copy}</div>
        </div>
      </div>
    </div>
  )
}

function OrderSummary() {
  const rows: Array<{ label: string; value: string; tone?: 'fail' | 'default' }> = [
    { label: 'Estimated entry', value: '$67,413' },
    { label: 'Liquidation if Long', value: '$66,082  (−2.0%)', tone: 'fail' },
    { label: 'Margin required', value: '400 USDT' },
    { label: 'Opening fee', value: '$10.00  (0.05%)' },
  ]
  return (
    <div className="ps-summary-card" role="group" aria-label="Order summary">
      {rows.map((r) => (
        <div key={r.label} className="ps-summary-row">
          <span className="ps-summary-label">{r.label}</span>
          <span className={`ps-summary-value${r.tone === 'fail' ? ' ps-failure' : ''}`}>
            {r.value}
          </span>
        </div>
      ))}
    </div>
  )
}

function LongShortCtas({
  onLong,
  onShort,
}: {
  onLong: () => void
  onShort: () => void
}) {
  return (
    <div className="ps-cta-row">
      <button
        type="button"
        className="ps-chunky-btn ps-chunky-long"
        onClick={onLong}
      >
        <LongArrow />
        Long BTC
      </button>
      <button
        type="button"
        className="ps-chunky-btn ps-chunky-short"
        onClick={onShort}
      >
        <ShortArrow />
        Short BTC
      </button>
    </div>
  )
}

interface TradePanelProps {
  orderMode: OrderMode
  onOrderModeChange: (m: OrderMode) => void
  stake: string
  onStakeChange: (v: string) => void
  selectedPct: StakePct
  onPctChange: (p: StakePct) => void
  leverage: number
  onLeverageChange: (l: number) => void
  onLong: () => void
  onShort: () => void
}

function TradePanel({
  orderMode,
  onOrderModeChange,
  stake,
  onStakeChange,
  selectedPct,
  onPctChange,
  leverage,
  onLeverageChange,
  onLong,
  onShort,
}: TradePanelProps) {
  return (
    <aside className="ps-trade-panel" aria-label="Order panel">
      <div className="ps-trade-header">
        <div>
          <div className="ps-trade-title">Place an order</div>
          <div className="ps-trade-subtitle">Market · Cross margin</div>
        </div>
        <button
          type="button"
          className={`ps-limit-toggle${orderMode === 'limit' ? ' active' : ''}`}
          onClick={() => onOrderModeChange(orderMode === 'limit' ? 'market' : 'limit')}
        >
          <ClockIcon />
          Limit order
        </button>
      </div>

      <StakeCard
        value={stake}
        onValueChange={onStakeChange}
        selectedPct={selectedPct}
        onPctChange={onPctChange}
        positionUsd={`$${(Number(stake || 0) * leverage).toLocaleString('en-US')}`}
        balance="1,248.00"
      />

      <LeveragePicker leverage={leverage} onLeverageChange={onLeverageChange} />

      <OrderSummary />

      <LongShortCtas onLong={onLong} onShort={onShort} />

      <div className="ps-fine-print">
        Taps confirmed by your wallet · no additional fees
      </div>
    </aside>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
 * Root
 * ───────────────────────────────────────────────────────────────────────── */

export function PerpsSimple({ initialPair = 'BTC/USD', onLong, onShort }: PerpsSimpleProps) {
  const [stake, setStake] = useState('400')
  const [leverage, setLeverage] = useState<number>(50)
  const [selectedPct, setSelectedPct] = useState<StakePct>(50)
  const [orderMode, setOrderMode] = useState<OrderMode>('market')
  const [timeframe, setTimeframe] = useState<string>('1h')

  const submit = (side: 'long' | 'short') => {
    const params: OrderSubmitParams = {
      pair: initialPair,
      stake,
      leverage,
      mode: orderMode,
      side,
    }
    if (side === 'long') onLong?.(params)
    else onShort?.(params)
  }

  return (
    <div className="perps-root ps-root">
      <Navbar />

      <div className="ps-body">
        {/* LEFT — chart column */}
        <div className="ps-left">
          <PriceHeader
            pairLabel={initialPair.includes('/') ? initialPair : 'BTC / USD'}
            priceWhole="67,412"
            priceCents="80"
            changePct="+2.14%"
          />
          <ChartCard timeframe={timeframe} onTimeframeChange={setTimeframe} />
          <PositionsStrip />
        </div>

        {/* RIGHT — trade panel */}
        <TradePanel
          orderMode={orderMode}
          onOrderModeChange={setOrderMode}
          stake={stake}
          onStakeChange={setStake}
          selectedPct={selectedPct}
          onPctChange={setSelectedPct}
          leverage={leverage}
          onLeverageChange={setLeverage}
          onLong={() => submit('long')}
          onShort={() => submit('short')}
        />
      </div>
    </div>
  )
}
