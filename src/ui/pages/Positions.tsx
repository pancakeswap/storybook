import { useState, useCallback } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import { Tag } from '../components/Tag'
import { TableView } from '../components/TableView'
import type { IColumnsType, ISortOrder } from '../components/TableView/Table'
import { CardViewIcon, ListViewIcon, SearchIcon, ChevronDownIcon } from '../Icons'
import { WalletPageShell } from './wallet-shared'
import type { WalletTab } from './wallet-shared'

/* ── Types ─────────────────────────────────────────────────── */

type PositionStatus = 'In range' | 'Out of range' | 'Inactive' | 'Closed'
type PoolType = 'All' | 'Infinity' | 'V3' | 'V2' | 'StableSwap'
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

const TOKEN_LOGOS: Record<string, string> = {
  CAKE:  'https://tokens.pancakeswap.finance/images/symbol/cake.png',
  BNB:   'https://tokens.pancakeswap.finance/images/symbol/bnb.png',
  USDC:  'https://tokens.pancakeswap.finance/images/symbol/usdc.png',
  USDT:  'https://tokens.pancakeswap.finance/images/symbol/usdt.png',
  ETH:   'https://tokens.pancakeswap.finance/images/symbol/eth.png',
  SOL:   'https://tokens.pancakeswap.finance/images/symbol/sol.png',
  BTCB:  'https://tokens.pancakeswap.finance/images/symbol/btcb.png',
}

const POSITIONS: Position[] = [
  { id: '1', token0: 'CAKE', token1: 'BNB',  fee: '0.09%', protocol: 'Infinity', status: 'In range',     liquidity: 100.00, earnings:  89.09, apr: 8.09,  aprLabel: '🌿 8.09%', isFarm: true },
  { id: '2', token0: 'USDC', token1: 'USDT', fee: '0.99%', protocol: 'V3',       status: 'In range',     liquidity: 250.89, earnings: 100.76, apr: 4.21,  aprLabel: '🌿 4.21%', isFarm: true },
  { id: '3', token0: 'ETH',  token1: 'USDC', fee: '0.99%', protocol: 'V3',       status: 'Out of range', liquidity: 600.01, earnings: 400.76, apr: 0,     aprLabel: '0%',        isFarm: false },
  { id: '4', token0: 'SOL',  token1: 'USDC', fee: '0.99%', protocol: 'V2',       status: 'In range',     liquidity: 232.00, earnings: 200.59, apr: 10.33, aprLabel: '10.33%',    isFarm: false },
  { id: '5', token0: 'USDT', token1: 'BTCB', fee: '0.99%', protocol: 'V2',       status: 'In range',     liquidity: 300.00, earnings: 182.59, apr: 10.33, aprLabel: '10.33%',    isFarm: false },
]

/* ── Helpers ─────────────────────────────────────────────────── */

