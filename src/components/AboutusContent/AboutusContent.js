import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import img1 from "./image-2.jpg";

const AboutusContent = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col>
            <h1>Have a look at our services and moto:</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col>
            <img src={img1} alt="Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutusContent;
