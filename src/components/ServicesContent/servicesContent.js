import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ServicesContent = () => {
  const mystyle = {
    height: "470px",
    width: "600px",
    borderRadius: "5%",
  };

  const rowstyle = {
    padding: "20px",
    margin: "10px",
  };

  const colstyle = {
    padding: "10px",
    margin: "20px",
  };

  return (
    <section className="banner" id="home">
      <Container>
        <hr></hr>
        <Row style={rowstyle} className="align-items-center">
          <Col style={colstyle}>
            <h2>Medical Services</h2>
            <hr></hr>
            <p>
              India has a robust medical tourism industry, and many hospitals
              and clinics offer a range of services for international patients.
              Some of the medical services that international patients can avail
              of in India include:
            </p>
            <hr></hr>

            <li> Consultation with a specialist doctor</li>
            <li>
              Diagnostic services such as blood tests, x-rays, CT scans, and MRI
              scans
            </li>
            <li>
              Surgery and other procedures, including heart surgery, joint
              replacement surgery, cosmetic surgery, and dental surgery
            </li>
            <li>
              Cancer treatment, including chemotherapy and radiation therapy
            </li>
            <li> Ayurvedic treatments and alternative medicine therapies</li>
            <li>
              Rehabilitation services such as physiotherapy and occupational
              therapy
            </li>
            <li> Wellness and preventive health check-ups</li>
            <li> Second opinions and medical advice</li>
            {/* </ul> */}
          </Col>
          <Col style={colstyle}>
            <img style={mystyle} src="MedicalServices.jpg" alt="Image" />
          </Col>
        </Row>
        <hr></hr>
        <Row style={rowstyle} className="align-items-center">
          <Col style={colstyle}>
            <img
              style={mystyle}
              src="administrative-services.jpg"
              alt="Image"
            />
          </Col>
          <Col style={colstyle}>
            <h2>Administrative Services</h2>
            {/* <ul> */}
            <li>
              Assistance with travel arrangements, including airport pickup and
              drop-off, visa assistance, and accommodation booking.
            </li>
            <li>
              Interpreter services to help international patients communicate
              with doctors, nurses, and other medical staff.
            </li>
            <li>
              Assistance with hospital admission procedures, such as
              pre-admission testing and paperwork.
            </li>
            <li>
              Dedicated medical coordinators to assist with treatment scheduling
              and medical appointments.
            </li>
            <li>
              Assistance with arranging diagnostic tests, surgeries, and medical
              procedures.
            </li>
            <li>
              Assistance with arranging post-operative care, including
              medication management and follow-up appointments.
            </li>
            <li>
              Coordination of medical tourism packages, including sightseeing
              and cultural activities in India.
            </li>
            <li> Assistance with obtaining medical records and reports.</li>{" "}
            <li> Assistance with insurance and billing procedures.</li>{" "}
            <li>
              24/7 customer service and support for international patients.
            </li>{" "}
            {/* </ul> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesContent;
