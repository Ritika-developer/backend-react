import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography
} from "@mui/material";
import "../../styles/ProductInfoStep.css"
import { useProduct } from "../../services/ProductContext";
import axiosInstance from "../../utils/axiosInstance";

export default function ProductInfoStep({ onNext }) {

  const { productState, setProductState } = useProduct();

  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: ""
  });

  // 🔹 handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // 🔹 submit product info
  const handleSubmit = async () => {

    if (!form.name || !form.slug || !form.description) {
      alert("All fields are required");
      return;
    }

    try {
      const res = await axiosInstance.post(
        "http://localhost:8080/auth/products",
        {
          name: form.name,
          slug: form.slug,
          description: form.description,
          categoryId: productState.categoryId,
          brandId: productState.brandId
        }
      );

      // 🔹 save productId + slug for next steps
      setProductState({
        ...productState,
        productId: res.data.id,
        slug: res.data.slug
      });

      onNext(); // go to next step
    } catch (err) {
      alert("Product creation failed");
    }
  };

  return (
<Box className="product-info-container">

  <Typography
    variant="h5"
    className="product-info-title"
  >
    Product Information
  </Typography>

  <Box className="product-info-form">

    <TextField
      label="Product Name"
      name="name"
      value={form.name}
      onChange={handleChange}
      fullWidth
      sx={{ mb: 3 }}
    />

    <TextField
      label="Slug (URL-friendly)"
      name="slug"
      value={form.slug}
      onChange={handleChange}
      helperText="URL friendly name (e.g. samsung-led-tv)"
      fullWidth
      sx={{ mb: 3 }}
    />

    <TextField
      label="Product Description"
      name="description"
      value={form.description}
      onChange={handleChange}
      multiline
      rows={4}
      fullWidth
      sx={{ mb: 4 }}
    />

    <Box className="product-info-action">
      <Button
        variant="contained"
        className="product-info-btn"
        onClick={handleSubmit}
      >
        Save & Continue
      </Button>
    </Box>

  </Box>

</Box>

  );
}
