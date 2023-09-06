// CartPage.js
import React from 'react';
import { useCart } from './CartContext';

const CartPage = () => {
  const { cart, setCart } = useCart();

  const handleCheckout = () => {
    // Perform your checkout logic here
    alert('Checkout complete! Thank you for your purchase.');
    // Clear the cart
    setCart([]);
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - GHC {item.price}
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default CartPage;
