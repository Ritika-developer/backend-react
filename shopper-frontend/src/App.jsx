import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import Home from "../src/pages/Home";
import Navbar from "../src/components/Navbar";
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <>
    <Navbar/>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/products" element={<div>Products Page</div>} />
    </Routes>
    </>
  );
}
