const mongoose = require('mongoose'); // import mongoose

// connect to "myData" using maunuDB credentials
// store credentials into environment variables later
mongoose.connect('mongodb+srv://maunuDB:KmMUd4IKOFhcv495@cluster0.7tr3snz.mongodb.net/myData', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.error(`Error connecting to MongoDB: ${err}`);
});
