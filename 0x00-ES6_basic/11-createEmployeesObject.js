//  Creates an object where the key is the department name and the value is an array of employees.
export default function createEmployeesObject(departmentName, employees) {
  const employeesArray = employees.map((employee) => ({
    ...employee,
    department: departmentName,
  }));
  return {
    [departmentName]: employeesArray,
  };
}
