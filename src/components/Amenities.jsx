import React from "react";
import ament1 from "/icons/ament1.svg";
import ament2 from "/icons/ament2.svg";
import ament3 from "/icons/ament3.svg";
import ament4 from "/icons/ament4.svg";

const Amenities = () => {
  return (
    <section id="amentities" className="py-20">
      <div className="max-width " data-aos="fade-up">
        <div className="mb-12 " >
          <h2 className="text-6xl max-md:text-3xl tracking-wide font-medium  text-center  uppercase font-bold text-green lg:pb-3">
            Our Amenities
          </h2>
          <p className="text-md max-md:hidden text-darkGrey text-center font-bold">
            Discover the Features That Make Your Stay Unforgettable
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {ament.map((item, index) => (
            <div
              key={index}
              className="row-span-3  bg-green px-12 py-10 hover:shadow-xl duration-300"
            >
              <img src={item.logo} alt="" className="pb-6 lg:h-[35%]" />

              <h3 className="text-xl  text-lightBrown pb-3">{item.title}</h3>
              <p className="text-grey  hover:text-white duration-300">
                {item.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;

const ament = [
  {
    logo: ament1,
    title: "Housekeeping",
    des: "Every room is meticulously cleaned and sanitized to ensure a hygienic environment.",
  },
  {
    logo: ament2,
    title: "Smart TVs",
    des: "Enjoy a wide range of streaming options and channels with our Smart TVs.",
  },
  {
    logo: ament3,
    title: "Furnished kitchen",
    des: "Our kitchens come fully equipped with modern appliances and all the essentials.",
  },
  {
    logo: ament4,
    title: "Free Parking",
    des: "Ensuring convenient and secure parking for your vehicle throughout your stay.",
  },
];
