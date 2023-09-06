import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const calculateTotal = (cart) => {
    return cart.reduce((total, item) => total + item.price, 0);
  };
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - GHC {item.price}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: GHC {calculateTotal(cart)}</p>
    </div>
  );
}

export default Cart;
