import Hero from "./Components/Hero/Hero";
import Carasoul from "./Components/Carasoul/Carasoul";
import Image from "next/image";
import ScrollLink from "./Components/ScrollLink";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="dark:bg-gradient-to-tl dark:from-gray-600 dark:to-gray-300">
        <div className=" flex justify-between w-full h-screen  ">
          <div className=" flex relative dark:text-white ">
            <div className="flex flex-col mx-10 leading-10 justify-center">
              <h3 className="text-slate-500 font-bold text-md font-poppins uppercase drop-shadow-md dark:text-white">
                Caleb Bugnacki
              </h3>
              <h1 className="text-4xl font-bold font-poppins py-2 text-left drop-shadow-2xl dark:text-white dark:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Software and Mechanical <br></br> Engineering Student
              </h1>
              <p className="font-poppins text-xl text-slate-500 py-2  uppercase dark:text-white">
                Bridging the gap between the virtual and the physical .
              </p>
              <div className="flex leading-8 py-8">
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
            </div>
          </div>
          <Image
            src="/../public/CalebBugnacki.png"
            width={800}
            height={500}
            alt=""
            className=""
          />
        </div>

        <div
          className="w-full h-screen relative text-center flex-col"
          id="projectsContainer"
        >
          <div className=" flex  my-2 py-10 justify-center">
            <h1 className="text-4xl font-bold font-poppins text-center drop-shadow-2xl uppercase ">
              selected projects
            </h1>
          </div>
          <Carasoul />
        </div>
      </div>
    </>
  );
}
