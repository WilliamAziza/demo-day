// CartPage.js
import React from 'react';
import { useCart } from './CartContext';
import { Col, Container, Row } from 'react-bootstrap'
import "../styles.css";
import Butt from './extra/button';

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
      
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - GHC {item.price}
          </li>
        ))}
      </ul>
      <Container>
      <h1 style={{textAlign:'center'}}>Make Purchase</h1>
      <div className='up'>
      <h1>Total:GHC50.00</h1> <Butt buttstile='makepurchase' descript='Make Purchase'/></div>
      <Row>
      <Col>
      <div className='pdimage'></div>
      </Col>
      <Col>
      <div className='pdothers'>
        <h4>kojoFashion</h4>
        <h1>Connect Title here</h1>
        <h3>GHC 50.00</h3>
        <Butt buttstile='cartbutt1' descript='-'/><Butt buttstile='cartbutt' descript='0'/><Butt buttstile='cartbutt2' descript='+'/><br/>
        <Butt buttstile='removecart' descript='Remove From Cart'/>
      </div>
      </Col>
      </Row>
    </Container>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default CartPage;
