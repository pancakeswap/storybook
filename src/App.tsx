import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { ThemeProvider } from './ui/ThemeProvider'
import { pcsTheme } from './ui/components/theme'
import { PerpsPage } from './widgets/PerpsPage'

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
