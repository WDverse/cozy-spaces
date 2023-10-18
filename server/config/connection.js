// Importing the necessary packages
const mongoose = require('mongoose');

// Establishing a connection to the MongoDB database
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/rental_db'
);

// Exporting the database connection object for use in other parts of the application
module.exports = mongoose.connection;
