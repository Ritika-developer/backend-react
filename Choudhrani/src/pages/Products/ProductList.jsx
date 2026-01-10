import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

export default function ProductList() {

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await axiosInstance.get("/auth/products");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
      alert("Products load failed");
    }
  };

  return (
    <div>
      <h2>My Products</h2>

      {products.map(p => (
        <div
          key={p.id}
          style={{ border: "1px solid #ddd", padding: 12, marginBottom: 10 }}
        >
          <h4>{p.name}</h4>
          <p>Status: {p.status}</p>

          <button
            onClick={() => navigate(`/seller/products/edit/${p.id}`)}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}
