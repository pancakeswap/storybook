import { useState } from 'react'
import '../ui/perps.css'

const TOKENS = [
  { symbol: 'USDC', icon: '💵' },
  { symbol: 'USDT', icon: '💵' },
]

export interface AddLiquidityProps {
  tokenBalances?: Record<string, string>
  alpPerToken?: Record<string, string>
  onMint?: (token: string, amount: string) => void
}

export function AddLiquidity({
  tokenBalances = { USDC: '5,000.00', USDT: '2,500.00' },
  alpPerToken = { USDC: '0.9812', USDT: '0.9808' },
  onMint,
}: AddLiquidityProps) {
  const [selectedToken, setSelectedToken] = useState('USDC')
  const [amount, setAmount] = useState('')
  const [showTokenList, setShowTokenList] = useState(false)

  const balance = tokenBalances[selectedToken] ?? '0'
  const rawBalance = parseFloat(balance.replace(/,/g, '')) || 0
  const rawAmount = parseFloat(amount) || 0
  const alpRate = parseFloat(alpPerToken[selectedToken] ?? '1')
  const estimatedAlp = rawAmount > 0 ? (rawAmount / alpRate).toFixed(4) : '—'

  const handleHalf = () => setAmount((rawBalance / 2).toFixed(2))
  const handleMax = () => setAmount(rawBalance.toFixed(2))

  const isValid = rawAmount > 0 && rawAmount <= rawBalance

  return (
    <div className="perps-root" style={{ padding: 24, maxWidth: 420 }}>
      <div className="p-card">
        <p className="p-section-title">Add Liquidity</p>

        {/* Token + amount input */}
        <p className="p-label" style={{ marginBottom: 6 }}>
          Deposit Token
        </p>
        <div className="p-input-wrap" style={{ position: 'relative' }}>
          {/* Token selector */}
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <button
              className="p-token-select"
              onClick={() => setShowTokenList((v) => !v)}
            >
              <span>{TOKENS.find((t) => t.symbol === selectedToken)?.icon}</span>
              <span>{selectedToken}</span>
              <span className="p-chevron">▼</span>
            </button>
            {showTokenList && (
              <div
                style={{
                  position: 'absolute',
                  top: '110%',
                  left: 0,
                  background: 'var(--pcs-colors-surface-card)',
                  border: '1px solid var(--pcs-colors-border)',
                  borderRadius: 'var(--p-radius-md)',
                  boxShadow: 'var(--pcs-shadows-dropdown)',
                  zIndex: 10,
                  minWidth: 120,
                  overflow: 'hidden',
                }}
              >
                {TOKENS.map((t) => (
                  <button
                    key={t.symbol}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      width: '100%',
                      padding: '10px 14px',
                      background: t.symbol === selectedToken ? 'var(--pcs-colors-surface-subtle)' : 'transparent',
                      border: 'none',
                      color: 'var(--pcs-colors-text)',
                      fontFamily: 'inherit',
                      fontSize: 14,
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      setSelectedToken(t.symbol)
                      setShowTokenList(false)
                      setAmount('')
                    }}
                  >
                    <span>{t.icon}</span>
                    <span>{t.symbol}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <input
            className="p-input-field"
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className="p-input-actions">
            <button className="p-btn-ghost" onClick={handleHalf}>
              HALF
            </button>
            <button className="p-btn-ghost" onClick={handleMax}>
              MAX
            </button>
          </div>
        </div>

        {/* Balance */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 6, marginBottom: 16 }}>
          <p className="p-label">
            Balance:{' '}
            <span style={{ color: 'var(--pcs-colors-text)' }}>
              {balance} {selectedToken}
            </span>
          </p>
        </div>

        {/* Estimated ALP */}
        <div className="p-card-alt" style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p className="p-label">Estimated ALP Received</p>
            <p className="p-value" style={{ color: 'var(--pcs-colors-brand)' }}>
              {estimatedAlp} ALP
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
            <p className="p-label">Rate</p>
            <p className="p-label">
              1 ALP ≈ {alpRate.toFixed(4)} {selectedToken}
            </p>
          </div>
        </div>

        <hr className="p-divider" />

        <button
          className="p-btn p-btn-primary p-btn-full"
          disabled={!isValid}
          onClick={() => isValid && onMint?.(selectedToken, amount)}
        >
          Confirm Mint ALP
        </button>

        {rawAmount > rawBalance && (
          <p className="p-label p-short" style={{ textAlign: 'center', marginTop: 8 }}>
            Insufficient {selectedToken} balance
          </p>
        )}
      </div>
    </div>
  )
}
