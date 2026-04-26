import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { MultiSelect } from './MultiSelect'
import { Text } from './Text'
import { Card, CardBody } from './Card'

const chains = [
  { label: 'BNB', value: 'BNB', icon: 'https://assets.pancakeswap.finance/web/chains/56.png' },
  { label: 'Ethereum', value: 'Ethereum', icon: 'https://assets.pancakeswap.finance/web/chains/1.png' },
  { label: 'Polygon zkEVM', value: 'Polygon zkEVM', icon: 'https://assets.pancakeswap.finance/web/chains/1101.png' },
  { label: 'zkSync Era', value: 'zkSync Era', icon: 'https://assets.pancakeswap.finance/web/chains/324.png' },
  { label: 'Arbitrum One', value: 'Arbitrum One', icon: 'https://assets.pancakeswap.finance/web/chains/42161.png' },
  { label: 'Linea', value: 'Linea', icon: 'https://assets.pancakeswap.finance/web/chains/59144.png' },
  { label: 'Base', value: 'Base', icon: 'https://assets.pancakeswap.finance/web/chains/8453.png' },
  { label: 'opBNB', value: 'opbnb', icon: 'https://assets.pancakeswap.finance/web/chains/204.png' },
  { label: 'Aptos', value: 'Aptos', icon: 'https://aptos.pancakeswap.finance/images/apt.png' },
]

const tokens = [
  { label: 'CAKE', value: 'cake' },
  { label: 'BNB', value: 'bnb' },
  { label: 'USDT', value: 'usdt' },
  { label: 'BUSD', value: 'busd' },
  { label: 'ETH', value: 'eth' },
  { label: 'BTCB', value: 'btcb' },
]

function MultiSelectPage() {
  const [controlled, setControlled] = useState([chains[0].value])

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '32px 24px' }}>
      <Text bold fontSize="20px">MultiSelect</Text>
      <Text color="textSubtle" fontSize="14px" style={{ marginTop: 4, marginBottom: 32 }}>
        PancakeSwap MultiSelect — copied from <code style={{ fontSize: 12, color: 'var(--pcs-colors-primary)' }}>packages/uikit/src/components/MultiSelect</code>. Uses primereact dropdown engine.
      </Text>

      <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {/* With filter */}
        <div>
          <Text bold fontSize="14px" style={{ marginBottom: 12 }}>With Search Filter</Text>
          <MultiSelect
            style={{ width: '328px' }}
            panelStyle={{ minHeight: '382px' }}
            scrollHeight="382px"
            options={chains}
            isShowFilter
          />
        </div>

        {/* With select all */}
        <div>
          <Text bold fontSize="14px" style={{ marginBottom: 12 }}>With Select All</Text>
          <MultiSelect
            style={{ width: '273px' }}
            scrollHeight="400px"
            options={chains}
            isShowSelectAll
            selectAllLabel="All networks"
          />
        </div>

        {/* Controlled */}
        <div>
          <Text bold fontSize="14px" style={{ marginBottom: 12 }}>Controlled</Text>
          <MultiSelect
            style={{ width: '273px', backgroundColor: 'var(--pcs-colors-input)' }}
            panelStyle={{ backgroundColor: 'var(--pcs-colors-input)' }}
            scrollHeight="380px"
            options={chains}
            isShowSelectAll
            selectAllLabel="All networks"
            value={controlled}
            onChange={(e) => setControlled(e.value)}
          />
          <Text color="textSubtle" fontSize="12px" style={{ marginTop: 8 }}>
            Selected: {controlled.join(', ') || 'none'}
          </Text>
        </div>
      </div>

      {/* Inside a Card */}
      <div style={{ marginTop: 48 }}>
        <Text bold fontSize="14px" style={{ marginBottom: 12 }}>Inside a Card</Text>
        <Card style={{ width: 400 }}>
          <CardBody>
            <Text bold style={{ marginBottom: 12 }}>Filter tokens</Text>
            <MultiSelect
              options={tokens}
              isShowFilter
              isShowSelectAll
              selectAllLabel="All tokens"
              placeholder="Search tokens..."
            />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

const meta = {
  title: 'Widgets/MultiSelect',
  component: MultiSelectPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof MultiSelectPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Multi Select' }
