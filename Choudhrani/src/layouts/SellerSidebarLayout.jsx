import React from "react";
import "../styles/seller.css";

export default function SellerSidebarLayout({ activeStep, setActiveStep }) {

  const steps = [
    "Category & Brand",
    "Brand Details",
    "Product Info",
    "Attribute Selection",
    "Create Variant",
    "Variant Pricing",
    "Product Features",
    "Specifications",
    "Manufacturer Info",
    "Upload Variant Image",
    "Upload Product Images"
  ];

  return (
    <div className="sidebar border-end">
      <h4 className="mb-4 text-center">Modules</h4>

      <ul className="sidebar-menu">
        {steps.map((item, index) => (
          <li
            key={index}
            className={index === activeStep ? "active" : ""}
            onClick={() => setActiveStep(index)}
          >
            Step {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}
