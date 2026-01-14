// import {
//   Box,
//   Typography,
//   Button,
//   Divider,
//   IconButton
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { useCart } from "../services/CartContext";

// export default function CartPage() {
//   const {
//     cartItems,
//     totalPrice,
//     increaseQty,
//     decreaseQty,
//     removeFromCart
//   } = useCart();

//   return (
//     <Box sx={{ maxWidth: 900, mx: "auto", mt: 10 }}>
//       <Typography variant="h5" gutterBottom>
//         My Cart
//       </Typography>

//       {cartItems.length === 0 && (
//         <Typography>Your cart is empty</Typography>
//       )}

//       {cartItems.map(item => (
//         <Box
//           key={item.cartItemId}
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             p: 2,
//             mb: 2,
//             border: "1px solid #ddd",
//             borderRadius: 2
//           }}
//         >
//           {/* PRODUCT INFO */}
//           <Box>
//             <Typography fontWeight="bold">
//               {item.productName}
//             </Typography>
//             <Typography color="text.secondary">
//               ₹{item.price} × {item.quantity}
//             </Typography>
//             <Typography fontWeight="bold">
//               Subtotal: ₹{item.price * item.quantity}
//             </Typography>
//           </Box>

//           {/* QUANTITY CONTROLS */}
//           <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//             <IconButton onClick={() =>decreaseQty(item.cartItemId)}>
//               <RemoveIcon />
//             </IconButton>

//             <Typography>{item.quantity}</Typography>

//             <IconButton onClick={() => increaseQty(item.cartItemId)}>
//               <AddIcon />
//             </IconButton>

//             <IconButton
//               color="error"
//               onClick={() =>removeFromCart(item.cartItemId)}
//             >
//               <DeleteIcon />
//             </IconButton>
//           </Box>
//         </Box>
//       ))}

//       {cartItems.length > 0 && (
//         <>
//           <Divider sx={{ my: 3 }} />

//           <Typography variant="h6">
//             Total Amount: ₹{totalPrice}
//           </Typography>

//           <Button
//             variant="contained"
//             fullWidth
//             sx={{ mt: 2 }}
//           >
//             Checkout
//           </Button>
//         </>
//       )}
//     </Box>
//   );
// }












import { useCart } from "../services/CartContext";

export default function CartPage() {
  const {
    cartItems,
    decreaseQty,
    removeItem,
    clearCart
  } = useCart();

  if (cartItems.length === 0) {
    return <h2 style={{ textAlign: "center" }}>🛒 Cart is empty</h2>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <h2>My Cart</h2>

      {cartItems.map(item => (
        <div
          key={item.cartItemId}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            borderBottom: "1px solid #ddd",
            padding: "12px 0"
          }}
        >
          <img
            src={item.imageUrl}
            alt={item.productName}
            width="80"
          />

          <div style={{ flex: 1 }}>
            <h4>{item.productName}</h4>
            <p>₹ {item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>

          {/* DECREASE */}
          <button onClick={() => decreaseQty(item.cartItemId)}>
            −
          </button>

          {/* REMOVE */}
          <button
            onClick={() => removeItem(item.cartItemId)}
            style={{ color: "red" }}
          >
            Remove
          </button>
        </div>
      ))}

      {/* CLEAR CART */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={clearCart}
          style={{
            background: "red",
            color: "white",
            padding: "10px 20px",
            border: "none"
          }}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
