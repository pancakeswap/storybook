import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent } from 'storybook/test'
import {
  TokenizedAssetsList,
  type TokenizedAsset,
} from './TokenizedAssetsList'

const SAMPLE_ASSETS: readonly TokenizedAsset[] = [
  { id: 'nvda', name: 'Nvidia corp', ticker: 'NVDAx', price: '$235.31', changePct: 3.89, iconColor: '#76B900', iconInitials: 'N' },
  { id: 'googl', name: 'Alphabet Inc', ticker: 'GOOGLx', price: '$399.88', changePct: -0.46, iconColor: '#4285F4', iconInitials: 'G' },
  { id: 'aapl', name: 'Apple Inc', ticker: 'AAPLx', price: '$298.39', changePct: -0.37, iconColor: '#1D1D1F' },
  { id: 'msft', name: 'Microsoft Corp', ticker: 'MSFTx', price: '$408.89', changePct: 0.92, iconColor: '#00A4EF', iconInitials: 'M' },
  { id: 'amzn', name: 'Amazon.com Inc', ticker: 'AMZNx', price: '$408.89', changePct: 0.92, iconColor: '#FF9900', iconInitials: 'a' },
  { id: 'tsl', name: 'Tesla Inc', ticker: 'TSLx', price: '$408.89', changePct: 0.92, iconColor: '#E31937', iconInitials: 'T' },
  { id: 'wbtc', name: 'WBTC', ticker: 'WBTC', price: '$108,408', changePct: 0.92, iconColor: '#F7931A', iconInitials: '₿' },
]

const meta = {
  title: 'Widgets/Tokenized Assets/List',
  component: TokenizedAssetsList,
  parameters: { layout: 'centered' },
  args: {
    assets: SAMPLE_ASSETS,
    selectedAssetId: 'nvda',
    filters: ['Stocks', 'Crypto', 'ETFs'],
    activeFilters: ['Stocks'],
    favorites: ['msft'],
    onAssetSelect: fn(),
    onToggleFavorite: fn(),
    onSearchChange: fn(),
    onFilterToggle: fn(),
  },
} satisfies Meta<typeof TokenizedAssetsList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const NoFilters: Story = {
  args: { filters: [] as string[], activeFilters: [] as string[] },
}

/** A controlled-state variant so the search/select interactions actually update. */
export const Interactive: Story = {
  render: (args) => {
    const Wrapped = () => {
      const [selectedId, setSelectedId] = useState<string>(args.selectedAssetId ?? 'nvda')
      const [search, setSearch] = useState('')
      const [favorites, setFavorites] = useState<string[]>(['msft'])
      const visible = SAMPLE_ASSETS.filter(
        (a) =>
          !search ||
          a.name.toLowerCase().includes(search.toLowerCase()) ||
          a.ticker.toLowerCase().includes(search.toLowerCase()),
      )
      return (
        <TokenizedAssetsList
          {...args}
          assets={visible}
          selectedAssetId={selectedId}
          onAssetSelect={(id) => {
            args.onAssetSelect?.(id)
            setSelectedId(id)
          }}
          searchQuery={search}
          onSearchChange={(s) => {
            args.onSearchChange?.(s)
            setSearch(s)
          }}
          favorites={favorites}
          onToggleFavorite={(id) => {
            args.onToggleFavorite?.(id)
            setFavorites((curr) =>
              curr.includes(id) ? curr.filter((x) => x !== id) : [...curr, id],
            )
          }}
        />
      )
    }
    return <Wrapped />
  },
  play: async ({ canvas, args }) => {
    const search = canvas.getByLabelText('Search tokens or stocks')
    await userEvent.type(search, 'apple')
    await expect(args.onSearchChange).toHaveBeenCalled()
    await expect(canvas.getByText('Apple Inc')).toBeInTheDocument()
    // Clear and select a different asset row.
    await userEvent.clear(search)
    await userEvent.click(canvas.getByText('Microsoft Corp'))
    await expect(args.onAssetSelect).toHaveBeenCalledWith('msft')
  },
}
