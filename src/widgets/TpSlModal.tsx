import React, { useEffect, useMemo, useState } from 'react'
import { styled } from 'styled-components'
import { Box, Flex } from '../primitives/Box'
import { Button } from '../primitives/Button'
import { Input } from '../primitives/Input'
import { Text } from '../primitives/Text'
import Modal from '../primitives/Modal/Modal'
import { ModalV2 } from '../primitives/Modal/ModalV2'
import { BunnySlider } from './BunnySlider'
import { formatWithThousandSeparator, useSeparatedNumberInput } from './separatedNumberInput'

export type PositionSide = 'LONG' | 'SHORT'
export type TriggerSource = 'Last' | 'Mark'
export type GainLossUnit = '%' | 'USDT'

export interface TpSlIntent {
  symbol: string
  /** Exit-order side — opposite of the position's side. */
  closeSide: 'BUY' | 'SELL'
  /** Trigger price for the TP leg. Empty string → skip TP leg. */
  tpPrice: string
  /** Trigger price for the SL leg. Empty string → skip SL leg. */
  slPrice: string
  /** Quantity to close (base asset, absolute). */
  qty: string
  closePosition: boolean
  /**
   * Which oracle the TP/SL trigger compares against:
   *   - `'Last'` → last traded price (Aster `CONTRACT_PRICE`).
   *   - `'Mark'` → mark price (Aster `MARK_PRICE`).
   * Picked from the Last/Mark dropdown in the modal header. The
   * consumer maps this onto `placeOrder`'s `workingType` field.
   */
  triggerSource: TriggerSource
}

export interface TpSlModalProps {
  /** Controlled open state. */
  isOpen: boolean
  symbol: string
  positionSide: PositionSide
  /** Absolute position size (base asset). */
  qty: number
  /** Position leverage shown in the summary row, e.g. 20 → "BTCUSDT 20x". */
  leverage?: number
  /** Display symbol of the base asset, e.g. "BTC" — used as the amount-input suffix. */
  baseAsset?: string
  /**
   * Display unit for the Amount input + Position-amount summary.
   *   - `'BASE'` (default) — input typed in base asset (e.g. BTC), suffix is `baseAsset`.
   *   - `'QUOTE'` — input typed in quote asset (USDT), suffix is `quoteAsset`.
   * The slider always represents 0–100% of the open position; switching
   * just changes the displayed amount and the conversion. The signed
   * `intent.qty` always returns base-asset units (the API requires it).
   */
  sizeUnit?: 'BASE' | 'QUOTE'
  /**
   * Quote asset symbol (e.g. "USDT", "USDC"). Suffixed onto the Entry /
   * Mark summary rows, the price-summary suffix, and the PnL field
   * labels so the user always sees which token the numbers are
   * denominated in. Defaults to "USDT".
   */
  quoteAsset?: string
  entryPrice: number
  /** Resolved mark price — displayed in the summary row. */
  markPrice: number
  /**
   * Display precision for the Entry / Mark figures and for the trigger
   * price computed from a PnL input. Defaults to 4 to match Aster's UI;
   * pass the symbol's actual `pricePrecision` for finer-grained tokens.
   */
  pricePrecision?: number
  /** Existing TP trigger price for this position, or undefined if none set. */
  initialTpPrice?: number | string
  /** Existing SL trigger price for this position, or undefined if none set. */
  initialSlPrice?: number | string
  /**
   * Trigger source seed for the Last/Mark dropdown. When the user is
   * editing an existing TP/SL, the consumer can pre-select the source
   * the original order used (`CONTRACT_PRICE` → `'Last'`,
   * `MARK_PRICE` → `'Mark'`). Defaults to `'Last'` when omitted.
   */
  initialTriggerSource?: TriggerSource
  /**
   * Cancel the existing TP order for this position. Rendered as a
   * "Cancel" link beside the Take Profit section header when an existing
   * TP is in place. Omit to hide the affordance.
   */
  onCancelTpOrder?: () => Promise<void> | void
  /** Cancel the existing SL order for this position. */
  onCancelSlOrder?: () => Promise<void> | void
  onConfirm: (intent: TpSlIntent) => Promise<void> | void
  onClose: () => void
  /** Translator. */
  t?: (key: string) => string
}

