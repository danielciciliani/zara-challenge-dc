import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router'
import App from './App'
import './index.css'
import './components/PhoneGrid/PhoneGrid.scss'
import PhoneDetail from './components/PhoneDetail/PhoneDetail'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element = {<App />} />  
          <Route path='/phones/:id' element = {<PhoneDetail />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
