const { registerForEvent, getUserRegistrations } = require('../models/registrationModel');
const { sendConfirmationEmail } = require('../utils/sendEmail');

const registerUserForEvent = async (req, res) => {
  const { event_id } = req.body;
  const user_id = req.user.id;

  try {
    // Check if event exists
    const eventResult = await pool.query('SELECT * FROM events WHERE id = $1', [event_id]);
    const event = eventResult.rows[0];
    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }

    // Register the user for the event
    const registration = await registerForEvent(user_id, event_id);

    // Send a confirmation email to the user
    sendConfirmationEmail(req.user.email, event.name);

    res.status(200).json({ msg: 'Successfully registered for the event', registration });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

const getUserEventRegistrations = async (req, res) => {
  const user_id = req.user.id;

  try {
    const registrations = await getUserRegistrations(user_id);
    res.status(200).json(registrations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { registerUserForEvent, getUserEventRegistrations };
