import { ThemeProvider } from './ui/ThemeProvider'
import { PerpsPage } from './perps/PerpsPage'

function App() {
  return (
    <ThemeProvider>
      <PerpsPage />
    </ThemeProvider>
  )
}

export default App
