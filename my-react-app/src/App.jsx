import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import PaginationPage from "./components/PaginationPage";
import FilterPage from "./components/FilterPage";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null); // <-- for editing

  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/">Add Student</Link>
        <Link to="/view">View Students</Link>
        <Link to="/pagination">Pagination</Link>
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

        <Route path="/pagination" element={<PaginationPage students={students} />} />
        <Route path="/filter" element={<FilterPage students={students} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
