import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [addedProducts, setAddedProducts] = useState(() => {
    const stored = localStorage.getItem('addedProducts');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('addedProducts', JSON.stringify(addedProducts));
  }, [addedProducts]);

  return (
    <CartContext.Provider
      value={{
        addedProducts,
        setAddedProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
