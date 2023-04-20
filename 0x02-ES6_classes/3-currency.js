/**
 * Currency class represents a currency with its code and name.
 */
export default class Currency {
  /**
   * Constructs a new Currency object with the given code and name.
   * @param {string} code - The currency code.
   * @param {string} name - The currency name.
   * @throws {Error} Throws an error if the code or name is not a string.
   */
  constructor(code, name) {
    if (typeof code !== 'string' || typeof name !== 'string') {
      throw new Error('Code and name must be strings.');
    }
    this._code = code;
    this._name = name;
  }

  /**
   * Returns the currency name.
   * @returns {string} The currency name.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the currency name.
   * @param {string} val - The new name to be set.
   * @throws {Error} Throws an error if val is not a string.
   */
  set name(val) {
    if (typeof val !== 'string') {
      throw new Error('Name must be a string.');
    }
    this._name = val;
  }

  /**
   * Returns the currency code.
   * @returns {string} The currency code.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the currency code.
   * @param {string} val - The new code to be set.
   * @throws {Error} Throws an error if val is not a string.
   */
  set code(val) {
    if (typeof val !== 'string') {
      throw new Error('Code must be a string.');
    }
    this._code = val;
  }

  /**
   * Returns the full currency string representation.
   * @returns {string} The full currency string representation.
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
