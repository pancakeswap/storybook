# Design System & Agent Guidelines

## Design Values

Inspired by Ant Design's design philosophy, adapted for a professional crypto perpetuals trading interface. These five values are the north star for every design decision.

---

### 1. Precision

> "Every number must be immediately legible and unambiguous."

Traders make decisions in milliseconds; imprecise UI costs real money.

- All numeric values use **tabular figures** (`font-variant-numeric: tabular-nums`) so columns stay aligned as values change
- Prices show **consistent decimal places** based on asset magnitude (≥100 → 2dp, <100 → 4dp)
- Positive PnL is `--p-long` green; negative is `--p-short` red — never swapped, never ambiguous
- Avoid abbreviations for amounts unless screen space forces it; prefer `$1,234.56` over `$1.2K`

---

### 2. Confidence

> "The interface should feel as reliable as the underlying protocol."

- Dark backgrounds (`--p-bg: #0d1117`) reduce eye strain during long sessions and signal professional-grade tooling
- Color is used **semantically only** — green = profit/long, red = loss/short, teal = primary action — never purely decorative
- Interactive states (hover, focus, active, disabled) are always explicit; users should never guess if something is clickable
- Shadows and elevation communicate hierarchy, not decoration: cards sit above the background, modals above cards, toasts above modals

---

### 3. Speed

> "The fastest path to placing a trade is always one interaction away."

- Primary CTAs ("Place Long Order", "Deposit") are always visible, never hidden behind menus
- Transitions are purposeful and brief: `--p-duration-fast: 120ms` for color/border, `--p-duration-base: 150ms` for layout changes
- Loading states are immediate; skeleton loaders or spinners appear within one frame of an async call starting
- The most common action for each panel is the largest, most prominent element

---

### 4. Focus

> "Information hierarchy guides the eye without requiring thought."

Font size scale enforces hierarchy:

| Role | Token | Size |
|------|-------|------|
| Display number (oracle price) | `--p-text-4xl` | 22px |
| Section title | `--p-text-2xl` | 16px |
| Emphasized body | `--p-text-lg` | 14px |
| Body default | `--p-text-base` | 13px |
| Table cell | `--p-text-sm` | 12px |
| Label / tag | `--p-text-xs` | 11px |
| Micro / badge | `--p-text-2xs` | 10px |

- `--p-text-muted` for secondary context (fees, timestamps, labels)
- `--p-text-dim` for disabled / placeholder states only
- Decorative flourishes are eliminated; every visual element earns its pixel

---

### 5. Inclusivity

> "The interface works for every trader on every device."

- **WCAG AA contrast**: all text must meet 4.5:1 against its background. `--p-text-muted` (#7d8ea8) achieves 5:1 on `--p-card` (#161b27)
- **Keyboard navigation**: every interactive element is reachable via Tab; focus rings use `--p-glow-focus`
- **Screen readers**: descriptive `aria-label` on icon-only buttons; `role="table"` on data grids; `aria-live` on real-time PnL updates
- **Responsive**: the layout degrades gracefully from 1440px → 768px → 375px; the order panel is always the last thing to collapse

---

## Design System Reference

### Token Layers

```
Primitive tokens  →  Semantic tokens  →  Component tokens
(--prim-*)           (--p-*)             (local CSS vars)
```

- **Never** use primitive tokens (`--prim-*`) in component code
- **Always** use semantic tokens (`--p-*`) — they can be overridden per-theme
- Component-local overrides go in the component's own CSS file

### Key Files

| File | Purpose |
|------|---------|
| `src/ui/design-system.css` | All primitive + semantic tokens |
| `src/ui/perps.css` | Shared utility classes (import `design-system.css`) |
| `src/ui/Icons.tsx` | SVG icon library |
| `src/ui/ThemeProvider.tsx` | Theme context + `useTheme` hook |
| `src/widgets/PerpsPage.css` | Page-level layout |

### Spacing Rule

Use the 4px base grid. Prefer `--p-space-*` tokens over raw pixel values.

```
4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64
```

### Shadow Elevation

| Level | Token | Use |
|-------|-------|-----|
| xs | `--p-shadow-xs` | Subtle lift (active state) |
| sm | `--p-shadow-sm` | Cards |
| md | `--p-shadow-md` | Tooltips |
| lg | `--p-shadow-lg` | Dropdowns |
| xl | `--p-shadow-xl` | Sidepanels |
| 2xl | `--p-shadow-2xl` | Modals |

### Responsive Breakpoints

```
xs:  0 – 479px    (mobile portrait)
sm:  480 – 767px  (mobile landscape)
md:  768 – 1023px (tablet)
lg:  1024 – 1279px (small desktop)
xl:  1280px+       (desktop — primary target)
2xl: 1536px+       (wide desktop)
```

Write styles mobile-first; enhance upward with `min-width` media queries.

---

## Component Conventions

- **Use `styled-components` + the `Box`/`Flex`/`Grid` primitives for all widget styling — do NOT add new `.css` files and do NOT use inline `style={{}}`.** Tokens come from the styled-components theme: `theme.colors.success`, `theme.colors.backgroundAlt`, `theme.radii.card`, etc. (See `src/ui/components/theme.ts` for the full shape — same keys as PancakeSwap's uikit, so widgets work in both this repo and pancake-frontend without changes.) Existing `.css` files under `src/widgets/` are legacy and being migrated; new widgets must not introduce more.
  - Prefer styled-system shorthand on `Box`/`Flex`/`Grid` for layout: `<Flex flexDirection="column" p="6px" gap="8px" bg="backgroundAlt" />`, `<Box flex={1} px="12px" />`. The props (`p`, `px`, `m`, `flex`, `width`, `bg`, `color`, …) are typed and resolve through the theme.
  - Reach for `styled.div` / `styled(Box)` only when shorthand isn't enough — pseudo-classes, nested selectors, animations, multi-prop conditionals.
  - Inline `style={{}}` is only OK for values that genuinely can't be expressed via props (e.g. a computed translateX driven by drag state). Static layout/spacing/color must go through Box props or styled-components.
  - Why: the library is published as `@pancakeswap/storybook` and consumed by `pancake-frontend`. `.css` files require consumers to side-effect import a stylesheet and risk style-loss in SSR/code-split builds. Inline `style={{}}` bypasses the theme, can't be overridden by parent styled-components, and creates new object identities every render. Styled-components carry their CSS with the component and use the consumer's theme automatically.
  - Layout primitives (`PerpsPanel`, tabs, rows) live in shared files (e.g. `src/widgets/primitives.tsx`) and are reused across widgets — don't reinvent.
- Components must be **stateless / props-driven**. Lift business data, fetch state, and write actions to the consumer via props and callbacks. Internal `useState` is only OK for view-state (hover, dropdown open/close, focused input).
- Icon-only buttons must have `aria-label`
- Color-only state communication must have a text/icon fallback
- Storybook: run `preview-stories` after every change; run `run-story-tests` before handing off

---

## Storybook Workflow

See `.storybook/` for configuration. Always call `get-storybook-story-instructions` before creating or editing stories.
