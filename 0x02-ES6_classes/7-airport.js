// Define a class called "Airport"
export default class Airport {
  // Constructor with "name" and "code" parameters
  constructor(name, code) {
    // Check if "name" and "code" are both strings, otherwise throw an error
    if (typeof name !== 'string' || typeof code !== 'string') throw new Error();
    // Set the "_name" and "_code" properties of the new object to the values passed in
    this._name = name;
    this._code = code;
  }

  // Getter and Setter methods for the "name" property
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // Getter and Setter methods for the "code" property
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get [Symbol.toStringTag]() {
    return this.code;
  }
}


 