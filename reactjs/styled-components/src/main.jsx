import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalStyle } from './components/GlobalStyle.jsx'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/Theme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
