import "../../styles/product-tabs.css"

export default function ProductTabs({ product }) {

  return (
    <div className="product-tabs">

      {/* DESCRIPTION */}
      <h3>About this item</h3>
      <p>{product.description}</p>

      {/* SPECIFICATIONS */}
      {Array.isArray(product.specifications) &&
        product.specifications.length > 0 && (
          <>
            <h3>Specifications</h3>
            <table className="specs">
              <tbody>
                {product.specifications.map(spec => (
                  <tr key={spec.id}>
                    <td>{spec.specKey}</td>
                    <td>{spec.specValue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
    </div>
  );
}
