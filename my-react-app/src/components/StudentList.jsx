import { useNavigate } from "react-router-dom";

function StudentList({ students, setStudents, setEditStudent }) {
  const navigate = useNavigate();

  const deleteStudent = (id) => {
    fetch(`http://localhost:8080/api/del/${id}`, {
      method: "DELETE",
    }).then(() => {
      setStudents(students.filter((s) => s.id !== id));
    });
  };

  const editStudentData = (student) => {
    setEditStudent(student);
    navigate("/");
  };

  return (
    <div className="card">
      <h2>Students List</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.clas}</td>
              <td>{s.address}</td>
              <td>
                <button
                  className="btn edit"
                  onClick={() => editStudentData(s)}
                >
                  Edit
                </button>
                <button
                  className="btn delete"
                  onClick={() => deleteStudent(s.id)}
                >
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
