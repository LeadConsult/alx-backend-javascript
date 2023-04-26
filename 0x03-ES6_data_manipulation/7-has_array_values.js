/* eslint-disable array-callback-return */
// Define a function named hasValuesFromArray that takes in two parameters
export default function hasValuesFromArray(set, array) {
  // Call the 'every' method on the array and pass in a callback function
  // The callback function takes in an element as input and checks if it exists in the 'set' passed as an argument
  // The 'every' method returns 'true' if the callback function returns 'true' for every element in the array
  return array.every((el) => set.has(el));
}

