import React from "react";

const Header = () => {
  return (
    <div className=" justify-between py-10 px-10 mb-12 flex ">
      <a href="#" className=" text-lg font-semibold  ">
        Caleb Bugnacki
      </a>
      <a href="#" className="flex items-center group">
        <span className="px-2 group-hover:text-slate-500">Menu</span>

        <div className=" bg-black container content-center group-hover:bg-slate-500 h-5.5 group-hover:h-7">
          <div className="bg-white w-8 h-1  my-1 group-hover:h-2"></div>
          <div className="bg-white w-8 h-1 my-1 group-hover:h-2"></div>
        </div>
      </a>
    </div>
  );
};

export default Header;
