import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="bg-[blue]">
        <h1 className="text-3xl font-bold underline bg-[green]">
          Hello world!
        </h1>
        <h2 className="text-[155px] bg-[yellow] text-[red]">Hello world </h2>
      </div>
      <Link to="/home">
        <button className="text-[44px]">Home</button>
      </Link>
    </div>
  );
};

export default About;
