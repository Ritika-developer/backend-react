import "../../styles/product-buybox.css";
import { useCart } from "../../services/CartContext";
import { useNavigate } from "react-router-dom";

export default function ProductBuyBox({ product, variant }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const stock = Number(variant?.stock ?? 0);

  const handleAddToCart = () => {
    if (!variant?.id) {
      alert("Please select a variant");
      return;
    }

   addToCart(
  product.id,
  variant.id,
   1
);
  };

  return (
    <div className="buy-box">
      <p className={stock > 0 ? "in-stock" : "out-stock"}>
        {variant ? (stock > 0 ? "In Stock" : "Out of Stock") : "Select Variant"}
      </p>

      <div className="buy-actions">
        <button
          className="add-cart"
          disabled={!variant || stock === 0}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>

        <button
          className="buy-now"
          disabled={!variant || stock === 0}
          onClick={() => {
            handleAddToCart();
            navigate("/cart");
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
