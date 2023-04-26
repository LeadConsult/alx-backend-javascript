export default function groceriesList() {
  // Create a new Map object with grocery items as keys and their 
  // corresponding quantity as values
  return new Map(
    [
      ['Apples', 10], // key: 'Apples', value: 10
      ['Tomatoes', 10], // key: 'Tomatoes', value: 10
      ['Pasta', 1], // key: 'Pasta', value: 1
      ['Rice', 1], // key: 'Rice', value: 1
      ['Banana', 5], // key: 'Banana', value: 5
    ],
  );
}
