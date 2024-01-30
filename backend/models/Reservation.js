// models/Reservation.js
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true},
  // Add other fields like date, time, number of guests, etc.
  // ...
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
