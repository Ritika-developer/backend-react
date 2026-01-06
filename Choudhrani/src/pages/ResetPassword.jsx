import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { resetPassword } from "../services/authServices";

export default function ResetPassword() {

  const [params] = useSearchParams();
  const navigate = useNavigate();

  const token = params.get("token");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ✅ token validation
  useEffect(() => {
    if (!token) {
      setError("Invalid or expired reset link");
    }
  }, [token]);

  const submit = async () => {

    if (!password) {
      setError("Password is required");
      return;
    }

    if (!token) {
      setError("Reset link is invalid");
      return;
    }

    try {
      const res = await resetPassword(token, password);
      alert(res.data);

      // ✅ VERY IMPORTANT
      navigate("/login");

    } catch (err) {
      setError(
        err.response?.data || "Reset link expired or invalid"
      );
    }
  };

  return (
   <>
      <h2>Reset Password</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        placeholder="New Password"
        type="password"
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={submit} disabled={!token}>
        Reset
      </button>
 </>
  );
}
