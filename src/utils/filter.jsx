export const filter = (students, searchTerm) => {
  if (!searchTerm) return students;

  return students?.filter(student =>
    student.course.toLowerCase().includes(searchTerm.toLowerCase())
  );
};