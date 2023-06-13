// Import the express module
const express = require('express');
const { readFile } = require('fs');

// Create an instance of the express application
const app = express();
const port = 1245;

// Function to count students from a file
function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    // Read the file
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let output = '';
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        const l = length - 1;
        output += `Number of students: ${l}\n`;
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for the '/students' URL
app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString())
    .then((output) => {
      res.send(['This is the list of our students', output].join('\n'));
    })
    .catch(() => {
      res.send('This is the list of our students\nCannot load the database');
    });
});

// Start the server and listen on the specified port
app.listen(port, () => {
});

// Export the 'app' variable to be used by other modules
module.exports = app;
