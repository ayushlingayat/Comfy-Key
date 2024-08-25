import React, { useState } from "react";
import logo from "/logo/Comfykeys.svg";
import { SlMenu } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import About from "../About";
import { Link } from "react-router-dom";


const Header = () => {
    const [open, setOpen] = useState(false);
  return (
    <header className="lg:px-28 relative lg:top-6  z-50">

      <div className="font-medium  flex justify-between py-5 px-4 lg:gap-20 xl:gap-10 lg:rounded-3xl lg:px-16 lg:py-2 lg:bg-[#9e9191] lg:bg-opacity-75">
        <img src={logo} alt="" className="lg:h-16 h-12 pr-32" />

        {!open ? (
        <button 
        onClick={ () =>setOpen(true)}
        className="lg:hidden">
        <SlMenu className="text-white mt-2"  size={28} />
        </button>
        ):(
        <button 
        onClick={ () => setOpen(false)}
        className="lg:hidden">
        <RxCross1 className="text-black mt-2 z-40 "  size={28} />
        </button>
)}

{open && (
    <div className="absolute flex left-0 top-0  px-10 gap-y-5 pb-10 z-20 flex-col bg-[#143F36] w-full h-fit " data-aos="fade-left" >

<div className="flex justify-between py-6 ">
<img src={logo} alt="" className=" h-12 " />

<button 
        onClick={ () => setOpen(false)}
        className="lg:hidden" >
        <RxCross1 className="text-white ml-20"  size={30} />
        </button>
        </div>

         <ul className="flex flex-col gap-10 lg:gap-16 text-xl text-white font-normal">
            <li className="hover:text-white  hover:underline  hover:underline-offset-4">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-white hover:underline hover:underline-offset-4">
              <a href="#about" >About</a>
            </li>
            <li className="hover:text-white hover:underline hover:underline-offset-4">
              <a href="#amentities">Amenities</a>
            </li>
            <li className="hover:text-white hover:underline hover:underline-offset-4">
              <a href="#partner">Partner With Us</a>
            </li>
            <li className="hover:text-white hover:underline hover:underline-offset-4">
              <a href="#contact">Contact</a>
            </li>
          </ul>


          <div className="flex justify-center gap-6 py-6 ">
          <RiInstagramFill size={36} className="text-white items-center"/>
          <FaFacebook size={36} className="text-white items-center" />
          </div>
    </div>
    
)}


        <div className=" flex items-center max-lg:hidden ">
          <ul className="flex lg:gap-16 text-xl text-gray-300 font-normal">

            <li   className="text-white underline underline-offset-4"> 
              <a href="#home">Home</a>
           </li>
            <li  className="hover:text-white hover:underline hover:underline-offset-4"> 
              <a href="#about">About</a>
           </li>
            <li  className="hover:text-white hover:underline hover:underline-offset-4"> 
              <a href="#amentities">Amenities</a>
           </li>
            <li className="hover:text-white hover:underline hover:underline-offset-4">
              <a href="#partner">Partner With Us</a>
           </li>
            <li className="hover:text-white hover:underline hover:underline-offset-4"> 
              <a href="#contact">Contact</a>
           </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
