// import React, { createContext, useContext, useEffect, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   /* LOAD CART */
//   useEffect(() => {
//     const saved = localStorage.getItem("cart");
//     if (saved) {
//       setCartItems(JSON.parse(saved));
//     }
//   }, []);

//   /* SAVE CART */
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   /* ADD TO CART */
//   const addToCart = (product) => {
//     setCartItems(prev => {
//       const existing = prev.find(item => item.id === product.id);

//       if (existing) {
//         return prev.map(item =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }

//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   /* INCREASE */
//   const increaseQty = (id) => {
//     setCartItems(prev =>
//       prev.map(item =>
//         item.id === id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       )
//     );
//   };

//   /* DECREASE */
//   const decreaseQty = (id) => {
//     setCartItems(prev =>
//       prev
//         .map(item =>
//           item.id === id
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//         .filter(item => item.quantity > 0)
//     );
//   };

//   /* REMOVE */
//   const removeFromCart = (id) => {
//     setCartItems(prev => prev.filter(item => item.id !== id));
//   };

//   /* TOTAL COUNT */
//   const cartCount = cartItems.reduce(
//     (sum, item) => sum + item.quantity,
//     0
//   );

//   /* TOTAL PRICE */
//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         cartCount,
//         totalPrice,
//         addToCart,
//         increaseQty,
//         decreaseQty,
//         removeFromCart
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);













//working
// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);

//   const user = JSON.parse(localStorage.getItem("user"));

//   const API = "http://localhost:8080/auth/cart";

//   /* ================= LOAD CART ================= */
//   const loadCart = async () => {
//     if (!user) return;

//     const res = await axios.get(`${API}/${user.id}`);
//     setCartItems(res.data);

//     calculateTotals(res.data);
//   };

//   /* ================= CART COUNT ================= */
//   const loadCartCount = async () => {
//     if (!user) return;

//     const res = await axios.get(`${API}/count/${user.id}`);
//     setCartCount(res.data);
//   };

//   /* ================= ADD TO CART ================= */
//   const addToCart = async (productId, variantId, quantity = 1) => {
//     if (!user) return alert("Please login");

//     await axios.post(`${API}/add`, {
//       userId: user.id,
//       productId,
//       variantId,
//       quantity
//     });

//     loadCart();
//     loadCartCount();
//   };

//   /* ================= INCREASE QTY ================= */
// const increaseQty = async (cartItemId) => {
//   const item = cartItems.find(i => i.cartItemId === cartItemId);
//   if (!item) return;

//   await axios.post(`${API}/add`, {
//     userId: user.id,
//     productId: item.productId,   // ✅ Long
//     variantId: item.variantId,   // ✅ Long
//     quantity: 1
//   });

//   loadCart();
//   loadCount();
// };


//   /* ================= DECREASE QTY ================= */
//   const decreaseQty = async (cartItemId) => {
//     await axios.put(`${API}/decrease/${cartItemId}`);
//     loadCart();
//     loadCartCount();
//   };

//   /* ================= REMOVE ================= */
//   const removeFromCart = async (cartItemId) => {
//     await axios.delete(`${API}/remove/${cartItemId}`);
//     loadCart();
//     loadCartCount();
//   };

//   /* ================= TOTAL ================= */
//   const calculateTotals = (items) => {
//     let total = 0;
//     let count = 0;

//     items.forEach(item => {
//       total += item.price * item.quantity;
//       count += item.quantity;
//     });

//     setTotalPrice(total);
//     setCartCount(count);
//   };

//   /* ================= INIT ================= */
//   useEffect(() => {
//     loadCart();
//     loadCartCount();
//   }, []);

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         cartCount,
//         totalPrice,
//         addToCart,
//         increaseQty,
//         decreaseQty,
//         removeFromCart
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export const useCart = () => useContext(CartContext);


































import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const userId = Number(localStorage.getItem("userId")) ; // ya auth context

  // ---------------- GET CART ----------------
  const fetchCart = async () => {
    if (!userId) return;
    const res = await axiosInstance.get(`/auth/cart/${userId}`);
    setCartItems(res.data);
  };

  // ---------------- COUNT ----------------
  const fetchCount = async () => {
    if (!userId) return;
    const res = await axiosInstance.get(`/auth/cart/count/${userId}`);
    setCartCount(res.data);
  };

  // ---------------- ADD ----------------
  // const addToCart = async ({ productId, variantId, quantity = 1 }) => {
  //   await axiosInstance.post("/auth/cart/add", {
  //     userId,
  //     productId,
  //     variantId,
  //     quantity
  //   });
  //   fetchCart();
  //   fetchCount();
  // };






  const addToCart = async ({ productId, variantId, quantity = 1 }) => {
  console.log("ADD TO CART CLICKED");
  console.log("USER ID:", userId);
  console.log("PRODUCT ID:", productId);
  console.log("VARIANT ID:", variantId);

  if (!userId || !productId || !variantId) {
    console.error("❌ Missing data, aborting add to cart");
    return;
  }

  await axiosInstance.post("/auth/cart/add", {
    userId,
    productId,
    variantId,
    quantity
  });

  console.log("✅ ADD API SUCCESS");

  await fetchCount();
  await fetchCart();
};

  // ---------------- DECREASE ----------------
  const decreaseQty = async (cartItemId) => {
    await axiosInstance.put(`/auth/cart/decrease/${cartItemId}`);
    fetchCart();
    fetchCount();
  };

  // ---------------- REMOVE ----------------
  const removeItem = async (cartItemId) => {
    await axiosInstance.delete(`/auth/cart/remove/${cartItemId}`);
    fetchCart();
    fetchCount();
  };

  // ---------------- CLEAR ----------------
  const clearCart = async () => {
    await axiosInstance.delete(`/auth/cart/clear/${userId}`);
    setCartItems([]);
    setCartCount(0);
  };

  useEffect(() => {
    fetchCart();
    fetchCount();
  }, [userId]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        decreaseQty,
        removeItem,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
