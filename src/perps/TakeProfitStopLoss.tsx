import { useState } from 'react'
import '../ui/perps.css'
import { Button } from '../ui/components/Button'
import { Checkbox } from '../ui/components/Checkbox'
import { Tag } from '../ui/components/Tag'
import { Input, InputGroup } from '../ui/components/Input'

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
            <span className="p-value-sm" style={{ color: 'var(--pcs-colors-primary)' }}>
              ${entryPrice.toLocaleString()}
            </span>
            <Tag variant={direction === 'long' ? 'successLowContrast' : 'failureLowContrast'} scale="sm">
              {direction.toUpperCase()}
            </Tag>
          </div>
        </div>

        {/* Take Profit */}
        <div
          className="p-card-alt"
          style={{ marginBottom: 12, opacity: tpEnabled ? 1 : 0.5 }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <p className="p-label" style={{ color: 'var(--pcs-colors-success)', fontWeight: 600 }}>
              ▲ Take Profit
            </p>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
              <span className="p-label">Enable</span>
              <Checkbox
                scale="xs"
                checked={tpEnabled}
                onChange={(e) => setTpEnabled(e.target.checked)}
              />
            </label>
          </div>

          <InputGroup startIcon={<span style={{ color: 'var(--pcs-colors-text-subtle)', fontWeight: 600 }}>$</span>}>
            <Input
              type="number"
              placeholder="Price"
              value={tpPrice}
              disabled={!tpEnabled}
              onChange={(e) => setTpPrice(e.target.value)}
            />
          </InputGroup>

          <div style={{ display: 'flex', gap: 4, marginBottom: 10, marginTop: 8 }}>
            {PCT_SHORTCUTS_TP.map((p) => (
              <Button
                key={p}
                variant="text"
                scale="sm"
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
            <p className="p-label" style={{ color: 'var(--pcs-colors-failure)', fontWeight: 600 }}>
              ▼ Stop Loss
            </p>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
              <span className="p-label">Enable</span>
              <Checkbox
                scale="xs"
                checked={slEnabled}
                onChange={(e) => setSlEnabled(e.target.checked)}
              />
            </label>
          </div>

          <InputGroup startIcon={<span style={{ color: 'var(--pcs-colors-text-subtle)', fontWeight: 600 }}>$</span>}>
            <Input
              type="number"
              placeholder="Price"
              value={slPrice}
              disabled={!slEnabled}
              onChange={(e) => setSlPrice(e.target.value)}
            />
          </InputGroup>

          <div style={{ display: 'flex', gap: 4, marginBottom: 10, marginTop: 8 }}>
            {PCT_SHORTCUTS_SL.map((p) => (
              <Button
                key={p}
                variant="text"
                scale="sm"
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
