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