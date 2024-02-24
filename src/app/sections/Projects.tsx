"use client";
import Project from "../components/Project"
import { useState } from "react";
import { projectInfo } from "../constants";

const Projects = () => {
  const [project, setProject] = useState({
    
  });

  return (
    <div className="h-screen px-parent border">
      {/* Project Info */}
      <div className="h-screen w-screen">

        <div className="flex flex-col items-center [&>*]:leading-tight">
          <p className="font-lable-bigger text-gradient-cyan-pink">PROJECT</p>
          <p className="font-header2-bold uppercase">projectName</p>
          <p className="font-paragraph">project description</p>
        </div>
      </div>
    </div>
  )
}

export default Projects
