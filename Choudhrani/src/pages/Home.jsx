import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import OfferStrip from "../pages/OfferStrip";
import Heritage from "./Heritage";

export default function Home() {


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


<Heritage/>
      {/* HERITAGE */}

        {/* <section className="heritage container">
      <div className="row align-items-center">
        <div className="col-md-5" data-aos="fade-right">
          <h2>Our Heritage</h2>
          <p>
            CHOUDHRANI celebrates generations of Indian women,
            their rituals, emotions, and royal elegance.
          </p>
          <Link to="/products" className="small-btn">Explore More</Link>
        </div>
        <div className="col-md-7 heritage-img" data-aos="fade-left"></div>
      </div>
    </section> */}



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

<OfferStrip />

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
          <button className="add-cart">Add to Cart</button>
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
              <button className="add-cart">Add to Cart</button>
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

  

      {/* <Reviews /> */}
       {/* <section className="stories container">
      <h2 className="section-title" data-aos="fade-up">Her Stories</h2>
      <div className="story-box" data-aos="fade-up">
        <div className="story-img"></div>
        <blockquote>
          “I wore CHOUDHRANI on my daughter’s wedding.
          It felt like tradition wrapped in love.”
        </blockquote>
        <button className="small-btn mt-3">View Her Story</button>
      </div>
    </section> */}

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
