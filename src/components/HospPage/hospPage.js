import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import Image from "./hospitalbuilding.jpg";

const HospPage = () => {
  const mystyle = {
    textAlign: "left",
  };

  const mystyle1 = {
    margin: "10px 20px",
    padding: "20px",
  };
  const image = {
    height: "400px",
    width: "500px",
    // margin: "10px 20px 10px 100px",
    borderRadius: "5%",
    // padding: "20px",
  };
  // const params = useParams();
  // console.log(params);
  return (
    <section className="banner" id="home">
      <Container>
        <Row style={mystyle1} className="align-items-center">
          <Col>
            <img style={image} src={Image} alt="Image" />
          </Col>

          <Col style={mystyle}>
            <h1>First Choice speciality Hospital, New Delhi</h1>
            <hr
              style={{
                color: "green",
                backgroundColor: "green",
                height: 5,
              }}
            />

            <h3>Established in: 2003</h3>
            <h3>Number of beds:700</h3>

            <hr
              style={{
                color: "green",
                backgroundColor: "green",
                height: 5,
              }}
            />

            <p>
              Best hospital in Paschim Vihar,New Delhi-Action Balaji Super
              Speciality Hospital
            </p>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col style={mystyle}>
            <hr></hr>
            <hr></hr>
            <h2>ABOUT HOSPITAL</h2>
            <li>
              First Choice speciality Hospital has been established with a
              mission to provide world class integrated healthcare facilities to
              all sections of the society with a humanitarian touch, while
              maintaining a high standard of ethical practice and professional
              competency with emphasis on training and education leading to
              research.
            </li>
            <li>
              Equipment, facilities and nursing standards are all structured
              keeping patient welfare as the ultimate goal with 250 plus beds
            </li>
            <li>
              The core catalyst of the hospital functions is patient welfare and
              recovery. For us, freedom from pain, restoration of perfect health
              and resumption of normal life with respect to the patient is of
              paramount importance and throughout the treatment process the
              mental and physical well being of the patient is the main
              priority.
            </li>
            <li>
              We have thus encapsulated these work ethics in our motto “healing
              with a human touch” and strive to always uphold it.
            </li>
            <li>250 plus bedded,300 plus doctors and 40 specialities.</li>
            <hr></hr>
            <h2>INFRASTRUCTURE</h2>
            <p>
              {" "}
              It offers best-in-class medical services in various super
              specialities, such as
            </p>
            <li>Neurology, Neurosurgery & Electro Physiology</li>
            <li>Advanced Orthopaedics & Joint Replacement Surgery</li>
            <li>Spine Surgery</li>
            <li>Non-Invasive & Invasive Cardiology</li>
            <li>Respiratory & Chest Medicine</li>
            <li>Vascular & Endovascular Surgery</li>
            <li>Gastroenterology</li>
            <li>General Surgery</li>
            <li>GI, MAS & Bariatric Surgeries</li>{" "}
            <li>Non-Invasive & Invasive Cardiology</li>
            <li>Respiratory & Chest Medicine</li>
            <li>Vascular & Endovascular Surgery</li>
            <li>Gastroenterology</li>
            <li>General Surgery</li>
            <li>GI, MAS & Bariatric Surgeries</li> <hr></hr>
            <h4>LIST OF TREATMENTS</h4>
            <li>Laproscopic surgery for GALL STONE AND CBD STONE</li>
            <li>Laproscopic surgery for inguina/abdominal/hiatus hernia</li>
            <li>Laproscopic APPENDECTOMY</li>
            <li>Acid reflux surgery</li>
            <li>Bariatric surgery (sleeve/bypass surgery)</li>
            <li>Emergency laparoscopic surgery for PERFORATION, TRAUMA</li>
            <hr></hr>
            <hr></hr>
          </Col>
          <hr></hr>
          <hr></hr>
        </Row>
      </Container>
    </section>
  );
};

export default HospPage;
