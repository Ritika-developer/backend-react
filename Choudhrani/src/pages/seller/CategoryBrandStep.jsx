import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
import "../../styles/seller.css";

export default function CategoryBrandStep({ onNext }) {

  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const load = async () => {

      try {
        const res = await axiosInstance.get("/categories");
        setCategories(res.data);
      } catch (err) {
        alert("Failed to load categories");
      } finally {
        setLoading(false);
      }

    };

    load();

  }, []);

  const handleNext = () => {

    if (!categoryId) {
      alert("Please select category first");
      return;
    }

    localStorage.setItem("selectedCategoryId", categoryId);

    onNext();
  };

  if (loading) {
    return <p className="text-center">Loading Categories...</p>;
  }

  return (
    <div className="seller-panel-wrapper p-4">

      <h2 className="seller-heading text-center">
        Add New Product – Category Selection
      </h2>

      <div className="card seller-card p-4 mx-auto text-center"
           style={{ maxWidth: "600px" }}>

        <select
          className="form-select mb-3"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="saree">Saree</option>
          <option value="suit">Suit</option>
          <option value="blouse">blouse</option>
          <option value="menwear">men wear</option>

          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <button onClick={handleNext} className="btn btn-sm">
          Next
        </button>

      </div>

    </div>
  );
}
