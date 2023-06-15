const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const expect = require("chai").expect;

describe("sendPaymentRequestToApi", function() {
    // Set up a spy for console.log before each test
    beforeEach("Set up spy to use for each test", function() {
        sinon.spy(console, "log");
    });
    
    // Restore the spy after each test
    afterEach("restore spy after each test", function() {
        console.log.restore();
    });
    
    // Test case 1
    it("check that console.log is called with the right arg", function() {
        sendPaymentRequestToApi(100, 20);

        // Expect console.log to be called with the specified argument
        expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
    });
    
    // Test case 2
    it("check that console.log is called with the right arg", function() {
        sendPaymentRequestToApi(10, 10);

        // Expect console.log to be called with the specified argument
        expect(console.log.withArgs("The total is: 20").calledOnce).to.be.true;
    });
});
