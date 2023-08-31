import React from 'react'
import { Row,Col} from 'react-bootstrap';


const AboutRowOne = ({stile, textstile,imagestile,content,title}) => {
  return (

    <>    
           <Row className={stile}>    
            <Col md='7'>
            <h3>{title}</h3>
                <div className={textstile}>
                   <p>{content}</p>
                </div>
            </Col>
            <Col md='5'>
                <div className={imagestile}></div>
            </Col>
           </Row>
       
    </>
  )
}

export default AboutRowOne;
