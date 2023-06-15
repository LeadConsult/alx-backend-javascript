const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    // Test case: checking if no. are rounded correctly
    it('checking if no. are rounded correctly', function() {
        const res = calculateNumber(1, 2);
        assert.strictEqual(res, 3);
    });
    
    // Test case: checking if no. are rounded correctly with decimal values
    it('checking if no. are rounded correctly with decimal values', function() {
        const res = calculateNumber(1.4, 2.2);
        assert.strictEqual(res, 3);
    });
    
    // Test case: checking if no. are rounded correctly with decimal values
    it('checking if no. are rounded correctly with decimal values', function() {
        const res = calculateNumber(1.6, 2.7);
        assert.strictEqual(res, 5);
    });
    
    // Test case: checking if no. are rounded correctly when both are zero
    it('checking if no. are rounded correctly when both are zero', function() {
        const res = calculateNumber(0, 0);
        assert.strictEqual(res, 0);
    });
    
    // Test case: checking if no. are rounded correctly with negative decimal values
    it('checking if no. are rounded correctly with negative decimal values', function() {
        const res = calculateNumber(-1.6, -1.7);
        assert.strictEqual(res, -4);
    });
    
    // Test case: checking if no. are rounded correctly with negative decimal values
    it('checking if no. are rounded correctly with negative decimal values', function() {
        const res = calculateNumber(-1.4, -1.3);
        assert.strictEqual(res, -2);
    });
});
