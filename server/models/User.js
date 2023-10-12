const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
//requires tools from mongoose and bcrypt packages.

const userSchema = new Schema({ //creates a schema for the user model data.
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  locations: [
    { type: String },
  ]

});
userSchema.pre('save', async function (next) { //bcrypt hashes password.
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);
//exports the user schema as User. 
module.exports = User;
