import { useNavigate } from "react-router-dom";

function StudentList({ students, setStudents, setEditStudent }) {
  const navigate = useNavigate();

  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  const editStudentData = (student) => {
    setEditStudent(student);
    navigate("/"); // form page open
  };

  return (
    <div className="card">
      <h2>Students List</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.clas}</td>
              <td>{s.address}</td>
              <td>
                <button className="edit" onClick={() => editStudentData(s)}>
                  Edit
                </button>
                <button className="delete" onClick={() => deleteStudent(s.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default StudentList;
