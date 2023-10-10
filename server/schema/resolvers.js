const { AuthenticationError } = require('apollo-server-express');
const { User, Location } = require('../models');

const { signToken } = require('../utils/auth');
// import required deconstructed assets.

const resolvers = {
  Query: { // Seeks data without altering its content.
    users: async () => { //find all users.
      return User.find({});
    },

    user: async (parent, { userId }) => {//find a user by id
      return User.findOne({ _id: userId });
    },
  },

  Mutation: { //Seeks Data and alters its content.
    addUser: async (parent, { username, email, password }) => {
      // Create and return the new School object
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {//finds a user by email and checks for authentication
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No profile with this email found');
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('incorrect Password');
      }
      const token = signToken(user);
      return { token, user };
    },
    addLocation: async (parent, { userId }, { location }) => { //updates a user with location data
      return await User.findOneAndUpdate({ _id: userId },
        { $addToSet: { locations: location } })
    },
    removeLocation: async (parent, { locationId }, { location }) => { //deletes a location by id
      const removedLoc = await Location.findOneAndDelete({ _id: locationId });
      return removedLoc;
      // return User.findOneAndUpdate(
      //   { _id: userId },
      //   { $pull: { locations: location } });
    },
    searchLocation: async (parent, { location }) => { //search for a location by name
      console.log(location)
      return await Location.find({
        location
      })
    },


    removeUser: async (parent, { userId }) => { //finds and deletes a user by userID
      return await User.findOneAndDelete({ _id: userId });
    },
  },
};

module.exports = resolvers;