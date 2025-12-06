import { useState } from "react";

function PaginationPage({ students }) {

  const [page, setPage] = useState(0);
  const size = 5;

  const start = page * size;
  const end = start + size;

  const visible = students.slice(start, end);

  return (
    <div className="container">
      <h2>Pagination</h2>

      {visible.map((s) => (
        <p key={s.id}>{s.name} — Class {s.clas}</p>
      ))}

      <div className="pagination">
        <button disabled={page === 0} onClick={() => setPage(page - 1)}>
          Prev
        </button>

        <span>Page {page + 1}</span>

        <button disabled={end >= students.length} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginationPage;
