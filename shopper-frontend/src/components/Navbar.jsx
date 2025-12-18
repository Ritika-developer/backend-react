import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/sareeTheme.css";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="nav-logo" onClick={() => navigate("/")}>
        👑 <span>CHOUDHRANI</span>
      </div>

      {/* SEARCH BAR */}
      <div className="nav-search">
        <input placeholder="Search sarees..." />
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* LINKS */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Sarees</Link>

        {/* CART */}
        <div className="cart-icon" onClick={() => navigate("/cart")}>
          🛒
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </div>

        {/* AUTH */}
        {!token ? (
          <Link className="nav-btn" to="/login">Login</Link>
        ) : (
          <div className="profile">
            <div onClick={() => setProfileOpen(!profileOpen)}>👤</div>

            {profileOpen && (
              <div className="profile-menu">
                <div onClick={() => navigate("/profile")}>My Profile</div>
                <div onClick={() => navigate("/orders")}>My Orders</div>
                <div
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/login");
                  }}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
