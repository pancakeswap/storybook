# Perps Demo — Storybook Design System

A component library and design system for a perpetuals (perps) trading UI, built with React, TypeScript, and Storybook. Includes a full design token system, responsive components, and a complete perps trading page demo.

## Stack

- **React 19** + **TypeScript**
- **Vite 8** — dev server and build
- **Storybook 10** — component development and documentation
- **lightweight-charts** — TradingView-style candlestick chart
- **next-themes** — dark/light mode
- **Chakra UI v3** — base primitives
- **Vitest** + **Playwright** — story testing

## Getting Started

```bash
# Install dependencies
pnpm install

# Start Storybook (recommended)
pnpm storybook

# Start Vite dev server
pnpm dev
```

Storybook runs at [http://localhost:6006](http://localhost:6006).

## Project Structure

```
src/
├── ui/                     # Design system foundation + base primitives
│   ├── design-system.css       # All design tokens (colors, shadows, radius, spacing)
│   ├── perps.css               # Shared utility classes
│   ├── theme.ts / tokens.ts    # Chakra UI theme config
│   ├── ThemeProvider.tsx       # Theme context + useTheme hook
│   ├── Icons.tsx               # SVG icon library
│   ├── Button.tsx
│   ├── Modal.tsx               # Auto drawer on mobile (≤768px)
│   ├── Tabs.tsx
│   ├── Slider.tsx
│   ├── Badge.tsx
│   ├── Input.tsx
│   ├── index.ts                # Barrel export
│   └── design-system/          # Design token Storybook stories
├── widgets/                # Perps trading UI widgets
│   ├── PerpsPage.tsx           # Full trading page (chart + order panel + portfolio)
│   ├── Navbar.tsx              # Top navigation with theme toggle
│   ├── CandlestickChart.tsx
│   ├── OrderPanel.tsx
│   ├── TradingPanel.tsx        # Portfolio tabs (positions, orders, history, funding)
│   ├── DepositWithdraw.tsx
│   ├── AddLiquidity.tsx
│   └── EditCollateralModal.tsx
└── assets/
```

## Features

- **Design tokens** — full color, spacing, shadow, radius, and typography scales following PancakeSwap UIKit conventions
- **Dark / light mode** — toggle in the Storybook toolbar or via the Navbar button
- **Responsive viewports** — Desktop / Tablet / Mobile presets in the Storybook toolbar with device frame mockups (iPhone SE, iPhone 17 Pro / Pro Max, iPad)
- **Mobile-first modals** — `Modal` component automatically renders as a bottom drawer on mobile
- **Responsive page layout** — `PerpsPage` adapts from a two-column desktop grid to a stacked mobile layout

## Scripts

| Command | Description |
|---|---|
| `pnpm storybook` | Start Storybook dev server on port 6006 |
| `pnpm dev` | Start Vite dev server |
| `pnpm build` | Build production bundle |
| `pnpm build-storybook` | Build static Storybook |
| `pnpm lint` | Run ESLint |
