import '../ui/perps.css'
import './TickerBar.css'

export interface TickerStat {
  label: string
  value: string
  /** Optional tone override for the value. */
  tone?: 'default' | 'funding' | 'long' | 'short'
}

export interface TickerBarProps {
  /** Pair symbol (e.g. BTCUSDT). */
  symbol?: string
  /** Short label shown in the coin badge (e.g. ₿). */
  coinGlyph?: string
  /** Gradient or color for the coin badge. */
  coinColor?: string
  /** Last price. Rendered in green/red depending on `priceDirection`. */
  price?: string
  /** Percent-change string (e.g. "+0.73%"). */
  changePct?: string
  /** Determines price/change colour. */
  priceDirection?: 'up' | 'down'
  /** Stats rendered across the middle. */
  stats?: TickerStat[]
  /** Fired when the user clicks the favourite star. */
  onToggleFavorite?: () => void
  /** Fired when the shield button is clicked. */
  onShield?: () => void
}

const DEFAULT_STATS: TickerStat[] = [
  { label: 'Mark', value: '75,497.0' },
  { label: 'Index', value: '75,497.5' },
  { label: 'Funding / Countdown', value: '0.0032% / 00:35:31', tone: 'funding' },
  { label: '24h volume (USDT)', value: '868,624,210.84' },
  { label: 'Open Interest (USDT)', value: '787,852,982.70' },
]

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"/>
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L3 5v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V5l-9-3z"/>
    </svg>
  )
}

function Caret() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 10l5 5 5-5z"/>
    </svg>
  )
}

export function TickerBar({
  symbol = 'BTCUSDT',
  coinGlyph = '\u20BF',
  coinColor = 'linear-gradient(180deg,#F7931A,#E8850C)',
  price = '75,500.8',
  changePct = '+0.73%',
  priceDirection = 'up',
  stats = DEFAULT_STATS,
  onToggleFavorite,
  onShield,
}: TickerBarProps) {
  const priceClass = priceDirection === 'up' ? 'tb-price p-long' : 'tb-price p-short'

  return (
    <div className="perps-root tb-root" role="region" aria-label="Market ticker">
      <button
        type="button"
        className="tb-star"
        aria-label="Toggle favorite"
        onClick={onToggleFavorite}
      >
        <StarIcon />
      </button>

      <div className="tb-divider" aria-hidden="true" />

      <button type="button" className="tb-pair" aria-label={`Select pair, current ${symbol}`}>
        <span className="tb-coin" aria-hidden="true" style={{ background: coinColor }}>
          {coinGlyph}
        </span>
        <span className="tb-pair-label">
          <span className="tb-pair-name">
            {symbol}
            <span className="tb-caret" aria-hidden="true"><Caret /></span>
          </span>
          <span className="tb-perp-badge">Perp</span>
        </span>
      </button>

      <div className="tb-divider" aria-hidden="true" />

      <div className="tb-price-block">
        <div className={priceClass}>{price}</div>
        <div className={`tb-change ${priceDirection === 'up' ? 'p-long' : 'p-short'}`}>{changePct}</div>
      </div>

      <div className="tb-stats">
        {stats.map((s) => (
          <div key={s.label} className="tb-stat">
            <div className="tb-stat-label">{s.label}</div>
            <div className={`tb-stat-value${s.tone === 'funding' ? ' p-short' : ''}${s.tone === 'long' ? ' p-long' : ''}${s.tone === 'short' ? ' p-short' : ''}`}>
              {s.value}
            </div>
          </div>
        ))}
      </div>

      <div className="tb-spacer" aria-hidden="true" />

      <button type="button" className="tb-shield" onClick={onShield}>
        <ShieldIcon />
        <span>Shield</span>
      </button>
    </div>
  )
}
