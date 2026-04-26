import type { Meta, StoryObj } from '@storybook/react-vite'
import './design-system.css'
import { tokens } from './tokens'

/* ── Helpers ─────────────────────────────────────────────────── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--pcs-colors-text-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20, marginTop: 0 }}>
        {title}
      </h2>
      {children}
    </section>
  )
}

/* ── Page component ──────────────────────────────────────────── */
function TypographyPage() {
  return (
    <div className="perps-root" style={{ minHeight: '100vh', padding: '40px 48px', background: 'var(--pcs-colors-background)', color: 'var(--pcs-colors-text)', fontFamily: tokens.fonts.normal }}>
      <h1 style={{ fontSize: 40, fontWeight: 800, margin: '0 0 8px', letterSpacing: '-0.5px' }}>Typography</h1>
      <p style={{ color: 'var(--pcs-colors-text-subtle)', fontSize: 16, margin: '0 0 48px', lineHeight: 1.6 }}>
        Font: <strong style={{ color: 'var(--pcs-colors-text)' }}>Kanit</strong> · Weights: 400, 600, 800 · Mono: <code style={{ fontFamily: tokens.fonts.mono, fontSize: 14, color: 'var(--pcs-colors-primary)' }}>SFMono</code>
      </p>

      {/* ── Font family ── */}
      <Section title="Font Families">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <div style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--pcs-colors-text-subtle)', marginBottom: 6 }}>fonts.normal — {tokens.fonts.normal}</div>
            <div style={{ fontSize: 24, fontFamily: tokens.fonts.normal, fontWeight: 400 }}>
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--pcs-colors-text-subtle)', marginBottom: 6 }}>fonts.mono — {tokens.fonts.mono}</div>
            <div style={{ fontSize: 24, fontFamily: tokens.fonts.mono, fontWeight: 400 }}>
              0123456789 $1,234.56
            </div>
          </div>
        </div>
      </Section>

      {/* ── Font sizes ── */}
      <Section title="Font Sizes">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {Object.entries(tokens.fontSizes).map(([key, value]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'baseline', gap: 24, padding: '12px 0', borderBottom: '1px solid var(--pcs-colors-card-border)' }}>
              <div style={{ width: 80, flexShrink: 0, fontSize: 11, fontFamily: 'monospace', color: 'var(--pcs-colors-text-subtle)' }}>{value}</div>
              <div style={{ fontSize: value, fontWeight: 400 }}>The quick brown fox</div>
              <div style={{ fontSize: value, fontWeight: 600, color: 'var(--pcs-colors-primary)', marginLeft: 'auto' }}>$12,345.67</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Font weights ── */}
      <Section title="Font Weights">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { weight: 400, label: 'Regular (400)', desc: 'Body text, descriptions' },
            { weight: 600, label: 'Semibold (600)', desc: 'Buttons, labels, values' },
            { weight: 800, label: 'Bold (800)', desc: 'Headings, hero numbers' },
          ].map(({ weight, label, desc }) => (
            <div key={weight} style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '8px 0' }}>
              <div style={{ width: 150, flexShrink: 0, fontSize: 11, fontFamily: 'monospace', color: 'var(--pcs-colors-text-subtle)' }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: weight, width: 300 }}>PancakeSwap $12,345</div>
              <div style={{ fontSize: 12, color: 'var(--pcs-colors-text-subtle)' }}>{desc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Heading hierarchy ── */}
      <Section title="Heading Hierarchy">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <div style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--pcs-colors-text-subtle)', marginBottom: 4 }}>40px / 800</div>
            <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.5px' }}>Display Heading</div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--pcs-colors-text-subtle)', marginBottom: 4 }}>20px / 600</div>
            <div style={{ fontSize: 20, fontWeight: 600 }}>Section Heading</div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--pcs-colors-text-subtle)', marginBottom: 4 }}>16px / 600</div>
            <div style={{ fontSize: 16, fontWeight: 600 }}>Card Title</div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--pcs-colors-text-subtle)', marginBottom: 4 }}>14px / 400</div>
            <div style={{ fontSize: 14, fontWeight: 400 }}>Body text — The quick brown fox jumps over the lazy dog. PancakeSwap is the leading DEX on BNB Chain.</div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--pcs-colors-text-subtle)', marginBottom: 4 }}>12px / 400</div>
            <div style={{ fontSize: 12, fontWeight: 400, color: 'var(--pcs-colors-text-subtle)' }}>Caption or secondary text — Swap, earn, and build on the most popular DEX.</div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--pcs-colors-text-subtle)', marginBottom: 4 }}>10px / 600</div>
            <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--pcs-colors-text-subtle)' }}>Micro label or badge</div>
          </div>
        </div>
      </Section>

      {/* ── Text colors ── */}
      <Section title="Text Colors">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { token: '--pcs-colors-text', desc: 'Primary text' },
            { token: '--pcs-colors-text-subtle', desc: 'Subtle / secondary (textSubtle)' },
            { token: '--pcs-colors-text-disabled', desc: 'Disabled / placeholder (textDisabled)' },
            { token: '--pcs-colors-primary', desc: 'Primary (teal) — links, active' },
            { token: '--pcs-colors-secondary', desc: 'Secondary (purple)' },
            { token: '--pcs-colors-success', desc: 'Success / profit' },
            { token: '--pcs-colors-failure', desc: 'Failure / loss' },
            { token: '--pcs-colors-warning', desc: 'Warning' },
          ].map(({ token, desc }) => (
            <div key={token} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <div style={{ width: 220, flexShrink: 0, fontSize: 11, fontFamily: 'monospace', color: 'var(--pcs-colors-text-subtle)' }}>{token.replace('--pcs-colors-', '')}</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: `var(${token})`, width: 200, fontVariantNumeric: 'tabular-nums' }}>+$1,234.56 (3.21%)</div>
              <div style={{ fontSize: 12, color: 'var(--pcs-colors-text-subtle)' }}>{desc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Tabular nums ── */}
      <Section title="Tabular Numerals">
        <p style={{ color: 'var(--pcs-colors-text-subtle)', fontSize: 14, marginTop: 0, marginBottom: 16, lineHeight: 1.5 }}>
          All numeric output uses <code style={{ fontFamily: 'monospace', color: 'var(--pcs-colors-primary)' }}>font-variant-numeric: tabular-nums</code> so columns stay aligned.
        </p>
        <div style={{ display: 'flex', gap: 48 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--pcs-colors-text-subtle)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Prices</div>
            {['$3.4800', '$65,420.00', '$3,180.00', '$0.0012'].map(v => (
              <div key={v} style={{ fontSize: 16, fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{v}</div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--pcs-colors-text-subtle)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>PnL</div>
            {['+$60.94', '-$1,230.00', '+$0.18', '-$48.50'].map(v => (
              <div key={v} style={{
                fontSize: 16, fontWeight: 600, fontVariantNumeric: 'tabular-nums',
                color: v.startsWith('+') ? 'var(--pcs-colors-success)' : 'var(--pcs-colors-failure)',
              }}>{v}</div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--pcs-colors-text-subtle)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Percentages</div>
            {['+12.34%', '-5.67%', '+0.89%', '-23.45%'].map(v => (
              <div key={v} style={{
                fontSize: 16, fontWeight: 600, fontVariantNumeric: 'tabular-nums',
                color: v.startsWith('+') ? 'var(--pcs-colors-success)' : 'var(--pcs-colors-failure)',
              }}>{v}</div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Spacing tokens ── */}
      <Section title="Spacing Scale">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'flex-end' }}>
          {Object.entries(tokens.space).filter(([k]) => k !== '1rem').map(([key, value]) => (
            <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{ width: parseInt(value) || 2, height: parseInt(value) || 2, background: 'var(--pcs-colors-primary)', borderRadius: 2, minWidth: 2, minHeight: 2 }} />
              <div style={{ fontSize: 9, fontFamily: 'monospace', color: 'var(--pcs-colors-text-subtle)' }}>{value}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Radii tokens ── */}
      <Section title="Border Radius">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
          {Object.entries(tokens.radii).map(([key, value]) => (
            <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{
                width: 48, height: 48,
                borderRadius: value,
                background: 'var(--pcs-colors-primary)',
                opacity: 0.8,
              }} />
              <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--pcs-colors-text)' }}>{key}</div>
              <div style={{ fontSize: 9, fontFamily: 'monospace', color: 'var(--pcs-colors-text-subtle)' }}>{value}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

const meta = {
  title: 'Design System/Typography',
  component: TypographyPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', a11y: { disable: true } },
} satisfies Meta<typeof TypographyPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { name: 'Typography & Tokens' }
