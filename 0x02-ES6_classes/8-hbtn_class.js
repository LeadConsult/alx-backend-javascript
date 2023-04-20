// Code 3:
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size; // initialize the size property with the provided size value
    this._location = location; // initialize the location property with the provided location value
  }

  get size() { // getter for the size property
    return this._size;
  }

  set size(value) { // setter for the size property
    if (typeof value !== 'number') throw new Error(); // validate that the value is of type number
    this._size = value; // set the size property to the provided value
  }

  get location() { // getter for the location property
    return this._location;
  }

  set location(value) { // setter for the location property
    if (typeof value !== 'string') throw new Error(); // validate that the value is of type string
    this._location = value; // set the location property to the provided value
  }

  valueOf() { // method that returns the value of the size property
    return this._size;
  }

  toString() { // method that returns the value of the location property
    return this._location;
  }
}