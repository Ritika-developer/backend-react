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

// export default function ProductCard({ product }) {
//   const navigate = useNavigate();

//   if (!product) return null;

//   return (
//     <div
//       className="product-card"
//       onClick={() => navigate(`/products/${product.id}`)}
//     >
//       <div className="product-image-wrapper">
//         <img
//           src={product.imageUrl || "/no-image.png"}
//           alt={product.name || "Product"}
//           className="product-image"
//         />
//       </div>

//       <div className="product-info">
//         <h4 className="product-name">
//           {product.name || "Unnamed Product"}
//         </h4>

//         <p className="product-brand">
//           {product.brandName || "Brand"}
//         </p>

//         <div className="product-price">
//           ₹{product.price ?? "N/A"}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useNavigate } from "react-router-dom";
import "../../styles/product-card.css";

export default function ProductCard({ product }) {
   console.log("PRODUCT DATA:", product); // 🔥 ADD THIS
  const navigate = useNavigate();
  if (!product) return null;

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <div className="product-image-wrapper">
        <img
          src={
            product.imageUrl || "/no-image.png"
          }
          alt={product.name}
          className="product-image"
        />
      </div>

      <div className="product-info">
        <h4 className="product-name">{product.name}</h4>

        <p className="product-brand">
          {product.brandName || "Brand"}
        </p>

        <div className="product-price">
          ₹{product.price ?? "N/A"}
        </div>
      </div>
    </div>
  );
}
