import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import EmailOtpVerify from "./pages/EmailOtpVerify";
import PhoneOtpVerify from "./pages/PhoneOtpVerify";
import ForgotPassword from "./pages/ForgotPasword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<EmailOtpVerify />} />
        <Route path="/verify-phone" element={<PhoneOtpVerify />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
<Route path="/profile" element={<Profile />} />
<Route path="/orders" element={<Orders />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
