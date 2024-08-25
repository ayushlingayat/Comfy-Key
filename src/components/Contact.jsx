import React, { useState } from "react";
import location from "/icons/location.svg";
import call from "/icons/call.svg";
import mail from "/icons/mail.svg";
import socials from "/icons/socials.svg";

const Contact = () => {
  const [user, setUser] = useState({
    username: " ",
    email: " ",
    phone: " ",
    msg: " ",
  });

  const inputs = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
    console.log(user);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-width " data-aos="fade-up">
        <div className="flex max-md:flex-col max-md:gap-y-6 justify-around">
          <div className="bg-darkGreen py-8 lg:px-14 px-5 text-white relative lg:w-1/3">
            <h4 className="font-semibold pl-5 text-2xl font-regular pb-8">
              Contact Info
            </h4>

            <div className="flex gap-3 pb-8 items-center">
              {" "}
              <img src={location} alt="" sizes={16} />
              <p className="text-md ">
                1234 Elm Street, Suite 567,Springfield,62704 United Kingdom
              </p>
            </div>

            <div className="flex gap-3 pb-8 items-center">
              {" "}
              <img src={call} alt="" sizes={16} />
              <p className="text-md  w-1/3">+1(555)123-4567</p>
            </div>

            <div className="flex gap-3 pb-8 items-center">
              {" "}
              <img src={mail} alt="" sizes={16} />
              <p className="text-md  lg:w-1/3">sample.email@example.com</p>
            </div>

            <img src={socials} alt="" className="h-8 " />
          </div>

          <div className="flex flex-col px-8 border-2 border-solid         border-black py-10 gap-6  w-full h-full">
            <h4 className="font-semibold pl-5 text-2xl font-regular pb-5">
              Send a message
            </h4>

            <input
              type="text"
              placeholder="Name*"
              name="username"
              className=" mb-2 outline-none border-b-2 border-gray-200 pb-2"
              
              onChange={inputs}
            />

            <input
              type="email"
              placeholder="Email Address*"
              name="email"
              className=" mb-2 outline-none border-b-2 border-gray-200 pb-2"
             
              onChange={inputs}
            />

            <input
              type="number"
              placeholder="Phone Number*"
              name="phone"
              className="mb-2 outline-none border-b-2 border-gray-200 pb-2"
          
              onChange={inputs}
            />

            <input
              type="text"
              placeholder="Write Your message here*"
              name="msg"
              className="mb-2 outline-none border-b-2 border-gray-200 pb-2"
             
              onChange={inputs}
            />

            <button className="rounded-full  lg:w-1/4 w-1/2 border-2 border-solid border-green py-2 text-green text-xl">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
