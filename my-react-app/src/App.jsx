import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import PaginationPage from "./components/Paginationpage";
import SortPage from "./components/sorting";
import FilterPage from "./components/FilterPage";

function App() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

 useEffect(() => {
  console.log("Fetching data from backend...");

  fetch("http://localhost:8080/api/get")
    .then(res => res.json())
    .then(data => {
      console.log("Data received:", data);
      setStudents(data);
    })
    .catch(err => console.log("Error:", err));
}, []);


  return (
    <>
      <nav className="navbar">
        <Link to="/">Add Student</Link>
        <Link to="/view">View Students</Link>
        <Link to="/pagination">Pagination</Link>
        <Link to="/sort">Sort</Link>
        <Link to="/filter">Filter</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <StudentForm
              students={students}
              setStudents={setStudents}
              editStudent={editStudent}
              setEditStudent={setEditStudent}
            />
          }
        />

        <Route
          path="/view"
          element={
            <StudentList
              students={students}
              setStudents={setStudents}
              setEditStudent={setEditStudent}
            />
          }
        />

        <Route path="/pagination" element={<PaginationPage />} />
      <Route 
  path="/sort" 
  element={<SortPage students={students} setStudents={setStudents} />} 
/>

        <Route path="/filter" element={<FilterPage />} />
      </Routes>
    </>
  );
}

export default App;
