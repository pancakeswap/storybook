import { useState, useEffect } from 'react'
import '../ui/perps.css'
import './DepositModal.css'
import { Modal, ModalV2 } from '../ui/widgets/Modal'
import { DropdownMenu } from '../ui/widgets/DropdownMenu'
import { Button } from '../ui/components/Button'
import { ButtonMenu, ButtonMenuItem } from '../ui/components/ButtonMenu'
import { Input } from '../ui/components/Input'
import { Text } from '../ui/components/Text'
import { TokenSelectDropdown } from './TokenSelectDropdown'
import type { TokenOption } from './TokenSelectDropdown'

export interface DepositModalProps {
  open: boolean
  initialTab?: 'deposit' | 'withdraw'
  /** Wallet balance shown on the Deposit tab. */
  walletBalance?: string
  /** Withdrawable balance shown on the Withdraw tab. */
  maxWithdrawable?: string
  onDeposit?: (amount: string) => void
  onWithdraw?: (amount: string) => void
  onClose?: () => void
}

const NETWORKS = [
  { id: 'bnb',  label: 'BNB Chain' },
  { id: 'eth',  label: 'Ethereum' },
  { id: 'arb',  label: 'Arbitrum' },
  { id: 'base', label: 'Base' },
]

function ArrowDropDown() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 10l5 5 5-5z"/>
    </svg>
  )
}

function WalletIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 7.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2v-1.5M21 7.5h-4a2.5 2.5 0 000 5h4v-5z"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function BnbLogo() {
  return (
    <svg viewBox="0 0 32 32" width="40" height="40" aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="#F0B90B"/>
      <path d="M11.1 14.9L16 10l4.9 4.9 2.85-2.85L16 4.3 8.25 12.05zm-6.8 1.1L7.15 13.15 10 16l-2.85 2.85zM11.1 17.1L16 22l4.9-4.9 2.85 2.85L16 27.7l-7.75-7.75 2.85-2.85zm10.75-1.1L24.7 13.15 27.55 16 24.7 18.85z" fill="#fff"/>
      <path d="M18.9 16L16 13.1 13.85 15.25 13.6 15.5l-.35.35L13.1 16l2.9 2.9 2.9-2.9z" fill="#fff"/>
    </svg>
  )
}

function BnbBadge() {
  return (
    <span className="dm-net-badge" aria-hidden="true">
      <svg viewBox="0 0 16 16" width="11" height="11">
        <path d="M5.55 7.45L8 5l2.45 2.45 1.425-1.425L8 2.15 4.125 6.025zM2.15 8L3.575 6.575 5 8 3.575 9.425zM5.55 8.55L8 11l2.45-2.45 1.425 1.425L8 13.85l-3.875-3.875 1.425-1.425zm5.375-.55L12.35 6.575 13.775 8 12.35 9.425z" fill="#F0B90B"/>
        <path d="M9.45 8L8 6.55 6.925 7.625 6.8 7.75l-.175.175L6.55 8l1.45 1.45L9.45 8z" fill="#F0B90B"/>
      </svg>
    </span>
  )
}

