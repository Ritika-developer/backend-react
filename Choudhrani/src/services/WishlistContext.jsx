// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "../utils/axiosInstance";

// const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const [wishlistCount, setWishlistCount] = useState(0);

//   const loadWishlistCount = async () => {
//     try {
//       const res = await axios.get("/auth/wishlist/1"); // 👈 userId = 1
//       setWishlistCount(res.data.length);
//     } catch (err) {
//       console.error("WISHLIST COUNT ERROR", err);
//     }
//   };

//   const addToWishlist = async (productId) => {
//     await axios.post("/auth/wishlist/add", {
//       userId: 1,
//       productId
//     });
//     loadWishlistCount();
//   };

//   const removeFromWishlist = async (productId) => {
//     await axios.delete(
//       `/auth/wishlist/remove?userId=1&productId=${productId}`
//     );
//     loadWishlistCount();
//   };

// useEffect(() => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     loadWishlistCount();
//   }
// }, []);


//   return (
//     <WishlistContext.Provider
//       value={{
//         wishlistCount,
//         addToWishlist,
//         removeFromWishlist,
//         loadWishlistCount
//       }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// export const useWishlist = () => useContext(WishlistContext);













// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "../utils/axiosInstance";

// const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const [wishlistCount, setWishlistCount] = useState(0);

//   /* 🔹 GET LOGGED IN USER ID */
//   const getUserId = () =>  localStorage.getItem("userId");
//   ;

//   /* 🔹 LOAD WISHLIST COUNT */
//   const loadWishlistCount = async () => {
//     const userId = getUserId();
//     if (!userId) {
//       setWishlistCount(0);
//       return;
//     }

//     try {
//       const res = await axios.get(`/auth/wishlist/${userId}`);
//       setWishlistCount(res.data.length);
//     } catch (err) {
//       console.error("WISHLIST COUNT ERROR", err);
//     }
//   };

//   /* ❤️ ADD TO WISHLIST */
//   const addToWishlist = async (productId) => {
//     const userId = getUserId();
//     if (!userId) return;

//     await axios.post("/auth/wishlist/add", {
//       userId,
//       productId,
//     });

//     loadWishlistCount();
//   };

//   /* ❌ REMOVE FROM WISHLIST */
//   const removeFromWishlist = async (productId) => {
//     const userId = getUserId();
//     if (!userId) return;

//     await axios.delete(
//       `/auth/wishlist/remove?userId=${userId}&productId=${productId}`
//     );

//     loadWishlistCount();
//   };

//   /* 🔁 LOAD COUNT ON APP START */
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       loadWishlistCount();
//     }
//   }, []);

//   return (
//     <WishlistContext.Provider
//       value={{
//         wishlistCount,
//         addToWishlist,
//         removeFromWishlist,
//         loadWishlistCount,
//       }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// export const useWishlist = () => useContext(WishlistContext);
























import { createContext, useContext, useEffect, useState } from "react";
import axios from "../utils/axiosInstance";
import { toast } from "react-toastify";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistCount, setWishlistCount] = useState(0);

  const getUserId = () => localStorage.getItem("userId");

  const loadWishlistCount = async () => {
    const userId = getUserId();
    if (!userId) return;

    try {
      const res = await axios.get(`/auth/wishlist/${userId}`);
      setWishlistCount(res.data.length);
    } catch (err) {
      console.error("WISHLIST COUNT ERROR", err);
    }
  };

  const addToWishlist = async (productId) => {
    const userId = getUserId();
    if (!userId) {
      toast.info("Please login to save wishlist");
      return;
    }

    await axios.post("/auth/wishlist/add", {
      userId: Number(userId),
      productId,
    });

    toast.success("❤️ Added to wishlist");
    loadWishlistCount();
  };

  const removeFromWishlist = async (productId) => {
    const userId = getUserId();
    if (!userId) return;

    await axios.delete(
      `/auth/wishlist/remove?userId=${userId}&productId=${productId}`
    );

    toast.info("Removed from wishlist");
    loadWishlistCount();
  };

  useEffect(() => {
    loadWishlistCount();
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        wishlistCount,
        addToWishlist,
        removeFromWishlist,
        loadWishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
