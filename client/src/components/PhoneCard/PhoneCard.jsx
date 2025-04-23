import './PhoneCard.scss';
import { usePhoneContext } from '../../context/PhoneContext';
import { Link } from 'react-router';

function PhoneCard({ product }) {
  const { setSelectedPhone } = usePhoneContext();

  return (
    <>
      <div className="grid_card" key={product.id}>
        <Link to={`/phones/${product.id}`} className="phone_link">
          <div className="grid_card_wrapper">
            <img
              className="grid_card_image"
              src={product.imageUrl}
              alt={product.name}
            />
            <div className="grid_card_info">
              <div className="grid_card_info_wrapper">
                <p className="grid_card_info_wrapper_brand">{product.brand}</p>
                <h2 className="grid_card_info_wrapper_name">{product.name}</h2>
              </div>
              <p className="grid_card_price">{product.basePrice} €</p>
            </div>
          </div>
        </Link>
        <div className="grid_card_overlay"></div>
      </div>
    </>
  );
}

export default PhoneCard;
