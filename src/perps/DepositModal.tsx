import { useState, useEffect } from 'react'
import '../ui/perps.css'
import './DepositModal.css'
import { Modal, Button, Tabs } from '../ui'

export interface DepositModalProps {
  open: boolean
  initialTab?: 'deposit' | 'withdraw'
  availableBalance?: string
  usedBalance?: string
  totalBalance?: string
  maxWithdrawable?: string
  walletBalance?: string
  onDeposit?: (amount: string) => void
  onWithdraw?: (amount: string) => void
  onClose?: () => void
}

const NETWORKS = ['BNB Chain', 'Ethereum', 'Arbitrum', 'Base']

export function DepositModal({
  open,
  initialTab = 'deposit',
  availableBalance = '0.00',
  usedBalance = '0.00',
  totalBalance = '0.00',
  maxWithdrawable = '0.00',
  walletBalance = '5,000.00',
  onDeposit,
  onWithdraw,
  onClose,
}: DepositModalProps) {
  const [tab, setTab] = useState<'deposit' | 'withdraw'>(initialTab)
  const [amount, setAmount] = useState('')
  const [network, setNetwork] = useState('BNB Chain')
  const [showNetworks, setShowNetworks] = useState(false)

  // Sync initialTab when modal opens
  useEffect(() => {
    if (open) {
      setTab(initialTab)
      setAmount('')
    }
  }, [open, initialTab])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose?.() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  const isDeposit  = tab === 'deposit'
  const rawMax     = parseFloat((isDeposit ? walletBalance : maxWithdrawable).replace(/,/g, '')) || 0
  const rawAmount  = parseFloat(amount) || 0
  const isValid    = rawAmount > 0 && rawAmount <= rawMax
  const usdValue   = rawAmount > 0 ? `$${rawAmount.toFixed(2)}` : '$0.00'
  const balance    = isDeposit ? walletBalance : maxWithdrawable

  const handleSubmit = () => {
    if (!isValid) return
    if (isDeposit) onDeposit?.(amount)
    else onWithdraw?.(amount)
    setAmount('')
    onClose?.()
  }

  return (
    <Modal
      open={open}
      title={isDeposit ? 'Deposit to Account' : 'Withdraw from Account'}
      onClose={onClose}
      width={420}
    >
        {/* Tabs */}
        <Tabs
          variant="pill"
          items={[
            { value: 'deposit',  label: 'Deposit' },
            { value: 'withdraw', label: 'Withdraw' },
          ]}
          value={isDeposit ? 'deposit' : 'withdraw'}
          onChange={v => { setTab(v as 'deposit' | 'withdraw'); setAmount('') }}
        />

        {/* Asset row */}
        <div className="dm-section-label">Asset</div>
        <div className="dm-selector">
          <div className="dm-token-icon">$</div>
          <span className="dm-selector-name">USDC</span>
          <span className="dm-selector-arrow">›</span>
        </div>

        {/* Network row (deposit only) */}
        {isDeposit && (
          <>
            <div className="dm-section-label">From network</div>
            <div style={{ position: 'relative' }}>
              <div
                className="dm-selector"
                onClick={() => setShowNetworks((v) => !v)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setShowNetworks((v) => !v)}
                style={{ cursor: 'pointer' }}
              >
                <span className="dm-network-dot" />
                <span className="dm-selector-name">{network}</span>
                <span className="dm-selector-arrow">›</span>
              </div>
              {showNetworks && (
                <div className="dm-network-dropdown">
                  {NETWORKS.map((n) => (
                    <button
                      key={n}
                      className={`dm-network-item${n === network ? ' active' : ''}`}
                      onClick={() => { setNetwork(n); setShowNetworks(false) }}
                    >
                      <span className="dm-network-dot" />
                      {n}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {/* Amount input */}
        <div className="dm-amount-header">
          <div className="dm-section-label" style={{ margin: 0 }}>
            {isDeposit ? 'Deposit' : 'Withdraw'}
          </div>
          <span className="dm-available">
            Available: <strong>{balance} USDC</strong>
          </span>
        </div>
        <div className="dm-input-row">
          <input
            className="dm-input"
            type="number"
            placeholder="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            aria-label={isDeposit ? 'Deposit amount' : 'Withdraw amount'}
          />
          <span className="dm-input-unit">USDC</span>
          <button className="dm-max-btn" onClick={() => setAmount(rawMax.toFixed(2))}>Max</button>
        </div>
        <div className="dm-usd-value">{usdValue}</div>

        {/* Summary rows */}
        <div className="dm-summary">
          {isDeposit ? (
            <>
              <div className="dm-summary-row">
                <span>Estimated time</span>
                <span className="dm-summary-val muted">~2 min</span>
              </div>
              <div className="dm-summary-row">
                <span>Network fee</span>
                <span className="dm-summary-val">0.0001 BNB <span className="muted">($0.06)</span></span>
              </div>
              <div className="dm-summary-row">
                <span>Deposit fee</span>
                <span className="dm-summary-val muted">—</span>
              </div>
            </>
          ) : (
            <>
              <div className="dm-summary-row">
                <span>Withdrawal fee</span>
                <span className="dm-summary-val muted">—</span>
              </div>
            </>
          )}
          <div className="dm-summary-row">
            <span>Account balance</span>
            <span className="dm-summary-val">${totalBalance}</span>
          </div>
          <div className="dm-summary-row">
            <span>Available margin</span>
            <span className="dm-summary-val" style={{ color: 'var(--p-long)' }}>${availableBalance}</span>
          </div>
          <div className="dm-summary-row">
            <span>In positions</span>
            <span className="dm-summary-val">${usedBalance}</span>
          </div>
        </div>

        {/* CTA */}
        <Button
          variant="primary"
          fullWidth
          size="lg"
          disabled={!amount || parseFloat(amount) <= 0}
          onClick={handleSubmit}
        >
          {!isValid
            ? `Enter ${isDeposit ? 'deposit' : 'withdrawal'} amount`
            : isDeposit
              ? `Deposit ${rawAmount.toFixed(2)} USDC`
              : `Withdraw ${rawAmount.toFixed(2)} USDC`}
        </Button>
    </Modal>
  )
}
