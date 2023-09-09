// Import the express.js library and the express.Router() function.
const express = require('express');
const router = express.Router();
// import bcrypt
const bcrypt = require('bcryptjs');
// import auth middleware
const auth = require('../../middleware/auth');
// import User model
const User = require('../../models/Users');
// import gravatar
const jwt = require('jsonwebtoken');
// import bcrypt
const { check, validationResult } = require('express-validator');
// import config
const config = require('config');


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

// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  Public
router.post('/', [
  // Validate check for the 'email' field
  check('email', 'Please include a valid email').isEmail(),

  // Validate check for the 'password' field
  check('password', 'Password is required').exists()
],
async (req, res) => {

  // Check for request validation errors and return 400 error with the errors if any
  const errors = validationResult(req);

  // If there are errors, return a 400 error with the errors
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (user) {
      // If user exists, return a 400 error with the message
      return res.status(400).json({ errors: [{ msg: 'Invalided Credentials' }] });
    }

  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch) {
    return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
  }

    // Create the payload
    const payload = {
      user: {
        id: user.id
      }
    }

    // Sign the token
    jwt.sign(
      payload, 
      config.get('jwtSecret'), 
      { expiresIn: 360000 }, 
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      });

  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }

});

module.exports = router; // Export the router so it can be used in other parts of the application.