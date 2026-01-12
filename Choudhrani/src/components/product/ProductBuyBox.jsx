import "../../styles/product-buybox.css"


export default function ProductBuyBox({ variant }) {
  if (!variant) return null;

  return (
    <div className="buy-box">
      <p className={variant.stock > 0 ? "in-stock" : "out-stock"}>
        {variant.stock > 0 ? "In Stock" : "Out of Stock"}
      </p>
<div className="buy-actions">
      <button className="add-cart" disabled={!variant.stock}>
        Add to Cart
      </button>

      <button className="buy-now" disabled={!variant.stock}>
        Buy Now
      </button>
      </div>
      <p className="delivery">
        🚚 Free delivery in 5–7 days<br />
        🔁 Easy 7-day return
      </p>
    </div>
  );
}
