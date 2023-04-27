import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Content = () => {
  const mystyle = {
    textAlign: "left",
  };
  const mystyle1 = {
    borderRadius: "5%",
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col style={mystyle}>
            <h1>What makes us the best:</h1>
            <ul>
              <li>
                ★ Affodable advance medical facilities and infrastructure.
              </li>
              <li>
                ★ Availability of a wide range of medical specialties and
                treatments.
              </li>
              <li>
                ★ Availability of alternative treatments such as Ayurveda and
                Yoga.
              </li>
              <li>
                ★ Opportunities for post-treatment recovery and relaxation in a
                culturally rich environment.
              </li>
              <li>★ Personalized care and attention.</li>
              <li>
                ★ Strong reputation and track record of successful medical
                outcomes.
              </li>
            </ul>
            <Button variant="success" onClick={() => console.log("Connect")}>
              Let's Connect
            </Button>
          </Col>
          <Col>
            <img style={mystyle1} src="Homepage.jpg" alt="Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Content;
