import { useState, useCallback } from 'react'
import { Card, CardBody } from '../components/Card'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import { TableView } from '../components/TableView'
import type { IColumnsType, ISortOrder } from '../components/TableView/Table'
import { TokenDisplay } from '../widgets/TokenDisplay'
import type { TokenInfo } from '../widgets/TokenDisplay'
import { SearchIcon, MoreHorizontalIcon, ChevronDownIcon, InfoIcon } from '../Icons'
import { Checkbox } from '../components/Checkbox'
import { WalletPageShell } from './wallet-shared'
import type { WalletTab } from './wallet-shared'

/* ── Types ─────────────────────────────────────────────────── */

interface Token {
  id: string
  symbol: string
  chain: string
  tokenInfo: TokenInfo
  price: number
  change1d: number
  balanceAmount: number
  balanceSymbol: string
  value: number
  allocation: number
}

/* ── Data ──────────────────────────────────────────────────── */

const TOKENS: Token[] = [
  {
    id: '1',
    symbol: 'BNB',
    chain: 'BNB Chain',
    tokenInfo: {
      symbol: 'BNB',
      chainName: 'BNB chain',
      logoUrls: ['https://tokens.pancakeswap.finance/images/symbol/bnb.png'],
      chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/56.svg',
    },
    price: 590.75,
    change1d: 1.20,
    balanceAmount: 0.542,
    balanceSymbol: 'BNB',
    value: 320.15,
    allocation: 16.93,
  },
  {
    id: '2',
    symbol: 'CAKE',
    chain: 'BNB Chain',
    tokenInfo: {
      symbol: 'CAKE',
      chainName: 'BNB chain',
      logoUrls: ['https://tokens.pancakeswap.finance/images/symbol/cake.png'],
      chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/56.svg',
    },
    price: 1.46,
    change1d: -0.83,
    balanceAmount: 144.11,
    balanceSymbol: 'CAKE',
    value: 210.40,
    allocation: 11.12,
  },
  {
    id: '3',
    symbol: 'ETH',
    chain: 'Ethereum',
    tokenInfo: {
      symbol: 'ETH',
      chainName: 'ETHEREUM',
      logoUrls: ['https://tokens.pancakeswap.finance/images/symbol/eth.png'],
      chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/1.svg',
    },
    price: 2181.25,
    change1d: 0.46,
    balanceAmount: 0.206,
    balanceSymbol: 'ETH',
    value: 450.30,
    allocation: 23.79,
  },
  {
    id: '4',
    symbol: 'WETH',
    chain: 'Ethereum',
    tokenInfo: {
      symbol: 'WETH',
      chainName: 'ETHEREUM',
      logoUrls: ['https://tokens.pancakeswap.finance/images/symbol/weth.png'],
      chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/1.svg',
    },
    price: 2199.85,
    change1d: 0.51,
    balanceAmount: 0.082,
    balanceSymbol: 'WETH',
    value: 180.25,
    allocation: 9.52,
  },
  {
    id: '5',
    symbol: 'USDC',
    chain: 'Ethereum',
    tokenInfo: {
      symbol: 'USDC',
      chainName: 'ETHEREUM',
      logoUrls: ['https://tokens.pancakeswap.finance/images/symbol/usdc.png'],
      chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/1.svg',
    },
    price: 1.00,
    change1d: 0.01,
    balanceAmount: 275.50,
    balanceSymbol: 'USDC',
    value: 275.50,
    allocation: 14.56,
  },
  {
    id: '6',
    symbol: 'USDC',
    chain: 'Base',
    tokenInfo: {
      symbol: 'USDC',
      chainName: 'BASE',
      logoUrls: ['https://tokens.pancakeswap.finance/images/symbol/usdc.png'],
      chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/8453.svg',
    },
    price: 1.00,
    change1d: 0.01,
    balanceAmount: 210.66,
    balanceSymbol: 'USDC',
    value: 210.66,
    allocation: 11.13,
  },
  {
    id: '7',
    symbol: 'USDT',
    chain: 'Arbitrum',
    tokenInfo: {
      symbol: 'USDT',
      chainName: 'ARBITRUM',
      logoUrls: ['https://tokens.pancakeswap.finance/images/symbol/usdt.png'],
      chainLogoUrl: 'https://assets.pancakeswap.finance/web/chains/square/42161.svg',
    },
    price: 1.00,
    change1d: -0.01,
    balanceAmount: 245.00,
    balanceSymbol: 'USDT',
    value: 245.00,
    allocation: 12.95,
  },
]

