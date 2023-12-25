'use client'
import React from "react";
import { AnchorButton, SolidButton } from "../components/Buttons";


const Hero = () => {
  return (
    <div className="flex flex-col gap-16 w-full h-screen px-16">
      <h1 className="font-header1-bold">Hi, I'm Lin,</h1>
      <h1 className="font-header1-bold">a Software Engineer</h1>
      <p className="font-header7">
        Currently, I am a 11th grader pursuing Software. I have 3+ years of
        coding experiences and made 16+ projects.
      </p>

      <AnchorButton link="" contentStart="PROJ" contentEnd="ECTS" content={""}></AnchorButton>
    </div>
  );
};

export default Hero;
