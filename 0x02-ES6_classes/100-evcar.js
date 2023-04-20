import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  /**
   * Creates and returns a new instance of EVCar with the same properties.
   * @returns {EVCar} A new instance of EVCar with the same properties.
   */
  cloneCar() {
    return new EVCar(this._brand, this._motor, this._color, this._range);
  }
}
