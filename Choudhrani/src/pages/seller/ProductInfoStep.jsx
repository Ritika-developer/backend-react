import React, { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import "../../styles/seller.css";

export default function ProductInfoStep({ onNext }) {

  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    categoryId: "",
    brandId: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const saveProduct = async () => {

    if (!form.name || !form.categoryId) {
      alert("Please fill required fields: Product Name and Category ID");
      return;
    }

    try {

      const payload = {
        name: form.name,
        slug: form.slug || form.name.toLowerCase().replace(/\s+/g, "-"),
        description: form.description,
        categoryId: Number(form.categoryId),
        brandId: Number(form.brandId)
      };

      const res = await axiosInstance.post("/seller/products", payload);

      localStorage.setItem("currentProductId", res.data.id);

      onNext();

    } catch (err) {
      console.log(err);
      alert("Failed to save product. Please check backend API.");
    }

  };

  return (
    <div className="seller-panel-wrapper p-4">

      <h2 className="seller-heading text-center">
        Step 3 – Add New Product Information
      </h2>

      <div
        className="card seller-card p-4 mx-auto"
        style={{ maxWidth: "700px" }}
      >

        <input
          name="name"
          onChange={handleChange}
          className="form-control mb-3"
          placeholder="Product Name"
        />

        <input
          name="slug"
          onChange={handleChange}
          className="form-control mb-3"
          placeholder="Slug (optional)"
        />

        <textarea
          name="description"
          onChange={handleChange}
          className="form-control mb-3"
          placeholder="Description"
        ></textarea>

        <input
          name="categoryId"
          onChange={handleChange}
          className="form-control mb-3"
          placeholder="Category ID"
        />

        <input
          name="brandId"
          onChange={handleChange}
          className="form-control mb-3"
          placeholder="Brand ID"
        />

        <div className="text-center">
          <button onClick={saveProduct} className="btn btn-sm">
            Save & Next
          </button>
        </div>

      </div>

    </div>
  );
}
