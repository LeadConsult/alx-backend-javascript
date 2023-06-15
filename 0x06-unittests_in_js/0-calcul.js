function calculateNumber(a, b) {
  // Round the values of 'a' and 'b' to the nearest integer
  const anum = Math.round(a);
  const bnum = Math.round(b);
  
  // Return the sum of the rounded values
  return anum + bnum;
}

// Export the 'calculateNumber' function as the module's main export
module.exports = calculateNumber;
