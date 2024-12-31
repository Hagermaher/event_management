const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { register, login } = require('./controllers/authController');
const { createNewEvent, getAllEvents } = require('./controllers/eventController');
const { registerUserForEvent, getUserEventRegistrations } = require('./controllers/registrationController');
const { createPayment } = require('./controllers/paymentController');
const registrationRoutes = require('./routes/registrationRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const eventRoutes = require('./routes/eventRoutes');
const authRoutes = require('./routes/authRoutes');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/auth', authRoutes);
app.use('/events', eventRoutes);
app.use('/registrations', registrationRoutes);
app.use('/payments', paymentRoutes);
