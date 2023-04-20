/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */

// define the HolbertonClass
export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

// define the StudentHolberton class
export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this.fullName} - ${this.holbertonClass.year} - ${this.holbertonClass.location}`;
  }
}

// create some instances of the classes
const class2021 = new HolbertonClass(2021, 'San Francisco');
const class2022 = new HolbertonClass(2022, 'New York');

const student1 = new StudentHolberton('Alice', 'Smith', class2021);
const student2 = new StudentHolberton('Bob', 'Johnson', class2021);
const student3 = new StudentHolberton('Charlie', 'Brown', class2022);

// create an array of the students
const listOfStudents = [student1, student2, student3];

// export the array of the students as default
export default listOfStudents;
