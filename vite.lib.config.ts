/**
 * Library build configuration for `@pancakeswap/storybook`.
 *
 * Two entries:
 *   - `dist/ui.js`      → exports basic components (Button, Card, Modal, …)
 *   - `dist/widgets.js` → exports synced perps widgets (AccountPanel, …)
 *
 * Externalises React + react-dom + styled-components so the consumer's
 * own copy is used (avoids the "two React copies" / "two styled-components
 * instances" warnings that break hooks identity and ThemeContext).
 *
 * Type declarations are emitted by `vite-plugin-dts` which bundles them
 * into stable `dist/ui/index.d.ts` + `dist/widgets/index.d.ts` files —
 * avoids the "cannot be named without a reference to .pnpm/…" portability
 * issues that a raw `tsc --emitDeclarationOnly` hits when types infer
 * generics from transitive deps (csstype, motion-dom).
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

const externals = [
  'react',
  'react/jsx-runtime',
  'react-dom',
  'styled-components',
  // styled-system / shouldForwardProp are leaf deps used inside our basic
  // components — bundling them in keeps the consumer surface tight, but if
  // size becomes an issue we can promote them to peer deps later.
]

export default defineConfig({
  plugins: [
    react(),
    dts({
      // Single d.ts entry point. `vite-plugin-dts` will resolve the
      // transitive type graph from each entry and bundle it into one
      // `index.d.ts` per entry, replacing pnpm-store paths with the
      // import they originated from (e.g. `motion-dom`, `csstype`).
      entryRoot: 'src',
      // Don't error out on the half-synced widget files (DepositModal,
      // OrderConfirmationModal, PositionsTable, TpSlOtocoModal …) — those
      // are not part of the published surface yet. The widgets/index.ts
      // barrel only re-exports the synced ones.
      exclude: [
        '**/*.stories.tsx',
        '**/*.stories.ts',
        '**/*.test.ts',
        '**/*.test.tsx',
        // Un-synced widgets — rolling them in only when they're added to
        // src/widgets/index.ts. Keep this list sorted; remove a name when
        // its widget joins the synced set.
        'src/widgets/AddLiquidity.tsx',
        'src/widgets/BunnySlider.tsx',
        'src/widgets/CandlestickChart.tsx',
        'src/widgets/DateRangePicker.tsx',
        'src/widgets/DepositModal.tsx',
        'src/widgets/DepositWithdraw.tsx',
        'src/widgets/EditCollateralModal.tsx',
        'src/widgets/FundingHistoryTable.tsx',
        'src/widgets/MarginModeModal.tsx',
        'src/widgets/MarketsDropdown.tsx',
        'src/widgets/Navbar.tsx',
        'src/widgets/OpenOrdersTable.tsx',
        'src/widgets/OrderBook.tsx',
        'src/widgets/OrderConfirmationModal.tsx',
        'src/widgets/OrderHistoryTable.tsx',
        'src/widgets/OrderPanel.tsx',
        'src/widgets/OrdersTradeHistory.tsx',
        'src/widgets/PerpsPage.tsx',
        'src/widgets/PoolDashboard.tsx',
        'src/widgets/PositionManagement.tsx',
        'src/widgets/PositionsTable.tsx',
        'src/widgets/RemoveLiquidity.tsx',
        'src/widgets/TakeProfitStopLoss.tsx',
        'src/widgets/TickerBar.tsx',
        'src/widgets/TokenSelectDropdown.tsx',
        'src/widgets/TpSlOtocoModal.tsx',
        'src/widgets/TradeHistoryTable.tsx',
        'src/widgets/TradingPanel.tsx',
        'src/widgets/WalletPanel.tsx',
      ],
      // Most types we touch in widgets are simple — when the inferred
      // generic comes from a transitive package (e.g. styled-components
      // produces a generic referencing csstype) we want the plugin to
      // emit the import as `import type ('csstype')` instead of the
      // pnpm-virtual-store path. `rollupTypes` triggers the bundling
      // pass that does that rewrite.
      rollupTypes: true,
      tsconfigPath: 'tsconfig.lib.json',
    }),
  ],
  build: {
    emptyOutDir: true,
    sourcemap: true,
    cssCodeSplit: false,
    lib: {
      entry: {
        ui: path.resolve(dirname, 'src/ui/index.ts'),
        widgets: path.resolve(dirname, 'src/widgets/index.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: (id) =>
        externals.includes(id) ||
        id.startsWith('react/') ||
        id.startsWith('react-dom/'),
      output: {
        // Preserve filenames so consumers can deep-import (e.g.
        // `@pancakeswap/storybook/dist/widgets.js`) and so the exports
        // map in package.json keeps simple, predictable paths.
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: (asset) => {
          if (asset.name === 'style.css') return 'styles.css'
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
})
