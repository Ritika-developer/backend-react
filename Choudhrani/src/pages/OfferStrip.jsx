import "../styles/OfferStrip.css";

export default function OfferSection() {
  return (
    <section className="offer-wrapper">
      
      {/* ===== WOMEN OFFER ===== */}
      <div className="offer-block women">
        <div className="offer-content">
          <span className="offer-tag">WOMEN SPECIAL</span>

          <h2>
            Up To <span>70%</span> OFF
          </h2>

          <h3>Sarees & Ethnic Wear</h3>

          <p>Extra 10% OFF on first purchase</p>

          <div className="coupon">
            USE CODE <strong>CHOUDHRANI12</strong>
          </div>
        </div>

 

      </div>

      {/* ===== MEN OFFER ===== */}
      <div className="offer-block men">
        <div className="offer-content">
          <span className="offer-tag">MEN SPECIAL</span>

          <h2>
            Up To <span>60%</span> OFF
          </h2>

          <h3>Kurtas & Sherwanis</h3>

          <p>Flat ₹500 OFF on royal wear</p>

          <div className="coupon">
            USE CODE <strong>ROYALMEN</strong>
          </div>
        </div>


      
      </div>

    </section>
  );
}
