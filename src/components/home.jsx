import React from "react";
import "../styles.css";
import Data from "../data.json";
import { Col, Container, Row } from "react-bootstrap";
import AboutRowThree from "./extra/aboutrowthree";
import Aboutrowtwo from "./extra/aboutrowtwo";
import Tigraph from "./extra/tigraph";
import Butt from "./extra/button";

const Home = () => {
  return (
    <>
      <Container>
        {/* This is for the first row in home page */}
        <AboutRowThree
          stile="homerowone"
          content={Data && Data[4].content}
          buttstile="homebuttone"
          imagestile="homeimageone"
        />
        
        <Row className="homerowtwo">
          <h3 className="center">{Data && Data[6].title}</h3>
          <p className="center">{Data && Data[6].head}</p>
          <Col>
            <div style={{ backgroundColor: "blue", height: "150px" }}></div>
          </Col>
          <Col>
            <div style={{ backgroundColor: "yellow", height: "150px" }}></div>
          </Col>
          <Col>
            <div style={{ backgroundColor: "blue", height: "150px" }}></div>
          </Col>
          <Col>
            <div style={{ backgroundColor: "yellow", height: "150px" }}></div>
          </Col>
        </Row>
        <center><Butt buttstile='homebutt' descript='View all'/></center>

        <Tigraph
          firsthead={Data && Data[5].title}
          secondhead={Data && Data[5].head}
        />
        <Row className="homerowthree">
          <Col className="" md="6">
            <h4>{Data && Data[5].title}</h4>
            <p>{Data && Data[5].content.text}</p>
          </Col>
          <Col md="4">
            <div className="imageone"> dkdj</div>
          </Col>
          <Col md="2" style={{ display: "flex", flexDirection: "column" }}>
            <div className="imagetwo"> dkdj</div>
            <div className="imagetwo"> dkdj</div>
          </Col>
        </Row>

        <Tigraph
          style={{ marginTop: "60px" }}
          firsthead={Data && Data[7].title.Title}
          secondhead={Data && Data[7].content}
        />
        <Aboutrowtwo
          title={Data && Data[7].title.titleone}
          titletwo={Data && Data[7].title.titletwo}
          stile="homeforthrow"
          imagestile="forthrowimage"
          content={Data && Data[7].content}
        />

        <Tigraph
          firsthead={Data && Data[8].title.Title}
          secondhead={Data && Data[8].head}
        />
        <Aboutrowtwo
          imagestile="lastimage"
          stile="lasthomerow"
          title={Data && Data[8].title.titleone}
          titletwo={Data && Data[8].title.titletwo}
          content={Data && Data[8].content}
          textstile='lasthometext'
        />
        

<Tigraph

          firsthead={Data && Data[9].title}
          secondhead={Data && Data[9].content}
        />
        {/* This is where client reviews will be */}
        <Row style={{ marginBottom: "30px" }}>
          <Col> <div style={{ backgroundColor: "blue", height: "150px" }}></div> </Col>
          <Col> <div style={{ backgroundColor: "blue", height: "150px" }}></div> </Col>
          <Col> <div style={{ backgroundColor: "blue", height: "150px" }}></div> </Col>
        </Row>
        <center><Butt buttstile='homebutt' descript='View all'/></center>
      </Container>
    </>
  );
};

export default Home;
