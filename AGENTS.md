# @pancakeswap/storybook — Agent Guidelines

This is the canonical project rulebook for any AI coding agent working in this repo (Claude Code, Codex, Cursor, Aider, …). Tool-specific integrations for Claude Code (slash commands, MCP servers) live in `CLAUDE.md`; everything else — design system, styling conventions, component patterns — lives here.

This repo is published as `@pancakeswap/storybook` (a github-installable lib) and consumed by `pancake-frontend`. Widgets must work in both contexts without modification.

---

## File Structure

Two-bucket library. Basic primitives live flat in `src/primitives/` (built into `dist/primitives.js`); feature-level perps widgets live in `src/widgets/` (built into `dist/widgets.js`). Each bucket is its own Vite entry point in `vite.lib.config.ts`, with `react`, `react/jsx-runtime`, `react-dom`, and `styled-components` externalised so consumers reuse their own copies (avoids the "two React copies" / "two styled-components instances" pitfall).

```
src/
├── primitives/                ← Basic primitives, FLAT — no atom/composite split
│   ├── Box/                   ← Box, Flex, Grid, MotionBox (styled-system layout shorthand)
│   ├── Button/                ← variants: primary, secondary, tertiary, text, danger,
│   │                            dangerOutline, subtle, success, light, bubblegum
│   ├── Card/                  ← Card, CardBody, CardHeader, CardFooter, CardRibbon
│   ├── TabMenu/               ← TabMenu + Tab
│   ├── TableView/             ← Generic TableView<T>
│   ├── Text/                  ← Polymorphic Text component
│   ├── ButtonMenu/, Checkbox/, Collapse/, Heading/, Input/, Link/, Message/,
│   │   Overlay/, Radio/, Slider/, Svg/, Tag/, Toast/, Toggle/, Alert/
│   ├── Modal/                 ← Modal, ModalV2, ModalProvider, MotionModal, BottomDrawer
│   ├── DropdownMenu/, MultiSelect/, PortfolioBreakdown/, TokenDisplay/, WalletAvatar/
│   ├── Icons.tsx              ← 241 PCS icons (all use fill="currentColor", default 20×20)
│   ├── theme.ts               ← pcsTheme (styled-components ThemeProvider input)
│   ├── _pcs-shims.ts          ← Internal compat shims for uikit imports
│   └── index.ts               ← Internal barrel of all primitive exports
│
├── widgets/                   ← Perps-specific feature widgets (synced from
│   │                            apps/web/src/views/Perpetuals/components/*)
│   ├── AccountPanel.tsx       ← ┐
│   ├── BookTradesPanel.tsx    ← │
│   ├── ChartPanel.tsx         ← │
│   ├── DepositModal.tsx       ← │
│   ├── EnableTradingModal.tsx ← │  Stateless, props-driven.
│   ├── LeverageModal.tsx      ← │  Open/close via isOpen + onClose.
│   ├── MarketsDropdown.tsx    ← │  No wagmi/Privy/jotai/react-query
│   ├── OrderBook.tsx          ← │  inside — those live in the consumer.
│   ├── OrderConfirmModal.tsx  ← │
│   ├── OrderForm.tsx          ← │
│   ├── PerpsErrorMessage.tsx  ← │
│   ├── PositionsPanel.tsx     ← │
│   ├── RecentTrades.tsx       ← │
│   ├── SymbolHeader.tsx       ← │
│   ├── TpSlModal.tsx          ← │
│   ├── WithdrawModal.tsx      ← ┘
│   ├── primitives.tsx         ← PerpsPanel, UnderlineTab, UnderlineTabs (shared layout)
│   ├── WalletPanel.tsx        ← Auxiliary UI used inside other widgets. NOT exported.
│   ├── perps.css              ← Perps utility classes used by WalletPanel/PerpsPage demo
│   ├── *.stories.tsx          ← Storybook stories per widget
│   └── index.ts               ← Public surface for `@pancakeswap/storybook/widgets`
│
├── pages/                     ← Page-level layout showcases (Storybook-only).
│   │                            Compose widgets into full screens. NOT exported,
│   │                            NOT typed — auto-excluded via `vite.lib.config.ts`.
│   ├── PerpsPage.tsx          ← Perps trading terminal layout (Figma 2043-20619)
│   ├── PerpsPage.css          ← Layout-only CSS (grid/flex shells, no widget surfaces)
│   └── PerpsPage.stories.ts   ← Storybook story under `Apps/Perps`
│
├── design-system/             ← Design-system foundation: tokens, Chakra theme, provider,
│   │                            breakpoints, base CSS — plus the Storybook docs that show them off.
│   ├── tokens.ts              ← Raw values: lightColors, darkColors, shadows, fonts, space, radii
│   ├── theme.ts               ← Chakra theme — emits --pcs-colors-* / --pcs-shadows-* CSS vars
│   ├── ThemeProvider.tsx      ← Wraps Chakra + next-themes + styled-components
│   ├── design-system.css      ← Structural CSS: font import (Kanit), spacing, radius, z-index
│   ├── breakpoints.ts         ← Breakpoint constants used by MatchBreakpoints
│   ├── *.stories.tsx          ← Colors, Icons, Shadows, Spacing, Typography (Storybook-only)
│   └── index.ts               ← Internal barrel of the runtime API (tokens, theme, provider, breakpoints)
│
├── contexts/                  ← MatchBreakpoints (responsive context)
├── hooks/                     ← useIsomorphicEffect
├── util/                      ← animationToolkit, getPortalRoot, getThemeValue, serialize
├── App.tsx, main.tsx          ← Vite dev playground (not part of the published lib)
├── stories-utils.tsx          ← Common Storybook decorators / wrappers
├── index.ts                   ← Public surface for `@pancakeswap/storybook/primitives`
└── lib-shims.d.ts             ← Type shims for the published bundle
```

