// import React, { useEffect, useState } from "react";
// import axiosInstance from "../../utils/axiosInstance";

// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   MenuItem
// } from "@mui/material";

// import { useProduct } from "../../services/ProductContext";

// export default function VariantStep({ onNext }) {
//   const { productState, setProductState } = useProduct();
//   const productId = productState.productId;

//   const [attributes, setAttributes] = useState([]);
//   const [variants, setVariants] = useState([]);

//   const [selectedAttributes, setSelectedAttributes] = useState({});
//   const [form, setForm] = useState({
//     sku: "",
//     price: "",
//     stock: ""
//   });

//   /* 🔹 LOAD PRODUCT ATTRIBUTES */
//   useEffect(() => {
//     if (!productId) return;

//     axiosInstance
//       .get(`/auth/products/${productId}/variants`)
//       .then(res => setVariants(res.data))
//       .catch(() => alert("Failed to load attributes"));
//   }, [productId]);

//   const handleFormChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   /* 🔹 CREATE VARIANT (FIXED) */
//   const createVariant = async () => {
//     if (!form.sku || !form.price || !form.stock) {
//       alert("Fill all fields");
//       return;
//     }

//     if (Object.keys(selectedAttributes).length !== attributes.length) {
//       alert("Select all attributes");
//       return;
//     }

//     const payload = {
//       sku: form.sku,
//       price: Number(form.price),
//       stock: Number(form.stock),
//       attributes: selectedAttributes
//     };

//     try {
//       const res = await axiosInstance.post(
//         `/auth/products/${productId}/variants`,
//         payload
//       );

//         const savedVariant = res.data;
//       // UI table
//       setVariants(prev => [...prev, savedVariant]);

//       // CONTEXT (used in pricing / images)
//       setProductState(prev => ({
//         ...prev,
//         variants: [...(prev.variants || []), savedVariant]
//       }));

//       setForm({ sku: "", price: "", stock: "" });
//       setSelectedAttributes({});
//     } catch (err) {
//       console.error(err.response?.data);
//       alert("Variant creation failed");
//     }
//   };

//   return (
//     <Box>
//       <Typography variant="h5" gutterBottom>
//         Create Variants
//       </Typography>

//       {/* ATTRIBUTES */}
//       <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
//         {attributes.map(attr => (
//           <TextField
//             key={attr.id}
//             select
//             label={attr.name}
//             value={selectedAttributes[attr.id] || ""}
//             onChange={e =>
//               setSelectedAttributes(prev => ({
//                 ...prev,
//                 [attr.id]: Number(e.target.value)
//               }))
//             }
//             sx={{ minWidth: 180 }}
//           >
//             {attr.values.map(val => (
//               <MenuItem key={val.id} value={val.id}>
//                 {val.value}
//               </MenuItem>
//             ))}
//           </TextField>
//         ))}
//       </Box>

//       {/* VARIANT FORM */}
//       <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
//         <TextField label="SKU" name="sku" value={form.sku} onChange={handleFormChange} />
//         <TextField label="Price" name="price" value={form.price} onChange={handleFormChange} />
//         <TextField label="Stock" name="stock" value={form.stock} onChange={handleFormChange} />
//         <Button variant="contained" onClick={createVariant}>
//           Add Variant
//         </Button>
//       </Box>

//       {/* VARIANT TABLE */}
//       {variants.length > 0 && (
//         <Box sx={{ mt: 4 }}>
//           <Typography variant="h6">Created Variants</Typography>

//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>SKU</TableCell>
//                 {attributes.map(a => (
//                   <TableCell key={a.id}>{a.name}</TableCell>
//                 ))}
//                 <TableCell>Price</TableCell>
//                 <TableCell>Stock</TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {variants.map(v => (
//                 <TableRow key={v.id}>
//                   <TableCell>{v.sku}</TableCell>
//                   {attributes.map(attr => {
//                     const val = attr.values.find(
//                       x => x.id === v.attributes[attr.id]
//                     );
//                     return <TableCell key={attr.id}>{val?.value}</TableCell>;
//                   })}
//                   <TableCell>{v.price}</TableCell>
//                   <TableCell>{v.stock}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </Box>
//       )}

