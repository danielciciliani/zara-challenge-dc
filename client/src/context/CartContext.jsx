import { createContext, useContext, useState} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [addedProducts, setAddedProducts] = useState(0);

    return (
        <CartContext.Provider value={{
            addedProducts,
            setAddedProducts
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);
