const axios = require('axios');
require('dotenv').config();

const PAYPAL_ACCESS_TOKEN = process.env.PAYPAL_ACCESS_TOKEN;

const createSubscriptionPlan = async () => {
  try {
    // ID del producto creado previamente
    const productId = 'PROD-676554207V093531K';

    const planResponse = await axios.post(
      'https://api-m.sandbox.paypal.com/v1/billing/plans',
      {
        product_id: productId,
        name: 'Plan de 1 mes',
        description: 'Acceso premium por un mes',
        billing_cycles: [
          {
            frequency: {
              interval_unit: 'MONTH',
              interval_count: 1,
            },
            tenure_type: 'REGULAR',
            sequence: 1,
            total_cycles: 12, //chequear si está bien
            pricing_scheme: {
              fixed_price: {
                value: '10.00',
                currency_code: 'USD',
              },
            },
          },
        ],
        payment_preferences: {
          auto_bill_outstanding: true,
          setup_fee: {
            value: '0',
            currency_code: 'USD',
          },
          setup_fee_failure_action: 'CONTINUE',
          payment_failure_threshold: 3,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${PAYPAL_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Plan creado:', planResponse.data);
  } catch (error) {
    console.error('Error creando el plan:', error.response?.data || error.message);
  }
};

createSubscriptionPlan();

