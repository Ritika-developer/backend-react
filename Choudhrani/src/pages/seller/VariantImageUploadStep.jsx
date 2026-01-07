import React, { useState } from "react";
import "../../styles/seller.css";

export default function VariantImageUploadStep({ onNext }) {

  const [file, setFile] = useState(null);
  const productId = localStorage.getItem("currentProductId");

  const upload = async () => {

    const token = localStorage.getItem("token");

    const form = new FormData();
    form.append("files", file);

    await fetch(`http://localhost:8080/auth/products/${productId}/images`, {
      method: "POST",
      headers: {
        "Authorization": token
      },
      body: form
    });

    onNext();
  };

  return (
    <div className="container text-center">
      <h2 className="mb-3">Step 9 – Variant Image Upload</h2>

      <div className="card p-4 mx-auto" style={{ maxWidth: "700px" }}>

        <input
          type="file"
          className="form-control mb-3"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button onClick={upload} className="btn btn-sm">
          Upload & Next
        </button>

      </div>

    </div>
  );
}
