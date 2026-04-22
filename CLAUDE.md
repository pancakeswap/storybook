## Implementation Rules

### Reuse first — never re-implement

When implementing any feature or UI:

1. **Use existing components** — `Button`, `Card`, `Text`, `TabMenu`, `TableView` live in `src/ui/components/`. Import and compose them. Do NOT create ad-hoc styled buttons, cards, text wrappers, tables, or tabs.
2. **Use existing design tokens** — colors, shadows, spacing, radii, fonts are defined in `src/ui/tokens.ts` and exposed as CSS variables (`--pcs-colors-*`, `--pcs-shadows-*`). Never hardcode hex values, pixel sizes, or shadows that already have a token.
3. **Use existing icons** — 241 icons live in `src/ui/Icons.tsx`. Check there before adding any SVG.
4. **Ask before changing a basic component or widget.** Files in scope: `tokens.ts`, `theme.ts`, `design-system.css`, `Icons.tsx`, and everything in `src/ui/components/*` and `src/ui/widgets/*`. If a change you need would modify any of these, pause and ask the user which scope they want:
   - **Change the basic component/widget directly** — affects every feature that uses it.
   - **Change only on the current page** — keep the basic component untouched and adjust the call site instead.
   Do NOT pick the scope yourself.
5. **Follow PancakeSwap's design language** — see section below.

---

## PancakeSwap Design Language

### Color identity
- **Purple-tinted neutrals** — backgrounds and text use warm purple undertones, not gray. Light bg `#FAF9FA`, dark bg `#08060B`, dark card `#27262C`. Text is deep purple `#280D5F` (light) / pale lavender `#F4EEFF` (dark).
- **Teal primary** `#1FC7D4` — CTAs, links, active states, brand.
- **Purple secondary** — `#7645D9` (light) / `#A881FC` (dark). Focus rings, accents.
- **Pink for failure** `#ED4B9E` — not red. Short/loss/error/danger all use this magenta-pink. This is PCS's most distinctive trait.
- **Minty green for success** `#31D0AA` — more teal-green than pure green.
- **Amber warning** `#FFB237`.
- **Purple-tinted overlays** — `rgba(40, 13, 95, 0.60)`, not pure black.

### Shape & surface
- **Generous radius** — 16px on buttons (`radii.default`), 24px on cards (`radii.card`). No sharp corners.
- **Card border trick** — outer div = border color, inner div = background, `padding: 1px 1px 3px 1px`. Subtle bottom-heavy border.
- **Inset bottom shadow on solid buttons** — `0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset`. Gives physical "press" depth. Removed on outline/flat variants (secondary, tertiary, text, light, bubblegum).

### Typography
- **Kanit** — Google Font, weights 400 / 600 / 800. Rounded, friendly sans-serif.
- **Mono** — SFMono, ui-monospace, monospace.
- **Sizes** — 10, 12, 14, 16, 20, 40px only. No intermediate values.
- **Letter-spacing** `0.03em` on buttons.
- **Tabular numerals** everywhere for aligned numeric columns.

### Interaction
- **Hover** — opacity 0.65 (not a color shift).
- **Active press** — `translateY(1px)` + shadow removed.
- **Focus ring** — violet `#7645D9` with 4px spread.
- **State cards** — animated gradient border (primaryBright → secondary) for active, solid colored borders for success/warning.
- **Disabled** — `backgroundDisabled` bg + `textDisabled` color + no shadow.

### Spacing
- Token scale: 0, 1, 2, 4, 6, 8, 12, 14, 16, 20, 24, 32, 48, 56, 64px.
- Card body: 24px. Button md: 48px height, 0 24px padding. Button sm: 32px / 0 16px. Button xs: 20px / 0 8px.

### Breakpoints
- xs: 370, sm: 576, md: 852, lg: 968, xl: 1080, xxl: 1200px (site width).

---

## Workflow Commands

This project has custom slash commands in `.claude/commands/`:

- **`/new-task`** — Start a new task: asks for name, handles local changes, checks out main, pulls latest, creates a feature branch, starts Storybook
- **`/switch-task`** — Switch between existing task branches
- **`/submit`** — Commit + PR + Linear ticket

### Submit intent detection

When the user says any of the following (or similar phrasing), treat it as a `/submit` command:
- "push the changes", "create a PR", "submit the changes", "send the changes to FE", "save the changes", "send it to review", "ship it"

---

## Design System Architecture

The design system is ported from **PancakeSwap UIKit** (`pancake-frontend/packages/uikit`).

### Token layers

