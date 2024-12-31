const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (amount) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Amount in cents
      currency: 'usd',
      payment_method_types: ['card'],
    });
    return paymentIntent;
  } catch (err) {
    console.error('Stripe Payment Error: ', err);
    throw new Error('Error creating payment intent');
  }
};

module.exports = { createPaymentIntent };
