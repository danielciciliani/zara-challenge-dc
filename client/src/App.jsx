import { useState } from 'react'
import './App.css'
import PhoneGrid from './components/phoneGrid/phoneGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
      <PhoneGrid />
  )
}

export default App
