// Import the 'http' module
const http = require('http');

// Set the hostname and port number
const hostname = 'localhost';
const port = 1245;

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the response status code to 200
  res.statusCode = 200;
  // Set the 'Content-Type' header to 'text/plain'
  res.setHeader('Content-Type', 'text/plain');
  // Send the response with the message 'Hello Holberton School!'
  res.end('Hello Holberton School!');
});

// Start the server and listen on the specified port and hostname
app.listen(port, hostname, () => {
  // Log a message indicating the server is running
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Export the 'app' variable to be used by other modules
module.exports = app;
