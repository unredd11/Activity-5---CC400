import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import StudentList from "./components/StudentList";
import StudentCounter from "./components/StudentCounter";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  function addStudent(student) {
    setStudents([...students, student]);
  }

  function deleteStudent(id) {
    setStudents(students.filter(student => student.id !== id));
  }

  return (
    <div className="container">

      <div className="header">
        <h1>Student Directory</h1>

        <StudentCounter total={students.length} />
      </div>

    <div className="content">
    <div className="left">
        <RegistrationForm addStudent={addStudent} />
    </div>

    <div className="right">
        <StudentList
            students={students}
            deleteStudent={deleteStudent}
        />
    </div>

</div>

    </div>
  );
}

export default App;