// ── Layout ────────────────────────────────────────────────────────

const Body = styled(Flex)`
  flex-direction: column;
  gap: 16px;
  min-width: 340px;
  max-width: 440px;

  @media (max-width: 967.98px) {
    min-width: 0;
    max-width: none;
    width: 100%;
  }
`

const SummaryGroup = styled(Flex)`
  flex-direction: column;
  gap: 8px;
  align-self: stretch;
`

const SummaryRow = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`

const SummaryLabel = styled(Text).attrs({ fontSize: '14px', color: 'textSubtle' })``

const SummaryValue = styled(Text).attrs({ fontSize: '14px' })`
  font-variant-numeric: tabular-nums;
`

const SymbolValue = styled(Text).attrs({ fontSize: '16px', bold: true })<{ $side: PositionSide }>`
  color: ${({ theme, $side }) => ($side === 'LONG' ? theme.colors.success : theme.colors.failure)};
`

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.colors.cardBorder};
`

// ── TP/SL section ─────────────────────────────────────────────────

const SectionHeader = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`

const TriggerSourceBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-family: Kanit;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  cursor: pointer;
  &:hover {
    filter: brightness(1.08);
  }
`

const ChevronGlyph: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M7.25878 9.75856L9.41712 11.9169C9.74212 12.2419 10.2671 12.2419 10.5921 11.9169L12.7504 9.75856C13.2754 9.23356 12.9004 8.33356 12.1588 8.33356H7.84212C7.10045 8.33356 6.73378 9.23356 7.25878 9.75856Z" />
  </svg>
)

const InputRow = styled(Flex)`
  gap: 8px;
  align-items: stretch;
  align-self: stretch;
`

/* Single TP / SL input shell — matches the input-primary surface used
   across the perps app, with a visible secondary-color ring on the
   active field so focus reads clearly. */
const InputShell = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1 1 0;
  min-width: 0;
  padding: 8px 12px;
  background: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-radius: 12px;
  box-shadow: inset 0 2px 0 0 rgba(0, 0, 0, 0.06);
  transition: border-color 0.12s, box-shadow 0.12s;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.secondary};
    /* Canonical PCS focus shadow: 1px sharp + 4px soft halo. Reads as a
       single clean ring instead of stacking against the border. */
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`

const NakedInput = styled(Input)`
  flex: 1 1 0;
  min-width: 0;
  padding: 0;
  height: auto;
  background: transparent;
  border: 0;
  /* PCS Input primitive bakes a subtle inset shadow into every input
     and a wider focus shadow on :focus, both of which would compete
     with InputShell's focus halo. !important is needed because the
     PCS rules sit at the same specificity. */
  box-shadow: none !important;
  font-family: Kanit;
  font-size: 14px;
  font-variant-numeric: tabular-nums;
  color: ${({ theme }) => theme.colors.text};
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none !important;
  }
`

const CancelLink = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.failure};
  text-decoration: underline;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const UnitShell = styled(InputShell)`
  flex: 0 0 120px;
  justify-content: space-between;
`

const UnitToggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-family: Kanit;
  font-size: 14px;
  cursor: pointer;
`

const Helper = styled(Text).attrs({ fontSize: '14px' })`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.5;
  align-self: stretch;
`

// ── Amount section ────────────────────────────────────────────────

const AmountField = styled(InputShell)`
  flex: 1 0 auto;
  align-self: stretch;
  padding: 8px 16px;
  border-radius: 16px;
`

const AmountAsset = styled.span`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-family: Kanit;
  font-size: 16px;
`

/* Editable amount field — uses "Quantity" as the placeholder so the
   word disappears the moment the user types. Right-anchored so the
   typed value sits flush with the asset suffix on the right edge. */
const AmountInput = styled(NakedInput)`
  font-size: 16px;
  text-align: left;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`

const SliderWrap = styled(Box)`
  align-self: stretch;
  width: 100%;
`

// ── Component ─────────────────────────────────────────────────────

