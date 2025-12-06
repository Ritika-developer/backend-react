import { useState } from "react";

function FilterPage({ students }) {
  const [text, setText] = useState("");

  const filtered = students.filter(s =>
    s.clas.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Filter Students</h2>

      <input 
        placeholder="Enter class..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {filtered.map((s) => (
        <p key={s.id}>{s.name} — Class {s.clas}</p>
      ))}
    </div>
  );
}

export default FilterPage;
