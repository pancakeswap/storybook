import { useState, useCallback } from 'react'
import { Card, CardBody } from '../components/Card'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import { TableView } from '../components/TableView'
import type { IColumnsType, ISortOrder } from '../components/TableView/Table'
import { Checkbox } from '../components/Checkbox'
import { SearchIcon, MoreHorizontalIcon } from '../Icons'
import { WalletPageShell } from './wallet-shared'
import type { WalletTab } from './wallet-shared'

/* ── Types ─────────────────────────────────────────────────── */

interface Token {
  id: string
  symbol: string
  name: string
  chain: string
  price: number
  change1d: number
  balanceAmount: number
  balanceSymbol: string
  value: number
  allocation: number
}

type TimeRange = 'D' | 'W' | 'M' | 'All'

/* ── Data ──────────────────────────────────────────────────── */

const TOKENS: Token[] = [
  { id: '1', symbol: 'BNB',  name: 'BNB',      chain: 'BNB Chain',  price: 590.75,   change1d:  1.20, balanceAmount: 0.542,   balanceSymbol: 'BNB',  value: 320.15, allocation: 16.93 },
  { id: '2', symbol: 'CAKE', name: 'PancakeSwap', chain: 'BNB Chain', price: 1.46,   change1d: -0.83, balanceAmount: 144.11, balanceSymbol: 'CAKE', value: 210.40, allocation: 11.12 },
  { id: '3', symbol: 'ETH',  name: 'Ethereum',  chain: 'Ethereum',   price: 2181.25,  change1d:  0.46, balanceAmount: 0.206,  balanceSymbol: 'ETH',  value: 450.30, allocation: 23.79 },
  { id: '4', symbol: 'WETH', name: 'Wrapped ETH', chain: 'Ethereum', price: 2199.85, change1d:  0.51, balanceAmount: 0.082,  balanceSymbol: 'WETH', value: 180.25, allocation:  9.52 },
  { id: '5', symbol: 'USDC', name: 'USD Coin',  chain: 'Ethereum',   price: 1.00,     change1d:  0.01, balanceAmount: 275.50, balanceSymbol: 'USDC', value: 275.50, allocation: 14.56 },
  { id: '6', symbol: 'USDC', name: 'USD Coin',  chain: 'Base',       price: 1.00,     change1d:  0.01, balanceAmount: 210.66, balanceSymbol: 'USDC', value: 210.66, allocation: 11.13 },
  { id: '7', symbol: 'USDT', name: 'Tether',    chain: 'Arbitrum',   price: 1.00,     change1d: -0.01, balanceAmount: 245.00, balanceSymbol: 'USDT', value: 245.00, allocation: 12.95 },
]

const PORTFOLIO_TOTAL = 1892.26

/* ── Chart ─────────────────────────────────────────────────── */

const CHART_VALUES = [850, 720, 650, 690, 1100, 1430, 1680, 1730, 1680, 1810, 1892]
const CHART_X_LABELS = ['1:00 AM', '5:00 AM', '9:00 AM', '1:00 PM', '5:00 PM', '9:00 PM']
const CHART_Y_LABELS = ['$3,000', '$2,500', '$2,000', '$1,500', '$1,000', '$500']

const CHART_W = 860
const CHART_H = 220
const CHART_PAD_TOP = 8
const CHART_PAD_BOTTOM = 32
const CHART_PAD_RIGHT = 52
const CHART_DRAW_H = CHART_H - CHART_PAD_TOP - CHART_PAD_BOTTOM
const CHART_DRAW_W = CHART_W - CHART_PAD_RIGHT
const MIN_V = 400
const MAX_V = 3100

function valueToY(v: number) {
  return CHART_PAD_TOP + (1 - (v - MIN_V) / (MAX_V - MIN_V)) * CHART_DRAW_H
}

function buildChartPath() {
  const pts = CHART_VALUES.map((v, i) => ({
    x: (i / (CHART_VALUES.length - 1)) * CHART_DRAW_W,
    y: valueToY(v),
  }))

  // Smooth cubic bezier using midpoints as control points
  let line = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[i - 1]
    const p1 = pts[i]
    const cpx = (p0.x + p1.x) / 2
    line += ` C ${cpx} ${p0.y} ${cpx} ${p1.y} ${p1.x} ${p1.y}`
  }

  const last = pts[pts.length - 1]
  const first = pts[0]
  const area = `${line} L ${last.x} ${CHART_PAD_TOP + CHART_DRAW_H} L ${first.x} ${CHART_PAD_TOP + CHART_DRAW_H} Z`

  return { line, area }
}

