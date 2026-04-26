import type { Preview, Decorator } from '@storybook/react-vite'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { ThemeProvider } from '../src/theme/ThemeProvider'
import { pcsTheme } from '../src/primitives/theme'
import { MatchBreakpointsProvider } from '../src/contexts'
import { ModalProvider } from '../src/primitives/Modal'
import { PhoneFrame, TabletFrame } from './DeviceFrame'
import './preview.css'

const withTheme: Decorator = (Story, context) => {
  const theme = (context.globals['theme'] as string) ?? 'light'
  return (
    <ThemeProvider forcedTheme={theme}>
      <SCThemeProvider theme={pcsTheme}>
        <MatchBreakpointsProvider>
          <ModalProvider>
            <Story />
          </ModalProvider>
        </MatchBreakpointsProvider>
      </SCThemeProvider>
    </ThemeProvider>
  )
}

const withDeviceFrame: Decorator = (Story, context) => {
  // Storybook 9+: globals.viewport is { value: string } | string | undefined
  const raw = context.globals['viewport']
  const viewportKey: string | undefined =
    typeof raw === 'string' ? raw
    : raw && typeof raw === 'object' ? (raw as { value?: string }).value
    : undefined

  // Resolve device type from the viewport options config
  const options = (context.parameters['viewport'] as { options?: Record<string, { type?: string }> })?.options ?? {}
  const deviceType = viewportKey ? (options[viewportKey]?.type ?? viewportKey) : 'desktop'

  // Fullscreen stories (page-level) fill the device natively via responsive CSS
  const isFullscreen = context.parameters['layout'] === 'fullscreen'
  if (isFullscreen || deviceType === 'desktop' || !viewportKey) return <Story />

  if (deviceType === 'mobile') return <PhoneFrame viewportKey={viewportKey}><Story /></PhoneFrame>
  if (deviceType === 'tablet') return <TabletFrame><Story /></TabletFrame>

  return <Story />
}

const preview: Preview = {
  decorators: [withDeviceFrame, withTheme],

  globals: {
    theme: 'light',
  },

  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Color theme',
      defaultValue: 'dark',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'dark',  title: 'Dark',  icon: 'moon' },
          { value: 'light', title: 'Light', icon: 'sun'  },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
    viewport: {
      name: 'Viewport',
      description: 'Responsive viewport preset',
      defaultValue: 'desktop',
      toolbar: {
        icon: 'monitor',
        items: [
          { value: 'desktop',        title: 'Desktop',          icon: 'monitor' },
          { value: 'tablet',         title: 'Tablet',           icon: 'tablet'  },
          { value: 'iphone17Pro',    title: 'iPhone 17 Pro',    icon: 'mobile'  },
          { value: 'iphone17ProMax', title: 'iPhone 17 Pro Max', icon: 'mobile' },
          { value: 'iphoneSE',       title: 'iPhone SE',        icon: 'mobile'  },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },

  parameters: {
    viewport: {
      defaultViewport: 'desktop',
      options: {
        desktop: {
          name: 'Desktop',
          styles: { width: '1440px', height: '900px' },
          type: 'desktop',
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '860px', height: '1100px' },
          type: 'tablet',
        },
        iphoneSE: {
          name: 'iPhone SE',
          styles: { width: '420px', height: '780px' },
          type: 'mobile',
        },
        iphone17Pro: {
          name: 'iPhone 17 Pro',
          styles: { width: '453px', height: '912px' },
          type: 'mobile',
        },
        iphone17ProMax: {
          name: 'iPhone 17 Pro Max',
          styles: { width: '490px', height: '1010px' },
          type: 'mobile',
        },
      },
    },

    options: {
      storySort: {
        order: ['Design System', 'Components', 'Widgets', 'Apps'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview
