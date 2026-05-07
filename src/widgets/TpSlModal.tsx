import React, { useEffect, useMemo, useState } from 'react'
import { styled, useTheme } from 'styled-components'
import { Box, Flex } from '../primitives/Box'
import { Button } from '../primitives/Button'
import { Input } from '../primitives/Input'
import { Text } from '../primitives/Text'
import Modal from '../primitives/Modal/Modal'
import { ModalV2 } from '../primitives/Modal/ModalV2'
import { BunnySlider } from './BunnySlider'
import { ensureNegative, ensurePositive, formatWithThousandSeparator, useSeparatedNumberInput } from './separatedNumberInput'

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

const UnitLabel = styled(Text).attrs({ fontSize: '14px', color: 'textSubtle' })``

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
  entryPrice,
  markPrice,
  pricePrecision = 4,
  initialTpPrice,
  initialSlPrice,
  onCancelTpOrder,
  onCancelSlOrder,
  onConfirm,
  onClose,
  t = identity,
}) => {
  const theme = useTheme()
  const dir = positionSide === 'LONG' ? 1 : -1

  const [tpPrice, setTpPrice] = useState('')
  const [tpPnl, setTpPnl] = useState('')
  const [slPrice, setSlPrice] = useState('')
  const [slPnl, setSlPnl] = useState('')
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

  // Pre-fill drafts from the existing TP/SL orders when the modal
  // opens, so a user who clicks the TP/SL row to *update* (not create)
  // sees their current trigger and PnL ready to edit. Reset to empty on
  // close so the next open starts clean.
  useEffect(() => {
    if (!isOpen) {
      setTpPrice('')
      setTpPnl('')
      setSlPrice('')
      setSlPnl('')
      setClosePct(100)
      setAmountText('')
      return
    }
    const seedTp = initialTpPrice !== undefined && initialTpPrice !== '' ? String(initialTpPrice) : ''
    const seedSl = initialSlPrice !== undefined && initialSlPrice !== '' ? String(initialSlPrice) : ''
    setTpPrice(seedTp)
    setSlPrice(seedSl)
    if (qty > 0 && Number.isFinite(entryPrice)) {
      const tpN = Number(seedTp)
      const slN = Number(seedSl)
      setTpPnl(seedTp && Number.isFinite(tpN) ? (dir * (tpN - entryPrice) * qty).toFixed(4) : '')
      setSlPnl(seedSl && Number.isFinite(slN) ? (dir * (slN - entryPrice) * qty).toFixed(4) : '')
    } else {
      setTpPnl('')
      setSlPnl('')
    }
  }, [isOpen, initialTpPrice, initialSlPrice, qty, entryPrice, dir])

  const handleAmountChange = (raw: string) => {
    setAmountText(raw)
    if (raw === '' || qty <= 0) return
    const n = Number(raw)
    if (!Number.isFinite(n)) return
    const pct = Math.max(0, Math.min(100, (n / qty) * 100))
    setClosePct(pct)
  }

  const handleSliderChange = (pct: number) => {
    setClosePct(pct)
    if (qty > 0) {
      setAmountText(((qty * pct) / 100).toString())
    }
  }

  const priceFromPnl = (pnl: number) => (qty > 0 ? entryPrice + (dir * pnl) / qty : NaN)
  const pnlFromPrice = (price: number) => (qty > 0 ? dir * (price - entryPrice) * qty : NaN)

  const formatRaw = (n: number, digits: number) => (Number.isFinite(n) ? n.toFixed(digits) : '')
  const onChangeTpPrice = (v: string) => {
    setTpPrice(v)
    if (v === '') return setTpPnl('')
    const n = Number(v)
    setTpPnl(Number.isFinite(n) ? formatRaw(pnlFromPrice(n), 4) : '')
  }
  const onChangeTpPnl = (v: string) => {
    const norm = ensurePositive(v)
    setTpPnl(norm)
    if (norm === '' || norm === '-') return setTpPrice('')
    const n = Number(norm)
    setTpPrice(Number.isFinite(n) ? formatRaw(priceFromPnl(n), pricePrecision) : '')
  }
  const onChangeSlPrice = (v: string) => {
    setSlPrice(v)
    if (v === '') return setSlPnl('')
    const n = Number(v)
    setSlPnl(Number.isFinite(n) ? formatRaw(pnlFromPrice(n), 4) : '')
  }
  const onChangeSlPnl = (v: string) => {
    const norm = ensureNegative(v)
    setSlPnl(norm)
    if (norm === '' || norm === '-') return setSlPrice('')
    const n = Number(norm)
    setSlPrice(Number.isFinite(n) ? formatRaw(priceFromPnl(n), pricePrecision) : '')
  }

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
                  <UnitLabel>{t('Gain')}</UnitLabel>
                  <UnitToggle type="button" onClick={cycleGainUnit}>
                    {gainUnit}
                    <ChevronGlyph />
                  </UnitToggle>
                </UnitShell>
              </InputRow>
              <Helper>{tpHelper}</Helper>
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
                  <UnitLabel>{t('Loss')}</UnitLabel>
                  <UnitToggle type="button" onClick={cycleLossUnit}>
                    {lossUnit}
                    <ChevronGlyph />
                  </UnitToggle>
                </UnitShell>
              </InputRow>
              <Helper>{slHelper}</Helper>
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
              <AmountAsset>{baseAsset ?? symbol.replace(/USDT$/i, '')}</AmountAsset>
            </AmountField>
            <SliderWrap>
              <BunnySlider
                min={0}
                max={100}
                step={25}
                value={closePct}
                onValueChanged={handleSliderChange}
              />
            </SliderWrap>
            <SummaryRow>
              <SummaryLabel>{t('Position amount')}</SummaryLabel>
              <SummaryValue>
                {formatWithThousandSeparator(closeQty.toFixed(2))} {quoteAsset}
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
