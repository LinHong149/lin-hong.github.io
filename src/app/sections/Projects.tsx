"use client";
import Project from "../components/Project"
import { useState } from "react";
import { projectInfo } from "../constants";

const Projects = () => {
  const [project, setProject] = useState({
    
  });

  return (
    <div className="h-screen">
      {/* Project Info */}
      <div className="h-screen w-screen">

        <div className="flex flex-col">
          <p className="font-lable-bigger text-gradient-cyan-pink">PROJECT</p>
          <p>{projectInfo}</p>
        </div>
      </div>
    </div>
  )
}

export default Projects
