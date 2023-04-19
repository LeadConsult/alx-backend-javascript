export default function appendToEachArrayValue(array, appendString) {
  array = []
    for (const idx of array) {
      let value = array[idx];
      array[idx] = appendString + value;
    }
  
    return array;
  }