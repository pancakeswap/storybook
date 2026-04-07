import { useState } from 'react'
import '../ui/perps.css'
import { Button, Badge, Input } from '../ui'

export interface TpSlProps {
  entryPrice?: number
  direction?: 'long' | 'short'
  positionSize?: number
  onConfirm?: (tp: string, sl: string) => void
}

function calcPnl(
  direction: 'long' | 'short',
  entry: number,
  target: number,
  size: number,
): string {
  if (!entry || !target || !size) return '—'
  const priceDiff = direction === 'long' ? target - entry : entry - target
  return ((priceDiff / entry) * size).toFixed(2)
}

const PCT_SHORTCUTS_TP = ['+5%', '+10%', '+25%', '+50%']
const PCT_SHORTCUTS_SL = ['-5%', '-10%', '-20%', '-50%']

export function TakeProfitStopLoss({
  entryPrice = 65000,
  direction = 'long',
  positionSize = 1000,
  onConfirm,
}: TpSlProps) {
  const [tpEnabled, setTpEnabled] = useState(true)
  const [slEnabled, setSlEnabled] = useState(true)
  const [tpPrice, setTpPrice] = useState('')
  const [slPrice, setSlPrice] = useState('')

  const applyPct = (pct: string, setter: (v: string) => void) => {
    const p = parseFloat(pct) / 100
    setter((entryPrice * (1 + p)).toFixed(2))
  }

  const tpPnl = tpEnabled && tpPrice
    ? calcPnl(direction, entryPrice, parseFloat(tpPrice), positionSize)
    : '—'

  const slPnl = slEnabled && slPrice
    ? calcPnl(direction, entryPrice, parseFloat(slPrice), positionSize)
    : '—'

  const tpPnlNum = parseFloat(tpPnl)
  const slPnlNum = parseFloat(slPnl)

  return (
    <div className="perps-root" style={{ padding: 24, maxWidth: 380 }}>
      <div className="p-card">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <p className="p-section-title" style={{ margin: 0 }}>TP / SL</p>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span className="p-label">Entry:</span>
            <span className="p-value-sm" style={{ color: 'var(--p-primary)' }}>
              ${entryPrice.toLocaleString()}
            </span>
            <Badge variant={direction}>
              {direction.toUpperCase()}
            </Badge>
          </div>
        </div>

        {/* Take Profit */}
        <div
          className="p-card-alt"
          style={{ marginBottom: 12, opacity: tpEnabled ? 1 : 0.5 }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <p className="p-label" style={{ color: 'var(--p-long)', fontWeight: 600 }}>
              ▲ Take Profit
            </p>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
              <span className="p-label">Enable</span>
              <input
                type="checkbox"
                checked={tpEnabled}
                onChange={(e) => setTpEnabled(e.target.checked)}
                style={{ accentColor: 'var(--p-long)', width: 14, height: 14 }}
              />
            </label>
          </div>

          <Input
            prefix="$"
            height={44}
            inputProps={{
              type: 'number',
              placeholder: 'Price',
              value: tpPrice,
              disabled: !tpEnabled,
              onChange: (e) => setTpPrice(e.target.value),
              style: { fontSize: 14 },
            }}
          />

          <div style={{ display: 'flex', gap: 4, marginBottom: 10, marginTop: 8 }}>
            {PCT_SHORTCUTS_TP.map((p) => (
              <Button
                key={p}
                variant="ghost"
                style={{ flex: 1 }}
                disabled={!tpEnabled}
                onClick={() => applyPct(p, setTpPrice)}
              >
                {p}
              </Button>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p className="p-label">Est. PnL</p>
            <p className={`p-value-sm ${!isNaN(tpPnlNum) && tpPnlNum >= 0 ? 'p-pnl-pos' : 'p-pnl-neg'}`}>
              {tpPnl !== '—' ? `${tpPnlNum >= 0 ? '+' : ''}$${tpPnl}` : '—'}
            </p>
          </div>
        </div>

        {/* Stop Loss */}
        <div
          className="p-card-alt"
          style={{ marginBottom: 20, opacity: slEnabled ? 1 : 0.5 }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <p className="p-label" style={{ color: 'var(--p-short)', fontWeight: 600 }}>
              ▼ Stop Loss
            </p>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
              <span className="p-label">Enable</span>
              <input
                type="checkbox"
                checked={slEnabled}
                onChange={(e) => setSlEnabled(e.target.checked)}
                style={{ accentColor: 'var(--p-short)', width: 14, height: 14 }}
              />
            </label>
          </div>

          <Input
            prefix="$"
            height={44}
            inputProps={{
              type: 'number',
              placeholder: 'Price',
              value: slPrice,
              disabled: !slEnabled,
              onChange: (e) => setSlPrice(e.target.value),
              style: { fontSize: 14 },
            }}
          />

          <div style={{ display: 'flex', gap: 4, marginBottom: 10, marginTop: 8 }}>
            {PCT_SHORTCUTS_SL.map((p) => (
              <Button
                key={p}
                variant="ghost"
                style={{ flex: 1 }}
                disabled={!slEnabled}
                onClick={() => applyPct(p, setSlPrice)}
              >
                {p}
              </Button>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p className="p-label">Est. PnL</p>
            <p className={`p-value-sm ${!isNaN(slPnlNum) && slPnlNum >= 0 ? 'p-pnl-pos' : 'p-pnl-neg'}`}>
              {slPnl !== '—' ? `${slPnlNum >= 0 ? '+' : ''}$${slPnl}` : '—'}
            </p>
          </div>
        </div>

        <button
          className="p-btn p-btn-primary p-btn-full"
          onClick={() => onConfirm?.(tpPrice, slPrice)}
        >
          Confirm TP / SL
        </button>
      </div>
    </div>
  )
}
