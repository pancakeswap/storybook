/**
 * Helper that returns the story-level parameters object needed to pin
 * a specific theme regardless of the Storybook toolbar theme global.
 *
 * The preview's `withTheme` decorator reads `context.parameters.theme`
 * first (falling back to the toolbar global), so setting this parameter
 * is enough to force light/dark on a per-story basis.
 *
 * Usage:
 *   export const DefaultDark: Story = {
 *     ...Default,
 *     parameters: { ...Default.parameters, ...forceTheme('dark') },
 *   }
 */
export const forceTheme = (theme: 'light' | 'dark') => ({ theme })

/**
 * Side-by-side two-theme specimen for design-system documentation pages.
 *
 * Each half applies the `.light` / `.dark` class directly on its wrapping
 * div. Chakra v3's semantic tokens use descendant selectors (`.light &` /
 * `.dark &`), so `--pcs-colors-*` CSS variables resolve independently per
 * subtree regardless of what class is on `<html>`.
 *
 * Used for primitives (Colors, Shadows, Radii, Gradients, Spacing,
 * Typography, Badges, Icons) where reviewers want to compare both
 * themes at a glance.
 */
export function SideBySideThemes({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <ThemeHalf label="Light" themeClass="light" colorScheme="light">
        {children}
      </ThemeHalf>
      <ThemeHalf label="Dark" themeClass="dark" colorScheme="dark">
        {children}
      </ThemeHalf>
    </div>
  )
}

function ThemeHalf({
  label,
  themeClass,
  colorScheme,
  children,
}: {
  label: string
  themeClass: 'light' | 'dark'
  colorScheme: 'light' | 'dark'
  children: React.ReactNode
}) {
  return (
    <div
      className={themeClass}
      style={{
        background: 'var(--pcs-colors-bg)',
        color: 'var(--pcs-colors-text)',
        borderRight: themeClass === 'light' ? '1px solid rgba(128,128,128,0.2)' : undefined,
        position: 'relative',
        colorScheme,
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--pcs-colors-text-muted)',
          padding: '10px 16px',
          background: 'var(--pcs-colors-surface-subtle)',
          borderBottom: '1px solid var(--pcs-colors-border)',
        }}
      >
        {label}
      </div>
      {children}
    </div>
  )
}
