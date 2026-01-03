import { Link } from "react-router-dom";

const items = [
  "Bridal Heritage",
  "Banarasi Silk",
  "Festive Classics",
  "Everyday Grace",
 
];

export default function Home() {
  return (
    <>


     {/* hero section */}
      <section className="hero-section">
  <div className="hero-text">
    <h1>Every Saree Tells Her Story</h1>
    <p>Heritage woven with emotion and crafted for timeless grace.</p>
    <Link to="/products" className="hero-btn">
      Explore Collection
    </Link>
  </div>
</section>




      {/* <BrandStory /> */}

        <section className="heritage container">
      <div className="row align-items-center">
        <div className="col-md-5">
          <h2>Our Heritage</h2>
          <p>
            CHOUDHRANI celebrates generations of Indian women,
            their rituals, emotions, and royal elegance.
          </p>
          <button className="small-btn">Explore More</button>
        </div>
        <div className="col-md-7 heritage-img"></div>
      </div>
    </section>


      {/* <Collections /> */}
        <section className="collections container">
      <h2 className="section-title">Signature Collections</h2>
      <div className="row">
        {items.map((item, i) => (
          <div className="col-md-3" key={i}>
            <div className="collection-card">
              <div className={`collection-img img-${i}`}></div>
              <h5>{item}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* <Products /> */}
          <section className="products container">
      <h2 className="section-title">New Arrivals</h2>
      <div className="row">
        {[1,2,3,4].map(i => (
          <div className="col-md-3" key={i}>
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
      <div className="wedding-text">
        <h2>Wedding Collection</h2>
        <p>For the day she becomes CHOUDHRANI</p>
        <button className="hero-btn gold">Explore Wedding Edit</button>
      </div>
    </section>

  

      {/* <Reviews /> */}
       <section className="stories container">
      <h2 className="section-title">Her Stories</h2>
      <div className="story-box">
        <div className="story-img"></div>
        <blockquote>
          “I wore CHOUDHRANI on my daughter’s wedding.
          It felt like tradition wrapped in love.”
        </blockquote>
        <button className="small-btn">View Her Story</button>
      </div>
    </section>

{/*  <Instagram /> */}
 <section className="instagram container">
      <h2 className="section-title">@choudhrani</h2>
      <div className="insta-grid">
        {[1,2,3,4,5,6].map(i => (
          <div className={`insta-img i-${i}`} key={i}></div>
        ))}
      </div>
    </section>

   
    
    </>
  );
}
