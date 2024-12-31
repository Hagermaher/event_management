const express = require('express');
const { registerUserForEvent, getUserEventRegistrations } = require('../controllers/registrationController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', authenticate, registerUserForEvent);  // User registers for an event
router.get('/registrations', authenticate, getUserEventRegistrations);  // Get user's event registrations

module.exports = router;

