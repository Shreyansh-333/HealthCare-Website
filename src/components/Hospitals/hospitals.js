import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HospCard from "../HospCard/hospCard";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Hospitals = () => {
  return (
    <Container>
        <hr></hr>
      <Row>
      <Col>
          <HospCard
            data={{
              imgSrc: "hospitalbuilding.jpg",
              price: "First Choice speciality Hospital",
              title: "New Delhi",
            }}
          />
        </Col>
        <Col>
          <HospCard
            data={{
              imgSrc: "hospitalbuilding.jpg",
              price: "First Choice speciality Hospital",
              title: "New Delhi",
            }}
          />
        </Col>
        <Col>
          <HospCard
            data={{
              imgSrc: "hospitalbuilding.jpg",
              price: "First Choice speciality Hospital",
              title: "New Delhi",
            }}
          />
        </Col>
        <Col>
          <HospCard
            data={{
              imgSrc: "hospitalbuilding.jpg",
              price: "First Choice speciality Hospital",
              title: "New Delhi",
            }}
          />
        </Col>
        <Col>
          <HospCard
            data={{
              imgSrc: "hospitalbuilding.jpg",
              price: "First Choice speciality Hospital",
              title: "New Delhi",
            }}
          />
        </Col>
        
      </Row>
      <hr></hr>
      <Row>
      <Col>
          <HospCard
            data={{
              imgSrc: "hospitalbuilding.jpg",
              price: "First Choice speciality Hospital",
              title: "New Delhi",
            }}
          />
        </Col>
        <Col>
          <HospCard
            data={{
              imgSrc: "hospitalbuilding.jpg",
              price: "First Choice speciality Hospital",
              title: "New Delhi",
            }}
          />
        </Col>
        <Col>
          <HospCard
            data={{
              imgSrc: "hospitalbuilding.jpg",
              price: "First Choice speciality Hospital",
              title: "New Delhi",
            }}
          />
        </Col>
        <Col>
          <HospCard
            data={{
              imgSrc: "hospitalbuilding.jpg",
              price: "First Choice speciality Hospital",
              title: "New Delhi",
            }}
          />
        </Col>
        <Col>
          <HospCard
            data={{
              imgSrc: "hospitalbuilding.jpg",
              price: "First Choice speciality Hospital",
              title: "New Delhi",
            }}
          />
        </Col>
        
      </Row>
      <hr></hr>
      <Row>
      <Col>
          <HospCard
            data={{
              imgSrc: "hospitalbuilding.jpg",
              price: "First Choice speciality Hospital",
              title: "New Delhi",
            }}
          />
        </Col>
        <Col>
          <HospCard
            data={{
              imgSrc: "hospitalbuilding.jpg",
              price: "First Choice speciality Hospital",
              title: "New Delhi",
            }}
          />
        </Col>
        <Col>
          <HospCard
            data={{
              imgSrc: "hospitalbuilding.jpg",
              price: "First Choice speciality Hospital",
              title: "New Delhi",
            }}
          />
        </Col>
        <Col>
          <HospCard
            data={{
              imgSrc: "hospitalbuilding.jpg",
              price: "First Choice speciality Hospital",
              title: "New Delhi",
            }}
          />
        </Col>
        <Col>
          <HospCard
            data={{
              imgSrc: "hospitalbuilding.jpg",
              price: "First Choice speciality Hospital",
              title: "New Delhi",
            }}
          />
        </Col>
        
      </Row>
      <hr></hr>
    </Container>
  );
};

export default Hospitals;
