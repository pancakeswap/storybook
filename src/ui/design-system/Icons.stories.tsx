import type { Meta, StoryObj } from '@storybook/react-vite'
import '../design-system.css'
import * as AllIcons from '../Icons'
import { SideBySideThemes } from '../../stories-utils'

type IconComponent = React.ComponentType<{ size?: number }>

const ICON_GROUPS: { group: string; icons: { name: string; component: IconComponent }[] }[] = [
  {
    group: 'Navigation',
    icons: [
      { name: 'ChevronDown',  component: AllIcons.ChevronDownIcon },
      { name: 'ChevronUp',    component: AllIcons.ChevronUpIcon },
      { name: 'ChevronRight', component: AllIcons.ChevronRightIcon },
      { name: 'ChevronLeft',  component: AllIcons.ChevronLeftIcon },
      { name: 'ArrowUp',      component: AllIcons.ArrowUpIcon },
      { name: 'ArrowDown',    component: AllIcons.ArrowDownIcon },
      { name: 'ArrowRight',   component: AllIcons.ArrowRightIcon },
      { name: 'ExternalLink', component: AllIcons.ExternalLinkIcon },
    ],
  },
  {
    group: 'Interface',
    icons: [
      { name: 'Close',   component: AllIcons.CloseIcon },
      { name: 'Plus',    component: AllIcons.PlusIcon },
      { name: 'Minus',   component: AllIcons.MinusIcon },
      { name: 'Search',  component: AllIcons.SearchIcon },
      { name: 'Refresh', component: AllIcons.RefreshIcon },
      { name: 'Copy',    component: AllIcons.CopyIcon },
      { name: 'Filter',  component: AllIcons.FilterIcon },
      { name: 'Sort',    component: AllIcons.SortIcon },
    ],
  },
  {
    group: 'Status & Feedback',
    icons: [
      { name: 'Check',         component: AllIcons.CheckIcon },
      { name: 'CheckCircle',   component: AllIcons.CheckCircleIcon },
      { name: 'AlertTriangle', component: AllIcons.AlertTriangleIcon },
      { name: 'Info',          component: AllIcons.InfoIcon },
      { name: 'XCircle',       component: AllIcons.XCircleIcon },
    ],
  },
  {
    group: 'Trading & Finance',
    icons: [
      { name: 'TrendingUp',   component: AllIcons.TrendingUpIcon },
      { name: 'TrendingDown', component: AllIcons.TrendingDownIcon },
      { name: 'BarChart2',    component: AllIcons.BarChart2Icon },
      { name: 'Candlestick',  component: AllIcons.CandlestickIcon },
      { name: 'Wallet',       component: AllIcons.WalletIcon },
      { name: 'Coins',        component: AllIcons.CoinsIcon },
      { name: 'Layers',       component: AllIcons.LayersIcon },
      { name: 'Deposit',      component: AllIcons.DepositIcon },
      { name: 'Withdraw',     component: AllIcons.WithdrawIcon },
    ],
  },
  {
    group: 'App Chrome',
    icons: [
      { name: 'Settings',  component: AllIcons.SettingsIcon },
      { name: 'Bell',      component: AllIcons.BellIcon },
      { name: 'Menu',      component: AllIcons.MenuIcon },
      { name: 'Grid',      component: AllIcons.GridIcon },
      { name: 'Share',     component: AllIcons.ShareIcon },
      { name: 'Edit',      component: AllIcons.EditIcon },
      { name: 'Link',      component: AllIcons.LinkIcon },
      { name: 'LogOut',    component: AllIcons.LogOutIcon },
    ],
  },
  {
    group: 'Network & Blockchain',
    icons: [
      { name: 'Globe',    component: AllIcons.GlobeIcon },
      { name: 'Activity', component: AllIcons.ActivityIcon },
      { name: 'Zap',      component: AllIcons.ZapIcon },
    ],
  },
]

function IconCell({ name, component: Icon }: { name: string; component: IconComponent }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
      padding: '16px 12px',
      background: 'var(--pcs-colors-surface-card)',
      border: '1px solid var(--pcs-colors-border)',
      borderRadius: 10,
      width: 96,
      cursor: 'default',
      transition: 'border-color 0.12s, background 0.12s',
    }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--pcs-colors-brand)'
        ;(e.currentTarget as HTMLElement).style.background = 'var(--pcs-colors-surface-subtle)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--pcs-colors-border)'
        ;(e.currentTarget as HTMLElement).style.background = 'var(--pcs-colors-surface-card)'
      }}
    >
      <Icon size={22} aria-hidden />
      <span style={{ fontSize: 10, color: 'var(--pcs-colors-text-muted)', textAlign: 'center', lineHeight: 1.3, wordBreak: 'break-word' }}>
        {name}
      </span>
    </div>
  )
}

function IconsPage() {
  return (
    <div className="perps-root" style={{ minHeight: '100vh', padding: '40px 48px', background: 'var(--pcs-colors-bg)', color: 'var(--pcs-colors-text)' }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 8px', letterSpacing: '-0.5px' }}>Icons</h1>
      <p style={{ color: 'var(--pcs-colors-text-muted)', fontSize: 14, margin: '0 0 16px', lineHeight: 1.6 }}>
        All icons are SVG components from <code style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--pcs-colors-brand)' }}>Icons.tsx</code>. They inherit <code style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--pcs-colors-brand)' }}>currentColor</code>, default to 16×16, and are <code style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--pcs-colors-brand)' }}>aria-hidden</code> by default.
      </p>
      <p style={{ color: 'var(--pcs-colors-text-muted)', fontSize: 13, margin: '0 0 48px', fontFamily: 'monospace', background: 'var(--pcs-colors-surface-subtle)', padding: '8px 12px', borderRadius: 6, display: 'inline-block' }}>
        {'import { WalletIcon, DepositIcon } from \'./Icons\''}
      </p>

      {/* Size demo */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20, marginTop: 0 }}>
          Sizes
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {[12, 16, 20, 24, 32, 40].map((s) => (
            <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <AllIcons.WalletIcon size={s} aria-hidden />
              <span style={{ fontSize: 10, color: 'var(--pcs-colors-text-muted)' }}>{s}px</span>
            </div>
          ))}
        </div>
      </section>

      {/* Color variants */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20, marginTop: 0 }}>
          Color Variants
        </h2>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          {[
            { color: 'var(--pcs-colors-text)',       label: 'Default' },
            { color: 'var(--pcs-colors-text-muted)', label: 'Muted' },
            { color: 'var(--pcs-colors-brand)',    label: 'Primary' },
            { color: 'var(--pcs-colors-long)',       label: 'Long' },
            { color: 'var(--pcs-colors-short)',      label: 'Short' },
            { color: 'var(--pcs-colors-warning)',    label: 'Warning' },
          ].map(({ color, label }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <AllIcons.TrendingUpIcon size={24} style={{ color }} aria-hidden />
              <span style={{ fontSize: 10, color: 'var(--pcs-colors-text-muted)' }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* All icons by group */}
      {ICON_GROUPS.map(({ group, icons }) => (
        <section key={group} style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16, marginTop: 0 }}>
            {group}
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {icons.map(({ name, component }) => (
              <IconCell key={name} name={name} component={component} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

const meta = {
  title: 'Design System/Icons',
  component: IconsPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof IconsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Icon Library',
  render: () => (
    <SideBySideThemes>
      <IconsPage />
    </SideBySideThemes>
  ),
}
