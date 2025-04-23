import { useState } from 'react';

import PhoneGrid from './components/phoneGrid/phoneGrid';
import TopBar from './components/TopBar/TopBar';

import './App.scss';
import './index.scss';
import './components/TopBar/TopBar.scss';

function App() {
  const [addedProducts, setAddedProducts] = useState(0);

  return (
    <>
      <div className="app_container">
        <TopBar addedProducts={addedProducts} />
        <PhoneGrid />
      </div>
    </>
  );
}

export default App;
