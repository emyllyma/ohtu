const express = require('express'); //import express module
require('./mongoose'); // import mongoose from mongoose.js
const app = express(); //create instance of express app
const Reservation = require('./models/Reservation'); // import Reservation model
app.use(express.json()); // tells express to use middleware that can parse JSON stuff, aka reservation data from MongoDB

const cors = require('cors'); // CORS security to allow different domains to make requests to frontend
app.use(cors());

app.post('/api/reservations', async (req, res) => { // set endpoint for POST requests at /api/reservations, this enables new reservations to be made
  try {
    const newReservation = new Reservation(req.body); // takes data sent in request body and creates new reservation object
    await newReservation.save(); // save the new reservation into database
    res.status(201).json(newReservation); // if successful, send 201 response ("created") and details of new reservation in JSON format
  } catch (error) {
    res.status(400).json({ message: error.message }); // if unsuccessful send 400 stadus code ("bad request") and error message
  }
});
const port = process.env.PORT || 5000; // set port number for which server to listen, default is 5000 but PORT tries env variable if there is one

app.get('/', (req, res) => res.send('Hello World!')); //  test route to ensure server is running

app.listen(port, () => { // start server and listen to the port
  console.log(`Server running on port ${port}`);
});
