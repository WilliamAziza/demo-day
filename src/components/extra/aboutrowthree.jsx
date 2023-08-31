import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Butt from './button';

const Aboutrowthree = () => {
  return (
    <>
      <Row className='rowone'>    
            <Col md='7'>
            <h3>Our Story</h3>
                <div className='leftaboutone'>

                </div>
                <Butt stile='aboutbuttonone' descript='Read More'/>
            </Col>
            <Col md='5'>
                <div className='rightaboutone'></div>
            </Col>
           </Row>
    </>
  )
}

export default Aboutrowthree;
