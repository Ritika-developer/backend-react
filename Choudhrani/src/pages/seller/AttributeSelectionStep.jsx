// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Typography,
//   FormGroup,
//   FormControlLabel,
//   Checkbox,
//   Button
// } from "@mui/material";

// import axiosInstance from "../../utils/axiosInstance";
// import { useProduct } from "../../services/ProductContext";

// export default function AttributeSelectionStep({ onNext }) {

//   const { productState } = useProduct(); // productId yahin se aayega

//   const [attributes, setAttributes] = useState([]);
//   const [selected, setSelected] = useState([]);

//   /* ---------------- FETCH ATTRIBUTES ---------------- */
//   useEffect(() => {
//     fetchAttributes();
//   }, []);

//   const fetchAttributes = async () => {
//     try {
//       const res = await axiosInstance.get("/auth/attributes");
//       setAttributes(res.data);
//     } catch (err) {
//          console.error("Load attributes error:", err.response?.status);
//       alert("Failed to load attributes");
//     }
//   };

//   /* ---------------- TOGGLE ---------------- */
//   const toggleAttribute = (id) => {
//     setSelected((prev) =>
//       prev.includes(id)
//         ? prev.filter((x) => x !== id)
//         : [...prev, id]
//     );
//   };

//   /* ---------------- SAVE ---------------- */
//   const handleSave = async () => {
//     if (selected.length === 0) {
//       alert("Select at least one attribute");
//       return;
//     }

//     if (!productState.productId) {
//       alert("Product ID not found");
//       return;
//     }

//     try {
//       await axiosInstance.post(
//         `/auth/products/${productState.productId}/attributes`,
//         {
//        attributeIds: selected   // 👈 backend expects List<Long>
//         }
//       );

//       onNext();
//     } catch (err) {
//       console.error("Assign attribute error:", err.response?.data);
//       console.error("Status:", err.response?.status);
//       alert("Failed to assign attribute");
//     }
//   };

//   return (
//     <Box>

//       <Typography variant="h5" gutterBottom>
//         Select Attributes
//       </Typography>

//       <FormGroup>
//         {attributes.map((attr) => (
//           <FormControlLabel
//             key={attr.id}
//             control={
//               <Checkbox
//                 checked={selected.includes(attr.id)}
//                 onChange={() => toggleAttribute(attr.id)}
//               />
//             }
//             label={attr.name}
//           />
//         ))}
//       </FormGroup>

//       <Box sx={{ mt: 4 }}>
//         <Button variant="contained" onClick={handleSave}>
//           Save & Continue
//         </Button>
//       </Box>

//     </Box>
//   );
// }














// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   Divider
// } from "@mui/material";
// import { useProduct } from "../../services/ProductContext";

// export default function AttributeStep({ onNext }) {
//   const { setProductState } = useProduct();

//   const [attributes, setAttributes] = useState([]);
//   const [attrName, setAttrName] = useState("");
//   const [attrValues, setAttrValues] = useState("");

//   const addAttribute = () => {
//     if (!attrName || !attrValues) {
//       alert("Fill attribute name and values");
//       return;
//     }

//     const newAttr = {
//       id: Date.now(),
//       name: attrName,
//       values: attrValues.split(",").map(v => v.trim())
//     };

//     setAttributes(prev => [...prev, newAttr]);
//     setAttrName("");
//     setAttrValues("");
//   };

//   const continueNext = () => {
//     setProductState(prev => ({
//       ...prev,
//       attributes // 👈 save attributes for next steps
//     }));
//     onNext();
//   };

//   return (
//     <Box p={3}>
//       <Typography variant="h5">Attribute Selection (To-Do Style)</Typography>

//       {/* INPUT */}
//       <Box mt={2} display="flex" gap={2}>
//         <TextField
//           label="Attribute Name (Color, Size)"
//           value={attrName}
//           onChange={e => setAttrName(e.target.value)}
//         />
//         <TextField
//           label="Values (Red, Blue, Green)"
//           value={attrValues}
//           onChange={e => setAttrValues(e.target.value)}
//         />
//         <Button variant="contained" onClick={addAttribute}>
//           Add
//         </Button>
//       </Box>

//       <Divider sx={{ my: 3 }} />

//       {/* TODO LIST */}
//       <List>
//         {attributes.map(attr => (
//           <ListItem key={attr.id}>
//             <ListItemText
//               primary={attr.name}
//               secondary={attr.values.join(", ")}
//             />
//           </ListItem>
//         ))}
//       </List>

//       {attributes.length > 0 && (
//         <Button
//           variant="contained"
//           color="success"
//           onClick={continueNext}
//         >
//           Continue to Variants
//         </Button>
//       )}
//     </Box>
//   );
// }



















// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   Divider
// } from "@mui/material";
// import { useProduct } from "../../services/ProductContext";
// import axiosInstance from "../../utils/axiosInstance";

// export default function AttributeStep({ onNext }) {
//   const { productState, setProductState } = useProduct();
//   const productId = productState.productId;

//   const [attributes, setAttributes] = useState([]);
//   const [attrName, setAttrName] = useState("");
//   const [attrValues, setAttrValues] = useState("");

//   /* ================= ADD ATTRIBUTE (TODO LIST) ================= */
//   const addAttribute = () => {
//     if (!attrName || !attrValues) {
//       alert("Fill attribute name and values");
//       return;
//     }

//     const newAttr = {
//       name: attrName,
//       values: attrValues.split(",").map(v => v.trim())
//     };

//     setAttributes(prev => [...prev, newAttr]);
//     setAttrName("");
//     setAttrValues("");
//   };

//   /* ================= SAVE TO DB + CONTINUE ================= */
//   const continueNext = async () => {
//     try {
//       // 🔥 SAVE ATTRIBUTES TO DATABASE
//       await axiosInstance.post(
//         `/auth/products/${productId}/attributes`,
//         {
//           attributes: attributes
//         }
//       );

//       // 🔹 OPTIONAL: context me bhi rakh lo
//       setProductState(prev => ({
//         ...prev,
//         attributes
//       }));

//       onNext();
//     } catch (err) {
//       console.error(err);
//       alert("Failed to save attributes");
//     }
//   };

//   return (
//     <Box p={3}>
//       <Typography variant="h5">
//         Attribute Selection (To-Do Style)
//       </Typography>

//       {/* ===== INPUT ===== */}
//       <Box mt={2} display="flex" gap={2}>
//         <TextField
//           label="Attribute Name (Color, Size)"
//           value={attrName}
//           onChange={e => setAttrName(e.target.value)}
//         />
//         <TextField
//           label="Values (Red, Blue, Green)"
//           value={attrValues}
//           onChange={e => setAttrValues(e.target.value)}
//         />
//         <Button variant="contained" onClick={addAttribute}>
//           Add
//         </Button>
//       </Box>

//       <Divider sx={{ my: 3 }} />

//       {/* ===== TODO LIST ===== */}
//       <List>
//         {attributes.map((attr, index) => (
//           <ListItem key={index}>
//             <ListItemText
//               primary={attr.name}
//               secondary={attr.values.join(", ")}
//             />
//           </ListItem>
//         ))}
//       </List>

//       {/* ===== CONTINUE ===== */}
//       {attributes.length > 0 && (
//         <Button
//           variant="contained"
//           color="success"
//           onClick={continueNext}
//         >
//           Save & Continue to Variants
//         </Button>
//       )}
//     </Box>
//   );
// }









import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button
} from "@mui/material";

import axiosInstance from "../../utils/axiosInstance";
import { useProduct } from "../../services/ProductContext";

export default function AttributeSelectionStep({ onNext }) {

  const { productState } = useProduct(); // productId yahin se aayega

  const [attributes, setAttributes] = useState([]);
  const [selected, setSelected] = useState([]);

  /* ---------------- FETCH ATTRIBUTES ---------------- */
  useEffect(() => {
    fetchAttributes();
  }, []);

  const fetchAttributes = async () => {
    try {
      const res = await axiosInstance.get("/auth/attributes");
      setAttributes(res.data);
    } catch (err) {
         console.error("Load attributes error:", err.response?.status);
      alert("Failed to load attributes");
    }
  };

  /* ---------------- TOGGLE ---------------- */
  const toggleAttribute = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  /* ---------------- SAVE ---------------- */
  const handleSave = async () => {
    if (selected.length === 0) {
      alert("Select at least one attribute");
      return;
    }

    if (!productState.productId) {
      alert("Product ID not found");
      return;
    }

    try {
      await axiosInstance.post(
        `/auth/products/${productState.productId}/attributes`,
        {
       attributeIds: selected   // 👈 backend expects List<Long>
        }
      );

      onNext();
    } catch (err) {
      console.error("Assign attribute error:", err.response?.data);
      console.error("Status:", err.response?.status);
      alert("Failed to assign attribute");
    }
  };

  return (
    <Box>

      <Typography variant="h5" gutterBottom>
        Select Attributes
      </Typography>

      <FormGroup>
        {attributes.map((attr) => (
          <FormControlLabel
            key={attr.id}
            control={
              <Checkbox
                checked={selected.includes(attr.id)}
                onChange={() => toggleAttribute(attr.id)}
              />
            }
            label={attr.name}
          />
        ))}
      </FormGroup>

      <Box sx={{ mt: 4 }}>
        <Button variant="contained" onClick={handleSave}>
          Save & Continue
        </Button>
      </Box>

    </Box>
  );
}