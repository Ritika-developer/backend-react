import React, { useState, useEffect } from "react";

export default function VariantPricingStep({ onNext }) {

  const [pricing, setPricing] = useState({
    mrp: "",
    sellingPrice: "",
    discountType: "PERCENT",
    discountValue: ""
  });

  const [finalPrice, setFinalPrice] = useState(0);

  const handleChange = (e) => {
    setPricing({
      ...pricing,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {

    let discount = 0;

    if (pricing.discountType === "PERCENT") {
      discount = (pricing.mrp * pricing.discountValue) / 100;
    } else if (pricing.discountType === "FLAT") {
      discount = pricing.discountValue;
    }

    setFinalPrice(pricing.sellingPrice - discount);

  }, [pricing]);

  const applyPricing = async () => {

    const variantId = localStorage.getItem("currentVariantId");
    const token = localStorage.getItem("token");

    await fetch(`http://localhost:8080/auth/variants/${variantId}/pricing`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify({
        mrp: Number(pricing.mrp),
        sellingPrice: Number(pricing.sellingPrice)
      })
    });

    onNext();
  };

  return (
    <div className="card p-4 mx-auto text-center" style={{ maxWidth: "700px" }}>
      <h3>Step 5 – Pricing Step</h3>

      <input name="mrp" onChange={handleChange} className="form-control mb-3" placeholder="MRP" />

      <input name="sellingPrice" onChange={handleChange} className="form-control mb-3" placeholder="Selling Price" />

      <select name="discountType" onChange={handleChange} className="form-select mb-3">
        <option value="PERCENT">Percent</option>
        <option value="FLAT">Flat</option>
      </select>

      <input name="discountValue" onChange={handleChange} className="form-control mb-3" placeholder="Discount Value" />

      <h4>Final Selling Price: ₹{finalPrice}</h4>

      <button onClick={applyPricing} className="btn btn-sm mt-3">
        Apply & Next
      </button>

    </div>
  );
}
