const Utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    // Call the calculateNumber function from the Utils module
    const result = Utils.calculateNumber("SUM", totalAmount, totalShipping);

    // Log the result to the console
    console.log(`The total is: ${result}`);
}

// Export the sendPaymentRequestToApi function
module.exports = sendPaymentRequestToApi;
