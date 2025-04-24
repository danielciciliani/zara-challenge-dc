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

  function deleteProduct(indexToRemove) {
    const updatedProducts = addedProducts.filter((_, i) => i !== indexToRemove);
    setAddedProducts(updatedProducts);
  }

  const total = addedProducts.reduce((sum, p) => sum + p.price, 0);

  return (
    <>
      <TopBar />
      <div className="app_container">
        <div className="cart">
          <p className="cart_title">Cart ({addedProducts.length})</p>
          <div className="cart_phone-card_wrapper">
            {addedProducts.map((product, index) => (
              <div key={index} className="cart_phone-card">
                <div className="cart_phone-card_image">
                  <img
                    src={product.imageUrl || placeholderImage}
                    alt={product.name}
                  />
                </div>
                <div className="cart_phone-card_info">
                  <div className="cart_phone-card_info_wrapper">
                    <p className="name">{product.name}</p>
                    <p className="data">
                      {product.storage} | {product.color}
                    </p>
                    <p className="price">
                      {product.price} {currency}
                    </p>
                  </div>
                  <div className="cart_phone-card_delete">
                    <p
                      className="delete_button"
                      onClick={() => deleteProduct(index)}
                    >
                      Eliminar
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart_footer">
            <div className="cart_footer_continue">
              <ContinueShopping />
            </div>
            <div className="cart_footer_payment">
              <div className="cart_footer_payment_price">
                <div>total</div>
                <div>
                  {total} {currency}
                </div>
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
