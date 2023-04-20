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
import SearchBar from "./components/Searchbar/searchbar";
import OurTeam from "./components/OurTeam/OutTeam";
import AboutusContent from "./components/AboutusContent/AboutusContent";
import Testimonials from "./components/Testimonials/testimonials";
import { Aboutus } from "./components/Aboutus/Aboutus";
function App() {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <ImageSlider slides={slides} className="sliderStyles" />

              <Carousel />
              <Content className="contentStyles" />
              <Carousel1 />
            </div>
          }
        />
        <Route path="/aboutus" element={<Aboutus />} />

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
