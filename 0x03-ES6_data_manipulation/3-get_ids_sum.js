export default function getStudentIdsSum(list) {
  // Use the reduce method to sum the student IDs
  return list.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
