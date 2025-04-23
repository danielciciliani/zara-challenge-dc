import ContinueShopping from '../ContinueShopping/ContinueShopping';
import PayButton from '../PayButton/PayButton';
import TopBar from '../TopBar/TopBar';
import { getPlaceholder } from '../../../services/api';
import { useCartContext } from '../../context/CartContext';
import './Cart.scss';
import { useEffect } from 'react';

function Cart() {
  const placeholderImage = getPlaceholder();
  const currency = 'EUR';
  const { addedProducts, setAddedProducts } = useCartContext();

  function deleteProducts() {
    localStorage.removeItem('addedProducts');
    setAddedProducts(0);
  }

  return (
    <>
      <TopBar />
      <div className="app_container">
        <div className="cart">
          <p className="cart_title">Cart ({addedProducts})</p>
          <div className="cart_phone-card_wrapper">
            <div className="cart_phone-card">
              <div className="cart_phone-card_image">
                <img src={placeholderImage} alt="" />
              </div>
              <div className="cart_phone-card_info">
                <div className="cart_phone-card_info_wrapper">
                  <p className="name">galaxy s24 ultra</p>
                  <p className="data">512 gb | violeta titanium</p>
                  <p className="price">1199 EUR</p>
                </div>
                <div className="cart_phone-card_delete">
                  <p className="delete_button" onClick={deleteProducts}>
                    Eliminar
                  </p>
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
                <div>total</div>
                <div>1199 {currency}</div>
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
