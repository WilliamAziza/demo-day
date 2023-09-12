// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { router } from './router';
import { RouterProvider } from 'react-router';
import Foot from './components/foot';
import NavbarComponent from './components/NavbarComponent';
import { CartProvider } from './components/CartContext'; // Import CartProvider

const App = () => {
  let p =[1,2,3,4,5,6]
    let one = p.filter(eachItem=>eachItem===1 )
    alert(one)
  return (
    <CartProvider> {/* Wrap your app with CartProvider */}
      <NavbarComponent />
      <RouterProvider router={router} />
      <Foot />
    </CartProvider>
  );
};

export default App;
