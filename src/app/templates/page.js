import SectionHeading from "@/components/Common/SectionHeading";
import Image from "next/image";
import React from "react";

const categories = [
  {
    name: "All",
    icon: "/all.svg",
  },
  {
    name: "Classic",
    icon: "/diamond.svg",
  },
  {
    name: "Professional",
    icon: "/briefcase.svg",
  },
  {
    name: "Mordern",
    icon: "/flash.svg",
  },
  {
    name: "Creative",
    icon: "/magicpen.svg",
  },
];

const Templates = () => {
  return (
    <div className="container my-10">
      <SectionHeading title="Make Your Resume with Proven Professional Templates." />
      <div className="select-none text-center w-11/12 lg:max-w-[50vw] mx-auto text-base md:text-[22px] mt-2">
        Use one of our field-tested resume templates, designed by a team of HR
        experts and typographers.
      </div>
      {/* CATEGORIES */}
      <div className="lg:max-w-[55vw] mx-auto my-10 grid grid-cols-2 md:grid-cols-5 gap-10">
        {categories?.map((category, index) => (
          <div
            key={index}
            className="flex justify-center space-x-2 items-center"
          >
            <Image
              width={40}
              height={40}
              className="w-6 h-6"
              src={category?.icon}
              alt=""
            />
            <div className="text-bluePrimary">{category?.name}</div>
          </div>
        ))}
      </div>
      {/* CREATE RESUME BUTTON */}
      <div className="w-full flex justify-center mb-10">
        <button className="bg-bluePrimary py-4 px-6 rounded-xl text-white hover:bg-lightBlue transition duration-100">
          Create My Resume
        </button>
      </div>

      {/* TEMPLATES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-20">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item, index) => (
          <div
            className="z-10 group relative cursor-pointer shadow-xl rounded-2xl"
            key={index}
          >
            <div className="mb-2 text-center font-medium text-bluePrimary">
              Software Developer
            </div>
            <Image
              src={"/resume2.png"}
              width={"600"}
              height={"801"}
              alt={""}
              className=" rounded-xl mx-auto z-10"
            />
            <button
              className={`${"group-hover:block hidden absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "}  px-6 md:py-4 py-2 w-max  text-white bg-bluePrimary rounded-2xl hover:bg-lightBlue transition duration-100  `}
            >
              Use This Template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
