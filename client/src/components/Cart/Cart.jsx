import { useState } from "react";

import ContinueShopping from "../ContinueShopping/ContinueShopping";
import PayButton from "../PayButton/PayButton";
import PhoneCard from "../PhoneCard/PhoneCard";
import TopBar from "../TopBar/TopBar";
import "./Cart.scss";

function Cart() {
    const [addedProducts] = useState(0);

    return (
        <>
            <TopBar addedProducts={addedProducts}/>
            <div className="app_container">
                <div className="cart">
                    <p className="cart_title">Cart ({addedProducts})</p>
                    <div className="cart_phone-card_wrapper">
                        <div className="cart_phone-card">
                            <div className="cart_phone-card_image">
                                <img src="" alt="" />
                            </div>
                            <div className="cart_phone-card_info">
                                <div className="cart_phone-card_info_wrapper">
                                    <p className="name">galaxy s24 ultra</p>
                                    <p className="data">512 gb  | violeta titanium</p>
                                    <p className="price">1199 EUR</p>
                                </div>
                                <div className="cart_phone-card_delete">
                                    <p className="delete_button">Eliminar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart_footer">
                        <div className="cart_footer_continue">
                            <ContinueShopping />
                        </div>
                        <div className="cart_footer_payment">
                            <div className="cart_footer_payment_price">
                                TOTAL 1199 EUR                                
                            </div>
                            <div className="cart_footer_payment_button">
                                <PayButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;