import "../../styles/product-header.css"


export default function ProductHeader({ product }) {
  return (
    <>
   <div className="product-header">
      <h1 className="product-title">{product.name}</h1>

      <p className="brand-name">
        by <span>{product.brandName}</span>
      </p>
      <div className="rating">
        ⭐ {product.rating || 4.2} ({product.reviewCount || 533} reviews)
      </div>
      </div>
    </>
  );
}
