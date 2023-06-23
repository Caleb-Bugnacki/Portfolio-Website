import React from "react";
import { projects } from "../Carasoul/Projects";
import Image from "next/image";

function ProjectGrid() {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2   md:gap-8 text-center  md:py-8 md:px-12 sm:px-0 ">
        {projects.map(({ id, img, name, description }) => (
          <div
            key={id}
            className={` flex flex-col hover:scale-105 duration-500 py-2  rounded-xl w-full h-screen `}
          >
            <div className="relative md:h-full h-1/2 w-full  rounded-2xl justify-center items-center">
              <Image
                className="absolute  object-cover  w-full h-full rounded-xl"
                src={img}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                alt={name}
              />
              <div className="absolute justify-center content-center items-center ">
                <p className=" text-white text-center">{name}</p>
                <p className=" text-white text-center">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjectGrid;
