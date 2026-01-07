import React, { useState } from "react";
import CreateProductLayout from "../pages/seller/CreateProductLayout";
import "../styles/SellerPanel.css";

export default function SellerPanel() {

  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    "categoryBrandStep",
    "BrandStep",
    "productInfoStep",
    "attributeSelectionStep",
    "variantStep",
    "variantPricingStep",
    "productFeatureStep",
    "productSpecificationStep",
    "productManufactureInfoStep",
    "variantImageUploadStep",
    "imageUploadStep"
  ];

  return (
<>
  
    <div className="seller-panel">

      {/* LEFT SIDEBAR */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>CHOUDHRANI</h2>
        </div>

        <h4 className="text-center mb-3">Modules</h4>

        <ul className="sidebar-menu">
          {steps.map((item, index) => (
            <li
              key={index}
              className={index === activeStep ? "active" : ""}
              onClick={() => setActiveStep(index)}
            >
              {index} – {item}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT CONTENT AREA */}
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
