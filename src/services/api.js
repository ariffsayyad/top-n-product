import axios from 'axios';

const API_URL = 'http://20.244.56.144/test';

export const fetchProducts = async (company = 'AMZ', category = 'Laptop', top = 10, minPrice = 1, maxPrice = 10000) => {
  try {
    const response = await axios.get(`${API_URL}/companies/${company}/categories/${category}/products`, {
      params: { top, minPrice, maxPrice }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
