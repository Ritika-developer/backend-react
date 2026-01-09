import React, { useEffect, useState } from "react";
import "../../styles/brandStep.css"
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button
} from "@mui/material";
import axios from "axios";
import { useProduct } from "../../services/ProductContext";

export default function BrandStep({ onNext }) {

  const { productState, setProductState } = useProduct();

  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);

  // 🔹 fetch brands on load (same as image)
  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    const res = await axios.get(
      "http://localhost:8080/auth/brands"
    );
    setBrands(res.data);
  };

  // 🔹 confirm brand (same logic as image)
  const handleConfirm = () => {
    if (!selectedBrand) {
      alert("Please select a brand");
      return;
    }

    setProductState({
      ...productState,
      brandId: selectedBrand.id
    });

    onNext();
    alert("Brand selected successfully");
  };

  return (
<Box className="brand-step-container">

  <Typography variant="h5" className="brand-step-title">
    Select Brand
  </Typography>

  <Grid container spacing={2}>
    {brands.map((brand) => (
      <Grid item xs={12} md={4} key={brand.id}>
        <Card
          onClick={() => setSelectedBrand(brand)}
          className={`brand-card ${
            selectedBrand?.id === brand.id ? "selected" : ""
          }`}
        >
          <CardMedia
            component="img"
            image={brand.logoUrl}
            alt={brand.name}
            className="brand-logo"
          />

          <CardContent>
            <Typography className="brand-name">
              {brand.name}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>

  <Box className="brand-confirm-wrapper">
    <Button
      variant="contained"
      className="brand-confirm-btn"
      onClick={handleConfirm}
    >
      Confirm Brand
    </Button>
  </Box>

</Box>

  );
}
