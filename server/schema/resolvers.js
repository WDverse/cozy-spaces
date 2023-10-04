const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      // Create and return the new School object
      return await User.create({ username, email, password });
    },

    login: async(parent,{email, password}) => {
      const user = await User.findOne({email});

      if(!profile) {
        throw new AuthenticationError('No profile with this email found');
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('incorrect Password');
      }
      const token =signToken(user);
      return {token, profile};
    }
  },
};

module.exports = resolvers;