import React, { useState } from "react";
import CreateProductLayout from "../pages/seller/CreateProductLayout";
import { useProduct } from "../services/ProductContext";
import "../styles/SellerPanel.css";
import SellerNavbar from "../../src/pages/seller/SellerNavbar";

/* 🔐 STEP ACCESS CONTROL */
const canAccessStep = (stepIndex, productState) => {
  if (stepIndex > 0 && !productState.categoryId) return false;
  if (stepIndex > 1 && !productState.brandId) return false;
  if (stepIndex > 2 && !productState.productId) return false;
  if (stepIndex > 4 &&(!productState.variants || productState.variants.length === 0) )
    return false;

  return true;
};

export default function SellerPanel() {
  const [activeStep, setActiveStep] = useState(0);
  const { productState } = useProduct();

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
   " bus khatam bhai"
  ];

  return (
    <>

     <SellerNavbar />
    <div className="seller-panel">
      {/* 🔹 LEFT SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Seller panel</h2>
        </div>

        <ul className="sidebar-menu">
          {steps.map((label, index) => {
            const locked = !canAccessStep(index, productState);

            return (
              <li
                key={index}
                className={`
                  sidebar-item
                  ${index === activeStep ? "active" : ""}
                  ${locked ? "disabled" : ""}
                `}
                onClick={() => {
                  if (locked) {
                    alert("Please complete previous steps first");
                    return;
                  }
                  setActiveStep(index);
                }}
              >
                <span>{label}</span>
                {locked && <span className="lock">🔒</span>}
              </li>
            );
          })}
        </ul>
      </aside>

      {/* 🔹 RIGHT CONTENT */}
      <div className="main-content">
  <CreateProductLayout
    activeStep={activeStep}
    setActiveStep={setActiveStep}
  />
</div>

    </div>
    </>
  );
}
