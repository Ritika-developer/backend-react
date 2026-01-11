import { useNavigate } from "react-router-dom";


export default function ProductCard({ product }) {
        console.log("Navigating productId:", product.id);
  const navigate = useNavigate();

  // ✅ IMAGE URL FIX
  const imageSrc = product.imageUrl
    ? `http://localhost:8080/${product.imageUrl}`
    : "/no-image.png";

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      {/* IMAGE */}
      <img
        src={imageSrc}
        alt={product.name}
        className="product-image"
      />

      {/* INFO */}
      <div className="product-info">
        <h4 className="product-name">
          {product.name}
        </h4>

        <p className="product-brand">
          {product.brandName || "No Brand"}
        </p>

        {/* PRICE */}
        <div className="product-price">
          ₹{product.price ?? "N/A"}
        </div>
      </div>
    </div>
  );
}
