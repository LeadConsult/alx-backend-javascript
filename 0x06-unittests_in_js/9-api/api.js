const express = require('express');

// Create an instance of express called app
const app = express();

// Listen to port 7865
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

// Route GET /
app.get('/', (req, res) => {
  // Return the message "Welcome to the payment system"
  res.send('Welcome to the payment system');
});
