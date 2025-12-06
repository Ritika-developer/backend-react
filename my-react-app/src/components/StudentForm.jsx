import { useState, useEffect } from "react";

function StudentForm({ students, setStudents, editStudent, setEditStudent }) {
  const [name, setName] = useState("");
  const [clas, setClas] = useState("");
  const [address, setAddress] = useState("");

  // Prefill when editing
  useEffect(() => {
    if (editStudent) {
      setName(editStudent.name);
      setClas(editStudent.clas);
      setAddress(editStudent.address);
    }
  }, [editStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !clas || !address) {
      alert("All fields are required!");
      return;
    }

    if (editStudent) {
      // Update student data
      const updated = students.map((s) =>
        s.id === editStudent.id ? { ...s, name, clas, address } : s
      );

      setStudents(updated);
      setEditStudent(null);
      alert("Student Updated!");
    } 
    else {
      // Add new student
      const newStudent = {
        id: Date.now(),
        name,
    clas,
        address
      };

      setStudents([...students, newStudent]);
      alert("Student Added!");
    }

    setName("");
    setClas("");
    setAddress("");
  };

  return (
    <div className="card">
      <h2>{editStudent ? "Edit Student" : "Add Student"}</h2>

      <form onSubmit={handleSubmit}>

        <label>Name</label>
        <input
          required
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Class</label>
        <input
          required
          placeholder="Enter Class"
          value={clas}
          onChange={(e) => setClas(e.target.value)}
        />

        <label>Address</label>
        <input
          required
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <button className="btn" type="submit">
          {editStudent ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