//       {variants.length > 0 && (
//         <Box sx={{ mt: 4, textAlign: "right" }}>
//           <Button variant="contained" onClick={onNext}>
//             Continue
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );
// }












import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import {
  Box,
  Button,
  TextField,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  MenuItem,
  Divider
} from "@mui/material";
import { useProduct } from "../../services/ProductContext";
import "../../styles/variantstep.css";

export default function VariantStep({ onNext }) {
  const { productState, setProductState } = useProduct();
  const productId = productState.productId;

  const [attributes, setAttributes] = useState([]);
  const [variants, setVariants] = useState([]);
  const [selectedAttributes, setSelectedAttributes] = useState({});
  const [form, setForm] = useState({ sku: "", price: "", stock: "" });

  useEffect(() => {
    if (!productId) return;

    // Load attributes WITH values
    axiosInstance
      .get(`/auth/products/${productId}/attributes`)
      .then(res => setAttributes(res.data))
      .catch(() => alert("Failed to load attributes"));

    // Load existing variants
    axiosInstance
      .get(`/auth/products/${productId}/variants`)
      .then(res => setVariants(res.data))
      .catch(() => alert("Failed to load variants"));
  }, [productId]);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createVariant = async () => {
    if (!form.sku || !form.price || !form.stock) {
      alert("Fill all fields");
      return;
    }

    if (Object.keys(selectedAttributes).length !== attributes.length) {
      alert("Select all attribute values");
      return;
    }

    const payload = {
      sku: form.sku,
      price: Number(form.price),
      stock: Number(form.stock),
      attributes: selectedAttributes
    };

    try {
      const res = await axiosInstance.post(
        `/auth/products/${productId}/variants`,
        payload
      );

      const saved = res.data;
      setVariants(prev => [...prev, saved]);

      setProductState(prev => ({
        ...prev,
        variants: [...(prev.variants || []), saved]
      }));

      setForm({ sku: "", price: "", stock: "" });
      setSelectedAttributes({});
    } catch {
      alert("Variant creation failed");
    }
  };

  return (
    <Box className="variant-step">

      <Typography variant="h5" className="step-title">
        Create Variants
      </Typography>

      {/* ATTRIBUTE VALUES */}
      <Box className="attr-grid">
{attributes.map(attr => (
  <TextField
    key={attr.id}
    select
    label={attr.name}
    value={selectedAttributes[attr.id] || ""}
    onChange={e =>
      setSelectedAttributes(prev => ({
        ...prev,
        [attr.id]: Number(e.target.value)
      }))
    }
    size="small"
  >
    {Array.isArray(attr.values) && attr.values.map(val => (
      <MenuItem key={val.id} value={val.id}>
        {val.value}
      </MenuItem>
    ))}
  </TextField>
))}

      </Box>

      <Divider className="divider" />

      {/* VARIANT FORM */}
      <Box className="variant-form">
        <TextField label="SKU" name="sku" value={form.sku} onChange={handleFormChange} />
        <TextField label="Price" name="price" value={form.price} onChange={handleFormChange} />
        <TextField label="Stock" name="stock" value={form.stock} onChange={handleFormChange} />
        <Button variant="contained" onClick={createVariant}>
          Add Variant
        </Button>
      </Box>

      {/* VARIANTS TABLE */}
      {variants.length > 0 && (
        <Box className="variant-table">
          <Typography variant="h6">Created Variants</Typography>

          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>SKU</TableCell>
                {attributes.map(a => (
                  <TableCell key={a.id}>{a.name}</TableCell>
                ))}
                <TableCell>Price</TableCell>
                <TableCell>Stock</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {variants.map(v => (
                <TableRow key={v.id}>
                  <TableCell>{v.sku}</TableCell>
                  {attributes.map(attr => (
                    <TableCell key={attr.id}>
                      {v.attributes?.[attr.name.toLowerCase()]}
                    </TableCell>
                  ))}
                  <TableCell>{v.price}</TableCell>
                  <TableCell>{v.stock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      )}

      {variants.length > 0 && (
        <Box className="continue-wrap">
          <Button variant="contained" onClick={onNext}>
            Continue
          </Button>
        </Box>
      )}
    </Box>
  );
}
