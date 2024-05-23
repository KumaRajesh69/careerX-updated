import SectionHeading from "@/components/Common/SectionHeading";
import React from "react";
import ResumeCarousel from "../ResumeCarousel";

type Props = {};

const Templates = (props: Props) => {
  return (
    <div className="w-full mt-20">
      <div className="container">
        <SectionHeading title="Make Your Resume with Proven Professional Templates." />
      </div>
      <ResumeCarousel />
      <div className="flex justify-center mt-10">
        <button className="px-6 md:py-4 py-2 w-full md:w-auto text-white bg-bluePrimary rounded-2xl hover:bg-lightBlue transition duration-100">
          See More Templates
        </button>
      </div>
    </div>
  );
};

export default Templates;
