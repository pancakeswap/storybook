import '../ui/perps.css'
import './TpSlOtocoModal.css'
import { Modal, ModalV2 } from '../ui/widgets/Modal'
import { Button } from '../ui/components/Button'
import { Text } from '../ui/components/Text'

export interface OrderARow {
  limit?: string
  side?: 'Buy' | 'Sell'
  amount?: string
  price?: string
  reduceOnly?: 'Yes' | 'No'
}

export interface OrderBCRow {
  type?: string       // "Take Profit Market" / "Stop Limit" / etc.
  status?: string     // "Pending" / "New"
  side?: 'Buy' | 'Sell'
  amount?: string
  stop?: string
}

export interface TpSlOtocoModalProps {
  open: boolean
  /** Fired when Cancel is clicked or the overlay/Escape dismisses. */
  onClose?: () => void
  /** Fired when Confirm is clicked. */
  onConfirm?: () => void
  /** Primary (entry) order — Order A. */
  orderA?: OrderARow
  /** Take Profit branch — Order B. */
  orderB?: OrderBCRow
  /** Stop Loss branch — Order C. */
  orderC?: OrderBCRow
  /** Called when the user clicks the edit (pencil) icon on Order B's stop. */
  onEditOrderB?: () => void
  /** Called when the user clicks the edit (pencil) icon on Order C's stop. */
  onEditOrderC?: () => void
}

const DEFAULT_A: OrderARow = {
  limit: 'New',
  side: 'Buy',
  amount: '510.0 USDT',
  price: '85000',
  reduceOnly: 'No',
}

const DEFAULT_B: OrderBCRow = {
  type: 'Take Profit Market',
  status: 'Pending',
  side: 'Sell',
  amount: '510.0 USDT',
  stop: '83000.5',
}

const DEFAULT_C: OrderBCRow = {
  type: 'Take Profit Market',
  status: 'Pending',
  side: 'Sell',
  amount: '510.0 USDT',
  stop: '83000.5',
}

function EditIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** One row in an order card (label on left, value on right). */
function Row({
  label,
  value,
  valueColor,
  valueSlot,
}: {
  label: string
  value?: string
  valueColor?: 'text' | 'success' | 'failure' | 'textSubtle'
  /** Alternative to `value` — render arbitrary content on the right. */
  valueSlot?: React.ReactNode
}) {
  return (
    <div className="otoco-row">
      <Text color="textSubtle" fontSize="14px">{label}</Text>
      {valueSlot ?? (
        <Text
          color={valueColor ?? 'text'}
          fontSize="14px"
          className="otoco-value"
        >
          {value}
        </Text>
      )}
    </div>
  )
}

function CardHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="otoco-card-header">
      <Text fontSize="16px" bold>{title}</Text>
      <Text color="textSubtle" fontSize="12px" ellipsis>{subtitle}</Text>
    </div>
  )
}

export function TpSlOtocoModal({
  open,
  onClose,
  onConfirm,
  orderA = DEFAULT_A,
  orderB = DEFAULT_B,
  orderC = DEFAULT_C,
  onEditOrderB,
  onEditOrderC,
}: TpSlOtocoModalProps) {
  if (!open) return null

  return (
    <ModalV2 isOpen={open} onDismiss={onClose} closeOnOverlayClick>
      <Modal
        title="Take Profit / Stop Loss"
        onDismiss={onClose}
        headerProps={{ scale: 'md' }}
        minWidth="640px"
        minHeight="0px"
        bodyPadding="0 24px 24px"
        headerPadding="24px 24px 16px"
      >
        <div className="perps-root otoco-body">
          {/* Two-column order grid + bracket connector */}
          <div className="otoco-grid">

            {/* Left column — Order A (primary) */}
            <div className="otoco-card otoco-card--primary">
              <CardHeader
                title="Order A"
                subtitle="If order A executed, orders B and C will be placed"
              />
              <div className="otoco-divider" />
              <div className="otoco-rows">
                <Row label="Limit"       value={orderA.limit} />
                <Row
                  label="Side"
                  value={orderA.side}
                  valueColor={orderA.side === 'Buy' ? 'success' : 'failure'}
                />
                <Row label="Amount"      value={orderA.amount} />
                <Row label="Price"       value={orderA.price} />
                <Row label="Reduce Only" value={orderA.reduceOnly} />
              </div>
            </div>

            {/* Right column — Order B (TP) + Order C (SL) */}
            <div className="otoco-column">
              <div className="otoco-card otoco-card--secondary">
                <CardHeader
                  title="Order B"
                  subtitle="If order B executed cancel order C"
                />
                <div className="otoco-divider" />
                <div className="otoco-rows otoco-rows--tight">
                  <Row label={orderB.type ?? ''} value={orderB.status} />
                  <Row
                    label="Side"
                    value={orderB.side}
                    valueColor={orderB.side === 'Buy' ? 'success' : 'failure'}
                  />
                  <Row label="Amount" value={orderB.amount} />
                  <Row
                    label="Stop"
                    valueSlot={
                      <div className="otoco-stop">
                        <Text color="text" fontSize="14px">{orderB.stop}</Text>
                        <button
                          type="button"
                          className="otoco-edit-btn"
                          onClick={onEditOrderB}
                          aria-label="Edit Order B stop price"
                        >
                          <EditIcon />
                        </button>
                      </div>
                    }
                  />
                </div>
              </div>

              <div className="otoco-card otoco-card--secondary">
                <CardHeader
                  title="Order C"
                  subtitle="If order C executed cancel order B"
                />
                <div className="otoco-divider" />
                <div className="otoco-rows otoco-rows--tight">
                  <Row label={orderC.type ?? ''} value={orderC.status} />
                  <Row
                    label="Side"
                    value={orderC.side}
                    valueColor={orderC.side === 'Buy' ? 'success' : 'failure'}
                  />
                  <Row label="Amount" value={orderC.amount} />
                  <Row
                    label="Stop"
                    valueSlot={
                      <div className="otoco-stop">
                        <Text color="text" fontSize="14px">{orderC.stop}</Text>
                        <button
                          type="button"
                          className="otoco-edit-btn"
                          onClick={onEditOrderC}
                          aria-label="Edit Order C stop price"
                        >
                          <EditIcon />
                        </button>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>

            {/* Decorative OTOCO bracket connector (absolutely positioned) */}
            <svg
              className="otoco-bracket"
              viewBox="0 0 24 160"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* horizontal stub from Order A */}
              <line x1="0"  y1="80" x2="12" y2="80" stroke="currentColor" strokeWidth="1" />
              {/* vertical spine */}
              <line x1="12" y1="8"  x2="12" y2="152" stroke="currentColor" strokeWidth="1" />
              {/* top branch to Order B */}
              <line x1="12" y1="8"  x2="24" y2="8"  stroke="currentColor" strokeWidth="1" />
              {/* bottom branch to Order C */}
              <line x1="12" y1="152" x2="24" y2="152" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>

          {/* Footer copy */}
          <Text color="textSubtle" fontSize="12px" className="otoco-caption">
            *One-Triggers-a One Cancels the - Other order (OTOCO) allows you to place two orders -
            a primary order and two secondary orders at the same time.
          </Text>

          {/* Actions */}
          <div className="otoco-actions">
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
              onClick={onConfirm}
            >
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </ModalV2>
  )
}
