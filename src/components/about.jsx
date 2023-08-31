import "../styles.css";
import AboutRowOne from "./extra/aboutrow";
import { Container } from "react-bootstrap";
import Aboutrowtwo from "./extra/aboutrowtwo";
import Data from "../data.json";

const About = () => {
  return (
    <>
      <Container>
        <center>
          <h1>About Us</h1>
        </center>
        <AboutRowOne
          title={Data && Data[0].title}
          content={Data && Data[0].content}
          stile="rowone"
          textstile="leftaboutone"
          imagestile="rightaboutone"
        />
        <Aboutrowtwo
          title={Data && Data[1].title}
          content={Data && Data[1].content}
          stile="rowtwo"
          textstile="leftaboutone"
          imagestile="rightabouttwo"
        />
        <AboutRowOne
          title={Data && Data[2].title}
          content={Data && Data[2].content}
          stile="rowthree"
          textstile="leftaboutone"
          imagestile="rightaboutone"
        />
        <Aboutrowtwo
          title={Data && Data[3].title}
          content={Data && Data[3].content}
          stile="rowfour"
          textstile="leftaboutone"
          imagestile="lastimage"
        />
      </Container>
    </>
  );
};

export default About;
