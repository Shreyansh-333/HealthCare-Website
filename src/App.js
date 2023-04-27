import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import About from "./pages/about";
import Home from "./pages/home";
import Carousel1 from "./components/Carousel1/carousel1";
import Carousel from "./components/Carousel/carousel";
import ImageSlider from "./components/Slider/slider";
import Content from "./components/Content/content";
import Footer from "./components/Footer/footer";
import { Aboutus } from "./components/Aboutus/Aboutus";
import Specialities from "./components/Specialities/specialities";
import Services from "./components/Services/services";
import Hospitals from "./components/Hospitals/hospitals";
import Doctors from "./components/Doctors/doctors";
import DocterPage from "./components/DoctorPage/doctorpage";
import SpecialityPage from "./components/SpecialityPage/specialityPage";
import PartnerHospitals from "./components/PartnerHospitals/partnerHosp";
import ContactUs from "./components/ContactUs/contactUs";


function App() {
  const slides = [
    { url: "HomepageBanner.jpg", title: "beach" },
    { url: "image-1.jpg", title: "beach" },
    { url: "image-2.jpg", title: "boat" },
    { url: "image-3.jpg", title: "forest" },
    { url: "image-4.jpg", title: "city" },
    { url: "image-5.jpg", title: "italy" },
  ];
  // var Name = "fff";

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <ImageSlider slides={slides} className="sliderStyles" />
              <Carousel1 />
              <Content className="contentStyles" />
              <PartnerHospitals />
            </div>
          }
        />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/specialities" element={<Specialities />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/hospitals" element={<Hospitals />} />
        {/* <Route path="/doctors" element={<Doctors />}>
        <Route path="/docters/docterPage" element={<Docto />} */}
        <Route path="/doctors/docterPage/:id" element={<DocterPage />} />
        <Route path="/doctors" element={<Doctors />}></Route>
        <Route
          path="/specialities/specialityPage/:id"
          element={<SpecialityPage />}
        />
      </Routes>

      <Footer />
    </Router>

    // <>

    // {/* //   <Routes>
    // //     <Route path="/" element={<About />} />

    // //     <Route path="/home" element={<Home />} />
    // //   </Routes> */}
    // </>
  );
}

export default App;
