import React from "react";
import { projects } from "../Carasoul/Projects";
import Image from "next/image";
import Link from "next/link";

function ProjectGrid() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-2 p-2 md:m-10 md:p-10 gap-6 justify-center items-center content-center">
        {projects.map(({ id, img, name, description }) => (
          <div
            key={id}
            className={`flex flex-col shadow-md hover:scale-105 duration-500 py-2 justify-center items-center rounded-2xl shadow-yellow-500 
             border-t-2 border-t-yellow-500 `}
          >
            <div className="flex w-full h-full p-2">
              <Image
                src={img}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                alt={name}
              />
            </div>

            <div className="flex flex-col w-full h-full content-center items-center justify-center gap-2 font-poppins">
              <h1 className="mt-4 align-text-bottom dark:text-white font-semibold text-2xl">
                {name}
              </h1>
              <p className=" align-text-bottom dark:text-white text-lg">
                {description}
              </p>
              <div className="flex w-full justify-evenly content-center items-center py-4">
                <button className="btn btn-ghost btn-outline px-2">
                  <Link href="#">Read More</Link>
                </button>
                <button className="btn  btn-ghost  btn-outline px-2">
                  <a href="#" target="_blank">
                    View Project
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjectGrid;
