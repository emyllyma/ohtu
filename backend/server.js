const express = require('express');
require('./mongoose');
const app = express();
const Reservation = require('./models/Reservation');
app.use(express.json()); // To parse JSON bodies

const cors = require('cors');
app.use(cors());

app.post('/api/reservations', async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    await newReservation.save();
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
