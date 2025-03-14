import { useEffect, useState } from 'react'
import './PhoneGrid.scss';
import PhoneCard from '../PhoneCard/PhoneCard';
import { fetchProducts } from '../../../services/api';

function PhoneGrid() {
  const [uniqueProducts, setProducts] = useState([]);

  useEffect(() => {
      fetchProducts(30)
        .then(products => {
          setProducts(products.slice(0,20));
        });
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
