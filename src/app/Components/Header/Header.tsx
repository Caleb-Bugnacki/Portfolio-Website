import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <nav>
      <div className=" flex justify-between py-4 px-10 bg-transparent ">
        <div className="flex items-center">
          {" "}
          <Image
            src="/logo.svg"
            alt="logo"
            width={40}
            height={20}
            className=" fill-black stroke-black stroke-2"
          />
          <a href="#" className=" text-xl font-semibold font-poppins mx-4">
            Caleb Bugnacki
          </a>
        </div>
        <a href="#" className="flex items-center group ">
          <span className=" text-md px-2 font-poppins font-semibold group-hover:text-slate-500 transition ease-out duration-400">
            Menu
          </span>

          <div className=" bg-black container content-center h-5.5 group-hover:bg-slate-500 group-hover:h-7 transition ease-out duration-400">
            <div className="bg-white w-8 h-1  my-1  group-hover:h-2 transition ease-out duration-400"></div>
            <div className="bg-white w-8 h-1 my-1  group-hover:h-2 transition ease-out duration-400"></div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
