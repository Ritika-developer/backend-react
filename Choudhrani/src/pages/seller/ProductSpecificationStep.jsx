import React, { useState } from "react";
import "../../styles/seller.css";

export default function ProductSpecificationStep({ onNext }) {

  const [specs, setSpecs] = useState([
    { specKey: "", specValue: "" }
  ]);

  const productId = localStorage.getItem("currentProductId");

  const addRow = () => {
    setSpecs([...specs, { specKey: "", specValue: "" }]);
  };

  const handleChange = (index, field, value) => {
    const updated = [...specs];
    updated[index][field] = value;
    setSpecs(updated);
  };

  const saveSpecs = async () => {

    const token = localStorage.getItem("token");

    await fetch(`http://localhost:8080/auth/products/${productId}/specifications/bulk`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify(specs)
    });

    onNext();
  };

  return (
    <div className="container">
      <h2 className="text-center mb-3">Step 7 – Product Specifications</h2>

      <div className="card p-4 mx-auto" style={{ maxWidth: "800px" }}>

        {specs.map((row, i) => (
          <div className="row mb-2" key={i}>
            <div className="col-md-5">
              <input
                className="form-control"
                placeholder="Specification Key"
                onChange={(e) => handleChange(i, "specKey", e.target.value)}
              />
            </div>

            <div className="col-md-5">
              <input
                className="form-control"
                placeholder="Specification Value"
                onChange={(e) => handleChange(i, "specValue", e.target.value)}
              />
            </div>
          </div>
        ))}

        <button onClick={addRow} className="btn btn-sm mt-2 mb-3">
          + Add More
        </button>

        <div className="text-center">
          <button onClick={saveSpecs} className="btn btn-sm">
            Save Specs & Next
          </button>
        </div>

      </div>

    </div>
  );
}
