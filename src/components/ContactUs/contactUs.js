import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import ReactDOM from "react-dom";
// import './App.css';

const ContactUs = () => {
  const containerStyle = {
    margin: "50px auto",
  };

  const colstyle = {
    // margin: "10px",
    padding: "20px",
  };

  const rowstyle = {
    margin: "10px auto",
    // padding: "20px",
  };

  const mapstyle = {
    border: "1px solid black",
    borderRadius: "10px",
  };

  const inputboxstyle = {
    border: "1px solid black",
  };

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  // function to update state of name with
  // value enter by user in form
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  // function to update state of age with value
  // enter by user in form
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  // function to update state of email with value
  // enter by user in form
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  // function to update state of password with
  // value enter by user in form
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // function to update state of confirm password
  // with value enter by user in form
  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  //   below function will be called when user
  //   click on submit button .
  const handleSubmit = (e) => {
    //   if (email != subject) {
    //     // if 'password' and 'confirm password'
    //     // does not match.
    //     alert("password Not Match");
    //   } else {
    // display alert box with user
    // 'name' and 'email' details .
    alert("A message is sent from " + name + ", with subject: " + subject);
    //   }
    e.preventDefault();
  };
  return (
    <div className="">
      <Container style={containerStyle}>
        <Row>
          <Col style={colstyle}>
            <img style={mapstyle} src="map-navigation.jpg"></img>
            <br />
            <li>
              #419-424, 4th Floor, JMD Megapolis, Sohna Road, Sector 48,
              Gurugram-122018, Haryana, India
            </li>
            <br />
            <li>
              <b>Phone: </b> +91-9654742998
            </li>
            <br />
            <li>
              <b>Email: </b>info@medsurgeindia.com
            </li>
            <br />
            <li>
              <b>Website: </b>www.medsurgeindia.com
            </li>
            <br />
            <li>
              <b>Timings: </b>Weekdays 9am to 5pm and Sunday Closed
            </li>
          </Col>
          <Col style={colstyle}>
            <header className="">
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                {/*when user submit the form , handleSubmit()
		function will be called .*/}
                <h3> Send Us a Message </h3>
                <h6>
                  In case you had any questions or you needed any information
                  about our activities feel free to send us an email. We will
                  respond quickly.
                </h6>
                <Row style={rowstyle}>
                  <label>Name:</label>
                  <br />
                  <input
                    style={inputboxstyle}
                    type="text"
                    value={name}
                    required
                    onChange={(e) => {
                      handleNameChange(e);
                    }}
                  />
                  <br />
                </Row>
                <Row style={rowstyle}>
                  <Col>
                    <label>Age:</label>
                    <br />
                    <input
                      style={inputboxstyle}
                      type="number"
                      value={age}
                      required
                      onChange={(e) => {
                        handleAgeChange(e);
                      }}
                    />
                  </Col>
                  <Col>
                    <label>Phone No.:</label>
                    <br />
                    <input
                      style={inputboxstyle}
                      type="number"
                      value={phone}
                      required
                      onChange={(e) => {
                        handlePhoneChange(e);
                      }}
                    />
                  </Col>
                </Row>
                <Row style={rowstyle}>
                  <label>Email Address:</label>
                  <input
                    style={inputboxstyle}
                    type="email"
                    value={email}
                    required
                    onChange={(e) => {
                      handleEmailChange(e);
                    }}
                  />
                </Row>

                <Row style={rowstyle}>
                  <label>Subject:</label>
                  <input
                    style={inputboxstyle}
                    type="text"
                    value={subject}
                    aria-rowspan={3}
                    aria-colcount={4}
                    required
                    onChange={(e) => {
                      handleSubjectChange(e);
                    }}
                  />
                </Row>
                <Row style={rowstyle}>
                  <label>Write here:</label>
                  <textarea
                    style={inputboxstyle}
                    value={content}
                    cols="30"
                    rows="10"
                    required
                    onChange={(e) => {
                      handleContentChange(e);
                    }}
                  ></textarea>
                </Row>

                <Row style={rowstyle}>
                  <Button type="submit" variant="success" value="Submit">
                    Submit
                  </Button>
                </Row>
              </form>
            </header>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
