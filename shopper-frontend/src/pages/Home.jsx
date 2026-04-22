// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="container-fluid bg-light p-4">

//       {/* Hero */}
//       <div className="bg-primary text-white p-5 rounded mb-4 text-center">
//         <h1>Welcome to ShopKart</h1>
//         <p>India's trusted online shopping destination</p>
//         <button
//           className="btn btn-warning fw-bold"
//           onClick={() => navigate("/products")}
//         >
//           Shop Now
//         </button>
//       </div>

//       {/* Categories */}
//       <div className="row text-center mb-4">
//         {["Mobiles", "Electronics", "Fashion"].map(c => (
//           <div
//             key={c}
//             className="col-md"
//             style={{ cursor: "pointer" }}
//             onClick={() => navigate("/products")}
//           >
//             <div className="card shadow-sm p-3">
//               <h6>{c}</h6>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Products */}
//       <h4 className="mb-3">Deals for You</h4>
//       <div className="row">
//         {[1,2,3,4].map(id => (
//           <div key={id} className="col-md-3 mb-4">
//             <div
//               className="card shadow-sm h-100"
//               style={{ cursor: "pointer" }}
//               onClick={() => navigate(`/product/${id}`)}
//             >
//               <div className="card-body text-center">
//                 <div className="bg-secondary mb-3" style={{height:120}} />
//                 <h6>Product Name</h6>
//                 <p className="fw-bold text-success">₹999</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }















import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import OfferStrip from "../pages/OfferStrip";
// import Heritage from "./Heritage";
import { useCart } from "../services/CartContext";
import "../style/choudhrani.css"

export default function Home() {
 const { addToCart } = useCart();

const items = [
  "Bridal Heritage",
  "Banarasi Silk",
  "Festive Classics",
  "Everyday Grace",
 
];

  const slides = [
    {
      type: "women",
      title: "Every Saree Tells Her Story",
      desc: "Heritage woven with emotion and crafted for timeless grace.",
      // link: "/products?category=women",
      link: "/products",
      className: "slide-women"
    },
    {
      type: "men",
      title: "Royal Wear for the Modern Maharaja",
      desc: "Timeless kurtas & sherwanis crafted with power and pride.",
      link: "/products?category=men",
      className: "slide-men"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>

   
<div className="home-page">


        {/* HERO SLIDER */}
        <section className="hero-section">

          {/* BACKGROUND SLIDES */}
          {slides.map((slide, index) => (
            <Link
              key={index}
              to={slide.link}
              className={`hero-slide ${slide.className} ${
                current === index ? "active" : ""
              }`}
            />
          ))}

          {/* HERO TEXT */}
          <div className="hero-text" data-aos="fade-up">
            <h1>{slides[current].title}</h1>
            <p>{slides[current].desc}</p>

            <Link to={slides[current].link} className="hero-btn">
              Explore Collection
            </Link>
          </div>

        </section>

{/* <Heritage/> */}

{/* MEN'S WEAR */}
<section className="mens-section container">
  <h2 className="section-title" data-aos="fade-up">Men’s Royal Edit</h2>

  <div className="row g-4 align-items-center">
    {/* Left Image */}
    <div className="col-md-6" data-aos="fade-right">
      <div className="mens-image"></div>
    </div>

    {/* Right Content */}
    <div className="col-md-6 mens-text" data-aos="fade-left">
      <h3>For the Modern Maharaja</h3>
      <p>
        Handcrafted kurtas, sherwanis, and festive wear designed
        for elegance, strength, and timeless Indian royalty.
      </p>
      {/* <Link to="/products?category=men" className="hero-btn">
        Explore Men’s Collection
      </Link> */}
       <Link to="/products" className="hero-btn">
        Explore Men’s Collection
      </Link>
    </div>
  </div>
</section>

{/* WOMEN'S WEAR */}
<section className="womens-section container">
  <h2 className="section-title" data-aos="fade-up">Women’s Royal Edit</h2>

  <div className="row g-4 align-items-center">

    {/* Left Content */}
    <div className="col-md-6 womens-text" data-aos="fade-right">
      <h3>Elegance Woven in Every Thread</h3>
      <p>
        Luxurious sarees and festive wear crafted to celebrate
        grace, tradition, and the timeless beauty of Indian women.
      </p>
      <Link to="/products" className="hero-btn">
        Explore Women’s Collection
      </Link>
    </div>

    {/* Right Image */}
    <div className="col-md-6" data-aos="fade-left">
      <div className="womens-image"></div>
    </div>

  </div>
</section>



      {/* <Collections /> */}
        <section className="collections container">
      <h2 className="section-title" data-aos="fade-up">Signature Collections</h2>
      <div className="row">
        {items.map((item, i) => (
          <div className="col-md-3" key={i} data-aos="zoom-in"
              data-aos-delay={i * 120}>
            <div className="collection-card">
              <div className={`collection-img img-${i}`}></div>
              <h5>{item}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>

{/* <OfferStrip /> */}

{/* MEN PRODUCTS */}
<section className="products container text-center">
  <h2 className="section-title" data-aos="fade-up">Men’s New Arrivals</h2>

  <div className="row g-4">
    {[1,2,3,4].map(i => (
      <div className="col-md-3" key={i} data-aos="fade-up">
        <div className="product-card">
          <div className={`product-img men-${i}`}></div>
          <h6>Royal Sherwani</h6>
          <span className="price">₹28,000</span>
           <button
            className="add-cart"
            onClick={(e) => {
              e.stopPropagation(); // 🔥 IMPORTANT
              addToCart({
                id: `men-${i}`,          // unique id
                name: "Royal Sherwani",
                price: 28000
              });
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    ))}
  </div>
</section>


{/* NEW ARRIVALS */}
          <section className="products container text-center">
      <h2 className="section-title" data-aos="fade-up">Women's New Arrivals</h2>
      <div className="row g-4">
        {[1,2,3,4].map(i => (
          <div className="col-md-3" key={i}  data-aos="fade-up"
              data-aos-delay={i * 120}>
            <div className="product-card">
              <div className={`product-img p-${i}`}></div>
              <h6>Regal Silk Saree</h6>
              <span className="price">₹19,000</span>
              <button
            className="add-cart"
            onClick={(e) => {
              e.stopPropagation(); // 🔥 IMPORTANT
              addToCart({
                id: `men-${i}`,          // unique id
                name: "Royal Sherwani",
                price: 28000
              });
            }}
          >
            Add to Cart
          </button>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* <Wedding /> */}
       <section className="wedding-section">
      <div className="wedding-text" data-aos="fade-right">
        <h2>Wedding Collection</h2>
        <p>For the day she becomes CHOUDHRANI</p>
        <Link to="/products" className="hero-btn gold">Explore Wedding Collection</Link>
      </div>
    </section>


{/*  <Instagram /> */}
 <section className="instagram container">
      <h2 className="section-title" data-aos="fade-up">@choudhrani</h2>
      <div className="insta-grid">
        {[1,2,3,4,5,6].map(i => (
          <div className={`insta-img i-${i}`} key={i}
          data-aos="zoom-in"
              data-aos-delay={i * 80}></div>
        ))}
      </div>
    </section>

   </div>
    
    </>
  );
}
