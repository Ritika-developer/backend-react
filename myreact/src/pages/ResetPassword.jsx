import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { resetPassword } from "../services/authService";

export default function ResetPassword() {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [password,setPassword] = useState("");

  const submit = async () => {
    const res = await resetPassword(token, password);
    alert(res.data);
  };

  return (
    <>
      <h2>Reset Password</h2>
      <input placeholder="New Password" type="password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={submit}>Reset</button>
    </>
  );
}
