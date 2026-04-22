// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function GoogleLoginButton() {
//   const navigate = useNavigate();

//   const handleGoogleResponse = async (response) => {
//     try {
//       const idToken = response.credential;

//       const res = await axios.post(
//         "http://localhost:8080/auth/google",
//         { idtoken: idToken }
//       );

//       localStorage.setItem("token", res.data.token);
//         localStorage.setItem("userId", String(res.data.id));
//         // 👤 USER INFO
//     localStorage.setItem(
//       "user",
//       JSON.stringify({
//         id: res.data.id,
//         name: res.data.name,
//         email: res.data.email
//       })
//     );
//       navigate("/products");
//     }catch (e) {
//   console.log("Google Error 👉", e.response?.data || e.message);
//   alert("Google login failed");
// }

//   };

//   useEffect(() => {
//     if (!window.google) return;

//     const container = document.getElementById("googleBtn");
//     if (!container) return;

//     container.innerHTML = "";

//     /* global google */
//     google.accounts.id.initialize({
//       client_id:
//         "716767937542-goni6ocsqa8codjq43smka541hk6ojji.apps.googleusercontent.com",
//       callback: handleGoogleResponse,
//     });

//     google.accounts.id.renderButton(container, {
//       theme: "outline",
//       size: "large",
//       width: 280, // NUMBER ONLY
//     });
//   }, []);

//   return (
//     <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
//       <div id="googleBtn"></div>
//     </div>
//   );
// }
























// import { useEffect } from "react";
// import { authController } from "../controllers/authController";
// import { useNavigate } from "react-router-dom";

// export default function GoogleLoginButton() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     /* global google */
//     google.accounts.id.initialize({
//       client_id:"716767937542-goni6ocsqa8codjq43smka541hk6ojji.apps.googleusercontent.com",
//       callback: handleGoogleResponse
//     });

//     google.accounts.id.renderButton(
//       document.getElementById("googleBtn"),
//       {
//         theme: "outline",
//         size: "large",
     
//       }
//     );
//   }, []);

//   const handleGoogleResponse = async (response) => {
//     try {
//       const token = await authController.googleLogin(response.credential);
//       localStorage.setItem("token", token);
//       alert("Google Login Successful");
//       navigate("/");
//     } catch (err) {
//       alert("Google Login Failed");
//     }
//   };

//   return <div id="googleBtn" className="d-flex justify-content-center"></div>;
// }







import { useEffect } from "react";
import { authController } from "../controllers/authController";
import { useNavigate } from "react-router-dom";

export default function GoogleLoginButton() {

  const navigate = useNavigate();

  useEffect(() => {

    /* global google */
    google.accounts.id.initialize({
      client_id:
        "716767937542-goni6ocsqa8codjq43smka541hk6ojji.apps.googleusercontent.com",
      callback: handleGoogleResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("googleBtn"),
      {
        theme: "outline",
        size: "large",
        width: 280
      }
    );

  }, []);

  const handleGoogleResponse = async (response) => {

    try {

      const res = await authController.googleLogin(response.credential);

      // ✅ Correct data save
      localStorage.setItem("token", res.token);
      localStorage.setItem("userId", res.id);

      localStorage.setItem(
        "user",
        JSON.stringify({
          id: res.id,
          name: res.name,
          email: res.email
        })
      );

      alert("Google Login Successful");
      navigate("/products");

    } catch (err) {

      console.log("Google Login Error 👉", err);
      alert("Google Login Failed");

    }
  };

  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <div id="googleBtn"></div>
    </div>
  );
}
