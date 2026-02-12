
import { useNavigate } from "react-router-dom";
import "../../styles/product-card.css";
import { useCart } from "../../services/CartContext";
import { useWishlist } from "../../services/WishlistContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  if (!product) return null;

  const isWishlisted = isInWishlist(product.id);

  /* ⭐ CLEAN + SIMPLE */
  const handleAddToCart = (e) => {
    e.stopPropagation();

    addToCart(product.id, null, 1);
  };

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      {/* ❤️ Wishlist */}
      <button
        className="wishlist-btn"
        onClick={(e) => {
          e.stopPropagation();
          isWishlisted
            ? removeFromWishlist(product.id)
            : addToWishlist(product.id);
        }}
      >
        {isWishlisted ? <FaHeart color="red" /> : <FaRegHeart />}
      </button>

      {/* IMAGE */}
      <div className="product-image-wrapper">
        <img
          src={product.imageUrl || "/no-image.png"}
          alt={product.name}
          className="product-image"
        />
      </div>

      {/* INFO */}
      <div className="product-info">
        <h4 className="product-name">{product.name}</h4>
        <p className="product-brand">{product.brandName || "Brand"}</p>

        <div className="product-price">₹ {product.price}</div>

        {/* ⭐ Button moved inside info for better layout */}
        <button
          className="add-cart-btn"
          disabled={product.stock === 0}
          onClick={handleAddToCart}
        >
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
































