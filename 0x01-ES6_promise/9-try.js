/**
 * Executes the given math function and returns its result, along with a success or error message.
 * @param {function} mathFunction - The math function to execute.
 * @returns {array} - An array containing the result of the math function, and a success or error message.
 */
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(`The result is: ${result}`);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
