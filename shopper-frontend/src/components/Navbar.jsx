<nav className="navbar navbar-expand-lg bg-maroon sticky-top px-4 ch-navbar">
  <div className="container-fluid">

    {/* LEFT LINKS */}
    <div className="collapse navbar-collapse w-25" id="navMenu">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/products">Sarees</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/collections">Collections</Link>
        </li>
      </ul>
    </div>

    {/* CENTER BRAND */}
    <Link className="navbar-brand mx-auto brand-center text-gold" to="/">
      👑 CHOUDHRANI
    </Link>

    {/* RIGHT ICONS */}
    <div className="d-flex align-items-center gap-4 w-25 justify-content-end">
      <Link to="/login" className="text-white">Login</Link>

      <div className="cart-wrapper">
        🛒 <span className="cart-count">2</span>

        {/* MINI CART */}
        <div className="mini-cart">
          <p>Kanjeevaram Saree</p>
          <p className="price">₹8,999</p>
          <button className="btn btn-sm btn-maroon w-100">View Cart</button>
        </div>
      </div>
    </div>

  </div>
</nav>
