// Import the express.js library
const express = require('express');
// Import the express.Router() function
const router = express.Router();
// 
const { check, validationResult } = require('express-validator');

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post('/', [
  // Express validator checks
  check('name', 'Name is required')
    .not()
    .isEmpty(),
    // Validate check for the 'email' field
  check('email', 'Please include a valid email').isEmail(),
  // Validate check for the 'password' field
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
],
(req, res) => {
  // Check for request validation errors and return 400 error with the errors if any
  const errors = validationResult(req);
  // If there are errors, return a 400 error with the errors
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
// If there are no errors, get the name, email and password from the request body and log them
  res.send('User route');
});
// Export the router so it can be used in other parts of the application
module.exports = router; 
