import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import Image from "./DrSachinMitaal.png"

const DoctorPage = () => {
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
    margin: "10px 20px 10px 100px",
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
            <h1>Dr. Sachin Mittal</h1>
            <hr
              style={{
                color: "green",
                backgroundColor: "green",
                height: 5,
              }}
            />

            <h5>Senior Consultant</h5>
            <li>
              <b>Experience:</b> 15 years
            </li>
            <li>
              <b>Hospitals:</b> Amrita Hospital, Faridabad
            </li>
            <li>
              <b>Specialization</b> Bariatric Gastric Bypass / weight loss
              Surgery, GI Surgery, General & Advance Laproscopic Surgery{" "}
            </li>
            <li>
              <b>Address</b> Faridabad, Haryana{" "}
            </li>
            <hr></hr>

            <Button variant="success">Book an appointment</Button>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col style={mystyle}>
            <hr></hr>
            <hr></hr>
            <li>
              Dr. Sachin Mittal is presently working as Senior Consultant in
              General Surgery Department at Amrita Hospital, Faridabad, India.
            </li>
            <li>
              He is having an experience of 15 years in the field of
              Laparoscopic Surgery ,General Surgery and Bariatric Surgery.
            </li>
            <li>
              He has special interest in laparoscopic surgery for abdominal
              conditions and laser surgery for piles / fistula/varicose veins.
            </li>
            <li>
              He is a member of Delhi Medical Council. Some of the services
              provided by the doctor are: Obesity Surgery,Cosmetic
              Surgery,Inscisional Hernia,Laser Fissure Surgery and Endosurgery
              etc
            </li>
            <li>
              He completed MBBS from Gajra Raja Medical College, Jiwaji
              University Gwalior MP in 2007,MS - General Surgery from PGIMS
              Rohtak Haryana in 2012 and DNB - General Surgery from National
              Board of Examination, India in 2015.
            </li>
            <hr></hr>
            <hr></hr>
            <h4>Specialization</h4>
            <p>Laparoscopic, laser, bariatric and general surgeon</p>
            <h4>Hospital</h4> <p>Amrita Hospital, Faridabad</p>
            <h4>LIST OF TREATMENTS</h4>
            <li>Laproscopic surgery for GALL STONE AND CBD STONE</li>
            <li>Laproscopic surgery for inguina/abdominal/hiatus hernia</li>
            <li>Laproscopic APPENDECTOMY</li>
            <li>Acid reflux surgery</li>
            <li>Bariatric surgery (sleeve/bypass surgery)</li>
            <li>Emergency laparoscopic surgery for PERFORATION, TRAUMA</li>
            <hr></hr>
            <hr></hr>
            <h4>EDUCATION</h4>
            <li>
              MBBS - Gajra Raja Medical College, Jiwaji University Gwalior MP,
              2007
            </li>
            <li>MS - General Surgery - PGIMS Rohtak Haryana, 2012</li>
            <li>
              DNB - General Surgery - National Board of Examination, India, 2015
            </li>
            <li>FNB (MAS) – MAMC & LNJP Hospital Delhi</li>
            <li>FMAS – Fellow Minimal Access Surgery</li>
            <li>
              MCLS – Member International College of Laparoscopic Surgeons
            </li>
            <li>MNAMS – Member National Academy of Medical sciences</li>
            <li>Member Society American Gastro Endoscopic Surgeons (USA)</li>
          </Col>
          <hr></hr>
          <hr></hr>
        </Row>
      </Container>
    </section>
  );
};

export default DoctorPage;
