// import { useNavigate } from "react-router-dom";
// import "../../styles/product-card.css";

// export default function ProductCard({ product }) {

//   const navigate = useNavigate();

//   return (
//     <div
//       className="product-card"
//       onClick={() => navigate(`/products/${product.id}`)}
//     >
//       <img
//         src={product.imageUrl || "/no-image.png"}
//         alt={product.name}
//         className="product-image"
//       />

//       <div className="product-info">
//         <h4 className="product-name">{product.name}</h4>
//         <p className="product-brand">{product.brandName}</p>

//         <div className="product-price">
//           ₹{product.price}
//         </div>
//       </div>
//     </div>
//   );
// }




// import { useNavigate } from "react-router-dom";
// import "../../styles/product-card.css";
// import { useCart } from "../../services/CartContext";

// export default function ProductCard({ product }) {
//   const navigate = useNavigate();
//   const { addToCart } = useCart();

//   if (!product) return null;

//   const handleAddToCart = (e) => {
//     e.stopPropagation(); // card click रोको

//     // ✅ CASE 1: Only ONE variant → direct add
//     if (product.variants && product.variants.length === 1) {
//       const variantId = product.variants[0].id;

//       addToCart(
//         product.id,   // productId
//         variantId,    // variantId
//         1
//       );
//       return;
//     }

//     // ❗ CASE 2: Multiple variants → go to detail page
//     navigate(`/products/${product.id}`);
//   };

//   return (
//     <div
//       className="product-card"
//       onClick={() => navigate(`/products/${product.id}`)}
//     >
//       <div className="product-image-wrapper">
//         <img
//           src={product.imageUrl || "/no-image.png"}
//           alt={product.name}
//           className="product-image"
//         />
//       </div>

//       <div className="product-info">
//         <h4 className="product-name">{product.name}</h4>

//         <p className="product-brand">
//           {product.brandName || "Brand"}
//         </p>

//         <div className="product-price">
//           ₹{product.price ?? "N/A"}
//         </div>
//       </div>

//       {/* ✅ ADD TO CART ALWAYS VISIBLE */}
//       <button
//         className="add-cart-btn"
//         onClick={handleAddToCart}
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }


































import { useCart } from "../../services/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    console.log("ADD BUTTON CLICKED", product);
    addToCart({
      productId: product.id,
     variantId: product.variants?.[0]?.id, // 👈 VERY IMPORTANT
      quantity: 1
    });
  };

  return (
    <div className="product-card">
      <h4>{product.name}</h4>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}
