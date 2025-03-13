const apiUrl = `https://prueba-tecnica-api-tienda-moviles.onrender.com/products?limit=`;
const apiKey = '87909682e6cd74208f41a6ef39fe4191';

export const fetchProducts = (limit) => {

    return fetch(`${apiUrl}${limit}`, {
        method: 'GET',
        headers: {
            'x-api-key': apiKey 
        }
    })
    .then((response) => response.json())
    .then((data) => filterUniqueProducts(data))
    .catch((error) => console.error('Error al obtener productos:', error));
};

function filterUniqueProducts(data){
    const uniqueProducts = Array.from(
        new Map(data.map(product => [product.id, product])).values()
    );
    return uniqueProducts;
}