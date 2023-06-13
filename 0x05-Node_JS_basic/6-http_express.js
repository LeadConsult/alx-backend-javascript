// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server and listen on port 1245
app.listen(1245);

// Export the 'app' variable to be used by other modules
module.exports = app;
