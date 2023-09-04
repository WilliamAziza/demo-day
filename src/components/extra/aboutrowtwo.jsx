import React from 'react';
import { Row,Col } from 'react-bootstrap';


const Aboutrowtwo = ({stile,imagestile,textstile,content,title,titletwo}) => {
  return (
    <>
       
           <Row className={stile}>
            <Col md='5'>
                <div className={imagestile}></div>
            </Col>

            <Col md='7'>
            <h3>{title}</h3>
                <div className={textstile}>
                  <h4>{titletwo}</h4>
                 <p>{content}</p>
                </div>
            </Col>
            
           </Row>
         
    </>
  )
}

export default Aboutrowtwo;
