import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authServices";
import GoogleLoginButton from "../components/GoogleLoginButton";
import AuthLayout from "../layouts/AuthLayout";
import "../styles/login.css";

export default function Login() {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setInfo("");

    let value = identifier.trim();
    if (/^\d{10}$/.test(value)) value = "+91" + value;

    try {
      const res = await loginUser({ email: value, password });
      localStorage.setItem("token", res.data);
      navigate("/products");
    } catch (err) {
      setInfo(err.response?.data || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <h1 className="brand animate-brand">CHOUDHRANI</h1>
      <p className="tagline">Every Saree Tells Her Story</p>

      {/* EMAIL FIELD */}
      <div className="field-wrapper">
        <input
          className="form-control"
          placeholder="Email / Phone / Username"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
      </div>

      {/* PASSWORD FIELD */}
      <div className="field-wrapper">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* FORGOT PASSWORD */}
      <p
        className="forgot forgot-inline"
        onClick={() => navigate("/forgot")}
      >
        Forgot Password?
      </p>

      <button
        className="primary-btn"
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? "Signing in..." : "Login"}
      </button>

      {info && <p className="info-text shake">{info}</p>}

      <div className="divider">OR</div>

      <GoogleLoginButton />

      <p className="register-link">
        New to Choudhrani?{" "}
        <span onClick={() => navigate("/register")}>
          Create Account
        </span>
      </p>
    </AuthLayout>
  );
}
