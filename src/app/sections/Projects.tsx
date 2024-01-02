"use client";
import Project from "../components/Project"
import { useState } from "react";
import { projectInfo } from "../constants";

const Projects = () => {
  const [project, setProject] = useState({
    
  });

  return (
    <div>
      <Project></Project>

      {/* Project Info */}
      <div className="flex flex-col">
        <p className="font-lable-bigger text-gradient-cyan-pink">PROJECT</p>
      </div>
    </div>
  )
}

export default Projects
