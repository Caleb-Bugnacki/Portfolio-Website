import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

export default function Home() {
  return (
    <>
      <div className="">
        <Header />
        <div className=" flex  w-full h-screen bg">
          <Hero />
        </div>
      </div>
    </>
  );
}
