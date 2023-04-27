import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const AboutusContent = () => {
  const mystyle = {
    height: "400px",
    width: "500px",
    borderRadius: "5%",
  };

  const rowstyle = {
    padding: "20px",
    margin: "10px",
  };
  return (
    <section className="banner" id="home">
      <Container>
        <hr></hr>
        <Row style={rowstyle} className="align-items-center">
          <Col>
            <h1>Our Introduction:</h1>
            <p>
              Welcome to India, the land of ancient culture, diverse traditions,
              and world-renowned healthcare services. India has emerged as a
              global destination for medical tourism, offering high-quality
              medical treatment at affordable prices.
            </p>
            <p>
              OneHealth aims to guide you through the process of seeking medical
              treatment in India. We provide comprehensive information about the
              best hospitals, doctors, and medical facilities in India, along
              with details about the various medical treatments available.
            </p>
            <p>
              India's medical tourism industry is driven by a perfect blend of
              skilled medical professionals, state-of-the-art medical
              infrastructure, and cutting-edge technology. Patients from across
              the globe choose India for its world-class healthcare services,
              personalized care, and holistic approach towards healing.
            </p>
          </Col>
          <Col>
            <img style={mystyle} src="MedicalServices.jpg" alt="Image" />
          </Col>
        </Row>
        <hr></hr>
        <Row style={rowstyle} className="align-items-center">
          <Col>
            <img
              style={mystyle}
              src="administrative-services.jpg"
              alt="Image"
            />
          </Col>
          <Col>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              We understand that seeking medical treatment in a foreign country
              can be overwhelming. Hence, OneHealth offers assistance in every
              aspect of medical tourism, including visa assistance, travel
              arrangements, accommodation, and post-treatment care.
            </p>
            <p>
              We invite you to discover the benefits of medical tourism in
              India. Our team is dedicated to providing you with a seamless and
              hassle-free experience, ensuring that you return home healthy and
              happy.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col></Col>
          <Col>
            <img style={mystyle} src="image-2.jpg" alt="Image" />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <img style={mystyle} src="image-2.jpg" alt="Image" />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutusContent;
