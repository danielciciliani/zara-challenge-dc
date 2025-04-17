import { filterUniqueProducts } from "../../../services/api";

import PhoneCard from "../PhoneCard/PhoneCard";

import "./SimilarProducts.scss";

function SimilarProducts({ similarProducts }) {

    const uniqueProducts = filterUniqueProducts(similarProducts);

    return(
        <>
            <p className="similar_products_title">similar items</p>
            <div className="similar_products_wrapper">
                <ul className='similar_products_grid'>
                    {uniqueProducts?.map((product) => (
                        <PhoneCard key={product.id} product={product} />
                    ))}
                </ul>
            </div>
        </>
    );
}


export default SimilarProducts;