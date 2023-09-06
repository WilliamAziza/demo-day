import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { router } from "./router";
import { RouterProvider } from "react-router";
import Foot from "./components/foot";
import NavbarComponent from "./components/NavbarComponent";
import Products from "./components/Products"; // Make sure to import your Products component

const App = () => {
  // Step 1: Cart State
  const [cart, setCart] = useState([]);

  // Step 2: Add to Cart Function
  const addToCart = (product) => {
    // Add the product to the cart state
    setCart([...cart, product]);
  };

  return (
    <>
      <NavbarComponent cartCount={cart.length} />
      
      <RouterProvider router={router} />
      <Products addToCart={addToCart} />
      <Foot />
    </>
  );
};

export default App;
