import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, CardImg } from "react-bootstrap";

const Cards = (props) => {
  let { imgSrc, price, title } = props.data;
  return (
    // <div>
    <Card className="p-0 overflow-hidden h-100 shadow">
      <div className="overflow-hidden rounded p-0 bg-light">
        <Card.Img variant="top" src={imgSrc} />
      </div>
      <Card.Body className="text-center">
        <Card.Title className="display-6">{price}</Card.Title>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Button className="w-100 rounded-0" variant="success">
        Read More
      </Button>
    </Card>
    // </div>
  );
};

export default Cards;
