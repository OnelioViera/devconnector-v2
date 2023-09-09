// Import the express.js library and the express.Router() function.
const express = require('express');
const router = express.Router();
// import auth middleware
const auth = require('../../middleware/auth');
// import User model
const User = require('../../models/Users');

// Define the route for the GET request to api/auth.
// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', auth, async (req, res) => { // Corrected 'rep' to 'req'
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    // Log the error message to the console
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
; // This is the callback function that will be called when a GET request is made to the /api/auth  endpoint.

module.exports = router; // Export the router so it can be used in other parts of the application.