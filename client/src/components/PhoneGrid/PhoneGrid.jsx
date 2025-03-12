import { useEffect, useState } from 'react'
import './PhoneGrid.scss';
import PhoneCard from '../PhoneCard/PhoneCard';

function PhoneGrid() {
    const [uniqueProducts, setProducts] = useState([]);
    const limit = 40;
    const productsUrl = `https://prueba-tecnica-api-tienda-moviles.onrender.com/products?limit=${limit}`;
    const apiKey = '87909682e6cd74208f41a6ef39fe4191';

  useEffect(() => {
    fetch(productsUrl, {
        method: 'GET',
        headers: {
            'x-api-key': apiKey 
        }
    })
      .then((response) => response.json())
      .then((data) => {
        const uniqueProducts = Array.from(
          new Map(data.map(product => [product.id, product])).values()
        );
          
        setProducts(uniqueProducts.slice(0, 20));
      })
      .catch((error) => console.error('Error al obtener productos:', error));
  }, []);

  return (
    <>
    <h1 className='grid_title'>Phone grid</h1>
    <div className='container'>
            <ul className='grid'>
                {uniqueProducts?.map((product) => (
                  <PhoneCard key={product.id} product={product} />
                ))}
            </ul>
    </div>
    </>
  )
}

export default PhoneGrid
