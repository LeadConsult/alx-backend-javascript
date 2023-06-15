const { describe, it } = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
    it("check that Utils.calculateNumber was called once", function() {
        // Create a spy for the `calculateNumber` function from the
		//  `Utils` module
        const spy = sinon.spy(Utils, "calculateNumber");

        // Call the function under test
        sendPaymentRequestToApi(50, 24.52);

        // Assert that the `calculateNumber` spy was called once
        assert(spy.calledOnce);

        // Restore the spy to its original implementation
        spy.restore();
    });
});
