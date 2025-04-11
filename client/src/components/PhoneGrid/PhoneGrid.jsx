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
    <div className='container'>
      <div className='grid'>
        <div className="box">
          {phones?.map((product) => (
            <PhoneCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default PhoneGrid
