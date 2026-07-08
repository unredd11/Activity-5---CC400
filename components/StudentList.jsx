import StudentProfile from "./StudentProfile";

function StudentList({ students, deleteStudent }) {

  if (students.length === 0) {
    return <p>No students registered.</p>;
  }

  return (
    <div>

      {students.map(student => (
        <StudentProfile
          key={student.id}
          student={student}
          deleteStudent={deleteStudent}
        />
      ))}

    </div>
  );
}

export default StudentList;