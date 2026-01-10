import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

export default function ProductEdit() {

  const { productId } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    status: ""
  });

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      const res = await axiosInstance.get(`/auth/products/${productId}`);
      setForm(res.data);
    } catch (err) {
      alert("Failed to load product");
    }
  };

  const updateProduct = async () => {
    try {
      await axiosInstance.put(`/auth/products/${productId}`, form);
      alert("Product updated");
      navigate("/seller/products");
    } catch (err) {
      alert("Update failed");
    }
  };

  return (
    <div>
      <h2>Edit Product</h2>

      <input
        placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />

      <textarea
        placeholder="Description"
        value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })}
      />

      <select
        value={form.status}
        onChange={e => setForm({ ...form, status: e.target.value })}
      >
        <option value="ACTIVE">ACTIVE</option>
        <option value="INACTIVE">INACTIVE</option>
      </select>

      <button onClick={updateProduct}>Update</button>
    </div>
  );

  
}
