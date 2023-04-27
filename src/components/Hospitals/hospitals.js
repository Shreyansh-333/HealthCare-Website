import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SpCards from "../SpCard/spCard";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Hospitals = () => {
  return (
    <Container>
        <hr></hr>
      <Row>
        <Col>
          <SpCards
            data={{
              imgSrc: "image-2.jpg",
              price: "Name",
              title: "Specialities in this this field",
            }}
          />
        </Col>
        <Col>
          <SpCards
            data={{
              imgSrc: "image-2.jpg",
              price: "Beach",
              title: "Boating and rafting facilities",
            }}
          />
        </Col>
        <Col>
          <SpCards
            data={{
              imgSrc: "image-2.jpg",
              price: "Beach",
              title: "Boating and rafting facilities",
            }}
          />
        </Col>
        <Col>
          <SpCards
            data={{
              imgSrc: "image-2.jpg",
              price: "Beach",
              title: "Boating and rafting facilities",
            }}
          />
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col>
          <SpCards
            data={{
              imgSrc: "image-2.jpg",
              price: "Beach",
              title: "Boating and rafting facilities",
            }}
          />
        </Col>
        <Col>
          <SpCards
            data={{
              imgSrc: "image-2.jpg",
              price: "Beach",
              title: "Boating and rafting facilities",
            }}
          />
        </Col>
        <Col>
          <SpCards
            data={{
              imgSrc: "image-2.jpg",
              price: "Beach",
              title: "Boating and rafting facilities",
            }}
          />
        </Col>
        <Col>
          <SpCards
            data={{
              imgSrc: "image-2.jpg",
              price: "Beach",
              title: "Boating and rafting facilities",
            }}
          />
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col>
          <SpCards
            data={{
              imgSrc: "image-2.jpg",
              price: "Beach",
              title: "Boating and rafting facilities",
            }}
          />
        </Col>
        <Col>
          <SpCards
            data={{
              imgSrc: "image-2.jpg",
              price: "Beach",
              title: "Boating and rafting facilities",
            }}
          />
        </Col>
        <Col>
          <SpCards
            data={{
              imgSrc: "image-2.jpg",
              price: "Beach",
              title: "Boating and rafting facilities",
            }}
          />
        </Col>
        <Col>
          <SpCards
            data={{
              imgSrc: "image-2.jpg",
              price: "Beach",
              title: "Boating and rafting facilities",
            }}
          />
        </Col>
      </Row>
      <hr></hr>
    </Container>
  );
};

export default Hospitals;
