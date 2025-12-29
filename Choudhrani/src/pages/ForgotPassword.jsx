import { useState } from "react";
import { forgotPassword } from "../services/authServices";
import "../styles/forgotPassword.css";
import AuthLayout from "../layouts/AuthLayout";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!email) return;

    setLoading(true);
    setInfo("");

    try {
      const res = await forgotPassword(email);
      setInfo(res.data);
    } catch (err) {
      setInfo(err.response?.data || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
    <div className="forgot-page">
      <div className="forgot-card">
        <h1>CHOUDHRANI</h1>
        <p className="subtitle">Reset your password</p>

        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={submit} disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

        {info && <p className="info-text">{info}</p>}
      </div>
    </div>
    </AuthLayout>
  );
}
