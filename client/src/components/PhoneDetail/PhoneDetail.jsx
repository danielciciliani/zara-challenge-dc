import { useEffect, useState} from "react";
import { Link, useParams } from "react-router";

import { fetchProductById } from "../../../services/api";
import { usePhoneContext } from "../../context/PhoneContext";

import BackToGrid from "../BackToGrid/BackToGrid";
import AddToCart from "../AddToCart/AddToCart";
import PhoneCard from "../PhoneCard/PhoneCard";
import SimilarProducts from "../SimilarProducts/SimilarProducts";
import ColorSelector from "../ColorSelector/ColorSelector";
import StorageSelector from "../StorageSelector/StorageSelector";


import "./../BackToGrid/BackToGrid.scss";
import "./PhoneDetail.scss"

function PhoneDetail() {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState(null);
    const [selectedStorage, setSelectedStorage] = useState(null);
    const { phones, loadPhones} = usePhoneContext();
    const current = 'EUR';

    
    useEffect(() => {
        loadPhones();
    }, []);

    const productBasicData = phones.find((phone) => phone.id === id);

    useEffect(() => {
        fetchProductById(id)
            .then((productDetail) => {
                setProductDetail(productDetail);
            })

    }, [id]);

    useEffect(() => {
        if (productDetail?.storageOptions?.length > 0) {
            setSelectedStorage(productDetail.storageOptions[0]);
        }
    }, [productDetail]);

    const handleStorageChange = (storage) => {
        setSelectedStorage(storage);
    };

    const calculatePrice = () => {
        const basePrice = productBasicData?.basePrice || 0;
        const storagePrice = selectedStorage?.price || 0;
        return basePrice + storagePrice;
    };


    if (!productDetail) {
        return <p>Loading product detail...</p>    
    }

    console.log(productDetail);

    return (
        <>
             <div className="back">
                <Link to={'/'}>
                    <BackToGrid />
                </Link>
            </div>
            <div className="container">
                <div className="phoneDetail">
                    <img className='grid_card_image' src={
                        productBasicData.imageUrl || productDetail.imageUrl
                        } alt={productDetail.name} />
                    <p>{productBasicData.name}</p>
                    <p>{`From ${calculatePrice(productBasicData.basePrice)} ${current}`}</p>
                    <div className="storage_section">
                        <p className="storage_text">Storage ¿hOW MUCH SPACE DO YOU NEED?</p>
                        <StorageSelector 
                            storageOptions={productDetail?.storageOptions}
                            selectedStorage={selectedStorage?.capacity}
                            onStorageChange={handleStorageChange}
                        />
                    </div>
                </div>
                <div className="color_selector_section">
                    <ColorSelector colorOptions={productDetail?.colorOptions} />
                </div>
                
            </div>
            <div>
                <Link to={'/'}>
                    <AddToCart />
                </Link>
            </div>
            <p>{productDetail.description}</p>
            <div className="similiar_products">
                    <SimilarProducts similarProducts={productDetail.similarProducts}/>
            </div>

        </>
    );
}

export default PhoneDetail;

