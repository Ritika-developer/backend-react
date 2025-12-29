import { useState } from "react";
import { verifyEmailOtp } from "../services/authServices";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

export default function EmailOtpVerify() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    try {
      const res = await verifyEmailOtp(email, otp);
      alert(res.data);
      navigate("/verify-phone");
    } catch {
      alert("Invalid OTP");
    }
  };

  return (
    <>
     <AuthLayout>
      <h2>Email OTP</h2>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input placeholder="OTP" onChange={e=>setOtp(e.target.value)} />
      <button onClick={submit}>Verify</button>
      </AuthLayout>
    </>
  );
}
