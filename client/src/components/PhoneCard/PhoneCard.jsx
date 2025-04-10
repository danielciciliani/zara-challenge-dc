import './PhoneCard.scss';
import { usePhoneContext } from '../../context/PhoneContext';
import { Link } from 'react-router';

function PhoneCard ({product}) {
    const { setSelectedPhone } = usePhoneContext();

    return (
        <>
        <div className='grid_card' key={product.id}>
            <div className='grid_card_wrapper'>
                <Link to={`/phones/${product.id}`}
                        className='phone_link'
                >
                    <img className='grid_card_image' src={product.imageUrl} alt={product.name} />
                    <h2 className='grid_card_name'>{product.name}</h2>
                    <p className='grid_card_brand'>{product.brand}</p>
                    <p className='grid_card_price'>{product.basePrice} €</p>
                </Link >
            </div>
        </div>
        </>
    );
}

export default PhoneCard