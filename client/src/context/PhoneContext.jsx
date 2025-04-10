import { createContext, useContext, useState, useEffect} from "react";
import { fetchProducts } from "../../services/api";

const PhoneContext = createContext();

export const PhoneProvider = ({ children }) => {
    const [phones, setPhones] = useState([]);
    const [selectedPhone, setSelectedPhone] = useState(null);

    const loadPhones = async () => {
        const products = await fetchProducts(30);
        setPhones(products.slice(0, 20));
    };
    
    return (
        <PhoneContext.Provider value={{
            phones, 
            setPhones, 
            selectedPhone,
            setSelectedPhone, 
            loadPhones
        }}>
            {children}
        </PhoneContext.Provider>
    );
};

export const usePhoneContext = () => useContext(PhoneContext);
