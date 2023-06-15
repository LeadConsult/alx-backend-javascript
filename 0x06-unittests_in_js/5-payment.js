const Utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    // Call the calculateNumber function from the Utils module with type "SUM"
    const result = Utils.calculateNumber("SUM", totalAmount, totalShipping);

    // Log the result to the console
    console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
