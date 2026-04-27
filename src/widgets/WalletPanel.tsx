import './perps.css'
import './WalletPanel.css'
import { Button } from '../primitives/Button'
import { Text } from '../primitives/Text'

export interface WalletPanelProps {
  /** Truncated address shown at the top, e.g. "0x3D…4aa8". */
  address?: string
  /** Total portfolio value, already formatted. */
  totalValue?: string
  /** Text of the current Assets Mode row (Multi-Assets Mode / Single Asset Mode). */
  assetsMode?: string
  /** Text of the current Position Mode row (One-way Mode / Hedge Mode). */
  positionMode?: string
  /** Click handlers. */
  onDeposit?: () => void
  onWithdraw?: () => void
  onCopyAddress?: () => void
  onAssetsMode?: () => void
  onPositionMode?: () => void
  onOrderConfirmation?: () => void
  onViewExplorer?: () => void
  onApiManagement?: () => void
  onDisconnect?: () => void
}

/* ── Icons ────────────────────────────────────────────────── */
function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 3h10a2 2 0 012 2v10M16 7H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 15h-2v-6h2zm0-8h-2V7h2z" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ApiIcon() {
  return (
    <svg width="16" height="14" viewBox="0 0 24 18" fill="none" aria-hidden="true">
      <path
        d="M8 4l-5 5 5 5M16 4l5 5-5 5M13 2l-2 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PowerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2v10M6.34 6.34a9 9 0 1011.32 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Default MetaMask-ish fox-shaped 24×24 avatar. */
function FoxAvatar() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#E37826" />
      <path d="M7 8l6-3 1 6-2 2-5-5z" fill="#F6871F" />
      <path d="M25 8l-6-3-1 6 2 2 5-5z" fill="#F6871F" />
      <path d="M11 14l2 4-4 1 2-5z" fill="#CC6228" />
      <path d="M21 14l-2 4 4 1-2-5z" fill="#CC6228" />
      <circle cx="12" cy="17" r="1.5" fill="#1A1A1A" />
      <circle cx="20" cy="17" r="1.5" fill="#1A1A1A" />
      <path d="M12 22l4 2 4-2-2 3h-4l-2-3z" fill="#CC6228" />
    </svg>
  )
}

export function WalletPanel({
  address = '0x3D…4aa8',
  totalValue = '$5.93',
  assetsMode = 'Multi-Assets Mode',
  positionMode = 'One-way Mode',
  onDeposit,
  onWithdraw,
  onCopyAddress,
  onAssetsMode,
  onPositionMode,
  onOrderConfirmation,
  onViewExplorer,
  onApiManagement,
  onDisconnect,
}: WalletPanelProps) {
  return (
    <section className="perps-root wp-root" role="menu" aria-label="Wallet">
      {/* Address header */}
      <div className="wp-address-row">
        <FoxAvatar />
        <Text color="text" fontSize="14px" className="wp-address">{address}</Text>
        <button
          type="button"
          className="wp-icon-btn"
          onClick={onCopyAddress}
          aria-label="Copy address"
        >
          <CopyIcon />
        </button>
      </div>

      {/* Inner card */}
      <div className="wp-inner-card">
        {/* Total Value */}
        <div className="wp-total">
          <Text color="textSubtle" fontSize="12px">Total Value</Text>
          <Text color="primary" fontSize="16px" bold>{totalValue}</Text>
        </div>

        {/* Deposit / Withdraw buttons */}
        <div className="wp-actions">
          <Button
            variant="primary"
            scale="sm"
            width="100%"
            onClick={onDeposit}
          >
            Deposit
          </Button>
          <Button
            variant="secondary"
            scale="sm"
            width="100%"
            onClick={onWithdraw}
          >
            Withdraw
          </Button>
        </div>

        {/* Preference section */}
        <div className="wp-prefs">
          <Text fontSize="16px" color="text">Preference</Text>

          <button
            type="button"
            role="menuitem"
            className="wp-pref-row"
            onClick={onAssetsMode}
          >
            <Text color="textSubtle" fontSize="14px">Assets Mode</Text>
            <span className="wp-pref-right">
              <Text color="text" fontSize="14px">{assetsMode}</Text>
              <ChevronRight />
            </span>
          </button>

          <div className="wp-pref-row wp-pref-row--static">
            <Text color="textSubtle" fontSize="14px">Position Mode</Text>
            <span className="wp-pref-right">
              <Text color="text" fontSize="14px">{positionMode}</Text>
              <button
                type="button"
                className="wp-icon-btn wp-info-btn"
                onClick={onPositionMode}
                aria-label="About position mode"
              >
                <InfoIcon />
              </button>
            </span>
          </div>

          <button
            type="button"
            role="menuitem"
            className="wp-pref-row"
            onClick={onOrderConfirmation}
          >
            <Text color="textSubtle" fontSize="14px">Order Confirmation</Text>
            <span className="wp-pref-right">
              <ChevronRight />
            </span>
          </button>
        </div>
      </div>

      {/* Outer menu items */}
      <div className="wp-menu">
        <button type="button" role="menuitem" className="wp-menu-item" onClick={onViewExplorer}>
          <span className="wp-menu-icon"><GlobeIcon /></span>
          <Text color="textSubtle" fontSize="14px">View on explorer</Text>
        </button>
        <button type="button" role="menuitem" className="wp-menu-item" onClick={onApiManagement}>
          <span className="wp-menu-icon"><ApiIcon /></span>
          <Text color="textSubtle" fontSize="14px">API management</Text>
        </button>
        <button type="button" role="menuitem" className="wp-menu-item" onClick={onDisconnect}>
          <span className="wp-menu-icon"><PowerIcon /></span>
          <Text color="textSubtle" fontSize="14px">Disconnect</Text>
        </button>
      </div>
    </section>
  )
}
