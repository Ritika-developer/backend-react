import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-left" onClick={() => navigate("/dashboard")}>
        👑 CHOUDHRANI
      </div>

      <div className="nav-right">
        <span onClick={() => navigate("/products")}>Sarees</span>
        <span onClick={() => navigate("/cart")}>🛒 Cart</span>
        <span onClick={() => navigate("/profile")}>👤 Profile</span>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}
