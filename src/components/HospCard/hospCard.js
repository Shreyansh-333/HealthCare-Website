import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, CardImg } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const HospCard = (props) => {
  let { imgSrc, price, title } = props.data;
  return (
    // <div>
    <Card className="align-items-center p-0 overflow-hidden h-100 shadow">
      <div className="overflow-hidden rounded p-0 bg-light">
        <Card.Img variant="top" src={imgSrc} />
      </div>
      <Card.Body className="text-center">
        <Card.Title className="display-6"><h2>{price}</h2></Card.Title>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Link to="/hospitals/hospPage/:123">
        <Button variant="success">Read More</Button>
      </Link>
      <hr></hr>
      {/* <Button className="w-100 rounded-0" variant="success">
        Read More
      </Button> */}
    </Card>
    // </div>
  );
};

export default HospCard;
