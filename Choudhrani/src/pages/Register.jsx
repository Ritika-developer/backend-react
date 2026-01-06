import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authServices";
import GoogleLoginButton from "../components/GoogleLoginButton";
import "../styles/register.css";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    setInfo("");

    registerUser(form)
      .then((res) => {
        const msg = String(res.data || "");
        if (msg.toLowerCase().includes("verify")) {
          navigate("/verify-email");
          return;
        }
        setInfo(msg);
      })
      .catch(() => {
        setInfo("Account already exists. Please login.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <h1 className="brand animate-brand">CHOUDHRANI</h1>

      {/* 🔥 GOOGLE SIGN-IN FIRST */}
      <GoogleLoginButton />

      <div className="divider">OR</div>

      {/* 🔽 NORMAL REGISTER FORM */}
      <form onSubmit={handleRegister}>
        <div className="field-wrapper">
          <input
            name="username"
            className="form-control"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />
        </div>

        <div className="field-wrapper">
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Email Address"
            required
            onChange={handleChange}
          />
        </div>

        <div className="field-wrapper">
          <input
            name="phone"
            className="form-control"
            placeholder="Phone Number"
            required
            onChange={handleChange}
          />
        </div>

        <div className="field-wrapper">
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Password"
            required
            onChange={handleChange}
          />
        </div>

        <button
          className="primary-btn"
          type="submit"
          disabled={loading}
        >
          {loading ? "Registering..." : "Create Account"}
        </button>
      </form>

      {info && <p className="info-text shake">{info}</p>}

      {/* 🔗 LOGIN LINK ( HOVER EFFECT) */}
      <p className="login-link">
        Already have an account?{" "}
        <span onClick={() => navigate("/login")}>Login</span>
      </p>
      </>
  );
}
