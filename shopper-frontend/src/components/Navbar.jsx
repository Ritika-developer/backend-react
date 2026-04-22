// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Box,
//   IconButton,
//   Button,
//   Badge,
//   TextField
// } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { useCart } from "../services/CartContext";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [query, setQuery] = useState("");

//   const doSearch = () => {
//     navigate(`/search?q=${query}`);
//   };

//   const { cartCount, loadCartCount } = useCart();
//   const username = localStorage.getItem("username");
//   const userId = localStorage.getItem("userId");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("username");
//     localStorage.removeItem("userId");

//     loadCartCount();
//     navigate("/login");
//     window.location.reload();
//   };

//   return (
//     <AppBar position="static" color="primary">
//       <Toolbar sx={{ display: "flex", gap: 2 }}>
//         {/* Brand */}
//         <Typography
//           component={Link}
//           to="/"
//           variant="h6"
//           sx={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
//         >
//           ShopKart
//         </Typography>

//         {/* Search Box */}
//         <Box sx={{ display: "flex", flexGrow: 1, gap: 1, maxWidth: 450 }}>
//           <TextField
//             size="small"
//             fullWidth
//             placeholder="Search for products..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             sx={{ bgcolor: "white", borderRadius: 1 }}
//           />
//           <Button
//             variant="contained"
//             color="secondary"
//             onClick={doSearch}
//             sx={{ whiteSpace: "nowrap" }}
//           >
//             Search
//           </Button>
//         </Box>

//         {/* Right Side */}
//         <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//           {username ? (
//             <>
//               <Typography sx={{ color: "white", fontWeight: "bold" }}>
//                 👋 Hello, {username.split("@")[0]}
//               </Typography>
//               <Button color="inherit" onClick={handleLogout}>
//                 Logout
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button component={Link} color="inherit" to="/login">
//                 Sign In
//               </Button>
//               <Button component={Link} color="inherit" to="/register">
//                 Register
//               </Button>
//             </>
//           )}


//      {/* My Orders Button */}
//       <Button
//         component={Link}
//         to="/orders/my"
//         color="inherit"
//       >
//         My Orders
//       </Button>


//           {/* Cart */}
//           <IconButton
//             component={Link}
//             to={`/cart/${userId}`}
//             sx={{ color: "white" }}
//           >
//             <Badge badgeContent={cartCount} color="error">
//               <ShoppingCartIcon />
//             </Badge>
//           </IconButton>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }














//side war wala code h 

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
  Divider
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useCart } from "../services/CartContext";
import { useWishlist } from "../services/WishlistContext";
import { toast } from "react-toastify";

import HomeIcon from "@mui/icons-material/Home";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

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

    toast.success("Logged out successfully");

    setUser(null);
    setOpen(false);

    setTimeout(() => {
      navigate("/login");
    }, 500);
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
          px: { xs: 1, md: 4 }
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* LEFT LINKS (DESKTOP) */}
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <NavLink to="/" style={navStyle}>Home</NavLink>
            <NavLink to="/products" style={navStyle}>Products</NavLink>
            {/* {user && <NavLink to="/orders" style={navStyle}>My Orders</NavLink>} */}
          </Stack>

          {/* LOGO */}
          <Typography
            variant="h6"
            sx={{ letterSpacing: 4, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            CHOUDHRANI
          </Typography>

          {/* RIGHT */}
          <Stack direction="row" spacing={1} alignItems="center">
            {user ? (
              <>
                {/* <Typography fontSize={13}>Hi, {user.name}</Typography> */}
                <Button
                  variant="outlined"
                  size="small"
                  onClick={handleLogout}
                  sx={{
                    color: "#f5e6c8",
                    borderColor: "#f5e6c8",
                    "&:hover": {
                      background: "#f5e6c8",
                      color: "#6b1a24"
                    }
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

            {/* MENU */}
           <IconButton
  onClick={() => setOpen(true)}
  color="inherit"
>
  <MenuIcon />
</IconButton>

          </Stack>
        </Toolbar>
      </AppBar>

      {/* ================= SIDEBAR / DRAWER ================= */}
    {/* ================= SIDEBAR / DRAWER ================= */}
<Drawer
  anchor="right"
  open={open}
  onClose={() => setOpen(false)}
  PaperProps={{
    sx: {
      width: 280,
      background: "linear-gradient(180deg,#6b1a24,#8a2431)",
      color: "#fff"
    }
  }}
>
  <Box p={3}>

    {/* ===== USER CARD ===== */}
    {user && (
      <Box
        sx={{
          p: 2,
          mb: 3,
          borderRadius: 3,
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(10px)"
        }}
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          <AccountCircleIcon sx={{ fontSize: 40 }} />
          <Box>
            <Typography fontWeight="bold">{user.name}</Typography>
            <Typography fontSize={12} sx={{ opacity: 0.8 }}>
              {user.email}
            </Typography>
          </Box>
        </Stack>
      </Box>
    )}

    {/* ===== MENU ITEMS ===== */}
    <Stack spacing={1}>

    <SideItem
  icon={<HomeIcon />}
  text="Home"
  onClick={() => navigate("/")}
/>

<SideItem
  icon={<ShoppingBagIcon />}
  text="Products"
  onClick={() => navigate("/products")}
/>

      <SideItem
        icon={<ShoppingCartIcon />}
        text={`Cart (${cartCount})`}
        onClick={() => navigate("/cart")}
      />

      <SideItem
        icon={<FavoriteIcon />}
        text={`Wishlist (${wishlistCount})`}
        onClick={() => navigate("/wishlist")}
      />

      {user && (
        <SideItem
          icon={<ReceiptLongIcon />}
          text="My Orders"
          onClick={() => navigate("/orders")}
        />
      )}

      <Divider sx={{ my: 2, bgcolor: "rgba(255,255,255,0.3)" }} />

      {user ? (
        <SideItem text="Logout" danger onClick={handleLogout} />
      ) : (
        <>
          <SideItem text="Login" onClick={() => navigate("/login")} />
          <SideItem text="Register" onClick={() => navigate("/register")} />
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
  borderBottom: isActive ? "1px solid #f5e6c8" : "none"
});


function SideItem({ text, icon, onClick, danger }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 1.5,
        borderRadius: 2,
        cursor: "pointer",
        transition: "0.25s",
        color: danger ? "#ffb3b3" : "#fff",

        "&:hover": {
          background: "rgba(255,255,255,0.18)",
          transform: "translateX(6px)"
        }
      }}
    >
      {icon}
      <Typography fontSize={14}>{text}</Typography>
    </Box>
  );
}
