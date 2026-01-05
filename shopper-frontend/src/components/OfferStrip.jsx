// import "../offerStrip.css";

// export default function OfferStrip() {
//   return (
//     <div className="myntra-offer-strip">
//       <div className="offer-left">
//         <span className="deal">TRENDING DEALS</span>
//         <span className="dot">•</span>
//         <span>
//           UP TO <b>70% OFF</b>
//         </span>
//         <span className="dot">•</span>
//         <span>
//           EXTRA <b>10% OFF</b> ON FIRST PURCHASE
//         </span>
//       </div>

//       <div className="offer-right">
//         USE CODE <span>CHOUDHRANI12</span>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import "../offerStrip.css";

const offers = {
  women: {
    tag: "WOMEN SPECIAL",
    title: "Up To 70% OFF",
    highlight: "Sarees & Ethnic Wear",
    desc: "Extra 10% OFF on first purchase",
    code: "CHOUDHRANI12",
    image:
     "s1.jpg",
  },
  men: {
    tag: "MEN SPECIAL",
    title: "Up To 60% OFF",
    highlight: "Kurtas & Sherwanis",
    desc: "Flat ₹500 OFF on royal wear",
    code: "ROYALMEN",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
  },
};

export default function OfferStrip() {
  const [type, setType] = useState("women");

  useEffect(() => {
    const interval = setInterval(() => {
      setType((prev) => (prev === "women" ? "men" : "women"));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const data = offers[type];

  return (
    <section className={`offer-strip ${type}`}>
      <div className="offer-container">
        {/* LEFT */}
        <div className="offer-content">
          <span className="offer-tag">{data.tag}</span>

          <h2>
            {data.title} <span>{data.highlight}</span>
          </h2>

          <p>{data.desc}</p>

          <div className="coupon-box">
            USE CODE <b>{data.code}</b>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="offer-image"
          style={{ backgroundImage: `url(${data.image})` }}
        />
      </div>
    </section>
  );
}
