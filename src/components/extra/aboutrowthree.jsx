import React from 'react';
import { Row,Col} from 'react-bootstrap';
import Butt from './button';




const AboutRowThree = ({stile, textstile,imagestile,content,buttstile}) => {
  return (

    <>    
           <Row className={stile}>    
            <Col md='5'>
            <h1>Find The Best <br/> Fashion Style <br/> For You </h1>
                <div className={textstile}>
                   <p>{content}</p>
                </div>
                <Butt buttstile={buttstile} descript='Enter'/>
            </Col>
            <Col md={{span:5, offset:2}}>
                <div className={imagestile}></div>
            </Col>
           </Row>
       
    </>
  )
}

export default AboutRowThree;
