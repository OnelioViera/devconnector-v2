// Import the express.js library
const express = require('express');
// Import the express.Router() function
const router = express.Router();
// Import gravatar
const gravatar = require('gravatar');
// Import bcrypt
const bcrypt = require('bcryptjs');
// Import jsonwebtoken
const jwt = require('jsonwebtoken');
// Import express validator
const { check, validationResult } = require('express-validator');
// Import the User model 
const User = require('../../models/Users');
// Import the config package
const config = require('config');

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
async (req, res) => {

  // Check for request validation errors and return 400 error with the errors if any
  const errors = validationResult(req);

  // If there are errors, return a 400 error with the errors
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (user) {
      // If user exists, return a 400 error with the message
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }

    // Get the gravatar of the user
    const avatar = gravatar.url(email, {
      // Size
      s: '200',
      // Rating
      r: 'pg',
      // Default
      d: 'mm'
    });

    user = new User({
      name,
      email,
      avatar,
      password
    });

    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password
    user.password = await bcrypt.hash(password, salt);

    // Save the user to the database
    await user.save();

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

// Export the router so it can be used in other parts of the application
module.exports = router; // Corrected 'module.exports'
