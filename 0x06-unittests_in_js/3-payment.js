const Utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    // Calculate the total by calling the `calculateNumber`
    //  function from the `Utils` module
    const result = Utils.calculateNumber("SUM", totalAmount, totalShipping);
    // Output the total to the console
    console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
