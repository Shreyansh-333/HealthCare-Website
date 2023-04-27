import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Image from "./specialitySample.jpg";

const SpecialityPage = () => {
  const mystyle = {
    textAlign: "left",
    margin: "20px 20px 20px 0px",
  };
  const mystyle1 = {
    margin: "10px 20px",
    padding: "20px",
  };
  const image = {
    height: "500px",
    width: "400px",
    margin: "10px 20px 10px 100px",
    borderRadius: "5%",
    // padding: "20px",
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col>
            <img style={image} src={Image} alt="Image" />
          </Col>

          <Col style={mystyle}>
            <h1 style={mystyle}>Orthopedic & Joint Replacement Surgery</h1>
            <hr
              style={{
                color: "green",
                backgroundColor: "green",
                height: 5,
              }}
            />

            <p>
              Orthopaedics Treatment, solution for each and every kind of
              deformality. Joint Replacement like, Knee, Hip, Elbow, Shoulder,
              Ankle, Wrist joint replacement.
            </p>
            <hr></hr>
            <h2 style={mystyle}>Orthopedics & Joint Replacement Treatements</h2>
            {/* <ul> */}
            <li>Total hip replacement</li>
            <li>Hip Resurfacing Surgery</li>
            <li>Total knee replacement</li>
            <li>Total shoulder replacement</li>
            <li>Ankle joint replacement</li>
            <li>Total elbow replacement</li>
            <li>Unicompartmental knee arthroplasty</li>
            {/* </ul> */}
            <Button variant="success">Book an appointment</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SpecialityPage;
