const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const placeholderImage = '../../public/placeholder_MBST_4.png';

export async function fetchProducts(limit, searchTerm = '') {
  
  try {
    let response = await fetch(`${API_URL}?limit=${limit}&search=${searchTerm}`, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error (`Error http: ${response.status}`);
    }

    let data = await response.json();
    data = filterUniqueProducts(data);
    return data;
  }  catch (error) {
    console.error('Error getting products', error);
    return [];
  }
}

export async function fetchProductById(id) {
  let response = await fetch(`${API_URL}/${id}`, {
    method: 'GET',
    headers: {
      'x-api-key': API_KEY,
    },
  });

  const data = await response.json();
  return data;
}

export function filterUniqueProducts(data) {
  const uniqueProducts = Array.from(
    new Map(data.map(product => [product.id, product])).values(),
  );
  return uniqueProducts;
}

export function getPlaceholder() {
  return placeholderImage;
}
