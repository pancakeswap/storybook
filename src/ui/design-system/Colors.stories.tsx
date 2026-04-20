import type { Meta, StoryObj } from '@storybook/react-vite'
import '../design-system.css'
import { SideBySideThemes } from '../../stories-utils'

/* ── Helpers ─────────────────────────────────────────────────── */
function Swatch({ token, label }: { token: string; label: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 120 }}>
      <div style={{
        width: '100%', height: 56, borderRadius: 8,
        background: `var(${token})`,
        border: '1px solid rgba(128,128,128,0.15)',
        flexShrink: 0,
      }} />
      <div>
        <div style={{ fontFamily: "'SF Mono','Fira Code',monospace", fontSize: 10, color: 'var(--pcs-colors-text-muted)', marginBottom: 2 }}>{token}</div>
        <div style={{ fontSize: 11, color: 'var(--pcs-colors-text)', fontWeight: 500 }}>{label}</div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20, marginTop: 0 }}>
        {title}
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {children}
      </div>
    </section>
  )
}

function PaletteRow({ name, shades }: { name: string; shades: { token: string; label: string }[] }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--pcs-colors-text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 12 }}>{name}</div>
      <div style={{ display: 'flex', gap: 4, borderRadius: 10, overflow: 'hidden' }}>
        {shades.map((s) => (
          <div key={s.token} style={{ flex: 1, minWidth: 0 }} title={s.token}>
            <div style={{ height: 48, background: `var(${s.token})`, border: '1px solid rgba(128,128,128,0.1)' }} />
            <div style={{ paddingTop: 6 }}>
              <div style={{ fontSize: 9, color: 'var(--pcs-colors-text-muted)', fontFamily: 'monospace', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Page component ──────────────────────────────────────────── */
function ColorsPage() {
  return (
    <div className="perps-root" style={{ minHeight: '100vh', padding: '40px 48px', background: 'var(--pcs-colors-bg)', color: 'var(--pcs-colors-text)' }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 8px', letterSpacing: '-0.5px' }}>Colors</h1>
      <p style={{ color: 'var(--pcs-colors-text-muted)', fontSize: 14, margin: '0 0 48px', maxWidth: 600, lineHeight: 1.6 }}>
        Two-layer token architecture: primitive scales define raw values, semantic tokens assign purpose.
        Components reference semantic tokens (<code style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--pcs-colors-brand)' }}>--pcs-colors-*</code>).
        Light/dark values are resolved automatically via <code style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--pcs-colors-brand)' }}>data-theme</code>.
      </p>

      {/* ── Semantic: Backgrounds ── */}
      <Section title="Backgrounds &amp; Surfaces">
        <Swatch token="--pcs-colors-bg"              label="Page bg" />
        <Swatch token="--pcs-colors-surface"         label="Elevated surface" />
        <Swatch token="--pcs-colors-surface-card"    label="Card" />
        <Swatch token="--pcs-colors-surface-subtle"  label="Subtle (input / alt-card)" />
      </Section>

      {/* ── Semantic: Borders ── */}
      <Section title="Borders">
        <Swatch token="--pcs-colors-border"       label="Default" />
        <Swatch token="--pcs-colors-border-hover" label="Hover" />
        <Swatch token="--pcs-colors-border-focus" label="Focus (= brand)" />
      </Section>

      {/* ── Semantic: Text ── */}
      <Section title="Text">
        <Swatch token="--pcs-colors-text"           label="Primary" />
        <Swatch token="--pcs-colors-text-muted"     label="Secondary / muted" />
        <Swatch token="--pcs-colors-text-subtle"    label="Disabled / placeholder" />
        <Swatch token="--pcs-colors-text-on-brand"  label="On brand button" />
        <Swatch token="--pcs-colors-text-on-long"   label="On long button" />
        <Swatch token="--pcs-colors-text-on-short"  label="On short button" />
      </Section>

      {/* ── Semantic: Brand ── */}
      <Section title="Brand">
        <Swatch token="--pcs-colors-brand"       label="Brand (teal)" />
        <Swatch token="--pcs-colors-brand-muted" label="Brand muted" />
        <Swatch token="--pcs-colors-brand-glow"  label="Brand glow" />
        <Swatch token="--pcs-colors-accent"      label="Accent (violet)" />
        <Swatch token="--pcs-colors-accent-muted" label="Accent muted" />
      </Section>

      {/* ── Semantic: Trading ── */}
      <Section title="Trading">
        <Swatch token="--pcs-colors-long"        label="Long / profit" />
        <Swatch token="--pcs-colors-long-muted"  label="Long muted" />
        <Swatch token="--pcs-colors-long-bg"     label="Long bg" />
        <Swatch token="--pcs-colors-short"       label="Short / loss" />
        <Swatch token="--pcs-colors-short-muted" label="Short muted" />
        <Swatch token="--pcs-colors-short-bg"    label="Short bg" />
      </Section>

      {/* ── Semantic: Status ── */}
      <Section title="Status">
        <Swatch token="--pcs-colors-positive" label="Positive / success" />
        <Swatch token="--pcs-colors-negative" label="Negative / error" />
        <Swatch token="--pcs-colors-warning"       label="Warning" />
        <Swatch token="--pcs-colors-warning-muted" label="Warning muted" />
      </Section>

      {/* ── Semantic: Overlays & notices ── */}
      <Section title="Overlays &amp; Notices">
        <Swatch token="--pcs-colors-overlay"       label="Modal overlay" />
        <Swatch token="--pcs-colors-row-hover"     label="Table row hover" />
        <Swatch token="--pcs-colors-notice-bg"     label="Notice bg" />
        <Swatch token="--pcs-colors-notice-border" label="Notice border" />
        <Swatch token="--pcs-colors-notice-text"   label="Notice text" />
      </Section>

      {/* ── Primitive scales ── */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20, marginTop: 0 }}>
          Primitive Scales
        </h2>
        <PaletteRow name="Neutrals (purple-tinted)" shades={[
          { token: '--pcs-colors-gray-50',  label: '50'  },
          { token: '--pcs-colors-gray-100', label: '100' },
          { token: '--pcs-colors-gray-150', label: '150' },
          { token: '--pcs-colors-gray-200', label: '200' },
          { token: '--pcs-colors-gray-250', label: '250' },
          { token: '--pcs-colors-gray-300', label: '300' },
          { token: '--pcs-colors-gray-400', label: '400' },
          { token: '--pcs-colors-gray-500', label: '500' },
          { token: '--pcs-colors-gray-600', label: '600' },
          { token: '--pcs-colors-gray-700', label: '700' },
          { token: '--pcs-colors-gray-750', label: '750' },
          { token: '--pcs-colors-gray-800', label: '800' },
          { token: '--pcs-colors-gray-850', label: '850' },
          { token: '--pcs-colors-gray-900', label: '900' },
          { token: '--pcs-colors-gray-950', label: '950' },
        ]} />
        <PaletteRow name="Teal (Brand primary)" shades={[
          { token: '--pcs-colors-teal-50',  label: '50'     },
          { token: '--pcs-colors-teal-100', label: '100'    },
          { token: '--pcs-colors-teal-200', label: '200'    },
          { token: '--pcs-colors-teal-300', label: '300'    },
          { token: '--pcs-colors-teal-400', label: '400 bright' },
          { token: '--pcs-colors-teal-500', label: '500 ★ #1FC7D4' },
          { token: '--pcs-colors-teal-600', label: '600 dark' },
          { token: '--pcs-colors-teal-700', label: '700'    },
          { token: '--pcs-colors-teal-800', label: '800'    },
          { token: '--pcs-colors-teal-900', label: '900'    },
        ]} />
        <PaletteRow name="Violet (Accent)" shades={[
          { token: '--pcs-colors-violet-400', label: '400 light' },
          { token: '--pcs-colors-violet-500', label: '500 ★ #7645D9' },
          { token: '--pcs-colors-violet-600', label: '600'   },
          { token: '--pcs-colors-violet-900', label: '900'   },
        ]} />
        <PaletteRow name="Green (Long / Success)" shades={[
          { token: '--pcs-colors-green-300', label: '300 bright' },
          { token: '--pcs-colors-green-400', label: '400 ring' },
          { token: '--pcs-colors-green-500', label: '500 ★ #129E7D' },
          { token: '--pcs-colors-green-600', label: '600'   },
        ]} />
        <PaletteRow name="Pink (Short / Failure)" shades={[
          { token: '--pcs-colors-pink-50',  label: '50'  },
          { token: '--pcs-colors-pink-100', label: '100' },
          { token: '--pcs-colors-pink-200', label: '200' },
          { token: '--pcs-colors-pink-400', label: '400 ★ #ED4B9E' },
          { token: '--pcs-colors-pink-500', label: '500' },
          { token: '--pcs-colors-pink-600', label: '600' },
        ]} />
        <PaletteRow name="Amber (Warning)" shades={[
          { token: '--pcs-colors-amber-400', label: '400 ★ #FFB237' },
          { token: '--pcs-colors-amber-500', label: '500' },
        ]} />
      </section>
    </div>
  )
}

const meta = {
  title: 'Design System/Colors',
  component: ColorsPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', a11y: { disable: true } },
} satisfies Meta<typeof ColorsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Color Tokens',
  render: () => (
    <SideBySideThemes>
      <ColorsPage />
    </SideBySideThemes>
  ),
}
