import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import OffCanvasBtn from "../Offcanvas/offcanvas";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DoctorPage from "../DoctorPage/doctorpage";

const DocCard = () => {
  const mystyle = {
    height: "300px",
    width: "500px",
  };
  return (
    <div className="container py-4 px-4 justify-content-center ">
      {/* <Routes>
        <Route path="/docters/docterPage" element={<DocterPage />} /> */}
      <Row>
        <Col>
          <img style={mystyle} src="DrSachinMitaal.png" alt="Image" />
        </Col>
        <Col>
          <Row>
            <h2>Dr. Sachin Jain</h2>
          </Row>
          <Row>
            <ul>
              <li>
                ★ <b>Experience:</b> 15 years
              </li>
              <li>
                ★ <b>Hospitals:</b> Amrita Hospital, Faridabad
              </li>
              <li>
                ★ <b>Specialization</b> Bariatric Gastric Bypass / weight loss
                Surgery, GI Surgery, General & Advance Laproscopic Surgery{" "}
              </li>
              <li>
                ★ <b>Address</b> Faridabad, Haryana{" "}
              </li>
            </ul>
          </Row>
          <Row>
            <Col>
              <Link to="/doctors/docterPage/123">
                <Button variant="success">Read More</Button>
              </Link>
              {/* <Link to="/doctors/docterPage/123">Product</Link>

              <a href="/doctors/docterPage/123">Read More</a> */}
            </Col>
            <Col>
              <Button variant="success">Book Appointment</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* </Routes>{" "} */}
    </div>
  );
};

export default DocCard;
