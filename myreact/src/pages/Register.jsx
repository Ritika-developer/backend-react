import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
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
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    setInfo("");
    setAlreadyRegistered(false);

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
        // ✅ Already registered user
        setInfo("Already register. Please login or sign in  to continue.");
        setAlreadyRegistered(true);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h1 className="brand">CHOUDHRANI</h1>
        <p className="tagline">Every Saree Tells Her Story</p>

        <form onSubmit={handleRegister}>
          <input
            name="username"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />

          <button className="primary-btn" type="submit" disabled={loading}>
            {loading ? "Registering..." : "Create Account"}
          </button>
        </form>

        {info && <p className="info-text">{info}</p>}

        {/* ✅ ALREADY REGISTERED → GIVE CHOICE */}
        {alreadyRegistered && (
          <>
            {/* <div className="divider">Choose Login Method</div> */}

            {/* Google Login (optional) */}
            <GoogleLoginButton />

            {/* Normal Login */}
            {/* <button
              className="secondary-btn"
              onClick={() => navigate("/login")}
            >
              Login 
            </button> */}
          </>
        )}

        <p className="login-link">
          Already a Choudhrani?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
}
