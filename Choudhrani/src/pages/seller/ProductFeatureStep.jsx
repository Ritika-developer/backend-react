import React, { useState } from "react";
import "../../styles/seller.css";

export default function ProductFeatureStep({ onNext }) {

  const [features, setFeatures] = useState("");
  const productId = localStorage.getItem("currentProductId");

  const saveFeatures = async () => {

    const token = localStorage.getItem("token");

    const list = features.split(",").map(f => f.trim());

    await fetch(`http://localhost:8080/auth/products/${productId}/features/bulk`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify(list)
    });

    onNext();
  };

  return (
    <div className="container">
      <h2 className="text-center mb-3">Step 6 – Product Features</h2>

      <div className="card p-4 mx-auto text-center" style={{ maxWidth: "700px" }}>
        <textarea
          className="form-control mb-3"
          placeholder="Enter features separated by comma"
          onChange={(e) => setFeatures(e.target.value)}
        ></textarea>

        <button onClick={saveFeatures} className="btn btn-sm">
          Save & Next
        </button>
      </div>

    </div>
  );
}
