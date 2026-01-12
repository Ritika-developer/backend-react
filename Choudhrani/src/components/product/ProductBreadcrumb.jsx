// export default function ProductBreadcrumb({ product }) {
//   return (
//     <div className="breadcrumb">
//       Home / {product.categoryName} / {product.name}
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import "../../styles/product-breadcrumb.css";

export default function ProductBreadcrumb({ product }) {

  if (!product?.breadcrumb?.length) {
    return null;
  }

  return (
    <nav className="breadcrumb">
      <Link to="/" className="crumb">Home</Link>

      {product.breadcrumb.map((cat, index) => (
        <span key={cat.id} className="breadcrumb-item">
          <span className="separator">›</span>

          {index === product.breadcrumb.length - 1 ? (
            <span className="crumb current">
              {cat.name}
            </span>
          ) : (
            <Link
              to={`/categories/${cat.slug}`}
              className="crumb"
            >
              {cat.name}
            </Link>
          )}
        </span>
      ))}

      <span className="separator">›</span>
      <span className="crumb current">
        {product.name}
      </span>
    </nav>
  );
}
