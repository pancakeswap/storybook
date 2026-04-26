import type { Meta, StoryObj } from '@storybook/react-vite'
import '../theme/design-system.css'
import { baseColors, additionalColors, lightColors, darkColors, lightColorsV2, darkColorsV2, shadows } from '../theme/tokens'

/* ── Helpers ─────────────────────────────────────────────────── */
function Swatch({ token, hex, label }: { token: string; hex?: string; label: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: 120 }}>
      <div style={{
        width: '100%', height: 48, borderRadius: 8,
        background: hex ?? `var(${token})`,
        border: '1px solid rgba(128,128,128,0.15)',
      }} />
      <div style={{ fontFamily: 'monospace', fontSize: 9, color: 'var(--pcs-colors-text-subtle)', wordBreak: 'break-all', lineHeight: 1.3 }}>
        {token || hex}
      </div>
      <div style={{ fontSize: 11, color: 'var(--pcs-colors-text)', fontWeight: 500 }}>{label}</div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16, marginTop: 0 }}>
        {title}
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {children}
      </div>
    </section>
  )
}

function ScaleRow({ name, shades }: { name: string; shades: { hex: string; label: string }[] }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--pcs-colors-text-subtle)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>{name}</div>
      <div style={{ display: 'flex', gap: 2, borderRadius: 8, overflow: 'hidden' }}>
        {shades.map((s) => (
          <div key={s.hex + s.label} style={{ flex: 1, minWidth: 0 }} title={`${s.label}: ${s.hex}`}>
            <div style={{ height: 40, background: s.hex, border: '1px solid rgba(128,128,128,0.08)' }} />
            <div style={{ paddingTop: 4, textAlign: 'center' }}>
              <div style={{ fontSize: 8, color: 'var(--pcs-colors-text-subtle)', fontFamily: 'monospace' }}>{s.label}</div>
              <div style={{ fontSize: 7, color: 'var(--pcs-colors-text-disabled)', fontFamily: 'monospace' }}>{s.hex}</div>
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
    <div className="perps-root" style={{ minHeight: '100vh', padding: '40px 48px', background: 'var(--pcs-colors-background)', color: 'var(--pcs-colors-text)' }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 8px', letterSpacing: '-0.5px' }}>PancakeSwap Color Tokens</h1>
      <p style={{ color: 'var(--pcs-colors-text-subtle)', fontSize: 14, margin: '0 0 48px', maxWidth: 640, lineHeight: 1.6 }}>
        Complete token set from <code style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--pcs-colors-primary)' }}>pancake-frontend/packages/uikit</code>.
        Semantic tokens switch between light/dark via <code style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--pcs-colors-primary)' }}>data-theme</code>.
      </p>

      {/* ════ BASE COLORS ════ */}
      <Section title="Base Colors">
        <Swatch hex={baseColors.primary} label="primary" token="" />
        <Swatch hex={baseColors.primaryBright} label="primaryBright" token="" />
        <Swatch hex={baseColors.primaryDark} label="primaryDark" token="" />
        <Swatch hex={baseColors.success} label="success" token="" />
        <Swatch hex={baseColors.failure} label="failure" token="" />
        <Swatch hex={baseColors.warning} label="warning" token="" />
      </Section>

      <Section title="Additional Colors">
        <Swatch hex={additionalColors.binance} label="binance" token="" />
        <Swatch hex={additionalColors.gold} label="gold" token="" />
        <Swatch hex={additionalColors.silver} label="silver" token="" />
        <Swatch hex={additionalColors.bronze} label="bronze" token="" />
      </Section>

      {/* ════ SEMANTIC TOKENS (theme-switching) ════ */}
      <Section title="Backgrounds (semantic)">
        <Swatch token="--pcs-colors-background" label="background" />
        <Swatch token="--pcs-colors-background-page" label="backgroundPage" />
        <Swatch token="--pcs-colors-background-alt" label="backgroundAlt" />
        <Swatch token="--pcs-colors-background-alt-2" label="backgroundAlt2" />
        <Swatch token="--pcs-colors-background-alt-3" label="backgroundAlt3" />
        <Swatch token="--pcs-colors-background-disabled" label="backgroundDisabled" />
        <Swatch token="--pcs-colors-background-hover" label="backgroundHover" />
        <Swatch token="--pcs-colors-background-tapped" label="backgroundTapped" />
        <Swatch token="--pcs-colors-background-overlay" label="backgroundOverlay" />
        <Swatch token="--pcs-colors-bubblegum" label="bubblegum" />
      </Section>

      <Section title="Cards & Surfaces (semantic)">
        <Swatch token="--pcs-colors-card" label="card" />
        <Swatch token="--pcs-colors-card-secondary" label="cardSecondary" />
        <Swatch token="--pcs-colors-card-border" label="cardBorder" />
        <Swatch token="--pcs-colors-dropdown" label="dropdown" />
        <Swatch token="--pcs-colors-dropdown-deep" label="dropdownDeep" />
        <Swatch token="--pcs-colors-tertiary" label="tertiary" />
        <Swatch token="--pcs-colors-tertiary-20" label="tertiary20" />
      </Section>

      <Section title="Inputs (semantic)">
        <Swatch token="--pcs-colors-input" label="input" />
        <Swatch token="--pcs-colors-input-secondary" label="inputSecondary" />
        <Swatch token="--pcs-colors-input-primary" label="inputPrimary" />
      </Section>

      <Section title="Text (semantic)">
        <Swatch token="--pcs-colors-text" label="text" />
        <Swatch token="--pcs-colors-text-subtle" label="textSubtle" />
        <Swatch token="--pcs-colors-text-disabled" label="textDisabled" />
        <Swatch token="--pcs-colors-text-99" label="text99" />
        <Swatch token="--pcs-colors-contrast" label="contrast" />
        <Swatch token="--pcs-colors-inverted-contrast" label="invertedContrast" />
        <Swatch token="--pcs-colors-disabled" label="disabled" />
      </Section>

      <Section title="Primary & Secondary (semantic)">
        <Swatch token="--pcs-colors-primary" label="primary" />
        <Swatch token="--pcs-colors-primary-bright" label="primaryBright" />
        <Swatch token="--pcs-colors-primary-dark" label="primaryDark" />
        <Swatch token="--pcs-colors-primary-muted" label="primaryMuted" />
        <Swatch token="--pcs-colors-primary-glow" label="primaryGlow" />
        <Swatch token="--pcs-colors-primary-10" label="primary10" />
        <Swatch token="--pcs-colors-primary-20" label="primary20" />
        <Swatch token="--pcs-colors-primary-60" label="primary60" />
        <Swatch token="--pcs-colors-secondary" label="secondary" />
        <Swatch token="--pcs-colors-secondary-muted" label="secondaryMuted" />
        <Swatch token="--pcs-colors-secondary-10" label="secondary10" />
        <Swatch token="--pcs-colors-secondary-20" label="secondary20" />
        <Swatch token="--pcs-colors-secondary-60" label="secondary60" />
      </Section>

      <Section title="Status & Trading (semantic)">
        <Swatch token="--pcs-colors-success" label="success" />
        <Swatch token="--pcs-colors-success-muted" label="successMuted" />
        <Swatch token="--pcs-colors-success-bg" label="successBg" />
        <Swatch token="--pcs-colors-failure" label="failure" />
        <Swatch token="--pcs-colors-failure-muted" label="failureMuted" />
        <Swatch token="--pcs-colors-failure-bg" label="failureBg" />
        <Swatch token="--pcs-colors-warning" label="warning" />
        <Swatch token="--pcs-colors-warning-muted" label="warningMuted" />
      </Section>

      <Section title="Status Sub-scales (semantic)">
        <Swatch token="--pcs-colors-positive-10" label="positive10" />
        <Swatch token="--pcs-colors-positive-20" label="positive20" />
        <Swatch token="--pcs-colors-positive-60" label="positive60" />
        <Swatch token="--pcs-colors-destructive" label="destructive" />
        <Swatch token="--pcs-colors-destructive-10" label="destructive10" />
        <Swatch token="--pcs-colors-destructive-20" label="destructive20" />
        <Swatch token="--pcs-colors-destructive-60" label="destructive60" />
        <Swatch token="--pcs-colors-warning-10" label="warning10" />
        <Swatch token="--pcs-colors-warning-20" label="warning20" />
        <Swatch token="--pcs-colors-warning-60" label="warning60" />
        <Swatch token="--pcs-colors-blue-10" label="blue10" />
        <Swatch token="--pcs-colors-blue-20" label="blue20" />
        <Swatch token="--pcs-colors-blue-60" label="blue60" />
      </Section>

      <Section title="Notices (semantic)">
        <Swatch token="--pcs-colors-notice-bg" label="notice.bg" />
        <Swatch token="--pcs-colors-notice-border" label="notice.border" />
        <Swatch token="--pcs-colors-notice-text" label="notice.text" />
      </Section>

      {/* ════ V2 COLOR SCALES ════ */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 16, fontWeight: 800, color: 'var(--pcs-colors-text)', margin: '48px 0 8px', letterSpacing: '-0.3px' }}>V2 Color Scales</h2>
        <p style={{ color: 'var(--pcs-colors-text-subtle)', fontSize: 13, margin: '0 0 24px' }}>
          Light-mode values shown. 10 shades per scale, from lightest (10) to darkest (100).
        </p>

        <ScaleRow name="Primary (Teal)" shades={[
          { hex: lightColorsV2.v2Primary10, label: '10' },
          { hex: lightColorsV2.v2Primary20, label: '20' },
          { hex: lightColorsV2.v2Primary30, label: '30' },
          { hex: lightColorsV2.v2Primary40, label: '40' },
          { hex: lightColorsV2.v2Primary50, label: '50' },
          { hex: lightColorsV2.v2Primary60, label: '60' },
          { hex: lightColorsV2.v2Primary70, label: '70' },
          { hex: lightColorsV2.v2Primary80, label: '80' },
          { hex: lightColorsV2.v2Primary90, label: '90' },
          { hex: lightColorsV2.v2Primary100, label: '100' },
        ]} />

        <ScaleRow name="Secondary (Purple)" shades={[
          { hex: lightColorsV2.v2Secondary10, label: '10' },
          { hex: lightColorsV2.v2Secondary20, label: '20' },
          { hex: lightColorsV2.v2Secondary30, label: '30' },
          { hex: lightColorsV2.v2Secondary40, label: '40' },
          { hex: lightColorsV2.v2Secondary50, label: '50' },
          { hex: lightColorsV2.v2Secondary60, label: '60' },
          { hex: lightColorsV2.v2Secondary70, label: '70' },
          { hex: lightColorsV2.v2Secondary80, label: '80' },
          { hex: lightColorsV2.v2Secondary90, label: '90' },
          { hex: lightColorsV2.v2Secondary100, label: '100' },
        ]} />

        <ScaleRow name="Tertiary" shades={[
          { hex: lightColorsV2.v2Tertiary10, label: '10' },
          { hex: lightColorsV2.v2Tertiary20, label: '20' },
          { hex: lightColorsV2.v2Tertiary30, label: '30' },
          { hex: lightColorsV2.v2Tertiary40, label: '40' },
          { hex: lightColorsV2.v2Tertiary50, label: '50' },
          { hex: lightColorsV2.v2Tertiary60, label: '60' },
          { hex: lightColorsV2.v2Tertiary70, label: '70' },
          { hex: lightColorsV2.v2Tertiary80, label: '80' },
          { hex: lightColorsV2.v2Tertiary90, label: '90' },
          { hex: lightColorsV2.v2Tertiary100, label: '100' },
        ]} />

        <ScaleRow name="Positive (Green)" shades={[
          { hex: lightColorsV2.v2Positive10, label: '10' },
          { hex: lightColorsV2.v2Positive20, label: '20' },
          { hex: lightColorsV2.v2Positive30, label: '30' },
          { hex: lightColorsV2.v2Positive40, label: '40' },
          { hex: lightColorsV2.v2Positive50, label: '50' },
          { hex: lightColorsV2.v2Positive60, label: '60' },
          { hex: lightColorsV2.v2Positive70, label: '70' },
          { hex: lightColorsV2.v2Positive80, label: '80' },
          { hex: lightColorsV2.v2Positive90, label: '90' },
          { hex: lightColorsV2.v2Positive100, label: '100' },
        ]} />

        <ScaleRow name="Warning (Orange)" shades={[
          { hex: lightColorsV2.v2Warning10, label: '10' },
          { hex: lightColorsV2.v2Warning20, label: '20' },
          { hex: lightColorsV2.v2Warning30, label: '30' },
          { hex: lightColorsV2.v2Warning40, label: '40' },
          { hex: lightColorsV2.v2Warning50, label: '50' },
          { hex: lightColorsV2.v2Warning60, label: '60' },
          { hex: lightColorsV2.v2Warning70, label: '70' },
          { hex: lightColorsV2.v2Warning80, label: '80' },
          { hex: lightColorsV2.v2Warning90, label: '90' },
          { hex: lightColorsV2.v2Warning100, label: '100' },
        ]} />

        <ScaleRow name="Destructive (Pink)" shades={[
          { hex: lightColorsV2.v2Destructive10, label: '10' },
          { hex: lightColorsV2.v2Destructive20, label: '20' },
          { hex: lightColorsV2.v2Destructive30, label: '30' },
          { hex: lightColorsV2.v2Destructive40, label: '40' },
          { hex: lightColorsV2.v2Destructive50, label: '50' },
          { hex: lightColorsV2.v2Destructive60, label: '60' },
          { hex: lightColorsV2.v2Destructive70, label: '70' },
          { hex: lightColorsV2.v2Destructive80, label: '80' },
          { hex: lightColorsV2.v2Destructive90, label: '90' },
          { hex: lightColorsV2.v2Destructive100, label: '100' },
        ]} />

        <ScaleRow name="Disabled (Neutral)" shades={[
          { hex: lightColorsV2.v2Disabled10, label: '10' },
          { hex: lightColorsV2.v2Disabled20, label: '20' },
          { hex: lightColorsV2.v2Disabled30, label: '30' },
          { hex: lightColorsV2.v2Disabled40, label: '40' },
          { hex: lightColorsV2.v2Disabled50, label: '50' },
          { hex: lightColorsV2.v2Disabled60, label: '60' },
          { hex: lightColorsV2.v2Disabled70, label: '70' },
          { hex: lightColorsV2.v2Disabled80, label: '80' },
          { hex: lightColorsV2.v2Disabled90, label: '90' },
          { hex: lightColorsV2.v2Disabled100, label: '100' },
        ]} />

        <ScaleRow name="Decorative Blue" shades={[
          { hex: lightColorsV2.v2DecorativeBlue10, label: '10' },
          { hex: lightColorsV2.v2DecorativeBlue20, label: '20' },
          { hex: lightColorsV2.v2DecorativeBlue30, label: '30' },
          { hex: lightColorsV2.v2DecorativeBlue40, label: '40' },
          { hex: lightColorsV2.v2DecorativeBlue50, label: '50' },
          { hex: lightColorsV2.v2DecorativeBlue60, label: '60' },
          { hex: lightColorsV2.v2DecorativeBlue70, label: '70' },
          { hex: lightColorsV2.v2DecorativeBlue80, label: '80' },
          { hex: lightColorsV2.v2DecorativeBlue90, label: '90' },
          { hex: lightColorsV2.v2DecorativeBlue100, label: '100' },
        ]} />
      </section>

      {/* ════ LIGHT THEME NAMED COLORS ════ */}
      <Section title="Light Theme — Named Colors">
        <Swatch hex={lightColors.background} label="background" token="" />
        <Swatch hex={lightColors.backgroundAlt} label="backgroundAlt" token="" />
        <Swatch hex={lightColors.card} label="card" token="" />
        <Swatch hex={lightColors.cardSecondary} label="cardSecondary" token="" />
        <Swatch hex={lightColors.cardBorder} label="cardBorder" token="" />
        <Swatch hex={lightColors.input} label="input" token="" />
        <Swatch hex={lightColors.inputSecondary} label="inputSecondary" token="" />
        <Swatch hex={lightColors.tertiary} label="tertiary" token="" />
        <Swatch hex={lightColors.dropdown} label="dropdown" token="" />
        <Swatch hex={lightColors.text} label="text" token="" />
        <Swatch hex={lightColors.textSubtle} label="textSubtle" token="" />
        <Swatch hex={lightColors.textDisabled} label="textDisabled" token="" />
        <Swatch hex={lightColors.contrast} label="contrast" token="" />
        <Swatch hex={lightColors.disabled} label="disabled" token="" />
        <Swatch hex={lightColors.secondary} label="secondary" token="" />
        <Swatch hex={lightColors.primary10} label="primary10" token="" />
        <Swatch hex={lightColors.primary20} label="primary20" token="" />
        <Swatch hex={lightColors.primary60} label="primary60" token="" />
        <Swatch hex={lightColors.positive10} label="positive10" token="" />
        <Swatch hex={lightColors.positive20} label="positive20" token="" />
        <Swatch hex={lightColors.positive60} label="positive60" token="" />
        <Swatch hex={lightColors.destructive10} label="destructive10" token="" />
        <Swatch hex={lightColors.destructive20} label="destructive20" token="" />
        <Swatch hex={lightColors.destructive60} label="destructive60" token="" />
        <Swatch hex={lightColors.warning10} label="warning10" token="" />
        <Swatch hex={lightColors.warning20} label="warning20" token="" />
        <Swatch hex={lightColors.warning60} label="warning60" token="" />
        <Swatch hex={lightColors.blue10} label="blue10" token="" />
        <Swatch hex={lightColors.blue20} label="blue20" token="" />
        <Swatch hex={lightColors.blue60} label="blue60" token="" />
        <Swatch hex={lightColors.bubblegum} label="bubblegum" token="" />
      </Section>

      {/* ════ DARK THEME NAMED COLORS ════ */}
      <Section title="Dark Theme — Named Colors">
        <Swatch hex={darkColors.background} label="background" token="" />
        <Swatch hex={darkColors.backgroundAlt} label="backgroundAlt" token="" />
        <Swatch hex={darkColors.card} label="card" token="" />
        <Swatch hex={darkColors.cardSecondary} label="cardSecondary" token="" />
        <Swatch hex={darkColors.cardBorder} label="cardBorder" token="" />
        <Swatch hex={darkColors.input} label="input" token="" />
        <Swatch hex={darkColors.inputSecondary} label="inputSecondary" token="" />
        <Swatch hex={darkColors.tertiary} label="tertiary" token="" />
        <Swatch hex={darkColors.dropdown} label="dropdown" token="" />
        <Swatch hex={darkColors.text} label="text" token="" />
        <Swatch hex={darkColors.textSubtle} label="textSubtle" token="" />
        <Swatch hex={darkColors.textDisabled} label="textDisabled" token="" />
        <Swatch hex={darkColors.contrast} label="contrast" token="" />
        <Swatch hex={darkColors.disabled} label="disabled" token="" />
        <Swatch hex={darkColors.secondary} label="secondary" token="" />
        <Swatch hex={darkColors.primary10} label="primary10" token="" />
        <Swatch hex={darkColors.primary20} label="primary20" token="" />
        <Swatch hex={darkColors.primary60} label="primary60" token="" />
        <Swatch hex={darkColors.positive10} label="positive10" token="" />
        <Swatch hex={darkColors.positive20} label="positive20" token="" />
        <Swatch hex={darkColors.positive60} label="positive60" token="" />
        <Swatch hex={darkColors.destructive10} label="destructive10" token="" />
        <Swatch hex={darkColors.destructive20} label="destructive20" token="" />
        <Swatch hex={darkColors.destructive60} label="destructive60" token="" />
        <Swatch hex={darkColors.warning10} label="warning10" token="" />
        <Swatch hex={darkColors.warning20} label="warning20" token="" />
        <Swatch hex={darkColors.warning60} label="warning60" token="" />
        <Swatch hex={darkColors.blue10} label="blue10" token="" />
        <Swatch hex={darkColors.blue20} label="blue20" token="" />
        <Swatch hex={darkColors.blue60} label="blue60" token="" />
        <Swatch hex={darkColors.bubblegum} label="bubblegum" token="" />
      </Section>

      {/* ════ SHADOWS ════ */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 16, fontWeight: 800, color: 'var(--pcs-colors-text)', margin: '48px 0 8px', letterSpacing: '-0.3px' }}>Shadows</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {Object.entries(shadows).map(([name, value]) => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 80, height: 80, borderRadius: 12,
                background: 'var(--pcs-colors-card)',
                boxShadow: value,
              }} />
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--pcs-colors-text)' }}>{name}</div>
              <div style={{ fontSize: 8, fontFamily: 'monospace', color: 'var(--pcs-colors-text-subtle)', maxWidth: 120, textAlign: 'center', lineHeight: 1.3 }}>{value}</div>
            </div>
          ))}
        </div>
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

export const Default: Story = { name: 'Color Tokens' }
