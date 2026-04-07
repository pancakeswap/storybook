import { useState } from 'react'
import '../ui/perps.css'

export interface DepositWithdrawProps {
  availableBalance?: string
  usedBalance?: string
  totalBalance?: string
  maxWithdrawable?: string
  onDeposit?: (amount: string) => void
  onWithdraw?: (amount: string) => void
}

export function DepositWithdraw({
  availableBalance = '2,500.00',
  usedBalance = '1,200.00',
  totalBalance = '3,700.00',
  maxWithdrawable = '2,500.00',
  onDeposit,
  onWithdraw,
}: DepositWithdrawProps) {
  const [tab, setTab] = useState<'deposit' | 'withdraw'>('deposit')
  const [amount, setAmount] = useState('')

  const isDeposit = tab === 'deposit'
  const rawMax    = parseFloat((isDeposit ? availableBalance : maxWithdrawable).replace(/,/g, '')) || 0
  const rawAmount = parseFloat(amount) || 0
  const isValid   = rawAmount > 0 && rawAmount <= rawMax

  const handleMax  = () => setAmount(rawMax.toFixed(2))
  const handleHalf = () => setAmount((rawMax / 2).toFixed(2))

  const handleSubmit = () => {
    if (!isValid) return
    if (isDeposit) onDeposit?.(amount)
    else onWithdraw?.(amount)
    setAmount('')
  }

  return (
    <div className="perps-root" style={{ padding: 0 }}>
      <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>

        {/* Tabs */}
        <div className="p-tabs">
          <button className={`p-tab${tab === 'deposit' ? ' active' : ''}`}
            onClick={() => { setTab('deposit'); setAmount('') }}>Deposit</button>
          <button className={`p-tab${tab === 'withdraw' ? ' active' : ''}`}
            onClick={() => { setTab('withdraw'); setAmount('') }}>Withdraw</button>
        </div>

        {/* Account summary */}
        <div style={{ background: 'var(--p-card-alt)', borderRadius: 'var(--p-radius-md)', overflow: 'hidden' }}>
          {([
            ['Portfolio Value',  `$${totalBalance}`,     'var(--p-text)'  ],
            ['Available Margin', `$${availableBalance}`, 'var(--p-long)'  ],
            ['In Positions',     `$${usedBalance}`,      'var(--p-text)'  ],
          ] as [string, string, string][]).map(([label, value, color], i, arr) => (
            <div key={label} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '8px 12px',
              borderBottom: i < arr.length - 1 ? '1px solid var(--p-border)' : 'none',
            }}>
              <span className="p-label">{label}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color }}>{value}</span>
            </div>
          ))}
        </div>

        {/* Amount input */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
            <p className="p-label">{isDeposit ? 'Amount to Deposit' : 'Amount to Withdraw'}</p>
            <p className="p-label">
              {isDeposit ? 'Wallet' : 'Max'}:{' '}
              <span style={{ color: 'var(--p-text)' }}>
                ${isDeposit ? availableBalance : maxWithdrawable}
              </span>
            </p>
          </div>
          <div className="p-input-wrap">
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--p-text-muted)', flexShrink: 0 }}>USDC</span>
            <input className="p-input-field" type="number" placeholder="0.00"
              value={amount} onChange={(e) => setAmount(e.target.value)} />
            <div className="p-input-actions">
              <button className="p-btn-ghost" onClick={handleHalf}>½</button>
              <button className="p-btn-ghost" onClick={handleMax}>MAX</button>
            </div>
          </div>
        </div>

        {/* Cross-chain notice (deposit only) */}
        {isDeposit && (
          <div className="p-notice p-notice-info">
            Cross-chain deposit supported — bridged assets auto-swap to USDC.
          </div>
        )}

        {/* CTA */}
        <button
          className={`p-btn p-btn-full ${isDeposit ? 'p-btn-primary' : 'p-btn-outline'}`}
          style={{ height: 42 }}
          disabled={!isValid}
          onClick={handleSubmit}
        >
          {isDeposit ? 'Deposit USDC' : 'Withdraw USDC'}
        </button>

        {rawAmount > rawMax && rawAmount > 0 && (
          <p style={{ textAlign: 'center', fontSize: 11, color: 'var(--p-short)', margin: 0 }}>
            Amount exceeds {isDeposit ? 'wallet balance' : 'available margin'}
          </p>
        )}
      </div>
    </div>
  )
}
