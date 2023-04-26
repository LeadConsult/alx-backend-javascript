/* eslint-disable array-callback-return */
export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    // If the start string is undefined or empty, return an empty string.
    return '';
    }
    
    return [...set]
    // Spread the set into an array.

    .filter((str) => (str !== undefined ? str.startsWith(startString) : ''))
    // Filter the array to keep only the strings that start with the start string.

    .map((str) => (str !== undefined ? str.slice(startString.length) : ''))
    // Map the array to remove the prefix from each string.
    
    .join('-');
    // Join the array of strings with a hyphen.
    }
