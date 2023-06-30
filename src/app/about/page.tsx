import React from "react";
import MouseScrollAnimation from "../Components/MouseScrollAnimation/MouseScrollAnimation";
import Experience from "../Components/Experience/Experience";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "About Me",
};

export default function About() {
  return (
    <>
      <div className="flex flex-col h-full md:h-screen w-full justify-center items-center px-6 pt-14 leading-10 ">
        <h2 className="uppercase font-bold font-poppins text-slate-500 text-center md:text-xl">
          a few words about me
        </h2>
        <h1 className="font-poppins font-extrabold text-2xl md:text-4xl text-center drop-shadow-md">
          I'm Caleb Martin Bugnacki, an aspiring Engineer studying Software and
          Mechanical Engineering at Franciscan University of Steubenville.
        </h1>
        <div className="container px-10 pt-2">
          <h2 className="uppercase font-bold font-poppins text-slate-500 text-center leading-normal text-md md:text-lg">
            For the last two years, I have been feeding my{" "}
            <span className="text-black font-semibold">
              &nbsp; passion &nbsp;
            </span>{" "}
            for engineering by pursuing a Bachelors of Science in{" "}
            <span className="text-black font-semibold">
              &nbsp; Software Engineering &nbsp;
            </span>
            with a minor in{" "}
            <span className="text-black font-semibold">
              &nbsp; Mechanical Engineering &nbsp;
            </span>{" "}
            at{" "}
            <span className="text-black font-semibold">
              &nbsp;Franciscan Univeristy of Steubenville. &nbsp;
            </span>
            It is my mission to enrich and enhance humanity through my devotion
            to engineering. irure aliquip. Proident ut reprehenderit ut eiusmod
            excepteur tempor aliqua nulla non minim labore et incididunt. Quis
            Lorem dolor proident amet cillum qui aliqua dolore proident nisi sit
            enim occaecat id. Qui nisi consequat dolore ullamco consequat
            incididunt officia sunt consectetur culpa excepteur reprehenderit.
            Sunt proident pariatur anim eu ex magna occaecat proident id minim
            ex. Dolor mollit cupidatat anim excepteur pariatur deserunt proident
            amet dolore non dolor cillum.
          </h2>
          <div className="hidden md:flex md:justify-center md:absolute md:inset-x-0 md:bottom-4">
            <MouseScrollAnimation />
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full md:h-screen w-full justify-center items-center px-6 pt-8 md:pt-14 leading-10">
        <h2 className="uppercase font-bold font-poppins text-slate-500 text-center text-xl md:text-xl pb-2 border-t-2 border-black  md:border-none">
          Professional experience
        </h2>
        <h1 className="font-poppins font-extrabold text-2xl md:text-4xl text-center drop-shadow-md pb-2">
          Systems Engineering Intern{" "}
          <span className="invisible md:visible">|</span> HCL Technologies
        </h1>

        <h1 className="font-poppins font-extrabold text-xl md:text-2xl text-center drop-shadow-md">
          Jan 2023 - Present <span className="text-3xl">|</span> Sector: Defense
        </h1>
        <div className="container px-10 pt-2">
          <h2 className="uppercase font-bold font-poppins text-slate-500 text-center leading-normal md:text-lg">
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
          <h1 className="font-poppins font-extrabold text-lg md:text-xl text-center drop-shadow-md pt-2">
            Keywords: MBSE, SysML, Cameo Systems Modeler, Defense Sector
          </h1>
        </div>
      </div>
      <div className="flex w-full h-full md:h-screen mt-6 md:mt-0">
        <Experience />
      </div>
    </>
  );
}
