/**
 * Creates an object where the key is the department name and the value is an array of employees.
 * @param {string} departmentName - The name of the department.
 * @param {array} employees - An array of employee objects.
 * @returns {object} - An object where the key is the department name and the value is an array of employees.
 */
export default function createEmployeesObject(departmentName, employees) {
  const employeesArray = employees.map((employee) => ({
    ...employee,
    department: departmentName,
  }));
  return {
    [departmentName]: employeesArray,
  };
}
