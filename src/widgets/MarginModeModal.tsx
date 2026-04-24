import { useState } from 'react'
import { createPortal } from 'react-dom'
import '../ui/perps.css'
import './MarginModeModal.css'

export type MarginMode = 'cross' | 'isolated'

export interface MarginModeModalProps {
  open: boolean
  pair?: string
  current: MarginMode
  onConfirm: (mode: MarginMode) => void
  onClose: () => void
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4.17 10.59 8 14.41l7.83-7.83"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MarginModeModal({ open, pair = 'BTC-USDT', current, onConfirm, onClose }: MarginModeModalProps) {
  const [selected, setSelected] = useState<MarginMode>(current)

  if (!open) return null

  const descriptionText = selected === 'cross'
    ? 'All cross positions with the same margin asset share the same asset balance. During liquidation, trades may lose all margin and all corresponding positions under the asset.'
    : 'Isolated margin mode limits your risk to the initial margin deposited for that position. Each position has its own dedicated margin balance.'

  const modal = (
    <>
      {/* Overlay */}
      <div className="mm-overlay" onClick={onClose} aria-hidden="true" />

      {/* Modal */}
      <div
        className="mm-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mm-title"
      >
        {/* Header */}
        <div className="mm-header">
          <h2 id="mm-title" className="mm-title">{pair} Margin Mode</h2>
          <button type="button" className="mm-close" onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        {/* Mode options */}
        <div className="mm-options">
          {(['cross', 'isolated'] as MarginMode[]).map((mode) => {
            const isSelected = selected === mode
            return (
              <button
                key={mode}
                type="button"
                className={`mm-option${isSelected ? ' mm-option--selected' : ''}`}
                onClick={() => setSelected(mode)}
              >
                <span className="mm-option-label">
                  {mode === 'cross' ? 'Cross' : 'Isolated'}
                </span>
                <span className={`mm-option-check${isSelected ? ' mm-option-check--on' : ''}`}>
                  {isSelected && <CheckIcon />}
                </span>
              </button>
            )
          })}
        </div>

        {/* Description */}
        <p className="mm-description">{descriptionText}</p>

        {/* Footnote */}
        <ul className="mm-footnote">
          <li>Switching the margin mode will only apply to the current selected contract</li>
        </ul>

        {/* Confirm */}
        <button
          type="button"
          className="mm-confirm"
          onClick={() => { onConfirm(selected); onClose() }}
        >
          Confirm
        </button>
      </div>
    </>
  )

  return createPortal(modal, document.body)
}
