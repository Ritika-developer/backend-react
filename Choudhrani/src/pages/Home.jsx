import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-maroon sticky-top px-4">
        <Link className="navbar-brand fw-bold text-gold" to="/">
          👑 CHOUDHRANI
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/products">Sarees</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/collections">Collections</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-choudhrani d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-white text-start">
              <h1 className="hero-title text-gold">
                Every Saree Tells Her Story
              </h1>
              <p className="mt-3">
                Royal Indian Sarees • Tradition Woven with Grace
              </p>

              <div className="mt-4 d-flex gap-3">
                <Link to="/products" className="btn btn-outline-light">
                  Shop Sarees
                </Link>
                <Link to="/collections" className="btn btn-outline-light">
                  View Collections
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTION BANNERS */}
      <section className="container my-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="banner silk">
              <div className="overlay">
                <h3>Pure Silk Sarees</h3>
                <Link to="/products">Explore</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="banner bridal">
              <div className="overlay">
                <h3>Bridal Collection</h3>
                <Link to="/products">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="container my-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h2 className="text-maroon">Rooted in Indian Heritage</h2>
            <p className="mt-3">
              CHOUDHRANI celebrates the grace of Indian women.
              Every saree reflects tradition, culture, and timeless beauty.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="editorial-image"></div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="container my-5">
        <h2 className="mb-4 text-center">Featured Sarees</h2>
        <div className="row g-4">
          {[
            {
              name: "Kanjeevaram Silk Saree",
              price: "₹8,999",
              img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2"
            },
            {
              name: "Handloom Cotton Saree",
              price: "₹3,199",
              img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c"
            },
            {
              name: "Designer Bridal Saree",
              price: "₹15,499",
              img: "https://images.unsplash.com/photo-1598514982361-3a2c8f5c4c4a"
            }
          ].map((item, i) => (
            <div className="col-md-4" key={i}>
              <div className="card h-100 shadow-sm">
                <img
                  src={item.img}
                  alt={item.name}
                  className="card-img-top featured-img"
                />
                <div className="card-body text-center">
                  <h5>{item.name}</h5>
                  <span className="text-maroon fw-semibold">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter-choudhrani text-center">
        <h3>Be a Part of CHOUDHRANI</h3>
        <p className="mt-2">
          Get exclusive offers & early access to new collections
        </p>

        <div className="d-flex justify-content-center mt-3 gap-2 flex-wrap ">
          <input
            type="email"
            className="form-control w-50 min-w-250"
            placeholder="Enter your email"
          />
          <button className="btn btn-maroon">Join Now</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-choudhrani text-center">
        © 2025 CHOUDHRANI — Royal Indian Sarees
      </footer>
    </>
  );
}
