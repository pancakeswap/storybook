import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
"@storybook/addon-mcp"
  ],
  framework: "@storybook/react-vite",
  // Disable Chakra UI's auto-linked Storybook (from its package.json storybook field)
  refs: {
    '@chakra-ui/react': { disable: true },
  },
  viteFinal(config) {
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      'styled-components',
      'styled-system',
      '@styled-system/should-forward-prop',
      'clsx',
    ];
    return config;
  },
};
export default config;