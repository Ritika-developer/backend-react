



// import { createContext, useContext, useState, useMemo } from "react";
// import axiosInstance from "../utils/axiosInstance"
// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState([]);
  

//   const addToCart = (productId, variantId, qty = 1) => {
//     setCartItems(prevItems => {
//       const index = prevItems.findIndex(
//         item =>
//           item.productId === productId &&
//           item.variantId === variantId
//       );

//       if (index !== -1) {
//         // ✅ quantity increase (NEW ARRAY)
//         const updated = [...prevItems];
//         updated[index] = {
//           ...updated[index],
//           quantity: updated[index].quantity + qty
//         };
//         return updated;
//       }

//       // ✅ new item
//       return [
//         ...prevItems,
//         { productId, variantId, quantity: qty }
//       ];
//     });
//   };

//   // 🔥 TOTAL COUNT (quantity sum)
//   const cartCount = useMemo(() => {
//     return cartItems.reduce(
//       (total, item) => total + item.quantity,
//       0
//     );
//   }, [cartItems]);

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, cartCount }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export const useCart = () => useContext(CartContext);





















// import { createContext, useContext, useState, useMemo,useEffect } from "react";
// import axiosInstance from "../utils/axiosInstance"
// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState([]);
  
//   // 🔥 LOAD CART FROM BACKEND
//   const loadCart = async () => {
//     try {
//       const res = await axiosInstance.get("/auth/cart");
//       console.log("CART API RESPONSE:", res.data); // 🔍 DEBUG
//       setCartItems(res.data);
//     } catch (err) {
//       console.error("Error loading cart", err);
//     }
//   };

//   // 👇 page refresh / app load par cart aayega
//   useEffect(() => {
//     loadCart();
//   }, []);

//   // ➖ decrease
//   const decreaseQty = async (cartItemId) => {
//     await axiosInstance.put(`/cart/decrease/${cartItemId}`);
//     loadCart();
//   };

//   // ❌ remove
//   const removeItem = async (cartItemId) => {
//     await axiosInstance.delete(`/cart/remove/${cartItemId}`);
//     loadCart();
//   };

//   // 🧹 clear
//   const clearCart = async () => {
//     await axiosInstance.delete("/cart/clear");
//     setCartItems([]);
//   };

//   const addToCart = (productId, variantId, qty = 1) => {
//     setCartItems(prevItems => {
//       const index = prevItems.findIndex(
//         item =>
//           item.productId === productId &&
//           item.variantId === variantId
//       );

//       if (index !== -1) {
//         // ✅ quantity increase (NEW ARRAY)
//         const updated = [...prevItems];
//         updated[index] = {
//           ...updated[index],
//           quantity: updated[index].quantity + qty
//         };
//         return updated;
//       }

//       // ✅ new item
//       return [
//         ...prevItems,
//         { productId, variantId, quantity: qty }
//       ];
//     });
//   };

//   // 🔥 TOTAL COUNT (quantity sum)
//   const cartCount = useMemo(() => {
//     return cartItems.reduce(
//       (total, item) => total + item.quantity,
//       0
//     );
//   }, [cartItems]);

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, cartCount ,decreaseQty,removeItem,clearCart}}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export const useCart = () => useContext(CartContext);
























// src/services/CartContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import axios from "../utils/axiosInstance";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const userId = 1; // 🔴 replace with logged-in user id
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // 🔁 LOAD CART
  const loadCart = async () => {
    const res = await axios.get(`/auth/cart/${userId}`);
    setCartItems(res.data);
  };

  // 🔢 LOAD COUNT
  const loadCount = async () => {
    const res = await axios.get(`/auth/cart/count/${userId}`);
    setCartCount(res.data);
  };

  // ➕ ADD TO CART
  const addToCart = async (productId, variantId, quantity = 1) => {
    await axios.post("/auth/cart/add", {
    //   userId,
    //   productId,
    //   variantId,
    //   quantity
    // });


        userId: 1,          // 🔴 logged in user id
    productId: (productId),
    variantId: (variantId),
    quantity : quantity
  });

    await loadCart();
    await loadCount();
  };


//   console.log("ADD TO CART PAYLOAD", {
//   userId: 1,
//   productId,
//   variantId,
//   quantity
// });

  // ➖ DECREASE
  const decreaseQty = async (cartItemId) => {
    await axios.put(`/auth/cart/decrease/${cartItemId}`);
    loadCart();
    loadCount();
  };

  // ❌ REMOVE
  const removeItem = async (cartItemId) => {
    await axios.delete(`/auth/cart/remove/${cartItemId}`);
    loadCart();
    loadCount();
  };


  // 🧹 CLEAR CART
const clearCart = async () => {
  await axios.delete(`/auth/cart/clear/${userId}`);
  setCartItems([]);
  setCartCount(0);
};



const loadSummary = async () => {
  const res = await axios.get(`/auth/cart/summary/${userId}`);
  return res.data;
};

const increaseQty = async (cartItemId) => {
  await axios.put(`/auth/cart/increase/${cartItemId}`);
  loadCart();
  loadCount();
};


  useEffect(() => {
    loadCart();
    loadCount();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        decreaseQty,
        removeItem,
        clearCart,
        increaseQty,
        loadSummary

      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
