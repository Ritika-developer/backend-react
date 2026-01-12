// import { useEffect, useState } from "react";
// import axiosInstance from "../utils/axiosInstance";
// import ProductCard from "../components/product/ProductCart";
// import "../styles/product-list.css";

// export default function ProductListPage() {

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ✅ Load products ONCE
//   useEffect(() => {
//     loadProducts();
//   }, []);

//   const loadProducts = async () => {
//     try {
//       const res = await axiosInstance.get("/auth/products");
//       setProducts(res.data);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to load products");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div className="loading">Loading products...</div>;
//   }

//   return (
//     <div className="product-list-page">
//       <h2 className="page-title">All Products</h2>

//       <div className="product-grid">
//         {products.length === 0 ? (
//           <p>No products found</p>
//         ) : (
//           products.map(product => (
//             <ProductCard
//               key={product.id}
//               product={product}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import ProductCard from "../components/product/ProductCart";
import "../styles/product-list.css";

export default function ProductListPage() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      // ✅ USER LIST API (THIS WAS MISSING / WRONG BEFORE)
      const res = await axiosInstance.get("/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="product-list-page">
      <h2>All Products</h2>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}



// import { useEffect, useState } from "react";
// import axiosInstance from "../utils/axiosInstance";
// import "../styles/product-list.css";

// export default function ProductListPage() {

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadProducts();
//   }, []);

//   const loadProducts = async () => {
//     try {
//       const res = await axiosInstance.get("/api/products");
//       console.log("API:", res.data);
//       setProducts(Array.isArray(res.data) ? res.data : []);
//     } catch (err) {
//       console.error("API ERROR:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Products</h2>

//       {products.map(p => (
//         <div key={p.id}>{p.name}</div>
//       ))}
//     </div>
//   );
// }
