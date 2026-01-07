import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

export default function AttributeSelectionStep({ onNext }) {

  const [attributes, setAttributes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const load = async () => {

      try {
        // CORRECT BACKEND URL
        const res = await axiosInstance.get("/auth/attributes");
        setAttributes(res.data);
      } catch (err) {
        alert("Failed to load attributes from backend");
      } finally {
        setLoading(false);
      }

    };

    load();

  }, []);

  const assignAll = async () => {

    try {

      const ids = attributes.map(a => a.id);

      const productId = localStorage.getItem("currentProductId");

      if (!productId) {
        alert("Product ID not found in localStorage");
        return;
      }

      // ASSIGNED ENDPOINT – assuming this API exists in your backend
      await axiosInstance.post(`/auth/products/${productId}/attributes`, {
        attributeIds: ids
      });

      alert("Attributes assigned successfully");

      onNext();

    } catch (err) {
      alert("Error assigning attributes to product");
    }

  };

  if (loading) return <p className="text-center">Loading Attributes...</p>;

  return (
    <div className="card p-4 mx-auto text-center" style={{ maxWidth: "700px" }}>

      <h3>Step 4 – Attribute Selection</h3>

      <p>Total Available Attributes: {attributes.length}</p>

      <button onClick={assignAll} className="btn btn-sm">
        Assign All & Next
      </button>

    </div>
  );

}
