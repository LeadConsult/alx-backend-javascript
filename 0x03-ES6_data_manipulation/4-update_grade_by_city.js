export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    // filter students by city
    .filter((grd) => grd.location === city)
    // for each student
    .map((person) => {
      // search for their new grade
      const grades = newGrades.filter((grd) => grd.studentId === person.id);
      // assign new grade or "N/A"
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...person,
        // update student object with new grade
        grade,
      };
    });
}