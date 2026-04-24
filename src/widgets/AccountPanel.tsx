import '../ui/perps.css'
import './AccountPanel.css'

export interface AccountPanelProps {
  /** Spot total value string */
  spotTotal?: string
  /** Perp total value string */
  perpTotal?: string
  /** Perp unrealized PnL string */
  unrealizedPnl?: string
  /** Account market ratio */
  accountMarketRatio?: string
  /** Account maintenance margin */
  maintenanceMargin?: string
  /** Account equity (margin section) */
  accountEquity?: string
  /** Deposit button handler */
  onDeposit?: () => void
  /** Withdraw button handler */
  onWithdraw?: () => void
  /** Transfer button handler */
  onTransfer?: () => void
  /** Multi-Assets Mode button handler */
  onMultiAssets?: () => void
}

export function AccountPanel({
  spotTotal = '$---',
  perpTotal = '$---',
  unrealizedPnl = '$---',
  accountMarketRatio = '0.00%',
  maintenanceMargin = '$---',
  accountEquity = '$---',
  onDeposit,
  onWithdraw,
  onTransfer,
  onMultiAssets,
}: AccountPanelProps) {
  return (
    <div className="perps-root ac-root">

      {/* ── Deposit / Withdraw / Transfer ─────────────── */}
      <div className="ac-actions">
        <button type="button" className="ac-btn ac-btn-primary" onClick={onDeposit}>
          Deposit
        </button>
        <button type="button" className="ac-btn ac-btn-secondary" onClick={onWithdraw}>
          Withdraw
        </button>
        <button type="button" className="ac-btn ac-btn-secondary" onClick={onTransfer}>
          Transfer
        </button>
      </div>

      {/* ── Account Equity ─────────────────────────────── */}
      <div className="ac-section">
        <div className="ac-section-title">Account Equity</div>
        <div className="ac-row">
          <span className="ac-label">Spot Total Value</span>
          <span className="ac-value">{spotTotal}</span>
        </div>
        <div className="ac-row">
          <span className="ac-label">Perp Total Value</span>
          <span className="ac-value">{perpTotal}</span>
        </div>
        <div className="ac-row">
          <span className="ac-label">Perp Unrealized PnL</span>
          <span className="ac-value">{unrealizedPnl}</span>
        </div>
      </div>

      {/* ── Margin ─────────────────────────────────────── */}
      <div className="ac-section">
        <div className="ac-section-title">Margin</div>
        <div className="ac-row">
          <span className="ac-label">Account Market Ratio</span>
          <span className="ac-value">{accountMarketRatio}</span>
        </div>
        <div className="ac-row">
          <span className="ac-label">Account Maintenance Margin</span>
          <span className="ac-value">{maintenanceMargin}</span>
        </div>
        <div className="ac-row">
          <span className="ac-label">Account Equity</span>
          <span className="ac-value">{accountEquity}</span>
        </div>
      </div>

      {/* ── Multi-Assets Mode ──────────────────────────── */}
      <div className="ac-footer">
        <button type="button" className="ac-multi-assets-btn" onClick={onMultiAssets}>
          Multi-Assets Mode
        </button>
      </div>

    </div>
  )
}
