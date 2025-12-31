import { Link } from "react-router-dom";
import "../styles/home.css";

const products = [
  {
    name: "Royal Banarasi Saree",
    price: "₹14,999",
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
  },
  {
    name: "Kanjeevaram Silk Saree",
    price: "₹18,500",
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
  },
  {
    name: "Handwoven Chanderi",
    price: "₹11,200",
    img: "https://images.unsplash.com/photo-1618354691515-ec6f2f2c0b33",
  },
  {
    name: "Designer Bridal Saree",
    price: "₹25,000",
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
  },
];

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg sticky-top ch-navbar">
        <div className="container-fluid">
          <ul className="navbar-nav d-none d-lg-flex">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
          </ul>

          <span className="navbar-brand mx-auto brand-center">
            CHAUDHRANI
          </span>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Search</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Cart</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO SLIDER */}
      <section className="hero-slider">
        <div className="hero-slide slide1"></div>
        <div className="hero-slide slide2"></div>
        <div className="hero-slide slide3"></div>

        <div className="hero-overlay-content">
          <h1>Every Saree Tells<br />Her Story</h1>
          <p>ROYAL • INDIAN • TIMELESS</p>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container section-padding">
        <h2 className="section-title">Featured Collection</h2>
        <div className="row g-4">
          {products.map((p, i) => (
            <div className="col-12 col-md-6 col-lg-3" key={i}>
              <div className="product-card">
                <div className="product-img">
                  <img src={p.img} alt={p.name} />
                  <span className="wishlist">❤</span>
                </div>

                <div className="product-info text-center">
                  <h5>{p.name}</h5>
                  <div className="price-cart">
                    <span className="price">{p.price}</span>
                    <button className="add-cart">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORY STORY */}
      <section className="container section-padding">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="category-box silk">
              <h2>Pure Silk Sarees</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="category-box bridal">
              <h2>Bridal Heirlooms</h2>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL */}
      <section className="editorial-full">
        <div className="editorial-content">
          <h2>Woven With Heritage</h2>
          <p>
            Crafted by Indian artisans, every Chaudhrani saree
            preserves tradition, emotion, and timeless beauty.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="container section-padding">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <h2>Rooted in Indian Heritage</h2>
            <p>
              Chaudhrani celebrates the soul of Indian womanhood —
              grace, strength, and elegance passed through generations.
            </p>
          </div>
          <div className="col-md-6">
            <div className="story-image"></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonial-section">
        <h2>Voices of Chaudhrani</h2>
        <div className="container">
          <div className="row g-4">
            {["Elegant", "Royal", "Authentic"].map((t, i) => (
              <div className="col-md-4" key={i}>
                <div className="testimonial-card">
                  <p>“Absolutely {t}. A true luxury experience.”</p>
                  <strong>— Chaudhrani Woman</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOOKBOOK */}
      <section className="lookbook">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="lookbook-img"></div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <h5>About</h5>
              <p>Luxury Indian sarees inspired by heritage & emotion.</p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul>
                <li>Home</li>
                <li>Collections</li>
                <li>Cart</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Newsletter</h5>
              <input className="form-control" placeholder="Your email" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