const identity = (s: string) => s

export const TpSlModal: React.FC<TpSlModalProps> = ({
  isOpen,
  symbol,
  positionSide,
  qty,
  leverage,
  baseAsset,
  quoteAsset = 'USDT',
  sizeUnit = 'BASE',
  entryPrice,
  markPrice,
  pricePrecision = 4,
  initialTpPrice,
  initialSlPrice,
  initialTriggerSource,
  onCancelTpOrder,
  onCancelSlOrder,
  onConfirm,
  onClose,
  t = identity,
}) => {
  const dir = positionSide === 'LONG' ? 1 : -1

  const [tpPrice, setTpPrice] = useState('')
  const [tpPnl, setTpPnl] = useState('')
  const [slPrice, setSlPrice] = useState('')
  const [slPnl, setSlPnl] = useState('')
  /* User-facing Gain / Loss strings — what the input shows. Always
     positive magnitude (gain/loss is implied by which field). Format
     follows `gainUnit` / `lossUnit`: in USDT mode it's just the absolute
     pnl; in % mode it's |pnl| / margin × 100. The signed `tpPnl` /
     `slPnl` stay as the source of truth in USDT — these texts derive
     from them on programmatic price changes and unit toggles. */
  const [tpGainText, setTpGainText] = useState('')
  const [slLossText, setSlLossText] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [cancellingTp, setCancellingTp] = useState(false)
  const [cancellingSl, setCancellingSl] = useState(false)

  const [triggerSource, setTriggerSource] = useState<TriggerSource>('Last')
  const [gainUnit, setGainUnit] = useState<GainLossUnit>('%')
  const [lossUnit, setLossUnit] = useState<GainLossUnit>('%')
  const [closePct, setClosePct] = useState(100)
  /* Display value for the editable amount field. Mirrors closePct via
     the slider, but typing here also updates closePct so the two stay
     in sync without fighting the cursor. Empty string lets the
     "Quantity" placeholder show through. */
  const [amountText, setAmountText] = useState('')

  const closeQty = (qty * closePct) / 100
  const isQuoteUnit = sizeUnit === 'QUOTE' && Number.isFinite(markPrice) && (markPrice as number) > 0
  // Convert base→quote (or vice-versa) for the Amount input + summary.
  // Falls back to base when markPrice isn't available so we never show
  // bogus zeros while the price stream warms up.
  const baseToUnit = (baseAmt: number): number => (isQuoteUnit ? baseAmt * (markPrice as number) : baseAmt)
  const unitToBase = (unitAmt: number): number => (isQuoteUnit ? unitAmt / (markPrice as number) : unitAmt)
  const closeQtyDisplay = baseToUnit(closeQty)
  const amountDecimals = isQuoteUnit ? 2 : 4
  const fallbackBase = symbol.replace(/USDT$|USDC$|USD1$/i, '') || symbol
  const amountAssetLabel = isQuoteUnit ? quoteAsset : (baseAsset ?? fallbackBase)

  // Pre-fill drafts from the existing TP/SL orders when the modal
  // opens, so a user who clicks the TP/SL row to *update* (not create)
  // sees their current trigger and PnL ready to edit. Reset to empty on
  // close so the next open starts clean.
  useEffect(() => {
    if (!isOpen) {
      setTpPrice('')
      setTpPnl('')
      setTpGainText('')
      setSlPrice('')
      setSlPnl('')
      setSlLossText('')
      setClosePct(100)
      setAmountText('')
      // Reset trigger-source toggle so the next open starts from the
      // consumer-provided default (or "Last" when none).
      setTriggerSource(initialTriggerSource ?? 'Last')
      return
    }
    setTriggerSource(initialTriggerSource ?? 'Last')
    const seedTp = initialTpPrice !== undefined && initialTpPrice !== '' ? String(initialTpPrice) : ''
    const seedSl = initialSlPrice !== undefined && initialSlPrice !== '' ? String(initialSlPrice) : ''
    setTpPrice(seedTp)
    setSlPrice(seedSl)
    if (qty > 0 && Number.isFinite(entryPrice)) {
      const tpN = Number(seedTp)
      const slN = Number(seedSl)
      const tpUsd = seedTp && Number.isFinite(tpN) ? dir * (tpN - entryPrice) * qty : NaN
      const slUsd = seedSl && Number.isFinite(slN) ? dir * (slN - entryPrice) * qty : NaN
      setTpPnl(Number.isFinite(tpUsd) ? tpUsd.toFixed(4) : '')
      setSlPnl(Number.isFinite(slUsd) ? slUsd.toFixed(4) : '')
      setTpGainText(Number.isFinite(tpUsd) ? pnlToText(tpUsd, gainUnit) : '')
      setSlLossText(Number.isFinite(slUsd) ? pnlToLossText(slUsd, lossUnit) : '')
    } else {
      setTpPnl('')
      setSlPnl('')
      setTpGainText('')
      setSlLossText('')
    }
    // pnlToText closes over gainUnit / lossUnit / marginUsdt, all stable
    // for a given open. Listing initialTpPrice + initialSlPrice + the
    // trigger-source seed covers the "open with prefill" case.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, initialTpPrice, initialSlPrice, initialTriggerSource, qty, entryPrice, dir])

  // Re-render the amount input value when sizeUnit toggles mid-session
  // so the displayed number tracks the user's chosen denomination
  // (otherwise the field would show a stale base value after switching
  // to QUOTE, or vice-versa). Formatted to `amountDecimals` so the
  // input doesn't bloom to 14 fractional digits from a raw `.toString()`.
  useEffect(() => {
    if (!isOpen || qty <= 0) return
    const baseAmt = (qty * closePct) / 100
    setAmountText(baseAmt > 0 ? baseToUnit(baseAmt).toFixed(amountDecimals) : '')
    // baseToUnit + amountDecimals close over markPrice / isQuoteUnit,
    // both already in deps via sizeUnit + markPrice.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, sizeUnit, qty, markPrice])

  const handleAmountChange = (raw: string) => {
    setAmountText(raw)
    if (raw === '' || qty <= 0) return
    const n = Number(raw)
    if (!Number.isFinite(n)) return
    const baseAmt = unitToBase(n)
    const pct = Math.max(0, Math.min(100, (baseAmt / qty) * 100))
    setClosePct(pct)
  }

  const handleSliderChange = (pct: number) => {
    setClosePct(pct)
    if (qty > 0) {
      const baseAmt = (qty * pct) / 100
      // Format to the unit's display precision (2 dp QUOTE / 4 dp BASE)
      // so we don't dump 162.07367349275998-style float noise into the
      // input. Matches the Position-amount summary directly below.
      setAmountText(baseToUnit(baseAmt).toFixed(amountDecimals))
    }
  }

  const priceFromPnl = (pnl: number) => (qty > 0 ? entryPrice + (dir * pnl) / qty : NaN)
  const pnlFromPrice = (price: number) => (qty > 0 ? dir * (price - entryPrice) * qty : NaN)

  // Margin held against the position — used as the denominator for
  // percent-based Gain / Loss values. = notional / leverage. NaN when
  // we don't have leverage, in which case `%` mode just shows blank
  // until the prop arrives.
  const marginUsdt =
    leverage && leverage > 0 && qty > 0 && Number.isFinite(entryPrice) ? (qty * entryPrice) / leverage : NaN

  // Signed USDT pnl → display string in the chosen unit (always
  // positive magnitude — sign is implicit by gain/loss field).
  const pnlToText = (pnlUsd: number, unit: GainLossUnit): string => {
    if (!Number.isFinite(pnlUsd)) return ''
    const abs = Math.abs(pnlUsd)
    if (unit === 'USDT') return abs.toFixed(2)
    if (!Number.isFinite(marginUsdt) || marginUsdt <= 0) return ''
    return ((abs / marginUsdt) * 100).toFixed(2)
  }
  // Display string in the chosen unit → positive USDT magnitude. Caller
  // is responsible for signing it (TP = +, SL = -).
  const textToUsd = (text: string, unit: GainLossUnit): number => {
    const n = Number(text)
    if (!Number.isFinite(n)) return NaN
    if (unit === 'USDT') return Math.abs(n)
    if (!Number.isFinite(marginUsdt) || marginUsdt <= 0) return NaN
    return (Math.abs(n) / 100) * marginUsdt
  }
  // Loss text mirrors the Gain text but always carries the leading
  // "-" (Aster convention — see screenshot in the task). Empty stays
  // empty so the placeholder still surfaces.
  const pnlToLossText = (pnlUsd: number, unit: GainLossUnit): string => {
    const m = pnlToText(pnlUsd, unit)
    return m === '' ? '' : `-${m}`
  }

  const formatRaw = (n: number, digits: number) => (Number.isFinite(n) ? n.toFixed(digits) : '')

  // ── TP price / Gain bidirectional sync ───────────────────────────
  const onChangeTpPrice = (v: string) => {
    setTpPrice(v)
    if (v === '') {
      setTpPnl('')
      setTpGainText('')
      return
    }
    const n = Number(v)
    if (!Number.isFinite(n)) return
    const usd = pnlFromPrice(n)
    setTpPnl(formatRaw(usd, 4))
    setTpGainText(pnlToText(usd, gainUnit))
  }
  const onChangeTpGain = (v: string) => {
    // Gain is a magnitude — strip any leading "-" so the negative sign
    // never gets stuck in the field if a user fat-fingers.
    const norm = v.replace(/^-/, '')
    setTpGainText(norm)
    if (norm === '') {
      setTpPnl('')
      setTpPrice('')
      return
    }
    const usd = textToUsd(norm, gainUnit)
    if (!Number.isFinite(usd)) return
    setTpPnl(formatRaw(usd, 4))
    const price = priceFromPnl(usd)
    setTpPrice(Number.isFinite(price) ? formatRaw(price, pricePrecision) : '')
  }

  // ── SL price / Loss bidirectional sync ───────────────────────────
  const onChangeSlPrice = (v: string) => {
    setSlPrice(v)
    if (v === '') {
      setSlPnl('')
      setSlLossText('')
      return
    }
    const n = Number(v)
    if (!Number.isFinite(n)) return
    const usd = pnlFromPrice(n)
    setSlPnl(formatRaw(usd, 4))
    setSlLossText(pnlToLossText(usd, lossUnit))
  }
  const onChangeSlLoss = (v: string) => {
    // Allow a transitional bare "-" so the cursor doesn't bounce while
    // the user is mid-typing a value like "-5".
    if (v === '' || v === '-') {
      setSlLossText(v)
      setSlPnl('')
      setSlPrice('')
      return
    }
    // Magnitude — the leading "-" is rendered as a fixed prefix on the
    // displayed text (Aster convention). Strip any sign the user typed
    // so we don't end up with double "--".
    const magnitude = v.replace(/^[-+]/, '')
    if (magnitude === '') {
      setSlLossText('')
      setSlPnl('')
      setSlPrice('')
      return
    }
    setSlLossText(`-${magnitude}`)
    const usd = textToUsd(magnitude, lossUnit)
    if (!Number.isFinite(usd)) return
    // SL is a *loss* — signed pnl is negative.
    const signed = -usd
    setSlPnl(formatRaw(signed, 4))
    const price = priceFromPnl(signed)
    setSlPrice(Number.isFinite(price) ? formatRaw(price, pricePrecision) : '')
  }

  // Re-derive the displayed Gain / Loss text when the user toggles
  // between % and USDT. Only listens to the unit (not pnl) so a user
  // mid-keystroke doesn't get their cursor yanked by a pnl re-format —
  // the pnl-derived setText already happens in the price/gain handlers.
  useEffect(() => {
    if (tpPnl === '' || tpPnl === '-') return
    const usd = Number(tpPnl)
    if (Number.isFinite(usd)) setTpGainText(pnlToText(usd, gainUnit))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gainUnit])
  useEffect(() => {
    if (slPnl === '' || slPnl === '-') return
    const usd = Number(slPnl)
    if (Number.isFinite(usd)) setSlLossText(pnlToLossText(usd, lossUnit))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lossUnit])

  const warning = useMemo(() => {
    const tp = Number(tpPrice)
    const sl = Number(slPrice)
    const hasTp = tpPrice !== '' && Number.isFinite(tp)
    const hasSl = slPrice !== '' && Number.isFinite(sl)
    if (positionSide === 'LONG') {
      if (hasTp && tp <= entryPrice) return t('Take Profit price must be above entry for a LONG position.')
      if (hasSl && sl >= entryPrice) return t('Stop Loss price must be below entry for a LONG position.')
    } else {
      if (hasTp && tp >= entryPrice) return t('Take Profit price must be below entry for a SHORT position.')
      if (hasSl && sl <= entryPrice) return t('Stop Loss price must be above entry for a SHORT position.')
    }
    return undefined
  }, [tpPrice, slPrice, positionSide, entryPrice, t])

  const canSubmit = !submitting && (tpPrice !== '' || slPrice !== '') && !warning

  const handleConfirm = async () => {
    if (!canSubmit) return
    setSubmitting(true)
    try {
      await onConfirm({
        symbol,
        closeSide: positionSide === 'LONG' ? 'SELL' : 'BUY',
        tpPrice,
        slPrice,
        qty: String(closeQty),
        closePosition: closePct >= 100,
        triggerSource,
      })
      onClose()
    } finally {
      setSubmitting(false)
    }
  }

  const cycleTriggerSource = () =>
    setTriggerSource((s) => (s === 'Last' ? 'Mark' : 'Last'))
  const cycleGainUnit = () => setGainUnit((u) => (u === '%' ? 'USDT' : '%'))
  const cycleLossUnit = () => setLossUnit((u) => (u === '%' ? 'USDT' : '%'))

  const fmtUsd = (n: number) =>
    Number.isFinite(n) ? formatWithThousandSeparator(n.toFixed(2)) : '—'

  const tpHelper =
    tpPrice !== ''
      ? t(`When the price reaches ${tpPrice} ${quoteAsset}, the market order will be triggered, expect profit is ${tpPnl || '--'} ${quoteAsset}`)
      : t(`When the price reaches 0.0 ${quoteAsset}, the market order will be triggered, expect profit is -- ${quoteAsset}`)

  const slHelper =
    slPrice !== ''
      ? t(`When the price reaches ${slPrice} ${quoteAsset}, the market order will be triggered, expect loss is ${slPnl || '--'} ${quoteAsset}`)
      : t(`When the price reaches 0.0 ${quoteAsset}, the market order will be triggered, expect loss is -- ${quoteAsset}`)

  return (
    <ModalV2 isOpen={isOpen} onDismiss={onClose} closeOnOverlayClick>
      <Modal title={t('TP/SL for position')} onDismiss={onClose}>
        <Body>
          <SummaryGroup>
            <SummaryRow>
              <SummaryLabel>{t('Symbol')}</SummaryLabel>
              <SymbolValue $side={positionSide}>
                {symbol}
                {leverage ? ` ${leverage}x` : ''}
              </SymbolValue>
            </SummaryRow>
            <SummaryRow>
              <SummaryLabel>{t('Entry Price')}</SummaryLabel>
              <SummaryValue>
                {fmtUsd(entryPrice)} {quoteAsset}
              </SummaryValue>
            </SummaryRow>
            <SummaryRow>
              <SummaryLabel>{t('Mark Price')}</SummaryLabel>
              <SummaryValue>
                {fmtUsd(markPrice)} {quoteAsset}
              </SummaryValue>
            </SummaryRow>
          </SummaryGroup>

          <Divider />

          <SummaryGroup>
            <SectionHeader>
              <Text fontSize="16px" color="textSubtle">
                {t('TP/SL')}
              </Text>
              <TriggerSourceBtn type="button" onClick={cycleTriggerSource}>
                {triggerSource}
                <ChevronGlyph />
              </TriggerSourceBtn>
            </SectionHeader>

            <Flex flexDirection="column" style={{ gap: 12, alignSelf: 'stretch' }}>
              <InputRow>
                <InputShell>
                  <NakedInput
                    {...useSeparatedNumberInput(tpPrice, onChangeTpPrice)}
                    placeholder={t('TP Price')}
                    inputMode="decimal"
                  />
                </InputShell>
                <UnitShell>
                  <NakedInput
                    {...useSeparatedNumberInput(tpGainText, onChangeTpGain)}
                    placeholder={t('Gain')}
                    inputMode="decimal"
                  />
                  <UnitToggle type="button" onClick={cycleGainUnit}>
                    {gainUnit}
                    <ChevronGlyph />
                  </UnitToggle>
                </UnitShell>
              </InputRow>
              <Flex justifyContent="space-between" alignItems="center" style={{ gap: 8, alignSelf: 'stretch' }}>
                <Helper>{tpHelper}</Helper>
                {initialTpPrice && onCancelTpOrder ? (
                  <CancelLink
                    type="button"
                    onClick={async () => {
                      if (cancellingTp) return
                      setCancellingTp(true)
                      try {
                        await onCancelTpOrder()
                        setTpPrice('')
                        setTpPnl('')
                        setTpGainText('')
                      } finally {
                        setCancellingTp(false)
                      }
                    }}
                    disabled={cancellingTp}
                  >
                    {cancellingTp ? t('Cancelling…') : t('Cancel Order')}
                  </CancelLink>
                ) : null}
              </Flex>
            </Flex>

            <Flex flexDirection="column" style={{ gap: 12, alignSelf: 'stretch' }}>
              <InputRow>
                <InputShell>
                  <NakedInput
                    {...useSeparatedNumberInput(slPrice, onChangeSlPrice)}
                    placeholder={t('SL Price')}
                    inputMode="decimal"
                  />
                </InputShell>
                <UnitShell>
                  <NakedInput
                    {...useSeparatedNumberInput(slLossText, onChangeSlLoss)}
                    placeholder={t('Loss')}
                    inputMode="decimal"
                  />
                  <UnitToggle type="button" onClick={cycleLossUnit}>
                    {lossUnit}
                    <ChevronGlyph />
                  </UnitToggle>
                </UnitShell>
              </InputRow>
              <Flex justifyContent="space-between" alignItems="center" style={{ gap: 8, alignSelf: 'stretch' }}>
                <Helper>{slHelper}</Helper>
                {initialSlPrice && onCancelSlOrder ? (
                  <CancelLink
                    type="button"
                    onClick={async () => {
                      if (cancellingSl) return
                      setCancellingSl(true)
                      try {
                        await onCancelSlOrder()
                        setSlPrice('')
                        setSlPnl('')
                        setSlLossText('')
                      } finally {
                        setCancellingSl(false)
                      }
                    }}
                    disabled={cancellingSl}
                  >
                    {cancellingSl ? t('Cancelling…') : t('Cancel Order')}
                  </CancelLink>
                ) : null}
              </Flex>
            </Flex>
          </SummaryGroup>

          <SummaryGroup>
            <Text fontSize="16px" color="textSubtle">
              {t('Amount')}
            </Text>
            <AmountField>
              <AmountInput
                value={amountText}
                onChange={(e) => handleAmountChange(e.target.value)}
                placeholder={t('Quantity')}
                inputMode="decimal"
              />
              <AmountAsset>{amountAssetLabel}</AmountAsset>
            </AmountField>
            <SliderWrap>
              <BunnySlider
                min={0}
                max={100}
                step={1}
                value={closePct}
                onValueChanged={handleSliderChange}
              />
            </SliderWrap>
            <SummaryRow>
              <SummaryLabel>{t('Position amount')}</SummaryLabel>
              <SummaryValue>
                {formatWithThousandSeparator(closeQtyDisplay.toFixed(amountDecimals))} {amountAssetLabel}
              </SummaryValue>
            </SummaryRow>
          </SummaryGroup>

          {warning && (
            <Text fontSize="14px" color="failure">
              {warning}
            </Text>
          )}

          <Button onClick={handleConfirm} disabled={!canSubmit} isLoading={submitting} scale="md">
            {t('Confirm')}
          </Button>
        </Body>
      </Modal>
    </ModalV2>
  )
}
