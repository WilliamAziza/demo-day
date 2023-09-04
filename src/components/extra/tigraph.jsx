import React from 'react';
import { Row,Col } from 'react-bootstrap';

const Tigraph = ({firsthead,secondhead}) => {
  return (
    <>
      <Row>
          <Col>
            <h3 className="center">{firsthead}</h3>
            <p className="center">{secondhead}</p>
          </Col>
        </Row>
    </>
  )
}

export default Tigraph
