const products = [
  {
    id: 1,
    name: "Royal Silk Saree",
    price: 4999,
    img:"/silksarees.webp"
  },
  {
    id: 2,
    name: "Designer Saree",
    price: 6499,
    img: "/silksarees.webp"
  },
  {
    id: 3,
    name: "Cotton Elegance",
    price: 2999,
    img: "/silksarees.webp"
  }
];

export default function Products({ addToCart }) {
  return (
    <section className="fade-in">
      <h3>Featured Sarees</h3>

      <div className="products">
        {products.map(p => (
          <div className="product-card hover-glow" key={p.id}>
            <span className="tag">TRENDING</span>

            <img src={`${p.img}?auto=format&fit=crop&w=800&q=80`} />

            <div className="product-info">
              <h4>{p.name}</h4>
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <div className="price">₹{p.price}</div>
              <button onClick={() => addToCart(p)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