const PORTFOLIO_TOTAL = 1892.26

/* ── Chart ─────────────────────────────────────────────────── */

const CHART_VALUES = [850, 720, 650, 690, 1100, 1430, 1680, 1730, 1680, 1810, 1892]
const CHART_X_LABELS = ['1:00 AM', '5:00 AM', '9:00 AM', '1:00 PM', '5:00 PM', '9:00 PM']
const CHART_Y_LABELS = ['$3,000', '$2,500', '$2,000', '$1,500', '$1,000', '$500']
const TIME_RANGES = ['1D', '1W', '1M', '3M', '1Y']

const CHART_W = 860
const CHART_H = 340
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

function PnlTag({ value }: { value: number }) {
  const positive = value >= 0
  const color = positive ? 'var(--pcs-colors-success)' : 'var(--pcs-colors-failure)'
  const bg = positive ? 'rgba(49,208,170,0.1)' : 'rgba(237,75,158,0.1)'
  return (
    <span style={{
      display: 'inline-flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 2,
      background: bg,
      color,
      padding: '2px 8px',
      borderRadius: 999,
      fontSize: 14,
      fontWeight: 600,
      fontVariantNumeric: 'tabular-nums',
      fontFamily: 'Kanit, sans-serif',
    }}>
      <span style={{ fontSize: 10, lineHeight: 1 }}>{positive ? '▲' : '▼'}</span>
      <span>{Math.abs(value).toFixed(1)}%</span>
    </span>
  )
}

function AllocationBar({ pct }: { pct: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Text fontSize="14px" style={{ fontVariantNumeric: 'tabular-nums', minWidth: 44, textAlign: 'right' }}>
        {pct.toFixed(2)}%
      </Text>
      {/* Track */}
      <div style={{
        width: 60,
        height: 8,
        borderRadius: 999,
        border: '1px solid var(--pcs-colors-input-secondary)',
        background: 'var(--pcs-colors-input)',
        boxShadow: '0 2px 0 -1px rgba(0, 0, 0, 0.06) inset',
        flexShrink: 0,
        overflow: 'hidden',
        boxSizing: 'border-box',
        position: 'relative',
      }}>
        {/* Fill */}
        <div style={{
          width: `${pct}%`,
          height: '100%',
          borderRadius: 999,
          background: 'var(--pcs-colors-secondary)',
        }} />
      </div>
    </div>
  )
}

/* ── Portfolio Chart ─────────────────────────────────────────── */

