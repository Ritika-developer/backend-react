import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
import "../../styles/seller.css";

export default function BrandStep({ onNext }) {

  const [brandName, setBrandName] = useState("");
  const [subBrand, setSubBrand] = useState("");

  const [existingBrands, setExistingBrands] = useState([]);

  const [loading, setLoading] = useState(true);

  // Load existing brands from backend
  useEffect(() => {

    const loadBrands = async () => {

      try {
        const res = await axiosInstance.get("/auth/brands");
        setExistingBrands(res.data);
      } catch (err) {
        alert("Failed to load brands from backend");
      } finally {
        setLoading(false);
      }

    };

    loadBrands();

  }, []);

  const handleNext = async () => {

    if (!brandName) {
      alert("Please enter Brand Name");
      return;
    }

    try {

      const payload = [
        {
          name: brandName,
          subBrand: subBrand
        }
      ];

      // call backend bulk create API
      await axiosInstance.post("/auth/brands/bulk", payload);

      localStorage.setItem("brandName", brandName);
      localStorage.setItem("subBrand", subBrand);

      alert("Brand information saved successfully");

      onNext();

    } catch (err) {
      alert("Error while saving brand data to backend");
    }

  };

  if (loading) return <p className="text-center">Loading Brands...</p>;

  return (
    <div className="seller-panel-wrapper p-4">

      <h2 className="seller-heading text-center">
        Add New Product – Brand Information
      </h2>

      <div className="card seller-card p-4 mx-auto" style={{ maxWidth: "600px" }}>

        <input
          className="form-control mb-3"
          placeholder="Brand Name"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Sub Brand"
          value={subBrand}
          onChange={(e) => setSubBrand(e.target.value)}
        />

        <h5 className="mt-3">Existing Brands in System:</h5>

        {existingBrands.length === 0 ? (
          <p>No brands available</p>
        ) : (
          <ul className="brand-list">
            {existingBrands.map((b) => (
              <li key={b.id}>{b.name} – {b.subBrand}</li>
            ))}
          </ul>
        )}

        <div className="text-center mt-3">
          <button onClick={handleNext} className="btn btn-sm">
            Next
          </button>
        </div>

      </div>

    </div>
  );

}
