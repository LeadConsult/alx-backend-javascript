/**
 * Represents a car object.
 */
export default class Car {
  /**
   * Creates a new car object.
   * @param {string} brand - The car brand.
   * @param {string} motor - The car motor.
   * @param {string} color - The car color.
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   * Clones the current car object.
   * @returns {Car} - A new car object with the same properties.
   */
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }

  /**
   * Gets the brand of the car.
   * @returns {string} - The brand of the car.
   */
  get brand() {
    return this._brand;
  }

  /**
   * Gets the motor of the car.
   * @returns {string} - The motor of the car.
   */
  get motor() {
    return this._motor;
  }

  /**
   * Gets the color of the car.
   * @returns {string} - The color of the car.
   */
  get color() {
    return this._color;
  }

  /**
   * Sets the brand of the car.
   * @param {string} brand - The new brand of the car.
   */
  set brand(brand) {
    this._brand = brand;
  }

  /**
   * Sets the motor of the car.
   * @param {string} motor - The new motor of the car.
   */
  set motor(motor) {
    this._motor = motor;
  }

  /**
   * Sets the color of the car.
   * @param {string} color - The new color of the car.
   */
  set color(color) {
    this._color = color;
  }
}
