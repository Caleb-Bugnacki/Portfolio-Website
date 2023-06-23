import Carasoul from "./Components/Carasoul/Carasoul";
import { Metadata } from "next/types";
import ScrollLink from "./Components/ScrollLink";
import Link from "next/link";
import Experience from "./Components/Experience/Experience";
import MouseScrollAnimation from "./Components/MouseScrollAnimation/MouseScrollAnimation";

export const metadata: Metadata = {
  title: "Caleb Bugnacki",
};

export default function Home() {
  return (
    <>
      <div className=" flex justify-between w-full h-screen md:mx-10 bg ">
        <div className=" flex  dark:text-white ">
          <div className="flex flex-col  w-full md:relative inset-x-0 bottom-0 md:inset-0 md:leading-10 items-center  justify-center px-4">
            <div className="flex h-1/2 w-full md:hidden"></div>
            <div className="flex flex-col w-full h-1/2 md:h-screen items-center justify-center mt-24 ">
              <h3 className="text-slate-500 font-bold text-lg font-poppins uppercase drop-shadow-md dark:text-white">
                Caleb Bugnacki
              </h3>

              <h1 className=" text-2xl md:text-4xl font-bold font-poppins py-2  drop-shadow-2xl dark:text-white dark:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-center">
                Software and Mechanical <br></br> Engineering Student
              </h1>

              <p className="font-poppins text-xl text-slate-500 py-2  font-semibold text-center uppercase dark:text-white ">
                Bridging the gap between the virtual and the physical .
              </p>
              <div className="flex flex-col content-center items-center justify-center">
                <div className="flex flex-row leading-6 md:py-4">
                  <ScrollLink
                    href="/#projectsContainer"
                    className="font-bold font-poppins hover:underline text-lg transition ease-linear duration-700 dark:text-white"
                  >
                    View Projects
                  </ScrollLink>

                  <p className="font-poppins text-slate-500 dark:text-white">
                    &nbsp; or &nbsp;{" "}
                  </p>
                  <Link
                    href="/about"
                    className="font-bold font-poppins text-lg hover:underline  transition ease-linear duration-500 dark:text-white"
                  >
                    Read About Me
                  </Link>
                </div>
                <div className="flex  w-full items-center justify-center mt-4 md:mt-0">
                  <Link
                    href="/contact"
                    className="btn btn-ghost  border-black border-2 hover:border-2 hover:border-black font-semibold font-poppins"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" hidden md:flex md:justify-center md:absolute md:inset-x-0 md:bottom-4 ">
          <MouseScrollAnimation />
        </div>
      </div>
      <div id="flex w-full h-screen">
        <Experience />
      </div>
      <div
        className="w-full h-screen  text-center flex-col"
        id="projectsContainer"
      >
        <div className=" flex  pb-2  justify-center  md:pt-10">
          <h1 className="text-2xl md:text-4xl font-bold font-poppins text-center drop-shadow-2xl uppercase border-b-4 border-gray-500 p-2">
            selected projects
          </h1>
        </div>
        <Carasoul />
      </div>
    </>
  );
}
