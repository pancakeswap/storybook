import { useState, useCallback } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import { Tag } from '../components/Tag'
import { TableView } from '../components/TableView'
import type { IColumnsType, ISortOrder } from '../components/TableView/Table'
import { CardViewIcon, ListViewIcon, FarmIcon } from '../Icons'
import { WalletPageShell } from './wallet-shared'
import type { WalletTab } from './wallet-shared'

/* ── Types ─────────────────────────────────────────────────── */

type PositionStatus = 'Active' | 'Out of range' | 'Inactive' | 'Closed'
type PoolType = 'All' | 'V3' | 'V2' | 'StableSwap'
type StatusFilter = 'All' | 'Active' | 'Inactive' | 'Closed'
type ViewMode = 'list' | 'card'

interface Position {
  id: string
  token0: string
  token1: string
  fee: string
  protocol: string
  status: PositionStatus
  liquidity: number
  earnings: number
  apr: number
  aprLabel: string
  isFarm: boolean
}

/* ── Data ──────────────────────────────────────────────────── */

const POSITIONS: Position[] = [
  { id: '1', token0: 'CAKE', token1: 'BNB',  fee: '0.25%', protocol: 'V3', status: 'Active',       liquidity: 100.00, earnings:  89.09, apr: 8.09,  aprLabel: '🌿 8.09%',  isFarm: true },
  { id: '2', token0: 'USDC', token1: 'USDT', fee: '0.01%', protocol: 'V3', status: 'Active',       liquidity: 250.89, earnings: 100.76, apr: 4.21,  aprLabel: '🌿 4.21%',  isFarm: true },
  { id: '3', token0: 'ETH',  token1: 'USDC', fee: '0.05%', protocol: 'V3', status: 'Out of range', liquidity: 600.01, earnings: 400.76, apr: 0,     aprLabel: '0%',         isFarm: false },
  { id: '4', token0: 'SOL',  token1: 'USDC', fee: '0.25%', protocol: 'V2', status: 'Active',       liquidity: 232.00, earnings: 200.59, apr: 10.33, aprLabel: '10.33%',     isFarm: false },
  { id: '5', token0: 'USDT', token1: 'BTCB', fee: '0.25%', protocol: 'V2', status: 'Active',       liquidity: 300.00, earnings: 182.59, apr: 10.33, aprLabel: '10.33%',     isFarm: false },
]

const PROTOCOLS = ['PancakeSwap V3', 'PancakeSwap V2', 'StableSwap', 'Uniswap V3']

const SUMMARY_STATS = [
  { label: 'Total liquidity provided', value: '$1,492.02' },
  { label: 'All time fees earned',     value: '$3,492.02' },
  { label: 'Weighted average APR',     value: '8.4%' },
  { label: 'Active positions',         value: '4' },
]

/* ── Helpers ─────────────────────────────────────────────────── */