### Build & publish

- `pnpm build:lib` → emits `dist/primitives.js` + `dist/widgets.js` plus bundled `dist/primitives.d.ts` and `dist/widgets.d.ts` (via `vite-plugin-dts` with `rollupTypes: true`).
- Consumers import from one of three subpaths, mapped via `package.json#exports`:
  - `@pancakeswap/storybook` → `dist/widgets.js`
  - `@pancakeswap/storybook/widgets` → `dist/widgets.js`
  - `@pancakeswap/storybook/primitives` → `dist/primitives.js`
- `vite.lib.config.ts#exclude` lists files that must NOT have declarations emitted (`src/pages/**`, `WalletPanel.tsx`) — they're internal to Storybook, not part of the published API.
- Storybook dev: `pnpm storybook`. Vite playground: `pnpm dev`.

### What goes where

| Adding… | Goes in |
|---|---|
| A new generic primitive (button variant, table component, layout helper) | `src/primitives/<Name>/` + re-export in `src/primitives/index.ts` and `src/index.ts` |
| A new icon | `src/primitives/Icons.tsx` |
| A new design token | `src/design-system/tokens.ts` first, then surface it through `src/design-system/theme.ts` |
| A new perps widget | `src/widgets/<Name>.tsx` + re-export in `src/widgets/index.ts` + add `<Name>.stories.tsx` |
| A composite UI used inside other primitives but not published at the top level | `src/primitives/<Name>/` (same flat tier — re-export from `src/primitives/index.ts` only if it's stable enough for downstream consumers) |
| A page-level layout showcase that composes widgets | `src/pages/<Name>.tsx`. Pages do **only layout** — no widget-style overrides; if a widget needs a visual tweak, add a prop/variant to the widget. Auto-excluded from declarations via `vite.lib.config.ts`. |

---

## Implementation Rules

### Reuse first — never re-implement

When implementing any feature or UI:

1. **Use existing components** — `Button`, `Card`, `Text`, `TabMenu`, `TableView` live in `src/primitives/`. Import and compose them. Do NOT create ad-hoc styled buttons, cards, text wrappers, tables, or tabs.
2. **Use existing design tokens** — colors, shadows, spacing, radii, fonts are defined in `src/design-system/tokens.ts` and exposed as CSS variables (`--pcs-colors-*`, `--pcs-shadows-*`). Never hardcode hex values, pixel sizes, or shadows that already have a token.
3. **Use existing icons** — 241 icons live in `src/primitives/Icons.tsx`. Check there before adding any SVG.
4. **Ask before changing a basic component or widget.** Files in scope: `src/design-system/tokens.ts`, `src/design-system/theme.ts`, `src/design-system/design-system.css`, `src/primitives/Icons.tsx`, and everything in `src/primitives/*`. If a change you need would modify any of these, pause and ask the user which scope they want:
   - **Change the basic component/widget directly** — affects every feature that uses it.
   - **Change only on the current page** — keep the basic component untouched and adjust the call site instead.
   Do NOT pick the scope yourself.
5. **Follow PancakeSwap's design language** — see section below.

### Style widgets with styled-components + Box/Flex — no raw .css, no inline `style={{}}`

Styled-components carry their CSS with the component and use the consumer's styled-components theme automatically. Raw `.css` files force consumers to side-effect import a stylesheet and risk style loss in SSR / code-split builds. Inline `style={{}}` objects bypass the theme, can't be overridden by parent styled-components, and create new object identities every render (causing needless reconciliation).

- **Do NOT add new `.css` files alongside widgets.** Existing `.css` files under `src/widgets/` are legacy and being migrated.
- **Do NOT use inline `style={{}}`** for styling — only acceptable for genuinely dynamic values that can't be expressed via props (e.g. a computed translateX from drag state, a width tied to live audio amplitude). For static layout / spacing / color, use the options below.
- **Prefer the styled-system primitives** in `src/primitives/Box/` for layout and spacing — `<Box>`, `<Flex>`, `<Grid>`, `<MotionBox>`. They accept the standard styled-system props (`p`, `px`, `py`, `m`, `flex`, `width`, `height`, `bg`, `color`, `position`, `top`, `border`, `borderRadius`, …) and resolve through the theme:

  ```tsx
  // ✅ Good — props are typed, themeable, no inline style identity churn
  <Flex flexDirection="column" p="6px" gap="8px" bg="backgroundAlt" borderRadius="card">
    <Box flex={1}>{...}</Box>
  </Flex>

  // ❌ Bad — inline style, hardcoded values, no theme integration
  <div style={{ display: 'flex', flexDirection: 'column', padding: 6, gap: 8 }}>
    <div style={{ flex: 1 }}>{...}</div>
  </div>
  ```

- For anything more complex than the styled-system shorthand allows (pseudo-classes, nested selectors, animations, conditional styling that depends on multiple props), reach for `styled.div` / `styled(Box)` colocated in the same `.tsx`. Read tokens from the theme: `${({ theme }) => theme.colors.success}`, `theme.radii.card`, `theme.shadows.level1`, etc.
- Token shape is `pcsTheme` in `src/primitives/theme.ts` — keys mirror PancakeSwap uikit, so widgets work in both this repo (Storybook + Vite dev) and pancake-frontend without changes.
- Layout primitives (`PerpsPanel`, tab bars, table rows) belong in `src/widgets/primitives.tsx` and are reused — don't reinvent.

### Pages are pure layout

Files under `src/pages/` are layout shells. They place widgets in a visual arrangement and do nothing else.

- A page MUST NOT contain CSS or styled-components that override widget internals. Page-level styles are limited to layout containers (Flex / Grid wrappers, sizing, gaps) — never widget surface styling (colors, paddings, borders, typography inside a widget).
- If a widget's appearance needs to change in a particular page, do ONE of:
  1. **Update the widget itself** if the change is universal (every consumer should get it).
  2. **Add a new prop / variant to the widget** if the change is context-specific (e.g. `<OrderForm density="compact" />`, `<PositionsPanel hideHeader />`). The widget owns its surface; the page only chooses among existing variants.
- Pages are not part of the published API. They live in Storybook for documentation/preview only — `vite.lib.config.ts#exclude` lists `src/pages/**` so no declarations are emitted for them.
- A page composes only `src/widgets/*` and `src/primitives/Box / Flex / Grid`. Importing a primitive other than the layout helpers (e.g. directly using `Button` or `Card` in a page) is a smell — that styling belongs inside a widget.

### Widgets are stateless

The `src/widgets/*` components are presentation-only. The consumer (pancake-frontend) owns business data and writes. Lift state out via props and callbacks.

- Internal `useState` is only OK for view-state: hover, dropdown open/close, focused input, optimistic input draft. Anything that represents real account/order/market data must come in via props.
- Async fetching, wagmi/Privy hooks, react-query, jotai atoms — none of those belong in widgets here. They live in the consumer.
- Modals expose `open`, `onClose`, `onConfirm` callbacks; the consumer drives open/close.

### Accessibility

- Icon-only buttons must have `aria-label`.
- Color-only state communication must have a text/icon fallback (e.g. a green/red dot is not enough — pair it with an explicit "Long" / "Short" label).

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
- Positive PnL → `success` (green); negative → `failure` (pink). Never swapped.

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

## Design System Architecture

The design system is ported from **PancakeSwap UIKit** (`pancake-frontend/packages/uikit`).

### Token layers

| Layer | File | Purpose |
|---|---|---|
| Raw values | `src/design-system/tokens.ts` | All PCS colors (lightColors, darkColors, v2 scales), shadows, fonts, space, radii, fontSizes |
| Chakra theme | `src/design-system/theme.ts` | Maps tokens → CSS variables (`--pcs-colors-*`, `--pcs-shadows-*`) with light/dark switching |
| Structural CSS | `src/design-system/design-system.css` | Font import (Kanit), font sizes, spacing, radius, z-index, motion primitives |
| styled-components theme | `src/primitives/theme.ts` | Provides `pcsTheme` object for styled-components `ThemeProvider` — maps `theme.colors.*` to CSS variable references |

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

All in `src/primitives/`:

- **Button** — `variant`: primary, secondary, tertiary, text, danger, dangerOutline, subtle, success, light, bubblegum. `scale`: md (48px), sm (32px), xs (20px). Inset bottom shadow on solid variants.
- **Card** — `isActive`, `isSuccess`, `isWarning`, `isDisabled`. Sub-components: `CardBody` (24px padding), `CardHeader` (variants: default, blue, bubblegum, violet, pale), `CardFooter`, `CardRibbon`.
- **Text** — `color` (PCS named colors), `bold`, `small`, `fontSize`, `ellipsis`, `textTransform`, `strikeThrough`. Polymorphic `as` prop.
- **TabMenu** + **Tab** — `activeIndex`, `onItemClick`, `fullWidth`, `gap`, `isShowBorderBottom`. Tab `scale`: md, lg.
- **TableView** — Generic `TableView<T>` with `columns`, `data`, `onSort`, `sortOrder`, `sortField`, `onRowClick`. PCS sort arrow buttons.
- **Box / Flex / Grid** — styled-system primitives in `src/primitives/Box/`. Use these for layout instead of raw `<div>` + inline styles.

### Icons

241 PCS icons + custom additions in `src/primitives/Icons.tsx`. All use `fill="currentColor"`, default 20x20.

---

## Theme

- `ThemeProvider` in `src/design-system/ThemeProvider.tsx` wraps Chakra + next-themes + styled-components.
- `.storybook/preview.tsx` wraps all stories with both `ThemeProvider` and styled-components `SCThemeProvider`.
- Use CSS variables for colors — they auto-switch with light/dark.
- Use `useTheme()` only when you need the theme value in JS (e.g. chart colors).

---

## Storybook Structure

Story titles follow this hierarchy:
- `'Design System/...'` — Colors, Icons, Shadows, Spacing, Typography
- `'Components/...'` — Button, Card, Text, TabMenu, TableView
- `'Widgets/...'` — feature-level compositions
- `'Apps/...'` — full page layouts

Page-level stories use `parameters: { layout: 'fullscreen' }`.
