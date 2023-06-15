const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {
    // Test case for 'SUM' operation
    it(`checking if numbers round`, function() {
        const res = calculateNumber("SUM", 1, 2);
        assert.strictEqual(res, 3);
    });

    // Test case for 'SUBTRACT' operation
    it(`checking if numbers round`, function() {
        const res = calculateNumber("SUBTRACT", 1.4, 2.2);
        assert.strictEqual(res, -1);
    });

    // Test case for 'SUBTRACT' operation
    it(`checking if numbers round`, function() {
        const res = calculateNumber("SUBTRACT", 4.9, 2.7);
        assert.strictEqual(res, 2);
    });

    // Test case for 'DIVIDE' operation
    it(`checking if numbers round`, function() {
        const res = calculateNumber("DIVIDE", 4, 2);
        assert.strictEqual(res, 2);
    });

    // Test case for 'DIVIDE' operation with division by zero
    it(`checking if numbers round`, function() {
        const res = calculateNumber("DIVIDE", 1.7, 0);
        assert.strictEqual(res, "Error");
    });

    // Test case for 'DIVIDE' operation
    it(`checking if numbers round`, function() {
        const res = calculateNumber("DIVIDE", 1.4, 4.6);
        assert.strictEqual(res, 0.2);
    });
});
