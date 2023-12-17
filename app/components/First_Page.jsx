"use client";
import Header from "./Header";
import Hero from "./Hero";

const First_Page = ({}) => {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 justify-center flex items-center">
        <Hero />
      </div>
    </div>
  );
};

export default First_Page;
