import { ThemeProvider } from './ui/ThemeProvider'
import { PerpsPage } from './widgets/PerpsPage'

function App() {
  return (
    <ThemeProvider>
      <PerpsPage />
    </ThemeProvider>
  )
}

export default App
