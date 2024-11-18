const paypal = require('@paypal/checkout-server-sdk');
require('dotenv').config();

// configuro el entorno sandbox con credenciales
const environment = new paypal.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID,
  process.env.PAYPAL_ACCES_TOKEN
);
const client = new paypal.core.PayPalHttpClient(environment);

module.exports = { client };