export function DepositModal({
  open,
  initialTab = 'deposit',
  walletBalance = '20',
  maxWithdrawable = '0',
  onDeposit,
  onWithdraw,
  onClose,
}: DepositModalProps) {
  const [tab, setTab] = useState<'deposit' | 'withdraw'>(initialTab)
  const [amount, setAmount] = useState('')
  const [networkId, setNetworkId] = useState('bnb')
  const [token, setToken] = useState<Pick<TokenOption, 'id' | 'symbol'>>({ id: 'bnb', symbol: 'BNB' })
  const [tokenPickerOpen, setTokenPickerOpen] = useState(false)

  useEffect(() => {
    if (open) {
      setTab(initialTab)
      setAmount('')
      setTokenPickerOpen(false)
    }
  }, [open, initialTab])

  if (!open) return null

  const isDeposit = tab === 'deposit'
  const network   = NETWORKS.find((n) => n.id === networkId) ?? NETWORKS[0]
  const balance   = isDeposit ? walletBalance : maxWithdrawable
  const rawMax    = parseFloat(balance.replace(/,/g, '')) || 0
  const rawAmount = parseFloat(amount) || 0
  const isValid   = rawAmount > 0 && rawAmount <= rawMax

  const handleSubmit = () => {
    if (!isValid) return
    if (isDeposit) onDeposit?.(amount)
    else onWithdraw?.(amount)
    setAmount('')
    onClose?.()
  }

  const networkItems = NETWORKS.map((n) => ({
    label: n.label,
    icon: <BnbBadge />,
    onClick: () => setNetworkId(n.id),
  }))

  // Token picker replaces the whole modal content when open
  if (tokenPickerOpen) {
    return (
      <ModalV2 isOpen={open} onDismiss={onClose} closeOnOverlayClick>
        <TokenSelectDropdown
          selectedId={token.id}
          onSelect={(t) => {
            setToken({ id: t.id, symbol: t.symbol })
            setTokenPickerOpen(false)
          }}
          onClose={() => setTokenPickerOpen(false)}
        />
      </ModalV2>
    )
  }

  return (
    <ModalV2 isOpen={open} onDismiss={onClose} closeOnOverlayClick>
      <Modal
        title="Account"
        onDismiss={onClose}
        headerProps={{ scale: 'md' }}
        minWidth="411px"
        minHeight="0px"
        bodyPadding="0 24px 24px"
        headerPadding="24px 24px 16px"
      >
        <div className="dm-body">
          {/* Tabs — PCS ButtonMenu */}
          <ButtonMenu
            scale="md"
            variant="primary"
            activeIndex={isDeposit ? 0 : 1}
            onItemClick={(i) => {
              setTab(i === 0 ? 'deposit' : 'withdraw')
              setAmount('')
            }}
            fullWidth
          >
            <ButtonMenuItem>Deposit</ButtonMenuItem>
            <ButtonMenuItem>Withdraw</ButtonMenuItem>
          </ButtonMenu>

          {/* Network select — PCS DropdownMenu with Button trigger */}
          <DropdownMenu
            placement="bottom-start"
            items={networkItems}
            trigger={
              <Button
                variant="light"
                scale="md"
                width="100%"
                startIcon={<BnbBadge />}
                endIcon={<ArrowDropDown />}
                style={{
                  justifyContent: 'flex-start',
                  gap: 8,
                  color: 'var(--pcs-colors-text)',
                  fontSize: 16,
                  fontWeight: 400,
                }}
              >
                <span className="dm-network-label">{network.label}</span>
              </Button>
            }
          />

          {/* Token + amount field */}
          <div className="dm-field">
            <Button
              variant="text"
              scale="md"
              startIcon={<BnbLogo />}
              endIcon={<ArrowDropDown />}
              aria-label="Select token"
              onClick={() => setTokenPickerOpen(true)}
              style={{
                padding: '4px 8px 4px 4px',
                height: 'auto',
                color: 'var(--pcs-colors-text)',
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: '-0.2px',
                flexShrink: 0,
              }}
            >
              {token.symbol}
            </Button>

            <Input
              type="number"
              inputMode="decimal"
              placeholder="0.0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="dm-amount"
              aria-label={isDeposit ? 'Deposit amount' : 'Withdraw amount'}
            />
          </div>

          {/* Balance row */}
          <div className="dm-balance-row">
            <Text color="textSubtle" fontSize="14px">Balance</Text>
            <div className="dm-balance-right">
              <Text
                color="textSubtle"
                fontSize="12px"
                bold
                style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: 4 }}
              >
                <WalletIcon />
                {balance}
              </Text>
              <Button
                variant="text"
                scale="xs"
                onClick={() => setAmount(String(rawMax))}
                style={{ padding: '4px 6px', height: 'auto' }}
              >
                MAX
              </Button>
            </div>
          </div>

          {/* Primary CTA — PCS Button */}
          <Button
            variant="primary"
            scale="md"
            width="100%"
            disabled={!isValid}
            onClick={handleSubmit}
          >
            {isDeposit ? 'Deposit' : 'Withdraw'}
          </Button>
        </div>
      </Modal>
    </ModalV2>
  )
}
