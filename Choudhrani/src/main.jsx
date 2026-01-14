

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ProductProvider } from "./services/ProductContext";



// bootstrap + aos css
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./styles/Choudhrani.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductProvider>
 
  <App />

      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);
