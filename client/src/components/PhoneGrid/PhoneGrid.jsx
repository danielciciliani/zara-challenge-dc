import { useEffect, useState } from 'react'
import { usePhoneContext } from '../../context/PhoneContext';
import PhoneCard from '../PhoneCard/PhoneCard';
import { fetchProducts } from '../../../services/api';
import './PhoneGrid.scss';

function PhoneGrid() {
  const [uniqueProducts, setProducts] = useState([]);
  const { phones, loadPhones} = usePhoneContext();


  useEffect(() => {
    loadPhones();
  }, []);


  return (
    <>
    <h1 className='grid_title'>Phone grid</h1>
    <div className='container'>
      <ul className='grid'>
          {phones?.map((product) => (
            <PhoneCard key={product.id} product={product} />
          ))}
      </ul>
    </div>
    </>
  )
}

export default PhoneGrid
