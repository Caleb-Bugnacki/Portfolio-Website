import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

export default function Home() {
  return (
    <>
      <div className="">
        <header className=" bg-transparent sticky top-0 z-50">
          <Header />
        </header>

        <div className=" flex  w-full h-screen bg">
          <Hero />
        </div>
      </div>
    </>
  );
}
