const pool = require('../db');
const registerForEvent = async (user_id, event_id) => {
  const result = await pool.query(
    'INSERT INTO registrations (user_id, event_id) VALUES ($1, $2) RETURNING *',
    [user_id, event_id]
  );
  return result.rows[0];
};

const getUserRegistrations = async (user_id) => {
  const result = await pool.query(
    'SELECT * FROM registrations WHERE user_id = $1',
    [user_id]
  );
  return result.rows;
};

const getEventRegistrations = async (event_id) => {
  const result = await pool.query(
    'SELECT * FROM registrations WHERE event_id = $1',
    [event_id]
  );
  return result.rows;
};

module.exports = { registerForEvent, getUserRegistrations, getEventRegistrations };

