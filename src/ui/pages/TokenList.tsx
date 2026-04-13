import { useState, useCallback } from 'react'
import { Card, CardBody, CardHeader } from '../components/Card'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import { TableView } from '../components/TableView'
import type { IColumnsType, ISortOrder } from '../components/TableView/Table'

/* ── Data ──────────────────────────────────────────────────── */

interface Token {
  id: string
  rank: number
  name: string
  symbol: string
  price: number
  change24h: number
  volume24h: number
  tvl: number
  isFavorite: boolean
}

const TOKENS: Token[] = [
  { id: '1', rank: 1, name: 'PancakeSwap', symbol: 'CAKE', price: 2.34, change24h: 5.23, volume24h: 48_200_000, tvl: 1_200_000_000, isFavorite: true },
  { id: '2', rank: 2, name: 'BNB', symbol: 'BNB', price: 312.5, change24h: -1.47, volume24h: 890_000_000, tvl: 5_800_000_000, isFavorite: false },
  { id: '3', rank: 3, name: 'Bitcoin', symbol: 'BTC', price: 65_420, change24h: 2.18, volume24h: 28_400_000_000, tvl: 12_100_000_000, isFavorite: true },
  { id: '4', rank: 4, name: 'Ethereum', symbol: 'ETH', price: 3_180, change24h: -0.53, volume24h: 15_600_000_000, tvl: 8_400_000_000, isFavorite: false },
  { id: '5', rank: 5, name: 'Tether', symbol: 'USDT', price: 1.0, change24h: 0.01, volume24h: 52_100_000_000, tvl: 3_200_000_000, isFavorite: false },
  { id: '6', rank: 6, name: 'Solana', symbol: 'SOL', price: 148.2, change24h: 8.91, volume24h: 3_200_000_000, tvl: 2_100_000_000, isFavorite: false },
  { id: '7', rank: 7, name: 'Cardano', symbol: 'ADA', price: 0.45, change24h: -3.21, volume24h: 420_000_000, tvl: 340_000_000, isFavorite: false },
  { id: '8', rank: 8, name: 'Avalanche', symbol: 'AVAX', price: 36.8, change24h: 1.12, volume24h: 580_000_000, tvl: 890_000_000, isFavorite: true },
]

/* ── Helpers ────────────────────────────────────────────────── */

const fmt = (n: number) => {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(1)}B`
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  return `$${n.toLocaleString()}`
}

const fmtPrice = (n: number) => (n >= 100 ? `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : `$${n.toFixed(4)}`)

/* ── Page ───────────────────────────────────────────────────── */

type Filter = 'all' | 'favorites'

export function TokenListPage() {
  const [filter, setFilter] = useState<Filter>('all')
  const [sortField, setSortField] = useState<keyof Token | null>(null)
  const [sortOrder, setSortOrder] = useState<ISortOrder>(null)

  const filtered = filter === 'favorites' ? TOKENS.filter((t) => t.isFavorite) : TOKENS

  const sorted = sortField && sortOrder
    ? [...filtered].sort((a, b) => {
        const av = a[sortField]
        const bv = b[sortField]
        if (typeof av === 'number' && typeof bv === 'number') {
          return sortOrder === 'ASC' ? av - bv : bv - av
        }
        return 0
      })
    : filtered

  const handleSort = useCallback(({ dataIndex, order }: { dataIndex: keyof Token | null; order: ISortOrder }) => {
    setSortField(dataIndex)
    setSortOrder(order)
  }, [])

  const columns: IColumnsType<Token>[] = [
    {
      key: 'rank',
      title: '#',
      dataIndex: 'rank',
      minWidth: '40px',
      render: (val) => <Text fontSize="14px" color="textSubtle">{val}</Text>,
    },
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      minWidth: '180px',
      render: (_, record) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            background: 'var(--pcs-colors-tertiary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, fontWeight: 600, color: 'var(--pcs-colors-primary)',
          }}>
            {record.symbol.slice(0, 2)}
          </div>
          <div>
            <Text bold fontSize="14px">{record.name}</Text>
            <Text color="textSubtle" fontSize="12px">{record.symbol}</Text>
          </div>
        </div>
      ),
    },
    {
      key: 'price',
      title: 'Price',
      dataIndex: 'price',
      sorter: true,
      render: (val: number) => (
        <Text bold fontSize="14px" style={{ fontVariantNumeric: 'tabular-nums' }}>{fmtPrice(val)}</Text>
      ),
    },
    {
      key: 'change24h',
      title: '24h Change',
      dataIndex: 'change24h',
      sorter: true,
      render: (val: number) => (
        <Text bold fontSize="14px" color={val >= 0 ? 'success' : 'failure'} style={{ fontVariantNumeric: 'tabular-nums' }}>
          {val >= 0 ? '+' : ''}{val.toFixed(2)}%
        </Text>
      ),
    },
    {
      key: 'volume24h',
      title: '24h Volume',
      dataIndex: 'volume24h',
      sorter: true,
      render: (val: number) => (
        <Text fontSize="14px" style={{ fontVariantNumeric: 'tabular-nums' }}>{fmt(val)}</Text>
      ),
    },
    {
      key: 'tvl',
      title: 'TVL',
      dataIndex: 'tvl',
      sorter: true,
      render: (val: number) => (
        <Text fontSize="14px" style={{ fontVariantNumeric: 'tabular-nums' }}>{fmt(val)}</Text>
      ),
    },
    {
      key: 'action',
      title: '',
      dataIndex: null,
      clickable: false,
      render: (_, record) => (
        <Button variant="primary" scale="sm">
          Trade {record.symbol}
        </Button>
      ),
    },
  ]

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <Text bold fontSize="20px">Top Tokens</Text>
          <Text color="textSubtle" fontSize="14px" style={{ marginTop: 4 }}>
            {sorted.length} tokens
          </Text>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button
            variant={filter === 'all' ? 'primary' : 'light'}
            scale="sm"
            onClick={() => setFilter('all')}
          >
            All Tokens
          </Button>
          <Button
            variant={filter === 'favorites' ? 'primary' : 'light'}
            scale="sm"
            onClick={() => setFilter('favorites')}
          >
            Favorites
          </Button>
        </div>
      </div>

      {/* Table */}
      <Card>
        <TableView<Token>
          columns={columns}
          data={sorted}
          rowKey="id"
          sortField={sortField}
          sortOrder={sortOrder}
          onSort={handleSort}
        />
        {sorted.length === 0 && (
          <CardBody>
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <Text color="textSubtle" fontSize="14px">No tokens found</Text>
              <Button variant="text" scale="sm" onClick={() => setFilter('all')} style={{ marginTop: 12 }}>
                View all tokens
              </Button>
            </div>
          </CardBody>
        )}
      </Card>
    </div>
  )
}
