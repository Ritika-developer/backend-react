import React from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Student Management</h1>

      <div className="section">
        <div className="card">
          <StudentForm />
        </div>

        <div className="card">
          <StudentList />
        </div>
      </div>
    </div>
  );
}

export default App;
