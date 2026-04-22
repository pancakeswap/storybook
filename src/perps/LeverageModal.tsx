import { useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { BunnySlider } from './BunnySlider'
import '../ui/perps.css'
import './MarginModeModal.css'   // reuse overlay + shared modal shell
import './LeverageModal.css'

const MIN_LEV = 1
const MAX_LEV = 125
// 5 slider marks → 1x, 32x, 63x, 94x, 125x
const LEV_MARKS = [0, 25, 50, 75, 100]

function leverageFromPct(pct: number) {
  return Math.max(MIN_LEV, Math.round(MIN_LEV + (pct / 100) * (MAX_LEV - MIN_LEV)))
}
function pctFromLeverage(lev: number) {
  return Math.round(((lev - MIN_LEV) / (MAX_LEV - MIN_LEV)) * 100)
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export interface LeverageModalProps {
  open: boolean
  pair?: string
  current: number           // current leverage (e.g. 50)
  onConfirm: (lev: number) => void
  onClose: () => void
}

export function LeverageModal({ open, pair = 'BTC-USDT', current, onConfirm, onClose }: LeverageModalProps) {
  const [sliderPct, setSliderPct] = useState(() => pctFromLeverage(current))
  const leverage = leverageFromPct(sliderPct)

  // Max position (placeholder — scales inversely with leverage for demo)
  const maxPosition = Math.round(5000 / leverage * current).toLocaleString()

  const decrement = useCallback(() => {
    setSliderPct((p) => pctFromLeverage(Math.max(MIN_LEV, leverageFromPct(p) - 1)))
  }, [])

  const increment = useCallback(() => {
    setSliderPct((p) => pctFromLeverage(Math.min(MAX_LEV, leverageFromPct(p) + 1)))
  }, [])

  if (!open) return null

  const modal = (
    <>
      <div className="mm-overlay" onClick={onClose} aria-hidden="true" />

      <div className="mm-modal lm-modal" role="dialog" aria-modal="true" aria-labelledby="lm-title">

        {/* Header */}
        <div className="mm-header">
          <h2 id="lm-title" className="mm-title">{pair} Adjust Leverage</h2>
          <button type="button" className="mm-close" onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        {/* Stepper row: − | NX | + */}
        <div className="lm-stepper">
          <button type="button" className="lm-step-btn" onClick={decrement} aria-label="Decrease leverage">
            −
          </button>
          <div className="lm-value-field">
            {leverage}X
          </div>
          <button type="button" className="lm-step-btn" onClick={increment} aria-label="Increase leverage">
            +
          </button>
        </div>

        {/* Bunny slider */}
        <BunnySlider
          value={sliderPct}
          onChange={setSliderPct}
          marks={LEV_MARKS}
        />

        {/* Max position info */}
        <div className="lm-info">
          <p className="lm-info-label">Maximum position at current leverage:</p>
          <p className="lm-info-value">{maxPosition} USDT</p>
        </div>

        {/* Footnote */}
        <ul className="mm-footnote">
          <li>Please note that setting higher leverage increases the risk of liquidation.</li>
        </ul>

        {/* Confirm */}
        <button
          type="button"
          className="mm-confirm"
          onClick={() => { onConfirm(leverage); onClose() }}
        >
          Confirm
        </button>

      </div>
    </>
  )

  return createPortal(modal, document.body)
}
