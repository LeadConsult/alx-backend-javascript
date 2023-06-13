const fs = require('fs');

function countStudents(fileName) {
  const students = {};  // Object to store students in each field
  const fields = {};    // Object to store count of students in each field
  let length = 0;       // Variable to store the total number of students

  try {
    const read_file = fs.readFileSync(fileName, 'utf-8');  
    // Read the file synchronously
    const to_lines = read_file.toString().split('\n');         
    // Split the read_file into to_lines

    for (let i = 0; i < to_lines.length; i += 1) {
      if (to_lines[i]) {
        length += 1;
        const field = to_lines[i].toString().split(',');     
        // Split the line into fields

        // Update the students object with the student's name under
        // the corresponding field
        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }

        // Update the fields object by incrementing the count for
        // the corresponding field
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      }
    }

    const l = length - 1;
    console.log(`Number of students: ${l}`);

    // Output the count and list of students for each field
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: \
        ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
