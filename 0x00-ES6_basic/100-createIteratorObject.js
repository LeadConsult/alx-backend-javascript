export default class EmployeeIterator {
  constructor(report) {
    this.employees = [];
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        this.employees.push(employee);
      }
    }
    this.index = 0;
  }

  next() {
    if (this.index < this.employees.length) {
      return { value: this.employees[this.index++], done: false };
    }
    return { value: undefined, done: true };
  }
}
