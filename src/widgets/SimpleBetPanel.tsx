import { useState } from 'react'
import './SimpleBetPanel.css'

export interface SimpleBetPanelProps {
  pair?: string
  price?: string
  pricePnlPct?: number
  fundBalance?: string
  initialBet?: number
  initialLeverage?: number
  estimatedEntry?: string
  liqIfLong?: string
  marginRequired?: string
  openingFee?: string
  onUp?: (state: { bet: number; leverage: number }) => void
  onDown?: (state: { bet: number; leverage: number }) => void
  onDeposit?: () => void
  onWithdraw?: () => void
  onTopUpFund?: () => void
}

const PRESETS = [50, 250, 500, 1001]
const MAX_LEVERAGE = 1001

function ChevDown({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 10l5 5 5-5z" />
    </svg>
  )
}
function PlusCircle() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
    </svg>
  )
}
function ArrowUp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 4l-7 7h4v9h6v-9h4z" />
    </svg>
  )
}
function ArrowDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 20l7-7h-4V4h-6v9H5z" />
    </svg>
  )
}
function HelpCircle() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm.75 16h-1.5v-1.5h1.5V18zm1.76-6.25l-.67.69c-.54.55-.84 1-.84 2.06h-1.5v-.5c0-.74.3-1.41.84-1.95l.93-.95c.27-.26.42-.63.42-1.05 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5H9a3 3 0 116 0c0 .66-.27 1.26-.7 1.7z" />
    </svg>
  )
}
function Wallet() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21 7H5a1 1 0 010-2h13V3H5a3 3 0 00-3 3v12a3 3 0 003 3h16a1 1 0 001-1V8a1 1 0 00-1-1zm-3 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </svg>
  )
}
function Triangle() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
      <path d="M6 2l5 8H1z" />
    </svg>
  )
}

