import React from "react";
import MouseScrollAnimation from "../Components/MouseScrollAnimation/MouseScrollAnimation";

export default function About() {
  return (
    <>
      <div className="flex flex-col h-screen w-full justify-center items-center px-6 pt-14 leading-10">
        <h2 className="uppercase font-bold font-poppins text-slate-400 text-center text-xl">
          a few words about me
        </h2>
        <h1 className="font-poppins font-extrabold text-4xl text-center drop-shadow-md">
          I'm Caleb Martin Bugnacki, an aspiring Engineer studying Software and
          Mechanical Engineering at Franciscan University of Steubenville.
        </h1>
        <div className="container px-10 pt-2">
          <h2 className="uppercase font-bold font-poppins text-slate-400 text-center leading-normal text-lg">
            Occaecat adipisicing aliquip sint aliqua fugiat fugiat anim dolor
            occaecat est Lorem amet ea. Proident quis do et quis irure aliquip.
            Proident ut reprehenderit ut eiusmod excepteur tempor aliqua nulla
            non minim labore et incididunt. Quis Lorem dolor proident amet
            cillum qui aliqua dolore proident nisi sit enim occaecat id. Qui
            nisi consequat dolore ullamco consequat incididunt officia sunt
            consectetur culpa excepteur reprehenderit. Sunt proident pariatur
            anim eu ex magna occaecat proident id minim ex. Dolor mollit
            cupidatat anim excepteur pariatur deserunt proident amet dolore non
            dolor cillum.
          </h2>
          <div className="flex justify-center absolute inset-x-0 bottom-4">
            <MouseScrollAnimation />
          </div>
        </div>
      </div>
      <div className="flex flex-col h-screen w-full justify-center items-center px-6 pt-14 leading-10">
        <h2 className="uppercase font-bold font-poppins text-slate-400 text-center text-xl">
          Professional experience
        </h2>
        <h1 className="font-poppins font-extrabold text-4xl text-center drop-shadow-md">
          Systems Engineering Intern | HCL Technologies
        </h1>
        <h1 className="font-poppins font-extrabold text-2xl text-center drop-shadow-md">
          Jan 2023 - Present
        </h1>
        <div className="container px-10 pt-2">
          <h2 className="uppercase font-bold font-poppins text-slate-400 text-center leading-normal text-lg">
            Occaecat adipisicing aliquip sint aliqua fugiat fugiat anim dolor
            occaecat est Lorem amet ea. Proident quis do et quis irure aliquip.
            Proident ut reprehenderit ut eiusmod excepteur tempor aliqua nulla
            non minim labore et incididunt. Quis Lorem dolor proident amet
            cillum qui aliqua dolore proident nisi sit enim occaecat id. Qui
            nisi consequat dolore ullamco consequat incididunt officia sunt
            consectetur culpa excepteur reprehenderit. Sunt proident pariatur
            anim eu ex magna occaecat proident id minim ex. Dolor mollit
            cupidatat anim excepteur pariatur deserunt proident amet dolore non
            dolor cillum.
          </h2>
          <h1 className="font-poppins font-extrabold text-xl text-center drop-shadow-md">
            Keywords: MBSE, SysML, Cameo Systems Modeler, Defense Sector
          </h1>
        </div>
      </div>
    </>
  );
}
