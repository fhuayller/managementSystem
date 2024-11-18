const axios = require('axios');
require('dotenv').config();

const PAYPAL_ACCESS_TOKEN = process.env.PAYPAL_ACCESS_TOKEN;

const createProduct = async () => {
  try {
    // crear el producto
    const productResponse = await axios.post(
      'https://api-m.sandbox.paypal.com/v1/catalogs/products',
      {
        name: 'Project Management Service',
        description: 'Access to premium project management tools',
        type: 'SERVICE',
        category: 'SOFTWARE',
      },
      {
        headers: {
          Authorization: `Bearer ${PAYPAL_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Product created:', productResponse.data);
  } catch (error) {
    console.error('Error creating product:', error.response?.data || error.message);
  }
};

createProduct();
