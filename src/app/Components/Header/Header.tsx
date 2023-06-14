import React from "react";

const Header = () => {
  return (
    <div className=" flex justify-between py-5 px-10 bg-transparent ">
      <a href="#" className=" text-xl font-semibold font-poppins ">
        Caleb Bugnacki
      </a>
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
  );
};

export default Header;
