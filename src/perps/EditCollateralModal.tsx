import { useState } from 'react'
import '../ui/perps.css'
import { Modal, Tabs, Slider, Button } from '../ui'

type CollateralTab = 'deposit' | 'withdraw'

export interface EditCollateralModalProps {
  open: boolean
  positionId: string
  pair: string
  direction: 'long' | 'short'
  margin: string           // e.g. "$348.00"
  leverage: number
  liquidationPrice: string // e.g. "$2.05"
  size: string
  availableBalance?: string  // wallet USDC balance e.g. "4.61"
  onDeposit?: (positionId: string, amount: string) => void
  onWithdraw?: (positionId: string, amount: string) => void
  onClose: () => void
}

const PCT_MARKS = [
  { value: 0,   label: '0%'   },
  { value: 25,  label: '25%'  },
  { value: 50,  label: '50%'  },
  { value: 75,  label: '75%'  },
  { value: 100, label: '100%' },
]

function parseNum(s: string) {
  return parseFloat(s.replace(/[$,]/g, '')) || 0
}

function fmtUSD(n: number) {
  return n >= 100
    ? '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : '$' + n.toFixed(4)
}

export function EditCollateralModal({
  open, positionId, pair, direction, margin, leverage, liquidationPrice, size,
  availableBalance = '0.00',
  onDeposit, onWithdraw, onClose,
}: EditCollateralModalProps) {
  const [tab, setTab] = useState<CollateralTab>('deposit')
  const [amount, setAmount] = useState('')
  const [sliderPct, setSliderPct] = useState(0)
  const [execOpen, setExecOpen] = useState(false)

  const marginNum   = parseNum(margin)
  const balanceNum  = parseFloat(availableBalance) || 0
  // Max withdrawable ≈ 80% of margin (keeping min margin)
  const maxWithdraw = Math.max(0, marginNum * 0.8)
  const maxAmount   = tab === 'deposit' ? balanceNum : maxWithdraw
  const amountNum   = parseFloat(amount) || 0
  const hasAmount   = amountNum > 0 && amountNum <= maxAmount + 0.000001

  // Withdraw at high pct causes invalid liquidation price
  const liqInvalid  = tab === 'withdraw' && sliderPct >= 80

  // New liquidation price after collateral change (simplified formula)
  const liqNum = parseNum(liquidationPrice)
  const newLiqNum = tab === 'withdraw' && amountNum > 0 && marginNum > 0
    ? liqNum * (1 + (amountNum / (marginNum - amountNum)) * 0.9)
    : tab === 'deposit' && amountNum > 0 && marginNum > 0
    ? liqNum * (1 - (amountNum / (marginNum + amountNum)) * 0.9)
    : null

  // Leverage after collateral change
  const newLeverage = tab === 'deposit' && amountNum > 0
    ? leverage * (marginNum / (marginNum + amountNum))
    : tab === 'withdraw' && amountNum > 0 && marginNum - amountNum > 0
    ? leverage * (marginNum / (marginNum - amountNum))
    : leverage

  const handleAmountChange = (val: string) => {
    setAmount(val)
    const n = parseFloat(val) || 0
    setSliderPct(maxAmount > 0 ? Math.min(100, Math.round((n / maxAmount) * 100)) : 0)
  }

  const handleSliderChange = (pct: number) => {
    setSliderPct(pct)
    const n = (pct / 100) * maxAmount
    setAmount(n > 0 ? n.toFixed(6) : '')
  }

  const handleTabChange = (v: string) => {
    setTab(v as CollateralTab)
    setAmount('')
    setSliderPct(0)
    setExecOpen(false)
  }

  const handleConfirm = () => {
    if (!hasAmount || liqInvalid) return
    if (tab === 'deposit') onDeposit?.(positionId, amount)
    else onWithdraw?.(positionId, amount)
    onClose()
  }

  let btnLabel = 'Enter an amount'
  if (hasAmount && liqInvalid) btnLabel = 'Invalid liquidation price'
  else if (hasAmount)          btnLabel = tab === 'deposit' ? 'Deposit' : 'Withdraw'

  const btnDisabled = !hasAmount || liqInvalid

  const title = `Edit collateral: ${direction.charAt(0).toUpperCase() + direction.slice(1)} ${pair}`

  return (
    <Modal open={open} title={title} onClose={onClose} width={440}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

        {/* ── Tabs ────────────────────────────────────────── */}
        <Tabs
          variant="pill"
          value={tab}
          onChange={handleTabChange}
          items={[
            { value: 'deposit',  label: 'Deposit'  },
            { value: 'withdraw', label: 'Withdraw' },
          ]}
        />

        {/* ── Amount box ──────────────────────────────────── */}
        <div className="p-card-alt">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span className="p-label" style={{ textTransform: 'capitalize' }}>{tab}</span>
            <span className="p-label">
              {tab === 'deposit'
                ? `Balance: ${balanceNum.toFixed(2)}`
                : `Max: ${maxWithdraw.toFixed(2)}`}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              type="number"
              min="0"
              placeholder="0.0"
              value={amount}
              onChange={e => handleAmountChange(e.target.value)}
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                fontSize: 20,
                fontWeight: 700,
                color: 'var(--pcs-colors-text)',
                fontFamily: 'inherit',
                minWidth: 0,
              }}
            />
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                background: 'var(--pcs-colors-surface-subtle)',
                border: '1px solid var(--pcs-colors-border)',
                borderRadius: 8,
                padding: '6px 10px',
                color: 'var(--pcs-colors-text)',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: 14,
                fontWeight: 600,
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: 16 }}>💲</span>
              USDC
              <span style={{ fontSize: 10, color: 'var(--pcs-colors-text-muted)' }}>▼</span>
            </button>
          </div>
        </div>

        {/* ── Slider ──────────────────────────────────────── */}
        <Slider
          min={0} max={100} step={1}
          value={sliderPct}
          onChange={handleSliderChange}
          marks={PCT_MARKS}
          formatValue={v => `${v}%`}
        />

        {/* ── CTA button ──────────────────────────────────── */}
        <button
          disabled={btnDisabled}
          onClick={handleConfirm}
          style={{
            width: '100%',
            padding: '14px',
            borderRadius: 'var(--p-radius-md)',
            border: 'none',
            fontSize: 14,
            fontWeight: 600,
            fontFamily: 'inherit',
            cursor: btnDisabled ? 'not-allowed' : 'pointer',
            background: !hasAmount || liqInvalid
              ? 'var(--pcs-colors-surface-subtle)'
              : 'var(--pcs-colors-brand)',
            color: !hasAmount || liqInvalid
              ? 'var(--pcs-colors-text-muted)'
              : 'var(--pcs-colors-text-on-brand)',
            transition: 'background 0.12s',
          }}
        >
          {btnLabel}
        </button>

        {/* ── Info rows ───────────────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {tab === 'withdraw' && hasAmount && (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span className="p-label">Receive</span>
              <span className="p-value-sm">
                {amountNum.toFixed(2)} USDC (${amountNum.toFixed(2)})
              </span>
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className="p-label">Liquidation price</span>
            <span className="p-value-sm" style={{ color: 'var(--pcs-colors-short)' }}>
              {newLiqNum
                ? `${liquidationPrice} → ${fmtUSD(newLiqNum)}`
                : liquidationPrice}
            </span>
          </div>
        </div>

        {/* ── Execution details ───────────────────────────── */}
        <div className="p-card-alt" style={{ padding: '12px 14px' }}>
          <button
            onClick={() => setExecOpen(o => !o)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              fontFamily: 'inherit',
              color: 'var(--pcs-colors-text)',
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Execution details
            <span style={{ fontSize: 11, color: 'var(--pcs-colors-text-muted)' }}>
              {execOpen ? '▲' : '▼'}
            </span>
          </button>

          {execOpen && (
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Fees',              value: '—' },
                { label: 'Network fee',       value: '-$0.44' },
                { label: 'Leverage',          value: `${newLeverage.toFixed(2)}×` },
                { label: 'Size',              value: size },
                { label: 'Collateral (USDC)', value: margin },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="p-label">{row.label}</span>
                  <span className="p-value-sm">{row.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </Modal>
  )
}
