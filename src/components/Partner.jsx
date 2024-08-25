import React from "react";
import part1 from "/icons/part1.svg";
import part2 from "/icons/part2.svg";
import part3 from "/icons/part3.svg";
import part4 from "/icons/part4.svg";
import part5 from "/icons/part5.svg";
import part6 from "/icons/part6.svg";

const Partner = () => {
  return (
    <section id="partner" className="py-20">
      <div className="max-width " data-aos="fade-up">
        <div className="mb-12">
          <h2 className="text-6xl  max-md:text-3xl tracking-wide font-medium  text-center font-bold text-green pb-3">
            Partner With Us
          </h2>
          <p className="text-md  max-md:hidden text-darkGrey text-center font-bold">
            Come work with agents and landlords of Comfy Keys
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          {partner.map((item, index) => (
            <div key={index} className="border-green row-span-2  border-solid border-8 px-6 py-6   hover:shadow-lg duration-500 ">
              <p className="text-grey text-md pb-4 w-3/4">
                <span className="text-darkGrey font-semibold">
                  {item.head}
                  <br></br>
                </span>
                {item.detail}
              </p>

              <div className="flex justify-end items-end">
                <img src={item.icon} alt="" className="text-end" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;

const partner = [
  {
    head: "Maintenance and Repairs:",
    detail:
      " Reduces landlord's costs by fixing issues without charge, showing commitment to property upkeep.",
    icon: part1,
  },
  {
    head: "Long-Term Partnership:",
    detail:
      "Fosters a mutually beneficial, long-term relationship through dedicated property care and positive rental experience.",
    icon: part2,
  },
  {
    head: " Reliable Tenant:",
    detail: "Demonstrates responsibility and reliability as a tenant.",
    icon: part3,
  },
  {
    head: "Property Quality:",
    detail:
      "Preserves property value and condition, reducing long-term maintenance costs.",
    icon: part4,
  },
  {
    head: "Guaranteed Monthly Payment:",
    detail:
      "Provides financial stability and predictability, aiding in better financial planning.",
    icon: part5,
  },
  {
    head: "Efficient Communication:",
    detail:
      "Ensures quick and clear communication between landlords, agents, and tenants.",
    icon: part6,
  },
];
