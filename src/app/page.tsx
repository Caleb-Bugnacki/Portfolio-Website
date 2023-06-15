import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

export default function Home() {
  return (
    <>
      <div className="bg-steve">
        <Header />
        <div className=" flex  w-full h-screen ">
          <Hero />
        </div>
      </div>
    </>
  );
}
