import { Metadata, NextPage } from "next/types";
import Contact from "./Contact";

export const metadata: Metadata = {
  title: "Contact Me",
};

const ContactPage: NextPage = () => {
  return (
    <div className=" flex flex-col content-center justify-center  w-full h-full md:h-screen">
      <div className="flex flex-row h-24 md:h-2/5 w-full items-center  justify-center bg2 px-4 mt-16 md:mt-0">
        <h1 className="mx-10 px-4 font-bold text-4xl  text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-7xl">
          Contact Me
        </h1>
      </div>
      <div className="flex flex-col md:flex-row content-center justify-center w-full h-full p-2 px-12">
        <div className="flex flex-col w-full h-full  items-center justify-center gap-2">
          <h1 className="text-2xl font-bold text-center uppercase md:text-4xl">
            Get in touch - let's work together.
          </h1>
          <h3 className="px-8 text-center font-semibold text-2xl text-slate-500 md:text-4xl">
            Have a project or career opportunity?{" "}
          </h3>
          <p className="px-8 text-center font-semibold text-xl text-slate-500 md:text-2xl">
            Drop me a message if you want to work together on something
            exciting. Big or small.
          </p>
          <p className="px-8 text-center font-semibold text-lg md:text-2xl">
            Feel free to reach out to me anytime!
          </p>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