function PortfolioChart() {
  const [rangeIndex, setRangeIndex] = useState(0)

  return (
    <Card style={{ flex: 1 }}>
      <CardBody style={{ padding: '20px 20px 16px', display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box' }}>
        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4, flexShrink: 0 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
              <Text
                style={{
                  fontFamily: 'Kanit, sans-serif',
                  fontSize: '26.343px',
                  fontWeight: 600,
                  lineHeight: '110%',
                  color: 'var(--pcs-colors-text)',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                $1,892.26
              </Text>
              <PnlTag value={7.1} />
            </div>
            <Text color="textSubtle" fontSize="12px">Mar 25, 2024 UTC</Text>
          </div>

          {/* Time range selector */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'var(--pcs-colors-input)',
            border: '1px solid var(--pcs-colors-input-secondary)',
            borderRadius: 16,
            padding: 4,
            gap: 2,
          }}>
            {TIME_RANGES.map((r, i) => (
              <button
                key={r}
                onClick={() => setRangeIndex(i)}
                style={{
                  display: 'flex',
                  width: 47,
                  padding: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: rangeIndex === i ? 'var(--V1-Fill-Secondary, #7A6EAA)' : 'transparent',
                  border: 'none',
                  borderRadius: 16,
                  cursor: 'pointer',
                  fontFamily: 'Kanit, sans-serif',
                  fontSize: 14,
                  fontWeight: rangeIndex === i ? 600 : 400,
                  lineHeight: '150%',
                  color: rangeIndex === i ? '#FFFFFF' : 'var(--pcs-colors-text-subtle)',
                  transition: 'background 0.15s, color 0.15s',
                  whiteSpace: 'nowrap',
                  boxSizing: 'border-box',
                }}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* SVG Chart — fills remaining card height */}
        <div style={{ position: 'relative', marginTop: 8, flex: 1, minHeight: 0 }}>
          <svg
            viewBox={`0 0 ${CHART_W} ${CHART_H}`}
            preserveAspectRatio="none"
            style={{ width: '100%', height: '100%', display: 'block' }}
            aria-label="Portfolio value chart"
            role="img"
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
    if (!showHidden && t.value === 0) return false
    if (search) {
      const q = search.toLowerCase()
      return t.symbol.toLowerCase().includes(q) || t.chain.toLowerCase().includes(q)
    }
    return true
  })

  const sorted = sortField && sortOrder
    ? [...filtered].sort((a, b) => {
        const av = a[sortField as keyof Token]
        const bv = b[sortField as keyof Token]
        if (typeof av === 'number' && typeof bv === 'number') {
          return sortOrder === 'ASC' ? av - bv : bv - av
        }
        return 0
      })
    : filtered

  const cellTextStyle: React.CSSProperties = {
    fontFamily: 'Kanit, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '150%',
    fontFeatureSettings: '"liga" off',
    color: 'var(--pcs-colors-text)',
    textAlign: 'right',
    fontVariantNumeric: 'tabular-nums',
  }

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
        <TokenDisplay token={record.tokenInfo} size={40} />
      ),
    },
    {
      key: 'price',
      title: 'PRICE',
      dataIndex: 'price',
      sorter: true,
      align: 'right',
      render: (val: number) => (
        <Text style={cellTextStyle}>{fmtPrice(val)}</Text>
      ),
    },
    {
      key: 'change1d',
      title: '1D CHANGE',
      dataIndex: 'change1d',
      sorter: true,
      align: 'center',
      render: (val: number) => <PnlTag value={val} />,
    },
    {
      key: 'balance',
      title: 'BALANCE',
      dataIndex: 'balanceAmount',
      sorter: true,
      align: 'right',
      width: '155px',
      render: (_, record) => (
        <Text style={cellTextStyle}>{fmtAmount(record.balanceAmount, record.balanceSymbol)}</Text>
      ),
    },
    {
      key: 'value',
      title: 'VALUE',
      dataIndex: 'value',
      sorter: true,
      align: 'right',
      render: (val: number) => (
        <Text style={cellTextStyle}>{fmtValue(val)}</Text>
      ),
    },
    {
      key: 'allocation',
      title: 'ALLOCATION',
      dataIndex: 'allocation',
      sorter: true,
      align: 'left',
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
      <div style={{ padding: 16, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        {/* Search / token selector */}
        <style>{`.token-search::placeholder { color: var(--pcs-colors-text); opacity: 1; font-family: Kanit, sans-serif; font-size: 16px; font-weight: 400; }`}</style>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 16, flex: '1 0 0', minWidth: 456 }}>
          <SearchIcon
            size={16}
            style={{
              position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
              color: 'var(--pcs-colors-text-subtle)', pointerEvents: 'none',
            }}
          />
          <input
            className="token-search"
            placeholder="All tokens"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%', height: 40,
              background: 'var(--pcs-colors-input)',
              borderTop: '1px solid var(--pcs-colors-input-secondary)',
              borderRight: '1px solid var(--pcs-colors-input-secondary)',
              borderBottom: '2px solid var(--pcs-colors-input-secondary)',
              borderLeft: '1px solid var(--pcs-colors-input-secondary)',
              borderRadius: 16,
              paddingLeft: 36, paddingRight: 36,
              color: 'var(--pcs-colors-text)',
              fontFamily: 'Kanit, sans-serif',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: '150%',
              fontFeatureSettings: '"liga" off',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
          <ChevronDownIcon
            size={16}
            style={{
              position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
              color: 'var(--pcs-colors-text-subtle)', pointerEvents: 'none',
            }}
          />
        </div>

        {/* Options card — 8px padding all sides, 10px gap between options */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: 8,
            background: 'var(--pcs-colors-background)',
            borderTop: '1px solid var(--pcs-colors-card-border)',
            borderRight: '1px solid var(--pcs-colors-card-border)',
            borderBottom: '2px solid var(--pcs-colors-card-border)',
            borderLeft: '1px solid var(--pcs-colors-card-border)',
            borderRadius: 16,
            flexShrink: 0,
          }}
        >
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
            <Text fontSize="14px" color="textSubtle">Hide small balances</Text>
            <InfoIcon size={16} style={{ color: 'var(--pcs-colors-text-disabled)', flexShrink: 0 }} />
            <Checkbox
              scale="sm"
              checked={hideSmall}
              onChange={(e) => setHideSmall(e.target.checked)}
            />
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
            <Text fontSize="14px" color="textSubtle">Show hidden tokens</Text>
            <Checkbox
              scale="sm"
              checked={showHidden}
              onChange={(e) => setShowHidden(e.target.checked)}
            />
          </label>
        </div>
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

const BREAKDOWN_ITEMS = [
  { label: 'Wallet balance', pct: 62, value: 1173.20, color: 'var(--pcs-colors-primary)' },
  { label: 'Positions',      pct: 38, value:  719.06, color: 'var(--pcs-colors-secondary)' },
  { label: 'Unclaimed rewards', pct: 0, value: 0,     color: 'var(--pcs-colors-failure)' },
]

function PortfolioBreakdown() {
  return (
    <Card>
      <CardBody>
        {/* Header — Pretitle: 12px/600/uppercase/tracking 0.24px */}
        <Text
          fontSize="12px"
          color="textSubtle"
          bold
          style={{ letterSpacing: '0.24px', textTransform: 'uppercase', lineHeight: 1.5, marginBottom: 12 }}
        >
          My Portfolio Breakdown
        </Text>

        {/* Total value */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <Text
            bold
            fontSize="32px"
            style={{
              fontFamily: 'Kanit, sans-serif',
              fontWeight: 600,
              lineHeight: '120%',
              letterSpacing: '-0.32px',
              fontFeatureSettings: '"liga" off',
              color: 'var(--pcs-colors-text)',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            ${PORTFOLIO_TOTAL.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </Text>
          <PnlTag value={171} />
        </div>

        {/* Multi-segment allocation bar */}
        {(() => {
          const visible = BREAKDOWN_ITEMS.filter((i) => i.pct > 0)
          return (
            <div style={{ display: 'flex', height: 12, marginBottom: 24, gap: 2 }}>
              {visible.map((item, i) => {
                const isFirst = i === 0
                const isLast = i === visible.length - 1
                const radius = isFirst && isLast
                  ? '99px'
                  : isFirst
                  ? '99px 0 0 99px'
                  : isLast
                  ? '0 99px 99px 0'
                  : '0'
                const background = isFirst
                  ? 'linear-gradient(180deg, #53DEE9 0%, #1FC7D4 100%)'
                  : item.color
                return (
                  <div
                    key={item.label}
                    style={{ flex: item.pct, background, borderRadius: radius }}
                  />
                )
              })}
            </div>
          )
        })()}

        {/* Breakdown rows — 8px gap, no borders */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {BREAKDOWN_ITEMS.map(({ label, pct, value, color }) => (
          <div
            key={label}
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <div style={{ width: 4, height: 42, borderRadius: 2, background: color, flexShrink: 0, marginTop: 2 }} />
              <div>
                {/* H2 Mobile: 16px / 600 / textSubtle */}
                <Text fontSize="16px" bold color="textSubtle" style={{ lineHeight: 1.5 }}>{label}</Text>
                <Text fontSize="12px" color="textSubtle" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {pct}%
                </Text>
              </div>
            </div>
            <Text bold fontSize="14px" style={{ fontVariantNumeric: 'tabular-nums' }}>
              {fmtValue(value)}
            </Text>
          </div>
        ))}
        </div>

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
          <Button variant="text" scale="sm">
            Buy crypto
          </Button>
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
      {/* Top row: chart + sidebar — same height via stretch */}
      <div style={{ display: 'flex', gap: 16, alignItems: 'stretch', marginBottom: 16 }}>
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
          <PortfolioChart />
        </div>
        <div style={{ width: 323, flexShrink: 0 }}>
          <PortfolioBreakdown />
        </div>
      </div>

      {/* Token table — full width */}
      <TokenTable />
    </WalletPageShell>
  )
}
