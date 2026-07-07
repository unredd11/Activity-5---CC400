import { useState } from "react";

function RegistrationForm({ addStudent }) {

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [year, setCourse] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || course === "") return;

    addStudent({
      id: Date.now(),
      name,
      course
    });

    setName("");
    setCourse("");
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(parseInt(e.target.value) || "")}
      />

      <button>Add Student</button>

    </form>
  );
}

export default RegistrationForm;