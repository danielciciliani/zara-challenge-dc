const API_URL = `https://prueba-tecnica-api-tienda-moviles.onrender.com/products`;
const API_KEY = '87909682e6cd74208f41a6ef39fe4191';
const placeholderImage= "../../public/placeholder_MBST_4.png";

export async function fetchProducts(limit, searchTerm='') {

    let response = await fetch(`${API_URL}?limit=${limit}&search=${searchTerm}`, {
        method: 'GET', 
        headers: {
            'x-api-key': API_KEY
        }
    });

    let data = await response.json();
    data = filterUniqueProducts(data);
    return data;
}

export async function fetchProductById(id) {

    let response = await fetch(`${API_URL}/${id}`, {
        method: 'GET', 
        headers: {
            'x-api-key': API_KEY
        }
    });
    
    const data =  await response.json();
    return data;
}

export function filterUniqueProducts(data){
    
    const uniqueProducts = Array.from(
        new Map(data.map(product => [product.id, product])).values()
    );
    return uniqueProducts;
};

export function getPlaceholder(){
    return placeholderImage;
}