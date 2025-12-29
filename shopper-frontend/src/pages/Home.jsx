import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Story from "../components/Story";
import Footer from "../components/Footer";
import "../styles/home.css";

export default function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Hero />
      <Categories />
      <Products addToCart={addToCart} />
      <Story />
      <Footer />
    </>
  );
}
