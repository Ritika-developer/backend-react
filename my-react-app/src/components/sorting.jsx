import { useState } from "react";

function SortPage({ students, setStudents }) {
  const [direction, setDirection] = useState("asc");
  const [field, setField] = useState(null);

  const sortData = (fieldName) => {
    const newDirection =
      field === fieldName && direction === "asc" ? "desc" : "asc";

    fetch(
      `http://localhost:8080/api/sort?field=${fieldName}&direction=${newDirection}`,
      { method: "POST" }
    )
      .then((res) => res.json())
      .then((data) => {
        setStudents(data); // sorted list saved
        setDirection(newDirection);
        setField(fieldName);
      });
  };

  return (
    <div className="card">
      <h2>Sorting</h2>

      <div className="sort-buttons">
        <button className="btn" onClick={() => sortData("id")}>
          Sort by ID ({direction})
        </button>

        <button className="btn" onClick={() => sortData("name")}>
          Sort by Name ({direction})
        </button>

        <button className="btn" onClick={() => sortData("clas")}>
          Sort by Class ({direction})
        </button>
      </div>

      {/* TABLE SHOWING SORTED DATA */}
      <table className="table" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.clas}</td>
              <td>{s.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SortPage;
