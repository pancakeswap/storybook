import { useState } from 'react'
import '../ui/perps.css'

const PCT_SHORTCUTS = [25, 50, 75, 100]

export interface RemoveLiquidityProps {
  alpBalance?: string
  alpPrice?: string
  onRedeem?: (amount: string) => void
}

export function RemoveLiquidity({
  alpBalance = '1,234.5678',
  alpPrice = '1.0192',
  onRedeem,
}: RemoveLiquidityProps) {
  const [amount, setAmount] = useState('')
  const [pct, setPct] = useState(0)

  const rawBalance = parseFloat(alpBalance.replace(/,/g, '')) || 0
  const rawAmount = parseFloat(amount) || 0

  const handlePct = (p: number) => {
    setPct(p)
    setAmount(((rawBalance * p) / 100).toFixed(4))
  }

  const handleAmountChange = (val: string) => {
    setAmount(val)
    const n = parseFloat(val) || 0
    setPct(rawBalance > 0 ? Math.min(100, (n / rawBalance) * 100) : 0)
  }

  const estimatedUsdc =
    rawAmount > 0 ? (rawAmount * parseFloat(alpPrice)).toFixed(2) : '—'

  const isValid = rawAmount > 0 && rawAmount <= rawBalance

  return (
    <div className="perps-root" style={{ padding: 24, maxWidth: 420 }}>
      <div className="p-card">
        <p className="p-section-title">Remove Liquidity</p>

        {/* Balance display */}
        <div
          className="p-card-alt"
          style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}
        >
          <div>
            <p className="p-label">ALP Balance</p>
            <p className="p-value" style={{ marginTop: 4 }}>
              {alpBalance} ALP
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p className="p-label">ALP Price</p>
            <p className="p-value" style={{ marginTop: 4, color: 'var(--p-primary)' }}>
              ${alpPrice}
            </p>
          </div>
        </div>

        {/* ALP amount input */}
        <p className="p-label" style={{ marginBottom: 6 }}>
          ALP Amount to Burn
        </p>
        <div className="p-input-wrap" style={{ marginBottom: 10 }}>
          <span style={{ color: 'var(--p-text-muted)', fontSize: 14 }}>ALP</span>
          <input
            className="p-input-field"
            type="number"
            placeholder="0.0000"
            value={amount}
            onChange={(e) => handleAmountChange(e.target.value)}
          />
          <button className="p-btn-ghost" onClick={() => handlePct(100)}>
            MAX
          </button>
        </div>

        {/* Percentage shortcuts */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
          {PCT_SHORTCUTS.map((p) => (
            <button
              key={p}
              className={`p-btn-ghost${pct === p ? ' active' : ''}`}
              style={{ flex: 1 }}
              onClick={() => handlePct(p)}
            >
              {p === 100 ? 'Max' : `${p}%`}
            </button>
          ))}
        </div>

        {/* Slider */}
        <input
          type="range"
          className="p-slider"
          min={0}
          max={100}
          step={1}
          value={pct}
          aria-label="ALP percentage to redeem"
          onChange={(e) => handlePct(Number(e.target.value))}
          style={{ marginBottom: 16 }}
        />

        {/* Estimated output */}
        <div className="p-card-alt" style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p className="p-label">Estimated USDC Received</p>
            <p className="p-value" style={{ color: 'var(--p-long)' }}>
              {estimatedUsdc !== '—' ? `$${estimatedUsdc}` : '—'}
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
            <p className="p-label">Redeeming</p>
            <p className="p-label">
              {rawAmount > 0 ? rawAmount.toFixed(4) : '0'} ALP ({pct.toFixed(1)}%)
            </p>
          </div>
        </div>

        <hr className="p-divider" />

        <button
          className="p-btn p-btn-primary p-btn-full"
          disabled={!isValid}
          onClick={() => isValid && onRedeem?.(amount)}
        >
          Confirm Burn ALP
        </button>

        {rawAmount > rawBalance && (
          <p className="p-label p-short" style={{ textAlign: 'center', marginTop: 8 }}>
            Insufficient ALP balance
          </p>
        )}
      </div>
    </div>
  )
}
