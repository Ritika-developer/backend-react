// import "../styles/wishlist.css";

// export default function WishlistCard({ item, onRemove }) {
//   return (
//     <div className="wishlist-card">
//       <img
//         src={item.imageUrl || "/no-image.png"}
//         alt={item.productName}
//       />

//       <div className="wishlist-info">
//         <h4>{item.productName}</h4>

//         <button
//           className="remove-btn"
//           onClick={() => onRemove(item.productId)}
//         >
//           Remove
//         </button>
//       </div>
//     </div>
//   );
// }










import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Stack
} from "@mui/material";
import { toast } from "react-toastify";

export default function WishlistCard({ item, onRemove, onMoveToCart }) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.12)"
        }
      }}
    >
      <CardMedia
        component="img"
        height="220"
        image={item.imageUrl || "/no-image.png"}
        alt={item.productName}
      />

      <CardContent>
        <Typography
          fontWeight={500}
          textAlign="center"
          mb={2}
        >
          {item.productName}
        </Typography>

        <Stack spacing={1}>
          {/* 🛒 MOVE TO CART */}
          <Button
            variant="contained"
            sx={{
              bgcolor: "#6b1a24",
              "&:hover": { bgcolor: "#4a1119" }
            }}
            onClick={() => {
              onMoveToCart();
              toast.success("Moved to cart 🛒");
            }}
          >
            Move to Cart
          </Button>

          {/* ❌ REMOVE */}
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              onRemove();
              toast.info("Removed from wishlist ❤️");
            }}
          >
            Remove
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
