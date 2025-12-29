import Navbar from "../components/Navbar";
import "../styles/products.css";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const products = [
  {
    id: 1,
    name: "Royal Banarasi Silk Saree",
    price: "₹12,999",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
  },
  {
    id: 2,
    name: "Elegant Kanjeevaram Saree",
    price: "₹15,499",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
  },
  {
    id: 3,
    name: "Designer Bridal Saree",
    price: "₹22,999",
    image:
     "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
  },
  {
    id: 4,
    name: "Handloom Cotton Saree",
    price: "₹5,999",
    image:
     "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
  },
   {
    id: 5,
    name: "Handloom Cotton Saree",
    price: "₹5,999",
    image:
     "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
  }, {
    id: 6,
    name: "Handloom Cotton Saree",
    price: "₹5,999",
    image:
     "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
  }, {
    id: 7,
    name: "sarees",
    price: "₹5,999",
    image:
     "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
  }, {
    id: 8,
    name: "Handloom Cotton Saree",
    price: "₹5,999",
    image:
     "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
  }, {
    id: 9,
    name: "Handloom Cotton Saree",
    price: "₹5,999",
    image:
     "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
  }, {
    id: 10,
    name: "Handloom Cotton Saree",
    price: "₹5,999",
    image:
     "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
  },
];

export default function Products() {
  return (
    <>
      <Navbar />

      <div className="products-page">
        <h2>Our Royal Collection</h2>

        <div className="product-grid">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.image} alt={p.name} />
              <h3>{p.name}</h3>
              <p className="price">{p.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
       <Footer />
       <BackToTop />
    </>
  );
}
