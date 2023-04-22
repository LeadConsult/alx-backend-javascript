/**
 * Creates an object that includes all employees and the number of departments.
 * @param {object} employeesList - An object with department names as keys and arrays of employees as values.
 * @returns {object} - An object that includes all employees and the number of departments.
 */

export default function createReportObject(employeesList) {
  const allEmployees = Object.values(employeesList).flat();
  return {
    allEmployees,
    numberOfDepartments: Object.keys(employeesList).length,
  };
}
