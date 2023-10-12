const mongoose = require('mongoose');
//require mongoose package
mongoose.connect( //connect to mongoDB database
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/rental_db'
);

module.exports = mongoose.connection; //export the connection data