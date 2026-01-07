import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
import "../../styles/seller.css";

export default function VariantStep({ onNext }) {

  const [variant, setVariant] = useState({
    sku: "",
    price: "",
    stock: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setVariant({
      ...variant,
      [e.target.name]: e.target.value
    });
  };

  const saveVariant = async () => {

    const productId = localStorage.getItem("currentProductId");

    if (!variant.sku || !variant.price) {
      alert("Please enter SKU and Price");
      return;
    }

    try {

      setLoading(true);

      const payload = {
        sku: variant.sku,
        price: Number(variant.price),
        stock: Number(variant.stock || 0),
        attributes: {}
      };

      const res = await axiosInstance.post(
        `/products/${productId}/variants`,
        payload
      );

      // Important – Save created variant ID
      localStorage.setItem("currentVariantId", res.data.variantId);

      onNext();

    } catch (err) {
      console.log(err);
      alert("Failed to save variant. Check backend API.");
    } finally {
      setLoading(false);
    }

  };

  return (
    <div className="card p-4 mx-auto text-center" style={{ maxWidth: "700px" }}>

      <h3>Step 5 – Create Variant</h3>

      <input
        name="sku"
        onChange={handleChange}
        className="form-control mb-3"
        placeholder="SKU"
      />

      <input
        name="price"
        onChange={handleChange}
        className="form-control mb-3"
        placeholder="Price"
      />

      <input
        name="stock"
        onChange={handleChange}
        className="form-control mb-3"
        placeholder="Stock"
      />

      <button onClick={saveVariant} className="btn btn-sm" disabled={loading}>
        {loading ? "Saving..." : "Save Variant & Next"}
      </button>

    </div>
  );
}
