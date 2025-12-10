import React, { useState } from "react";


function StudentForm() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const student = { name, pass };

    fetch("http://localhost:8080/api/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    })
      .then(() => {
        alert("Student Saved Successfully!");
        setName("");
        setPass("");
      })
      .catch((err) => console.log("ERROR:", err));
  };

  return (
    <div className="form-container">
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Enter Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default StudentForm;
