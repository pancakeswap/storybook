import '../ui/perps.css'

export interface PoolDashboardProps {
  tvl: string
  apr: string
  apy: string
  utilizationPct: number
  borrowed: string
  totalSupply: string
  alpPrice: string
  alpBalance?: string
  onAddLiquidity?: () => void
  onRemoveLiquidity?: () => void
}

export function PoolDashboard({
  tvl,
  apr,
  apy,
  utilizationPct,
  borrowed,
  totalSupply,
  alpPrice,
  alpBalance,
  onAddLiquidity,
  onRemoveLiquidity,
}: PoolDashboardProps) {
  const clampedUtil = Math.max(0, Math.min(100, utilizationPct))
  const utilColor =
    clampedUtil > 80 ? 'var(--p-short)' : clampedUtil > 60 ? 'var(--p-warning)' : 'var(--p-primary)'

  return (
    <div className="perps-root" style={{ padding: 24, maxWidth: 520 }}>
      <div className="p-card">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'var(--p-gradient-alp)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: 14,
                color: 'var(--p-text-on-primary)',
              }}
            >
              ALP
            </div>
            <div>
              <p className="p-value">ALP Pool</p>
              <p className="p-label">ULL Liquidity Pool</p>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p className="p-label">ALP Price</p>
            <p className="p-value" style={{ color: 'var(--p-primary)' }}>
              {alpPrice}
            </p>
          </div>
        </div>

        {/* TVL */}
        <div className="p-card-alt" style={{ marginBottom: 12 }}>
          <p className="p-label">Total Value Locked</p>
          <p className="p-value-lg" style={{ marginTop: 4 }}>
            {tvl}
          </p>
        </div>

        {/* APR / APY / Supply grid */}
        <div className="p-stat-grid p-stat-grid-2" style={{ marginBottom: 12 }}>
          <div className="p-card-alt">
            <p className="p-label">APR</p>
            <p className="p-value" style={{ color: 'var(--p-long)', marginTop: 4 }}>
              {apr}
            </p>
            <p className="p-label" style={{ fontSize: 11, marginTop: 2 }}>
              Trading Fee + Swap Fee
            </p>
          </div>
          <div className="p-card-alt">
            <p className="p-label">APY</p>
            <p className="p-value" style={{ color: 'var(--p-long)', marginTop: 4 }}>
              {apy}
            </p>
            <p className="p-label" style={{ fontSize: 11, marginTop: 2 }}>
              Compounded
            </p>
          </div>
        </div>

        {/* Utilization */}
        <div className="p-card-alt" style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p className="p-label">Pool Utilization</p>
            <p className="p-label" style={{ color: utilColor, fontWeight: 600 }}>
              {clampedUtil.toFixed(1)}%
            </p>
          </div>
          <div className="p-progress-bar" style={{ marginTop: 8 }}>
            <div
              className="p-progress-fill"
              style={{
                width: `${clampedUtil}%`,
                background:
                  clampedUtil > 80
                    ? 'linear-gradient(90deg, var(--p-warning), var(--p-short))'
                    : 'linear-gradient(90deg, var(--p-primary), var(--p-secondary))',
              }}
            />
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}
          >
            <p className="p-label">Borrowed: {borrowed}</p>
            <p className="p-label">Total: {totalSupply}</p>
          </div>
        </div>

        {/* My ALP balance */}
        {alpBalance && (
          <div
            className="p-card-alt"
            style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}
          >
            <p className="p-label">My ALP Balance</p>
            <p className="p-value-sm">{alpBalance} ALP</p>
          </div>
        )}

        {/* Actions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <button className="p-btn p-btn-primary p-btn-full" onClick={onAddLiquidity}>
            Add Liquidity
          </button>
          <button className="p-btn p-btn-secondary p-btn-full" onClick={onRemoveLiquidity}>
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}
