import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import GoogleLoginButton from "../components/GoogleLoginButton";
import "../styles/login.css";

export default function Login() {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState(""); // email / phone / username
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setInfo("");

    // 🔑 Normalize identifier for phone login
    let value = identifier.trim();

    // If user enters 10-digit phone, auto add +91
    if (/^\d{10}$/.test(value)) {
      value = "+91" + value;
    }

    try {
      const res = await loginUser({
        email: value, // backend accepts email/username/phone in same field
        password,
      });

      localStorage.setItem("token", res.data);
      navigate("/dashboard");
    } catch (err) {
      setInfo(err.response?.data || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="brand">CHOUDHRANI</h1>
        <p className="tagline">Every Saree Tells Her Story</p>

        <input
          placeholder="Email / Phone / Username"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="primary-btn"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Signing in..." : "Login"}
        </button>

        {info && <p className="info-text">{info}</p>}

        <div className="divider">OR</div>

        {/* 🔵 Google Login */}
        <GoogleLoginButton />

        <p className="forgot" onClick={() => navigate("/forgot")}>
          Forgot Password?
        </p>

        <p className="register-link">
          New to Choudhrani?{" "}
          <span onClick={() => navigate("/")}>Create Account</span>
        </p>
      </div>
    </div>
  );
}
