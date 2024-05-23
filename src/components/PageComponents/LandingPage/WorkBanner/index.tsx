"use client";
import React from "react";

type Props = {};

const WorkBanner = (props: Props) => {
  return (
    <div className="h-[330px] w-full bg-work-bg my-20">
      <div className="container h-full flex flex-col justify-center items-center">
        <div className="text-2xl lg:text-[50px] text-white font-semibold text-center w-11/12 lg:max-w-[60vw] mx-auto lg:leading-[59px]">
          Let Your Resume Do The Work
        </div>
        <button className="bg-transparent py-4 px-10 rounded-xl text-white border-2 border-white font-bold transition duration-100 mt-5 text-xl hover:text-bluePrimary hover:bg-white transform ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WorkBanner;
