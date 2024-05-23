import Image from "next/image";
import React from "react";

type Props = {};

const WhyCareerX = (props: Props) => {
  return (
    <div className="bg-why-career-x-bg-mob md:bg-why-career-x-bg w-full min-h-[150vh] h-full md:min-h-[100vh] flex flex-col justify-center md:justify-end items-center bg-no-repeat bg-cover my-20 md:pb-20">
      <div className="container text-white text-center mb-10">
        <div className="text-2xl lg:text-[50px] text-white font-semibold text-center w-11/12 lg:max-w-[60vw] mx-auto lg:leading-[59px]">
          Why CareerX is the Best?
        </div>
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
        {[0, 1, 2, 3, 4, 5].map((item, index) => (
          <div className="flex items-center" key={index}>
            <Image
              src={"/medal.svg"}
              alt={"Medal icon"}
              width={"60"}
              height="60"
              className="md:h-12 md:w-12 w-8 h-8"
            />
            <div className="text-white">
              <div className="md:text-xl font-semibold">
                Make a resume that wins interviews
              </div>
              <div className="text-sm md:text-base">
                Make your own resume easily with the help of AI and customize
                all content
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-white py-4 px-6 rounded-xl font-medium text-bluePrimary hover:bg-gray-50 transition duration-100">
          Build My Resume
        </button>
      </div>
    </div>
  );
};

export default WhyCareerX;
