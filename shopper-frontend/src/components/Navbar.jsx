import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `nav-link ${isActive ? "active" : ""}`;

  return (
    <nav className="ch-navbar">
      <div className="container">

        {/* LEFT LINKS (DESKTOP) */}
        <div className="nav-left d-none d-md-flex">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/products" className={navClass}>
            Products
          </NavLink>
        </div>

        {/* LOGO */}
        <NavLink to="/" className="nav-logo">
          CHOUDHRANI
        </NavLink>

        {/* RIGHT LINKS (DESKTOP) */}
        <div className="nav-right d-none d-md-flex">
          <NavLink to="/cart" className={navClass}>
            Cart
          </NavLink>

          <NavLink to="/login" className={navClass}>
            Login
          </NavLink>

          <NavLink to="/register" className={navClass}>
            Register
          </NavLink>
        </div>

        {/* HAMBURGER (MOBILE) */}
        <div
          className={`hamburger d-md-none ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <Link onClick={() => setOpen(false)} to="/">Home</Link>
        <Link onClick={() => setOpen(false)} to="/products">Products</Link>
        <Link onClick={() => setOpen(false)} to="/cart">Cart</Link>
        <Link onClick={() => setOpen(false)} to="/login">Login</Link>
        <Link onClick={() => setOpen(false)} to="/register">Register</Link>
      </div>
    </nav>
  );
}
