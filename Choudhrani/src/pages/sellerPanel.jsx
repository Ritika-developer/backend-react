// import React, { useState } from "react";
// import CreateProductLayout from "../pages/seller/CreateProductLayout";
// import { useProduct } from "../services/ProductContext";
// import "../styles/SellerPanel.css";
// import SellerNavbar from "../../src/pages/seller/SellerNavbar";

// /* 🔐 STEP ACCESS CONTROL */
// const canAccessStep = (stepIndex, productState) => {
//   if (stepIndex > 0 && !productState.categoryId) return false;
//   if (stepIndex > 1 && !productState.brandId) return false;
//   if (stepIndex > 2 && !productState.productId) return false;
//   if (stepIndex > 4 &&(!productState.variants || productState.variants.length === 0) )
//     return false;

//   return true;
// };

// export default function SellerPanel() {
//   const [activeStep, setActiveStep] = useState(0);
//   const { productState } = useProduct();

//   const steps = [
//     "Category",
//     "Brand",
//     "Product Info",
//     "Attributes",
//     "Variants",
//     "Pricing",
//     "Features",
//     "Specifications",
//     "Manufacturer Info",
//     "Variant Images",
//     "Product Images",
//    " Up Coming ............"
//   ];

//   return (
//     <>

//      <SellerNavbar />
//     <div className="seller-panel">
//       {/* 🔹 LEFT SIDEBAR */}
//       <aside className="sidebar">
//         <div className="sidebar-header">
//           <h2>Seller panel</h2>
//         </div>

//         <ul className="sidebar-menu">
//           {steps.map((label, index) => {
//             const locked = !canAccessStep(index, productState);

//             return (
//               <li
//                 key={index}
//                 className={`
//                   sidebar-item
//                   ${index === activeStep ? "active" : ""}
//                   ${locked ? "disabled" : ""}
//                 `}
//                 onClick={() => {
//                   if (locked) {
//                     alert("Please complete previous steps first");
//                     return;
//                   }
//                   setActiveStep(index);
//                 }}
//               >
//                 <span>{label}</span>
//                 {locked && <span className="lock">🔒</span>}
//               </li>
//             );
//           })}
//         </ul>
//       </aside>

//       {/* 🔹 RIGHT CONTENT */}
//       <div className="main-content">
//   <CreateProductLayout
//     activeStep={activeStep}
//     setActiveStep={setActiveStep}
//   />
// </div>

//     </div>
//     </>
//   );
// }





























// import React, { useState } from "react";
// import { useTheme } from "@mui/material/styles";
// import {
//   Box,
//   Drawer,
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   CssBaseline,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

// import { useProduct } from "../services/ProductContext";
// import CreateProductLayout from "../pages/seller/CreateProductLayout";

// const drawerWidth = 280;

// const steps = [
//   "Category",
//   "Brand",
//   "Product Info",
//   "Attributes",
//   "Variants",
//   "Pricing",
//   "Features",
//   "Specifications",
//   "Manufacturer Info",
//   "Variant Images",
//   "Product Images",
//   "Up Coming...",
// ];

// const canAccessStep = (index, state = {}) => {
//   if (!state || Object.keys(state).length === 0) return index === 0;
//   if (index > 0 && !state.categoryId) return false;
//   if (index > 1 && !state.brandId) return false;
//   if (index > 2 && !state.productId) return false;
//   if (index > 4 && (!state.variants || state.variants.length === 0))
//     return false;
//   return true;
// };

// export default function SellerPanel() {
//   const theme = useTheme();
//   const [open, setOpen] = useState(true);
//   const [activeStep, setActiveStep] = useState(0); // ✅ CORRECT

//   const { productState } = useProduct();

//   if (!productState) return <div>Loading...</div>;

//   return (
//     <>

//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />

//       {/* 🔹 APP BAR */}
//       <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
//         <Toolbar>
//           <IconButton onClick={() => setOpen(!open)} color="inherit">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" sx={{ ml: 1 }}>
//             Seller Panel
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       {/* 🔹 DRAWER */}
//       <Drawer
//         variant="persistent"
//         open={open}
//         sx={{
//           width: drawerWidth,
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             background: "#6b1a24",
//             color: "#fff",
//           },
//         }}
//       >
//         <Toolbar />
//         <List>
//           {steps.map((label, index) => {
//             const locked = !canAccessStep(index, productState);

//             return (
//               <ListItem key={index} disablePadding>
//                 <ListItemButton
//                   disabled={locked}
//                   selected={index === activeStep}
//                   onClick={() => setActiveStep(index)} // ✅ SAFE
//                 >
//                   <ListItemText
//                     primary={label}
//                     secondary={locked ? "🔒 Locked" : ""}
//                   />
//                 </ListItemButton>
//               </ListItem>
//             );
//           })}
//         </List>
//       </Drawer>

//       {/* 🔹 MAIN CONTENT */}
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Toolbar />
//         <CreateProductLayout
//           activeStep={activeStep}
//           setActiveStep={setActiveStep} // ✅ FUNCTION PASS
//         />
//       </Box>
//     </Box>
//     </>
//   );
// }



















import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Drawer,
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import SellerNavbar from "../../src/pages/seller/SellerNavbar";
import { useProduct } from "../services/ProductContext";
import CreateProductLayout from "../pages/seller/CreateProductLayout";

const drawerWidth = 280;

const steps = [
  "Category",
  "Brand",
  "Product Info",
  "Attributes",
  "Variants",
  "Pricing",
  "Features",
  "Specifications",
  "Manufacturer Info",
  "Variant Images",
  "Product Images",
  "Up Coming...",
];

const canAccessStep = (index, state = {}) => {
  if (!state || Object.keys(state).length === 0) return index === 0;
  if (index > 0 && !state.categoryId) return false;
  if (index > 1 && !state.brandId) return false;
  if (index > 2 && !state.productId) return false;
  if (index > 4 && (!state.variants || state.variants.length === 0))
    return false;
  return true;
};

export default function SellerPanel() {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const { productState } = useProduct();
  if (!productState) return <div>Loading...</div>;

  return (
    <>
      <CssBaseline />

      {/* 🔹 CUSTOM NAVBAR (Seller style) */}
      <SellerNavbar onMenuClick={() => setDrawerOpen(!drawerOpen)} />

      <Box sx={{ display: "flex" }}>
        {/* 🔹 DRAWER */}
        <Drawer
          variant="persistent"
          open={drawerOpen}
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              background: "#6b1a24",
              color: "#fff",
              top: "64px", // navbar height
            },
          }}
        >
          <List>
            {steps.map((label, index) => {
              const locked = !canAccessStep(index, productState);

              return (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    disabled={locked}
                    selected={index === activeStep}
                    onClick={() => setActiveStep(index)}
                    sx={{
                      "&.Mui-selected": {
                        background: "#fff",
                        color: "#6b1a24",
                        fontWeight: 700,
                      },
                    }}
                  >
                    <ListItemText
                      primary={label}
                      secondary={locked ? "🔒 Locked" : ""}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Drawer>

        {/* 🔹 MAIN CONTENT */}
       <Box
  component="main"
  sx={{
    flexGrow: 1,
    p: 3,
    paddingLeft: drawerOpen ? `${drawerWidth}px` : "0px",
    transition: "padding-left 0.3s ease",
  }}
>

          <Box
  sx={{
    maxWidth: "900px",   // 👈 form width limit
     mx: "-120px",          // 👈 center horizontally
  }}
>
  <CreateProductLayout
    activeStep={activeStep}
    setActiveStep={setActiveStep}
  />
</Box>

        </Box>
      </Box>
    </>
  );
}








