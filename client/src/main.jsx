import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import { PhoneProvider } from './context/PhoneContext';
import App from './App';
import PhoneDetail from './components/PhoneDetail/PhoneDetail';

import './index.css';
import './components/PhoneGrid/PhoneGrid.scss';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PhoneProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/phones/:id" element={<PhoneDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </PhoneProvider>
  </StrictMode>,
);
