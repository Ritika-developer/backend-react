export default function ProductPricing({ variant }) {
  if (!variant) return null;

  return (
    <div className="pricing">
      <div className="price-row">
        <span className="price">₹{variant.price}</span>
        {variant.mrp && (
          <>
            <span className="mrp">₹{variant.mrp}</span>
            <span className="discount">
              ({Math.round(
                ((variant.mrp - variant.price) / variant.mrp) * 100
              )}% OFF)
            </span>
          </>
        )}
      </div>

      <p className="tax-text">Inclusive of all taxes</p>
    </div>
  );
}
