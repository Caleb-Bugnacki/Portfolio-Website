import React from "react";
import { Metadata } from "next/types";
import MouseScrollAnimation from "../Components/MouseScrollAnimation/MouseScrollAnimation";
import ProjectGrid from "../Components/ProjectGrid/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
};
function Projects() {
  return (
    <>
      <div className="flex h-screen w-full  bg-gray-100">
        <div className="flex relative w-full h-screen justify-center items-center content-center">
          <h1 className="text-3xl text-black mx-10 text-center">
            Read about some of the projects I have worked on!
          </h1>
          <div className=" hidden md:flex md:justify-center md:absolute md:inset-x-0 md:bottom-4 ">
            <MouseScrollAnimation />
          </div>
        </div>
      </div>
      <div className=" flex w-full h-full  bg-gray-100 ">
        <ProjectGrid />
      </div>
    </>
  );
}

export default Projects;
