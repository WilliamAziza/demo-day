// import { Button } from 'bootstrap';
import React from "react";
import "../styles.css";
import { Container } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <Container>
        <div style={{ height: "70vh", backgroundColor: "red" }}>
          <form class="form">
            <h1>Login</h1>
            <input
              class="blue"
              placeholder="Enter Username"
              type="name"
              name=""
            />
            <input
              class="blue"
              placeholder="Enter Password"
              type="password"
              name=""
            />
            <input id="blue" type="submit" value="Login" />
          </form>
        </div>
      </Container>
    </>
  );
};

export default Login;
