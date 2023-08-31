import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import '../styles.css';
import { images } from './images';

const Foot = () => {
  return (
    <>
    <Container>
      <footer >
        <Row>

          <Col md='3'>
            <div className='footer'>
              <center><img src={images.logo} alt='#'></img></center>

              {/* socials images */}
              <div className='footlogo'>
                 <img src={images.Twitter} alt='djasfk' />
                 <img src='' alt='djasfk' />
                 <img src='' alt='djasfk' />
              </div>
            </div>
          </Col>
          <Col md='3'>
          <div className='footer'>
            <h3>HELP</h3>
          <p>Privicy Policy</p>
          <p>Refund Policy</p>
          </div>
          </Col>
          <Col md='3'>
          <div className='footer'>
          <h3>STORE</h3>
          <p>Men Fashion</p>
          <p>Women Fashion</p>
          <p>Store Sale</p>
          <p>Collection</p>
          </div>
          </Col>
          <Col md='3'>
          <div className='footer'>
          <h3>SUPPORT</h3>
          <p>Feedback</p>
          <p>Contact Us</p>
          <p>Customer Service</p>
          <p>Terms & Conditions</p>
          </div>
          </Col>
        </Row>
      </footer>
      </Container>
    </>
  )
}

export default Foot;
