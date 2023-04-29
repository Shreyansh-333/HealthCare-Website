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

  const inputcolstyle = {
    // margin: "10px auto",
    margin: "2.5% 12.5% 2.5% 2%",
  };

  const rowstyle = {
    margin: "10px auto",
    // padding: "20px",
  };

  const mapstyle = {
    // height: "80%",
    // border: "1px solid e1f1ec",
    borderRadius: "10px",
  };

  const inputboxstyle = {
    border: "none",
    // borderBottom: "3px solid ",
    backgroundColor: "#e1f1ec",
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
              #Room no., Floor, Building Name, Road, Sector No., City, Pin,
              State, Country
            </li>
            <br />
            <li>
              <b>Phone: </b> +91-9999999999
            </li>
            <br />
            <li>
              <b>Email: </b>sampleusername@email.com
            </li>
            <br />
            <li>
              <b>Website: </b>www.samplewebsite.com
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
                <h3 style={inputcolstyle}> Send Us a Message </h3>
                <h6 style={inputcolstyle}>
                  In case you had any questions or you needed any information
                  about our activities feel free to send us an email. We will
                  respond quickly.
                </h6>
                <Row style={rowstyle}>
                  <Col>
                    <label> Name:</label>
                    <br />
                    <input
                      style={inputboxstyle}
                      type="name"
                      value={name}
                      required
                      onChange={(e) => {
                        handleNameChange(e);
                      }}
                    />
                  </Col>
                  <Col>
                    <label> Age:</label>
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
                </Row>
                <Row style={rowstyle}>
                  <Col>
                    <label> Phone No.:</label>
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
                  <Col>
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
                  </Col>
                </Row>

                <Row style={inputcolstyle}>
                  <label>Subject:</label>
                  <br />
                  <input
                    style={inputboxstyle}
                    type="text"
                    value={subject}
                    required
                    onChange={(e) => {
                      handleSubjectChange(e);
                    }}
                  />
                </Row>
                <Row style={inputcolstyle}>
                  <label>Write here:</label>
                  <textarea
                    style={inputboxstyle}
                    value={content}
                    cols="30"
                    rows="8"
                    required
                    onChange={(e) => {
                      handleContentChange(e);
                    }}
                  ></textarea>
                </Row>

                <Row style={inputcolstyle}>
                  <br/>
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
