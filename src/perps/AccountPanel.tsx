import '../ui/perps.css'
import './AccountPanel.css'

export interface AccountEquity {
  spot: string
  perp: string
  unrealizedPnl: string
}

export interface AccountPanelProps {
  /** Account-equity block values. */
  equity?: AccountEquity
  /** Margin ratio text (shield badge). */
  marginRatio?: string
  /** Account margin ratio detail value. */
  accountMarginRatio?: string
  /** Fired when the amber Deposit pill is clicked. */
  onDeposit?: () => void
  /** Fired when the Withdraw button is clicked. */
  onWithdraw?: () => void
  /** Fired when the Transfer button is clicked. */
  onTransfer?: () => void
}

function ShieldIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 2L3 5v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V5l-9-3z"/>
    </svg>
  )
}

const DEFAULT_EQUITY: AccountEquity = {
  spot: '0.00 USD',
  perp: '6.82 USD',
  unrealizedPnl: '0.02 USD',
}

export function AccountPanel({
  equity = DEFAULT_EQUITY,
  marginRatio = '2.90%',
  accountMarginRatio = '—',
  onDeposit,
  onWithdraw,
  onTransfer,
}: AccountPanelProps) {
  return (
    <div className="perps-root ac-root">
      <div className="ac-header">
        <span className="ac-title">Account</span>
      </div>

      {/* Deposit / Withdraw / Transfer */}
      <div className="ac-actions">
        <button type="button" className="ac-btn ac-btn-primary" onClick={onDeposit}>
          Deposit
        </button>
        <button type="button" className="ac-btn" onClick={onWithdraw}>
          Withdraw
        </button>
        <button type="button" className="ac-btn" onClick={onTransfer}>
          Transfer
        </button>
      </div>

      {/* Account equity */}
      <div className="ac-section">
        <div className="ac-section-title">Account Equity</div>
        <div className="ac-row">
          <span className="ac-label">Spot total value</span>
          <span className="ac-value">{equity.spot}</span>
        </div>
        <div className="ac-row">
          <span className="ac-label">Perp total value</span>
          <span className="ac-value">{equity.perp}</span>
        </div>
        <div className="ac-row">
          <span className="ac-label">Perpetuals unrealized Pnl</span>
          <span className="ac-value">{equity.unrealizedPnl}</span>
        </div>
      </div>

      {/* Margin */}
      <div className="ac-section ac-section-bordered">
        <div className="ac-section-head">
          <span className="ac-section-title">Margin</span>
          <span className="ac-shield p-long">
            <ShieldIcon />
            {marginRatio}
          </span>
        </div>
        <div className="ac-row">
          <span className="ac-label">Account Margin Ratio</span>
          <span className="ac-value">{accountMarginRatio}</span>
        </div>
      </div>
    </div>
  )
}
