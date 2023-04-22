/* eslint-disable radix */
export default function iterateThroughObject(reportWithIterator) {
  return Array.from(reportWithIterator, employee => `${employee.firstName} ${employee.lastName}`).join(' | ');
}
// This function iterates through the reportWithIterator object using the Array.from method, 
// maps each employee object to a string containing the first name and last name, 
// and then joins the strings using a pipe separator.
