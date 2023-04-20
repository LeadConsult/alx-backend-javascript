import Building from './5-building';

// A subclass of Building representing a skyscraper building
export default class Skyscraper extends Building {
  constructor(sqft, floors) {
    // Ensure that floors is a number
    if (typeof floors !== 'number') {
      throw new Error('The number of floors must be a number');
    }
    super(sqft); // Call the constructor of the base class
    this._floors = floors;
  }

  // Getter method for floors
  get floors() {
    return this._floors;
  }

  // Setter method for floors
  set floors(value) {
    this._floors = value;
  }

  // Override the evacuationWarningMessage method of the base class
  evacuationWarningMessage() {
    // Return the evacuation message for a skyscraper building
    return `Evacuate the ${this.floors} floors of the building slowly`;
  }
}
