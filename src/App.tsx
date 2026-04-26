import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { ThemeProvider } from './design-system/ThemeProvider'
import { pcsTheme } from './primitives/theme'
import { PerpsPage } from './pages/PerpsPage'

function App() {
  return (
    <ThemeProvider>
      <SCThemeProvider theme={pcsTheme}>
        <PerpsPage />
      </SCThemeProvider>
    </ThemeProvider>
  )
}

export default App
