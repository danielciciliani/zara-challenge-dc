import { useEffect, useState } from 'react';
import { usePhoneContext } from '../../context/PhoneContext';
import PhoneCard from '../PhoneCard/PhoneCard';
import SearchProducts from '../SearchProducts/SearchProducts';
import './PhoneGrid.scss';

function PhoneGrid() {
  const { phones, loadPhones } = usePhoneContext();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadPhones(searchTerm);
  }, [searchTerm]);

  const filteredProducts = phones.filter(
    product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  let searchResults = filteredProducts.length;

  return (
    <>
      <div className="searchbar">
        <SearchProducts
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchResults={searchResults}
        />
      </div>
      <div className="container">
        <div className="grid">
          <div className="box">
            {filteredProducts.map(product => (
              <PhoneCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PhoneGrid;
