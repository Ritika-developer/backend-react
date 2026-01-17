// import { useEffect, useState } from "react";
// import { WishlistService } from "../services/WishlistService";
// import WishlistCard from "../components/WishlistCard";
// import "../styles/wishlist.css";

// export default function WishlistPage() {
//   const [wishlist, setWishlist] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const loadWishlist = async () => {
//     try {
//       const res = await WishlistService.getWishlist();
//       setWishlist(res.data);
//     } catch (err) {
//       console.error("LOAD WISHLIST ERROR", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRemove = async (productId) => {
//     try {
//       await WishlistService.removeFromWishlist(productId);
//       loadWishlist(); // refresh list
//     } catch (err) {
//       console.error("REMOVE ERROR", err);
//     }
//   };

//   useEffect(() => {
//     loadWishlist();
//   }, []);

//   if (loading) return <h3>Loading wishlist...</h3>;

//   if (wishlist.length === 0) {
//     return <h2 className="empty">❤️ Wishlist is empty</h2>;
//   }

//   return (
//     <div className="wishlist-container">
//       <h2>My Wishlist</h2>

//       <div className="wishlist-grid">
//         {wishlist.map((item) => (
//           <WishlistCard
//             key={item.wishlistId}
//             item={item}
//             onRemove={handleRemove}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }




















// import { useEffect, useState } from "react";
// import axios from "../utils/axiosInstance";
// import { useCart } from "../services/CartContext";
// import { useWishlist } from "../services/WishlistContext";

// export default function WishlistPage() {
//   const [items, setItems] = useState([]);
//   const { addToCart } = useCart();
//   const { removeFromWishlist } = useWishlist();

//   const loadWishlist = async () => {
//     const res = await axios.get("/auth/wishlist/1"); // userId = 1
//     setItems(res.data);
//   };

//   useEffect(() => {
//     loadWishlist();
//   }, []);

//   if (items.length === 0) {
//     return <h2>❤️ Wishlist is empty</h2>;
//   }

//   return (
//     <div className="wishlist-container">
//       {items.map(item => (
//         <div key={item.wishlistId} className="wishlist-card">

//           <img
//             src={item.imageUrl || "/no-image.png"}
//             alt={item.productName}
//             width={120}
//           />

//           <h4>{item.productName}</h4>

//           {/* 🛒 MOVE TO CART */}
//           <button
//             onClick={() => {
//               addToCart(item.productId, null, 1); // 👈 cart
//               removeFromWishlist(item.productId); // 👈 remove wishlist
//               loadWishlist();
//             }}
//           >
//             Move to Cart
//           </button>

//           {/* ❌ REMOVE */}
//           <button
//             onClick={() => {
//               removeFromWishlist(item.productId);
//               loadWishlist();
//             }}
//           >
//             Remove
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }




















// import { useEffect, useState } from "react";
// import axios from "../utils/axiosInstance";
// import { useCart } from "../services/CartContext";
// import { useWishlist } from "../services/WishlistContext";
// import WishlistCard from "../components/WishlistCard";

// import {
//   Container,
//   Grid,
//   Typography,
//   Box
// } from "@mui/material";

// export default function WishlistPage() {
//   const [items, setItems] = useState([]);
//   const { addToCart } = useCart();
//   const { removeFromWishlist } = useWishlist();

//   const loadWishlist = async () => {
//     const res = await axios.get("/auth/wishlist/1");
//     setItems(res.data);
//   };

//   useEffect(() => {
//     loadWishlist();
//   }, []);

//   /* ❤️ EMPTY STATE */
//   if (items.length === 0) {
//     return (
//       <Box
//         sx={{
//           minHeight: "60vh",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center"
//         }}
//       >
//         <Typography variant="h4">❤️ Wishlist is empty</Typography>
//         <Typography color="text.secondary" mt={1}>
//           Explore our royal collections
//         </Typography>
//       </Box>
//     );
//   }

