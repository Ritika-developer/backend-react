import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ProductProvider } from "./services/ProductContext";
import { CartProvider } from "./services/CartContext";
import { WishlistProvider } from "./services/WishlistContext"; // ✅ ADD THIS

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WishlistProvider> {/* ✅ WRAP HERE */}
      <CartProvider>
        <ProductProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProductProvider>
      </CartProvider>
    </WishlistProvider>
  </React.StrictMode>
);
