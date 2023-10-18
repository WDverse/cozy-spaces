// Importing necessary dependencies from mongoose and bcrypt
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Creating a schema for the 'User' model
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensure usernames are unique
    trim: true, // Trim whitespace from username
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure emails are unique
    match: [/.+@.+\..+/, 'Must match an email address!'], // Validate email format
  },
  password: {
    type: String,
    required: true,
    minlength: 5, // Set a minimum length for passwords
  },
  locations: [
    { type: String }, // An array to store location references (may be related to the Location model)
  ],
});

// Middleware: Before saving a user, hash the password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Method to compare an incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Creating the 'User' model from the schema
const User = model('User', userSchema);

// Exporting the 'User' model
module.exports = User;
