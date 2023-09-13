// import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../styles.css";
import Butt from './extra/button';


const Productdetails = () => {
    // let p =[1,2,3,4,5,6]
    // let one = p.filter(eachItem=>eachItem==1 )
    // alert(one)

    // USE GET PARAMS TO GET PRODUCT ID
    //MAKE A GET/FETCH -- THIS GIVES U AN ARRAY OF ALL PROJECT
    //ALLDATA.FILTER let one = p.filter(eachItem=>eachItem==1 )
    // useEffect(()=> {

    // })

  return (
    <>
    <Container>
      <h1 style={{textAlign:'center'}}>Make Purchase</h1>
      <div className='up'>
      <h1>Total:GHC50.00</h1> <Butt buttstile='makepurchase' descript='Make Purchase'/></div>
      <Row>
      <Col>
      <div className='pdimage'></div>
      </Col>
      <Col>
      <div className='pdothers'>
        <h4>kojoFashion</h4>
        <h1>Connect Title here</h1>
        <h3>GHC 50.00</h3>
        <Butt buttstile='cartbutt1' descript='-'/><Butt buttstile='cartbutt' descript='0'/><Butt buttstile='cartbutt2' descript='+'/><br/>
        <Butt buttstile='removecart' descript='Remove From Cart'/>
      </div>
      </Col>
      </Row>
    </Container>
      
    </>
  )
}

export default Productdetails;
