





// import { NavLink, Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import "../styles/navbar.css";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { Badge, IconButton } from "@mui/material";
// import { useCart } from "../services/CartContext";

// export default function Navbar() {
//   const { cartCount } = useCart();
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const [user, setUser] = useState(null);

//   /* 🔹 LOAD USER FROM LOCAL STORAGE */
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   /* 🔹 LOGOUT */
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//     navigate("/login");
//   };

//   const navClass = ({ isActive }) =>
//     `nav-link ${isActive ? "active" : ""}`;

//   return (
//     <nav className="ch-navbar">
//       <div className="container">

//         {/* LEFT LINKS */}
//         <div className="nav-left d-none d-md-flex">
//           <NavLink to="/" className={navClass}>Home</NavLink>
//           <NavLink to="/products" className={navClass}>Products</NavLink>
//         </div>

//         {/* LOGO */}
//         <NavLink to="/" className="nav-logo">
//           CHOUDHRANI
//         </NavLink>

//         {/* RIGHT LINKS */}
//         <div className="nav-right d-none d-md-flex">

//           {user ? (
//             <>
//               <span className="user-name">
//                 Hi, {user.name}
//               </span>

//               <button
//                 className="logout-btn"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <NavLink to="/login" className={navClass}>Login</NavLink>
//               <NavLink to="/register" className={navClass}>Register</NavLink>
//             </>
//           )}

//           {/* CART ICON */}
//           <IconButton onClick={() => navigate("/cart")}>
//             <Badge badgeContent={cartCount} color="error">
//               <ShoppingCartIcon />
//             </Badge>
//           </IconButton>
//         </div>

//         {/* HAMBURGER */}
//         <div
//           className={`hamburger d-md-none ${open ? "active" : ""}`}
//           onClick={() => setOpen(!open)}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       <div className={`mobile-menu ${open ? "show" : ""}`}>
//         <Link onClick={() => setOpen(false)} to="/">Home</Link>
//         <Link onClick={() => setOpen(false)} to="/products">Products</Link>
//         <Link onClick={() => setOpen(false)} to="/cart">Cart</Link>

//         {user ? (
//           <>
//            <div className="user-actions">
//   <span className="user-name">Hi, {user.name}</span>

//   <span className="divider-line">|</span>

//   <button className="logout-btn" onClick={handleLogout}>
//     Logout
//   </button>
// </div>

//           </>
//         ) : (
//           <>
//             <Link onClick={() => setOpen(false)} to="/login">Login</Link>
//             <Link onClick={() => setOpen(false)} to="/register">Register</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }


import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import { useCart } from "../services/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();
  const navigate = useNavigate();

  return (
    <IconButton onClick={() => navigate("/cart")}>
      <Badge badgeContent={cartCount} color="primary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}


