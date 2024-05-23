import LogoContainer from "@/components/Common/LogoContainer";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className=" container flex flex-col md:flex-row md:justify-between">
      <div className="mt-20 flex-1">
        <div className="text-lightBlue py-2 rounded-full px-4 border border-gray-300 uppercase font-semibold w-max">
          The <span className="text-bluePrimary">#1</span> resume builder
        </div>

        <div className="mt-1 text-6xl font-medium text-wrap text-bluePrimary">
          Create a Job-Ready Resume in Minutes
        </div>
      </div>
      <div className="mt-20 flex-1 flex justify-between self-end">
        <div>
          <div className="mb-5 text-2xl text-bluePrimary">
            Create your resume easily with our free builder and professional
            templates.
          </div>
          <button className="bg-bluePrimary py-4 px-6 rounded-xl text-white hover:bg-lightBlue transition duration-100">
            Build My Resume
          </button>
        </div>
        <LogoContainer />
      </div>
    </div>
  );
};

export default HeroSection;
