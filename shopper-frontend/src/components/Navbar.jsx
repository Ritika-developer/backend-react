export default function Navbar({ cartCount }) {
  return (
    <header className="navbar">
      <h1>👑 CHOUDHRANI</h1>

      <nav>
        <a href="/">Home</a>
        <a href="#">Sarees</a>
        <a href="#">Bridal</a>
        <a href="#">Contact</a>
        <a href="#" className="cart-icon">🛒{cartCount > 0 && <span className="cart-badge">{cartCount}</span>}</a>
        
        
        {/* <div className="cart-icon">🛒
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div> */}
      </nav>
    </header>
  );
}
