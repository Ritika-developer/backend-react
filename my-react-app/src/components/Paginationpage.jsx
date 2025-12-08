import { useState, useEffect } from "react";

function PaginationPage() {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/page?pg=${page}&size=${size}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setRecords(data));
  }, [page, size]);

  return (
    <div className="card">
      <h2>Pagination</h2>

      <label>Page Size:</label>
      <select
        className="dropdown"
        value={size}
        onChange={(e) => {
          setSize(Number(e.target.value));
          setPage(0);
        }}
      >
        <option value={3}>3</option>
        <option value={5}>5</option>
        <option value={8}>8</option>
        <option value={10}>10</option>
      </select>

      <label style={{ marginTop: "15px" }}>Page Number:</label>
      <input
        type="number"
        min="0"
        className="page-input"
        value={page}
        onChange={(e) => setPage(Number(e.target.value))}
      />

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {records.length === 0? (
            <tr>
              <td colSpan="4">No Data</td>
            </tr>
          ) : (
            records.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.clas}</td>
                <td>{s.address}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PaginationPage;
