const { Subscription, User } = require ('../database/db')
const axios = require('axios');
require('dotenv').config();

const PAYPAL_ACCESS_TOKEN = process.env.PAYPAL_ACCESS_TOKEN;
const PLAN_ID = 'P-2GP82067SW2145017M45VTWI'; //ID del plan creado (se reemplaza si se genera otro plan)

const subscriptionBuy = async (req, res) => {

    const userId = req.user.id

  try {
    const existingSubscription = await Subscription.findOne({where: {userId}})

    if(existingSubscription){
        return res.status(400).json({error: 'User already has a subscription'})
    };

    const response = await axios.post(
      `https://api-m.sandbox.paypal.com/v1/billing/plans`,
      {
        plan_id: PLAN_ID,
        subscriber: {
          name: {
            given_name: req.user.name,
            surname: req.user.lastname,
          },
          email_address: req.user.email,
        },
        application_context: {
          brand_name: 'Project Management Platform',
          locale: 'en-US',
          user_action: 'SUBSCRIBE_NOW',
          return_url: 'http://localhost:3000/subscription-success', // URL a redirigir después de completar la suscripción
          cancel_url: 'http://localhost:3000/subscription-cancel', // URL a redirigir si cancelan
        },
      },
      {
        headers: {
          Authorization: `Bearer ${PAYPAL_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const newSubscription = await Subscription.create({
        id: response.data.id, // ID de la suscripción en PayPal
        type: '1_month',
        startDate: new Date(),
        expirationDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), //un mes después
        state: 'not_active', //actualizar a "active" después del webhook?
        userId: req.user.id,
      });
  
      await User.update({ isSubscribed: true }, { where: { id: userId } });
  
      return res.status(200).json({ approvalUrl });
  } catch (error) {
    console.error('Error creating subscription:', error.response?.data || error.message);
    return res.status(500).json({ error: 'Failed to create subscription' });
  }
};

module.exports = { subscriptionBuy };