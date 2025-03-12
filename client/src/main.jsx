import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/PhoneGrid/PhoneGrid.scss'
import PhoneGrid from './components/phoneGrid/phoneGrid'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PhoneGrid />
  </StrictMode>,
)
