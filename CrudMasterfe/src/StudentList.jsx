import React, { useEffect, useState } from "react";


function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/get")
      .then((res) => res.json())
      .then((data) => {
        console.log("API DATA:", data);
        setStudents(data);
      })
      .catch((err) => console.log("FETCH ERROR:", err));
  }, []);

  return (
    <div className="list-container">
      <h2>Student List</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Password</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.pass}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
