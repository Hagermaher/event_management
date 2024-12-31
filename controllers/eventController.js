const { createEvent, getEvents, getEventById, updateEvent, deleteEvent } = require('../models/eventModel');
const { sendConfirmationEmail } = require('../utils/sendEmail');

const createNewEvent = async (req, res) => {
  const { name, description, date, location } = req.body;
  const organizer_id = req.user.id;

  try {
    const event = await createEvent(name, description, date, location, organizer_id);
    res.status(201).json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await getEvents();
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};
module.exports = { createNewEvent, getAllEvents, getEventById, updateEvent, deleteEvent };
