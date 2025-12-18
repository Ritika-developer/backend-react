import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/sareeTheme.css";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>

      {/* HERO SECTION */}
      <section className="hero" data-aos="fade-in">
        <div className="hero-content">
          <h1>CHOUDHRANI</h1>
          <p>Where Tradition Meets Royal Elegance</p>

          <div className="hero-buttons">
            <button onClick={() => navigate("/products")}>
              Explore Collection
            </button>
            <button className="outline-btn">
              Bridal Special
            </button>
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="story" data-aos="fade-up">
        <h2>Our Story</h2>
        <p>
          CHOUDHRANI celebrates Indian heritage through hand-picked sarees,
          inspired by royal culture and designed for today’s modern woman.
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="categories" data-aos="fade-up">
        <h2>Shop By Category</h2>

        <div className="category-grid">
          <div className="category-card" data-aos="zoom-in">
            <h3>Silk Sarees</h3>
            <p>Luxury woven with tradition</p>
          </div>
          <div className="category-card" data-aos="zoom-in" data-aos-delay="100">
            <h3>Cotton Sarees</h3>
            <p>Comfort for everyday elegance</p>
          </div>
          <div className="category-card" data-aos="zoom-in" data-aos-delay="200">
            <h3>Bridal Sarees</h3>
            <p>For your most special moments</p>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="featured" data-aos="fade-up">
        <h2>Featured Collection</h2>

        <div className="featured-grid">
          <div className="product-card">
            <img src="/s1.jpg" alt="Banarasi Silk Saree" />
            <h4>Banarasi Silk</h4>
            <p>₹4,999</p>
          </div>

          <div className="product-card">
            <img src="/s2.jpg" alt="Kanjivaram Saree" />
            <h4>Kanjivaram Saree</h4>
            <p>₹6,999</p>
          </div>

          <div className="product-card">
            <img src="/s3.jpg" alt="Designer Saree" />
            <h4>Designer Saree</h4>
            <p>₹5,499</p>
          </div>
        </div>
      </section>

      {/* WHY CHOUDHRANI */}
      <section className="why" data-aos="fade-in">
        <div>👑 Royal Designs</div>
        <div>🧵 Handcrafted Quality</div>
        <div>🚚 Fast Delivery</div>
        <div>💯 Trusted Brand</div>
      </section>

      {/* FINAL CTA */}
      <section className="cta" data-aos="zoom-in">
        <h2>Wear the Legacy. Feel the Royalty.</h2>
        <button onClick={() => navigate("/products")}>
          Shop Now
        </button>
      </section>

    </div>
  );
}
