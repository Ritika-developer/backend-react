// // src/services/CartContext.jsx
// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "../utils/axiosInstance";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const userId = 1; // 🔴 replace with logged-in user id
//   const [cartItems, setCartItems] = useState([]);
//   const [cartCount, setCartCount] = useState(0);

//   // 🔁 LOAD CART
//   const loadCart = async () => {
//     const res = await axios.get(`/auth/cart/${userId}`);
//     setCartItems(res.data);
//   };

//   // 🔢 LOAD COUNT
//   const loadCount = async () => {
//     const res = await axios.get(`/auth/cart/count/${userId}`);
//     setCartCount(res.data);
//   };

//   // ➕ ADD TO CART
//   const addToCart = async (productId, variantId, quantity = 1) => {
//     await axios.post("/auth/cart/add", {
//     //   userId,
//     //   productId,
//     //   variantId,
//     //   quantity
//     // });


//         userId: 1,          // 🔴 logged in user id
//     productId: (productId),
//     variantId: (variantId),
//     quantity : quantity
//   });

//     await loadCart();
//     await loadCount();
//   };


// //   console.log("ADD TO CART PAYLOAD", {
// //   userId: 1,
// //   productId,
// //   variantId,
// //   quantity
// // });

//   // ➖ DECREASE
//   const decreaseQty = async (cartItemId) => {
//     await axios.put(`/auth/cart/decrease/${cartItemId}`);
//     loadCart();
//     loadCount();
//   };

//   // ❌ REMOVE
//   const removeItem = async (cartItemId) => {
//     await axios.delete(`/auth/cart/remove/${cartItemId}`);
//     loadCart();
//     loadCount();
//   };


//   // 🧹 CLEAR CART
// const clearCart = async () => {
//   await axios.delete(`/auth/cart/clear/${userId}`);
//   setCartItems([]);
//   setCartCount(0);
// };



// const loadSummary = async () => {
//   const res = await axios.get(`/auth/cart/summary/${userId}`);
//   return res.data;
// };

// const increaseQty = async (cartItemId) => {
//   await axios.put(`/auth/cart/increase/${cartItemId}`);
//   loadCart();
//   loadCount();
// };


//   useEffect(() => {
//     loadCart();
//     loadCount();
//   }, []);

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         cartCount,
//         addToCart,
//         decreaseQty,
//         removeItem,
//         clearCart,
//         increaseQty,
//         loadSummary

//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

























import { createContext, useContext, useEffect, useState } from "react";
import axios from "../utils/axiosInstance";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  /* 🔹 GET LOGGED IN USER ID */
  const getUserId = () => {
    return localStorage.getItem("userId");
  };

  /* 🔁 LOAD CART */
  const loadCart = async () => {
    const userId = getUserId();
    if (!userId) {
      setCartItems([]);
      return;
    }

    try {
      const res = await axios.get(`/auth/cart/${userId}`);
      setCartItems(res.data);
    } catch (err) {
      console.error("LOAD CART ERROR", err);
    }
  };

  /* 🔢 LOAD COUNT */
  const loadCount = async () => {
    const userId = getUserId();
    if (!userId) {
      setCartCount(0);
      return;
    }

    try {
      const res = await axios.get(`/auth/cart/count/${userId}`);
      setCartCount(res.data);
    } catch (err) {
      console.error("LOAD COUNT ERROR", err);
    }
  };

  /* ➕ ADD TO CART */
  const addToCart = async (productId, variantId, quantity = 1) => {
    const userId = getUserId();
    if (!userId) return;

    await axios.post("/auth/cart/add", {
      userId,
      productId,
      variantId,
      quantity,
    });

    loadCart();
    loadCount();
  };

  /* ➖ DECREASE QTY */
  const decreaseQty = async (cartItemId) => {
    await axios.put(`/auth/cart/decrease/${cartItemId}`);
    loadCart();
    loadCount();
  };

  /* ➕ INCREASE QTY */
  const increaseQty = async (cartItemId) => {
    await axios.put(`/auth/cart/increase/${cartItemId}`);
    loadCart();
    loadCount();
  };

  /* ❌ REMOVE ITEM */
  const removeItem = async (cartItemId) => {
    await axios.delete(`/auth/cart/remove/${cartItemId}`);
    loadCart();
    loadCount();
  };

  /* 🧹 CLEAR CART */
  const clearCart = async () => {
    const userId = getUserId();
    if (!userId) return;

    await axios.delete(`/auth/cart/clear/${userId}`);
    setCartItems([]);
    setCartCount(0);
  };

  /* 📊 CART SUMMARY */
  const loadSummary = async () => {
    const userId = getUserId();
    if (!userId) return null;

    const res = await axios.get(`/auth/cart/summary/${userId}`);
    return res.data;
  };

  /* 🔁 LOAD ON APP START */
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      loadCart();
      loadCount();
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        decreaseQty,
        increaseQty,
        removeItem,
        clearCart,
        loadSummary,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
