import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackTop";
export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
    <Navbar />
    <div className="dashboard-page">
      {/* TOP BAR */}
      {/* <div className="dashboard-header">
        <h1 className="brand1">CHOUDHRANI</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div> */}

      {/* MAIN CONTENT */}
      <div className="dashboard-content">
        <h2>Welcome to Your Dashboard ✨</h2>
        <p>
          You are successfully logged in.  
          Explore our exclusive collection of royal Indian sarees.
        </p>

        <div className="cards">
          <div className="card">
            <h3>🛍 My Orders</h3>
            <p>View your recent purchases</p>
          </div>

          <div className="card">
            <h3>❤️ Wishlist</h3>
            <p>Your favorite sarees</p>
          </div>

          <div className="card">
            <h3>👤 Profile</h3>
            <p>Manage account details</p>
          </div>

          <div className="card">
            <h3>📦 Track Order</h3>
            <p>Check delivery status</p>
          </div>
        </div>
      </div>
    </div>
     <Footer />
     <BackToTop />
    </>

  );
}
