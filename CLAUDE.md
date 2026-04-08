## Workflow Commands

This project has custom slash commands in `.claude/commands/`:

- **`/new-task`** — Start a new task: asks for name, handles local changes, checks out main, pulls latest, creates a feature branch, starts Storybook
- **`/switch-task`** — Switch between existing task branches
- **`/submit`** — Commit + PR + Linear ticket

### Submit intent detection

When the user says any of the following (or similar phrasing), treat it as a `/submit` command:
- "push the changes"
- "create a PR"
- "submit the changes"
- "send the changes to FE"
- "save the changes"
- "send it to review"
- "ship it"

In these cases, run the `/submit` workflow: commit all changes, create a PR to main, create a Linear ticket with the PR link assigned to Ryan.

---

## Storybook MCP

When working on UI components, always use the `storybook` MCP tools to access Storybook's component and documentation knowledge before answering or taking any action.

- **CRITICAL: Never hallucinate component properties!** Before using ANY property on a component from a design system (including common-sounding ones like `shadow`, etc.), you MUST use the MCP tools to check if the property is actually documented for that component.
- Query `list-all-documentation` to get a list of all components
- Query `get-documentation` for that component to see all available properties and examples
- Only use properties that are explicitly documented or shown in example stories
- If a property isn't documented, do not assume properties based on naming conventions or common patterns from other libraries. Check back with the user in these cases.
- Use the `get-storybook-story-instructions` tool to fetch the latest instructions for creating or updating stories. This will ensure you follow current conventions and recommendations.
- Check your work by running `run-story-tests`.

Remember: A story name might not reflect the property name correctly, so always verify properties through documentation or example stories before using them.

---

## Design Token Usage

Tokens live in `src/ui/design-system.css`. Always use semantic tokens — never raw hex values or hardcoded pixels that map to a token.

| Category | Token prefix | Example |
|---|---|---|
| Colors | `--pcs-colors-*` | `var(--pcs-colors-brand)`, `var(--pcs-colors-text-muted)` |
| Shadows | `--pcs-shadows-*` | `var(--pcs-shadows-modal)`, `var(--pcs-shadows-focus)` |
| Border radius | `--p-radius-*` | `var(--p-radius-md)`, `var(--p-radius-xl)` |
| Spacing | `--p-space-*` | `var(--p-space-4)` = 16px |

**Key color tokens:**

- `--pcs-colors-bg` — page background
- `--pcs-colors-surface-card` — card / panel surface
- `--pcs-colors-surface-subtle` — input / subtle background
- `--pcs-colors-border` / `--pcs-colors-border-hover` — borders
- `--pcs-colors-text` / `--pcs-colors-text-muted` — text hierarchy
- `--pcs-colors-brand` — primary teal action color
- `--pcs-colors-brand-muted` — teal at low opacity (hover backgrounds)
- `--pcs-colors-accent` — violet (used for focus rings)
- `--pcs-colors-accent-muted` — violet at low opacity
- `--pcs-colors-long` — green (profit / long position)
- `--pcs-colors-short` — red/pink (loss / short position)
- `--pcs-colors-text-on-brand` — text on brand-colored backgrounds

---

## CSS Conventions

- Every component that renders UI imports `../ui/perps.css` (which pulls in `design-system.css`); components in `src/ui/` import `./perps.css` directly
- Prefer `className` with token-mapped CSS classes over inline `style` props
- Use inline `style` only for dynamic values that can't be expressed as a class (e.g. computed widths, conditional colors)
- Class naming uses short BEM-like prefixes per component:
  - `p-*` — shared primitives (card, label, btn, input)
  - `nb-*` — Navbar
  - `pp-*` — PerpsPage layout
  - `op-*` — OrderPanel
  - `dw-*` — DepositWithdraw
  - `al-*` — AddLiquidity

**Shared utility classes** (from `perps.css`):

- `.p-card` — standard card with border + radius + surface background
- `.p-card-alt` — inset card (darker background, used inside cards)
- `.p-label` — muted 11px uppercase label
- `.p-value-sm` — 12px tabular-nums value
- `.p-btn-full` — full-width pill button

---

## Numeric & Typography Rules

- All prices and quantities must use `font-variant-numeric: tabular-nums` so columns stay aligned as values update
- Positive PnL → `var(--pcs-colors-long)` (green); negative → `var(--pcs-colors-short)` (red/pink). Never swapped.
- Price formatting: ≥$100 → 2 decimal places; <$100 → 4 decimal places
- Font size hierarchy:
  - 22px — oracle / headline price
  - 16px — section title
  - 14px — emphasized body
  - 13px — body default
  - 12px — table cell
  - 11px — label / tag
  - 10px — badge / micro

---

## Responsive Layout

Breakpoints:
- `≤ 768px` — mobile: stack layout, hide nav links and icon buttons in Navbar, `Modal` renders as bottom drawer
- `≤ 1024px` — tablet: right panel narrows to 260px

Rules:
- Write styles desktop-first in this codebase (existing components use `max-width` media queries)
- `PerpsPage` uses CSS grid on desktop (`1fr 300px`), switches to `flex-direction: column` on mobile
- The `Modal` component in `src/stories/ui/Modal.tsx` automatically renders as a bottom sheet (drawer) on `≤ 768px` — do not reimplement this per-component

---

## Theme

- Use `useTheme()` from `./ThemeProvider` to read and toggle the current theme
- Theme values: `'dark'` | `'light'`
- `ThemeProvider` wraps all Storybook stories via the `withTheme` decorator in `.storybook/preview.tsx`
- Apply theme-sensitive styles via CSS tokens (they update automatically); only reach for `useTheme()` when you need the value in JS (e.g. chart colors, conditional icons)

---

## Component Patterns

- **Icon-only buttons** must have `aria-label`
- **All icons** come from `src/stories/perps/Icons.tsx` — check there before adding a new SVG
- **Modals** use `src/stories/ui/Modal.tsx` — drawer on mobile is automatic, do not build custom overlays
- **Buttons** use `src/stories/ui/Button.tsx` — check `variant` and `size` props via Storybook docs before use
- **Tabs** use `src/stories/ui/Tabs.tsx` — supports `variant: 'underline' | 'pill'`
- Color-only state communication must always have a text or icon fallback for accessibility

---

## Storybook Workflow

1. Call `get-storybook-story-instructions` before creating or editing any story
2. Call `preview-stories` after every component or story change — include the returned URLs in your response
3. Call `run-story-tests` before marking work as done — fix any failures before reporting completion
4. Story titles follow: `'Design System/...'`, `'Components/...'`, `'Widgets/...'`, `'Apps/...'`
5. Page-level stories use `parameters: { layout: 'fullscreen' }` to skip the device frame decorator
