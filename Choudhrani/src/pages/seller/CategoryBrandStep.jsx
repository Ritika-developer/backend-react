import React, { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { useProduct } from "../../services/ProductContext";
import { Box, Button } from "@mui/material";
import "../../styles/CategoryBrandStep.css"
export default function CategoryBrandStep({ onNext }) {

  // 🔹 LOCAL INPUT STATE (category id typed by user)
  const [categoryIdInput, setCategoryIdInput] = useState("");

  const [breadcrumb, setBreadcrumb] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔹 GLOBAL PRODUCT CONTEXT
  const { productState, setProductState } = useProduct();

  // 🔹 Fetch breadcrumb from backend
  const fetchBreadcrumb = async () => {
    if (!categoryIdInput) {
      alert("Enter category id");
      return;
    }

    try {
      setLoading(true);

      const res = await axiosInstance.get(
        `/auth/categories/breadcrumb/${categoryIdInput}`
      );

      setBreadcrumb(res.data);

    } catch (err) {
      alert("Invalid category ID");
      setBreadcrumb([]);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Confirm Category
  const handleConfirm = () => {
    if (breadcrumb.length === 0) {
      alert("Please select valid category");
      return;
    }

    // ✅ LAST CATEGORY = ACTUAL CATEGORY ID
    const selectedCategoryId =
      breadcrumb[breadcrumb.length - 1].id;

    // ✅ SAVE INTO PRODUCT CONTEXT (IMPORTANT)
    setProductState(prev => ({
      ...prev,
      categoryId: selectedCategoryId
    }));

    // (optional)
    localStorage.setItem(
      "selectedCategory",
      JSON.stringify(breadcrumb)
    );

    onNext();
  };

  return (
    <div className="category-step">


      <h3>Select Category</h3>

      {/* Category ID input */}
   <input
  className="category-input"
  type="text"
  placeholder="Category ID"
  value={categoryIdInput}
  onChange={(e) => setCategoryIdInput(e.target.value)}
/>


      <br /><br />

     <button className="preview-btn" onClick={fetchBreadcrumb}>
  Preview Breadcrumb
</button>


      {loading && <p>Loading...</p>}



      {/* Breadcrumb Preview */}
      {breadcrumb.length > 0 && (
        <>
          <h4>Breadcrumb Preview</h4>

  <div className="breadcrumb-container">
  {breadcrumb.map((cat, index) => (
    <div className="breadcrumb-group" key={cat.id}>
      <span
        className={`breadcrumb-item ${
          index === breadcrumb.length - 1 ? "active" : ""
        }`}
      >
        {cat.name}
      </span>

      {index !== breadcrumb.length - 1 && (
        <span className="breadcrumb-separator">›</span>
      )}
    </div>
  ))}
</div>



        


          <Box sx={{ mt: 4 }}>
            <Button variant="contained" onClick={handleConfirm}>
              Confirm Category
            </Button>
          </Box>
        </>
      )}
    </div>
  );
}



