const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const sendConfirmationEmail = (email, eventName) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const sendConfirmationEmail = (email, eventName) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Confirmation for ${eventName}`,
    text: `You have successfully registered for the event: ${eventName}.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

// Send event reminder emails (24 hours before event)
const sendEventReminder = (email, eventName, eventDate) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Reminder: ${eventName}`,
    text: `Just a reminder, the event ${eventName} is happening tomorrow at ${eventDate}. See you there!`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Reminder email sent: ' + info.response);
    }
  });
};

module.exports = { sendConfirmationEmail, sendEventReminder };
