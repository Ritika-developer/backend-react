

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









// import { useCart } from "../services/CartContext";
// import { useEffect, useState } from "react";
// import "../styles/cart.css";

// export default function CartPage() {

//   const {
//     cartItems,
//     increaseQty,
//     decreaseQty,
//     removeItem,
//     clearCart,
//     loadSummary
//   } = useCart();

//   const [summary, setSummary] = useState(null);

//   useEffect(() => {
//     loadSummary().then(setSummary);
//   }, [cartItems]);

//   if (cartItems.length === 0) {
//     return <h2 className="empty-cart">🛒 Cart is empty</h2>;
//   }












































// import { useCart } from "../services/CartContext";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../utils/axiosInstance";
// import "../styles/cart.css";

// export default function CartPage() {

//   const {
//     cartItems,
//     increaseQty,
//     decreaseQty,
//     removeItem,
//     clearCart,
//     loadSummary
//   } = useCart();

//   const [summary, setSummary] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     loadSummary().then(setSummary);
//   }, [cartItems]);

//   const handleCheckout = async () => {
//     try {
//       await axios.post("/auth/checkout/1");
//       clearCart();
//       navigate("/orders");
//     } catch (err) {
//       console.error("CHECKOUT ERROR", err);
//       alert("Checkout failed");
//     }
//   };

//   if (cartItems.length === 0) {
//     return <h2 className="empty-cart">🛒 Cart is empty</h2>;
//   }

//   return (
//     <div className="cart-container">

//       {/* LEFT */}
//       <div className="cart-left">
//         {cartItems.map(item => (
//           <div className="cart-item" key={item.cartItemId}>

//             <img src={item.imageUrl || "/no-image.png"} />

//             <div className="cart-info">
//               <h4>{item.productName}</h4>
//               <p className="price">₹ {item.price}</p>

//               <div className="qty-box">
//                 <button onClick={() => decreaseQty(item.cartItemId)}>−</button>
//                 <span>{item.quantity}</span>
//                 <button onClick={() => increaseQty(item.cartItemId)}>+</button>
//               </div>

//               <button
//                 className="remove"
//                 onClick={() => removeItem(item.cartItemId)}
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* RIGHT */}
//       <div className="cart-summary">
//         <h3>Order Summary</h3>

//         {summary && (
//           <>
//             <p>Subtotal: <span>₹{summary.subtotal}</span></p>
//             <p>Discount: <span>−₹{summary.discount}</span></p>
//             <hr />
//             <h4>Total: ₹{summary.total}</h4>
//           </>
//         )}

// <button
//   className="checkout-btn"
//   onClick={handleCheckout}
// >
//   Proceed to Checkout
// </button>


//         <button className="clear-btn" onClick={clearCart}>
//           Clear Cart
//         </button>
//       </div>
//     </div>
//   );
// }























// import { useCart } from "../services/CartContext";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../utils/axiosInstance";
// import "../styles/cart.css";

// export default function CartPage() {

//   const {
//     cartItems,
//     increaseQty,
//     decreaseQty,
//     removeItem,
//     clearCart,
//     loadSummary
//   } = useCart();

//   const [summary, setSummary] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     loadSummary().then(setSummary);
//   }, [cartItems]);

//   // ================= RAZORPAY CHECKOUT =================
//   const handleCheckout = async () => {
//     if (!summary) {
//       alert("Order summary not ready");
//       return;
//     }

//     try {
//       const userId = 1; // 🔴 replace later with logged-in user id

//       // 1️⃣ Create order from backend
//       const res = await axios.post("/auth/payment/create-order", {
//         amount: summary.total * 100, // ₹ → paise
//         userId: userId
//       });

//       const { orderId, key } = res.data;

//       // 2️⃣ Razorpay options
//       const options = {
//         key: key,
//         amount: summary.total * 100,
//         currency: "INR",
//         name: "Choudhrani",
//         description: "Order Payment",
//         order_id: orderId,

//         handler: function (response) {
//           console.log("Payment success:", response);

//           alert("Payment successful! Order confirmed.");

//           // ⚠️ Order creation happens via webhook (backend)
//           clearCart();
//           navigate("/orders");
//         },

//         prefill: {
//           name: "Ritika",
//           email: "ritika@email.com",
//           contact: "9999999999"
//         },

//         theme: {
//           color: "#000000"
//         }
//       };

//       // 3️⃣ Open Razorpay popup
//       const razorpay = new window.Razorpay(options);
//       razorpay.open();

//     } catch (err) {
//       console.error("PAYMENT ERROR", err);
//       alert("Unable to start payment");
//     }
//   };

//   if (cartItems.length === 0) {
//     return <h2 className="empty-cart">🛒 Cart is empty</h2>;
//   }











//   //subscribe

//   // ================= RAZORPAY SUBSCRIPTION =================
// const handleSubscription = async () => {
//   try {
//     const userId = 1; // 🔴 later JWT se lena

//     // 1️⃣ Create subscription from backend
//     const res = await axios.post("/auth/payment/create-subscription", {
//       userId: userId
//     });

//     const { subscriptionId, key } = res.data;

//     // 2️⃣ Razorpay subscription options
//     const options = {
//       key: key,
//       subscription_id: subscriptionId,
//       name: "Choudhrani",
//       description: "Premium Subscription",

//       handler: function (response) {
//         console.log("Subscription success:", response);
//         alert("Subscription started successfully!");
//         // ⚠️ Final confirmation webhook se hogi
//       },

