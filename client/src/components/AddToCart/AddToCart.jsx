import PhoneDetail from "../PhoneDetail/PhoneDetail";

import "./AddToCart.scss";

function AddToCart({isActive}){
   
    return (
        <div className={`addToCard_button ${isActive ? "active" : "inactive"}`}>
            Añadir
        </div>
    );
}

export default AddToCart;