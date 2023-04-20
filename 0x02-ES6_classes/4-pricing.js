import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    if (typeof val !== 'number') throw new TypeError('Amount must be a number');
    this._amount = val;
  }

  get currency() {
    return this._currency;
  }

  set currency(val) {
    if (!(val instanceof Currency)) throw new TypeError('Currency must be an instance of Currency class');
    this._currency = val;
  }

  /**
   * Returns the full price in the format of "{amount} {currency name} ({currency code})"
   * @returns {string} The full price in the format of "{amount} {currency name} ({currency code})"
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   * Converts the given amount based on the conversion rate.
   * @param {number} amount - The amount to convert.
   * @param {number} conversionRate - The conversion rate.
   * @returns {number} The converted amount.
   * @throws {TypeError} If amount or conversionRate is not a number.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}

export default Pricing;
