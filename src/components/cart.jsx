import React, { useState, useEffect } from 'react';
import { PaystackButton } from 'react-paystack';

const Cart = ({ cartItems }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    email: '', // Set the customer's email
    amount: 0, // Set the total cart amount
  });

  useEffect(() => {
    // Calculate the total cart amount from cartItems and update paymentDetails.amount
    const totalAmount = calculateTotalAmount(cartItems);
    setPaymentDetails({ ...paymentDetails, amount: totalAmount });
  }, [cartItems]);

  const handlePaymentSuccess = (response) => {
    // Handle successful payment here
  };

  const handlePaymentFailure = (error) => {
    // Handle payment failure here
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.name} - {item.price}
        </div>
      ))}

      {/* Paystack payment button */}
      <PaystackButton
        text="Pay Now"
        className="paystack-button"
        {...paymentDetails}
        onSuccess={handlePaymentSuccess}
        onClose={handlePaymentFailure}
      />
    </div>
  );
};

// Calculate the total cart amount based on cart items
const calculateTotalAmount = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price, 0);
};

export default Cart;
