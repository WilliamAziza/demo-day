import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "../styles.css";

const Contact = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md="12" sm="12">
            <center>
              <h2>
                <span style={{ color: "blue" }}>Contact</span> Us
              </h2>
              <br />
              <h5>Please, feel comfortable to feel our contact form</h5>
              <br />
            </center>
          </Col>
        </Row>

        <Row style={{ Height: "70vh" }}>
          <Col md="6" sm="12">
            <div>
              <p style={{ fontSize: "20px" }}>
                We are awwwards and we are here to serve!
                <br />
                How can we help you?
              </p>
              <p>
                If you have any question, please contact us through this form.
                <br />
                Please complete the following fields
              </p>
            </div>
          </Col>

          <Col md="6" sm="12">
            <div>
              <Form className="contact-data">
                <input type="name" placeholder="FirstName" />
                <input type="name" placeholder="LastName" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message" />
              </Form>
            </div>
          </Col>
        </Row><br/>
      </Container>
    </>
  );
};

export default Contact;
