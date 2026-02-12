


// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "../utils/axiosInstance";
// import { toast } from "react-toastify";

// const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const [wishlistCount, setWishlistCount] = useState(0);

//   const getUserId = () => localStorage.getItem("userId");

//   const loadWishlistCount = async () => {
//     const userId = getUserId();
//     if (!userId) return;

//     try {
//       const res = await axios.get(`/auth/wishlist/${userId}`);
//       setWishlistCount(res.data.length);
//     } catch (err) {
//       console.error("WISHLIST COUNT ERROR", err);
//     }
//   };

//   const addToWishlist = async (productId) => {
//     const userId = getUserId();
//     if (!userId) {
//       toast.info("Please login to save wishlist");
//       return;
//     }

//     await axios.post("/auth/wishlist/add", {
//       userId: Number(userId),
//       productId,
//     });

//     toast.success("❤️ Added to wishlist");
//     loadWishlistCount();
//   };

//   const removeFromWishlist = async (productId) => {
//     const userId = getUserId();
//     if (!userId) return;

//     await axios.delete(
//       `/auth/wishlist/remove?userId=${userId}&productId=${productId}`
//     );

//     toast.info("Removed from wishlist");
//     loadWishlistCount();
//   };

//   useEffect(() => {
//     loadWishlistCount();
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
  const [wishlistIds, setWishlistIds] = useState([]);
  const [wishlistCount, setWishlistCount] = useState(0);

  const getUserId = () => localStorage.getItem("userId");

  /* 🔹 LOAD FULL LIST */
  const loadWishlist = async () => {
    const userId = getUserId();
    if (!userId) return;

    try {
      const res = await axios.get(`/auth/wishlist/${userId}`);

      // backend returns list of products
      const ids = res.data.map((item) => item.productId || item.id);

      setWishlistIds(ids);
      setWishlistCount(ids.length);
    } catch (err) {
      console.error("WISHLIST ERROR", err);

    }
  };

  /* ❤️ ADD */
  const addToWishlist = async (productId) => {
    const userId = getUserId();
    if (!userId) {
      toast.info("Please login first");
      return;
    }

    await axios.post("/auth/wishlist/add", {
      userId: Number(userId),
      productId,
    });

    toast.success("❤️ Added to wishlist");

    setWishlistIds((prev) => [...prev, productId]);
    setWishlistCount((prev) => prev + 1);
  };

  /* ❌ REMOVE */
  const removeFromWishlist = async (productId) => {
    const userId = getUserId();
    if (!userId) return;

    await axios.delete(
      `/auth/wishlist/remove?userId=${userId}&productId=${productId}`
    );

    toast.info("Removed");

    setWishlistIds((prev) => prev.filter((id) => id !== productId));
    setWishlistCount((prev) => prev - 1);
  };

  /* ⭐ IMPORTANT (for toggle button) */
  const isInWishlist = (productId) => wishlistIds.includes(productId);

  useEffect(() => {
    loadWishlist();
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        wishlistIds,
        wishlistCount,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