const { line: CHART_LINE, area: CHART_AREA } = buildChartPath()

/* ── Formatters ─────────────────────────────────────────────── */

function fmtPrice(n: number) {
  if (n >= 1000) return `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  if (n >= 1) return `$${n.toFixed(2)}`
  return `$${n.toFixed(4)}`
}

function fmtAmount(n: number, symbol: string) {
  const formatted = n >= 100
    ? n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : n.toFixed(3)
  return `${formatted} ${symbol}`
}

function fmtValue(n: number) {
  return `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

/* ── Sub-components ─────────────────────────────────────────── */

const TOKEN_COLORS: Record<string, string> = {
  BNB:  '#F0B90B',
  CAKE: '#1FC7D4',
  ETH:  '#627EEA',
  WETH: '#8A96C6',
  USDC: '#2775CA',
  USDT: '#26A17B',
}

function TokenAvatar({ symbol }: { symbol: string }) {
  const bg = TOKEN_COLORS[symbol] ?? 'var(--pcs-colors-tertiary)'
  return (
    <div
      role="img"
      aria-label={symbol}
      style={{
        width: 40, height: 40, borderRadius: '50%',
        background: bg, flexShrink: 0,
      }}
    />
  )
}

function ChainBadge({ chain }: { chain: string }) {
  const CHAIN_COLORS: Record<string, string> = {
    'BNB Chain': '#F0B90B',
    'Ethereum': '#627EEA',
    'Base': '#0052FF',
    'Arbitrum': '#12AAFF',
  }
  return (
    <Text fontSize="12px" color="textSubtle" style={{ marginTop: 2 }}>
      <span style={{
        display: 'inline-block',
        width: 6, height: 6, borderRadius: '50%',
        background: CHAIN_COLORS[chain] ?? 'var(--pcs-colors-textSubtle)',
        marginRight: 4, verticalAlign: 'middle',
      }} />
      {chain}
    </Text>
  )
}

function PnlTag({ value }: { value: number }) {
  const positive = value >= 0
  const color = positive ? 'var(--pcs-colors-success)' : 'var(--pcs-colors-failure)'
  const bg = positive ? 'rgba(49,208,170,0.1)' : 'rgba(237,75,158,0.1)'
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      background: bg, color,
      padding: '2px 8px', borderRadius: 8,
      fontSize: 14, fontWeight: 600,
      fontVariantNumeric: 'tabular-nums',
    }}>
      {positive ? '+' : ''}{value.toFixed(2)}%
    </span>
  )
}

function AllocationBar({ pct }: { pct: number }) {
  const filledPx = Math.round((pct / 100) * 60)
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Text fontSize="14px" style={{ fontVariantNumeric: 'tabular-nums', minWidth: 44, textAlign: 'right' }}>
        {pct.toFixed(2)}%
      </Text>
      <div style={{ width: 60, height: 6, borderRadius: 3, background: 'var(--pcs-colors-input)', overflow: 'hidden', flexShrink: 0 }}>
        <div style={{ width: filledPx, height: '100%', borderRadius: 3, background: 'var(--pcs-colors-primary)' }} />
      </div>
    </div>
  )
}

/* ── Portfolio Chart ─────────────────────────────────────────── */

