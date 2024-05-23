import SectionHeading from "@/components/Common/SectionHeading";
import Image from "next/image";
import React from "react";

type Props = {};

const Examples = (props: Props) => {
  return (
    <div className="container mt-20">
      <SectionHeading title="Learn from Successful Resume Examples" />
      <div className="grid md:grid-cols-3 gap-5 pt-10">
        {[0, 1, 2].map((item, index) => (
          <div className="z-10 group relative cursor-pointer" key={index}>
            <Image
              src={"/resume.png"}
              width={"600"}
              height={"801"}
              alt={""}
              className="w-10/12 mx-auto z-10"
            />
            <button
              className={`${"group-hover:block hidden absolute z-50 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 "}  px-6 md:py-4 py-2 w-max  text-white bg-bluePrimary rounded-2xl hover:bg-lightBlue transition duration-100  `}
            >
              View Resume
            </button>
            <div className="bg-white rounded-xl shadow p-3 z-20">
              <div className="text-center text-3xl font-extrabold">
                <Image
                  src={"/quote.svg"}
                  width={"60"}
                  height={"60"}
                  alt={"quote"}
                  className="w-12 mx-auto "
                />
                <div className="text-center text-base font-normal my-3">
                  Lorem ipsum dolor sit amet consectetur. Auctor lacus ornare
                  pellentesque turpis habitant. Volutpat faucibus nisl pharetra
                  at mi magna maecenas porttitor nisi.
                </div>
                <Image
                  src={"/profile.png"}
                  width={"60"}
                  height={"60"}
                  alt={"quote"}
                  className="w-16 mx-auto -mb-8"
                />
              </div>
            </div>
            <div className="mt-7 text-center">
              <div className="text-bluePrimary font-semibold text-lg">
                Software Developer
              </div>
              <div className="text-bluePrimary text-base">
                Phakamile Sikali{" "}
              </div>
              <div className="flex justify-center space-x-6 w-full items-center ">
                <div className="text-sm font-medium text-bluePrimary whitespace-nowrap">
                  Hired By
                </div>
                <Image
                  src={"/Linkedin.svg"}
                  alt={"Comapny"}
                  width={100}
                  height={40}
                  className="h-5 w-auto "
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="px-10 md:py-4 py-2 w-full md:w-auto text-white bg-bluePrimary rounded-2xl hover:bg-lightBlue transition duration-100">
          View All Resumes
        </button>
      </div>
    </div>
  );
};

export default Examples;
