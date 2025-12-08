import { useState, useEffect } from "react";

function StudentForm({ students, setStudents, editStudent, setEditStudent }) {
  const [name, setName] = useState("");
  const [clas, setClas] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (editStudent) {
      setName(editStudent.name);
      setClas(editStudent.clas);
      setAddress(editStudent.address);
    }
  }, [editStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editStudent) {
      // UPDATE
      fetch(`http://localhost:8080/api/update/${editStudent.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, clas, address }),
      })
        .then((res) => res.json())
        .then((updated) => {
          setStudents(
            students.map((s) => (s.id === updated.id ? updated : s))
          );
          setEditStudent(null);
          setName("");
          setClas("");
          setAddress("");
        });
    } else {
      // ADD
      fetch("http://localhost:8080/api/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, clas, address }),
      })
        .then((res) => res.json())
        .then((saved) => {
          setStudents([...students, saved]);
          setName("");
          setClas("");
          setAddress("");
        });
    }
  };

  return (
    <div className="card">
      <h2>{editStudent ? "Edit Student" : "Add Student"}</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Class</label>
        <input
          value={clas}
          onChange={(e) => setClas(e.target.value)}
          required
        />

        <label>Address</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <button type="submit" className="btn">
          {editStudent ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
