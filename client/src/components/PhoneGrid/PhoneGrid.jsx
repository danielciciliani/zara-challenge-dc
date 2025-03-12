import { useEffect, useState } from 'react'
import './PhoneGrid.scss';

function PhoneGrid() {
    const [products, setProducts] = useState([]);
    const productsUrl = 'https://prueba-tecnica-api-tienda-moviles.onrender.com/products?limit=20';
    const apiKey = '87909682e6cd74208f41a6ef39fe4191';

  useEffect(() => {
    fetch(productsUrl, {
        method: 'GET',
        headers: {
            'x-api-key': apiKey 
        }
    }
        
    )
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error al obtener productos:', error));
  }, []);

  return (
    <>
    <h1 className='grid_title'>Phone grid</h1>
    <div className='container'>
            <ul className='grid'>
                {products?.map((product) => (
                <div className='grid_card' key={product.id}>
                    <div className='grid_card_wrapper'>
                        <img className='grid_card_image' src={product.imageUrl} alt={product.name} />
                        <h2 className='grid_card_name'>{product.name}</h2>
                        <p className='grid_card_brand'>{product.brand}</p>
                        <p className='grid_card_price'>{product.basePrice} €</p>
                    </div>
                </div>
                ))}
            </ul>
    </div>
    </>
  )
}

export default PhoneGrid
