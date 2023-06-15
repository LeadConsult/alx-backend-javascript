const getPaymentTokenFromAPI = require("./6-payment_token");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe("getPaymentTokenFromAPI", function() {
	it("should return payment token data when success is true", function(done) {
		// Verify that the getPaymentTokenFromAPI function returns 
		// payment token data when success is true
		getPaymentTokenFromAPI(true)
			.then((data) => {
				expect(data).to.have.property('data');
				done();
			});
	});	
});
