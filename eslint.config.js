// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

// AST selector regex for hex literals: 3, 4, 6, or 8-digit hex.
// Matches inside JS template literal strings (TemplateElement.value.raw) and string literals.
// The string is interpolated into esquery `[attr=/regex/]` selectors verbatim.
const HEX_RE = '/#[0-9A-Fa-f]{8}\\b|#[0-9A-Fa-f]{6}\\b|#[0-9A-Fa-f]{4}\\b|#[0-9A-Fa-f]{3}\\b/'
const HEX_MSG =
  'Hardcoded hex color — use theme.colors.* tokens. For brand-semantic exceptions: // eslint-disable-next-line no-restricted-syntax -- <reason>'

// AST selector regex for `html.dark` selector inside CSS-in-JS strings.
// Matches `html.dark` and any leading-whitespace prefix.
const HTML_DARK_RE = '/html\\.dark/'
const HTML_DARK_MSG =
  'Do not key styles on `html.dark`. Use a theme-aware token (theme.colors.* or theme.shadows.*) — CSS vars auto-flip between light/dark. If a token is missing, add a semantic token in src/design-system/theme.ts.'

const noHardcodedHexRules = {
  'no-restricted-syntax': [
    'error',
    // ───── styled-components tagged template strings ─────
    // styled.X`...#abc...` / styled(X)`...#abc...` (TemplateElement form)
    {
      selector: `TaggedTemplateExpression[tag.object.name='styled'] TemplateElement[value.raw=${HEX_RE}]`,
      message: HEX_MSG,
    },
    {
      selector: `TaggedTemplateExpression[tag.callee.name='styled'] TemplateElement[value.raw=${HEX_RE}]`,
      message: HEX_MSG,
    },
    // styled.X.attrs(...)`...` / styled(X).attrs(...)`...`
    {
      selector: `TaggedTemplateExpression[tag.callee.object.object.name='styled'] TemplateElement[value.raw=${HEX_RE}]`,
      message: HEX_MSG,
    },
    {
      selector: `TaggedTemplateExpression[tag.callee.object.callee.name='styled'] TemplateElement[value.raw=${HEX_RE}]`,
      message: HEX_MSG,
    },
    // css`...` / createGlobalStyle`...` / keyframes`...`
    {
      selector: `TaggedTemplateExpression[tag.name='css'] TemplateElement[value.raw=${HEX_RE}]`,
      message: HEX_MSG,
    },
    {
      selector: `TaggedTemplateExpression[tag.name='createGlobalStyle'] TemplateElement[value.raw=${HEX_RE}]`,
      message: HEX_MSG,
    },
    {
      selector: `TaggedTemplateExpression[tag.name='keyframes'] TemplateElement[value.raw=${HEX_RE}]`,
      message: HEX_MSG,
    },
    // String literals inside styled\` ${...} \` interpolations (e.g. ternaries).
    {
      selector: `TaggedTemplateExpression[tag.object.name='styled'] Literal[value=${HEX_RE}]`,
      message: HEX_MSG,
    },
    {
      selector: `TaggedTemplateExpression[tag.callee.name='styled'] Literal[value=${HEX_RE}]`,
      message: HEX_MSG,
    },
    {
      selector: `TaggedTemplateExpression[tag.callee.object.object.name='styled'] Literal[value=${HEX_RE}]`,
      message: HEX_MSG,
    },
    {
      selector: `TaggedTemplateExpression[tag.callee.object.callee.name='styled'] Literal[value=${HEX_RE}]`,
      message: HEX_MSG,
    },
    {
      selector: `TaggedTemplateExpression[tag.name='css'] Literal[value=${HEX_RE}]`,
      message: HEX_MSG,
    },
    // JSX style={{ color: '#abc', ... }} — covers the canonical color-bearing CSS keys
    {
      selector: `Property[key.name='color'] > Literal[value=${HEX_RE}]`,
      message: HEX_MSG,
    },
    {
      selector: `Property[key.name='background'] > Literal[value=${HEX_RE}]`,
      message: HEX_MSG,
    },
    {
      selector: `Property[key.name='backgroundColor'] > Literal[value=${HEX_RE}]`,
      message: HEX_MSG,
    },
    {
      selector: `Property[key.name='fill'] > Literal[value=${HEX_RE}]`,
      message: HEX_MSG,
    },
    {
      selector: `Property[key.name='stroke'] > Literal[value=${HEX_RE}]`,
      message: HEX_MSG,
    },
    {
      selector: `Property[key.name='borderColor'] > Literal[value=${HEX_RE}]`,
      message: HEX_MSG,
    },
    {
      selector: `Property[key.name='borderTopColor'] > Literal[value=${HEX_RE}]`,
      message: HEX_MSG,
    },
    {
      selector: `Property[key.name='borderBottomColor'] > Literal[value=${HEX_RE}]`,
      message: HEX_MSG,
    },
    {
      selector: `Property[key.name='borderLeftColor'] > Literal[value=${HEX_RE}]`,
      message: HEX_MSG,
    },
    {
      selector: `Property[key.name='borderRightColor'] > Literal[value=${HEX_RE}]`,
      message: HEX_MSG,
    },
    {
      selector: `Property[key.name='outlineColor'] > Literal[value=${HEX_RE}]`,
      message: HEX_MSG,
    },
    {
      selector: `Property[key.name='boxShadow'] > Literal[value=${HEX_RE}]`,
      message: HEX_MSG,
    },
    // SVG fill="#xxx" / stroke="#xxx" JSX attributes
    {
      selector: `JSXAttribute[name.name='fill'] > Literal[value=${HEX_RE}]`,
      message: HEX_MSG,
    },
    {
      selector: `JSXAttribute[name.name='stroke'] > Literal[value=${HEX_RE}]`,
      message: HEX_MSG,
    },
    // ───── html.dark selector inside styled-components / css template strings ─────
    // styled.X`... html.dark & {...} ...`
    {
      selector: `TaggedTemplateExpression[tag.object.name='styled'] TemplateElement[value.raw=${HTML_DARK_RE}]`,
      message: HTML_DARK_MSG,
    },
    {
      selector: `TaggedTemplateExpression[tag.callee.name='styled'] TemplateElement[value.raw=${HTML_DARK_RE}]`,
      message: HTML_DARK_MSG,
    },
    {
      selector: `TaggedTemplateExpression[tag.callee.object.object.name='styled'] TemplateElement[value.raw=${HTML_DARK_RE}]`,
      message: HTML_DARK_MSG,
    },
    {
      selector: `TaggedTemplateExpression[tag.callee.object.callee.name='styled'] TemplateElement[value.raw=${HTML_DARK_RE}]`,
      message: HTML_DARK_MSG,
    },
    {
      selector: `TaggedTemplateExpression[tag.name='css'] TemplateElement[value.raw=${HTML_DARK_RE}]`,
      message: HTML_DARK_MSG,
    },
    {
      selector: `TaggedTemplateExpression[tag.name='createGlobalStyle'] TemplateElement[value.raw=${HTML_DARK_RE}]`,
      message: HTML_DARK_MSG,
    },
    {
      selector: `TaggedTemplateExpression[tag.name='keyframes'] TemplateElement[value.raw=${HTML_DARK_RE}]`,
      message: HTML_DARK_MSG,
    },
  ],
}

export default defineConfig([
  globalIgnores(['dist', 'storybook-static']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // Allow `_`-prefixed identifiers to be intentionally unused — common
      // convention for "extracted from props but not consumed here" or
      // "placeholder positional arg".
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  // Forbid hardcoded hex color literals in widget / primitive source.
  // Theme tokens auto-switch in dark mode; raw hex breaks dark mode (PAN-11836).
  // Excludes theme/token files (canonical hex sources) and *.stories.tsx (demo data).
  {
    files: [
      'src/widgets/**/*.{ts,tsx}',
      'src/perps/**/*.{ts,tsx}',
      'src/primitives/**/*.{ts,tsx}',
    ],
    ignores: [
      'src/primitives/theme.ts',
      'src/design-system/tokens.ts',
      'src/design-system/theme.ts',
      // Icons.tsx is a brand-SVG asset file (network logos, token marks, etc.) where
      // hex fills are baked-in by design — file-level escape, not per-line.
      'src/primitives/Icons.tsx',
      '**/*.stories.tsx',
    ],
    rules: noHardcodedHexRules,
  },
  ...storybook.configs['flat/recommended'],
])
