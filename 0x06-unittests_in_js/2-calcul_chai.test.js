const expect = require("chai").expect;
const { describe, it } = require("mocha");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function() {
    // Test suite for the "SUM" operation
    describe("SUM", function() {
        it("checking if numbers round", function() {
            // Test the "SUM" operation with input values 1 and 2
            // Expect the result to be 3
            expect(calculateNumber("SUM", 1, 2)).to.equal(3);
        });

        it("checking if numbers round", function() {
            // Test the "SUM" operation with input values 1.6 and 2.6
            // Expect the result to be 5
            expect(calculateNumber("SUM", 1.6, 2.6)).to.equal(5);
        });
    });

    // Test suite for the "SUBTRACT" operation
    describe("SUBTRACT", function() {
        it("checking if numbers round", function() {
            // Test the "SUBTRACT" operation with input values 1.4 and 2.3
            // Expect the result to be -1
            expect(calculateNumber("SUBTRACT", 1.4, 2.3)).to.equal(-1);
        });

        it("checking if numbers round", function() {
            // Test the "SUBTRACT" operation with input values 4.9 and 2.7
            // Expect the result to be 2
            expect(calculateNumber("SUBTRACT", 4.9, 2.7)).to.equal(2);
        });

        it("checking if numbers round", function() {
            // Test the "SUBTRACT" operation with input values -4.9 and -2.7
            // Expect the result to be -2
            expect(calculateNumber("SUBTRACT", -4.9, -2.7)).to.equal(-2);
        });
    });

    // Test suite for the "DIVIDE" operation
    describe("DIVIDE", function() {
        it("checking if numbers round", function() {
            // Test the "DIVIDE" operation with input values 4 and 2
            // Expect the result to be 2
            expect(calculateNumber("DIVIDE", 4, 2)).to.equal(2);
        });

        it("checking if numbers round", function() {
            // Test the "DIVIDE" operation with input values 4.6 and 1.8
            // Expect the result to be 2.5
            expect(calculateNumber("DIVIDE", 4.6, 1.8)).to.equal(2.5);
        });

        it("checking if numbers round", function() {
            // Test the "DIVIDE" operation with input values 4 and 0
            // Expect the result to be "Error"
            expect(calculateNumber("DIVIDE", 4, 0)).to.equal("Error");
        });
    });
});
