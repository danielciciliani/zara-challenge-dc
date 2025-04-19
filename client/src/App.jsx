import { useState } from 'react'
import './App.scss'
import PhoneGrid from './components/phoneGrid/phoneGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container_app">
        <PhoneGrid />
      </div>
    </>
  )
}

export default App
