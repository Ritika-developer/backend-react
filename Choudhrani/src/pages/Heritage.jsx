import { Link } from "react-router-dom";
import "../styles/heritage.css";

export default function Heritage() {
  return (
    <section className="heritage-section">
      <div className="container">
        <div className="row align-items-center">
          
          {/* LEFT CONTENT */}
          <div className="col-md-5 heritage-content" data-aos="fade-right">
            <h2 className="heritage-heading">Our Heritage</h2>

            <div className="heritage-divider"></div>

            <p className="heritage-text">
              CHOUDHRANI celebrates generations of Indian women,  
              their rituals, emotions, traditions, and royal elegance.  
              Each weave carries a legacy of timeless Indian craftsmanship.
            </p>

            <blockquote className="heritage-quote">
              “Heritage is not just fashion – it’s emotion.”
            </blockquote>

            <Link to="/products" className="heritage-btn">
              Explore More
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-7">
            <div className="heritage-img-wrapper" data-aos="fade-left">
              <div className="heritage-img"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
