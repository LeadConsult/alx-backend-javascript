const fs = require('fs');

function countStudents(fileName) {
  const students = {}; // Object to store students by field
  const fields = {}; // Object to store field counts
  let length = 0; // Total number of students

  try {
    // Read the file synchronously
    const fileContents = fs.readFileSync(fileName, 'utf-8'); 
    const lines = fileContents.toString().split('\n'); 
    // Split the file contents into lines

    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i]) {
        length += 1; // Increment the total number of students

        const field = lines[i].toString().split(',');
        // Split the line into fields
        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          // Check if the field already exists in the students object
          students[field[3]].push(field[0]); 
          // Add the student to the existing field
        } else {
          students[field[3]] = [field[0]];
          // Create a new field and add the student
        }

        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          // Check if the field already exists in the fields object
          fields[field[3]] += 1; // Increment the field count
        } else {
          fields[field[3]] = 1; // Create a new field and set the count to 1
        }
      }
    }

    const l = length - 1;
    // Subtract 1 from the length to exclude the header line
    console.log(`Number of students: ${l}`);
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List:\
         ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
