import { useEffect, useState} from "react";
import { Link, useParams } from "react-router";

import { fetchProductById } from "../../../services/api";
import { usePhoneContext } from "../../context/PhoneContext";

import BackToGrid from "../BackToGrid/BackToGrid";
import AddToCart from "../AddToCart/AddToCart";
import PhoneCard from "../PhoneCard/PhoneCard";
import SimilarProducts from "../SimilarProducts/SimilarProducts";
import ColorSelector from "../ColorSelector/ColorSelector";


import "./../BackToGrid/BackToGrid.scss";
import "./PhoneDetail.scss"

function PhoneDetail() {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState(null);
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
                    <p>{productBasicData.brand}</p>
                    <div className="storage_section">
                        <p className="storage_text">Storage ¿hOW MUCH SPACE DO YOU NEED?</p>
                    </div>
                    <p>{"From " + productBasicData.basePrice + " " + current}</p>
                    <p>{productDetail.description}</p>
                </div>
                <div className="color_selector_section">
                 <ColorSelector productDetail={productDetail} />
                </div>
                <div className="similiar_products">
                    <SimilarProducts similarProducts={productDetail.similarProducts}/>
                </div>
            </div>
            <div>
                <Link to={'/'}>
                    <AddToCart />
                </Link>
            </div>
        </>
    );
}

export default PhoneDetail;

