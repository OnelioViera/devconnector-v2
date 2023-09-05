const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', (rep, res) => res.send('Auth route'))

module.exports = router;