export function SimpleBetPanel({
  pair = 'BTCUSD',
  price = '78,053.6',
  pricePnlPct = 0.93,
  fundBalance = '20 USDT',
  initialBet = 10,
  initialLeverage = 10,
  estimatedEntry = '$67,413.98',
  liqIfLong = '$66,092.23 (-2.0%)',
  marginRequired = '$400 USDT',
  openingFee = '$10.00 (0.05%)',
  onUp,
  onDown,
  onDeposit,
  onWithdraw,
  onTopUpFund,
}: SimpleBetPanelProps) {
  const [bet, setBet] = useState(initialBet)
  const [leverage, setLeverage] = useState(initialLeverage)

  const fillPct = Math.min(100, (leverage / MAX_LEVERAGE) * 100)
  const zone = leverage <= 50 ? 'safe' : leverage <= 250 ? 'warn' : 'danger'
  const zoneLabel = zone === 'safe' ? '🌿 Safe zone' : zone === 'warn' ? '⚠️ Caution' : '🔥 Danger zone'

  const applyPct = (frac: number) => {
    // Use the (mock) fund balance number portion for shortcut math.
    const fundNum = Number(fundBalance.replace(/[^\d.]/g, ''))
    if (Number.isFinite(fundNum) && fundNum > 0) setBet(Math.round(fundNum * frac * 100) / 100)
  }

  return (
    <section className="sbp-root" aria-label={`Simple bet panel · ${pair}`}>
      {/* Symbol header */}
      <div className="sbp-head">
        <button type="button" className="sbp-head-left">
          <span className="sbp-token-icon">BTC</span>
          <span className="sbp-pair">{pair}</span>
          <ChevDown size={20} />
        </button>
        <div className="sbp-head-right">
          <span className="sbp-head-price">{price}</span>
          <span className="sbp-head-pnl">
            <Triangle />
            {pricePnlPct.toFixed(2)}%
          </span>
        </div>
      </div>

      {/* Form body */}
      <div className="sbp-body">
        {/* My Perp Fund + bet input */}
        <div className="sbp-section">
          <div className="sbp-section-head">
            <span className="sbp-pretitle">My Perp Fund</span>
            <button type="button" className="sbp-fund-chip" onClick={onTopUpFund} aria-label="Top up fund">
              <Wallet />
              <span className="sbp-fund-amt">{fundBalance}</span>
              <PlusCircle />
            </button>
          </div>

          <div className="sbp-bet-field">
            <span className="sbp-bet-label">My Bet</span>
            <span className="sbp-bet-input-wrap">
              <input
                className="sbp-bet-input"
                type="number"
                inputMode="decimal"
                value={bet}
                onChange={(e) => setBet(Math.max(0, Number(e.target.value)))}
                aria-label="Bet amount"
              />
              <span className="sbp-bet-token">
                <span className="sbp-bet-token-icon">USDT</span>
                <span className="sbp-bet-token-sym">USDT</span>
                <ChevDown size={14} />
              </span>
            </span>
          </div>

          <div className="sbp-pct-row">
            <button type="button" className="sbp-pct-btn" onClick={() => applyPct(0.25)}>25%</button>
            <span className="sbp-pct-divider" />
            <button type="button" className="sbp-pct-btn" onClick={() => applyPct(0.50)}>50%</button>
            <span className="sbp-pct-divider" />
            <button type="button" className="sbp-pct-btn" onClick={() => applyPct(1.00)}>MAX</button>
          </div>
        </div>

        {/* Leverage */}
        <div className="sbp-section">
          <span className="sbp-pretitle">Leverage</span>

          <div className="sbp-lev-row">
            <span className="sbp-lev-value">{leverage}x</span>
            <span className={`sbp-zone ${zone === 'warn' ? 'sbp-zone--warn' : zone === 'danger' ? 'sbp-zone--danger' : ''}`}>
              {zoneLabel}
              <span className="sbp-zone-info"><HelpCircle /></span>
            </span>
          </div>

          <div className="sbp-lev-track" aria-hidden>
            <span className="sbp-lev-fill" style={{ width: `${fillPct}%` }} />
            <span className="sbp-lev-thumb" style={{ left: `${fillPct}%` }} />
            <input
              className="sbp-lev-input"
              type="range"
              min={1}
              max={MAX_LEVERAGE}
              value={leverage}
              onChange={(e) => setLeverage(Number(e.target.value))}
              aria-label="Leverage"
            />
          </div>

          <div className="sbp-lev-tabs" role="tablist">
            <span className="sbp-lev-custom">
              <input
                className="sbp-lev-custom-input"
                type="number"
                min={1}
                max={MAX_LEVERAGE}
                value={leverage}
                onChange={(e) => setLeverage(Math.max(1, Math.min(MAX_LEVERAGE, Number(e.target.value))))}
                aria-label="Custom leverage"
              />
              <span className="sbp-lev-custom-suffix">x</span>
            </span>
            {PRESETS.map((p) => (
              <button
                key={p}
                type="button"
                role="tab"
                aria-selected={leverage === p}
                className={`sbp-lev-tab${leverage === p ? ' sbp-lev-tab--active' : ''}`}
                onClick={() => setLeverage(p)}
              >
                {p}x
              </button>
            ))}
          </div>
        </div>

        {/* Duration */}
        <div className="sbp-duration-row">
          <span className="sbp-pretitle">Duration</span>
          <button type="button" className="sbp-fund-chip">
            <span className="sbp-fund-amt" style={{ fontSize: 14 }}>Perpetual</span>
            <ChevDown size={14} />
          </button>
        </div>
      </div>

      {/* Stats summary + UP/DOWN */}
      <div className="sbp-stats-card" style={{ margin: '0 20px' }}>
        <div className="sbp-stats-list">
          <div className="sbp-stats-row">
            <span className="sbp-stats-label">Estimated Entry</span>
            <span className="sbp-stats-value">{estimatedEntry}</span>
          </div>
          <div className="sbp-stats-row">
            <span className="sbp-stats-label">Liquidation if long</span>
            <span className="sbp-stats-value sbp-stats-value--danger">{liqIfLong}</span>
          </div>
          <div className="sbp-stats-row">
            <span className="sbp-stats-label">Margin required</span>
            <span className="sbp-stats-value">{marginRequired}</span>
          </div>
          <div className="sbp-stats-row">
            <span className="sbp-stats-label">Opening fee</span>
            <span className="sbp-stats-value">{openingFee}</span>
          </div>
        </div>

        <div className="sbp-direction-row">
          <button
            type="button"
            className="sbp-direction-btn sbp-direction-btn--up"
            onClick={() => onUp?.({ bet, leverage })}
          >
            <ArrowUp />
            UP
          </button>
          <button
            type="button"
            className="sbp-direction-btn sbp-direction-btn--down"
            onClick={() => onDown?.({ bet, leverage })}
          >
            <ArrowDown />
            DOWN
          </button>
        </div>
      </div>

      {/* Deposit / Withdraw */}
      <div className="sbp-dw-row">
        <button type="button" className="sbp-dw-btn sbp-dw-btn--primary" onClick={onDeposit}>Deposit</button>
        <button type="button" className="sbp-dw-btn sbp-dw-btn--secondary" onClick={onWithdraw}>Withdraw</button>
      </div>

      {/* Unrealized PnL */}
      <div className="sbp-pnl-card">
        <span className="sbp-pnl-label">
          Unrealized PnL <HelpCircle />
        </span>
        <span className="sbp-pnl-value">$0</span>
      </div>
    </section>
  )
}
