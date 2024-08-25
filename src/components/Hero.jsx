import React from "react";
import hero from "/images/hero.svg";
import Header from "./common/Header";

const Hero = () => {
  return (
    <>
      <div id="home" className="h-[100vh] z-40 relative   bottom-[90px] w-full mb-10">
        <img src={hero} alt="" className="object-cover w-full h-full " />

  
        <div className="absolute top-[46%] lg:left-10 max-width  max-md:top-[30%] lg:px-32 px-10 max-md:text-center">
          <h1 className="text-white lg:text-7xl  text-4xl max-md:text-center font-bold pb-6 ">
            Welcome to Comfy Keys
          </h1>
          <p className="text-white lg:text-3xl text-xl font-bold lg:w-4/5 pb-6">
            Experience the Comfort of Home Away from Home at comfy keys
          </p>
          <button className="bg-white max-sm:text-xl text-green text-2xl font-medium px-8 py-3 rounded-full">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