function fmtUsd(n: number) {
  return `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

const numStyle: React.CSSProperties = {
  fontFamily: 'Kanit, sans-serif',
  fontSize: 16,
  fontWeight: 400,
  lineHeight: '150%',
  fontVariantNumeric: 'tabular-nums',
  color: 'var(--pcs-colors-text)',
}

/* ── Token Pair Avatars ──────────────────────────────────────── */

function TokenAvatar({ symbol, size = 36 }: { symbol: string; size?: number }) {
  const src = TOKEN_LOGOS[symbol]
  return src ? (
    <img
      src={src}
      alt={symbol}
      style={{ width: size, height: size, borderRadius: '50%', display: 'block', flexShrink: 0 }}
    />
  ) : (
    <div
      aria-label={symbol}
      style={{
        width: size, height: size, borderRadius: '50%',
        background: 'var(--pcs-colors-tertiary)', flexShrink: 0,
      }}
    />
  )
}

function TokenPairAvatars({ token0, token1 }: { token0: string; token1: string }) {
  return (
    <div style={{ position: 'relative', width: 58, height: 36, flexShrink: 0 }}>
      <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
        <TokenAvatar symbol={token0} size={36} />
      </div>
      <div style={{
        position: 'absolute', left: 22, top: '50%', transform: 'translateY(-50%)', zIndex: 1,
        border: '2px solid var(--pcs-colors-card)', borderRadius: '50%',
      }}>
        <TokenAvatar symbol={token1} size={36} />
      </div>
    </div>
  )
}

/* ── Fee Tag ─────────────────────────────────────────────────── */

function FeeTag({ protocol, fee }: { protocol: string; fee: string }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      background: 'var(--pcs-colors-tertiary)',
      color: 'var(--pcs-colors-primary)',
      fontSize: 12, fontWeight: 600,
      padding: '2px 8px', borderRadius: 8,
      fontFamily: 'Kanit, sans-serif',
      whiteSpace: 'nowrap',
    }}>
      {protocol} | {fee}
    </span>
  )
}

/* ── Status Tag ──────────────────────────────────────────────── */

function StatusTag({ status }: { status: PositionStatus }) {
  const config: Record<PositionStatus, { variant: 'success' | 'warning' | 'failure' | 'textSubtle' }> = {
    'In range':     { variant: 'success' },
    'Out of range': { variant: 'failure' },
    'Inactive':     { variant: 'textSubtle' },
    'Closed':       { variant: 'textSubtle' },
  }
  return <Tag variant={config[status].variant} outline>{status}</Tag>
}

/* ── Summary Stats Bar ───────────────────────────────────────── */

const SUMMARY_STATS = [
  { label: 'Total liquidity provided', value: '$1,492.02' },
  { label: 'All time fees earned',     value: '$3,492.02' },
  { label: 'Weighted average APR',     value: '8.4%' },
  { label: 'Active positions',         value: '4' },
]

function SummaryBar() {
  return (
    <Card style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', alignItems: 'stretch', height: 116 }}>
        {SUMMARY_STATS.map(({ label, value }) => (
          <div
            key={label}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '0 24px',
              borderRight: '1px solid var(--pcs-colors-card-border)',
            }}
          >
            <Text
              fontSize="12px"
              color="textSubtle"
              style={{ marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'Kanit, sans-serif', lineHeight: '18px' }}
            >
              {label}
            </Text>
            <Text
              bold
              fontSize="20px"
              style={{ fontVariantNumeric: 'tabular-nums', fontFamily: 'Kanit, sans-serif', lineHeight: '150%' }}
            >
              {value}
            </Text>
          </div>
        ))}

        {/* Unclaimed rewards + Claim all */}
        <div style={{
          display: 'flex',
          padding: 24,
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 24,
          flex: '0 0 468px',
        }}>
          <div style={{
            display: 'flex',
            padding: '8px 12px',
            alignItems: 'center',
            gap: 12,
            justifyContent: 'space-between',
            borderRadius: 24,
            border: '1px solid var(--V1-Main-Card-border, #E7E3EB)',
            background: 'var(--V1-Main-Card-secondary, #FAF9FA)',
            flex: 1,
            maxWidth: 320.5,
          }}>
            <div>
              <Text
                fontSize="12px"
                color="textSubtle"
                style={{ marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'Kanit, sans-serif', lineHeight: '18px' }}
              >
                Unclaimed rewards
              </Text>
              <Text
                bold
                fontSize="20px"
                style={{ fontVariantNumeric: 'tabular-nums', fontFamily: 'Kanit, sans-serif', lineHeight: '150%' }}
              >
                $1,032.02
              </Text>
            </div>
            <Button variant="primary" scale="md" style={{ flexShrink: 0 }}>
              Claim all
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

/* ── "All tokens" search dropdown ───────────────────────────── */

function TokenSearchDropdown() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flex: 1,
      height: 40,
      background: 'var(--pcs-colors-input)',
      border: '1px solid var(--pcs-colors-input-secondary)',
      borderRadius: 16,
      padding: '0 12px',
      cursor: 'pointer',
    }}>
      <SearchIcon size={16} style={{ color: 'var(--pcs-colors-text-subtle)', flexShrink: 0 }} />
      <span style={{
        fontFamily: 'Kanit, sans-serif',
        fontSize: 16,
        fontWeight: 400,
        color: 'var(--pcs-colors-text)',
        flex: 1,
      }}>
        All tokens
      </span>
      <ChevronDownIcon size={16} style={{ color: 'var(--pcs-colors-text-subtle)', flexShrink: 0 }} />
    </div>
  )
}

/* ── Pool Type Tabs ──────────────────────────────────────────── */

const POOL_TYPES: PoolType[] = ['All', 'Infinity', 'V3', 'V2', 'StableSwap']

function PoolTypeTabs({ active, onChange }: { active: PoolType; onChange: (t: PoolType) => void }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      background: 'var(--pcs-colors-input)',
      border: '1px solid var(--pcs-colors-input-secondary)',
      borderRadius: 16,
      padding: 4,
      gap: 2,
      flexShrink: 0,
    }}>
      {POOL_TYPES.map((t) => {
        const isActive = active === t
        return (
          <button
            key={t}
            onClick={() => onChange(t)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 47,
              padding: '4px 10px',
              background: isActive ? 'var(--V1-Fill-Secondary, #7A6EAA)' : 'transparent',
              border: 'none',
              borderRadius: 16,
              cursor: 'pointer',
              fontFamily: 'Kanit, sans-serif',
              fontSize: 14,
              fontWeight: isActive ? 600 : 400,
              lineHeight: '150%',
              color: isActive ? '#FFFFFF' : 'var(--pcs-colors-text-subtle)',
              transition: 'background 0.15s, color 0.15s',
              whiteSpace: 'nowrap',
              boxSizing: 'border-box',
            }}
          >
            {t}
          </button>
        )
      })}
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
              background: 'none',
              color: isActive ? 'var(--pcs-colors-text)' : 'var(--pcs-colors-text-subtle)',
              border: 'none',
              padding: '4px 12px',
              height: 32,
              cursor: 'pointer',
              fontFamily: 'Kanit, sans-serif',
              fontSize: 16,
              fontWeight: isActive ? 600 : 400,
              lineHeight: '150%',
              borderRadius: 12,
            }}
          >
            {s}
          </button>
        )
      })}
    </div>
  )
}

/* ── Farms Toggle ────────────────────────────────────────────── */

function FarmsToggle({ value, onChange }: { value: boolean; onChange: () => void }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
      <span style={{ fontFamily: 'Kanit, sans-serif', fontSize: 14, color: 'var(--pcs-colors-text-subtle)' }}>
        Farms only
      </span>
      <button
        role="switch"
        aria-checked={value}
        onClick={onChange}
        style={{
          width: 44, height: 24, borderRadius: 12, border: 'none',
          background: value ? 'var(--pcs-colors-primary)' : 'var(--pcs-colors-input)',
          cursor: 'pointer', position: 'relative', transition: 'background 0.2s', flexShrink: 0,
        }}
      >
        <span style={{
          position: 'absolute', top: 3,
          left: value ? 23 : 3,
          width: 18, height: 18, borderRadius: '50%',
          background: '#fff', transition: 'left 0.2s',
        }} />
      </button>
    </label>
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
              width: 24, height: 32,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'none',
              color: isActive ? 'var(--pcs-colors-text)' : 'var(--pcs-colors-text-subtle)',
              border: 'none',
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
      minWidth: '380px',
      render: (_, record) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <TokenPairAvatars token0={record.token0} token1={record.token1} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Kanit, sans-serif', fontSize: 16, fontWeight: 600, color: 'var(--pcs-colors-text)', lineHeight: '24px' }}>
              {record.token0} / {record.token1}
            </span>
            <FeeTag protocol={record.protocol} fee={record.fee} />
          </div>
        </div>
      ),
    },
    {
      key: 'status',
      title: 'STATUS',
      dataIndex: 'status',
      align: 'right',
      render: (val: PositionStatus) => <StatusTag status={val} />,
    },
    {
      key: 'liquidity',
      title: 'LIQUIDITY',
      dataIndex: 'liquidity',
      sorter: true,
      align: 'right',
      render: (val: number) => (
        <span style={numStyle}>{fmtUsd(val)}</span>
      ),
    },
    {
      key: 'earnings',
      title: 'EARNINGS',
      dataIndex: 'earnings',
      sorter: true,
      render: (val: number) => (
        <span style={numStyle}>{fmtUsd(val)}</span>
      ),
    },
    {
      key: 'apr',
      title: 'APR',
      dataIndex: 'apr',
      sorter: true,
      align: 'right',
      render: (_, record) => (
        <span style={{
          ...numStyle,
          color: record.apr > 0 ? 'var(--pcs-colors-success)' : 'var(--pcs-colors-text-subtle)',
        }}>
          {record.aprLabel}
        </span>
      ),
    },
    {
      key: 'action',
      title: 'ACTION',
      dataIndex: null,
      clickable: false,
      align: 'center',
      render: () => (
        <Button variant="secondary" scale="sm">
          Manage
        </Button>
      ),
    },
  ]

  return (
    <TableView<Position>
      columns={columns}
      data={sorted}
      rowKey="id"
      sortField={sortField}
      sortOrder={sortOrder}
      onSort={handleSort}
    />
  )
}

/* ── Positions Content ───────────────────────────────────────── */

function PositionsContent() {
  const [poolType, setPoolType]           = useState<PoolType>('All')
  const [statusFilter, setStatusFilter]   = useState<StatusFilter>('All')
  const [farmsOnly, setFarmsOnly]         = useState(false)
  const [viewMode, setViewMode]           = useState<ViewMode>('list')

  const filtered = POSITIONS.filter((pos) => {
    if (poolType !== 'All' && pos.protocol !== poolType) return false
    if (farmsOnly && !pos.isFarm) return false
    if (statusFilter === 'Active'   && pos.status !== 'In range') return false
    if (statusFilter === 'Inactive' && pos.status !== 'Inactive') return false
    if (statusFilter === 'Closed'   && pos.status !== 'Closed') return false
    return true
  })

  return (
    <div>
      {/* Stats bar */}
      <SummaryBar />

      {/* Filter rows + table — one unified card */}
      <Card>
        {/* Row 1: search + pool type tabs */}
        <div style={{
          display: 'flex',
          padding: 16,
          alignItems: 'center',
          alignContent: 'center',
          gap: 16,
          alignSelf: 'stretch',
          flexWrap: 'wrap',
          borderBottom: '1px solid var(--pcs-colors-card-border)',
        }}>
          <TokenSearchDropdown />
          <PoolTypeTabs active={poolType} onChange={setPoolType} />
        </div>

        {/* Row 2: status tabs + farms toggle + view toggle */}
        <div style={{
          display: 'flex',
          padding: '0 16px',
          height: 68,
          justifyContent: 'space-between',
          alignItems: 'center',
          alignContent: 'center',
          rowGap: 16,
          flexWrap: 'wrap',
          borderBottom: '1px solid var(--pcs-colors-card-border)',
        }}>
          <StatusSubTabs active={statusFilter} onChange={setStatusFilter} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <FarmsToggle value={farmsOnly} onChange={() => setFarmsOnly((v) => !v)} />
            <ViewToggle mode={viewMode} onChange={setViewMode} />
          </div>
        </div>

        {/* Table */}
        {filtered.length > 0 ? (
          <PositionsTable positions={filtered} />
        ) : (
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
        )}
      </Card>
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
