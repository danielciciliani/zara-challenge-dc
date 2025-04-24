import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

import { fetchProductById, getPlaceholder } from '../../../services/api';
import { usePhoneContext } from '../../context/PhoneContext';

import BackToGrid from '../BackToGrid/BackToGrid';
import AddToCart from '../AddToCart/AddToCart';
import SimilarProducts from '../SimilarProducts/SimilarProducts';
import ColorSelector from '../ColorSelector/ColorSelector';
import StorageSelector from '../StorageSelector/StorageSelector';
import Specs from '../Specs/Specs';
import TopBar from '../TopBar/TopBar';

import './../BackToGrid/BackToGrid.scss';
import './PhoneDetail.scss';
import { useCartContext } from '../../context/CartContext';

function PhoneDetail() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [imageByColor, setImageByColor] = useState(null);
  const [displayedColorName, setDisplayedColorName] = useState(null); 
  const { addedProducts, setAddedProducts } = useCartContext();
  const isOkToAdd = selectedColor && selectedStorage;
  const { phones, loadPhones } = usePhoneContext();
  const [isPhonesLoaded, setIsPhonesLoaded] = useState(false);
  const currency = 'EUR';
  const placeholderImage = getPlaceholder();

  useEffect(() => {
    const loadPhonesData = async () => {
      await loadPhones();
      setIsPhonesLoaded(true);
    };
    loadPhonesData();
  }, []);

  const productBasicData = isPhonesLoaded
    ? phones.find(phone => phone.id === id)
    : null;

  useEffect(() => {
    fetchProductById(id).then(productDetail => {
      setProductDetail(productDetail);
    });
  }, [id]);

  useEffect(() => {
    if (productDetail?.storageOptions?.length > 0) {
      setSelectedStorage(productDetail.storageOptions[0]);
    }
  }, [productDetail]);

  useEffect(() => {
    if (selectedColor && productDetail?.colorOptions) {
      const selected = productDetail.colorOptions.find(
        c => c.hexCode === selectedColor,
      );
      setImageByColor(selected?.imageUrl || productBasicData?.imageUrl);
      setDisplayedColorName(selected?.name);
    }
  }, [selectedColor, productDetail]);

  const handleStorageChange = storage => {
    setSelectedStorage(storage);
  };

  const calculatePrice = () => {
    const basePrice = productBasicData?.basePrice || 0;
    const storagePrice = selectedStorage?.price || 0;
    return basePrice + storagePrice;
  };

  if (!productDetail) {
    return <p>Loading product detail...</p>;
  }

  const specs = productDetail?.specs;

  function addToCart() {
    const productToAdd = {
      id: productDetail.id,
      name: productDetail.name,
      storage: selectedStorage.capacity,
      color: displayedColorName,
      price: calculatePrice(),
      imageUrl: imageByColor || productDetail.imageUrl || placeholderImage,
    };

    setAddedProducts(prev => [...prev, productToAdd]);
  }

  return (
    <>
      <div className="app_container">
        <TopBar addedProducts={addedProducts} />
        <div className="back">
          <Link to={'/'}>
            <BackToGrid />
          </Link>
        </div>
        <div className="phoneDetail">
          <div className="phoneDetail_container">
            <div className="phoneDetail_wrapper">
              <div className="phoneDetail_image">
                <img
                  className="grid_card_image"
                  src={
                    imageByColor ||
                    productBasicData?.imageUrl ||
                    placeholderImage
                  }
                  alt={productDetail.name}
                />
              </div>
              <div className="phoneDetail_info">
                <div className="main_section">
                  <h1 className="phoneDetail_info-name">
                    {productBasicData?.name || productDetail.name}
                  </h1>
                  <p
                    className="phoneDetail_info-price"
                    key={selectedStorage?.capacity}
                  >
                    From{' '}
                    <span
                      key={selectedStorage?.capacity}
                      className="animated_price"
                    >
                      {calculatePrice(
                        productBasicData?.basePrice || productDetail.price,
                      )}
                    </span>{' '}
                    {currency}
                  </p>
                </div>
                <div className="storage_section">
                  <StorageSelector
                    storageOptions={productDetail?.storageOptions}
                    selectedStorage={selectedStorage?.capacity}
                    onStorageChange={handleStorageChange}
                  />
                </div>
                <div className="color_selector_section">
                  <ColorSelector
                    colorOptions={productDetail?.colorOptions}
                    selectedColor={selectedColor}
                    onColorChange={setSelectedColor}
                  />
                </div>
                <div>
                  <AddToCart
                    isActive={isOkToAdd}
                    addToCart={addToCart}
                    addedProducts={addedProducts}
                  />
                </div>
              </div>
            </div>
            <div className="specs">
              <Specs
                specs={specs}
                productBasicData={productBasicData}
                productDetail={productDetail}
              />
            </div>
          </div>
        </div>
        <div className="similiar_products">
          <SimilarProducts similarProducts={productDetail.similarProducts} />
        </div>
      </div>
    </>
  );
}

export default PhoneDetail;
