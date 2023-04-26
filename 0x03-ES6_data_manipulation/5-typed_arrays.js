// This function creates a new Int8TypedArray with the given length, initializes it with the given value at the given position, and returns a DataView of the new ArrayBuffer.

export default function createInt8TypedArray(length, position, value) {
  // Check if the given position is outside the range of the typed array.
  if (position < 0 || position >= length) {
  throw Error('Position outside range');
  }
  
  // Create a new ArrayBuffer with the given length.
  const newBuffer = new ArrayBuffer(length);
  
  // Create a new Int8Array using the newBuffer and initialize it with the given length.
  const int8 = new Int8Array(newBuffer, 0, length);
  
  // Set the given value at the given position in the Int8Array.
  int8.set([value], position);
  
  // Return a DataView of the new ArrayBuffer.
  return new DataView(newBuffer);
  }