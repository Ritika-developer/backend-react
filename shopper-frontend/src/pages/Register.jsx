// src/pages/Register.jsx
import { useState } from "react";
import { registerUser } from "../api/authApi";
import "../styles/sareeTheme.css";

export default function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
    phone: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async () => {
    try {
      const res = await registerUser(form);
      alert(res.data);
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="auth-box">
      <h2>Create Account</h2>

      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="username" placeholder="Username" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
