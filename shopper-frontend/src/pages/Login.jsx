// // src/pages/Login.jsx
// import { useState } from "react";
// import { loginUser } from "../api/authApi";
// import "../styles/sareeTheme.css";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const res = await loginUser({ email, password });
//       localStorage.setItem("token", res.data);
//       alert("Login successful");
//     } catch {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="auth-box">
//       <h2>Login</h2>

//       <input placeholder="Email / Username / Phone" onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

