import React, { useEffect, useMemo, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { Box, Flex } from '../primitives/Box'
import { Button } from '../primitives/Button'
import { Input } from '../primitives/Input'
import { Text } from '../primitives/Text'
import Modal from '../primitives/Modal/Modal'
import { ModalV2 } from '../primitives/Modal/ModalV2'

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
  onConfirm: (intent: TpSlIntent) => Promise<void> | void
  onClose: () => void
  /** Translator. */
  t?: (key: string) => string
}

const Section = styled(Flex)`
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.input};
`

const Row = styled(Flex)`
  gap: 8px;
`

const FieldLabel = styled(Text).attrs({ fontSize: '11px', color: 'textSubtle' })``

const InputTight = styled(Input)`
  height: 36px;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
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

  // Reset drafts on close so re-opening starts clean.
  useEffect(() => {
    if (!isOpen) {
      setTpPrice('')
      setTpPnl('')
      setSlPrice('')
      setSlPnl('')
    }
  }, [isOpen])

  const priceFromPnl = (pnl: number) => (qty > 0 ? entryPrice + (dir * pnl) / qty : NaN)
  const pnlFromPrice = (price: number) => (qty > 0 ? dir * (price - entryPrice) * qty : NaN)

  const fmt = (n: number, digits = 2) =>
    Number.isFinite(n) ? n.toLocaleString(undefined, { maximumFractionDigits: digits }) : ''

  const onChangeTpPrice = (v: string) => {
    setTpPrice(v)
    const n = Number(v)
    if (Number.isFinite(n) && v !== '') setTpPnl(fmt(pnlFromPrice(n), 4))
    else setTpPnl('')
  }
  const onChangeTpPnl = (v: string) => {
    setTpPnl(v)
    const n = Number(v)
    if (Number.isFinite(n) && v !== '') setTpPrice(fmt(priceFromPnl(n), 2))
    else setTpPrice('')
  }
  const onChangeSlPrice = (v: string) => {
    setSlPrice(v)
    const n = Number(v)
    if (Number.isFinite(n) && v !== '') setSlPnl(fmt(pnlFromPrice(n), 4))
    else setSlPnl('')
  }
  const onChangeSlPnl = (v: string) => {
    setSlPnl(v)
    const n = Number(v)
    if (Number.isFinite(n) && v !== '') setSlPrice(fmt(priceFromPnl(n), 2))
    else setSlPnl('')
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
            <Text fontSize="12px" color="textSubtle">
              {t('Symbol')}
            </Text>
            <Text fontSize="12px" bold>
              {symbol} · {positionSide}
            </Text>
          </SummaryRow>
          <SummaryRow>
            <Text fontSize="12px" color="textSubtle">
              {t('Entry')}
            </Text>
            <Text fontSize="12px" bold style={{ fontVariantNumeric: 'tabular-nums' }}>
              {Number.isFinite(entryPrice) ? entryPrice.toFixed(2) : '—'}
            </Text>
          </SummaryRow>
          <SummaryRow>
            <Text fontSize="12px" color="textSubtle">
              {t('Mark')}
            </Text>
            <Text fontSize="12px" bold style={{ fontVariantNumeric: 'tabular-nums' }}>
              {Number.isFinite(markPrice) ? markPrice.toFixed(2) : '—'}
            </Text>
          </SummaryRow>

          <Section>
            <Text fontSize="13px" bold color={theme.colors.success}>
              {t('Take Profit')}
            </Text>
            <Row>
              <Box style={{ flex: 1 }}>
                <FieldLabel>{t('Trigger Price')}</FieldLabel>
                <InputTight
                  value={tpPrice}
                  onChange={(e) => onChangeTpPrice(e.target.value)}
                  placeholder="0.00"
                  inputMode="decimal"
                />
              </Box>
              <Box style={{ flex: 1 }}>
                <FieldLabel>{t('PnL (USDT)')}</FieldLabel>
                <InputTight
                  value={tpPnl}
                  onChange={(e) => onChangeTpPnl(e.target.value)}
                  placeholder="0.00"
                  inputMode="decimal"
                />
              </Box>
            </Row>
          </Section>

          <Section>
            <Text fontSize="13px" bold color={theme.colors.failure}>
              {t('Stop Loss')}
            </Text>
            <Row>
              <Box style={{ flex: 1 }}>
                <FieldLabel>{t('Trigger Price')}</FieldLabel>
                <InputTight
                  value={slPrice}
                  onChange={(e) => onChangeSlPrice(e.target.value)}
                  placeholder="0.00"
                  inputMode="decimal"
                />
              </Box>
              <Box style={{ flex: 1 }}>
                <FieldLabel>{t('PnL (USDT)')}</FieldLabel>
                <InputTight
                  value={slPnl}
                  onChange={(e) => onChangeSlPnl(e.target.value)}
                  placeholder="0.00"
                  inputMode="decimal"
                />
              </Box>
            </Row>
          </Section>

          {warning && (
            <Text fontSize="12px" color="failure">
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
