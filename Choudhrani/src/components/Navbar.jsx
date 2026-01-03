import { Link } from "react-router-dom";
import "../styles/navbar.css"

export default function Navbar() {
  return (
    <nav className="ch-navbar">
      <div className="container">

        <div className="nav-left">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </div>

        <Link to="/" className="nav-logo">
          CHOUDHRANI
        </Link>

        <div className="nav-right">
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>

      </div>
    </nav>
  );
}
