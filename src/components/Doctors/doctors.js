import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import DocCard from "../DocCard/docCard";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/footer";
import DocterPage from "../DoctorPage/doctorpage";
import Navbar from "../navbar/navbar";
const Doctors = () => {
  return (
    <div className="container py-4 px-4 justify-content-center ">
      {/* <Routes>
        <Route path="/docters/docterPage/:id" element={<DocterPage />}/> */}
      <DocCard />
      <DocCard />
      <DocCard />
      <DocCard />
      <DocCard />
      {/* </Routes> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Doctors;
