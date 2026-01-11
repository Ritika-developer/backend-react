import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import ProductImageGallery from "../components/ProductImageGallery";

export default function ProductDetailPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   if(id) loadProduct();
  }, [id
  ]);

  const loadProduct = async () => {
    try {
      // ✅ USER PRODUCT PAGE API
       console.log("Fetching product id:", id);
      const res = await axiosInstance.get(
        `/api/products/${id}/page`
      );

      console.log("API RESPONSE:", res.data); // 🔥 IMPORTANT
      setProduct(res.data);
    } catch (err) {
       console.error("API ERROR:", err.response?.data || err.message);
      alert("Failed to load product");
      
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2>Loading...</h2>;
  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={{ padding: "24px" }}>
      <h1>{product.name}</h1>
      <p>{product.brandName}</p>

      {/* ✅ IMAGE GALLERY */}
      <ProductImageGallery images={product.images || []} />

      <h3>Description</h3>
      <p>{product.description}</p>

      <h3>Price</h3>
      <p>
        ₹{product.variants?.[0]?.price || "N/A"}
      </p>
    </div>
  );
}
