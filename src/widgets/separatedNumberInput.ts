import { useRef } from 'react'
import type React from 'react'

/**
 * Format a raw decimal string with thousands separators while preserving
 * what the user is typing — keeps trailing dots ("12.") and decimal zeros
 * ("12.50") intact so the input doesn't fight the user's keystrokes.
 *
 * Used by the TP/SL surfaces (OrderForm + TpSlModal) where the underlying
 * state stores the raw decimal (so calculations stay correct) and the
 * input renders the formatted display.
 */
export const formatWithThousandSeparator = (raw: string): string => {
  if (!raw) return ''
  const negative = raw.startsWith('-')
  const abs = negative ? raw.slice(1) : raw
  const [intPart = '', decPart] = abs.split('.')
  const intFormatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const out = decPart !== undefined ? `${intFormatted}.${decPart}` : intFormatted
  return negative ? `-${out}` : out
}

/**
 * Strip a leading '-' if present. Used by TP-PnL inputs where a positive
 * value is the only semantically valid input (a "take profit" loss makes
 * no sense). Empty / lone-minus pass through unchanged so the user can
 * still clear the field or type a transient state.
 */
export const ensurePositive = (v: string): string => {
  if (v === '' || v === '-') return ''
  return v.startsWith('-') ? v.slice(1) : v
}

/**
 * Force a leading '-' on any non-zero value. Used by SL-PnL inputs where
 * a positive value would be a "stop loss into profit" — nonsensical. Zero
 * stays unsigned (avoids displaying "-0"); a lone '-' is kept transiently
 * so the caret can sit between sign and digits while the user types.
 */
export const ensureNegative = (v: string): string => {
  if (v === '' || v === '-') return v
  const n = Number(v)
  if (!Number.isFinite(n) || n === 0) return v.startsWith('-') ? v.slice(1) : v
  return v.startsWith('-') ? v : `-${v}`
}

interface SeparatedNumberInputBindings {
  ref: React.RefObject<HTMLInputElement>
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

/**
 * Bind a raw decimal-string state to an `<input>` so the input renders
 * with thousands separators while the state stays comma-free. Spread the
 * returned object onto any `<input>`-like element.
 *
 * The hook re-aligns the caret after the comma reflow on each keystroke
 * (using the digit count before the caret as the anchor) so typing
 * through a separator feels natural and inserts/deletes don't bounce
 * the cursor to the end.
 *
 * Validation rejects non-numeric input — the regex allows an optional
 * leading minus, optional digits, an optional single decimal point, and
 * optional trailing digits. Empty string is preserved (so backspace can
 * fully clear the field).
 */
export function useSeparatedNumberInput(
  rawValue: string,
  onRawChange: (raw: string) => void,
): SeparatedNumberInputBindings {
  const ref = useRef<HTMLInputElement>(null)
  const value = formatWithThousandSeparator(rawValue)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    const newDisplay = target.value
    const caret = target.selectionStart ?? newDisplay.length
    // Anchor caret on digits + decimal point only; ignore commas AND minus
    // sign so callers that flip the sign (TP/SL PnL) don't bounce the cursor.
    const digitsBeforeCaret = newDisplay.slice(0, caret).replace(/[,-]/g, '').length
    const stripped = newDisplay.replace(/,/g, '')
    if (stripped !== '' && !/^-?\d*\.?\d*$/.test(stripped)) return
    onRawChange(stripped)
    requestAnimationFrame(() => {
      const node = ref.current
      if (!node) return
      // Read the post-render display so caret math survives any normalization
      // the consumer applied (sign flips, prefix injection, etc.).
      const next = node.value
      let pos = 0
      let count = 0
      while (pos < next.length && count < digitsBeforeCaret) {
        if (next[pos] !== ',' && next[pos] !== '-') count += 1
        pos += 1
      }
      // If the caret would land before a leading '-' (no digit consumed),
      // step past it so the cursor sits at the natural typing position.
      if (pos === 0 && next.startsWith('-')) pos = 1
      node.setSelectionRange(pos, pos)
    })
  }
  return { ref, value, onChange }
}
