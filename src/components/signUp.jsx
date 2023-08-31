import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles.css";
import cloud from "./images/cloud.svg";

const SignUp = () => {
  return (
    <>
      <Container>
        <Row className="signup-row">
          <Col md="6">
            <div>
              <img src={cloud} alt="#" />
            </div>
          </Col>
          <Col md="6">
            <form className="signup">
              <center>
                <h2>
                  Sign <span style={{ color: "blue" }}>Up</span>
                </h2>
              </center>

              <div className="form-row">
                <div className="form-group">
                  <label for="inputEmail4">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group">
                  <label for="inputPassword4">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="inputDate">Date Of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  id="inputDate"
                  placeholder="Date Of Birth"
                />
              </div>
              <div className="form-group">
                <label for="inputPassWord">PassWord</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Set PassWord"
                />
              </div>
              <div className="form-group">
                <label for="inputPassWord">Confirm PassWord</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder=" Confirm PassWord"
                />
              </div>
              {/* for checkboxes */}
              <div className="radiobox">
                <div>
                  <label>Male</label>
                  <input type="radio" value="gender" name="gender"/>
                </div>

                <div>
                  <label>Female</label>
                  <input type="radio" value="gender" name="gender" />
                </div>

                <div>
                  <label>Others</label>
                  <input type="radio" value="gender" name="gender" />
                </div>
              </div>
              <button className="signbutt">Sign Up</button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
