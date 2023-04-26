// Create a new instance of WeakMap and name it weakMap
const weakMap = new WeakMap();

// Define a new function named queryAPI which accepts an endpoint argument
const queryAPI = (endpoint) => {
  // Get the current value of total for the given endpoint, or 0 if it doesn't exist
  let total = weakMap.get(endpoint) || 0;

  // Increment total by 1 and set it as the new value for the endpoint in the weakMap
  weakMap.set(endpoint, total -= -1);

  // If the total for the endpoint is greater than or equal to 5, throw an error
  if (total >= 5) throw new Error('Endpoint load is high');

  // Return the current value of total
  return total;
};

// Export the weakMap and queryAPI functions for use in other modules
export { weakMap, queryAPI };
