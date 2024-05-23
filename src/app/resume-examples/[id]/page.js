"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <div className=" md:my-20">
      <div className="container w-full text-center text-[30px]  leading-8 text-bluePrimary font-medium">
        Software Engineer
      </div>
      <div className="container justify-center flex space-x-2 mt-2 items-end mx-auto w-max mb-20">
        <div className="text-[28px] leading-8 mt-px font-medium text-bluePrimary whitespace-nowrap">
          Hired By:
        </div>
        <Image
          src={"/walmart.svg"}
          alt={"logo"}
          width={100}
          height={40}
          className="h-7 w-auto "
        />
      </div>

      {/* Resume */}
      <div className="py-20">
        <div className="px-3 w-full flex justify-center bg-[#77A9EE] bg-opacity-15">
          <div>
            <Image
              src={"/Resume2.png"}
              width={"600"}
              height={"801"}
              alt={""}
              className="-mt-32 rounded-xl mx-auto z-10"
            />
            <div className="w-full flex justify-center my-10">
              <button className="bg-bluePrimary py-4 px-6 rounded-xl text-white hover:bg-lightBlue transition duration-100">
                Create Similar Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