//   return (
//     <Container sx={{ mt: 10, mb: 6 }}>
//       <Typography
//         variant="h4"
//         textAlign="center"
//         fontFamily="Playfair Display"
//         color="#6b1a24"
//         mb={4}
//       >
//         My Wishlist ❤️
//       </Typography>

//       <Grid container spacing={3}>
//         {items.map((item) => (
//           <Grid item xs={12} sm={6} md={3} key={item.wishlistId}>
//             <WishlistCard
//               item={item}
//               onMoveToCart={() => {
//                 addToCart(item.productId, null, 1);
//                 removeFromWishlist(item.productId);
//                 loadWishlist();
//               }}
//               onRemove={() => {
//                 removeFromWishlist(item.productId);
//                 loadWishlist();
//               }}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }
















import { useEffect, useState } from "react";
import axios from "../utils/axiosInstance";
import { useCart } from "../services/CartContext";
import { useWishlist } from "../services/WishlistContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import "../styles/wishlist.css"
export default function WishlistPage() {
  const [items, setItems] = useState([]);
  const { addToCart } = useCart();
  const { removeFromWishlist } = useWishlist();

  // const loadWishlist = async () => {
  //   const res = await axios.get("/auth/wishlist/1"); // userId = 1
  //   setItems(res.data);
  // };


  const loadWishlist = async () => {
  const userId = localStorage.getItem("userId");
  if (!userId) return;

  const res = await axios.get(`/auth/wishlist/${userId}`);
  setItems(res.data);
};

  useEffect(() => {
    loadWishlist();
  }, []);

  /* ================= EMPTY STATE ================= */
  if (items.length === 0) {
    return (
      <Box textAlign="center" mt={10}>
        <FavoriteIcon sx={{ fontSize: 60, color: "#6b1a24" }} />
        <Typography variant="h5" mt={2}>
          ❤️ Your wishlist is empty
        </Typography>
        <Typography color="text.secondary" mt={1}>
          Explore products and save your favourites
        </Typography>

        <Button
          component={Link}
          to="/products"
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "#6b1a24",
            "&:hover": { backgroundColor: "#4f131a" },
          }}
        >
          Browse Products
        </Button>
      </Box>
    );
  }

  return (
   <Box
  px={{ xs: 2, md: 6 }}
  py={4}
  mt="80px"   // ✅ margin-top added
>

      {/* HEADER */}
      <Typography variant="h4" mb={1}>
        ❤️ My Wishlist
      </Typography>
      <Typography color="text.secondary" mb={4}>
        Saved items you love ({items.length})
      </Typography>

      {/* GRID */}
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid
            item
            xs={12}      // mobile
            sm={6}       // tablet
            md={3}       // desktop (4 columns)
            key={item.wishlistId}
          >
            <Card sx={{ height: "100%", boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={item.imageUrl || "/no-image.png"}
                alt={item.productName}
              />

              <CardContent>
                <Typography fontWeight={500}>
                  {item.productName}
                </Typography>

                {/* ACTIONS */}
                <Box mt={2} display="flex" flexDirection="column" gap={1}>
                  {/* MOVE TO CART */}
                  <Button
                    startIcon={<ShoppingCartIcon />}
                    variant="contained"
                    sx={{
                      backgroundColor: "#6b1a24",
                      "&:hover": { backgroundColor: "#4f131a" },
                    }}
                    onClick={() => {
                      addToCart(item.productId, null, 1);
                      removeFromWishlist(item.productId);
                      toast.success("✔ Added to cart");
                      loadWishlist();
                    }}
                  >
                    Move to Cart
                  </Button>

                  {/* REMOVE */}
                  <Button
                    startIcon={<DeleteIcon />}
                    variant="outlined"
                    color="error"
                    onClick={() => {
                      removeFromWishlist(item.productId);
                      toast.info("Removed from wishlist");
                      loadWishlist();
                    }}
                  >
                    Remove
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
