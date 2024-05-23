import SectionHeading from "@/components/Common/SectionHeading";
import Image from "next/image";
import React from "react";

type Props = {};

const Features = (props: Props) => {
  return (
    <div className="container mt-28">
      <SectionHeading
        title={"Features Designed to Help You Win Your Dream Job"}
      />

      <div className="grid md:grid-cols-2 gap-5 md:gap-14 lg:gap-20 mt-10">
        <div>
          <Image
            src={"/feature.png"}
            alt="feature"
            width={640}
            height={420}
            className="w-full h-[320px] rounded-xl"
          />
        </div>
        <div className="flex flex-col ">
          <div className="text-2xl md:text-4xl text-bluePrimary font-medium text-center md:text-left">
            AI Assistance at every stage
          </div>
          <div className="text-sm md:text-xl text-[#918EA4] text-justify md:mt-5">
            Getting that dream job can seem like an impossible task. We’re here
            to change that. Give yourself a real advantage with the best online
            resume maker: created by experts, improved by data, trusted by
            millions of professionals.
          </div>
          <div className="mt-5">
            <button className="px-6 md:py-4 py-2 w-full md:w-auto text-white bg-bluePrimary rounded-2xl hover:bg-lightBlue transition duration-100">
              Create Resume Now
            </button>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="text-2xl md:text-4xl text-bluePrimary font-medium text-center md:text-left">
            Create resume targeted for any job description in minutes
          </div>
          <div className="text-sm md:text-xl text-[#918EA4] text-justify md:mt-5">
            Getting that dream job can seem like an impossible task. We’re here
            to change that. Give yourself a real advantage with the best online
            resume maker: created by experts, improved by data, trusted by
            millions of professionals.
          </div>
          <div className="mt-5">
            <button className="px-6 md:py-4 py-2 w-full md:w-auto text-white bg-bluePrimary rounded-2xl hover:bg-lightBlue transition duration-100">
              Create Resume Now
            </button>
          </div>
        </div>
        <div>
          <Image
            src={"/feature.png"}
            alt="feature"
            width={640}
            height={420}
            className="w-full h-[320px] rounded-xl"
          />
        </div>
        <div>
          <Image
            src={"/feature.png"}
            alt="feature"
            width={640}
            height={420}
            className="w-full h-[320px] rounded-xl"
          />
        </div>
        <div className="flex flex-col ">
          <div className="text-2xl md:text-4xl text-bluePrimary font-medium text-center md:text-left">
            Create resume with linkedIn or existing resume in minutes{" "}
          </div>
          <div className="text-sm md:text-xl text-[#918EA4] text-justify md:mt-5">
            Getting that dream job can seem like an impossible task. We’re here
            to change that. Give yourself a real advantage with the best online
            resume maker: created by experts, improved by data, trusted by
            millions of professionals.
          </div>
          <div className="mt-5">
            <button className="px-6 md:py-4 py-2 w-full md:w-auto text-white bg-bluePrimary rounded-2xl hover:bg-lightBlue transition duration-100">
              Create Resume Now
            </button>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="text-2xl md:text-4xl text-bluePrimary font-medium text-center md:text-left">
            AI to suggest to improve resume
          </div>
          <div className="text-sm md:text-xl text-[#918EA4] text-justify md:mt-5">
            Getting that dream job can seem like an impossible task. We’re here
            to change that. Give yourself a real advantage with the best online
            resume maker: created by experts, improved by data, trusted by
            millions of professionals.
          </div>
          <div className="mt-5">
            <button className="px-6 md:py-4 py-2 w-full md:w-auto text-white bg-bluePrimary rounded-2xl hover:bg-lightBlue transition duration-100">
              Create Resume Now
            </button>
          </div>
        </div>
        <div>
          <Image
            src={"/feature.png"}
            alt="feature"
            width={640}
            height={420}
            className="w-full h-[320px] rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
