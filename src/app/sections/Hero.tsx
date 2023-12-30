'use client'
import React from "react";
import { AnchorButton, SolidButton } from "../components/Buttons";


const Hero = () => {
  return (
    <div className="flex flex-col gap-16 w-full h-full px-16">
      <h1 className="font-header1-bold">Hi. I'm 
        <span className="text-orange gradientText"> Lin Hong, </span>
      </h1>
      <h1 className="font-header1-bold">a Software Engineer</h1>
      <p className="font-header7">
        Currently, I am an 
        <span className="text-pink"> 11th grader  </span>
        pursuing Software. I have 
        <span className="text-orange"> 3+ years </span>
        of coding experiences and I've made 
        <span className="text-cyan"> 16+ projects. </span>
      </p>

      <AnchorButton link="" contentStart="PROJ" contentEnd="ECTS" content={""}></AnchorButton>
    </div>
  );
};

export default Hero;
