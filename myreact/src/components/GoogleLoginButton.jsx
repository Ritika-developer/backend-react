import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function GoogleLoginButton() {
  const navigate = useNavigate();

  const handleGoogleResponse = async (response) => {
    try {
      const idToken = response.credential;

      const res = await axios.post(
        "http://localhost:8080/start/google",
        { idtoken: idToken }
      );

      localStorage.setItem("token", res.data);
      navigate("/dashboard");
    } catch (e) {
      alert("Google login failed");
    }
  };

  useEffect(() => {
    if (!window.google) return;

    const container = document.getElementById("googleBtn");
    if (!container) return;

    container.innerHTML = "";

    /* global google */
    google.accounts.id.initialize({
      client_id:
        "716767937542-goni6ocsqa8codjq43smka541hk6ojji.apps.googleusercontent.com",
      callback: handleGoogleResponse,
    });

    google.accounts.id.renderButton(container, {
      theme: "outline",
      size: "large",
      width: 280, // NUMBER ONLY
    });
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
      <div id="googleBtn"></div>
    </div>
  );
}
