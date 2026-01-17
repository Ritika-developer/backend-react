
import { useNavigate } from "react-router-dom";
import "../../styles/product-card.css";
import { useCart } from "../../services/CartContext";
import { useWishlist } from "../../services/WishlistContext";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
const { addToWishlist, removeFromWishlist } = useWishlist();

  if (!product) return null;

 const handleAddToCart = (e) => {
  e.stopPropagation();

  if (product.variants && product.variants.length >= 1) {
    addToCart(
      product.id,                 // ✅ Long
      product.variants[0].id,     // ✅ Long
      1
    );
    return;
  }

  addToCart(
    product.id,
    null,
    1
  );
};

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/products/${product.id}`)} // ONLY CARD CLICK
    >
{/* ❤️ WISHLIST HEART */}
<button
  className="wishlist-btn"
  onClick={(e) => {
    e.stopPropagation(); // 🔥 stop card navigation
    addToWishlist(product.id);
  }}
>
  ❤️
</button>



      <div className="product-image-wrapper">
        <img
          src={product.imageUrl || "/no-image.png"}
          alt={product.name}
          className="product-image"
        />
      </div>

      <div className="product-info">
        <h4 className="product-name">{product.name}</h4>
        <p className="product-brand">{product.brandName || "Brand"}</p>
 <div className="product-price">
    ₹ {product.price}
</div>

      </div>

      {/* ✅ ADD TO CART */}
      <button className="add-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>

    </div>
  );
}
