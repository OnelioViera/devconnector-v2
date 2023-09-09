// import jwt
const jwt = require('jsonwebtoken');
// import config
const config = require('config');

// export middleware function
module.exports = function(req, res, next) {
  // Get the token from the header
  const token = req.header('x-auth-token');

  // Check if no token
  if(!token) {
    // Return 401 status and message
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify the token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    // Set the user in the request
    req.user = decoded.user;
    // Call next
    next();
  } catch (err) {
    res.status(401).json({ meg: 'Token is not valid'});
  }
};


