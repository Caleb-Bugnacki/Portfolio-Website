import React from "react";
import { Metadata } from "next/types";

import ProjectGrid from "../Components/ProjectGrid/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
};
function Projects() {
  return (
    <>
      <div className="flex h-screen w-full justify-center items-center align-middle content-center bg-gray-100">
        <h1>Read about some of the projects I have worked on!</h1>
      </div>
      <div className="px-6 bg-gray-100">
        <ProjectGrid />
      </div>
    </>
  );
}

export default Projects;
