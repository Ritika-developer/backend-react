import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="luxury-navbar">

      {/* ===== MENU ROW ===== */}
      <div className="menu-row">
        <div className="menu-left">
          <span onClick={() => navigate("/collections")}>COLLECTION</span>
          <span onClick={() => navigate("/contact")}>CONTACT</span>
        </div>
<div className="text-logo" onClick={() => navigate("/")}>
  <span className="logo-ch">CH</span>
  <span className="logo-name">CHOUDHRANI</span>
</div>



        <div className="menu-right">
          <button className="btn-outline" onClick={() => navigate("/login")}>
            LOGIN
          </button>
          <button className="btn-solid" onClick={() => navigate("/register")}>
            REGISTER
          </button>
        </div>
      </div>

    </header>
  );
}
