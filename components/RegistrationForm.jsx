import { useState } from "react";

function RegistrationForm({ addStudent }) {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !age || !course || !year) return;

    addStudent({
      id: Date.now(),
      name,
      age,
      course,
      year
    });

    setName("");
    setAge("");
    setCourse("");
    setYear("");
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
        type="number"
        placeholder="Student Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        min="0"
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