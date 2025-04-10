import PhoneCard from "../PhoneCard/PhoneCard";

import "./SimilarProducts.scss";

function SimilarProducts({ similarProducts }) {

    return(
        <div className="similar_products_wrapper">
            <ul className='similar_products_grid'>
                {similarProducts?.map((product) => (
                    <PhoneCard key={product.id} product={product} />
                ))}
            </ul>
        </div>
    );
}


export default SimilarProducts;