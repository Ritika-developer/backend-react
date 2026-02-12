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
                    // onClick={() => {
                    //   addToCart(item.productId, null, 1);
                    //   removeFromWishlist(item.productId);
                    //   toast.success("✔ Added to cart");
                    //   loadWishlist();
                    // }}
                    onClick={async () => {
  addToCart(item.productId, null, 1);

  await removeFromWishlist(item.productId);

  setItems((prev) =>
    prev.filter((p) => p.productId !== item.productId)
  );

  // toast.success("✔ Added to cart");
}}

                  >
                    Move to Cart
                  </Button>

                  {/* REMOVE */}
                  <Button
                    startIcon={<DeleteIcon />}
                    variant="outlined"
                    color="error"
                    // onClick={() => {
                    //   removeFromWishlist(item.productId);
                    //   toast.info("Removed from wishlist");
                    //   loadWishlist();
                    // }}


                    onClick={async () => {
  await removeFromWishlist(item.productId);

  setItems((prev) =>
    prev.filter((p) => p.productId !== item.productId)
  );

  // toast.info("Removed from wishlist");
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