//       prefill: {
//         name: "Ritika",
//         email: "ritika@email.com",
//         contact: "9999999999"
//       },

//       theme: {
//         color: "#000000"
//       }
//     };

//     // 3️⃣ Open Razorpay popup
//     const rzp = new window.Razorpay(options);
//     rzp.open();

//   } catch (err) {
//     console.error("SUBSCRIPTION ERROR", err);
//     alert("Unable to start subscription");
//   }
// };



//   return (
//     <div className="cart-container">

//       {/* LEFT */}
//       <div className="cart-left">
//         {cartItems.map(item => (
//           <div className="cart-item" key={item.cartItemId}>

//             <img src={item.imageUrl || "/no-image.png"} alt={item.productName} />

//             <div className="cart-info">
//               <h4>{item.productName}</h4>
//               <p className="price">₹ {item.price}</p>

//               <div className="qty-box">
//                 <button onClick={() => decreaseQty(item.cartItemId)}>−</button>
//                 <span>{item.quantity}</span>
//                 <button onClick={() => increaseQty(item.cartItemId)}>+</button>
//               </div>

//               <button
//                 className="remove"
//                 onClick={() => removeItem(item.cartItemId)}
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* RIGHT */}
//       <div className="cart-summary">
//         <h3>Order Summary</h3>

//         {summary && (
//           <>
//             <p>Subtotal: <span>₹{summary.subtotal}</span></p>
//             <p>Discount: <span>−₹{summary.discount}</span></p>
//             <hr />
//             <h4>Total: ₹{summary.total}</h4>
//           </>
//         )}

//         <button
//           className="checkout-btn"
//           onClick={handleCheckout}
//           disabled={!summary}
//         >
//           Proceed to Checkout
//         </button>

//         <button className="clear-btn" onClick={clearCart}>
//           Clear Cart
//         </button>


//           <div style={{ padding: "40px", textAlign: "center" }}>


//       <button
//   style={{
//     padding: "12px 20px",
//     background: "black",
//     color: "white",
//     border: "none",
//     cursor: "pointer",
//     marginTop: "20px"
//   }}
//   onClick={handleSubscription}
// >
//   Subscription
// </button>

//     </div>
//       </div>
//     </div>
//   );
// }
























import { useCart } from "../services/CartContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axiosInstance";
import "../styles/cart.css";

/* ================= HELPER ================= */
const getLoggedInUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

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
  const navigate = useNavigate();

  useEffect(() => {
    loadSummary().then(setSummary);
  }, [cartItems]);

  /* ================= RAZORPAY CHECKOUT ================= */
  const handleCheckout = async () => {
    if (!summary) {
      alert("Order summary not ready");
      return;
    }

    const user = getLoggedInUser();
    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    try {
      // 1️⃣ Create order (backend)
      const res = await axios.post("/auth/payment/create-order", {
        amount: summary.total * 100, // ₹ → paise
        userId: user.id
      });

      const { orderId, key } = res.data;

      // 2️⃣ Razorpay options
      const options = {
        key,
        amount: summary.total * 100,
        currency: "INR",
        name: "Choudhrani",
        description: "Order Payment",
        order_id: orderId,

        handler: function (response) {
          console.log("Payment success:", response);
          alert("Payment successful! Order confirmed.");

          // Order finalization webhook se hota hai
          clearCart();
          navigate("/orders");
        },

        prefill: {
          name: user.name,
          email: user.email
        },

        theme: {
          color: "#000000"
        }
      };

      // 3️⃣ Open Razorpay
      new window.Razorpay(options).open();

    } catch (err) {
      console.error("PAYMENT ERROR", err);
      alert("Unable to start payment");
    }
  };

  /* ================= RAZORPAY SUBSCRIPTION ================= */
  const handleSubscription = async () => {
    const user = getLoggedInUser();
    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    try {
      // 1️⃣ Create subscription (backend)
      const res = await axios.post("/auth/payment/create-subscription", {
        userId: user.id
      });

      const { subscriptionId, key } = res.data;

      // 2️⃣ Razorpay options
      const options = {
        key,
        subscription_id: subscriptionId,
        name: "Choudhrani",
        description: "Premium Subscription",

        handler: function (response) {
          console.log("Subscription success:", response);
          alert("Subscription started successfully!");
        },

        prefill: {
          name: user.name,
          email: user.email
        },

        theme: {
          color: "#000000"
        }
      };

      // 3️⃣ Open Razorpay
      new window.Razorpay(options).open();

    } catch (err) {
      console.error("SUBSCRIPTION ERROR", err);
      alert("Unable to start subscription");
    }
  };

  if (cartItems.length === 0) {
    return <h2 className="empty-cart">🛒 Cart is empty</h2>;
  }

  return (
    <div className="cart-container">

      {/* LEFT */}
      <div className="cart-left">
        {cartItems.map(item => (
          <div className="cart-item" key={item.cartItemId}>

            <img
              src={item.imageUrl || "/no-image.png"}
              alt={item.productName}
            />

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

        <button
          className="checkout-btn"
          onClick={handleCheckout}
          disabled={!summary}
        >
          Proceed to Checkout
        </button>

        <button className="clear-btn" onClick={clearCart}>
          Clear Cart
        </button>

        <div style={{ padding: "40px", textAlign: "center" }}>
          <button
            style={{
              padding: "12px 20px",
              background: "black",
              color: "white",
              border: "none",
              cursor: "pointer",
              marginTop: "20px"
            }}
            onClick={handleSubscription}
          >
            Subscription
          </button>
        </div>

      </div>
    </div>
  );
}
