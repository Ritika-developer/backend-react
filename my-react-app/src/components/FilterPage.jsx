import { useState, useEffect } from "react";

function FilterPage() {
  const [text, setText] = useState("");
  const [records, setRecords] = useState([]);

  useEffect(() => {
    if (text.trim() !== "") {
      fetch(`http://localhost:8080/api/filter?clas=${text}`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => setRecords(data));
    } else {
      setRecords([]);
    }
  }, [text]);

  return (
    <div className="card">
      <h2>Filter Students (by Class)</h2>

      <input
        className="filter-input"
        placeholder="Enter class to search..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {text.trim() === "" ? (
        <p style={{ marginTop: "20px", opacity: "0.7" }}>
          Type a class name to search…
        </p>
      ) : records.length === 0 ? (
        <p style={{ marginTop: "20px" }}>No matching records…</p>
      ) : (
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
            {records.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.clas}</td>
                <td>{s.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default FilterPage;
