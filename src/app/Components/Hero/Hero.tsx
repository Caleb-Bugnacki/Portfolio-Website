import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <>
      <div className="  flex flex-col mx-10 leading-10 justify-text-left justify-center relative inset-y-3">
        <h3 className="text-slate-500 text-md font-poppins uppercase">
          Caleb Bugnacki
        </h3>
        <h1 className="text-4xl font-bold font-poppins py-2 text-left drop-shadow-2xl">
          Software and Mechanical <br></br> Engineering Student
        </h1>
        <p className="font-poppins text-xl text-slate-500 py-2  uppercase">
          Bridging the gap between the virtual and the physical .
        </p>
        <div className="flex leading-8 py-8">
          <a
            href="#"
            className="font-bold font-poppins hover:underline text-lg transition ease-linear duration-700"
          >
            View Projects
          </a>

          <p className="font-poppins text-slate-500">&nbsp; or &nbsp; </p>
          <a
            href="#"
            className="font-bold font-poppins text-lg hover:underline  transition ease-linear duration-500"
          >
            Read About Me
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
