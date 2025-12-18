// components/ProductCard.jsx
export default function ProductCard({ saree, addToCart }) {
  return (
    <div className="card">
      <img src={saree.image} />
      <h3>{saree.name}</h3>
      <p>₹{saree.price}</p>
      <button onClick={() => addToCart(saree)}>
        Add to Cart
      </button>
    </div>
  );
}
