function calculateNumber(type, a, b) {
    // Round the values of 'a' and 'b' using Math.round()
    const anum = Math.round(a);
    const bnum = Math.round(b);

    let c = 0;

    // Perform different calculations based on the 'type' parameter
    switch (type) {
        case 'SUM':
            c = anum + bnum;
            break;
        case 'SUBTRACT':
            c = anum - bnum;
            break;
        case 'DIVIDE':
            if (bnum === 0) {
                c = "Error";
            } else {
                c = anum / bnum;
            }
            break;
    }

    // Return the calculated result
    return c;
}

// Export the calculateNumber function to be used in other modules
module.exports = calculateNumber;
