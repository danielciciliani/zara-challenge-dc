import { useState } from 'react';

import PhoneGrid from './components/phoneGrid/phoneGrid';
import TopBar from './components/TopBar/TopBar';

import './App.scss';
import './index.scss';
import './components/TopBar/TopBar.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container_app">
        <TopBar />
        <PhoneGrid />
      </div>
    </>
  )
}

export default App
