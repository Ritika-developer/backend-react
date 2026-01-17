
// import { NavLink, Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import "../styles/navbar.css";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { Badge, IconButton } from "@mui/material";
// import { useCart } from "../services/CartContext";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import { useWishlist } from "../services/WishlistContext";
// export default function Navbar() {
//   const { cartCount } = useCart();
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const { wishlistCount } = useWishlist();

//   /* 🔹 LOAD USER FROM LOCAL STORAGE */
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   /* 🔹 LOGOUT */
//   const handleLogout = () => {
//   localStorage.removeItem("token");
//   localStorage.removeItem("user");
//   localStorage.removeItem("userId"); // 🔥 IMPORTANT
//   setUser(null);
//   navigate("/login");
// };


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
//             <IconButton onClick={() => navigate("/wishlist")}>
//       <Badge badgeContent={wishlistCount} color="error">
//         <FavoriteIcon />
//       </Badge>
//     </IconButton>


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























import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Badge,
  Button,
  Typography,
  Drawer,
  Stack,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";

import { useCart } from "../services/CartContext";
import { useWishlist } from "../services/WishlistContext";
import { toast } from "react-toastify";
export default function Navbar() {
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("userId");

  toast.success("Logged out successfully"); // ✅ HERE

  setUser(null);

  setTimeout(() => {
    navigate("/login");
  }, 500); // little delay so toast dikhe
};

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <AppBar
        position="fixed"
        elevation={4}
        sx={{
          background:
            "linear-gradient(90deg, rgba(107,26,36,0.95), rgba(138,36,49,0.95))",
          px: { xs: 1, md: 4 },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* LEFT (DESKTOP LINKS) */}
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <NavLink to="/" style={navStyle}>
              Home
            </NavLink>
            <NavLink to="/products" style={navStyle}>
              Products
            </NavLink>
          </Stack>

          {/* LOGO */}
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Playfair Display",
              letterSpacing: 4,
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            CHOUDHRANI
          </Typography>

          {/* RIGHT */}
          <Stack direction="row" spacing={1} alignItems="center">
            {user ? (
              <>
                <Typography fontSize={13}>Hi, {user.name}</Typography>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={handleLogout}
                  sx={{
                    color: "#f5e6c8",
                    borderColor: "#f5e6c8",
                    "&:hover": {
                      background: "#f5e6c8",
                      color: "#6b1a24",
                    },
                  }}
                  
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button onClick={() => navigate("/login")} color="inherit">
                  Login
                </Button>
                <Button onClick={() => navigate("/register")} color="inherit">
                  Register
                </Button>
              </>
            )}

            {/* WISHLIST */}
            <IconButton onClick={() => navigate("/wishlist")} color="inherit">
              <Badge badgeContent={wishlistCount} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>

            {/* CART */}
            <IconButton onClick={() => navigate("/cart")} color="inherit">
              <Badge badgeContent={cartCount} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            {/* MOBILE MENU */}
            <IconButton
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* ================= DRAWER (MOBILE) ================= */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box width={220} p={3}>
          <Stack spacing={2}>
            <Button onClick={() => navigate("/")}>Home</Button>
            <Button onClick={() => navigate("/products")}>Products</Button>
            <Button onClick={() => navigate("/cart")}>Cart</Button>
            <Button onClick={() => navigate("/wishlist")}>Wishlist</Button>

            {user ? (
              <Button color="error" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <>
                <Button onClick={() => navigate("/login")}>Login</Button>
                <Button onClick={() => navigate("/register")}>Register</Button>
              </>
            )}
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}

/* LINK STYLE */
const navStyle = ({ isActive }) => ({
  color: "#f5e6c8",
  textDecoration: "none",
  fontSize: "13px",
  borderBottom: isActive ? "1px solid #f5e6c8" : "none",
});
