// import "../../styles/product-buybox.css"


// export default function ProductBuyBox({ variant }) {
//   if (!variant) return null;

//   return (
//     <div className="buy-box">
//       <p className={variant.stock > 0 ? "in-stock" : "out-stock"}>
//         {variant.stock > 0 ? "In Stock" : "Out of Stock"}
//       </p>
// <div className="buy-actions">
//       <button className="add-cart" disabled={!variant.stock}>
//         Add to Cart
//       </button>

//       <button className="buy-now" disabled={!variant.stock}>
//         Buy Now
//       </button>
       
//       </div>
//       <p className="delivery">
//         🚚 Free delivery in 5–7 days<br />
//         🔁 Easy 7-day return
//       </p>
//     </div>
//   );
// }


// import "../../styles/product-buybox.css";
// import { useCart } from "../../services/CartContext";
// import { useNavigate } from "react-router-dom";

// export default function ProductBuyBox({ product, variant }) {
//   const { addToCart } = useCart();
//   const navigate = useNavigate();

//   if (!variant) return null;

//   const handleAddToCart = () => {
//     addToCart({
//       id: variant.id,                 // 🔥 UNIQUE (variant based)
//       name: product.name,             // product name
//       price: variant.price,           // variant price
//       variant: variant.name || "",    // optional (size/color)
//     });
//   };

//   const handleBuyNow = () => {
//     handleAddToCart();
//     navigate("/cart");                // redirect to cart
//   };

//   return (
//     <div className="buy-box">
//       <p className={variant.stock > 0 ? "in-stock" : "out-stock"}>
//         {variant.stock > 0 ? "In Stock" : "Out of Stock"}
//       </p>

//       <div className="buy-actions">
//       <button
//   className="add-cart"
//   disabled={variant.stock === 0}
//   style={{ opacity: variant.stock === 0 ? 0.5 : 1 }}
//   onClick={handleAddToCart}
// >
//   Add to Cart
// </button>

//         <button
//           className="buy-now"
//           disabled={!variant.stock}
//           onClick={handleBuyNow}
//         >
//           Buy Now
//         </button>
//       </div>

//       <p className="delivery">
//         🚚 Free delivery in 5–7 days <br />
//         🔁 Easy 7-day return
//       </p>
//     </div>
//   );
// }
















// import "../../styles/product-buybox.css";
// import { useCart } from "../../services/CartContext";
// import { useNavigate } from "react-router-dom";

// export default function ProductBuyBox({ product, variant }) {
//   const { addToCart } = useCart();
//   const navigate = useNavigate();

//   if (!variant) return null;

//   const stock = Number(variant.stock); // 🔥 FIX 1

//   const handleAddToCart = () => {
//     addToCart({
//       id: variant.id,
//       name: product?.name || "Product", // 🔥 FIX 3
//       price: Number(variant.price),
//       variant: variant.name || ""
//     });
//   };

//   return (
//     <div className="buy-box">
//       <p className={stock > 0 ? "in-stock" : "out-stock"}>
//         {stock > 0 ? "In Stock" : "Out of Stock"}
//       </p>

//       <div className="buy-actions">
//         <button
//           className="add-cart"
//           disabled={stock === 0}          // 🔥 FIX 2
//           style={{ opacity: stock === 0 ? 0.5 : 1 }}
//           onClick={handleAddToCart}
//         >
//           Add to Cart
//         </button>

//         <button
//           className="buy-now"
//           disabled={stock === 0}
//           onClick={() => {
//             handleAddToCart();
//             navigate("/cart");
//           }}
//         >
//           Buy Now
//         </button>
//       </div>

//       <p className="delivery">
//         🚚 Free delivery in 5–7 days <br />
//         🔁 Easy 7-day return
//       </p>
//     </div>
//   );
// }






























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

   addToCart({
  productId: product.id,
  variantId: variant.id,
  quantity: 1
});
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
