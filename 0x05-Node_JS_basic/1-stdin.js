// Output a welcome message to the console
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Event listener for readable event on stdin
process.stdin.on('readable', () => {
  // Read the input from stdin
  const name = process.stdin.read();
  if (name !== null) {
    // Output the user's name to the console
    process.stdout.write(`Your name is: ${name}`);
  }
});

// Event listener for end event on stdin
process.stdin.on('end', () => {
  // Output a closing message to the console
  process.stdout.write('This important software is now closing\n');
});