function fmtUsd(n: number) {
  return `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

/* ── Token Pair Avatar ───────────────────────────────────────── */

const TOKEN_COLORS: Record<string, string> = {
  CAKE: '#1FC7D4', BNB: '#F0B90B', ETH: '#627EEA', WETH: '#8A96C6',
  USDC: '#2775CA', USDT: '#26A17B', BTCB: '#F7931A', SOL: '#9945FF',
}

function TokenAvatar({ symbol, size = 32 }: { symbol: string; size?: number }) {
  return (
    <div
      role="img"
      aria-label={symbol}
      style={{
        width: size, height: size, borderRadius: '50%',
        background: TOKEN_COLORS[symbol] ?? 'var(--pcs-colors-tertiary)',
        flexShrink: 0,
      }}
    />
  )
}

function TokenPairAvatars({ token0, token1 }: { token0: string; token1: string }) {
  return (
    <div style={{ position: 'relative', width: 60, height: 36, flexShrink: 0 }}>
      <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
        <TokenAvatar symbol={token0} size={36} />
      </div>
      <div style={{ position: 'absolute', left: 22, top: '50%', transform: 'translateY(-50%)', zIndex: 1, border: '2px solid var(--pcs-colors-card)', borderRadius: '50%' }}>
        <TokenAvatar symbol={token1} size={36} />
      </div>
    </div>
  )
}

/* ── Status Tag ──────────────────────────────────────────────── */

function StatusTag({ status }: { status: PositionStatus }) {
  const config: Record<PositionStatus, { variant: 'success' | 'warning' | 'failure' | 'textSubtle'; label: string }> = {
    'Active':       { variant: 'success',     label: 'Active' },
    'Out of range': { variant: 'warning',     label: 'Out of range' },
    'Inactive':     { variant: 'textSubtle',  label: 'Inactive' },
    'Closed':       { variant: 'failure',     label: 'Closed' },
  }
  const { variant, label } = config[status]
  return <Tag variant={variant} outline>{label}</Tag>
}

/* ── Fee Tag ─────────────────────────────────────────────────── */

function FeeTag({ fee, protocol }: { fee: string; protocol: string }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      background: 'var(--pcs-colors-tertiary)',
      color: 'var(--pcs-colors-primary)',
      fontSize: 12, fontWeight: 600,
      padding: '2px 8px', borderRadius: 8,
      fontFamily: 'Kanit, sans-serif',
    }}>
      {protocol} · {fee}
    </span>
  )
}

/* ── Summary Stats Bar ───────────────────────────────────────── */

function SummaryBar() {
  return (
    <Card style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', alignItems: 'stretch' }}>
        {/* Main stats */}
        {SUMMARY_STATS.map(({ label, value }, i) => (
          <div
            key={label}
            style={{
              flex: 1,
              padding: '20px 24px',
              borderRight: '1px solid var(--pcs-colors-card-border)',
            }}
          >
            <Text fontSize="12px" color="textSubtle" style={{ marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {label}
            </Text>
            <Text bold fontSize="20px" style={{ fontVariantNumeric: 'tabular-nums' }}>
              {value}
            </Text>
          </div>
        ))}

        {/* Unclaimed rewards + collect button */}
        <div style={{
          flex: 1.5,
          padding: '20px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
        }}>
          <div>
            <Text fontSize="12px" color="textSubtle" style={{ marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Unclaimed rewards
            </Text>
            <Text bold fontSize="20px" style={{ fontVariantNumeric: 'tabular-nums' }}>
              $1,032.02
            </Text>
          </div>
          <Button variant="primary" scale="md" style={{ flexShrink: 0 }}>
            Collect All
          </Button>
        </div>
      </div>
    </Card>
  )
}

/* ── Protocol Selector ───────────────────────────────────────── */

function ProtocolSelector({
  selected,
  onToggle,
}: {
  selected: Set<string>
  onToggle: (p: string) => void
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
      <Text fontSize="12px" color="textSubtle" style={{ marginRight: 4, flexShrink: 0 }}>
        Protocol:
      </Text>
      {PROTOCOLS.map((p) => {
        const active = selected.has(p)
        return (
          <button
            key={p}
            onClick={() => onToggle(p)}
            style={{
              background: active ? 'var(--pcs-colors-primary)' : 'var(--pcs-colors-input)',
              color: active ? 'var(--pcs-colors-inverted-contrast)' : 'var(--pcs-colors-text-subtle)',
              border: `1px solid ${active ? 'var(--pcs-colors-primary)' : 'var(--pcs-colors-input-secondary)'}`,
              borderRadius: 12, padding: '4px 12px',
              cursor: 'pointer', fontSize: 13, fontWeight: 600,
              fontFamily: 'Kanit, sans-serif',
              transition: 'all 0.15s',
            }}
          >
            {p}
          </button>
        )
      })}
    </div>
  )
}

/* ── Pool Type Tabs ──────────────────────────────────────────── */

const POOL_TYPE_TABS: PoolType[] = ['All', 'V3', 'V2', 'StableSwap']

function PoolTypeTabs({
  active,
  onChange,
  farmsOnly,
  onFarmsToggle,
}: {
  active: PoolType
  onChange: (t: PoolType) => void
  farmsOnly: boolean
  onFarmsToggle: () => void
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      {POOL_TYPE_TABS.map((t) => {
        const isActive = active === t
        return (
          <button
            key={t}
            onClick={() => onChange(t)}
            style={{
              background: isActive ? 'var(--pcs-colors-input)' : 'none',
              color: isActive ? 'var(--pcs-colors-text)' : 'var(--pcs-colors-text-subtle)',
              border: isActive ? '1px solid var(--pcs-colors-input-secondary)' : '1px solid transparent',
              borderRadius: 12, padding: '6px 16px',
              cursor: 'pointer', fontSize: 14, fontWeight: isActive ? 600 : 400,
              fontFamily: 'Kanit, sans-serif',
            }}
          >
            {t}
          </button>
        )
      })}

      {/* Farms only */}
      <button
        onClick={onFarmsToggle}
        style={{
          display: 'flex', alignItems: 'center', gap: 4,
          background: farmsOnly ? 'var(--pcs-colors-tertiary)' : 'none',
          color: farmsOnly ? 'var(--pcs-colors-primary)' : 'var(--pcs-colors-text-subtle)',
          border: farmsOnly ? '1px solid var(--pcs-colors-primary)' : '1px solid transparent',
          borderRadius: 12, padding: '6px 14px',
          cursor: 'pointer', fontSize: 14, fontWeight: farmsOnly ? 600 : 400,
          fontFamily: 'Kanit, sans-serif',
        }}
      >
        <FarmIcon size={14} />
        Farms only
      </button>
    </div>
  )
}

/* ── Status Sub-tabs ─────────────────────────────────────────── */

const STATUS_FILTERS: StatusFilter[] = ['All', 'Active', 'Inactive', 'Closed']

function StatusSubTabs({ active, onChange }: { active: StatusFilter; onChange: (s: StatusFilter) => void }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      {STATUS_FILTERS.map((s) => {
        const isActive = active === s
        return (
          <button
            key={s}
            onClick={() => onChange(s)}
            style={{
              background: isActive ? 'var(--pcs-colors-input)' : 'none',
              color: isActive ? 'var(--pcs-colors-text)' : 'var(--pcs-colors-text-subtle)',
              border: isActive ? '1px solid var(--pcs-colors-input-secondary)' : '1px solid transparent',
              borderRadius: 10, padding: '4px 14px', height: 32,
              cursor: 'pointer', fontSize: 13, fontWeight: isActive ? 600 : 400,
              fontFamily: 'Kanit, sans-serif',
            }}
          >
            {s}
          </button>
        )
      })}
    </div>
  )
}

/* ── View Toggle ─────────────────────────────────────────────── */

function ViewToggle({ mode, onChange }: { mode: ViewMode; onChange: (m: ViewMode) => void }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      {(['list', 'card'] as ViewMode[]).map((m) => {
        const isActive = mode === m
        return (
          <button
            key={m}
            aria-label={m === 'list' ? 'List view' : 'Card view'}
            onClick={() => onChange(m)}
            style={{
              width: 32, height: 32,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: isActive ? 'var(--pcs-colors-input)' : 'none',
              color: isActive ? 'var(--pcs-colors-text)' : 'var(--pcs-colors-text-subtle)',
              border: isActive ? '1px solid var(--pcs-colors-input-secondary)' : '1px solid transparent',
              borderRadius: 8, cursor: 'pointer',
            }}
          >
            {m === 'list' ? <ListViewIcon size={16} /> : <CardViewIcon size={16} />}
          </button>
        )
      })}
    </div>
  )
}

/* ── Positions Table ─────────────────────────────────────────── */

function PositionsTable({ positions }: { positions: Position[] }) {
  const [sortField, setSortField] = useState<keyof Position | null>(null)
  const [sortOrder, setSortOrder] = useState<ISortOrder>(null)

  const sorted = sortField && sortOrder
    ? [...positions].sort((a, b) => {
        const av = a[sortField] as number
        const bv = b[sortField] as number
        if (typeof av === 'number' && typeof bv === 'number') {
          return sortOrder === 'ASC' ? av - bv : bv - av
        }
        return 0
      })
    : positions

  const handleSort = useCallback(
    ({ dataIndex, order }: { dataIndex: keyof Position | null; order: ISortOrder }) => {
      setSortField(dataIndex)
      setSortOrder(order)
    },
    [],
  )

  const columns: IColumnsType<Position>[] = [
    {
      key: 'pair',
      title: 'TOKEN',
      dataIndex: 'token0',
      minWidth: '340px',
      render: (_, record) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <TokenPairAvatars token0={record.token0} token1={record.token1} />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Text bold fontSize="16px">{record.token0}</Text>
              <Text fontSize="16px" color="textSubtle">/</Text>
              <Text bold fontSize="16px">{record.token1}</Text>
            </div>
            <div style={{ marginTop: 4 }}>
              <FeeTag fee={record.fee} protocol={record.protocol} />
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 'status',
      title: 'STATUS',
      dataIndex: 'status',
      render: (val: PositionStatus) => <StatusTag status={val} />,
    },
    {
      key: 'liquidity',
      title: 'LIQUIDITY',
      dataIndex: 'liquidity',
      sorter: true,
      render: (val: number) => (
        <Text bold fontSize="14px" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {fmtUsd(val)}
        </Text>
      ),
    },
    {
      key: 'earnings',
      title: 'EARNINGS',
      dataIndex: 'earnings',
      sorter: true,
      render: (val: number) => (
        <Text fontSize="14px" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {fmtUsd(val)}
        </Text>
      ),
    },
    {
      key: 'apr',
      title: 'APR',
      dataIndex: 'apr',
      sorter: true,
      render: (_, record) => (
        <Text
          fontSize="14px"
          color={record.apr > 0 ? 'success' : 'textSubtle'}
          style={{ fontVariantNumeric: 'tabular-nums' }}
        >
          {record.aprLabel}
        </Text>
      ),
    },
    {
      key: 'action',
      title: 'ACTION',
      dataIndex: null,
      clickable: false,
      render: (_, record) => (
        <Button variant="secondary" scale="sm" aria-label={`Manage ${record.token0}/${record.token1} position`}>
          Manage
        </Button>
      ),
    },
  ]

  return (
    <Card>
      <TableView<Position>
        columns={columns}
        data={sorted}
        rowKey="id"
        sortField={sortField}
        sortOrder={sortOrder}
        onSort={handleSort}
      />
    </Card>
  )
}

/* ── Positions Content ───────────────────────────────────────── */

function PositionsContent() {
  const [poolType, setPoolType]       = useState<PoolType>('All')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('All')
  const [farmsOnly, setFarmsOnly]     = useState(false)
  const [viewMode, setViewMode]       = useState<ViewMode>('list')
  const [protocols, setProtocols]     = useState<Set<string>>(new Set(PROTOCOLS))

  const toggleProtocol = (p: string) => {
    setProtocols((prev) => {
      const next = new Set(prev)
      if (next.has(p)) next.delete(p)
      else next.add(p)
      return next
    })
  }

  const filtered = POSITIONS.filter((pos) => {
    if (poolType !== 'All' && pos.protocol !== poolType) return false
    if (farmsOnly && !pos.isFarm) return false
    if (statusFilter !== 'All' && pos.status !== statusFilter) return false
    if (!protocols.has(`PancakeSwap ${pos.protocol}`) && !protocols.has(pos.protocol)) return false
    return true
  })

  return (
    <div>
      <SummaryBar />

      {/* Filter card */}
      <Card style={{ marginBottom: 16 }}>
        {/* Row 1: Protocol selector + Pool type tabs */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px 16px 12px', gap: 16, flexWrap: 'wrap',
          borderBottom: '1px solid var(--pcs-colors-card-border)',
        }}>
          <ProtocolSelector selected={protocols} onToggle={toggleProtocol} />
          <PoolTypeTabs
            active={poolType}
            onChange={setPoolType}
            farmsOnly={farmsOnly}
            onFarmsToggle={() => setFarmsOnly((v) => !v)}
          />
        </div>

        {/* Row 2: Status sub-tabs + Farms toggle + View toggle */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '12px 16px',
        }}>
          <StatusSubTabs active={statusFilter} onChange={setStatusFilter} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Farms only toggle */}
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
              <Text fontSize="14px" color="textSubtle">Farms only</Text>
              <button
                role="switch"
                aria-checked={farmsOnly}
                onClick={() => setFarmsOnly((v) => !v)}
                style={{
                  width: 44, height: 24, borderRadius: 12, border: 'none',
                  background: farmsOnly ? 'var(--pcs-colors-primary)' : 'var(--pcs-colors-input)',
                  cursor: 'pointer', position: 'relative', transition: 'background 0.2s',
                }}
              >
                <span style={{
                  position: 'absolute', top: 3,
                  left: farmsOnly ? 23 : 3,
                  width: 18, height: 18, borderRadius: '50%',
                  background: '#fff', transition: 'left 0.2s',
                }} />
              </button>
            </label>

            <ViewToggle mode={viewMode} onChange={setViewMode} />
          </div>
        </div>
      </Card>

      {/* Positions table */}
      {filtered.length > 0 ? (
        <PositionsTable positions={filtered} />
      ) : (
        <Card>
          <div style={{ padding: '48px 24px', textAlign: 'center' }}>
            <Text color="textSubtle" fontSize="14px">No positions found</Text>
            <Button variant="text" scale="sm" style={{ marginTop: 12 }} onClick={() => {
              setPoolType('All')
              setStatusFilter('All')
              setFarmsOnly(false)
            }}>
              Clear filters
            </Button>
          </div>
        </Card>
      )}
    </div>
  )
}

/* ── Positions Page ──────────────────────────────────────────── */

export function PositionsPage() {
  const [tabIndex, setTabIndex] = useState<WalletTab>(1)

  return (
    <WalletPageShell activeTab={tabIndex} onTabChange={setTabIndex}>
      <PositionsContent />
    </WalletPageShell>
  )
}
