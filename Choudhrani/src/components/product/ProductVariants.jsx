import "../../styles/product-variants.css"

export default function ProductVariants({ variants, selected, onSelect }) {
  if (!variants?.length) return null;

  return (
    <div className="variants">
      <h4>Variants</h4>
      {variants.map(v => (
        <button
          key={v.id}
          className={
            selected?.id === v.id
              ? "variant-btn active"
              : "variant-btn"
          }
          onClick={() => onSelect(v)}
          disabled={v.stock === 0}
        >
          {v.sku}
        </button>
      ))}
    </div>
  );
}




