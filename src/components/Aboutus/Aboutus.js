import React from "react";
import Testimonials from "../Testimonials/testimonials";
import SearchBar from "../Searchbar/searchbar";
import OurTeam from "../OurTeam/OutTeam";
import AboutusContent from "../AboutusContent/AboutusContent";

export const Aboutus = () => {
  return (
    <div>
      <Testimonials />
      <SearchBar />
      <OurTeam />
      <AboutusContent className="aboutusContentStyles" />
    </div>
  );
};
