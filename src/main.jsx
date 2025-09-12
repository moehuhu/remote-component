import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RemoteComponent from './RemoteComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RemoteComponent />
  </StrictMode>,
)
