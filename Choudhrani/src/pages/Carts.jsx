

// import { useCart } from "../services/CartContext";
// import "../styles/cart.css";

// export default function CartPage() {
 

//   const {
//     cartItems,
//     decreaseQty,
//     removeItem,
//     clearCart
//   } = useCart();

//   if (cartItems.length === 0) {
    
//     return <h2 style={{ textAlign: "center" }}>🛒 Cart is empty</h2>;
//   }

//   return (
//     <div style={{ maxWidth: "800px", margin: "auto",paddingTop:"80px" }}>
//       <h2>My Cart</h2>

//    {cartItems.map((item, index) => {
//   console.log("CART ITEM FULL DATA 👉", item); // 🔥 YAHI LINE

//   return (
//     <div
//       key={item.cartItemId || index}
//       style={{
//         display: "flex",
//         alignItems: "center",
//         gap: "16px",
//         borderBottom: "1px solid #ddd",
//         padding: "12px 0"
//       }}
//     >
//       <img
//         src={item.imageUrl || "/no-image.png"}
//         alt={item.productName}
//         width="80"
//       />

//      <div style={{ flex: 1 }}>
//   <h4>{item.productName}</h4>
//   <p>₹ {item.price && item.price > 0 ? item.price : "N/A"}</p>
//   <p>Quantity: {item.quantity}</p>
// </div>


//       <button onClick={() => decreaseQty(item.cartItemId)}>−</button>

//       <button
//         onClick={() => removeItem(item.cartItemId)}
//         style={{ color: "red" }}
//       >
//         Remove
//       </button>
//     </div>
//   );
// })}


//       {/* CLEAR CART */}
//       <div style={{ marginTop: "20px" }}>
//         <button
//           onClick={clearCart}
//           style={{
//             background: "red",
//             color: "white",
//             padding: "10px 20px",
//             border: "none"
//           }}
//         >
//           Clear Cart
//         </button>
//       </div>
//     </div>
//   );
// }









import { useCart } from "../services/CartContext";
import { useEffect, useState } from "react";
import "../styles/cart.css";

export default function CartPage() {

  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,
    loadSummary
  } = useCart();

  const [summary, setSummary] = useState(null);

  useEffect(() => {
    loadSummary().then(setSummary);
  }, [cartItems]);

  if (cartItems.length === 0) {
    return <h2 className="empty-cart">🛒 Cart is empty</h2>;
  }

  return (
    <div className="cart-container">

      {/* LEFT */}
      <div className="cart-left">
        {cartItems.map(item => (
          <div className="cart-item" key={item.cartItemId}>

            <img src={item.imageUrl || "/no-image.png"} />

            <div className="cart-info">
              <h4>{item.productName}</h4>
              <p className="price">₹ {item.price}</p>

              <div className="qty-box">
                <button onClick={() => decreaseQty(item.cartItemId)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.cartItemId)}>+</button>
              </div>

              <button
                className="remove"
                onClick={() => removeItem(item.cartItemId)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT */}
      <div className="cart-summary">
        <h3>Order Summary</h3>

        {summary && (
          <>
            <p>Subtotal: <span>₹{summary.subtotal}</span></p>
            <p>Discount: <span>−₹{summary.discount}</span></p>
            <hr />
            <h4>Total: ₹{summary.total}</h4>
          </>
        )}

        <button className="checkout-btn">
          Proceed to Checkout
        </button>

        <button className="clear-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}

















