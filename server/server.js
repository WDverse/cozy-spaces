// Import the Express.js library for building the server.
const express = require('express');

// Import the ApolloServer class for setting up the GraphQL server.
const { ApolloServer } = require('apollo-server-express');

// Import the path module to work with file paths.
const path = require('path');

// Import the authMiddleware function from the utils/auth file.
const { authMiddleware } = require('./utils/auth');

// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require('./schema');

// Import the database connection module from the ./config directory.
const db = require('./config/connection');

const PORT = process.env.PORT || 3001; //sets options for the port.

const server = new ApolloServer({
  typeDefs,    // The GraphQL type definitions (schema)
  resolvers,   // The GraphQL resolvers
  context: authMiddleware,  // The context for resolving GraphQL queries/mutations
});

const app = express(); // Create an instance of the Express application

app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded request bodies
app.use(express.json()); // Middleware to parse JSON request bodies

if (process.env.NODE_ENV === 'production') {
  // Check if the application is running in production mode
  app.use(express.static(path.join(__dirname, '../client/build')));
  // Serve static files from the 'client/build' directory (e.g., CSS, JavaScript, images)
}

app.get('/', (req, res) => {
  // Define a route handler for the root path ('/')
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
  // Send the 'index.html' file as the response for the root path
  // This is typically used for serving the main HTML file of a React or frontend application
  // in a production environment.
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  db.once('open', () => { //prints to the console which ports are in use. 
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};

// Call the async function to start the server
startApolloServer();