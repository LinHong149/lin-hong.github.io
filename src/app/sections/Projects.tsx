"use client";
import Project from "../components/Project"
import { useState } from "react";
import { projectInfo } from "../constants";


const Projects = () => {
  const ProjectBottom = ({name, description}) => {
    return (
      <div className="flex flex-col items-center [&>*]:leading-tight">
        <p className="font-lable-bigger text-gradient-cyan-pink">PROJECT</p>
        <p className="font-header2-bold uppercase">{name}</p>
        <p className="font-paragraph">{description}</p>
      </div>
    )
  }
  
  return (
    <div className="h-screen px-parent border">
      {/* Project Info */}
      <div className="h-screen w-screen">
        
        <ProjectBottom name={projectInfo[0].name} description={projectInfo[0].description}/>
      </div>
    </div>
  )
}

export default Projects
