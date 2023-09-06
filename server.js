// Import the express.js library
const express = require('express');
// Import function to connect to the database
const connectDB = require('./config/db');

// Create an Express application instance
const app = express();

// Connect Database using the import function
connectDB();

// Init Middleware to parse the JSON data from request body
app.use(express.json({ extended: false }));

// Define the default route that responds with 'API Running' when a GET request is made to the root URL: http://localhost:5000/
app.get('/', (req, res) => res.send('API Running'));

// Define Routes
// app.use('/api/users', require('./routes/api/users'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Define the port to run the server on
const PORT = process.env.PORT || 5000;

// Start the server andd listen on the specified port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));