const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
    it("check that Utils.calculateNumber is stubbed", function() {
        // Create a spy to monitor console.log calls
        const spy = sinon.spy(console, "log");

        // Create a stub for the calculateNumber function and make it return 10
        const stub = sinon.stub(Utils, "calculateNumber").returns(10);

        // Call the sendPaymentRequestToApi function
        sendPaymentRequestToApi(100, 20);

        // Assert that console.log was called with the expected output
        assert(spy.withArgs("The total is: 10").calledOnce);

        // Assert that calculateNumber was called with the expected arguments
        assert(stub.withArgs("SUM", 100, 20).calledOnce);

        // Restore the spy and stub
        spy.restore();
        stub.restore();
    });
});
