// Import the express.js library and the express.Router() function.
const express = require('express');
const router = express.Router();

// Define the route for the GET request to api/auth.
// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', (rep, res) => res.send('Auth route')) // This is the callback function that will be called when a GET request is made to the /api/auth  endpoint.

module.exports = router; // Export the router so it can be used in other parts of the application.