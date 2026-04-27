import React, { useState } from 'react'
import styled from 'styled-components'
import { Box, Flex } from '../primitives/Box'
import { Button } from '../primitives/Button'
import { Checkbox } from '../primitives/Checkbox'
import { Text } from '../primitives/Text'
import Modal from '../primitives/Modal/Modal'
import { ModalV2 } from '../primitives/Modal/ModalV2'

export type OrderSide = 'BUY' | 'SELL'
export type OrderType =
  | 'MARKET'
  | 'LIMIT'
  | 'STOP'
  | 'TAKE_PROFIT'
  | 'STOP_MARKET'
  | 'TAKE_PROFIT_MARKET'
  | 'TRAILING_STOP_MARKET'

export interface OrderConfirmDetails {
  symbol: string
  side: OrderSide
  type: OrderType
  /** Base-asset quantity after quantization. */
  quantity: string
  baseAsset: string
  quoteAsset: string
  /** Limit price (undefined for market orders). */
  price?: string
  stopPrice?: string
  leverage: number
  /** USDT margin required (notional / leverage). */
  costUsdt: number
  /** Estimated liquidation price. */
  liqPrice?: number
  reduceOnly?: boolean
}

export interface OrderConfirmModalProps {
  /** Controlled open state. */
  isOpen: boolean
  /** Order summary to render. Caller only sets isOpen=true when ready. */
  details: OrderConfirmDetails
  /** Called when the user clicks Confirm Buy/Sell. */
  onConfirm: () => void
  onClose: () => void
  /**
   * Called when the user toggles "Don't show this again" before
   * confirming. Consumer persists the preference (e.g. localStorage)
   * and skips this modal on subsequent submits.
   */
  onSkipFutureChange?: (skip: boolean) => void
  /** Translator. */
  t?: (key: string, options?: Record<string, string | number | undefined>) => string
}

const Row = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.cardBorder};
  &:last-of-type {
    border-bottom: 0;
  }
`

const Key = styled(Text).attrs({ fontSize: '12px', color: 'textSubtle' })``
const Val = styled(Text).attrs({ fontSize: '13px', bold: true })`
  font-variant-numeric: tabular-nums;
`

const CheckboxRow = styled(Flex)`
  align-items: center;
  gap: 6px;
  padding-top: 6px;
`

const SideBadge = styled.span<{ $side: OrderSide }>`
  color: ${({ $side, theme }) => ($side === 'BUY' ? theme.colors.success : theme.colors.failure)};
  font-weight: 800;
`

const LiqValue = styled(Val)`
  color: ${({ theme }) => theme.colors.failure};
`

const SubmitButton = styled(Button)<{ $side: OrderSide }>`
  width: 100%;
  background: ${({ $side, theme }) => ($side === 'BUY' ? theme.colors.success : theme.colors.failure)};
  color: ${({ theme }) => theme.colors.invertedContrast};
`

const defaultT = (
  key: string,
  options?: Record<string, string | number | undefined>,
): string => {
  if (!options) return key
  return Object.entries(options).reduce(
    (acc, [k, v]) => acc.split(`%${k}%`).join(String(v)),
    key,
  )
}

const fmtPrice = (p?: string) =>
  p ? Number(p).toLocaleString(undefined, { maximumFractionDigits: 4 }) : '—'

/**
 * Maps the canonical Aster order-type enum onto a user-facing label that
 * the consumer's translator can localize. Algo / advanced types fall back
 * to the raw enum name (still readable, just not translated).
 */
const typeLabel = (
  type: OrderType,
  t: (key: string, options?: Record<string, string | number | undefined>) => string,
): string => {
  switch (type) {
    case 'MARKET':
      return t('Market')
    case 'LIMIT':
      return t('Limit')
    case 'STOP':
      return t('Stop Limit')
    case 'STOP_MARKET':
      return t('Stop Market')
    case 'TAKE_PROFIT':
      return t('Take Profit')
    case 'TAKE_PROFIT_MARKET':
      return t('Take Profit Market')
    default:
      return type
  }
}

/**
 * Order-preview confirmation shown before placing the order. The
 * "Don't show this again" checkbox is purely a UI hint — the consumer
 * persists the preference (typically a localStorage atom) via the
 * `onSkipFutureChange` callback and decides whether to skip this modal
 * on subsequent submits.
 */
export const OrderConfirmModal: React.FC<OrderConfirmModalProps> = ({
  isOpen,
  details,
  onConfirm,
  onClose,
  onSkipFutureChange,
  t = defaultT,
}) => {
  const [dontShow, setDontShow] = useState(false)

  const handleConfirm = () => {
    if (dontShow) onSkipFutureChange?.(true)
    onConfirm()
    onClose()
  }

  return (
    <ModalV2 isOpen={isOpen} onDismiss={onClose} closeOnOverlayClick>
      <Modal title={t('Confirm Order')} onDismiss={onClose}>
        <Flex flexDirection="column" style={{ gap: 4, minWidth: 320, maxWidth: 420 }}>
          <Row>
            <Key>{t('Symbol')}</Key>
            <Val>{details.symbol}</Val>
          </Row>
          <Row>
            <Key>{t('Side / Type')}</Key>
            <Val>
              <SideBadge $side={details.side}>
                {details.side === 'BUY' ? t('Buy / Long') : t('Sell / Short')}
              </SideBadge>
              {' · '}
              {typeLabel(details.type, t)}
            </Val>
          </Row>
          <Row>
            <Key>{t('Size')}</Key>
            <Val>
              {details.quantity} {details.baseAsset}
            </Val>
          </Row>
          {details.price && (
            <Row>
              <Key>{t('Price')}</Key>
              <Val>
                {fmtPrice(details.price)} {details.quoteAsset}
              </Val>
            </Row>
          )}
          {details.stopPrice && (
            <Row>
              <Key>{t('Trigger Price')}</Key>
              <Val>
                {fmtPrice(details.stopPrice)} {details.quoteAsset}
              </Val>
            </Row>
          )}
          <Row>
            <Key>{t('Leverage')}</Key>
            <Val>{details.leverage}x</Val>
          </Row>
          <Row>
            <Key>{t('Cost')}</Key>
            <Val>{details.costUsdt ? `${details.costUsdt.toFixed(2)} ${details.quoteAsset}` : '—'}</Val>
          </Row>
          <Row>
            <Key>{t('Est. Liq. Price')}</Key>
            <LiqValue>
              {details.liqPrice ? `${details.liqPrice.toFixed(2)} ${details.quoteAsset}` : '—'}
            </LiqValue>
          </Row>
          {details.reduceOnly && (
            <Row>
              <Key>{t('Reduce Only')}</Key>
              <Val>{t('Yes')}</Val>
            </Row>
          )}

          <CheckboxRow>
            <Checkbox scale="sm" checked={dontShow} onChange={(e) => setDontShow(e.target.checked)} />
            <Text fontSize="12px">{t("Don't show this again")}</Text>
          </CheckboxRow>

          <Box mt="8px">
            <SubmitButton $side={details.side} onClick={handleConfirm} scale="md">
              {details.side === 'BUY' ? t('Confirm Buy / Long') : t('Confirm Sell / Short')}
            </SubmitButton>
          </Box>
        </Flex>
      </Modal>
    </ModalV2>
  )
}
