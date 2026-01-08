import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Divider
} from "@mui/material";
import axios from "axios";
import { useProduct } from "../../services/ProductContext";

export default function VariantPricingStep({ onNext }) {
  const { productState } = useProduct();

  // 🔹 variants list from context
  const variants = productState.variants || [];

  // 🔹 selected variant
  const [variantId, setVariantId] = useState("");

  // 🔹 price form
  const [priceForm, setPriceForm] = useState({
    mrp: "",
    sellingPrice: ""
  });

  // 🔹 discount form
  const [discountForm, setDiscountForm] = useState({
    discountType: "PERCENT",
    discountValue: ""
  });

  // 🔹 pricing preview
  const [pricingPreview, setPricingPreview] = useState(null);

  // 🔹 load pricing when variant changes
  useEffect(() => {
    if (!variantId) return;

    loadPricing();
  }, [variantId]);

  const loadPricing = async () => {
    const res = await axios.get(
      `http://localhost:8080/auth/variants/${variantId}/pricing`
    );

    setPricingPreview(res.data);

    if (res.data) {
      setPriceForm({
        mrp: res.data.mrp || "",
        sellingPrice: res.data.sellingPrice || ""
      });

      setDiscountForm(prev => ({
        ...prev,
        discountValue: res.data.discount || ""
      }));
    }
  };

  // 🔹 save price
  const savePrice = async () => {
    if (!variantId) return;

    await axios.post(
      `http://localhost:8080/auth/variants/${variantId}/pricing/price`,
      {
        mrp: Number(priceForm.mrp),
        sellingPrice: Number(priceForm.sellingPrice)
      }
    );

    loadPricing();
  };

  // 🔹 apply discount
  const saveDiscount = async () => {
    if (!variantId) return;

    await axios.post(
      `http://localhost:8080/auth/variants/${variantId}/pricing/discount`,
      {
        discountType: discountForm.discountType,
        discountValue: Number(discountForm.discountValue)
      }
    );

    loadPricing();
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Variant Pricing & Discount
      </Typography>

      {/* 🔹 SELECT VARIANT */}
      <TextField
        select
        label="Select Variant"
        value={variantId}
        onChange={e => setVariantId(e.target.value)}
        fullWidth
        sx={{ mb: 3 }}
      >
        {variants.map(v => (
          <MenuItem key={v.id} value={v.id}>
            {v.sku}
          </MenuItem>
        ))}
      </TextField>

      {!variantId && (
        <Typography color="text.secondary">
          Please select a variant to set pricing
        </Typography>
      )}

      {variantId && (
        <>
          {/* 🔹 PRICE SECTION */}
          <Typography fontWeight="bold" sx={{ mt: 2 }}>
            Base Pricing
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <TextField
              label="MRP"
              value={priceForm.mrp}
              onChange={e =>
                setPriceForm({ ...priceForm, mrp: e.target.value })
              }
              fullWidth
            />

            <TextField
              label="Selling Price"
              value={priceForm.sellingPrice}
              onChange={e =>
                setPriceForm({
                  ...priceForm,
                  sellingPrice: e.target.value
                })
              }
              fullWidth
            />
          </Box>

          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={savePrice}
          >
            Save Price
          </Button>

          <Divider sx={{ my: 4 }} />

          {/* 🔹 DISCOUNT SECTION */}
          <Typography fontWeight="bold">
            Discount
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <TextField
              select
              label="Discount Type"
              value={discountForm.discountType}
              onChange={e =>
                setDiscountForm({
                  ...discountForm,
                  discountType: e.target.value
                })
              }
              fullWidth
            >
              <MenuItem value="PERCENT">Percentage (%)</MenuItem>
              <MenuItem value="FLAT">Flat (₹)</MenuItem>
            </TextField>

            <TextField
              label="Discount Value"
              value={discountForm.discountValue}
              onChange={e =>
                setDiscountForm({
                  ...discountForm,
                  discountValue: e.target.value
                })
              }
              fullWidth
            />
          </Box>

          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={saveDiscount}
          >
            Apply Discount
          </Button>

          {/* 🔹 PREVIEW */}
          {pricingPreview && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6">
                Pricing Preview
              </Typography>

              <Typography>MRP: ₹{pricingPreview.mrp}</Typography>
              <Typography>
                Selling Price: ₹{pricingPreview.sellingPrice}
              </Typography>
              <Typography>
                Discount: ₹{pricingPreview.discount}
              </Typography>

              <Typography fontWeight="bold">
                Final Price: ₹{pricingPreview.finalPrice}
              </Typography>
            </Box>
          )}

          {/* 🔹 CONTINUE */}
          <Box sx={{ mt: 4 }}>
            <Button variant="outlined" onClick={onNext}>
              Continue
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
