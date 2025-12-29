import { useState } from "react";
import { verifyPhoneOtp } from "../services/authServices";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

export default function PhoneOtpVerify() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    try {
      const res = await verifyPhoneOtp(phone, otp);
      alert(res.data);
      navigate("/login");
    } catch {
      alert("Invalid OTP");
    }
  };

  return (
    <>
    <AuthLayout>
      <h2>Phone OTP</h2>
      <input placeholder="Phone" onChange={e=>setPhone(e.target.value)} />
      <input placeholder="OTP" onChange={e=>setOtp(e.target.value)} />
      <button onClick={submit}>Verify</button>
      </AuthLayout>
    </>
  );
}
