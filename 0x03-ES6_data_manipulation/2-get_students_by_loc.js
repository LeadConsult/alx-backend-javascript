// This function returns a list of students in the specified city.
export default function getStudentsByLocation(students, city) {
  
  // Filter the students by location.
  const studentsInCity = students.filter(student => {
    
    // Check if the student's location matches the city.
    return student.location === city;
  });

  // Return the filtered list of students.
  return studentsInCity;
}
