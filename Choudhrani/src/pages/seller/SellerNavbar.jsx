import React from "react";
import "../../styles/SellerNavbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function SellerNavbar() {
  return (
    <header className="seller-navbar">

      {/* LEFT BRAND */}
      <div className="navbar-left">
        <span className="brand-dot"></span>
        <h3>Choudhrani's Seller</h3>
      </div>

      {/* RIGHT ACTIONS */}
      <div className="navbar-right">
        <button className="nav-icon">
          <NotificationsNoneIcon />
          <span className="notify-dot"></span>
        </button>

        <div className="nav-profile">
          <AccountCircleIcon className="profile-icon" />
          <span className="profile-name">Seller</span>
        </div>
      </div>

    </header>
  );
}
