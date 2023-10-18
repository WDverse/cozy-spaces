// Import the necessary dependencies and modules
const db = require("../config/connection"); // Database connection
const { User, Location } = require("../models"); // User and Location models
const userSeeds = require("./userseeds.json"); // JSON data for user seeds
const locationSeeds = require("./locationseeds.json"); // JSON data for location seeds

// Listen for the 'open' event of the database connection
db.once("open", async () => {
  try {
    // Remove all existing user documents from the 'User' collection
    await User.deleteMany({});

    // Remove all existing location documents from the 'Location' collection
    await Location.deleteMany({});

    // Create new user documents in the 'User' collection using userSeeds data
    await User.create(userSeeds);

    // Create new location documents in the 'Location' collection using locationSeeds data
    await Location.create(locationSeeds);
  } catch (err) {
    // If any errors occur, log them to the console
    console.error(err);
    process.exit(1); // Exit the process with an error status
  }

  // Print 'all done!' to the console when the seeding is complete
  console.log("all done!");
  process.exit(0); // Exit the process with a success status
});
