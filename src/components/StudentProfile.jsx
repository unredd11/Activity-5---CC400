function StudentProfile({ student, deleteStudent}){

    return(
    <div className="sprof">

        <h3>{student.name}</h3>
        <p>Age: {student.age}</p>
        <p>Course: {student.course}</p>
        <p>Year: {student.year}</p>
        
        <button onClick={() => deleteStudent(student.id)}>
            delete
        </button>

    </div>

    );

}
export default StudentProfile;