function PortfolioChart() {
  const [range, setRange] = useState<TimeRange>('D')

  return (
    <Card style={{ marginBottom: 16 }}>
      <CardBody style={{ padding: '20px 20px 16px' }}>
        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
              <Text bold fontSize="20px" style={{ fontVariantNumeric: 'tabular-nums' }}>
                $1,892.26
              </Text>
              <span style={{
                background: 'rgba(49,208,170,0.15)', color: 'var(--pcs-colors-success)',
                padding: '2px 6px', borderRadius: 6, fontSize: 12, fontWeight: 600,
              }}>
                +7.1%
              </span>
            </div>
            <Text color="textSubtle" fontSize="12px">Mar 26, 2024 UTC</Text>
          </div>

          {/* Time range buttons */}
          <div style={{ display: 'flex', gap: 4 }}>
            {(['D', 'W', 'M', 'All'] as TimeRange[]).map((r) => (
              <Button
                key={r}
                variant={range === r ? 'primary' : 'light'}
                scale="xs"
                onClick={() => setRange(r)}
                style={{ minWidth: 32 }}
              >
                {r}
              </Button>
            ))}
          </div>
        </div>

        {/* SVG Chart */}
        <div style={{ position: 'relative', marginTop: 8 }}>
          <svg
            viewBox={`0 0 ${CHART_W} ${CHART_H}`}
            preserveAspectRatio="none"
            style={{ width: '100%', height: 220, display: 'block' }}
          >
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1FC7D4" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#1FC7D4" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {/* Y-axis grid lines */}
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const yVal = MAX_V - i * ((MAX_V - MIN_V) / 5)
              const y = valueToY(yVal)
              return (
                <line
                  key={i}
                  x1={0}
                  y1={y}
                  x2={CHART_DRAW_W}
                  y2={y}
                  stroke="var(--pcs-colors-card-border)"
                  strokeWidth={0.5}
                  strokeDasharray="4 4"
                />
              )
            })}

            {/* Area fill */}
            <path d={CHART_AREA} fill="url(#chartGradient)" />

            {/* Line */}
            <path d={CHART_LINE} fill="none" stroke="#1FC7D4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

            {/* Y-axis labels (right side) */}
            {CHART_Y_LABELS.map((label, i) => {
              const yVal = MAX_V - i * ((MAX_V - MIN_V) / 5)
              const y = valueToY(yVal)
              return (
                <text
                  key={i}
                  x={CHART_DRAW_W + 6}
                  y={y + 4}
                  fontSize={9}
                  fill="var(--pcs-colors-text-subtle)"
                  fontFamily="Kanit, sans-serif"
                >
                  {label}
                </text>
              )
            })}

            {/* X-axis labels */}
            {CHART_X_LABELS.map((label, i) => {
              const x = (i / (CHART_X_LABELS.length - 1)) * CHART_DRAW_W
              return (
                <text
                  key={i}
                  x={x}
                  y={CHART_H - 6}
                  fontSize={9}
                  fill="var(--pcs-colors-text-subtle)"
                  fontFamily="Kanit, sans-serif"
                  textAnchor={i === 0 ? 'start' : i === CHART_X_LABELS.length - 1 ? 'end' : 'middle'}
                >
                  {label}
                </text>
              )
            })}
          </svg>
        </div>
      </CardBody>
    </Card>
  )
}

/* ── Token Table ─────────────────────────────────────────────── */

