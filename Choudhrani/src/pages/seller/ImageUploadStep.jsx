import React, { useState } from "react";
import "../../styles/seller.css";

export default function ImageUploadStep({ onNext }) {

  const [files, setFiles] = useState([]);
  const productId = localStorage.getItem("currentProductId");

  const uploadAll = async () => {

    const token = localStorage.getItem("token");

    const form = new FormData();

    for(let f of files) {
      form.append("files", f);
    }

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
      <h2 className="mb-3">Step 10 – Image Upload</h2>

      <div className="card p-4 mx-auto" style={{ maxWidth: "700px" }}>

        <input
          type="file"
          multiple
          className="form-control mb-3"
          onChange={(e) => setFiles(e.target.files)}
        />

        <button onClick={uploadAll} className="btn btn-sm">
          Upload Images & Finish
        </button>

      </div>

    </div>
  );
}
