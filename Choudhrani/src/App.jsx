// import { Routes, Route } from "react-router-dom";
// import { useEffect } from "react";
// import AOS from "aos";
// import "../src/index.css"
// import { CartProvider } from "./services/CartContext";
// import { WishlistProvider } from "./services/WishlistContext";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// /* layouts */
// import AuthLayout from "./layouts/AuthLayout";
// import MainLayout from "./layouts/MainLayout";

// /* pages */
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import ForgotPassword from "./pages/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword";
// import EmailOtpVerify from "./pages/EmailOtpVerify";
// import PhoneOtpVerify from "./pages/PhoneOtpVerify";
// import Products from "./pages/Products";
// import Cart from "./pages/Carts";
// import Profile from "./pages/Profile";
// import Dashboard from "./pages/Dashboard";
// import ProductDetailPage from "./pages/ProductDetailPage"; 
// import WishlistPage from "./pages/WishlistPage";
// import CheckoutPage from "./pages/CheckoutPage";
// import OrdersPage from "./pages/OrdersPage";
// /* routes */
// import ProtectedRoute from "./routes/ProtectedRoute";

// import SellerPanel from "./pages/sellerPanel";
// import AdminOrders from "./pages/AdminOrders";

// export default function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       once: true,
//     });
//   }, []);

//   return (
//     <>
//       <CartProvider>
//          <WishlistProvider>
//     <Routes>

//       {/* 🔐 AUTH PAGES */}
//       <Route element={<AuthLayout />}>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/forgot" element={<ForgotPassword />} />
//         <Route path="/reset-password" element={<ResetPassword />} />
//         <Route path="/verify-email" element={<EmailOtpVerify />} />
//         <Route path="/verify-phone" element={<PhoneOtpVerify />} />
//         <Route path="/admin/orders" element={<AdminOrders />} />
//       </Route>

//       {/* 🌐 MAIN WEBSITE */}
//       <Route element={<MainLayout />}>
//         <Route path="/" element={<Home />} />
//          <Route path="/products" element={<Products />} />
//     <Route path="/products/:id" element={<ProductDetailPage />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/profile" element={<Profile />} />
//  <Route path="/wishlist" element={<WishlistPage />} />
//  <Route path="/checkout" element={<CheckoutPage />} />
// <Route path="/orders" element={<OrdersPage />} />
//         {/* 🔒 PROTECTED */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />
// </Route>


    
// <Route path="/seller-product-create" element={<SellerPanel />} />
// {/* <Route path="/products/:id" element={<ProductDetailPage />} />
//         <Route path="/products" element={<Products />} /> */}

//     </Routes>
//     </WishlistProvider>
//     </CartProvider>
//      <ToastContainer position="top-right" autoClose={2000} />
//     </>
//   );
// }























import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "../src/index.css";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

import { CartProvider } from "./services/CartContext";
import { WishlistProvider } from "./services/WishlistContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* layouts */
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

/* pages */
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import EmailOtpVerify from "./pages/EmailOtpVerify";
import PhoneOtpVerify from "./pages/PhoneOtpVerify";
import Products from "./pages/Products";
import Cart from "./pages/Carts";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import ProductDetailPage from "./pages/ProductDetailPage";
import WishlistPage from "./pages/WishlistPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";

/* routes */
import ProtectedRoute from "./routes/ProtectedRoute";

import SellerPanel from "./pages/sellerPanel";
import AdminOrders from "./pages/AdminOrders";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <CartProvider>
        <WishlistProvider>

          <Routes>

            {/* 🔐 AUTH */}
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/verify-email" element={<EmailOtpVerify />} />
              <Route path="/verify-phone" element={<PhoneOtpVerify />} />
              <Route path="/admin/orders" element={<AdminOrders />} />
            </Route>

            {/* 🌐 MAIN */}
            <Route element={<MainLayout />}>

              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/orders" element={<OrdersPage />} />

              {/* 🔒 Protected */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="/seller-product-create" element={<SellerPanel />} />

          </Routes>

        </WishlistProvider>
      </CartProvider>

      <ToastContainer position="top-right" autoClose={2000} />
    </ThemeProvider>
  );
}

