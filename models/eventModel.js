const pool = require('../db');

const createEvent = async (name, description, date, location, organizer_id) => {
  const result = await pool.query(
    'INSERT INTO events (name, description, date, location, organizer_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [name, description, date, location, organizer_id]
  );
  return result.rows[0];
};

const getEvents = async () => {
  const result = await pool.query('SELECT * FROM events');
  return result.rows;
};

const getEventById = async (id) => {
  const result = await pool.query('SELECT * FROM events WHERE id = $1', [id]);
  return result.rows[0];
};

const updateEvent = async (id, name, description, date, location) => {
  const result = await pool.query(
    'UPDATE events SET name = $1, description = $2, date = $3, location = $4 WHERE id = $5 RETURNING *',
    [name, description, date, location, id]
  );
  return result.rows[0];
};

const deleteEvent = async (id) => {
  await pool.query('DELETE FROM events WHERE id = $1', [id]);
};

module.exports = { createEvent, getEvents, getEventById, updateEvent, deleteEvent };
Create the event controller (eventController.js):


