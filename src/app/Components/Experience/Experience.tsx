import React from "react";

import MBSE from "../../../../public/MBSE.png";
import javascript from "../../../../public/javascript.png";
import reactImage from "../../../../public/react.png";
import nextjs from "../../../../public/nextjs.png";
import typescript from "../../../../public/Typescript_logo.png";
import github from "../../../../public/github.png";
import tailwind from "../../../../public/tailwind.png";
import cPlus from "../../../../public/C++.png";
import AWS from "../../../../public/AWS.png";
import Image from "next/image";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: cPlus,
      title: "C++",
      style: "shadow-blue-300",
    },
    {
      id: 2,
      src: AWS,
      title: "AWS",
      style: "shadow-orange-300",
    },

    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: nextjs,
      title: "Next JS",
      style: "shadow-gray-900",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },

    {
      id: 8,
      src: MBSE,
      title: "MBSE",
      style: "shadow-yellow-600",
    },

    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div className=" w-full h-full md:h-screen px-10">
      <div className=" mx-auto py-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p
            className="text-4xl font-bold border-b-4 border-gray-500 py-2 inline"
            id="Experience"
          >
            Experience
          </p>
          <p className="py-6 text-lg">
            These are some of the technologies I've worked with.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center  py-8 md:px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col shadow-md hover:scale-105 duration-500 py-2 justify-center items-center rounded-lg  ${style}`}
            >
              <Image src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 align-text-bottom dark:text-white font-semibold  text-xl">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
