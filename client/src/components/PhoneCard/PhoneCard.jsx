import './PhoneCard.scss';

function PhoneCard ({product}) {

    return (
        <>
        <div className='grid_card' key={product.id}>
            <div className='grid_card_wrapper'>
                <img className='grid_card_image' src={product.imageUrl} alt={product.name} />
                <h2 className='grid_card_name'>{product.name}</h2>
                <p className='grid_card_brand'>{product.brand}</p>
                <p className='grid_card_price'>{product.basePrice} €</p>
            </div>
        </div>
        </>
    );
}

export default PhoneCard