| Layer | File | Purpose |
|---|---|---|
| Raw values | `src/ui/tokens.ts` | All PCS colors (lightColors, darkColors, v2 scales), shadows, fonts, space, radii, fontSizes |
| Chakra theme | `src/ui/theme.ts` | Maps tokens → CSS variables (`--pcs-colors-*`, `--pcs-shadows-*`) with light/dark switching |
| Structural CSS | `src/ui/design-system.css` | Font import (Kanit), font sizes, spacing, radius, z-index, motion primitives |
| styled-components theme | `src/ui/components/theme.ts` | Provides `pcsTheme` object for styled-components `ThemeProvider` — maps `theme.colors.*` to CSS variable references |

### Key color tokens (PCS naming)

| Token | CSS variable | Usage |
|---|---|---|
| `primary` | `--pcs-colors-primary` | Brand teal `#1FC7D4` |
| `secondary` | `--pcs-colors-secondary` | Accent purple (light: `#7645D9`, dark: `#A881FC`) |
| `success` | `--pcs-colors-success` | Profit / long `#31D0AA` |
| `failure` | `--pcs-colors-failure` | Loss / short `#ED4B9E` |
| `warning` | `--pcs-colors-warning` | Caution `#FFB237` |
| `text` | `--pcs-colors-text` | Primary text |
| `textSubtle` | `--pcs-colors-text-subtle` | Secondary text |
| `textDisabled` | `--pcs-colors-text-disabled` | Placeholder / disabled |
| `background` | `--pcs-colors-background` | Page background |
| `card` | `--pcs-colors-card` | Card surface |
| `cardBorder` | `--pcs-colors-card-border` | Card/section borders |
| `input` | `--pcs-colors-input` | Input / depressed backgrounds |
| `invertedContrast` | `--pcs-colors-inverted-contrast` | Text on brand-colored backgrounds |

### Components (from PCS UIKit, styled-components)

All in `src/ui/components/`:

- **Button** — `variant`: primary, secondary, tertiary, text, danger, dangerOutline, subtle, success, light, bubblegum. `scale`: md (48px), sm (32px), xs (20px). Inset bottom shadow on solid variants.
- **Card** — `isActive`, `isSuccess`, `isWarning`, `isDisabled`. Sub-components: `CardBody` (24px padding), `CardHeader` (variants: default, blue, bubblegum, violet, pale), `CardFooter`, `CardRibbon`.
- **Text** — `color` (PCS named colors), `bold`, `small`, `fontSize`, `ellipsis`, `textTransform`, `strikeThrough`. Polymorphic `as` prop.
- **TabMenu** + **Tab** — `activeIndex`, `onItemClick`, `fullWidth`, `gap`, `isShowBorderBottom`. Tab `scale`: md, lg.
- **TableView** — Generic `TableView<T>` with `columns`, `data`, `onSort`, `sortOrder`, `sortField`, `onRowClick`. PCS sort arrow buttons.

### Icons

241 PCS icons + custom additions in `src/ui/Icons.tsx`. All use `fill="currentColor"`, default 20x20.

---

## Storybook MCP

When working on UI components, use the `storybook` MCP tools:

- Query `list-all-documentation` to discover components
- Query `get-documentation` for props and examples
- Use `get-storybook-story-instructions` before creating stories
- Run `run-story-tests` before reporting completion
- Never assume component props — verify through docs first

---

## Typography (PCS)

- **Font**: Kanit (400, 600, 800) — `'Kanit', sans-serif`
- **Mono**: SFMono, ui-monospace, monospace
- **Sizes**: 10px, 12px, 14px, 16px, 20px, 40px
- All numeric output uses `font-variant-numeric: tabular-nums`
- Positive PnL → `success` (green); negative → `failure` (pink). Never swapped.

---

## Theme

- `ThemeProvider` in `src/ui/ThemeProvider.tsx` wraps Chakra + next-themes + styled-components
- `.storybook/preview.tsx` wraps all stories with both `ThemeProvider` and styled-components `SCThemeProvider`
- Use CSS variables for colors — they auto-switch with light/dark
- Use `useTheme()` only when you need the theme value in JS (e.g. chart colors)

---

## Storybook Structure

Story titles follow this hierarchy:
- `'Design System/...'` — Colors, Icons, Shadows, Spacing, Typography
- `'Components/...'` — Button, Card, Text, TabMenu, TableView
- `'Widgets/...'` — feature-level compositions
- `'Apps/...'` — full page layouts

Page-level stories use `parameters: { layout: 'fullscreen' }`.
