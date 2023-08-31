import React from 'react';
import { Link } from 'react-router-dom';
import { images } from './images';
//import Login from './login';
import "../styles.css";
import { Container } from 'react-bootstrap';


const Navbar = () => {
    return (

        <>
        <Container>
            <nav class="navbar navbar-expand-lg navstyles">
               <div>
                <img src={images.logo} alt=""  height='60px'/>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to='/'>Home </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="products">Products</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="about">About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="contact">Contact Us</Link>
                        </li>
                        
                        <li class="nav-item">
                            <Link class="nav-link" to="login">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="signUp">Signup</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="signUp"><img src={images.cart} alt="" height='20px'/></Link>
                        </li>
                        
                    </ul>
                    
                    
                </div>

            </nav>
            </Container>
        </>

    );
}

export default Navbar;
