import React, { useEffect, useMemo, useState } from 'react'
import { styled, useTheme } from 'styled-components'
import { Box, Flex } from '../primitives/Box'
import { Button } from '../primitives/Button'
import { Input } from '../primitives/Input'
import { Text } from '../primitives/Text'
import Modal from '../primitives/Modal/Modal'
import { ModalV2 } from '../primitives/Modal/ModalV2'
import { ensureNegative, ensurePositive, formatWithThousandSeparator, useSeparatedNumberInput } from './separatedNumberInput'

export type PositionSide = 'LONG' | 'SHORT'

export interface TpSlIntent {
  symbol: string
  /** Exit-order side — opposite of the position's side. */
  closeSide: 'BUY' | 'SELL'
  /** Trigger price for the TP leg. Empty string → skip TP leg. */
  tpPrice: string
  /** Trigger price for the SL leg. Empty string → skip SL leg. */
  slPrice: string
  /** Position size (absolute value), for order qty. */
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
  entryPrice: number
  /** Resolved mark price — displayed in the summary row. */
  markPrice: number
  /**
   * Quote asset symbol (e.g. "USDT", "USDC"). Suffixed onto the Entry /
   * Mark summary rows and the PnL field labels so the user always sees
   * which token the numbers are denominated in. Defaults to "USDT".
   */
  quoteAsset?: string
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

/* ── Styles tuned to Figma 18:4886 ─────────────────────────
 *  - Sections sit on the modal's card-primary surface (no inner
 *    grouping card), matching the flat figma layout.
 *  - Input fields use input-primary bg + input-secondary border
 *    with 12px corner radius — the standard PCS perp input look.
 * ────────────────────────────────────────────────────────── */
const Section = styled(Flex)`
  flex-direction: column;
  gap: 8px;
`

const Row = styled(Flex)`
  gap: 8px;
`

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.colors.cardBorder};
  margin: 4px 0;
