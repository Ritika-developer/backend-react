import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>CHOUDHRANI</h2>
          <p>Every Saree Tells Her Story</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/products">Sarees</a>
          <a href="/cart">Cart</a>
          <a href="/orders">My Orders</a>
        </div>

        <div className="footer-links">
          <h4>Support</h4>
          <a href="/profile">My Account</a>
          <a href="/forgot">Forgot Password</a>
          <a href="#">Shipping Policy</a>
          <a href="#">Return Policy</a>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📧 support@choudhrani.com</p>
          <p>📞 +91 62642 02472</p>
          <p>📍 India</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} CHOUDHRANI. All Rights Reserved.
      </div>
    </footer>
  );
}
