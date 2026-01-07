import React, { useState } from "react";
import "../../styles/seller.css";

export default function ProductManufacturerInfoStep({ onNext }) {

  const [content, setContent] = useState("");
  const productId = localStorage.getItem("currentProductId");

  const save = async () => {

    const token = localStorage.getItem("token");

    await fetch(`http://localhost:8080/auth/products/${productId}/manufacturer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify(content)
    });

    onNext();
  };

  return (
    <div className="container text-center">
      <h2 className="mb-3">Step 8 – Manufacturer Info</h2>

      <div className="card p-4 mx-auto" style={{ maxWidth: "700px" }}>

        <textarea
          className="form-control mb-3"
          placeholder="From the Manufacturer Content"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <button onClick={save} className="btn btn-sm">
          Save & Next
        </button>

      </div>

    </div>
  );
}