`

const FieldLabel = styled(Text).attrs({ fontSize: '14px', color: 'textSubtle' })``

const InputTight = styled(Input)`
  height: 37px;
  padding: 8px 12px;
  font-size: 14px;
  font-variant-numeric: tabular-nums;
  background: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text};
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
  &:focus,
  &:focus-visible {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
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

const SummaryRow = styled(Flex)`
  justify-content: space-between;
  padding: 4px 0;
  font-size: 12px;
`

const identity = (s: string) => s

/**
 * TP/SL setup for an existing position.
 *
 * Price↔PnL sync is bidirectional but direction-aware:
 *   - LONG:  PnL = (exitPrice - entry) × qty    → TP price above entry
 *   - SHORT: PnL = (entry - exitPrice) × qty    → TP price below entry
 *
 * The widget tracks which input the user last typed into so it doesn't
 * fight the cursor — editing Price only propagates to PnL, and vice
 * versa.
 *
 * A direction sanity check surfaces an inline warning when the user
 * types a nonsensical value (e.g. TP below entry on a LONG). The server
 * would reject anyway, but surfacing it early is friendlier.
 */
export const TpSlModal: React.FC<TpSlModalProps> = ({
  isOpen,
  symbol,
  positionSide,
  qty,
  entryPrice,
  markPrice,
  quoteAsset = 'USDT',
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

  const priceFromPnl = (pnl: number) => (qty > 0 ? entryPrice + (dir * pnl) / qty : NaN)
  const pnlFromPrice = (price: number) => (qty > 0 ? dir * (price - entryPrice) * qty : NaN)

  // Sibling-update helper. Raw input values flow in via the SeparatedNumberInput
  // hook (already comma-stripped), so Number() parsing is safe and the sibling
  // gets a raw decimal string back — display layer adds the commas.
  const formatRaw = (n: number, digits: number) => (Number.isFinite(n) ? n.toFixed(digits) : '')
  const onChangeTpPrice = (v: string) => {
    setTpPrice(v)
    if (v === '') return setTpPnl('')
    const n = Number(v)
    setTpPnl(Number.isFinite(n) ? formatRaw(pnlFromPrice(n), 4) : '')
  }
  const onChangeTpPnl = (v: string) => {
    // TP gain is always positive — flip a leading '-' into the absolute value.
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
    // SL is always a loss — force a leading '-' so users see the sign even if
    // they typed a bare positive.
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
        qty: String(qty),
        closePosition: true,
      })
      onClose()
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <ModalV2 isOpen={isOpen} onDismiss={onClose} closeOnOverlayClick>
      <Modal title={t('Set TP / SL')} onDismiss={onClose}>
        <Flex flexDirection="column" style={{ gap: 12, minWidth: 340, maxWidth: 440 }}>
          <SummaryRow>
            <Text fontSize="14px" color="textSubtle">
              {t('Symbol')}
            </Text>
            <Text
              fontSize="14px"
              bold
              style={{
                color:
                  positionSide === 'LONG'
                    ? theme.colors.success
                    : theme.colors.failure,
              }}
            >
              {symbol} · {positionSide}
            </Text>
          </SummaryRow>
          <SummaryRow>
            <Text fontSize="14px" color="textSubtle">
              {t('Entry')}
            </Text>
            <Text fontSize="14px" bold style={{ fontVariantNumeric: 'tabular-nums' }}>
              {Number.isFinite(entryPrice)
                ? `${formatWithThousandSeparator(entryPrice.toFixed(pricePrecision))} ${quoteAsset}`
                : '—'}
            </Text>
          </SummaryRow>
          <SummaryRow>
            <Text fontSize="14px" color="textSubtle">
              {t('Mark')}
            </Text>
            <Text fontSize="14px" bold style={{ fontVariantNumeric: 'tabular-nums' }}>
              {Number.isFinite(markPrice)
                ? `${formatWithThousandSeparator(markPrice.toFixed(pricePrecision))} ${quoteAsset}`
                : '—'}
            </Text>
          </SummaryRow>

          <Divider />

          <Section>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="14px" bold color={theme.colors.success}>
                {t('Take Profit')}
              </Text>
              {initialTpPrice && onCancelTpOrder && (
                <CancelLink
                  type="button"
                  onClick={async () => {
                    if (cancellingTp) return
                    setCancellingTp(true)
                    try {
                      await onCancelTpOrder()
                      setTpPrice('')
                      setTpPnl('')
                    } finally {
                      setCancellingTp(false)
                    }
                  }}
                  disabled={cancellingTp}
                >
                  {cancellingTp ? t('Cancelling…') : t('Cancel Order')}
                </CancelLink>
              )}
            </Flex>
            <Row>
              <Box style={{ flex: 1 }}>
                <FieldLabel>{t('Trigger Price')}</FieldLabel>
                <InputTight
                  {...useSeparatedNumberInput(tpPrice, onChangeTpPrice)}
                  placeholder="0.00"
                  inputMode="decimal"
                />
              </Box>
              <Box style={{ flex: 1 }}>
                <FieldLabel>{t('PnL')} ({quoteAsset})</FieldLabel>
                <InputTight
                  {...useSeparatedNumberInput(tpPnl, onChangeTpPnl)}
                  placeholder="0.00"
                  inputMode="decimal"
                />
              </Box>
            </Row>
          </Section>

          <Section>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="14px" bold color={theme.colors.failure}>
                {t('Stop Loss')}
              </Text>
              {initialSlPrice && onCancelSlOrder && (
                <CancelLink
                  type="button"
                  onClick={async () => {
                    if (cancellingSl) return
                    setCancellingSl(true)
                    try {
                      await onCancelSlOrder()
                      setSlPrice('')
                      setSlPnl('')
                    } finally {
                      setCancellingSl(false)
                    }
                  }}
                  disabled={cancellingSl}
                >
                  {cancellingSl ? t('Cancelling…') : t('Cancel Order')}
                </CancelLink>
              )}
            </Flex>
            <Row>
              <Box style={{ flex: 1 }}>
                <FieldLabel>{t('Trigger Price')}</FieldLabel>
                <InputTight
                  {...useSeparatedNumberInput(slPrice, onChangeSlPrice)}
                  placeholder="0.00"
                  inputMode="decimal"
                />
              </Box>
              <Box style={{ flex: 1 }}>
                <FieldLabel>{t('PnL')} ({quoteAsset})</FieldLabel>
                <InputTight
                  {...useSeparatedNumberInput(slPnl, onChangeSlPnl)}
                  placeholder="0.00"
                  inputMode="decimal"
                />
              </Box>
            </Row>
          </Section>

          {warning && (
            <Text fontSize="14px" color="failure">
              {warning}
            </Text>
          )}

          <Button onClick={handleConfirm} disabled={!canSubmit} isLoading={submitting} scale="md">
            {t('Confirm')}
          </Button>
        </Flex>
      </Modal>
    </ModalV2>
  )
}
