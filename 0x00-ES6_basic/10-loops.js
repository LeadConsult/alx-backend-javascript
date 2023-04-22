/**
 * Takes an array of strings and an appending string and returns a new array
 * where each element of the original array is concatenated with the appending string.
 * @param {array} array - The array to modify.
 * @param {string} appendString - The string to append to each element.
 * @returns {array} - A new array with the modified elements.
 */

export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const idx of array) {
    newArray.push(appendString + idx);
  }
  return newArray;
}
