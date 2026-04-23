import { useState } from 'react'
import '../ui/perps.css'
import './OrderConfirmationModal.css'
import { Modal, ModalV2 } from '../ui/widgets/Modal'
import { Button } from '../ui/components/Button'
import { Checkbox } from '../ui/components/Checkbox'
import { Text } from '../ui/components/Text'

export type OrderDirection = 'buy' | 'sell'

export interface OrderConfirmationModalProps {
  open: boolean
  /** 'buy' → green "Buy/Long" ; 'sell' → pink "Sell/Short". */
  direction?: OrderDirection
  /** Asset ticker shown on the left of the direction row (e.g. "BTC"). */
  symbol?: string
  /** Order quantity (e.g. "999.999,99 USDT"). */
  orderQty?: string
  /** Take-profit description (e.g. "Mark >999.999,99 USDT"). */
  takeProfit?: string
  /** Stop-loss description (e.g. "Mark <999.999,99 USDT"). */
  stopLoss?: string
  /** Initial state of the "Don't show again" checkbox. */
  dontShowAgain?: boolean
  onClose?: () => void
  onConfirm?: (dontShowAgain: boolean) => void
}

export function OrderConfirmationModal({
  open,
  direction = 'buy',
  symbol = 'BTC',
  orderQty = '999.999,99 USDT',
  takeProfit = 'Mark >999.999,99 USDT',
  stopLoss = 'Mark <999.999,99 USDT',
  dontShowAgain: initialDontShow = true,
  onClose,
  onConfirm,
}: OrderConfirmationModalProps) {
  const [dontShow, setDontShow] = useState(initialDontShow)

  if (!open) return null

  const isBuy = direction === 'buy'

  const handleConfirm = () => {
    onConfirm?.(dontShow)
  }

  return (
    <ModalV2 isOpen={open} onDismiss={onClose} closeOnOverlayClick>
      <Modal
        title="Order Confirmation"
        onDismiss={onClose}
        headerProps={{ scale: 'md' }}
        minWidth="411px"
        minHeight="0px"
        bodyPadding="20px 24px 24px"
        headerPadding="36px 24px 12px"
        hideCloseButton
        headerRightSlot={
          <button
            type="button"
            className="ocm-close"
            aria-label="Close"
            onClick={onClose}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        }
      >
        <div className="ocm-body">
          {/* Symbol + direction header */}
          <div className="ocm-section">
            <div className="ocm-row">
              <Text color="textSubtle" fontSize="16px" bold>{symbol}</Text>
              <Text
                color={isBuy ? 'success' : 'failure'}
                fontSize="16px"
                bold
              >
                {isBuy ? 'Buy/Long' : 'Sell/Short'}
              </Text>
            </div>

            {/* Details */}
            <div className="ocm-details">
              <div className="ocm-row">
                <Text color="textSubtle" fontSize="14px">Order Qty</Text>
                <Text color="text" fontSize="14px">{orderQty}</Text>
              </div>
              <div className="ocm-row">
                <Text color="textSubtle" fontSize="14px">Take Profit</Text>
                <Text color="text" fontSize="14px">{takeProfit}</Text>
              </div>
              <div className="ocm-row">
                <Text color="textSubtle" fontSize="14px">Stop Loss</Text>
                <Text color="text" fontSize="14px">{stopLoss}</Text>
              </div>
            </div>
          </div>

          {/* "Don't show again" checkbox pill */}
          <label className="ocm-dont-show">
            <Text fontSize="16px" bold>Don&rsquo;t show again</Text>
            <Checkbox
              scale="sm"
              checked={dontShow}
              onChange={(e) => setDontShow(e.target.checked)}
            />
          </label>

          {/* Actions */}
          <div className="ocm-actions">
            <Button
              variant="tertiary"
              scale="md"
              width="100%"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              scale="md"
              width="100%"
              onClick={handleConfirm}
            >
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </ModalV2>
  )
}
