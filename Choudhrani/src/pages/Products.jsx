

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

