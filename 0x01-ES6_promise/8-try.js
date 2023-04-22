// This function takes in two parameters, numerator and denominator, and returns their quotient
// If the denominator is zero, it will throw an error
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) 
    throw new Error('cannot divide by 0');
  return numerator / denominator;
}