function TokenTable() {
  const [search, setSearch] = useState('')
  const [hideSmall, setHideSmall] = useState(false)
  const [showHidden, setShowHidden] = useState(false)
  const [sortField, setSortField] = useState<keyof Token | null>(null)
  const [sortOrder, setSortOrder] = useState<ISortOrder>(null)

  const filtered = TOKENS.filter((t) => {
    if (hideSmall && t.value < 10) return false
    if (search) {
      const q = search.toLowerCase()
      return t.symbol.toLowerCase().includes(q) || t.name.toLowerCase().includes(q) || t.chain.toLowerCase().includes(q)
    }
    return true
  })

  const sorted = sortField && sortOrder
    ? [...filtered].sort((a, b) => {
        const av = a[sortField as keyof Token] as number
        const bv = b[sortField as keyof Token] as number
        if (typeof av === 'number' && typeof bv === 'number') {
          return sortOrder === 'ASC' ? av - bv : bv - av
        }
        return 0
      })
    : filtered

  const handleSort = useCallback(
    ({ dataIndex, order }: { dataIndex: keyof Token | null; order: ISortOrder }) => {
      setSortField(dataIndex)
      setSortOrder(order)
    },
    [],
  )

  const columns: IColumnsType<Token>[] = [
    {
      key: 'token',
      title: 'TOKEN',
      dataIndex: 'symbol',
      minWidth: '200px',
      render: (_, record) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <TokenAvatar symbol={record.symbol} />
          <div>
            <Text bold fontSize="14px">{record.symbol}</Text>
            <ChainBadge chain={record.chain} />
          </div>
        </div>
      ),
    },
    {
      key: 'price',
      title: 'PRICE',
      dataIndex: 'price',
      sorter: true,
      render: (val: number) => (
        <Text fontSize="14px" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {fmtPrice(val)}
        </Text>
      ),
    },
    {
      key: 'change1d',
      title: '1D CHANGE',
      dataIndex: 'change1d',
      sorter: true,
      render: (val: number) => <PnlTag value={val} />,
    },
    {
      key: 'balance',
      title: 'BALANCE',
      dataIndex: 'balanceAmount',
      sorter: true,
      render: (_, record) => (
        <Text fontSize="14px" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {fmtAmount(record.balanceAmount, record.balanceSymbol)}
        </Text>
      ),
    },
    {
      key: 'value',
      title: 'VALUE',
      dataIndex: 'value',
      sorter: true,
      render: (val: number) => (
        <Text bold fontSize="14px" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {fmtValue(val)}
        </Text>
      ),
    },
    {
      key: 'allocation',
      title: 'ALLOCATION',
      dataIndex: 'allocation',
      sorter: true,
      render: (val: number) => <AllocationBar pct={val} />,
    },
    {
      key: 'action',
      title: () => <span role="presentation" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>Actions</span>,
      dataIndex: null,
      clickable: false,
      render: (_, record) => (
        <button
          aria-label={`More options for ${record.symbol}`}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--pcs-colors-text-subtle)', padding: 4, borderRadius: 8,
            display: 'flex', alignItems: 'center',
          }}
        >
          <MoreHorizontalIcon size={20} />
        </button>
      ),
    },
  ]

  return (
    <Card>
      {/* Filter row */}
      <div style={{ padding: '16px 24px 0', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', flex: '1 1 220px', maxWidth: 320 }}>
          <SearchIcon
            size={16}
            style={{
              position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
              color: 'var(--pcs-colors-text-subtle)', pointerEvents: 'none',
            }}
          />
          <input
            placeholder="All tokens"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%', height: 36,
              background: 'var(--pcs-colors-input)',
              border: '1px solid var(--pcs-colors-input-secondary)',
              borderRadius: 12, paddingLeft: 36, paddingRight: 12,
              color: 'var(--pcs-colors-text)',
              fontSize: 14, fontFamily: 'Kanit, sans-serif',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', flexShrink: 0 }}>
          <Checkbox
            scale="sm"
            checked={hideSmall}
            onChange={(e) => setHideSmall(e.target.checked)}
          />
          <Text fontSize="14px" color="textSubtle">Hide small balances</Text>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', flexShrink: 0 }}>
          <Checkbox
            scale="sm"
            checked={showHidden}
            onChange={(e) => setShowHidden(e.target.checked)}
          />
          <Text fontSize="14px" color="textSubtle">Show hidden tokens</Text>
        </label>
      </div>

      <TableView<Token>
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

/* ── Portfolio Breakdown ─────────────────────────────────────── */

function PortfolioBreakdown() {
  return (
    <Card>
      <CardBody>
        {/* Header */}
        <Text fontSize="12px" color="textSubtle" bold style={{ letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
          My Portfolio Breakdown
        </Text>

        {/* Total value */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
          <Text bold fontSize="20px" style={{ fontVariantNumeric: 'tabular-nums' }}>
            ${PORTFOLIO_TOTAL.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </Text>
          <span style={{
            background: 'rgba(49,208,170,0.15)', color: 'var(--pcs-colors-success)',
            padding: '2px 8px', borderRadius: 8, fontSize: 12, fontWeight: 600,
          }}>
            +171%
          </span>
        </div>

        {/* Stat rows */}
        {[
          { label: 'Wallet Balance', value: '$1,892.26' },
          { label: 'Positions', value: '$0.00' },
          { label: 'Unclaimed rewards', value: '$0.00' },
        ].map(({ label, value }) => (
          <div
            key={label}
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '10px 0',
              borderBottom: '1px solid var(--pcs-colors-card-border)',
            }}
          >
            <Text fontSize="14px" color="textSubtle">{label}</Text>
            <Text bold fontSize="14px" style={{ fontVariantNumeric: 'tabular-nums' }}>{value}</Text>
          </div>
        ))}

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: 8, marginTop: 20 }}>
          <Button variant="primary" scale="md" style={{ flex: 1 }}>
            Swap
          </Button>
          <Button variant="secondary" scale="md" style={{ flex: 1 }}>
            Earn
          </Button>
        </div>

        {/* Buy crypto link */}
        <div style={{ textAlign: 'center', marginTop: 12 }}>
          <button
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--pcs-colors-primary)', fontSize: 14,
              fontFamily: 'Kanit, sans-serif', fontWeight: 600,
              textDecoration: 'underline', padding: 0,
            }}
          >
            Buy crypto
          </button>
        </div>
      </CardBody>
    </Card>
  )
}

/* ── Dashboard Page ──────────────────────────────────────────── */

export function DashboardPage() {
  const [tabIndex, setTabIndex] = useState<WalletTab>(0)

  return (
    <WalletPageShell activeTab={tabIndex} onTabChange={setTabIndex}>
      {/* Two-column layout */}
      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        {/* Left column */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <PortfolioChart />
          <TokenTable />
        </div>

        {/* Right column */}
        <div style={{ width: 320, flexShrink: 0 }}>
          <PortfolioBreakdown />
        </div>
      </div>
    </WalletPageShell>
  )
}
