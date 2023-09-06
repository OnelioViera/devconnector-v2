// Import Mongoose library for MongoDB MongoDB connection
const mongoose = require('mongoose');

// Import the config package to access configuration variables
const config = require('config');

// Get the MongoDB connection URI from the configuration variables
const db = config.get('mongoURI');

// Define an async function to connect to the database using the URI
const connectDB = async () => {
  try {
    // Use Mongoose's connect() method to connect to MongoDB using the URI
    await mongoose.connect(db, {
        useNewUrlParser: true,
    });

    // If successful, log a success message
    console.log('MongoDB Connected...');
  } catch (err) {

    // If unsuccessful, log the error message
    console.log(err.message);
    // Exit the Node.js process with failure status code (1)
    process.exit(1);
  }
};

// Export the connectDB function so it can be imported and used in other parts of the application
module.exports = connectDB;