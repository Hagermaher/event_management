const { createPaymentIntent } = require('../models/paymentModel');

const createPayment = async (req, res) => {
  const { event_id } = req.body;
  const user_id = req.user.id;

  try {
    // Get event price (assuming the event price is stored in the event table)
    const eventResult = await pool.query('SELECT * FROM events WHERE id = $1', [event_id]);
    const event = eventResult.rows[0];

    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }

    const amount = event.price; // Price in dollars, you may want to adjust currency/format.

    // Create payment intent for Stripe
    const paymentIntent = await createPaymentIntent(amount);

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      eventName: event.name,
      amount,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Payment creation failed' });
  }
};

module.exports = { createPayment };
