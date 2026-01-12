import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "../src/index.css"
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
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import ProductDetailPage from "./pages/ProductDetailPage"; 

/* routes */
import ProtectedRoute from "./routes/ProtectedRoute";

import SellerPanel from "./pages/sellerPanel";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
    <Routes>

      {/* 🔐 AUTH PAGES */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<EmailOtpVerify />} />
        <Route path="/verify-phone" element={<PhoneOtpVerify />} />
      </Route>

      {/* 🌐 MAIN WEBSITE */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />

        {/* 🔒 PROTECTED */}
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
<Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/products" element={<Products />} />


    </Routes>
    </>
  );
}
