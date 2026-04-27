import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { TableView, type IColumnsType } from './TableView'
import { Text } from './Text'
import { Card, CardBody } from './Card'
import '../design-system/design-system.css'

/* ── Sample data ──────────────────────────────────────────── */
interface Token {
  id: string
  name: string
  symbol: string
  price: string
  change24h: number
  volume: string
  tvl: string
}

const TOKENS: Token[] = [
  { id: '1', name: 'PancakeSwap', symbol: 'CAKE', price: '$2.34', change24h: 5.23, volume: '$48.2M', tvl: '$1.2B' },
  { id: '2', name: 'BNB', symbol: 'BNB', price: '$312.50', change24h: -1.47, volume: '$890M', tvl: '$5.8B' },
  { id: '3', name: 'Bitcoin', symbol: 'BTC', price: '$65,420', change24h: 2.18, volume: '$28.4B', tvl: '$12.1B' },
  { id: '4', name: 'Ethereum', symbol: 'ETH', price: '$3,180', change24h: -0.53, volume: '$15.6B', tvl: '$8.4B' },
  { id: '5', name: 'Tether', symbol: 'USDT', price: '$1.00', change24h: 0.01, volume: '$52.1B', tvl: '$3.2B' },
]

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16, marginTop: 0 }}>{title}</h2>
      {children}
    </section>
  )
}

function TableViewPage() {
  const [sortField, setSortField] = useState<keyof Token | null>(null)
  const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC' | null>(null)
  const [clickedRow, setClickedRow] = useState<string | null>(null)

  const columns: IColumnsType<Token>[] = [
    { key: 'name', title: 'Name', dataIndex: 'name', render: (_, record) => (
      <div>
        <Text bold fontSize="14px">{record.name}</Text>
        <Text color="textSubtle" fontSize="12px">{record.symbol}</Text>
      </div>
    )},
    { key: 'price', title: 'Price', dataIndex: 'price', render: (val) => <Text bold fontSize="14px">{val}</Text> },
    { key: 'change', title: '24h Change', dataIndex: 'change24h', sorter: true, render: (val: number) => (
      <Text bold fontSize="14px" color={val >= 0 ? 'success' : 'failure'}>
        {val >= 0 ? '+' : ''}{val.toFixed(2)}%
      </Text>
    )},
    { key: 'volume', title: 'Volume', dataIndex: 'volume', sorter: true },
    { key: 'tvl', title: 'TVL', dataIndex: 'tvl', sorter: true },
  ]

  const simpleColumns: IColumnsType<Token>[] = [
    { key: 'symbol', title: 'Symbol', dataIndex: 'symbol' },
    { key: 'price', title: 'Price', dataIndex: 'price' },
    { key: 'volume', title: 'Volume', dataIndex: 'volume' },
  ]

  return (
    <div className="perps-root" style={{ minHeight: '100vh', padding: '40px 48px', background: 'var(--pcs-colors-background)', color: 'var(--pcs-colors-text)' }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 8px' }}>TableView</h1>
      <p style={{ color: 'var(--pcs-colors-text-subtle)', fontSize: 14, margin: '0 0 48px' }}>
        Generic typed table with sorting, custom renderers, and row click support.
      </p>

      <Section title="Basic Table">
        <Card>
          <TableView
            columns={simpleColumns}
            data={TOKENS}
            rowKey="id"
          />
        </Card>
      </Section>

      <Section title="With Sorting & Custom Renderers">
        <Card>
          <TableView
            columns={columns}
            data={TOKENS}
            rowKey="id"
            sortField={sortField}
            sortOrder={sortOrder}
            onSort={({ dataIndex, order }) => {
              setSortField(dataIndex)
              setSortOrder(order)
            }}
          />
        </Card>
        {sortField && (
          <Text color="textSubtle" small style={{ marginTop: 8 }}>
            Sorting by: <Text as="span" bold color="primary">{String(sortField)}</Text> ({sortOrder})
          </Text>
        )}
      </Section>

      <Section title="Clickable Rows">
        <Card>
          <TableView
            columns={simpleColumns}
            data={TOKENS}
            rowKey="id"
            onRowClick={(record) => setClickedRow(record.symbol)}
          />
        </Card>
        {clickedRow && (
          <Text color="textSubtle" small style={{ marginTop: 8 }}>
            Clicked: <Text as="span" bold color="primary">{clickedRow}</Text>
          </Text>
        )}
      </Section>
    </div>
  )
}

const meta = {
  title: 'Components/TableView',
  component: TableViewPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof TableViewPage>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { name: 'Table View' }
