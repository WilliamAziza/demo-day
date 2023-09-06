import React from 'react';
import { images } from './images';

const NavbarComponent = ({ cartCount }) => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={images.logo} alt="Logo" />
          </div>
          <div className="navbar-links">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/">Sign Up</a></li>
            </ul>
          </div>
          <div className="navbar-cart">
            <img src={images.cart} alt="Cart" />
            {/* Display the cart count here */}
            <span className="cart-count">{cartCount}</span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavbarComponent;
