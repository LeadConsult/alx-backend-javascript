// Define the Building class
export default class Building {
  // The constructor function accepts the square footage of the building as its only parameter
  constructor(sqft) {
    // If the square footage parameter is not a number, throw an error
    if (typeof sqft !== 'number') throw new Error();
    // Set the square footage property
    this._sqft = sqft;
    // Call the evacuationWarningMessage method
    this.evacuationWarningMessage();
  }

  // Define a getter for the square footage property
  get sqft() {
    return this._sqft;
  }

  // Define a setter for the square footage property
  set sqft(value) {
    this._sqft = value;
  }

  // Define the evacuationWarningMessage method as an empty method that should be overridden by any class that extends the Building class
  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
