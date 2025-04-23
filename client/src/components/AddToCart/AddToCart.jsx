import { useState } from 'react';
import PhoneDetail from '../PhoneDetail/PhoneDetail';

import './AddToCart.scss';

function AddToCart({ isActive, addToCart, addedProducts }) {
  return (
    <div
      className={`addToCard_button ${isActive ? 'active' : 'inactive'}`}
      onClick={addToCart}
    >
      Añadir
    </div>
  );
}

export default AddToCart;
