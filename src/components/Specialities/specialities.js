import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SpCards from "../SpCard/spCard";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Specialities = () => {
  return (
    <Container>
        <hr></hr>
      <Row>
        <Col>
          <SpCards
            data={{
              imgSrc: "specialitySample.png",
              price: "Orthopedic & joint",
              title: "replacement Surgery",
            }}
          />
        </Col>
        <Col>
          <SpCards
            data={{
              imgSrc: "specialitySample.png",
              price: "Orthopedic & joint",
              title: "replacement Surgery",
            }}
          />
        </Col>
        <Col>
          <SpCards
            data={{
              imgSrc: "specialitySample.png",
              price: "Orthopedic & joint",
              title: "replacement Surgery",
            }}
          />
        </Col><Col>
          <SpCards
            data={{
              imgSrc: "specialitySample.png",
              price: "Orthopedic & joint",
              title: "replacement Surgery",
            }}
          />
        </Col>
      </Row>
      <hr></hr>
      <Row>
      <Col>
          <SpCards
            data={{
              imgSrc: "specialitySample.png",
              price: "Orthopedic & joint",
              title: "replacement Surgery",
            }}
          />
        </Col>
        <Col>
          <SpCards
            data={{
              imgSrc: "specialitySample.png",
              price: "Orthopedic & joint",
              title: "replacement Surgery",
            }}
          />
        </Col>
        <Col>
          <SpCards
            data={{
              imgSrc: "specialitySample.png",
              price: "Orthopedic & joint",
              title: "replacement Surgery",
            }}
          />
        </Col><Col>
          <SpCards
            data={{
              imgSrc: "specialitySample.png",
              price: "Orthopedic & joint",
              title: "replacement Surgery",
            }}
          />
        </Col>
      </Row>
      <hr></hr>
      <Row>
      <Col>
          <SpCards
            data={{
              imgSrc: "specialitySample.png",
              price: "Orthopedic & joint",
              title: "replacement Surgery",
            }}
          />
        </Col>
        <Col>
          <SpCards
            data={{
              imgSrc: "specialitySample.png",
              price: "Orthopedic & joint",
              title: "replacement Surgery",
            }}
          />
        </Col>
        <Col>
          <SpCards
            data={{
              imgSrc: "specialitySample.png",
              price: "Orthopedic & joint",
              title: "replacement Surgery",
            }}
          />
        </Col><Col>
          <SpCards
            data={{
              imgSrc: "specialitySample.png",
              price: "Orthopedic & joint",
              title: "replacement Surgery",
            }}
          />
        </Col>
      </Row>
      <hr></hr>
    </Container>
  );
};

export default Specialities;
