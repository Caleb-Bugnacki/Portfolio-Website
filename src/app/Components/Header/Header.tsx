"use client";
import React, { useState } from "react";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import Link from "next/link";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="navbar fixed bg-base-100/0 px-6">
        <div className="flex-1">
          <Link
            href="/"
            className="btn btn-ghost normal-case text-xl font-bold font-poppins"
          >
            Caleb Bugnacki
          </Link>
        </div>

        <div className=" flex-row  content-end">
          {showSidebar ? (
            <button
              className="flex text-3xl text-white items-center cursor-pointer fixed right-6 top-3.5 z-50 font-poppins hover:border-2 rounded-md p-1 "
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <span className="text-sm font-poppins">CLOSE &nbsp;</span> X
            </button>
          ) : (
            <button
              className=" btn btn-square btn-ghost"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          )}
          <div
            className={` flex flex-col h-screen w-screen  top-0 right-0 sm:w-[35vw] bg-gradient-to-bl from-gray-500/70 to-gray-200/70  trasnparent p-10 pl-20 text-white fixed sm:h-full z-40  ease-in-out duration-300 ${
              showSidebar ? "translate-x-0 " : "translate-x-full"
            }`}
            id="sidebarContainer"
          >
            <div className=" flex-auto opacity-100">
              <ul
                className="mt-20 text-4xl text-center font-bold leading-10 font-poppins text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                <li className="py-3 hover:underline decoration-from-font  ">
                  <Link href="/">Home</Link>
                </li>
                <li className="py-3 hover:underline decoration-from-font">
                  <Link href="/projects">Projects</Link>
                </li>
                <li className="py-3 hover:underline decoration-from-font">
                  <Link href="/about">About Me</Link>
                </li>
                <li className="py-3 hover:underline decoration-from-font">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className=" flex justify-between grid-col-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              <a
                href="https://github.com/Caleb-Bugnacki"
                target="_blank"
                className=""
              >
                <AiOutlineGithub className=" h-16 w-16" />
              </a>
              <a
                href="https://www.linkedin.com/in/caleb-bugnacki-a1499320b/"
                target="_blank"
                className=""
              >
                <AiOutlineLinkedin className=" h-16 w-16" />
              </a>

              <a
                href="https://twitter.com/CalebBugnacki"
                target="_blank"
                className=""
              >
                <CiTwitter className=" h-16 w-16" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
/*
<div className="flex items-center ">
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
          MENU
        </span>

        <div className=" bg-black container content-center h-5.5 group-hover:bg-slate-500 group-hover:h-7 transition ease-out duration-400">
          <div className="bg-white w-8 h-1  my-1  group-hover:h-2 transition ease-out duration-400"></div>
          <div className="bg-white w-8 h-1 my-1  group-hover:h-2 transition ease-out duration-400"></div>
        </div>
      </a>
      */
