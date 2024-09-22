import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CountProvider } from './context/count-context.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountProvider>
      <App />
    </CountProvider>
  </StrictMode>,
)
