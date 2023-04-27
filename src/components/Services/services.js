import React from "react";
import SearchBar from "../Searchbar/searchbar";
import OurTeam from "../OurTeam/OutTeam";
import AboutusContent from "../AboutusContent/AboutusContent";
import ServicesContent from "../ServicesContent/servicesContent";

const Services = () => {
  return (
    <div>
      <SearchBar />
      <ServicesContent />
      <OurTeam />
    </div>
  );
};

export default Services;