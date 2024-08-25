import React from "react";
import about from "/images/about.svg";




const About = () => {
  return (
   
    <section id="about" className="py-20">
      <div className="max-width   flex max-lg:flex-col lg:justify-evenly items-center gap-3 max-lg:gap-6" data-aos="fade-up" >
        <div className="lg:w-1/2">
          <img src={about} alt="" className="max-md:w-full"/>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-6xl max-md:text-3xl font-medium tracking-wide uppercase font-bold text-green lg:pb-10">
            About US
          </h2>
          <p className=" max-md:text-md text-lg text-darkGrey font-bold">
            Welcome to Comfy Keys — Your Gateway to Comfortable Living
          </p>

          <p className="text-grey text-lg max-md:text-md lg:w-[80%]">
            At Comfy Keys, we simplify the rental process, offering a
            user-friendly platform that makes finding your next home effortless
            and enjoyable. Our wide selection of properties ensures that you
            find the perfect fit for your style, location, and budget. <br></br>
            Dedicated to seamless experiences, we support you from search to
            move-in, making renting straightforward and stress-free. Choose
            Comfy Keys and unlock the door to your new home with ease and
            confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
